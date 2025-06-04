'use client';

import NavBar from '@/components/navigation/HomeNavBar';

export default function PolitiqueCookies() {
  return (
    <>
      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-900 shadow-md dark:shadow-none border border-gray-200 dark:border-gray-800 rounded-lg p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Politique d&apos;utilisation des Cookies</h1>

          <section className="space-y-6 text-gray-700 dark:text-gray-300">
            <p>
              Cette politique explique comment <strong>Lumn PC</strong> utilise les cookies et technologies similaires pour assurer le bon fonctionnement du site, analyser l&rsquo;audience et améliorer votre expérience utilisateur.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">1. Qu&#39;est-ce qu&#39;un cookie ?</h2>
            <p>
              Un cookie est un petit fichier texte déposé sur votre appareil par le site web que vous visitez. Il permet au site de se souvenir de vos actions et préférences pendant une durée déterminée.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">2. Types de cookies utilisés</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Cookies techniques (obligatoires)</strong> : indispensables pour utiliser certaines fonctionnalités du site (ex : panier, authentification).</li>
              <li><strong>Cookies de performance</strong> : collectent des informations anonymes sur la manière dont les visiteurs utilisent le site. Exemple : Google Analytics ou Fathom.</li>
              <li><strong>Cookies de personnalisation</strong> : mémorisent vos choix (langue, thème sombre/clair) pour améliorer votre expérience.</li>
              <li><strong>Cookies tiers (optionnels)</strong> : placés par des services externes comme YouTube, Stripe, ou les réseaux sociaux.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. Consentement à l’utilisation des cookies</h2>
            <p>
              Lors de votre première visite, un bandeau de consentement vous invite à accepter ou refuser les cookies non essentiels. Vous pouvez modifier vos préférences à tout moment via notre{' '}
              <a href="/cookies" className="text-blue-600 hover:underline dark:text-blue-400">
                gestionnaire de consentement
              </a>
              .
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">4. Finalités des cookies</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Analyse et statistiques</strong> : nous utilisons Fathom ou Google Analytics pour mesurer le trafic anonyme.</li>
              <li><strong>Publicité ciblée</strong> : aucun cookie publicitaire n’est utilisé actuellement.</li>
              <li><strong>Réseaux sociaux</strong> : certains boutons (Twitter, Discord) peuvent charger des cookies tiers si présents.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">5. Gestion des cookies</h2>
            <p>
              Vous pouvez gérer les cookies via :
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Votre navigateur (paramètres de confidentialité)</li>
              <li>Notre outil de gestion des cookies (à intégrer)</li>
              <li>Les options offertes par les tiers (Google, Facebook, etc.)</li>
            </ul>
            <p className="mt-2">
              Pour plus d&apos;informations sur les cookies tiers, rendez-vous sur :
              {' '}
              <a href="https://www.allaboutcookies.org/"  target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">
                www.allaboutcookies.org
              </a>
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">6. Droits des utilisateurs</h2>
            <p>
              Vous avez le droit d&apos;accéder, de limiter, de supprimer ou de refuser les cookies, conformément au RGPD. Vos choix sont conservés grâce à un cookie de gestion du consentement.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">7. Modification de la politique</h2>
            <p>
              Nous pouvons mettre à jour cette politique en cas d&apos;évolution des réglementations ou de nos outils. Les modifications s&apos;appliquent dès leur publication.
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