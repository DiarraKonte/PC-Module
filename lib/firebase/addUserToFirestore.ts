import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

interface UserData {
  uid: string;
  email: string | null;
  displayName?: string | null;
  photoURL?: string | null;
}

export async function addUserToFirestore(user: UserData) {
  const userRef = doc(db, 'users', user.uid);

  // On récupère le document existant
  const userSnap = await getDoc(userRef);
  let hasPremiumAccess = false;
  if (userSnap.exists() && userSnap.data().hasPremiumAccess !== undefined) {
    hasPremiumAccess = userSnap.data().hasPremiumAccess;
  }

  await setDoc(userRef, {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName || '',
    photoURL: user.photoURL || '',
    hasPremiumAccess,
    createdAt: serverTimestamp(),
    lastLogin: serverTimestamp(),
    provider: 'google'
  }, { merge: true });
}