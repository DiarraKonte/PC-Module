// app/(main)/modules/[slug]/page.tsx
"use client";

import { notFound } from 'next/navigation';
import { getModule } from '@/modules';
import LessonList from '@/components/modules/Modulelist';
import NavBar from '@/components/navigation/HomeNavBar';
import { Sidebar } from '@/components/navigation/SideBar';
import { useState } from 'react';
import ProtectedRoute from '@/components/Protected/PretotectedRoute';

export default function ModulePage({ params }: { params: { slug: string } }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const module = getModule(params.slug);

  if (!module) return notFound();

  const isFree = module.meta.price === 0;

  return (
    <ProtectedRoute isFree={isFree}>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <NavBar />

        <div className="flex flex-1">
          <Sidebar
            currentLessonSlug={undefined}
            isOpen={isSidebarOpen}
            onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
            lessons={[...module.lessons]}
            moduleMeta={{ slug: module.meta.slug, title: module.meta.title }}
          />

          <main className="flex-1 py-10 px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-extrabold tracking-tight mb-4">
                {module.meta.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                {module.meta.description}
              </p>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <LessonList
                  lessons={module.lessons.map(({ slug, title }) => ({ slug, title }))}
                  moduleSlug={module.meta.slug}
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
