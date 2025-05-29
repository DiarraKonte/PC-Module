'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase/firebase';
import { FcGoogle } from "react-icons/fc";
import { Loader2, Zap } from 'lucide-react';
import { toast } from 'react-hot-toast'; // Import de react-hot-toast
import GoogleAuthButton from '../ui/button/GoogleAuth';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState({
    email: false,
    google: false
  });

  const handleGoogleLogin = async () => {
    try {
      setLoading(prev => ({ ...prev, google: true }));
      setError('');
      
      await signInWithPopup(auth, googleProvider);
      toast.success('Connexion réussie !'); // Message de succès
      const redirectUrl = new URLSearchParams(window.location.search).get('redirect') || '/home';
      router.push(redirectUrl);
    } catch (err: any) {
      setError(err.message || "Erreur lors de la connexion avec Google");
    } finally {
      setLoading(prev => ({ ...prev, google: false }));
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!formData.email || !formData.password) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    setLoading(prev => ({ ...prev, email: true }));

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      toast.success('Connexion réussie !'); 
      const redirectUrl = new URLSearchParams(window.location.search).get('redirect') || '/home';
      router.push(redirectUrl);
    } catch (error: any) {
      const errorMessages = {
        'auth/user-not-found': "Aucun compte associé à cet email",
        'auth/wrong-password': "Mot de passe incorrect",
        'auth/invalid-email': "Email invalide",
        'auth/user-disabled': "Compte désactivé",
        'auth/too-many-requests': "Trop de tentatives. Réessayez plus tard",
        'default': "Une erreur est survenue lors de la connexion"
      };
      
      setError(errorMessages[error.code as keyof typeof errorMessages] || errorMessages.default);
    } finally {
      setLoading(prev => ({ ...prev, email: false }));
    }
  };
  // Handle input changes for email and password fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-md space-y-8 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
        <div className="text-center">
          <Zap className="mx-auto h-12 w-12 text-blue-500" />
          <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
            Content de vous revoir
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Connectez-vous pour accéder à votre espace
          </p>
        </div>

        {/* Connexion Google */}
             <GoogleAuthButton action="login"/>


        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-600" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
              Ou
            </span>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {error && (
            <div className="p-3 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Adresse email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre@email.com"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                Se souvenir de moi
              </label>
            </div>

            <Link 
              href="/forgot-password" 
              className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 hover:underline"
            >
              Mot de passe oublié ?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading.email}
            className={`w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${
              loading.email ? 'opacity-80 cursor-not-allowed' : ''
            }`}
          >
            {loading.email ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Connexion...
              </>
            ) : 'Se connecter'}
          </button>
        </form>

        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          Pas encore de compte ?{' '}
          <Link 
            href="/account/register" 
            className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 hover:underline"
          >
            S'inscrire
          </Link>
        </div>
      </div>
    </div>
  );
}