'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, User, Zap, ChevronDown, Settings, Crown } from 'lucide-react';
import { useState, useEffect } from 'react';
import DarkModeToggle from '@/components/ui/DarkMod';
import ConnexionButton from '../button/ConnexionButton';
import RedirectHome from './RedirectHome';
import LogoutButton from '../button/LgoutButton';
import { useAuth } from '@/lib/AuthContext';

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isAuthenticated, hasPremiumAccess } = useAuth();

  const navLinks = [
    { name: 'Modules', href: '/modules' },
    { name: 'Pricing', href: '/pricing' },
    ...(isAuthenticated ? [{ name: 'Mon espace', href: '/home' }] : []),
    { name: 'Contact', href: '/contact' },
  ];

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 

  // Fermer les menus lors du changement de route
  useEffect(() => {
    setMobileMenuOpen(false);
    setUserMenuOpen(false);
  }, [pathname]);

  // Fermer le menu mobile sur les grands écrans
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-900/95 shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="border-b dark:border-gray-800/50 backdrop-blur-md">
        <div className="max-w-screen-xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <Zap className="text-blue-500 transition-transform group-hover:rotate-12" />
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative font-medium transition-all ${
                    pathname === link.href
                      ? 'text-blue-600 dark:text-blue-400 scale-105'
                      : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                  }`}
                >
                  {link.name}
                  {pathname === link.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 rounded-full"></span>
                  )}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <DarkModeToggle />

              {isAuthenticated ? (
                <div className="relative user-menu-container">
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-md font-medium transition-colors"
                  >
                    <User className="w-5 h-5" />
                    <span className="hidden md:inline">Mon compte</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {userMenuOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-10 animate-fadeIn border border-gray-200 dark:border-gray-700">
                      <div className="px-4 py-2 border-b dark:border-gray-700">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Mon compte</p>
                        {hasPremiumAccess && (
                          <div className="flex items-center mt-1">
                            <Crown className="w-4 h-4 text-yellow-500 mr-1" />
                            <span className="text-xs text-yellow-600 dark:text-yellow-400">Compte Premium</span>
                          </div>
                        )}
                      </div>
                      
                      <Link
                        href="/account"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        Paramètres
                      </Link>
                      
                      <div className="px-4 py-2 border-t dark:border-gray-700">
                        <LogoutButton 
                        />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <ConnexionButton />
                </div>
              )}

              <button
                className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Menu mobile"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 animate-slideDown">
              <div className="space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-3 py-2 rounded-md font-medium transition-colors ${
                      pathname === link.href
                        ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}

                {isAuthenticated && (
                  <div className="pt-2 border-t dark:border-gray-800 space-y-2">
                    <div className="px-3 py-2 flex items-center justify-between">
                      <span className="text-gray-700 dark:text-gray-300">Compte</span>
                      {hasPremiumAccess && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          Premium
                        </span>
                      )}
                    </div>
                    <Link
                      href="/account"
                      className="flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Settings className="w-5 h-5" />
                      <span>Paramètres</span>
                    </Link>
                    <LogoutButton 
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </header>
  );
}