export default {
  meta: {
    slug: "pc-RAM",
    title: "Choisir sa mémoire vive (RAM)",
    description: "Apprenez à comprendre et à choisir la quantité de RAM idéale pour votre ordinateur",
    price: 1,
  },
  lessons: [
    {
      slug: "quest-ce-que-la-ram",
      title: "Comprendre ce qu'est la mémoire vive",
      content: `
# Qu'est-ce que la mémoire vive (RAM) ? 💡

La mémoire vive, souvent appelée RAM (Random Access Memory), est un composant central de ton ordinateur. Elle permet à ton processeur d’accéder aux données rapidement — comme un plan de travail bien organisé dans une cuisine 🧑‍🍳

## Définition simple

La RAM est une sorte d’"espace de travail" pour ton processeur. Chaque fois que tu ouvres une application, elle est chargée ici pour que tout aille vite. Contrairement au disque dur ou SSD, la RAM est **volatil** : tout s’efface quand tu éteins ton PC ⚡

## Comment ça marche ? 🤔

Imagine que ton processeur est un cuisinier, et que la RAM est son plan de travail. Plus il y a d’espace, plus il peut cuisiner de plats en même temps sans aller chercher constamment ses ingrédients dans la cave 🍴

## Ce qu’il faut retenir 📝

* **Capacité** 📏 : En Go, détermine combien de données peuvent être stockées temporairement.
* **Fréquence** 🚀 : En MHz, montre à quelle vitesse la RAM peut lire/écrire des données.
* **Latence** 🕒 : Le temps pour accéder aux données (ex: CL16).
* **Type** 🔁 : DDR4, DDR5… chaque génération apporte des améliorations techniques.

## Pourquoi c’est important ? 🧠

Si tu n’as pas assez de RAM, ton ordi doit constamment aller chercher des données sur le disque → cela ralentit tout 😤  
C’est comme si le cuisinier devait retourner chercher ses ingrédients à chaque fois dans la cave 🧊

Donc, avoir suffisamment de RAM, c’est essentiel pour rester rapide et efficace, surtout si tu joues, stream ou travailles sur de gros projets 🎮💻
`,
      image: "/images/ram-explained.jpg"
    },
    {
      slug: "besoins-en-ram",
      title: "Évaluer tes besoins en RAM",
      content: `
# Comment savoir combien de RAM te faut ? 🤷‍♂️

Ce n’est pas compliqué : tout dépend de **ce que tu fais avec ton PC**. Voici une petite aide pour t’y retrouver :

## Tu fais quoi sur ton ordi ? 🧐

### Utilisation basique (4-8 Go)
* Naviguer sur Internet
* Faire du traitement de texte
* Regarder des vidéos

### 💼 Usage courant (8-16 Go)
* Plusieurs onglets web ouverts
* Retouche photo légère (Photoshop, Canva)
* Jouer à des jeux classiques

### 🎮 / 🖥️ Usage intensif (16-32 Go)
* Jeux modernes (Cyberpunk, Valorant, etc.)
* Montage vidéo ou modélisation 3D (Blender, Adobe Premiere)
* Machines virtuelles légères
* Multitâche intense

### 🚀 Profesionnel / Créateur (32 Go et +)
* Montage vidéo haute résolution (4K/8K)
* IA, programmation avancée, serveurs locaux
* Modélisation 3D complexe

## Et le système d'exploitation ? 🤖

Ton OS prend aussi un peu de place :
* **Windows 10/11** : minimum 4 Go, idéal 8 Go+
* **macOS** : recommandé 16 Go minimum
* **Linux** : entre 2 et 4 Go selon la version

## Signes d’une RAM insuffisante 🛑

Tu as peut-être besoin de plus de RAM si :
* Ton PC ralentit quand tu ouvres plusieurs onglets
* Tes applications se bloquent souvent
* Ton ventilateur tourne à fond pour pas grand-chose
* Tu attends longtemps avant qu’un logiciel ne s’ouvre

En résumé : **plus tu veux faire de choses en même temps, plus tu as besoin de RAM** 😉
`,
      image: "/images/ram-usage-chart.jpg"
    },
    {
      slug: "types-de-ram",
      title: "Les différents types de RAM",
      content: `
# Les générations de RAM : DDR4 vs DDR5 🆚

Il existe plusieurs types de RAM, mais aujourd’hui, tu rencontreras principalement deux générations : **DDR4** et **DDR5**.

## La DDR4 – Celle qu’on connaît bien 🧓

C’est celle qui équipait la plupart des machines jusqu’en 2021 :
* Fréquences : 2133 MHz à environ 4800 MHz
* Tension électrique : 1.2V
* Capacités : 4Go à 32Go par barrette
* Compatible avec : les cartes mères sorties entre 2014 et 2021

Elle reste très utilisée dans les configurations abordables ou semi-pro.

## La DDR5 – La nouvelle génération 🔥

Celle-ci arrive sur les configs récentes et promet de belles performances :
* Fréquences : départ à 4800 MHz, pouvant monter à 8400 MHz et plus
* Tension : 1.1V → donc plus économe en énergie ⚡
* Capacités : de 8Go à 64Go par barrette
* Compatible avec : les nouvelles cartes mères (Intel 12e gen, AMD Ryzen 7000+)

Avec la DDR5, tu gagnes en vitesse, en capacité et en efficacité énergétique 🌱

## Pour les portables 💻

Ici, la RAM est souvent en format **SODIMM** :
* Même génération (DDR4 ou DDR5)
* Moins encombrant
* Parfois soudé sur la carte mère (pas modifiable)

## Et la VRAM ? (Pour les gamers et créateurs) 🎨

C’est la RAM de ta **carte graphique** :
* GDDR6, GDDR6X ou HBM2 sont les formats actuels
* Essentielle pour jouer en HD ou faire du montage vidéo
* Plus il y en a, mieux c’est (surtout pour les jeux 4K ou l’IA) 🎮

## Petite attention importante 👀

La RAM DDR4 ne fonctionne pas sur une carte mère DDR5 (et vice-versa). Donc vérifie toujours **la compatibilité** avant d’acheter ! 🔍
`,
      image: "/images/ram-types.jpg"
    },
    {
      slug: "installation-optimisation",
      title: "Installation et optimisation de la RAM",
      content: `
# Installe ta RAM comme un pro 🛠️

Pas besoin d'être expert pour ajouter de la RAM. Suivez ces étapes et vous serez bon 👨‍💻

## Installation sur un PC de bureau 🧰

1. **Éteins ton PC** et débranche-le de la prise 🔌
2. Ouvre le boîtier (panneau latéral) 🧱
3. Touche une surface métallique → décharge l’électricité statique ⚡
4. Trouve les emplacements RAM sur la carte mère 🗺️
5. Pince les clips de chaque côté du slot 📌
6. Insère la barrette **bien droit**, en appuyant doucement 🧩
7. Une fois bien enfoncée, les clips reviennent automatiquement ✔️
8. Referme ton boîtier et redémarre 🔄

## Optimise comme il faut 🚀

* **Dual Channel** 🔄 : Si tu as 2 barrettes identiques, mets-les dans des slots appariés (cf. manuel de ta carte mère)
* **Évite le mélange** 🙅‍♂️ : Barrettes différentes = risques de bugs ou mauvaise performance
* **Active le XMP/DOCP** 🔁 : Dans le BIOS, active le profil hautes performances pour profiter pleinement de ta RAM

## Petits conseils pratiques 📌

* Ne branche jamais ton PC sans avoir fini ton installation ❌🔌
* Prends toujours des photos avant/durant le montage 📸
* Si tu es timide avec le matériel, commence par regarder une vidéo YouTube 👀

Une fois installée, teste avec un outil comme **Task Manager (Ctrl + Maj + Échap)** ou **HWMonitor** pour voir si tout est bien détecté ✅
`,
      image: "/images/ram-installation.jpg"
    },
    {
      slug: "achat-recommandations",
      title: "Conseils d'achat et recommandations",
      content: `
# Conseils d’achat : comment bien choisir ta RAM ? 🛒

Voici quelques astuces pour acheter ta RAM sans te perdre dans les chiffres 😄

## Avant d’acheter : pense à ça 🤔

### 🔌 Vérifie la compatibilité
* DDR4 ou DDR5 ?
* Est-ce que ta carte mère supporte cette fréquence ?
* Combien de slots disponibles ?

### ⚡ Performances
* Plus la fréquence est élevée, meilleure est la fluidité 🚀
* Une latence faible = réactivité accrue 🕒
* Timing (ex: CL16-18-18-36) = indicateur de rapidité

## Notre avis sur les gammes 🎯

### 🟢 Budget serré
* 8 Go (2x4Go) DDR4 2666 MHz
* Bon pour usage bureautique
* Prix : 30 à 50 € 💰

### 🟡 Milieu de gamme
* 16 Go (2x8Go) DDR4 3200 MHz CL16
* Idéal pour gaming ou création légère
* Prix : 60 à 90 € 💹

### 🔵 Haut de gamme
* 32 Go (2x16Go) DDR4 3600 MHz ou DDR5 5200 MHz
* Parfait pour les joueurs ou créateurs
* Prix : 120 à 200 € 💪

### 💜 Pro / Hardcore
* 64 Go (2x32Go) DDR5 6000 MHz et plus
* Pour ceux qui bossent sur de gros projets ou font de l’IA 🤖
* Prix : 250 à 500 € 💎

## À retenir 📝

* Achète toujours un **kit complet** (2x8Go, 2x16Go…) pour profiter du dual channel 🔄
* Privilégie les marques connues 📈 : Corsair, G.Skill, Kingston, Crucial, Samsung
* Garantie à vie = toujours mieux que 3 ans 🛡️
* RGB = joli mais inutile pour les performances 🎨

Et voilà ! Maintenant, tu es prêt à choisir ta RAM comme un vrai pro 👇
`,
      image: "/images/ram-buying-guide.jpg"
    }
  ]
};