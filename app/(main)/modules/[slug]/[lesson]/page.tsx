'use client';

import { notFound } from "next/navigation";
import { getModule } from "@/modules";
import NavBar from "@/components/navigation/HomeNavBar";
import { Sidebar } from "@/components/navigation/SideBar";
import LessonContent from "@/components/ui/LessonContent";
import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import ProtectedRoute from '@/components/Protected/PretotectedRoute';

export default function LessonPage({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string; lesson: string }>;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const params = React.use(paramsPromise);

  // Détecte si on est en mobile
  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setIsSidebarOpen(true); // Toujours ouvert sur desktop
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const module = getModule(params.slug);
  const lesson = module?.lessons.find((l) => l.slug === params.lesson);

  if (!module || !lesson) return notFound();

  const isFree = module.meta.price === 0;

  return (
    <ProtectedRoute isFree={isFree}>
      <div className="flex flex-col min-h-screen">
        <NavBar />

        {/* Bouton mobile pour ouvrir la sidebar */}
        {isMobile && (
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="fixed bottom-6 right-6 z-30 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all md:hidden"
            aria-label="Ouvrir le menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        )}

        {/* Layout principal avec sidebar + contenu */}
        <div className="flex flex-1 relative overflow-hidden">
          {/* SIDEBAR (fixée à gauche) */}
          <aside
            className={`
              z-20 h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700
              transition-transform duration-300 ease-in-out
              fixed
              ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            `}
          >
            <Sidebar
              currentLessonSlug={lesson.slug}
              isOpen={isSidebarOpen}
              onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
              lessons={module.lessons.slice()}
              moduleMeta={{ slug: module.meta.slug, title: module.meta.title }}
            />
          </aside>

          {/*CONTENU */}
          <main className="flex-1 overflow-y-auto">
            <div className="container mx-auto py-8 px-4">
              <div className="max-w-4xl mx-auto">
                <LessonContent title={lesson.title} content={lesson.content} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
