'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase/firebase';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import DisplayUser from '@/components/account/ProfileCard';
import UpdateName from '@/components/account/UpdateNameForm';
import UpdatePassword from '@/components/account/UpdatePasswordForm';
import { toast } from 'react-hot-toast';
import NavBar from '@/components/navigation/HomeNavBar';
import { useAuth } from '@/lib/AuthContext';
import { Crown, LogOut, UserPlus } from 'lucide-react';
import { linkGoogleAccount } from '@/lib/firebase/linkGoogleAccount';
import { FirebaseError } from 'firebase/app';

export default function AccountPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { hasPremiumAccess } = useAuth();

  // Vérifie si l'utilisateur est connecté
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

  if (!user) return null;

  return (
    <>
      {/* Navbar */}
      <NavBar />

      {/* Page Content */}
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Profil Utilisateur */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 text-center transform transition-all hover:shadow-xl duration-300">
          <h1 className="text-3xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Mon Compte
          </h1>

          <div className="flex flex-col items-center justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-blue-600">
                {user.displayName?.charAt(0) || user.email?.charAt(0) || 'U'}
              </span>
            </div>
            <h2 className="text-xl font-semibold">{user.displayName || 'Utilisateur'}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{user.email}</p>

            {hasPremiumAccess && (
              <div className="mt-2 inline-flex items-center gap-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs px-3 py-1 rounded-full">
                <Crown size={14} />
                Premium
              </div>
            )}
          </div>

          {/* Lier Google */}
          {user.providerData.every((provider) => provider.providerId !== 'google.com') ? (
            <button
              onClick={async () => {
                try {
                  await linkGoogleAccount();
                  toast.success('Compte Google lié avec succès');
                  const updatedUser = auth.currentUser;
                  setUser(updatedUser);
                } catch (error) {
                  if (error instanceof FirebaseError) {
                    if (error.code === 'auth/credential-already-in-use') {
                      toast.error("Ce compte Google est déjà utilisé.");
                    } else {
                      toast.error("Erreur lors du lien avec Google");
                    }
                  } else {
                    toast.error("Erreur inconnue");
                  }
                }
              }}
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors mb-6"
            >
              <UserPlus size={18} /> Lier un compte Google
            </button>
          ) : (
            <p className="text-green-600 text-sm mb-6">✅ Compte Google lié</p>
          )}

          <DisplayUser user={user} />
        </section>

        <section className="space-y-6">
          <UpdateName user={user} />
          <UpdatePassword />
        </section>

        <section className="mt-8">
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Se déconnecter</h2>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
              >
                <LogOut size={18} /> Se déconnecter
              </button>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}