import { NextResponse } from "next/server";
import Stripe from "stripe";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-04-30.basil",
});

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature")!;
  const body = await req.text();

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    if (err instanceof Error) {
      console.error(`Webhook Error: ${err.message}`);
    } else {
      console.error("Webhook Error:", err);
    }
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const userId = session.metadata?.userId;

    if (userId) {
      try {
        const userRef = doc(db, "users", userId);
        await setDoc(userRef, {
          hasPremiumAccess: true,
          premiumUntil: null, 
          subscriptionId: session.id,
          lastPayment: new Date(),
          paymentType: "lifetime", 
          productId: session.metadata?.productId 
        }, { merge: true });

        console.log(`Accès à vie activé pour l'utilisateur ${userId}`);
      } catch (firestoreError) {
        console.error("Firestore error:", firestoreError);
      }
    }
  }

  return NextResponse.json({ received: true });
}