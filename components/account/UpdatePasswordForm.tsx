// UpdatePasswordForm.tsx
'use client';
import { useState } from 'react';
import { User, updatePassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import NavBar from '../navigation/HomeNavBar';

type Props = {
  user: User | null;
};

export default function UpdatePassword({ user }: Props) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const validatePassword = () => {
    if (!newPassword || !confirmPassword) {
      toast.error('Veuillez remplir tous les champs');
      return false;
    }
    
    if (newPassword.length < 6) {
      toast.error('Le mot de passe doit faire au moins 6 caractères');
      return false;
    }
    
    if (newPassword !== confirmPassword) {
      toast.error('Les mots de passe ne correspondent pas');
      return false;
    }
    
    return true;
  };

  const handlePasswordChange = async () => {
    if (!user || !validatePassword()) return;
    
    setIsLoading(true);
    
    try {
      await updatePassword(user, newPassword);
      toast.success('Mot de passe mis à jour avec succès !');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error: any) {
      console.error(error);
      if (error.code === 'auth/requires-recent-login') {
        toast.error('Veuillez vous reconnecter pour changer votre mot de passe');
        router.push('/account/login');
      } else {
        toast.error("Erreur lors de la mise à jour du mot de passe");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
  
    <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Changer le mot de passe</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="new-password" className="block text-sm font-medium mb-1">
            Nouveau mot de passe
          </label>
          <input
            id="new-password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            disabled={isLoading}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
            aria-describedby="password-help"
          />
          <p id="password-help" className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Minimum 6 caractères
          </p>
        </div>

        <div>
          <label htmlFor="confirm-password" className="block text-sm font-medium mb-1">
            Confirmer le mot de passe
          </label>
          <input
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={isLoading}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
          />
        </div>

        <button
          onClick={handlePasswordChange}
          disabled={isLoading}
          className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors ${
            isLoading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Mise à jour...
            </span>
          ) : 'Mettre à jour'}
        </button>
      </div>
    </div>
  );
}