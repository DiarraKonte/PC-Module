export default {
  meta: {
    slug: "pc-GPU",
    title: "Choisir sa carte graphique (GPU)",
    description: "Choisis la carte graphique parfaite pour toi",
    price: 1,

  },
  lessons: [
    {
      slug: "comprendre-les-cartes-graphiques-choisir-sans-se-tromper",
      title: "Comprendre les cartes graphiques : choisir sans se tromper",
      content: `
  # Comprendre les cartes graphiques : choisir sans se tromper

  ## 🧠 Qu'est-ce qu'un GPU ?

  Le GPU (Graphics Processing Unit) est le processeur dédié au traitement graphique de ton ordinateur. Il est essentiel pour les jeux vidéo, le rendu 3D, et d'autres applications graphiques intensives.

  ## 🎯 Définir tes besoins

  Avant de choisir un GPU, identifie tes objectifs :

  - **Résolution cible** : 1080p, 1440p, ou 4K.
  - **Type de jeux** : jeux compétitifs, AAA, ou indépendants.
  - **Système d'exploitation** : Linux, avec une attention particulière à la compatibilité des pilotes.

  ## 📊 Comprendre les spécifications clés

  - **VRAM (mémoire vidéo)** : plus il y en a, mieux c'est pour les hautes résolutions.
  - **Fréquence du GPU** : indique la vitesse de traitement.
  - **Architecture** : les générations plus récentes offrent généralement de meilleures performances et une meilleure efficacité énergétique.

  ## 🐧 Compatibilité avec Linux

  Sous Linux, la compatibilité des GPU dépend fortement des pilotes disponibles :

  - **NVIDIA** : propose des pilotes propriétaires performants, mais leur installation peut nécessiter des étapes supplémentaires.
  - **AMD** : les pilotes open-source (AMDGPU) sont bien intégrés dans le noyau Linux, offrant une bonne compatibilité.
  - **Intel** : les GPU intégrés sont généralement bien supportés, mais les performances sont limitées pour le gaming intensif.

  ## 💡 Recommandations générales

  - **Pour le 1080p** : un GPU avec au moins 4 Go de VRAM est recommandé.
  - **Pour le 1440p** : vise au moins 6 Go de VRAM.
  - **Pour le 4K** : 8 Go de VRAM ou plus sont préférables.

  ## 🔧 Optimisation logicielle

  Une fois le GPU choisi, optimise ton système :

  - **Mets à jour les pilotes** : utilise les outils de gestion de paquets de ta distribution Linux pour installer les derniers pilotes.
  - **Configure les paramètres graphiques** : ajuste la résolution, l'anti-aliasing, et d'autres options pour équilibrer qualité visuelle et performances.
  - **Utilise des outils comme MangoHud** : pour surveiller les performances en temps réel.
        `,
      image: "/assets/gpu-selection-guide.jpg"
    },
    {
      slug: "quelle-carte-graphique-pour-quel-usage",
      title: "Quelle carte graphique pour quel usage ?",
      content: `# Quelle carte graphique pour quel usage ?

## 1. Bureautique et multimédia

Pour la navigation web, la lecture vidéo ou la bureautique, une solution intégrée suffit :  
- **Intel UHD Graphics** (processeurs Intel)  
- **Radeon Graphics** intégrées (APU AMD)

## 2. Gaming occasionnel

Pour les titres peu gourmands ou anciens, optez pour une carte d’entrée de gamme :  
- **NVIDIA GeForce GTX 1650**  
- **AMD Radeon RX 6400**

## 3. Gaming intensif

Pour jouer aux derniers AAA en 1080p/1440p, choisissez parmi :  
- **NVIDIA RTX 30 Series** (ex. 3060, 3070) – idéal 1080p/1440p  
- **NVIDIA RTX 40 Series** (ex. 4060, 4070) – excellent pour 1440p et VR  
- **NVIDIA RTX 50 Series** (ex. 5060, 5070) – nouvelle génération pour 1440p/4K  
- **AMD Radeon RX 6600 XT / RX 6700 XT** – très bon rapport qualité/prix en 1080p/1440p  
- **AMD Radeon RX 9070 & 9070 XT** – fraîchement arrivées pour du 1440p/4K en ultra

Pour le 4K natif ou le ray tracing poussé :  
- **NVIDIA RTX 3080 / 4080 / 5080**  
- **AMD Radeon RX 6800 XT / 7900 XT / 9070 XT**

## 4. Création de contenu

Pour le montage vidéo et la 3D :  
- **NVIDIA RTX** (CUDA + Tensor Cores)  
- **AMD Radeon Pro** ou **Radeon RX haut de gamme**  

## 5. Intelligence artificielle & Deep Learning

Privilégiez les GPU dotés de cœurs Tensor et d’une grosse VRAM :  
- **NVIDIA RTX 3090 / 4090 / 5090**  
- **AMD MI** (séries professionnelles)

## 6. Points clés à vérifier

- **VRAM** : 4 Go+ pour 1080p, 8 Go+ pour 1440p, 12 Go+ pour 4K  
- **Alimentation** : assure-toi que ton bloc d’alim peut fournir le TDP requis  
- **Compatibilité Linux** : pilote propriétaire NVIDIA ou AMDGPU pour AMD  

`,
      image: "/assets/gpu-usage-guide.jpg"
    },
 {
      slug: "comment-choisir-bonne-carte-graphique",
      title: "Comment choisir la bonne carte graphique selon ses besoins",
      content: `# Comment choisir la bonne carte graphique selon ses besoins

## 1. Définir votre usage principal  
Avant tout, identifiez si vous êtes plutôt **gamer compétitif**, **créateur de contenu**, ou **utilisateur multimédia**.  
- **Gaming compétitif** : privilégiez un haut framerate (FPS) avec une carte capable de maintenir >100 FPS en Full HD:contentReference[oaicite:0]{index=0}.  
- **Gaming AAA/4K** : optez pour du **haut de gamme** (ex. NVIDIA RTX 4080/AMD RX 7900 XT) pour des résolutions élevées et ray tracing activé:contentReference[oaicite:1]{index=1}.  
- **Création de contenu** : choisissez un GPU avec **CUDA/Tensor Cores** (NVIDIA) ou une **VRAM abondante** (>8 Go) pour accélérer le rendu vidéo et la 3D:contentReference[oaicite:2]{index=2}.  

## 2. Les critères techniques clés  
- **VRAM** : 4 Go suffisent pour le 1080p, 8 Go pour le 1440p, 12 Go+ pour la 4K et textures Ultra:contentReference[oaicite:3]{index=3}.  
- **Nombre de cœurs du GPU** : plus il y en a, plus la carte réalise de calculs en parallèle, améliorant les performances en jeu et en rendu:contentReference[oaicite:4]{index=4}.  
- **Fréquence et architecture** : les générations récentes (ex. NVIDIA RTX 40/50 Series) offrent de meilleures performances/Watt grâce aux architectures Ada Lovelace et Blackwell:contentReference[oaicite:5]{index=5}.  
- **TDP & alimentation** : vérifiez que votre bloc d’alimentation peut fournir la puissance maximale (TDP) de la carte, sinon risque de plantages ou sous‑fréquentiel.  

## 3. Le budget et la longévité  
- **Entrée de gamme (<200 €)** : NVIDIA GTX 1650, AMD RX 6400 pour du 1080p léger ou e‑sports.  
- **Milieu de gamme (200–500 €)** : NVIDIA RTX 4060/4070, AMD RX 6600 XT/6700 XT pour du 1440p confortable:contentReference[oaicite:6]{index=6}.  
- **Haut de gamme (>500 €)** : NVIDIA RTX 4080–5090, AMD RX 7900 XT–9070 XT pour du 4K Ultra et futures évolutions.  

## 4. Vérifier la compatibilité  
1. **Slot PCIe x16** : indispensable, assurez-vous que votre carte mère en dispose d’un.  
2. **Dimensions** : certaines cartes triple‑slot ne rentrent pas dans tous les boîtiers:contentReference[oaicite:7]{index=7}.  
3. **Compatibilité système** : sous Linux, préférez les pilotes NVIDIA propriétaires ou AMDGPU/AMDGPU‑PRO pour AMD:contentReference[oaicite:8]{index=8}.  

## 5. Astuces pratiques  
- Consultez **ProtonDB** pour la compatibilité des GPU sous Linux avec Steam Play (Proton).  
- Lisez les **benchmarks** des sites spécialisés (Art‑of‑PC, Materiel.net) pour des comparatifs à jour:contentReference[oaicite:9]{index=9}:contentReference[oaicite:10]{index=10}.  
- Pensez à l’**évolutivité** : optez pour un modèle offrant un bon support des API (DirectX 12 Ultimate, Vulkan) pour durer dans le temps.  

`,
      image: "/assets/choix-gpu-besoins.jpg"
    },
    {
      slug: "tout-savoir-sur-les-gpu-guide-pour-bien-acheter",
      title: "Tout savoir sur les GPU : guide pour bien acheter",
      content: `# Tout savoir sur les GPU : guide pour bien acheter

## 1. Qu’est‑ce qu’un GPU ?  
Le GPU (Graphics Processing Unit) est un processeur spécialisé dans le rendu graphique, essentiel en gaming, design 3D et traitement vidéo:contentReference[oaicite:11]{index=11}.  

## 2. Composants et fiche technique  
- **Unités de calcul** : cœur du GPU, plus il y en a, plus la puissance brute augmente.  
- **VRAM** : mémoire dédiée pour stocker textures et données graphiques; plus elle est grande, mieux c’est pour les résolutions élevées:contentReference[oaicite:12]{index=12}.  
- **Bus mémoire & bande passante** : un bus large (256‑384 bits) et une VRAM rapide (GDDR6/GDDR6X ou HBM) améliorent les transferts GPU↔VRAM.  
- **Refroidissement** : systèmes à double ou triple ventilateur, caloducs et backplate garantissent des températures maîtrisées.  

## 3. Interfaces et standards  
- **PCIe 4.0/5.0** : bande passante plus élevée pour les GPU modernes, réduit les goulots d’étranglement.  
- **DirectX/Vulkan** : API graphiques – assurez‑vous que la carte supporte la dernière version (ex. DirectX 12 Ultimate avec ray tracing).  

## 4. Marques et gammes  
- **NVIDIA** : architectures Ampere, Ada Lovelace, Blackwell; gammes GTX/RTX pour le gaming et Quadro/Tesla pour le pro.  
- **AMD** : architectures RDNA 1/2/3; gammes RX pour les joueurs, Radeon Pro pour les professionnels.  
- **Intel** : GPU intégrés « UHD Graphics » et récents GPU discrets Intel Arc (e.g. A750, A770).  

## 5. Facteurs de décision  
1. **Usage** : gaming, création, IA…  
2. **Budget** : équilibre performance/prix, suivez les variations de tarifs selon la demande et les promos.  
3. **Compatibilité boîtier/alim** : dimensions et connecteurs d’alimentation (6/8 pins).  
4. **Pilotes & support** : qualité des drivers et fréquence des mises à jour, crucial sous Windows et Linux.  

## 6. Conclusion  
En combinant les critères techniques, votre usage et votre budget, vous pourrez cibler la carte graphique offrant le meilleur rapport performance/prix et la compatibilité la plus pérenne.`,
      image: "/assets/guide-achat-gpu.jpg"
    },
    {
      slug: "gpu-101-les-bases-pour-faire-le-bon-choix",
      title: "GPU 101 : les bases pour faire le bon choix",
      content: `# GPU 101 : les bases pour faire le bon choix

## Qu’est‑ce qu’un GPU ?  
Le GPU (Graphics Processing Unit) est un processeur dédié aux calculs graphiques, séparé du CPU et optimisé pour traiter massivement des pixels et des vertex:contentReference[oaicite:13]{index=13}.  

## GPU intégré vs GPU dédié  
- **Intégré** : présent dans le CPU (Intel UHD, AMD Radeon Graphics), suffit pour bureautique et streaming vidéo, mais limité en gaming:contentReference[oaicite:14]{index=14}.  
- **Déporté (discret)** : carte PCIe autonome, dotée de sa propre VRAM, indispensable pour les jeux et le rendu 3D intensif.  

## Concepts clés  
- **VRAM** : mémoire rapide dédiée, stocke textures, frame‑buffers et shaders.  
- **Cœurs CUDA/Tensor (NVIDIA)** et **Compute Units (AMD)** : unités de calcul parallèles déterminant la puissance de traitement.  
- **Ray tracing** : rendu en temps réel de la lumière, exigeant en calcul; nécessite des cœurs spécialisés (RT Cores chez NVIDIA).  

## Pilotes et logiciels  
- **Windows** : GeForce Experience (NVIDIA), Radeon Software (AMD), Intel® Graphics Command Center:contentReference[oaicite:15]{index=15}.  
- **Linux** : pilotes propriétaires NVIDIA, AMDGPU/AMDGPU‑PRO pour AMD, Mesa pour Intel, outils comme **MangoHud** pour monitorer vos FPS.  

## Glossaire rapide  
- **FPS** : images par seconde, indicateur clé de fluidité.  
- **TDP** : puissance thermique, correspond à la consommation max, détermine les besoins en alimentation et refroidissement.  
- **PCIe x16** : interface standard pour connecter un GPU, version 4.0/5.0 pour plus de bande passante.  

Ce **GPU 101** vous donne les notions essentielles pour comprendre le jargon et prendre une décision éclairée lors de l’achat de votre prochaine carte graphique.`,
    }
    
    ,
    {
      slug: "",
      title: "",
      content: "",
      image: ""
    }
    // ... autres leçons
  ]
} as const;