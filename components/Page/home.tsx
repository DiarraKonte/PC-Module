'use client'; 
import NavBar from '@/components/navigation/HomeNavBar';
import ModuleCard from '@/components/modules/ModuleCard';
import { MODULES } from '@/modules';
import { AuthGreeting } from '../account/AuthGreeting';

export default function HomePage() {
  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 py-20 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-400 mb-4">
            Bienvenue <AuthGreeting />
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Des modules interactifs pour apprendre à configurer, dépanner et optimiser ton PC comme un pro.
          </p>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-16 bg-white dark:bg-gray-950 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
            Modules disponibles
          </h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(MODULES).map((module) => (
              <ModuleCard 
                key={module.meta.slug}
                slug={module.meta.slug}
                title={module.meta.title}
                description={module.meta.description}
                paid={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400 border-t dark:border-gray-800">
        &copy; {new Date().getFullYear()} PC World. Tous droits réservés.
      </footer>
    </>
  );
}