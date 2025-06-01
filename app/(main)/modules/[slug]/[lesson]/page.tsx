'use client';

import { notFound } from 'next/navigation';
import { getModule } from '@/modules';
import NavBar from '@/components/navigation/HomeNavBar';
import { Sidebar } from '@/components/navigation/SideBar';
import LessonContent from '@/components/ui/LessonContent';
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import ProtectedRoute from '@/components/Protected/PretotectedRoute';
import { motion } from 'framer-motion';

export default function LessonPage({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string; lesson: string }>;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const params = React.use(paramsPromise);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) setIsSidebarOpen(true); // Sidebar toujours ouverte sur desktop
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const moduleData = getModule(params.slug);
  const lesson = moduleData?.lessons.find((l) => l.slug === params.lesson);

  if (!moduleData || !lesson) return notFound();

  const isFree = moduleData.meta.price === 0;

  const MobileMenuButton = () => (
    <motion.button
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 500, damping: 25 }}
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      className="fixed bottom-6 right-6 z-30 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all lg:hidden"
      aria-label="Ouvrir le menu"
    >
      <Menu className="w-6 h-6" />
    </motion.button>
  );

  const AppLayout = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen"
    >
      <NavBar />

      {/* Bouton menu mobile */}
      {isMobile && <MobileMenuButton />}

      <div className="flex flex-1 relative overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`
            fixed z-20 h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700
            transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? 'translate-x-0 shadow-xl' : '-translate-x-full'}
          `}
        >
          <Sidebar
            currentLessonSlug={lesson.slug}
            isOpen={isSidebarOpen}
            onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
            lessons={moduleData.lessons.slice()}
            moduleMeta={{
              slug: moduleData.meta.slug,
              title: moduleData.meta.title,
            }}
          />
        </aside>

        {/* Overlay (mobile seulement) */}
        {isMobile && isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-10 backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Contenu principal animé */}
        <main
          className={`
            flex-1 overflow-y-auto transition-all duration-300
            ${isSidebarOpen && isMobile ? '' : ''}
            ${isSidebarOpen && !isMobile ? 'ml-64' : ''}
          `}
        >
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              delay: 0.3,
            }}
            className="container mx-auto py-8 px-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6}}
              className="max-w-4xl mx-auto"
            >
              <LessonContent title={lesson.title} content={lesson.content} />
            </motion.div>
          </motion.section>
        </main>
      </div>
    </motion.div>
  );

  return <ProtectedRoute isFree={isFree}>{AppLayout()}</ProtectedRoute>;
}