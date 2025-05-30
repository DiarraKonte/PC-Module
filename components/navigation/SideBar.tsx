'use client';
import Link from 'next/link';
import { BookOpen, Home, ChevronLeft, X } from 'lucide-react';
import { ProgressBar } from '../modules/ProgressBar';
import { useEffect } from 'react';

type Lesson = {
  slug: string;
  title: string;
};

type SidebarProps = {
  currentLessonSlug: string | undefined;
  onToggle: () => void;
  isOpen: boolean;
  lessons: Lesson[];
  moduleMeta: { slug: string; title: string };
};

export function Sidebar({ currentLessonSlug, isOpen, onToggle, lessons, moduleMeta }: SidebarProps) {
  const currentIndex = lessons.findIndex(l => l.slug === currentLessonSlug);

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      onToggle();
    }
  };

  useEffect(() => {
    if (isOpen && window.innerWidth < 1024) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onToggle}
        />
      )}

      <aside
      className={`
    fixed md:sticky top-0 z-50 w-72 bg-white dark:bg-gray-900 p-6 border-r dark:border-gray-700 shadow-lg dark:shadow-none 
    transition-transform duration-300 ease-in-out
    ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
    h-[calc(100vh-4rem)] md:h-screen
    overflow-y-auto
    scrollbar-thin scrollbar-thumb-blue-500 dark:scrollbar-thumb-blue-300 scrollbar-track-gray-200 dark:scrollbar-track-gray-800
  `}
>
        <button
          onClick={onToggle}
          className="md:hidden absolute top-4 right-4 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Fermer le menu"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 mb-8">
          <BookOpen className="h-6 w-6 text-blue-600" />
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">{moduleMeta.title}</h2>
        </div>

        <ul className="space-y-1">
          {lessons.map((lesson, idx) => {
            const isActive = lesson.slug === currentLessonSlug;
            const isCompleted = idx < currentIndex;
            return (
              <li key={lesson.slug}>
                <Link
                  href={`/modules/${moduleMeta.slug}/${lesson.slug}`}
                  onClick={handleLinkClick}
                  className={`flex items-center px-3 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <div className="w-6 h-6 flex items-center justify-center mr-2">
                    {isCompleted ? (
                      <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    ) : isActive ? (
                      <div className="w-4 h-4 rounded-full bg-blue-500" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-600" />
                    )}
                  </div>
                  <span className="text-sm md:text-base">{lesson.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <ProgressBar currentLessonSlug={currentLessonSlug} lessons={lessons} />

        <div className="mt-6">
          <Link
            href={`/modules/${moduleMeta.slug}`}
            onClick={handleLinkClick}
            className="flex items-center px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            <span>Retour aux modules</span>
          </Link>
        </div>

        <div className="mt-4 pt-4 border-t dark:border-gray-700">
          <Link
            href="/home"
            onClick={handleLinkClick}
            className="flex items-center px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <Home className="w-4 h-4 mr-2" />
            <span>Accueil</span>
          </Link>
        </div>
      </aside>
    </>
  );
}