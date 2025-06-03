'use client';

import NavBar from '@/components/navigation/HomeNavBar';

export default function CGU() {
  return (
    <>
      {/* Navbar */}
      <NavBar />

      {/* Page Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-900 shadow-md dark:shadow-none border border-gray-200 dark:border-gray-800 rounded-lg p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Conditions Générales d'Utilisation (CGU)</h1>

          <section className="space-y-6 text-gray-700 dark:text-gray-300">
            <p>
              Bienvenue sur <strong>Lumn PC</strong>. En utilisant notre site web et nos services, vous acceptez ces Conditions Générales d’Utilisation. Veuillez les lire attentivement.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">1. Objet des CGU</h2>
            <p>
              Les présentes CGU définissent les modalités d’utilisation du site <strong>lumnpc.fr</strong>, ainsi que les droits et obligations de l’utilisateur et de Lumn PC.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">2. Accès au site</h2>
            <p>
              Le site est accessible :
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Gratuitement pour les parties publiques</li>
              <li>Sur inscription ou achat pour les contenus premium</li>
            </ul>
            <p className="mt-2">
              Lumn PC se réserve le droit de fermer temporairement l’accès au site pour maintenance sans préavis.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. Création de compte</h2>
            <p>
              Pour accéder à certains modules, vous devrez créer un compte utilisateur. Vous vous engagez à fournir des informations exactes et à protéger vos identifiants.
            </p>
            <p className="mt-2">
              Vous êtes responsable de toutes les activités réalisées depuis votre compte.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">4. Utilisation du contenu</h2>
            <p>
              Les modules éducatifs proposés sur ce site sont protégés par les lois sur la propriété intellectuelle. Vous vous interdisez :
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>La redistribution, la copie ou la revente</li>
              <li>Le téléchargement massif automatisé</li>
              <li>La modification du contenu sans autorisation</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">5. Interdictions</h2>
            <p>
              Tout usage abusif, frauduleux ou contraire aux bonnes mœurs peut entraîner la suppression immédiate de votre compte. Cela inclut notamment :
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Le piratage ou tentative de contournement du système</li>
              <li>Les comportements nuisibles ou malveillants</li>
              <li>L’usage commercial de nos contenus (sauf accord écrit)</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">6. Modifications des CGU</h2>
            <p>
              Lumn PC se réserve le droit de modifier ces CGU à tout moment. Les nouvelles conditions s’appliquent dès leur mise en ligne. Il est conseillé de relire cette page régulièrement.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">7. Droit applicable</h2>
            <p>
              Ces CGU sont régies par le droit français. En cas de litige, les tribunaux compétents seront ceux de Paris.
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