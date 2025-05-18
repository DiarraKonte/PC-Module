'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assurez-vous d'avoir une utilitaire cn pour les classes conditionnelles

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Effet pour le rendu côté client seulement
  useEffect(() => {
    setIsMounted(true);
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Détermine le thème initial
    const initialTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');
    setIsDark(initialTheme === 'dark');
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  // Synchronisation entre les onglets
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme') {
        const newTheme = e.newValue || 'light';
        setIsDark(newTheme === 'dark');
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const toggleDarkMode = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark', !isDark);
    localStorage.setItem('theme', newTheme);

    // Déclencher un event pour synchroniser les autres onglets
    window.dispatchEvent(new StorageEvent('storage', { key: 'theme', newValue: newTheme }));
  };

  // Évite le flash de thème incorrect (FOUC)
  if (!isMounted) {
    return (
      <button
        aria-label="Chargement du thème"
        className="mt-6 flex items-center justify-center w-8 h-8 rounded-full"
      >
        <div className="w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 animate-pulse" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleDarkMode}
      aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
      className={cn(
        "mt-6 flex items-center justify-center w-8 h-8 rounded-full",
        "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400",
        "transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800",
        "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
      )}
    >
      {isDark ? (
        <Sun className="w-4 h-4" aria-hidden="true" />
      ) : (
        <Moon className="w-4 h-4" aria-hidden="true" />
      )}
    </button>
  );
}