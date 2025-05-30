'use client';
import Link from 'next/link';
import { Lock } from 'lucide-react';

export default function UpdatePasswordForm() {
  return (
    <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
        <Lock className="w-5 h-5 text-blue-600" />
        Sécurité du compte
      </h2>

      <Link
        href="/account/change-pwd"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-md transition-colors"
      >
        Modifier le mot de passe
      </Link>
    </div>
  );
}
