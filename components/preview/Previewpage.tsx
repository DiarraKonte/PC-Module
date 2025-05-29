"use client"
import { useAuth } from '@/lib/AuthContext';
import { PreviewModuleCard } from '@/components/preview/ModuleCard';
import { MODULES } from '@/modules';

export default function PreviewPage() {
  const { user, isAuthenticated, premium } = useAuth();

  // Exemple de données de modules
  
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nos Modules de Formation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez tous nos contenus pour maîtriser votre PC gaming
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(MODULES).map((module) => (
            <PreviewModuleCard
              key={module.meta.slug}
              slug={module.meta.slug}
              title={module.meta.title}
              description={module.meta.description}
            />
          ))}
        </div>

        {Object.values(MODULES).some(m => m.meta.price > 0 && !premium.hasPremiumAccess) && (
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Débloquez tous les modules premium
            </h2>
            <a
              href="/pricing"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
            >
              Obtenir l'accès complet
            </a>
          </div>
        )}
      </div>
    </div>
  );
}