// components/ProtectedRoute.tsx
'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../app/account/firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../app/account/firebase/firebase'; // ajuste si ton fichier est ailleurs

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push('/login');
        return;
      }

      // Vérifie dans Firestore si l'utilisateur a payé
      const userRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const data = userSnap.data();
        if (data.hasPremiumAccess === true) {
          setAuthorized(true);
        } else {
          router.push('/pricing');
        }
      } else {
        router.push('/pricing');
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) return <p>Chargement...</p>;

  return authorized ? <>{children}</> : null;
}
