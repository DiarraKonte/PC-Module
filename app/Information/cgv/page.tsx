'use client';

import NavBar from '@/components/navigation/HomeNavBar';

export default function CGV() {
  return (
    <>
      {/* Navbar */}
      <NavBar />

      {/* Page Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-900 shadow-md dark:shadow-none border border-gray-200 dark:border-gray-800 rounded-lg p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Conditions Générales de Vente (CGV)</h1>

          <section className="space-y-6 text-gray-700 dark:text-gray-300">
            <p>
              Les présentes Conditions Générales de Vente régissent l’ensemble des transactions réalisées sur{' '}
              <strong>Lumn PC</strong>. En effectuant un achat, vous acceptez automatiquement ces conditions.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">1. Objet</h2>
            <p>
              Les CGV s’appliquent à la vente de modules éducatifs numériques proposés sur le site <strong>lumnpc.fr</strong>.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">2. Prix et paiement</h2>
            <p>
              Tous nos prix sont indiqués en euros TTC. Le paiement est sécurisé via Stripe ou Paddle selon le module acheté.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. Accès au contenu</h2>
            <p>
              L’accès aux modules est immédiat après confirmation du paiement. Aucun frais supplémentaire n’est appliqué.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">4. Droit de rétractation</h2>
            <p>
              Conformément à l’article L221-28 du Code de la consommation, aucun droit de rétractation ne peut être exercé pour les contenus numériques immédiatement accessibles après achat.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">5. Garantie et remboursement</h2>
            <p>
              Bien que nous mettions tout en œuvre pour garantir la qualité des modules, ils sont fournis "en l’état". 
              Toutefois, nous pouvons accorder un remboursement dans les cas exceptionnels, sur demande à notre support.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">6. Propriété intellectuelle</h2>
            <p>
              Les modules vendus restent la propriété exclusive de Lumn PC. Vous bénéficiez d’un droit d’utilisation personnel et non commercial.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">7. Dispositions générales</h2>
            <p>
              Si une disposition des CGV venait à être déclarée invalide, les autres dispositions resteraient pleinement valides.
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