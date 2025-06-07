import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

interface UserData {
  uid: string;
  email: string | null;
  displayName?: string | null;
  provider?: string;
}

export async function addUserToFirestore(user: UserData): Promise<boolean> {
  const userRef = doc(db, 'users', user.uid);
  const userSnap = await getDoc(userRef);
  const isNewUser = !userSnap.exists();
  let hasPremiumAccess = false;
  if (!isNewUser && userSnap.data().hasPremiumAccess !== undefined) {
    hasPremiumAccess = userSnap.data().hasPremiumAccess;
  }

  await setDoc(userRef, {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName || '',
    hasPremiumAccess,
    createdAt: serverTimestamp(),
    lastLogin: serverTimestamp(),
    provider: user.provider || 'email',
  }, { merge: true });

  return isNewUser;
}