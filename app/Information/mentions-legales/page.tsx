'use client';

import NavBar from '@/components/navigation/HomeNavBar';
import Link from 'next/link';

export default function MentionsLegales() {
  return (
    <>
      {/* Navbar */}
      <NavBar />

      {/* Page Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-900 shadow-md dark:shadow-none border border-gray-200 dark:border-gray-800 rounded-lg p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Mentions Légales</h1>

          <section className="space-y-6 text-gray-700 dark:text-gray-300">
            <p>
              Conformément aux obligations légales, voici les mentions légales de <strong>Lumn PC</strong>.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">1. Éditeur du site</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Nom :</strong> Konte</li>
              <li><strong>Statut :</strong> Auto-entrepreneur</li>
              <li><strong>Nom commercial :</strong> Konte</li>
              <li><strong>Email :</strong> contact@lumnpc.fr</li>
              <li><strong>Adresse :</strong> Argenteuil, France</li>
              <li><strong>SIRET :</strong> 91742552200013</li>
              <li><strong>Date d&apos;immatriculation :</strong> Juillet 2022</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">2. Responsable de publication</h2>
            <p>
              Le responsable de la publication est <strong>Konte</strong>, gérant de l&apos;activité.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. Hébergeur du site</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Nom :</strong> Vercel Inc.</li>
              <li><strong>Siège social :</strong> 440 N Barrington Ave #4000, Los Angeles, CA 90048, États-Unis</li>
              <li><strong>Site web :</strong> <a href="https://vercel.com"  className="text-blue-600 hover:underline dark:text-blue-400">vercel.com</a></li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">4. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, images, logos, vidéos) sont protégés par le Code de la propriété intellectuelle et appartiennent à Lumn PC ou à ses auteurs respectifs.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">5. Données personnelles</h2>
            <p>
              Les données personnelles collectées sur ce site sont traitées conformément à notre{' '}
              <Link href="/Information/confidentialite" className="text-blue-600 hover:underline dark:text-blue-400">
                Politique de Confidentialité
              </Link>
              .
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">6. Liens externes</h2>
            <p>
              Ce site peut contenir des liens vers d&apos;autres sites internet. Lumn PC ne partage pas vos données avec ces tiers et décline toute responsabilité quant à leur contenu.
            </p>

            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </section>
        </div>
      </main>

    </>
  );
}