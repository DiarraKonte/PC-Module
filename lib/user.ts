import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY!)
    ),
  });
}

export async function updateUserAccess(userId: string) {
  console.log(`Début de mise à jour de l'accès pour l'utilisateur: ${userId}`);

  try {
    if (!userId) {
      throw new Error("userId est requis pour mettre à jour l'accès");
    }

    const userRef = admin.firestore().collection('users').doc(userId);
    const userDoc = await userRef.get();

    if (userDoc.exists) {
      console.log(`Mise à jour de l'utilisateur existant: ${userId}`);
      await userRef.update({
        hasPremiumAccess: true,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        paymentStatus: 'completed'
      });
    } else {
      console.log(`Création d'un nouveau document utilisateur pour: ${userId}`);
      await userRef.set({
        hasPremiumAccess: true,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        paymentStatus: 'completed'
      });
    }

    // Enregistrement de l'historique de paiement
    try {
      const paymentHistoryRef = admin.firestore()
        .collection('paymentHistory')
        .doc(`${userId}_${Date.now()}`);

      await paymentHistoryRef.set({
        userId,
        amount: 1900,
        currency: 'eur',
        status: 'completed',
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      });

      console.log(`Historique de paiement enregistré avec succès: ${paymentHistoryRef.path}`);
    } catch (historyError) {
      console.error('Erreur lors de l\'enregistrement de l\'historique de paiement:', historyError);
    }

    console.log(`Mise à jour de l'accès utilisateur terminée avec succès pour: ${userId}`);
    return true;
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'accès utilisateur:', error);
    throw error;
  }
}
