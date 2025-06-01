import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { updateUserAccess } from "@/lib/user";

// Cette fonction vérifie la signature du webhook Stripe
const verifyStripeSignature = (
  payload: string,
  signature: string,
  webhookSecret: string
) => {
  try {
    return stripe.webhooks.constructEvent(
      payload,
      signature,
      webhookSecret
    );
  } catch (err) {
    console.error(`Webhook signature verification failed: ${err}`);
    return null;
  }
};

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = req.headers.get("stripe-signature") || "";
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
    
    console.log("Webhook reçu - Signature:", signature.substring(0, 10) + "...");
    console.log("Webhook Secret disponible:", !!webhookSecret);

    if (!webhookSecret) {
      console.error("STRIPE_WEBHOOK_SECRET manquant dans les variables d'environnement");
      return NextResponse.json(
        { error: "Configuration du webhook manquante" },
        { status: 500 }
      );
    }

    // Vérifier la signature du webhook
    const event = verifyStripeSignature(body, signature, webhookSecret);
    
    if (!event) {
      console.error("Échec de la vérification de signature du webhook");
      return NextResponse.json(
        { error: "Webhook signature verification failed" },
        { status: 400 }
      );
    }
    
    console.log("Événement Stripe reçu:", event.type);

    // Traiter les événements Stripe
    switch (event.type) {
      case "checkout.session.completed":
        try {
          const session = event.data.object as Stripe.Checkout.Session;
          
          // Extraire les métadonnées
          const { userId } = session.metadata || {};
          
          console.log("Métadonnées de session:", { userId, paymentStatus: session.payment_status });
          
          if (!userId) {
            console.error("userId manquant dans les métadonnées de la session");
            return NextResponse.json(
              { error: "userId manquant dans les métadonnées" },
              { status: 400 }
            );
          }
          
          if (session.payment_status === "paid") {
            // Mettre à jour l'accès de l'utilisateur
            await updateUserAccess(userId);
            console.log(`Accès premium activé pour l'utilisateur: ${userId}`);
          } else {
            console.log(`Paiement non complété. Statut: ${session.payment_status}`);
          }
        } catch (err) {
          console.error("Erreur lors du traitement de checkout.session.completed:", err);
          return NextResponse.json(
            { error: "Erreur lors du traitement de l'événement de paiement" },
            { status: 500 }
          );
        }
        break;
        
      case "payment_intent.succeeded":
        console.log("Payment intent réussi - ID:", (event.data.object as Stripe.PaymentIntent).id);
        break;
        
      default:
        console.log(`Événement non géré: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Erreur dans le webhook Stripe:", err);
    return NextResponse.json(
      { error: "Erreur lors du traitement du webhook" },
      { status: 500 }
    );
  }
}
