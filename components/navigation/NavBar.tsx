// components/NavBar.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, User, Zap } from 'lucide-react';
import { useState } from 'react';
import DarkModeToggle from '@/components/ui/DarkMod';
import ConnexionButton from '../button/ConnexionButton';
import RedirectHome from './RedirectHome';
import LogoutButton from '../button/LgoutButton';

import { useAuth } from '@/lib/AuthContext';

export default function NavBar1() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const { isAuthenticated, loading, logout } = useAuth();

  const navLinks = [
    ...(isAuthenticated ? [{ name: 'Mon espace', href: '/home' }] : []),
  ];


  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
      <div className="bg-white dark:bg-gray-900 border-b dark:border-gray-800">
        <div className="container mx-auto px-4 py-3">
          {/* Barre principale */}
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                <Zap className="text-blue-500" />
              </span>
            </Link>

            {/* Navigation desktop */}
            <nav className="hidden md:flex items-center justify-center gap-8 w-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-1 py-2 font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-500'
                      : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Boutons droite */}
            <div className="flex items-center gap-4">
              <DarkModeToggle />

              {isAuthenticated ? (
                <div className="flex items-center gap-4">
                  {/* Mon Compte */}
                  <Link
                    href="/account"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-md font-medium transition-colors"
                  >
                    <User className="w-5 h-5" />
                  </Link>

                  {/* Déconnexion */}
                 <LogoutButton/>
                </div>
              ) : (
                <div>
                  <ConnexionButton />
                  <RedirectHome />
                </div>
              )}

              {/* Contact button */}
              <Link
                href="/contact"
                className="hidden md:block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors"
              >
                Contact
              </Link>

              {/* Menu mobile */}
              <button
                className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Menu mobile (slide down) */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md font-medium ${
                    pathname === link.href
                      ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block mt-4 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}