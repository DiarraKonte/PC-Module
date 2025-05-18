'use client';
import Link from 'next/link';
import { BadgeCheck, Lock } from 'lucide-react';

// Types pour une meilleure structure de données
export type ModuleCardProps = {
  slug: string;
  title: string;
  description: string;
  paid?: boolean;
};

// Composant expertisé pour bien présenter un module de choix PC gaming
export default function ModuleCard({ slug, title, description, paid = true }: ModuleCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-md dark:shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white truncate" title={title}>
            {title}  
          </h2>
          {paid ? (
            <span className="text-sm bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 px-2 py-1 rounded inline-flex items-center gap-1">
              <Lock className="w-4 h-4" /> Payant
            </span>
          ) : (
            <span className="text-sm bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 px-2 py-1 rounded inline-flex items-center gap-1">
              <BadgeCheck className="w-4 h-4" /> Gratuit
            </span>
          )}
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        <Link
          href={`/modules/${slug}`}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition"
        >
          Découvrir le module
        </Link>
      </div>
    </div>
  );
}