// modules/pc-gaming/data.ts
export default {
  meta: {
    slug: "pc-gaming",
    title: "Bien choisir son PC gaming",
    description: "Apprends à définir tes besoins pour un setup parfaitement adapté à ton style de jeu.",
    price: 0, 
  },
  lessons: [
    {
      slug: "introduction",
      title: "Bienvenue, futur gamer équipé ! 👋",
      content: `
Tu veux te lancer dans le gaming PC mais tu ne sais pas par où commencer ? T'es au bon endroit.

Avant de parler de cartes graphiques, de processeurs ou de marques, il y a une étape **cruciale** : **savoir ce que TU veux faire avec ton PC**.

Dans ce module, on ne va pas encore choisir les composants — ça viendra ensuite. Ici, je vais t’aider à :
- Comprendre les grands profils de gamers
- Te situer selon ton style, ton budget, et tes envies
- Savoir ce qui est important ou non pour toi

Prends quelques minutes, lis tranquillement, et tu vas vite y voir plus clair 💡
      `,
    },
    {
      slug: "profil-gamer",
      title: "Quel type de gamer es-tu ? 🎯",
      content: `
Pas besoin d’être hardcore gamer pour vouloir une machine solide. Voici quelques profils qu'on retrouve souvent :

🔹 **Le joueur occasionnel**  
Tu veux jouer à des petits jeux ou quelques titres connus comme Fortnite, Valorant, Rocket League ?  
➡️ Pas besoin de composants ultra puissants, tu cherches **un bon rapport qualité/prix**.

🔹 **Le gamer compétitif**  
Tu veux du 144+ FPS constant, tu joues à CS2, Apex, League ou Warzone et **chaque milliseconde compte** ?  
➡️ Il te faut un PC **ultra fluide et réactif**, avec de bons composants pour ne jamais ralentir.

🔹 **Le joueur solo/cinématique**  
Tu veux profiter de jeux narratifs, beaux, en solo comme Cyberpunk, Hogwarts Legacy ou Elden Ring ?  
➡️ Tu cherches surtout **l’immersion visuelle et le confort**, donc on visera la **qualité graphique**.

🔹 **Le streamer/créateur**  
Tu veux jouer, **streamer en même temps**, ou faire du montage vidéo, créer du contenu ?  
➡️ Tu auras besoin d’une machine **polyvalente et puissante**, avec assez de ressources pour tout faire tourner en même temps.

Repère-toi là-dedans : tu peux appartenir à plusieurs profils, ou glisser de l’un à l’autre avec le temps 🎮
      `,
    },
    {
      slug: "questions-a-se-poser",
      title: "Les bonnes questions avant d'acheter 🧠",
      content: `
Avant même de penser à une config, pose-toi ces 5 questions :

1. **À quels jeux je veux jouer ?**  
Note les jeux que tu veux faire tourner (et dans quelles conditions). Certains sont très gourmands, d’autres non.

2. **Quel est mon budget ?**  
Tu as 600€, 1000€, 2000€ ? Le budget oriente directement les choix.  
➡️ Spoiler : on peut faire un très bon PC même avec un budget modeste, si on fait les bons compromis.

3. **Je veux un PC fixe ou portable ?**  
Un fixe sera **plus performant et évolutif**, un portable est **compact et nomade**.  
➡️ Il faut choisir selon ton mode de vie.

4. **Est-ce que je veux upgrader plus tard ?**  
Si oui, tu peux faire un build évolutif, avec des composants que tu pourras remplacer dans 1 ou 2 ans.

5. **Je joue sur quel écran ?**  
Tu joues en 1080p, 1440p, ou 4K ? À 60 Hz ou 144 Hz ?  
➡️ Le type d’écran influe beaucoup sur les composants nécessaires.

💡 Une fois que tu as tes réponses, tu verras que **le choix des composants devient logique**.
      `,
      },
    {
      slug: "eviter-les-erreurs",
      title: "Les erreurs fréquentes à éviter 🚫",
      content: `
Voici ce que je vois très souvent chez ceux qui montent leur premier PC… et comment toi, tu vas les éviter :

❌ **Mettre tout son budget dans la carte graphique**  
➡️ Résultat : un bon GPU, mais un processeur trop faible = goulot d’étranglement.

❌ **Oublier le refroidissement ou l’alimentation**  
➡️ Tu veux de la stabilité et du silence ? Ne néglige pas ces parties "moins sexy" mais **très importantes**.

❌ **Acheter sans réfléchir à l’écran**  
➡️ Pourquoi prendre une carte graphique ultra puissante si ton écran est limité à 60 Hz ? Pense global.

❌ **Acheter juste parce que "c’est le dernier modèle"**  
➡️ Beaucoup de modèles plus anciens offrent **un bien meilleur rapport qualité/prix**.

Tu es là pour **choisir intelligemment**, pas juste "avoir le plus gros chiffre sur la boîte". Je vais t’aider à optimiser chaque euro 💪
      `,
    },
    {
      slug: "preparation-suite",
      title: "Prêt pour la suite ? 🛠️",
      content: `
Maintenant que tu sais :
- Ce que tu veux faire avec ton PC
- Ton profil de joueur
- Tes vraies priorités

👉 Tu es prêt à choisir les composants un par un.

Dans les modules suivants, on va attaquer :
- Le CPU (processeur)
- Le GPU (carte graphique)
- La RAM, le stockage, les cartes mères, etc.

Et tu vas voir, c’est pas si compliqué. Je vais t’expliquer **comment choisir en fonction de TON cas**, pas juste te balancer des noms de modèles.

À tout de suite dans le prochain module ! 🔥
      `,
    }
  ]
} as const;
