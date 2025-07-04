'use client';
import { FcGoogle } from "react-icons/fc";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { authWithGoogle } from '@/lib/firebase/authWithGoogle';

export default function GoogleAuthButton({ action = 'login' }: { action?: 'login' | 'register' }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);

  const handleGoogleAuth = async () => {
    try {
      setLoading(true);
      const { isNewUser } = await authWithGoogle();
      if (isNewUser) {
        setAccountCreated(true);
        setTimeout(() => {
          setAccountCreated(false);
          // Redirection après affichage du message
          const redirectUrl = new URLSearchParams(window.location.search).get('redirect') || '/home';
          router.push(redirectUrl);
        }, 2500);
        return;
      }
      // Redirection immédiate si ce n'est pas un nouvel utilisateur
      const redirectUrl = new URLSearchParams(window.location.search).get('redirect') || '/home';
      router.push(redirectUrl);
    } catch (error) {
      console.error("Erreur:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {accountCreated && (
        <div className="w-full mb-2 py-2 px-4 rounded bg-green-100 text-green-800 text-center text-sm">
          🎉 Bienvenue, votre compte a été créé !
        </div>
      )}
      <button
        onClick={handleGoogleAuth}
        disabled={loading}
        className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border transition-colors ${
          loading 
            ? 'bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600 cursor-wait' 
            : 'bg-white border-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600'
        }`}
      >
        {loading ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <>
            <FcGoogle className="h-5 w-5" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {action === 'login' ? 'Se connecter avec Google' : 'S\'inscrire avec Google'}
            </span>
          </>
        )}
      </button>
    </>
  );
}