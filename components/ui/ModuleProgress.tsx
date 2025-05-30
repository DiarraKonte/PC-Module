// components/modules/ModuleProgress.tsx
"use client";

import { useAuth } from '@/lib/AuthContext';

export default function ModuleProgress({ moduleSlug }: { moduleSlug: string }) {
  const { user } = useAuth();
  
  // Ici vous devriez récupérer la vraie progression depuis votre base de données
  const progress = 0; // Remplacer par la vraie valeur
  
  return (
    <div className="flex items-center gap-2">
      <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className="bg-blue-600 h-2 rounded-full" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <span className="text-sm text-gray-600 dark:text-gray-300">
        {progress}% complété
      </span>
    </div>
  );
}