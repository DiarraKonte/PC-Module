'use client';

import Link from 'next/link';
import { LogIn } from 'lucide-react';

export default function ConnexionButton() {
  return (
    <Link
      href="/account/login"
      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors"
    >
      <LogIn className="w-4 h-4" />
      Connexion
    </Link>
  );
}
