'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/app/account/firebase/firebase';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import DisplayUser from '@/components/account/ProfileCard';
import UpdateName from '@/components/account/UpdateNameForm';
import UpdatePassword from '@/components/account/UpdatePasswordForm';
import { toast } from 'react-hot-toast';
import NavBar from '@/components/navigation/HomeNavBar'; 

export default function AccountPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        router.push('/account/login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
      try {
        await signOut(auth);
        toast.success('Déconnecté avec succès');
        router.push('/account/login');
      } catch (error) {
        console.error(error);
        toast.error('Erreur lors de la déconnexion');
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <>
      {/* ✅ Navbar en haut de page */}
      <NavBar />
      
      {/* Contenu principal */}
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Mon compte</h1>
          <DisplayUser user={user} />
        </div>

        <div className="space-y-8">
          <UpdateName user={user} />
          <UpdatePassword user={user} />
          
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Déconnexion</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
            </p>
            <div className="flex justify-center">
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
              >
                Se déconnecter
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}