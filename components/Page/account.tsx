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
import { Crown } from 'lucide-react';
import { linkGoogleAccount } from '@/lib/firebase/linkGoogleAccount'; 
import Link from 'next/link';


export default function AccountPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { hasPremiumAccess } = useAuth(); 

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

  if (!user) {
    return null;
  }

  return (
    <>
      <NavBar />
      
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Mon compte
          </h1>

          <div className="flex flex-col items-center justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-blue-600">
                {user.displayName?.charAt(0) || 'U'}
              </span>
            </div>
            <h2 className="text-xl font-semibold">{user.displayName || 'Utilisateur'}</h2>
            <p className="text-gray-500 dark:text-gray-400">{user.email}</p>

            {hasPremiumAccess && (
              <div className='flex'>
                 <Crown className="w-4 h-4 text-yellow-500 mr-1" />
                <span className="text-xs text-yellow-600 dark:text-yellow-400">Compte Premium</span>
              </div>
            )}
          </div>

          {user.providerData.every((provider) => provider.providerId !== 'google.com') ? (
            <button
              onClick={async () => {
                try {
                  await linkGoogleAccount();
                  toast.success('Compte Google lié avec succès !');
                  const updatedUser = auth.currentUser;
                  setUser({ ...updatedUser } as User); 
                } catch (error: any) {
                  if (error.code === 'auth/credential-already-in-use') {
                    toast.error("Ce compte Google est déjà lié à un autre utilisateur.");
                  } else {
                    toast.error("Erreur lors du linkage du compte Google.");
                  }
                }
              }}
              className="w-full sm:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors mb-6"
            >
              Lier un compte Google
            </button>
          ) : (
            <p className="text-green-600 text-sm text-center mb-6">Compte Google lié</p>
          )}


          <DisplayUser user={user} />
        </div>

        <div className="space-y-8">
          <UpdateName user={user} />
          <UpdatePassword/>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Déconnexion</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Vous pouvez vous déconnecter à tout moment.
            </p>
            <button
              onClick={handleLogout}
              className="w-full sm:w-auto px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
            >
              Se déconnecter
            </button>

            
          </div>
        </div>
      </main>
    </>
  );
}