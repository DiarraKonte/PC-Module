// UpdateNameForm.tsx
'use client';
import { useState } from 'react';
import { User, updateProfile } from 'firebase/auth';
import { toast } from 'react-hot-toast';

type Props = {
  user: User | null;
};

export default function UpdateName({ user }: Props) {
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [isLoading, setIsLoading] = useState(false);

  const validateName = () => {
    if (!displayName.trim()) {
      toast.error('Le nom ne peut pas être vide');
      return false;
    }
    return true;
  };

  const handleUpdateName = async () => {
    if (!user || !validateName()) return;
    
    setIsLoading(true);
    
    try {
      await updateProfile(user, { displayName });
      toast.success('Nom mis à jour avec succès !');
    } catch (error) {
      console.error(error);
      toast.error('Erreur lors de la mise à jour du nom');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Modifier le nom</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="display-name" className="block text-sm font-medium mb-1">
            Nom affiché
          </label>
          <input
            id="display-name"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            disabled={isLoading}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
            aria-describedby="name-help"
          />
          <p id="name-help" className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Ce nom sera visible pour les autres utilisateurs
          </p>
        </div>

        <button
          onClick={handleUpdateName}
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