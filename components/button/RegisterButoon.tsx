'use client';

import Link from 'next/link';
import { UserPlus } from 'lucide-react';

export default function InscriptionButton() {
  return (
    <Link
      href="/account/register"
      className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition-colors"
    >
      <UserPlus className="w-4 h-4" />
      Inscription
    </Link>
  );
}