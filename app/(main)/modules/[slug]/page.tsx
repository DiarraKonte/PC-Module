"use client";

import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';
import { getModule } from '@/modules';
import LessonList from '@/components/modules/Modulelist';
import NavBar from '@/components/navigation/HomeNavBar';
import ProtectedRoute from '@/components/Protected/PretotectedRoute';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';
import React from 'react';
import PageTransition from '@/components/ui/PageTransition';

export default function ModulePage() {
  const params = useParams();
  const slug = params.slug as string;

  const moduleData = getModule(slug);

  if (!moduleData) return notFound();

  const isFree = moduleData.meta.price === 0;

  return (
    <ProtectedRoute isFree={isFree}>
      <PageTransition>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <NavBar />
        <div className="flex flex-1">
          <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <Link 
                    href="/home" 
                    className="flex items-center text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Retour à l&apos;accueil
                  </Link>
                  <Home className="h-4 w-4" />
                </div>
              </div>

              <div className="mb-10">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
                      {moduleData.meta.title}
                    </h1>
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        isFree
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                          : 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                      }`}>
                        {isFree ? 'Gratuit' : 'Premium'}
                      </span>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      {moduleData.meta.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                <h2 className="text-xl font-semibold mb-6">Leçons du module</h2>
                <LessonList
                  lessons={moduleData.lessons.map(({ slug, title }) => ({ slug, title }))}
                  moduleSlug={moduleData.meta.slug}
                />
              </div>
            </div>
          </main>
        </div>
      </div>
      </PageTransition>
    </ProtectedRoute>
  );
}
