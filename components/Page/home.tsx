'use client';

import NavBar from '@/components/navigation/HomeNavBar';
import { AuthGreeting } from '../account/AuthGreeting';
import ModuleCategoryCard from '@/components/modules/ModuleCategoryCard';
import {
  IntroPC,
  CartemerePC,
  GPU_MODULES,
  CPU_MODULES,
  RAM_STORAGE_MODULES,
  ALIMENTATION_MODULES,
  MONTAGE_MODULES,
  OS_MODULES,
  PORTABLE_MODULES,
  PERIPHERIQUE_MODULES,
  VENTILATION_MODULES,
  Bonus_MODULES,
} from '@/modules';
import { useAuth } from '@/lib/AuthContext';
import { Crown } from 'lucide-react';

export default function HomePage() {
  const { hasPremiumAccess } = useAuth();
  const categories = [
    {
      title: 'Introduction',
      modules: IntroPC,
    },
    {
      title: 'Carte-mère',
      modules: CartemerePC,
    },
    {
      title: 'Processeur (CPU)',
      modules: CPU_MODULES,
    },
    {
      title: 'Graphiques (GPU)',
      modules: GPU_MODULES,
    },
    {
      title: 'Stockage (SSD, HDD, NVMe) et Mémoire vive (RAM)',
      modules: RAM_STORAGE_MODULES,
    },
    {
      title: 'Alimentation (PSU)',
      modules: ALIMENTATION_MODULES,
    },
    {
      title: 'Montage',
      modules: MONTAGE_MODULES,
    },
      {
      title: 'Systèmes d\'exploitation (OS)',
      modules: OS_MODULES,
    },
    {
      title: 'Portable',
      modules: PORTABLE_MODULES,
    },
    {
      title: 'Périphériques',
      modules: PERIPHERIQUE_MODULES,
    },
    {
      title: 'Ventilation & Refroidissement',
      modules: VENTILATION_MODULES,
    },
    {
      title: 'Bonus : Confort',
      modules: Bonus_MODULES,
    }

  ];

  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 py-20 text-center px-4">
        <div className="max-w-4xl mx-auto">
        {hasPremiumAccess && (
              <div className='flex items-center justify-center'>
                 <Crown className="w-4 h-4 text-yellow-500 mr-1" />
                <span className="text-xs text-yellow-600 dark:text-yellow-400">Compte Premium</span>
              </div>
            )}
          <div className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-400 mb-4">
            Bienvenue <AuthGreeting />
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Découvre nos modules et deviens un expert en PC Gaming
          </p>
        </div>
      
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-16 bg-white dark:bg-gray-950 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Modules
          </h2>

          <div className="space-y-8">
            {categories.map((category, index) => (
              <ModuleCategoryCard
                key={index}
                categoryTitle={category.title}
                modules={Object.values(category.modules).map((m) => ({
                  slug: m.meta.slug,
                  title: m.meta.title,
                  description: m.meta.description,
                  price: m.meta.price,
                }))}
              />
            ))}
          </div>
        </div>
      </section>

    
    </>
  );
}