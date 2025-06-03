'use client';

import NavBar from '@/components/navigation/HomeNavBar';

export default function PolitiqueConfidentialite() {
  return (
    <>
      {/* Navbar */}
      <NavBar />

      {/* Page Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-900 shadow-md dark:shadow-none border border-gray-200 dark:border-gray-800 rounded-lg p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Politique de Confidentialité</h1>

          <section className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Chez <strong>Lumn PC</strong>, la protection de vos données personnelles est une priorité. Cette politique explique comment nous collectons, utilisons et protégeons vos informations.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">1. Données recueillies</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Nom, prénom, adresse e-mail lors de l’inscription</li>
              <li>Données de paiement traitées par Stripe (non stockées)</li>
              <li>Activités sur le site (consultations, modules accédés)</li>
              <li>Adresse IP et cookies techniques pour l’analyse et la sécurité</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">2. Finalités des données</h2>
            <p>
              Les données sont utilisées uniquement pour :
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Fournir l’accès aux modules</li>
              <li>Gérer les comptes utilisateurs</li>
              <li>Améliorer l’expérience utilisateur</li>
              <li>Respecter nos obligations légales</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. Sécurité des données</h2>
            <p>
              Toutes les données sont stockées dans des bases chiffrées et protégées. Nous utilisons également des protocoles SSL/TLS pour sécuriser les échanges entre votre navigateur et nos serveurs.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">4. Durée de conservation</h2>
            <p>
              Les données personnelles sont conservées aussi longtemps que nécessaire au fonctionnement du service ou conformément à la loi.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">5. Vos droits RGPD</h2>
            <p>
              Conformément au RGPD, vous avez droit à :
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Droit d&apos;accès – obtenir une copie de vos données</li>
              <li>Droit de rectification – corriger vos données</li>
              <li>Droit à l&apos;effacement – demander la suppression de vos données</li>
              <li>Droit d&apos;opposition – limiter l’utilisation de vos données</li>
            </ul>
            <p className="mt-2">
              Vous pouvez exercer ces droits en nous contactant via notre{' '}
              <a href="mailto:contact@lumnpc.fr" className="text-blue-600 hover:underline dark:text-blue-400">
                page de contact
              </a>
              .
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">6. Cookies</h2>
            <p>
              Notre site utilise des cookies strictement nécessaires au bon fonctionnement du site et pour mesurer l’audience (Google Analytics / Fathom).
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">7. Transferts de données</h2>
            <p>
              Aucun transfert vers des tiers non autorisés n’est effectué. Nous ne vendons ni ne partageons vos données sans votre consentement explicite.
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