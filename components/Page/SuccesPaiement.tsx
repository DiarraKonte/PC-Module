"use client"
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import NavBar from '@/components/navigation/HomeNavBar';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [sessionData, setSessionData] = useState<any>(null);

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    
    if (sessionId) {
      setSessionData({ sessionId });
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [searchParams]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavBar />
      
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900">
            <CheckCircleIcon className="h-6 w-6 text-green-600 dark:text-green-300" />
          </div>
          
          <h1 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">
            Paiement réussi !
          </h1>
          
          {loading ? (
            <p className="mt-4 text-gray-600 dark:text-gray-300">Vérification en cours...</p>
          ) : (
            <>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Merci pour votre achat. Votre accès premium a été activé.
              </p>
              
              {sessionData?.customer && (
                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-left">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">Récapitulatif</h3>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    <p>Email: {sessionData.customer.email}</p>
                    <p>Montant: {sessionData.amount_total / 100}€</p>
                  </div>
                </div>
              )}
            </>
          )}

          <div className="mt-8">
            <Link
              href="/home"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Accéder aux modules premium
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}