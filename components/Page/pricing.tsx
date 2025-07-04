"use client";
import React from 'react';
import NavBar from '@/components/navigation/HomeNavBar';
import { useAuth } from '@/lib/AuthContext';
import { doc, updateDoc, getFirestore } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Pricing() {
  const { isAuthenticated, loading, user } = useAuth();
  const [isUpdating, setIsUpdating] = useState(false);
  const router = useRouter();

  const activatePremium = async () => {
    if (!user?.uid) return;
    
    try {
      setIsUpdating(true);
      const db = getFirestore();
      await updateDoc(doc(db, 'users', user.uid), {
        hasPremiumAccess: true,
        premiumActivatedAt: new Date().toISOString()
      });
      // Rediriger vers la page d'accueil après l'activation
      router.push('/home');
    } catch (error) {
      console.error('Erreur lors de l\'activation du premium:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  const plan = {
    name: 'Accès à vie',
    price: 'Gratuit',

    description: 'Pas besoin de payer pour accéder à tous les modules',
    features: [
      'Accès complet à tous les modules',
      'Support prioritaire',
    ],
    promoLabel: 'Offre de lancement limitée',
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
        <NavBar />
        <main className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <NavBar />

      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text dark:from-blue-400 dark:to-purple-400">
            Offre Unique
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4">
          </p>

          <span className="inline-block bg-yellow-400 text-yellow-900 font-semibold px-3 py-1 rounded-full text-sm mb-6 animate-pulse">
            {plan.promoLabel}
          </span>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{plan.description}</p>

            <div className="mb-6 flex items-center justify-center space-x-3">              <span className="text-4xl font-extrabold text-green-600">{plan.price}</span>
            </div>

            <ul className="space-y-3 mb-8 text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={isAuthenticated ? activatePremium : undefined}
              disabled={isUpdating}
              className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 md:py-4 md:text-lg md:px-10 transition-colors ${isUpdating ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isUpdating ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Activation en cours...
                </>
              ) : isAuthenticated ? "Activer l'accès premium" : "Se connecter pour activer"}
            </button>

            {!isAuthenticated && (
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Vous avez déjà un compte ?{' '}
                <a 
                  href="/account/login" 
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Connectez-vous
                </a>
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
