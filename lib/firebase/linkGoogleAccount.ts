import { auth, googleProvider } from './firebase';
import { linkWithPopup } from 'firebase/auth';

/**
 * Lie un compte Google au compte actuellement connecté
 */
export async function linkGoogleAccount() {
  const currentUser = auth.currentUser;
  
  if (!currentUser) {
    throw new Error("Aucun utilisateur connecté pour effectuer le linking.");
  }

  try {
    const result = await linkWithPopup(currentUser, googleProvider);
    console.log("Compte Google lié :", result.user);
    return result.user;
  } catch (error: any) {
    if (error.code === 'auth/credential-already-in-use') {
      console.error("Ce compte Google est déjà utilisé par un autre utilisateur.");
    } else {
      console.error("Erreur lors du linkage Google :", error);
    }
    throw error;
  }
}
