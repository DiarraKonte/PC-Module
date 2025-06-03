'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import NavBar from '@/components/navigation/HomeNavBar';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function SuccessPage() {
  const [progress, setProgress] = useState(0);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const hasVerified = localStorage.getItem('payment_verified');

    if (hasVerified === 'true') {
      // Le paiement a déjà été vérifié
      setProgress(100);
      setVerified(true);
      return;
    }

    // Simule la vérification du paiement
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setVerified(true);
            localStorage.setItem('payment_verified', 'true'); // Marquer comme vérifié
            return 100;
          }
          return prev + 5;
        });
      }, 150);

      return () => clearInterval(interval);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <NavBar />

      <main className="flex-1 flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-900 min-h-screen pt-20 pb-20">
        <div className="max-w-md w-full bg-white dark:bg-gray-850 rounded-2xl shadow-xl p-8 text-center transform transition-all hover:shadow-2xl duration-300 border border-gray-200 dark:border-gray-700">
          
          {/* Icône */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
            <CheckCircleIcon className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>

          {/* Titre */}
          <h1 className="mt-5 text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
            Paiement réussi !
          </h1>

          {/* Loader ou message */}
          <div className="mt-6">
            {!verified ? (
              <>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Vérification en cours...</p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </>
            ) : (
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                Merci pour votre achat. Votre accès premium a été activé.
              </p>
            )}
          </div>

          {/* Bouton principal */}
          <div className="mt-10">
            <Link
              href="/home"
              className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium text-sm md:text-base rounded-lg shadow-lg hover:shadow-xl transform transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Accéder aux modules premium
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>

          {/* Option secondaire */}
          <div className="mt-4">
            <Link
              href="/account"
              className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline"
            >
              Voir mon profil
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}