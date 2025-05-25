import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

interface UserData {
  uid: string;
  email: string | null;
  displayName?: string | null;
  photoURL?: string | null;
}

export async function addUserToFirestore(user: UserData) {
  const userRef = doc(db, 'users', user.uid);

  await setDoc(userRef, {
    email: user.email,
    displayName: user.displayName || '',
    photoURL: user.photoURL || '',
    hasPremiumAccess: false,
    createdAt: serverTimestamp(),
    lastLogin: serverTimestamp(),
    provider: 'google' // Pour identifier la méthode de connexion
  }, { merge: true });
}