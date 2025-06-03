import Link from "next/link";

export default function Footer() {
    return (
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
              <Link href="/module" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                Tous les modules
              </Link>
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
              </ul>
            </div>


            <div>
            <ul className="space-y-2">
              <li><Link href="/Information/mentions-legales">Mentions légales</Link></li>
              <li><Link href="/Information/cgu">Conditions d&apos;utilisation</Link></li>
              <li><Link href="/Information/cgv">Conditions de vente</Link></li>
              <li><Link href="/Information/confidentialite">Politique de confidentialité</Link></li>
              <li><Link href="/Information/cookies">Politique de cookies</Link></li>
            </ul>
            </div>

          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Lumn PC. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    )
}