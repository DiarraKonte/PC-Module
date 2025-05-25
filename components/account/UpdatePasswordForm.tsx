'use client';
import { useState } from 'react';
import { User, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { Eye, EyeOff } from 'lucide-react';

type Props = {
  user: User | null;
};

export default function UpdatePassword({ user }: Props) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPasswordError, setCurrentPasswordError] = useState('');
  const router = useRouter();

  const validateForm = () => {
    setCurrentPasswordError(''); // Réinitialise l'erreur à chaque validation
    
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error('Veuillez remplir tous les champs');
      return false;
    }
    
    if (newPassword.length < 6) {
      toast.error('Le nouveau mot de passe doit faire au moins 6 caractères');
      return false;
    }
    
    if (newPassword !== confirmPassword) {
      toast.error('Les nouveaux mots de passe ne correspondent pas');
      return false;
    }
    
    return true;
  };

  const handlePasswordChange = async () => {
    if (!user || !user.email || !validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Vérification du mot de passe actuel
      const credential = EmailAuthProvider.credential(
        user.email, 
        currentPassword
      );
      await reauthenticateWithCredential(user, credential);
      
      // Si on arrive ici, le mot de passe est correct
      setCurrentPasswordError('');
      
      // Mise à jour du mot de passe
      await updatePassword(user, newPassword);
      
      toast.success('Mot de passe mis à jour avec succès !');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error: any) {
      console.error(error);
      if (error.code === 'auth/wrong-password') {
        setCurrentPasswordError('Le mot de passe actuel est incorrect');
      } else if (error.code === 'auth/requires-recent-login') {
        toast.error('Session expirée, veuillez vous reconnecter');
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
        {/* Champ pour le mot de passe actuel */}
        <div>
          <label htmlFor="current-password" className="block text-sm font-medium mb-1">
            Mot de passe actuel
          </label>
          <div className="relative">
            <input
              id="current-password"
              type={showCurrentPassword ? "text" : "password"}
              value={currentPassword}
              onChange={(e) => {
                setCurrentPassword(e.target.value);
                setCurrentPasswordError(''); // Efface l'erreur quand l'utilisateur tape
              }}
              disabled={isLoading}
              className={`w-full px-3 py-2 border ${
                currentPasswordError ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 pr-10`}
            />
            <button
              type="button"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              aria-label={showCurrentPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
            >
              {showCurrentPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
          {currentPasswordError && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {currentPasswordError}
            </p>
          )}
        </div>

        {/* Nouveau mot de passe */}
        <div>
          <label htmlFor="new-password" className="block text-sm font-medium mb-1">
            Nouveau mot de passe
          </label>
          <div className="relative">
            <input
              id="new-password"
              type={showNewPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              disabled={isLoading}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              aria-label={showNewPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
            >
              {showNewPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Minimum 6 caractères
          </p>
        </div>

        {/* Confirmation du nouveau mot de passe */}
        <div>
          <label htmlFor="confirm-password" className="block text-sm font-medium mb-1">
            Confirmer le nouveau mot de passe
          </label>
          <div className="relative">
            <input
              id="confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={isLoading}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              aria-label={showConfirmPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
            >
              {showConfirmPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>

        <button
          onClick={handlePasswordChange}
          disabled={isLoading}
          className={`w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none transition-all ${
            isLoading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Mise à jour...
            </span>
          ) : 'Mettre à jour le mot de passe'}
        </button>
      </div>
    </div>
  );
}