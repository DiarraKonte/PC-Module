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

  const isFree= module.meta.price === 0;

  return (
    <ProtectedRoute isFree={isFree}>
       <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <div className="flex flex-1">
        <Sidebar
          currentLessonSlug={undefined} 
          isOpen={isSidebarOpen}
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          lessons={[...module.lessons]}
          moduleMeta={{ slug: module.meta.slug, title: module.meta.title }}
        />
        
        <main className="flex-1 container mx-auto py-8 px-4 ">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">{module.meta.title}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {module.meta.description}
            </p>
            
            <LessonList
              lessons={module.lessons.map(({ slug, title }) => ({ slug, title }))}
              moduleSlug={module.meta.slug}
            />
          </div>
        </main>
      </div>
    </div>
    </ProtectedRoute>
  );
}