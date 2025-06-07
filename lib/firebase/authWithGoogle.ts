import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from './firebase';
import { addUserToFirestore } from './addUserToFirestore';

export async function authWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    
    // Sauvegarde dans Firestore
    const isNewUser = await addUserToFirestore({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      provider: 'google',
    });

    return { user, isNewUser };
  } catch (error) {
    console.error("Erreur lors de l'authentification Google:", error);
    throw error;
  }
}