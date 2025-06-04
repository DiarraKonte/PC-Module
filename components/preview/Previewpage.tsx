'use client';
import { useAuth } from '@/lib/AuthContext';
import Link from 'next/link';
import {
  CartemerePC,
  GPU_MODULES,
  CPU_MODULES,
  RAM_STORAGE_MODULES,
  OS_MODULES,
  VENTILATION_MODULES,
  PERIPHERIQUE_MODULES,
  PORTABLE_MODULES,
  IntroPC,
  ALIMENTATION_MODULES,
  MONTAGE_MODULES,
} from '@/modules';
import { ArrowRight, BookOpen } from 'lucide-react';

const categories = [
  { name: 'Introduction', modules: IntroPC },
  {name: 'Carte mere', modules: CartemerePC},
  { name: 'GPU', modules: GPU_MODULES },
  { name: 'CPU', modules: CPU_MODULES },
  { name: 'RAM', modules: RAM_STORAGE_MODULES },
  { name: 'Alimentation', modules: ALIMENTATION_MODULES },
  { name: 'Montage', modules: MONTAGE_MODULES },
  { name: 'Système d’exploitation', modules: OS_MODULES },
  { name: 'Ventilation & Refroidissement', modules: VENTILATION_MODULES },
  { name: 'PC Portable', modules: PORTABLE_MODULES },
  { name: 'Périphériques gaming', modules: PERIPHERIQUE_MODULES },
];

export default function PreviewPage() {
  const { user, premium } = useAuth(); // suppose qu'on a aussi `user`

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-200">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4 shadow-inner">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Nos modules</h1>
          <p className="text-lg md:text-xl opacity-90">
            Découvrez tous nos contenus pour maîtriser votre PC gaming
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-14">
          {categories.map(({ name, modules }, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {name}
                </h2>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {Object.keys(modules).length} module{Object.keys(modules).length > 1 ? 's' : ''}
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.values(modules).map((mod, idx) => (
                  <ModuleCard
                    key={idx}
                    mod={mod}
                    isPremium={mod.meta.price > 0}
                    isAuthenticated={!!user}
                  />
                ))}
              </div>
            </div>
          ))}

          {!premium.hasPremiumAccess && (
            <div className="bg-blue-600 dark:bg-blue-700 text-white rounded-xl p-8 text-center shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Débloque tous les modules premium</h3>
              <p className="mb-5 text-sm md:text-base text-blue-100">
                Obtiens un accès illimité à l’ensemble des modules.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
              >
                Accéder à l’offre premium <ArrowRight size={18} />
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

import type { ModuleData } from './Previewpage.types';

function ModuleCard({ mod, isPremium, isAuthenticated}: {
  mod: ModuleData;
  isPremium: boolean;
  isAuthenticated: boolean;
}) {



  return (
    <Link
      href={isAuthenticated ? `/modules/${mod.meta.slug}` : '/account/login'}
      className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm hover:shadow-md transition hover:-translate-y-1 hover:border-blue-500 relative"
    >
      <div className="flex items-center justify-between mb-3">
        <BookOpen className="text-blue-500 group-hover:text-blue-600" size={22} />
        {isPremium && (
          <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
            Premium
          </span>
        )}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
        {mod.meta.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
        {mod.meta.description || 'Découvre ce module'}
      </p>
    </Link>
  );
}