// app/pricing/page.tsx
import Link from 'next/link';
import NavBar from '@/components/navigation/NavBar';

export default function PricingPage() {
  const plans = [
    {
      name: 'Gratuit',
      price: '0€',
      period: 'par mois',
      description: 'Pour commencer à explorer nos bases.',
      features: ['Accès aux modules publics', '10 leçons gratuites', 'Support communautaire'],
      cta: 'Commencer gratuitement',
      mostPopular: false,
    },
    {
      name: 'Premium',
      price: '9,99€',
      period: 'par mois',
      description: 'Pour les apprenants réguliers qui veulent aller plus loin.',
      features: [
        'Tous les modules disponibles',
        'Contenu exclusif et avancé',
        'Exercices interactifs',
        'Certificats de réussite',
        'Support prioritaire',
      ],
      cta: 'S’abonner maintenant',
      mostPopular: true,
    },
    {
      name: 'Entreprise',
      price: 'Personnalisé',
      period: '',
      description: 'Pour équipes ou organisations avec besoins spécifiques.',
      features: [
        'Tous les avantages Premium',
        'Comptes multiples',
        'Intégration LMS',
        'Support dédié',
        'Formation sur mesure',
      ],
      cta: 'Nous contacter',
      mostPopular: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <NavBar />

      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text dark:from-blue-400 dark:to-purple-400">
              Nos Formules
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
              Choisis l'offre adaptée à tes objectifs d'apprentissage ou professionnels.
            </p>
          </div>

          {/* Plans */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl ${
                  plan.mostPopular ? 'ring-2 ring-blue-500 scale-105 md:scale-100' : ''
                }`}
              >
                {plan.mostPopular && (
                  <div className="bg-blue-500 text-white text-sm font-semibold uppercase tracking-wide text-center py-1">
                    Le plus populaire
                  </div>
                )}
                <div className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-extrabold">{plan.price}</span>
                    {plan.period && <span className="text-gray-600 dark:text-gray-400">/{plan.period}</span>}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mt-0.5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/signup" passHref>
                    <button
                      className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                        plan.mostPopular
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}