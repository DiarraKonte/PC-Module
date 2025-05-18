import { useState } from "react";
import { ArrowRight, Zap, Cpu, Settings, HelpCircle, Users, Star } from "lucide-react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Optimise Ton PC Gamer
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Guides simples · Configs personnalisées · Dépannage expert
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/configurator"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center"
              >
                Configurer mon PC
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a
                href="/guides"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-700 rounded-lg font-medium transition-colors flex items-center justify-center"
              >
                Voir les guides
              </a>
        
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pourquoi nous choisir?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Notre expertise en optimisation gaming te permet d'obtenir les meilleures performances possibles avec ton matériel actuel.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-900 rounded-lg border border-gray-700">
              <div className="text-blue-500 mb-4">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Performance Maximale</h3>
              <p className="text-gray-300">
                Nos optimisations augmentent tes FPS de 30% sans acheter de nouveau matériel.
              </p>
            </div>
            
            <div className="p-6 bg-gray-900 rounded-lg border border-gray-700">
              <div className="text-blue-500 mb-4">
                <Cpu size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Conseils Personnalisés</h3>
              <p className="text-gray-300">
                Recommandations adaptées à ton budget et à tes jeux préférés.
              </p>
            </div>
            
            <div className="p-6 bg-gray-900 rounded-lg border border-gray-700">
              <div className="text-blue-500 mb-4">
                <HelpCircle size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Support Expert</h3>
              <p className="text-gray-300">
                Assistance technique par des passionnés qui connaissent les jeux comme leur poche.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Popular Guides */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos Guides Stars</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Découvre nos tutoriels les plus populaires pour transformer ton expérience de jeu.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GuideCard
              href="/guides/optimisation"
              icon={Zap}
              title="Boost Tes FPS"
              description="Gagne jusqu'à 30% de performance sans acheter de nouveau matériel grâce à nos réglages optimisés."
            />
            
            <GuideCard
              href="/guides/choix-composants"
              icon={Cpu}
              title="Choisis Tes Composants"
              description="Évite les pièges des vendeurs et investis intelligemment dans ton setup gaming."
            />
            
            <GuideCard
              href="/guides/depannage"
              icon={Settings}
              title="Résous Tes Problèmes"
              description="Solutions simples aux problèmes courants qui ralentissent ton PC gaming."
            />
            
            <GuideCard
              href="/guides/overclocking"
              icon={Settings}
              title="Overclocking Sécurisé"
              description="Améliore les performances de ton CPU et GPU sans risque pour ton matériel."
            />
            
            <GuideCard
              href="/guides/streaming"
              icon={Users}
              title="Setup Streaming"
              description="Paramètres optimaux pour streamer sans impacter tes performances en jeu."
            />
            
            <GuideCard
              href="/guides/cooling"
              icon={Zap}
              title="Refroidissement Efficace"
              description="Garde ton PC au frais pour des performances durables, même en sessions intensives."
            />
          </div>
          
          <div className="text-center mt-12">
            <a
              href="/guides"
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-700 rounded-lg font-medium transition-colors inline-flex items-center"
            >
              Voir tous nos guides
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ce que disent nos clients</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Rejoins les milliers de gamers satisfaits qui ont transformé leur expérience de jeu.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonial
              name="Thomas L."
              role="Joueur CS:GO"
              content="J'ai gagné 45 FPS sur CS:GO avec leur guide d'optimisation. La différence est incroyable, surtout dans les situations tendues."
            />
            
            <Testimonial
              name="Julie M."
              role="Streameuse"
              content="Leur configuration spéciale streaming m'a permis de jouer et diffuser en même temps sans aucun lag. Merci l'équipe!"
            />
            
            <Testimonial
              name="Kévin D."
              role="Joueur Warzone"
              content="Mon PC chauffait et ramait sur Warzone. Après leurs conseils, tout tourne parfaitement et sans surchauffe."
            />
          </div>
        </div>
      </section>
      
      
      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="text-blue-500" />
                <span className="font-bold text-xl">GameBoost Pro</span>
              </div>
              <p className="text-gray-400">
                La référence en optimisation de PC gaming
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Ressources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/guides" className="hover:text-blue-400">Guides</a></li>
                <li><a href="/diagnostics" className="hover:text-blue-400">Diagnostics</a></li>
                <li><a href="/configurator" className="hover:text-blue-400">Configurateur</a></li>
                <li><a href="/blog" className="hover:text-blue-400">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Entreprise</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-blue-400">À propos</a></li>
                <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
                <li><a href="/faq" className="hover:text-blue-400">FAQ</a></li>
                <li><a href="/mentions-legales" className="hover:text-blue-400">Mentions légales</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Communauté</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://discord.gg/gameboost" className="hover:text-blue-400">Discord</a></li>
                <li><a href="https://youtube.com/gameboost" className="hover:text-blue-400">YouTube</a></li>
                <li><a href="https://twitch.tv/gameboost" className="hover:text-blue-400">Twitch</a></li>
                <li><a href="https://twitter.com/gameboost" className="hover:text-blue-400">Twitter</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; 2025 GameBoost Pro. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

// Card component for reusability 
const GuideCard = ({ href, icon: Icon, title, description }: { href: string; icon: React.ComponentType<{ size: number }>; title: string; description: string }) => (
  <a
    href={href}
    className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:shadow-lg hover:border-blue-500 transition-all transform hover:-translate-y-1 p-6 flex flex-col h-full"
  >
    <div className="text-blue-500 mb-4">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="mt-auto flex items-center text-blue-400 font-medium">
      <span>En savoir plus</span>
      <ArrowRight size={16} className="ml-2" />
    </div>
  </a>
);

// Testimonial component
const Testimonial = ({ name, role, content }: { name: string; role: string; content: string }) => (
  <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
    <div className="flex items-center mb-4">
      <div className="text-yellow-400 flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
      </div>
    </div>
    <p className="text-gray-300 italic mb-4">"{content}"</p>
    <div className="font-medium text-white">{name}</div>
    <div className="text-sm text-gray-400">{role}</div>
  </div>
);

export default Home;