'use client';
import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/lib/firebase/firebase';
import { toast } from 'react-hot-toast';
import Link from 'next/link';
import { Mail, Loader2, ArrowLeft } from 'lucide-react';

import HomeNavBar from '@/components/navigation/HomeNavBar';

export default function PasswordReset() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Veuillez entrer votre adresse email");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Veuillez entrer une adresse email valide");
      return;
    }

    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success(
        <div>
          <p className="font-medium">Email envoyé avec succès !</p>
          <p className="text-sm">Consultez votre boîte de réception et vos spams</p>
        </div>,
        { 
          duration: 5000,
          icon: '✉️',
          style: {
            background: '#f0fdf4',
            color: '#166534',
            border: '1px solid #bbf7d0'
          }
        }
      );
      setEmailSent(true);
    } catch (error: any) {
      let errorMessage = "Une erreur est survenue";
      let toastStyle = {};
      
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = "Aucun compte trouvé avec cet email";
          break;
        case 'auth/invalid-email':
          errorMessage = "Adresse email invalide";
          break;
        case 'auth/too-many-requests':
          errorMessage = "Trop de tentatives. Veuillez réessayer plus tard";
          toastStyle = {
            background: '#fffbeb',
            color: '#b45309',
            border: '1px solid #fcd34d'
          };
          break;
      }
      
      toast.error(errorMessage, { 
        duration: 4000,
        style: toastStyle
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <HomeNavBar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">

        <div className="w-full max-w-md">
          <Link 
            href="/account/login" 
            className="flex items-center text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Retour à la connexion
          </Link>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/20 mb-4">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {emailSent ? "Consultez votre email" : "Mot de passe oublié ?"}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {emailSent 
                    ? "Nous avons envoyé les instructions pour réinitialiser votre mot de passe."
                    : "Entrez votre email pour recevoir un lien de récupération."}
                </p>
              </div>

              {!emailSent ? (
                <form onSubmit={handlePasswordReset} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Adresse email
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="votre@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full flex justify-center items-center px-4 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all ${
                        loading ? 'opacity-80 cursor-not-allowed' : ''
                      }`}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="animate-spin mr-2 h-5 w-5" />
                          Envoi en cours...
                        </>
                      ) : (
                        'Envoyer le lien de récupération'
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center space-y-6">
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800">
                    <p className="text-green-700 dark:text-green-300">
                      Si vous ne recevez pas l'email, vérifiez votre dossier spam ou contactez notre support.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setEmail('');
                      setEmailSent(false);
                    }}
                    className="w-full px-4 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
                  >
                    Réessayer avec un autre email
                  </button>
                </div>
              )}
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700/30 px-8 py-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                Vous n'avez pas de compte ?{' '}
                <Link href="/account/register" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                  Créer un compte
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}