'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '@/lib/firebase/firebase';
import { Loader2, User, Mail, Lock, Check } from 'lucide-react';
import GoogleAuthButton from '../ui/button/GoogleAuth';
import { addUserToFirestore } from '@/lib/firebase/addUserToFirestore';
import { toast } from 'react-hot-toast';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    pseudo: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState({
    email: false,
  });
  const [passwordStrength, setPasswordStrength] = useState(0);


  // Soumission du formulaire d'inscription
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading({ email: true });

    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      setLoading({ email: false });
      return;
    }
    if (!formData.pseudo || !formData.email || !formData.password) {
      setError("Tous les champs sont obligatoires.");
      setLoading({ email: false });
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;
      await updateProfile(user, { displayName: formData.pseudo });

      await addUserToFirestore({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        provider: 'email',
      });

      toast.success('Inscription réussie !');
      router.push('/home');
    } catch (error: unknown) {
      const errorMessages = {
        'auth/email-already-in-use': "Cet email est déjà utilisé",
        'auth/invalid-email': "Email invalide",
        'auth/weak-password': "Mot de passe trop faible",
        'default': "Une erreur est survenue lors de l'inscription"
      };
      
      setError(errorMessages[(error as { code: string }).code as keyof typeof errorMessages] || errorMessages.default);
    } finally {
      setLoading({ email: false });
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'password') {
      let strength = 0;
      if (value.length > 0) strength += 1;
      if (value.length >= 8) strength += 1;
      if (/[A-Z]/.test(value)) strength += 1;
      if (/[0-9]/.test(value)) strength += 1;
      if (/[^A-Za-z0-9]/.test(value)) strength += 1;
      setPasswordStrength(strength);
    }
  };

  const getPasswordStrengthColor = () => {
    switch (passwordStrength) {
      case 0: return 'bg-gray-200';
      case 1: return 'bg-red-500';
      case 2: return 'bg-yellow-500';
      case 3: return 'bg-blue-500';
      case 4: return 'bg-green-500';
      case 5: return 'bg-green-600';
      default: return 'bg-gray-200';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-md space-y-6 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
            <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
            Créer un compte
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Déjà un compte ?{' '}
            <Link 
              href="/account/login" 
              className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 hover:underline"
            >
              Se connecter
            </Link>
          </p>
        </div>

        {/* Bouton Google */}
          <GoogleAuthButton action='register'/>        

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

        {error && (
          <div className="p-3 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="pseudo" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Pseudo
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="pseudo"
                name="pseudo"
                type="text"
                value={formData.pseudo}
                onChange={handleChange}
                placeholder="Votre pseudo"
                className="pl-10 w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                required
                minLength={3}
              />
            </div>
            {formData.pseudo.length > 0 && formData.pseudo.length < 3 && (
              <p className="mt-1 text-xs text-red-500">Minimum 3 caractères</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre@email.com"
                className="pl-10 w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Mot de passe
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="pl-10 w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                required
                minLength={6}
              />
            </div>
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div 
                  className={`h-1.5 rounded-full ${getPasswordStrengthColor()}`} 
                  style={{ width: `${(passwordStrength / 5) * 100}%` }}
                ></div>
              </div>
              <ul className="grid grid-cols-5 gap-1 mt-1 text-xs text-gray-500 dark:text-gray-400">
                <li className={passwordStrength >= 1 ? 'text-blue-600 dark:text-blue-400' : ''}>Faible</li>
                <li className={passwordStrength >= 2 ? 'text-blue-600 dark:text-blue-400' : ''}>Moyen</li>
                <li className={passwordStrength >= 3 ? 'text-blue-600 dark:text-blue-400' : ''}>Bon</li>
                <li className={passwordStrength >= 4 ? 'text-blue-600 dark:text-blue-400' : ''}>Fort</li>
                <li className={passwordStrength >= 5 ? 'text-blue-600 dark:text-blue-400' : ''}>Très fort</li>
              </ul>
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Confirmer le mot de passe
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="pl-10 w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                required
                minLength={6}
              />
            </div>
            {formData.password && formData.confirmPassword && (
              <div className="mt-1 flex items-center">
                {formData.password === formData.confirmPassword ? (
                  <>
                    <Check className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-xs text-green-600 dark:text-green-400">Les mots de passe correspondent</span>
                  </>
                ) : (
                  <span className="text-xs text-red-500 dark:text-red-400">Les mots de passe ne correspondent pas</span>
                )}
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={loading.email}
            className={`w-full flex justify-center items-center py-2.5 px-4 rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${
              loading.email ? 'opacity-80 cursor-not-allowed' : ''
            }`}
          >
            {loading.email ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Création du compte...
              </>
            ) : 'S\'inscrire'}
          </button>
        </form>

        <div className="text-center text-xs text-gray-500 dark:text-gray-400">
          En vous inscrivant, vous acceptez nos{' '}
          <Link href="/terms" className="text-blue-600 hover:text-blue-500 dark:text-blue-400 hover:underline">
            Conditions d&apos;utilisation
          </Link>{' '}
          et notre{' '}
          <Link href="/privacy" className="text-blue-600 hover:text-blue-500 dark:text-blue-400 hover:underline">
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </div>
  );
}