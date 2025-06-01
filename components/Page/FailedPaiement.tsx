"use client"
import Link from 'next/link';
import NavBar from '@/components/navigation/HomeNavBar';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function CancelPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavBar />
      
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-900">
            <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600 dark:text-yellow-300" />
          </div>
          
          <h1 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">
            Paiement annulé
          </h1>
          
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Votre paiement n&apos;a pas été finalisé. Vous pouvez réessayer ou nous contacter si vous pensez qu&apos;il s&apos;agit d&apos;une erreur.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/pricing"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Réessayer le paiement
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}