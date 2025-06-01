import { ArrowRight, Zap, Check, Monitor, Star } from "lucide-react";
import Link from "next/link";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gray-50 dark:bg-gray-900">
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-40">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-400 dark:to-purple-400">
              Fatigué de regarder des heures de vidéos pour configurer ton PC ?
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-200">
              Nos modules condensent tout ce que tu dois savoir en guides clairs et actionnables.
              Mettons la lumière sur ce que tu veux vraiment savoir.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/module"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center"
              >
                Découvrir les modules
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir nos modules */}
      <section id="avantages" className="py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Pourquoi nos modules valent mieux que des vidéos ?</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Finis les tutos de 45 minutes pour apprendre 3 choses utiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="text-blue-500 mb-4">
                <Check size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Concis & efficace</h3>
              <p className="text-gray-600 dark:text-gray-200">
                On va droit au but. Pas de blabla, seulement ce qui marche vraiment.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="text-blue-500 mb-4">
                <Monitor size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Trouve ce qu'il te faut</h3>
              <p className="text-gray-600 dark:text-gray-200">
                Tu trouves en 30 secondes ce que tu cherches. Les modules sont à ton entière disposition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950 text-gray-900 dark:text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Reprends le contrôle de ton temps</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-200">
            Nos modules te donnent l'essentiel, rapidement, sans chercher pendant des heures.
          </p>
          <Link
            href="/module"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-lg transition-colors inline-flex items-center"
          >
            Decouvre les modules maintenant !
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>

{/* Footer */}
<footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 text-gray-700 dark:text-gray-400">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

      {/* Logo + description */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Link
            href="/"
            className="flex items-center font-extrabold text-2xl bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent"
          >
            Lumn PC
          </Link>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Des modules conçus pour ceux qui veulent apprendre vite sans perdre leur temps.
        </p>
      </div>

      {/* Liens rapides */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Modules</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/modules" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              Tous les modules
            </Link>
          </li>
          <li>
            <Link href="/modules/gpu" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              GPU
            </Link>
          </li>
          <li>
            <Link href="/modules/cpu" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              CPU
            </Link>
          </li>
          <li>
            <Link href="/modules/peripheriques" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              Périphériques
            </Link>
          </li>
        </ul>
      </div>

      {/* Ressources */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Ressources</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/tools" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              Outils gratuits
            </Link>
          </li>
          <li>
            <Link href="/faq" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="/guides" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              Guides gratuits
            </Link>
          </li>
        </ul>
      </div>

      {/* Contact / Réseaux */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Contact</h3>
        <ul className="space-y-2">
          <li className="text-sm text-gray-600 dark:text-gray-300">
            contact@lumnpc.fr
          </li>
          <li>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              Formulaire de contact
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              À propos
            </Link>
          </li>
          <li className="flex space-x-4 mt-2">
            <Link href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              Twitter
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              Discord
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              YouTube
            </Link>
          </li>
        </ul>
      </div>
      
    </div>

    {/* Copyright */}
    <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
      <p>&copy; {new Date().getFullYear()} Lumn PC. Tous droits réservés.</p>
    </div>
  </div>
</footer>
    </>
  );
};

export default Home;