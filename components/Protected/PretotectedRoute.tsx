// components/ProtectedRoute.tsx
'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../lib/firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase/firebase';

type ProtectedRouteProps = {
  children: React.ReactNode;
  isFree?: boolean; // Si true, l'accès est autorisé sans authentification
};

export default function ProtectedRoute({ children, isFree = false }: ProtectedRouteProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      // Cas 1 : Module gratuit → accès libre
      if (isFree) {
        setAuthorized(true);
        setLoading(false);
        return;
      }

      // Cas 2 : Utilisateur non connecté → rediriger vers login
      if (!user) {
        router.push('/login');
        setLoading(false);
        return;
      }

      // Cas 3 : Utilisateur connecté → vérifier son abonnement
      try {
        const userDocRef = doc(db, 'users', user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();

          if (userData.hasPremiumAccess === true) {
            setAuthorized(true);
          } else {
            router.push('/pricing'); // Redirige vers page d'abonnement
          }
        } else {
          console.error("Utilisateur non trouvé dans Firestore");
          router.push('/error');
        }
      } catch (error) {
        console.error("Erreur lors de la vérification de l'accès:", error);
        router.push('/error');
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router, isFree]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600 mb-3"></div>
          <p className="text-gray-700 dark:text-gray-300">Chargement...</p>
        </div>
      </div>
    );
  }

  if (!authorized && !loading) {
    return null; // Ne rien afficher si pas autorisé et chargement terminé
  }

  return <>{children}</>;
}