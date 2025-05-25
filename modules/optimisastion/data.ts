// modules/pc-gaming/data.ts

export default {
  meta: {
    slug: "pc-gaming-optimization",
    title: "PC Gaming Elite: Guide d'Optimisation Ultime",
    icon: "🎮",
    description: "Découvrez les secrets des pros pour booster les performances de votre PC gaming sans changer de matériel. Optimisations système, astuces logicielles et configurations de jeux expliquées simplement.",
    duration: "5 heures",
    image: "",
    difficulty: "débutant",
    author: "Tech Gaming Pro",
    price: 29.99,
  },
  
  lessons: [
    {
      slug: "introduction-optimisation",
      title: "Pourquoi optimiser son PC gaming?",
      content: `# Pourquoi optimiser son PC gaming?

## L'importance de l'optimisation pour chaque joueur

Que vous ayez un PC d'entrée de gamme ou une machine haut de gamme, l'optimisation est **essentielle** pour tirer le maximum de votre matériel. Un PC bien réglé peut offrir jusqu'à 20-30% de performances supplémentaires dans vos jeux préférés sans dépenser un centime en nouveau matériel!

### Ce que vous apprendrez dans ce module:

- Comment identifier les goulots d'étranglement qui limitent vos FPS
- Les réglages système qui font vraiment la différence
- Les outils gratuits utilisés par les professionnels
- Comment configurer chaque jeu pour un équilibre parfait entre qualité visuelle et fluidité

## Le syndrome du "PC gaming qui rame"

Votre PC neuf qui ralentit après quelques mois? Un jeu qui tournait parfaitement mais qui devient soudainement saccadé? Ce ne sont pas des fatalités - ce sont des problèmes que nous allons résoudre ensemble.

### Témoignage: 
*"J'ai suivi ces techniques d'optimisation et je suis passé de 45 FPS instables à 70+ FPS constants sur Cyberpunk 2077, sur le même PC!"* - Thomas L., gamer depuis 15 ans

## Pourquoi ce guide est différent

Ce n'est pas une simple liste de "astuces" trouvées sur Internet. Chaque technique a été:
- Testée sur différentes configurations
- Quantifiée avec des mesures précises (avant/après)
- Expliquée pour que vous compreniez POURQUOI ça fonctionne

Prêt à transformer votre expérience de jeu? Commençons!`,
      image: "/assets/why-optimize-gaming.jpg",
      duration: "20 minutes"
    },
    
    {
      slug: "windows-gaming-optimisation",
      title: "Optimisations Windows essentielles",
      content: `# Optimisations Windows essentielles

## Le Mode Jeu de Windows: votre premier allié

Windows intègre depuis sa version 10 un "Mode Jeu" spécialement conçu pour donner la priorité à vos jeux. Quand ce mode est activé:

- Les mises à jour sont suspendues pendant votre session de jeu
- Les notifications sont automatiquement désactivées
- Le CPU et le GPU travaillent en priorité pour votre jeu, pas pour les tâches en arrière-plan

### Comment l'activer:
1. Ouvrez les **Paramètres Windows** (touche Windows + I)
2. Sélectionnez **Jeux**
3. Cliquez sur **Mode de jeu**
4. Activez l'option

![Activation du Mode Jeu](/assets/game-mode-activation.jpg)

> **Conseil de pro**: Parfois, le Mode Jeu peut interférer avec certains jeux plus anciens. Si vous constatez des problèmes, essayez de le désactiver pour ce jeu spécifique.

## Désactiver les services Windows inutiles

Windows fait tourner de nombreux services en arrière-plan qui consomment des ressources précieuses sans être utiles pour les jeux. Voici comment les identifier et les désactiver:

### Services sûrs à désactiver:
- **Service Windows Search** (indexation) - économise CPU et disque
- **Services d'impression** (si vous n'imprimez pas en jouant!)
- **Windows Update** (à désactiver temporairement pendant les sessions de jeu)
- **Bluetooth** (si vous n'utilisez pas de périphériques Bluetooth)

### Comment procéder:
1. Appuyez sur **Windows + R**, tapez \`services.msc\` et validez
2. Pour chaque service que vous souhaitez désactiver:
   - Double-cliquez sur le service
   - Changez "Type de démarrage" sur "Désactivé" ou "Manuel"
   - Cliquez sur "Arrêter" si le service est en cours d'exécution
   - Validez avec "OK"

> **ATTENTION**: Ne désactivez jamais les services suivants: Windows Defender, Services réseau de base, Services graphiques. Cela pourrait compromettre la sécurité ou la stabilité de votre système.

## Plan d'alimentation "Performances élevées"

Par défaut, Windows cherche à économiser de l'énergie, ce qui limite les performances de votre processeur. Pour le gaming, nous voulons l'inverse!

### Configuration du plan d'alimentation optimal:
1. Ouvrez le **Panneau de configuration**
2. Accédez à **Système et sécurité > Options d'alimentation**
3. Sélectionnez **Performances élevées**
   - Si vous ne voyez pas cette option, cliquez sur "Afficher les plans supplémentaires"
   - Ou créez un plan personnalisé basé sur "Performances élevées"

### Réglages avancés recommandés:
- **État de veille du processeur**: Définir sur "Jamais"
- **Gestion de l'alimentation PCI Express**: "Performances maximales"
- **Performances du processeur**: "100%" min et max

## Désactiver les effets visuels superflus

Windows utilise de nombreux effets visuels qui consomment des ressources GPU/CPU sans apporter de valeur à votre gaming:

1. Appuyez sur **Windows + R**, tapez \`sysdm.cpl\` et validez
2. Onglet **Paramètres système avancés**
3. Dans la section "Performances", cliquez sur **Paramètres**
4. Sélectionnez **Ajuster afin d'obtenir les meilleures performances**
   - Ou personnalisez en gardant uniquement "Lisser les polices d'écran" activé

## Nettoyage système régulier

Un Windows encombré est un Windows lent! Voici 3 opérations de maintenance essentielles:

### 1. Nettoyer les fichiers temporaires:
- Utilisez la combinaison **Windows + R**, tapez \`%temp%\` et supprimez le contenu
- Utilisez l'outil **Nettoyage de disque** intégré à Windows

### 2. Désinstaller les applications inutilisées:
- Via **Paramètres > Applications** ou le Panneau de configuration
- Utilisez un outil comme Revo Uninstaller pour un nettoyage approfondi

### 3. Défragmenter (HDD) ou optimiser (SSD):
- Pour les disques HDD: défragmentation mensuelle
- Pour les SSD: activation du TRIM (généralement activé par défaut)

### Quel gain attendre?
Ces optimisations Windows peuvent représenter un gain de 5 à 15% sur les FPS dans vos jeux préférés, particulièrement sur les systèmes d'entrée ou milieu de gamme.`,
      image: "/assets/windows-gaming-optimize.jpg",
      duration: "45 minutes"
    },
    
{
  slug: "pilotes-graphiques",
  title: "Pilotes graphiques: la clé des performances",
  content: `# Pilotes graphiques: la clé des performances

## Pourquoi les pilotes sont cruciaux

Les fabricants de cartes graphiques (NVIDIA, AMD, Intel) publient régulièrement des mises à jour de pilotes qui:
- Optimisent les performances pour les nouveaux jeux
- Corrigent des bugs et améliorent la stabilité
- Ajoutent de nouvelles fonctionnalités

Un simple changement de pilote peut parfois offrir un gain de **5-10% de FPS** dans certains jeux, surtout les titres récents qui bénéficient d'optimisations spécifiques.

## NVIDIA: Optimisation avec GeForce Experience

GeForce Experience est l'outil officiel de NVIDIA qui simplifie la gestion des pilotes et l'optimisation des jeux.

### Installation et configuration:
1. Téléchargez [GeForce Experience](https://www.nvidia.com/fr-fr/geforce/geforce-experience/)
2. Créez un compte ou connectez-vous
3. Dans l'onglet **PILOTES**, utilisez "Rechercher les mises à jour"
4. Pour les pilotes:
   - Option "Express": installation rapide, paramètres par défaut
   - Option "Personnalisée": pour les utilisateurs avancés, permet de choisir les composants

![NVIDIA GeForce Experience](/assets/geforce-experience.jpg)

### Types de pilotes NVIDIA:
- **Game Ready**: stables, optimisés pour les jeux récents
- **Studio**: optimisés pour les applications créatives
- **Beta**: fonctionnalités expérimentales (à éviter pour un usage quotidien)

> **Conseil de pro**: N'activez pas les fonctionnalités "expérimentales" comme Resizable BAR ou Reflex sans recherche préalable - elles peuvent ne pas être compatibles avec tous les jeux.

## AMD: Radeon Software Adrenalin

Pour les possesseurs de cartes AMD, le logiciel Radeon propose des fonctionnalités similaires.

### Installation et utilisation:
1. Téléchargez [AMD Radeon Software](https://www.amd.com/fr/support)
2. Naviguez jusqu'à l'onglet **Système > Mises à jour**
3. Vérifiez la disponibilité de nouveaux pilotes

### Fonctionnalités AMD à connaître:
- **Radeon Boost**: améliore les performances dans les scènes à mouvement rapide
- **Radeon Anti-Lag**: réduit la latence d'entrée
- **Radeon Image Sharpening**: améliore la netteté sans impact significatif sur les performances

## Intel: Intel® Graphics Command Center

Les GPU intégrés Intel sous Windows bénéficient de l'**Intel® Graphics Command Center**, qui facilite la mise à jour des drivers et l'optimisation des jeux.

### Installation et configuration:
1. Téléchargez **Intel® Graphics Command Center** depuis le Microsoft Store
2. Lancez l'application et allez dans l'onglet **Pilotes**
3. Cliquez sur **Vérifier les mises à jour** pour installer le dernier pilote intégré

### Fonctionnalités clés:
- **Optimisation automatique des jeux** : profils préconfigurés selon le titre
- **Réglages de l'écran** : correction des couleurs, taux de rafraîchissement, HDR
- **Overclocking léger** : disponible sur certaines puces Intel® ARC
- **Outils de diagnostic** : monitoring en temps réel de l'utilisation du GPU, température et FPS

> **Astuce**: Profitez des mises à jour automatiques via le Microsoft Store pour toujours disposer du pilote le plus récent sans passer par le site Intel.

## Installation manuelle des pilotes

Pour une installation "propre" des pilotes (recommandé en cas de problèmes):

### Procédure NVIDIA:
1. Téléchargez DDU (Display Driver Uninstaller)
2. Redémarrez en mode sans échec
3. Exécutez DDU pour supprimer complètement les anciens pilotes
4. Redémarrez normalement
5. Installez les nouveaux pilotes téléchargés depuis le site NVIDIA

### Procédure AMD:
1. Même procédure avec DDU
2. Téléchargez les pilotes depuis le site officiel AMD plutôt que via Windows Update

### Procédure Intel:
1. Désinstallez l'ancien pilote Intel via **Paramètres > Applications**  
2. Téléchargez la dernière version du **Intel® Graphics Driver** sur le [centre de téléchargement Intel](https://downloadcenter.intel.com/)  
3. Exécutez l'installeur et suivez les instructions

## Pilotes sous Linux

Linux gagne en popularité pour le gaming grâce à Steam Proton. Les pilotes sont gérés différemment:

### NVIDIA sous Linux:
- Privilégiez les pilotes propriétaires (non open-source)
- Installation via "Pilotes supplémentaires" ou "Software & Updates" selon votre distribution

### AMD sous Linux:
- Les pilotes AMDGPU open-source sont maintenant très performants
- Pour les jeux exigeants, les pilotes AMDGPU-PRO peuvent offrir de meilleures performances

## Fréquence de mise à jour recommandée

- **Joueur casual**: tous les 3-4 mois
- **Joueur régulier**: tous les 1-2 mois
- **Joueur compétitif**: à chaque sortie de pilote "Game Ready" pour vos jeux préférés

N'oubliez pas: un pilote trop récent peut parfois introduire des bugs. Si vous constatez des problèmes après une mise à jour, n'hésitez pas à revenir à une version précédente stable.`,
  image: "/assets/gpu-drivers-update.jpg",
  duration: "30 minutes"
},

    
    {
      slug: "liberation-ressources",
      title: "Libérer RAM, CPU et ressources système",
      content: `# Libérer RAM, CPU et ressources système

## Identifier les programmes gourmands

Avant d'optimiser, il faut identifier ce qui ralentit votre système. Le Gestionnaire des tâches est votre meilleur allié:

1. Ouvrez le **Gestionnaire des tâches** (Ctrl + Shift + Esc)
2. Cliquez sur "Plus de détails" si l'affichage est simplifié
3. Triez par utilisation de **CPU**, **Mémoire** ou **GPU**
4. Identifiez les processus qui consomment trop de ressources

![Gestionnaire des tâches](/assets/task-manager-resources.jpg)

> **Astuce**: Activez "Toujours au premier plan" pour surveiller l'utilisation des ressources pendant que vous jouez.

## Programmes à fermer avant de jouer

### Haute priorité (fermeture recommandée):
- **Navigateurs web** (Chrome, Firefox, Edge) - jusqu'à 2 Go de RAM par onglet!
- **Applications de streaming** (OBS, Streamlabs) quand vous ne streamez pas
- **Clients de téléchargement** (BitTorrent, uTorrent)
- **Applications vidéo** (Adobe Premiere, DaVinci Resolve)

### Priorité moyenne (selon votre configuration):
- **Discord, TeamSpeak** (mode overlay désactivé)
- **Spotify** (peut rester ouvert si vous avez 16+ Go de RAM)
- **Clients de messagerie** (Outlook, Thunderbird)

### Applications système:
- **OneDrive, Dropbox** (synchronisation en arrière-plan)
- **Logiciels de contrôle RGB** (iCUE, Aura Sync)

## Désactiver les programmes au démarrage

Empêchez les programmes non essentiels de se lancer avec Windows:

1. Gestionnaire des tâches > onglet **Démarrage**
2. Désactivez les applications non essentielles
3. Redémarrez pour appliquer les changements

### Programmes sûrs à désactiver:
- Clients Steam, Epic, Origin (lancez-les uniquement quand nécessaire)
- Applications Adobe Creative Cloud
- Assistants de mise à jour de logiciels
- Skype, Teams, Zoom (quand non utilisés)

## Nettoyage de la RAM et optimisation

### Nettoyage manuel:
1. Fermez les applications inutilisées
2. Utilisez le raccourci **Windows + R**, tapez \`cmd\`
3. Dans l'invite de commandes: \`EmptyStandbyList\` (nécessite l'installation de RAMMap de Sysinternals)

### Nettoyage automatique:
- Utilisez **Razer Cortex** ou **Wise Game Booster** pour:
  - Libérer la RAM automatiquement
  - Fermer les services non essentiels
  - Optimiser les priorités des processus

## Optimisation du stockage

Les performances de votre jeu dépendent aussi de la rapidité d'accès aux données:

### Pour les disques HDD:
- Défragmentez régulièrement (mensuel)
- Évitez de remplir le disque à plus de 80% de sa capacité
- Installez les jeux sur un disque dédié (séparé du système)

### Pour les disques SSD:
- Maintenez au moins 10% d'espace libre
- Activez TRIM (généralement activé par défaut)
- Vérifiez que le SSD est bien en mode AHCI dans le BIOS

## Optimisation avancée du système

### Ajustement des priorités de processus:
1. Gestionnaire des tâches > clic droit sur votre jeu
2. "Définir la priorité" > "Supérieure" (jamais "Temps réel" qui peut bloquer le système)

### Affinité des cœurs CPU:
Pour les jeux plus anciens qui n'utilisent pas tous les cœurs:
1. Gestionnaire des tâches > clic droit sur le jeu
2. "Définir l'affinité" > Désélectionnez quelques cœurs pour éviter le "thread bouncing"

## Contrôle de la température

Un système qui surchauffe réduit automatiquement ses performances (throttling):

### Comment surveiller:
- Utilisez **HWMonitor** ou **MSI Afterburner** pour surveiller les températures en jeu
- CPU: idéalement sous 80°C en charge
- GPU: idéalement sous 85°C en charge

### Solutions simples:
- Nettoyez les ventilateurs et radiateurs (poussière)
- Améliorez l'aération du boîtier PC
- Vérifiez que la pâte thermique est récente (à remplacer tous les 2-3 ans)

## Résultats attendus

Ces optimisations de ressources peuvent libérer:
- **2-4 Go de RAM** supplémentaires
- **5-15% de puissance CPU** 
- **Réduction des micro-saccades** liées aux programmes en arrière-plan

Pour certains jeux CPU-bound (comme Minecraft, CS:GO), l'impact sur les FPS peut atteindre +20% simplement en libérant ces ressources système!`,
      image: "/assets/free-system-resources.jpg",
      duration: "40 minutes"
    },
    
    {
      slug: "outils-optimisation",
      title: "Outils gratuits d'optimisation gaming",
      content: `# Outils gratuits d'optimisation gaming

## Les meilleurs logiciels pour booster vos performances

Voici une sélection d'outils efficaces, tous gratuits, qui vous aideront à maximiser les performances de votre configuration.

## Razer Cortex: le couteau suisse du gaming

Razer Cortex est un outil polyvalent qui:
- Libère automatiquement la RAM avant de lancer un jeu
- Ferme les processus inutiles
- Optimise les paramètres système pour le gaming
- Offre un suivi des FPS intégré

### Installation et configuration:
1. Téléchargez Razer Cortex depuis le [site officiel](https://www.razer.com/cortex)
2. Installez et lancez l'application
3. Dans l'onglet **Booster**, cliquez sur "Boost" pour optimiser
4. Ajoutez vos jeux dans la bibliothèque Cortex
5. Activez l'option "Boost automatiquement quand je joue"

> **Conseil**: Personnalisez les processus à fermer en mode "Boost" via les paramètres avancés.

![Razer Cortex](/assets/razer-cortex.jpg)

## MSI Afterburner: monitoring et overclocking

MSI Afterburner est la référence pour:
- Surveiller en temps réel les performances (FPS, températures, utilisation)
- Overclocker la carte graphique de façon sécurisée
- Créer des profils personnalisés par jeu
- Ajuster la courbe de ventilation

### Fonctionnalités clés:
- **RivaTuner Statistics Server** (RTSS): affiche les FPS en jeu
- **Scanner OC**: trouve l'overclock stable automatiquement
- **Custom Fan Curve**: contrôle précis des ventilateurs

### Configuration recommandée:
1. Dans les paramètres, cochez "Démarrer avec Windows"
2. Configurez l'affichage On-Screen Display (OSD) pour montrer:
   - Framerate (FPS)
   - Température GPU
   - Utilisation GPU
   - Utilisation VRAM

![MSI Afterburner](/assets/msi-afterburner.jpg)

> **ATTENTION**: L'overclocking, même léger, annule généralement la garantie du matériel. Suivez des tutoriels spécifiques à votre modèle de carte.

## CCleaner: nettoyage système efficace

CCleaner vous aide à:
- Nettoyer les fichiers temporaires et inutiles
- Corriger les erreurs de registre Windows
- Gérer les programmes au démarrage
- Désinstaller proprement les logiciels

### Utilisation optimale:
1. Exécutez l'analyse standard dans l'onglet "Nettoyeur"
2. Utilisez l'outil "Registre" avec prudence (faites des sauvegardes)
3. Vérifiez régulièrement l'onglet "Démarrage" pour contrôler les programmes automatiques

> **Alternative gratuite**: BleachBit offre des fonctionnalités similaires dans un package open-source.

## Process Lasso: gestion avancée du CPU

Process Lasso est parfait pour:
- Prioriser automatiquement vos jeux (gaming mode)
- Empêcher les programmes en arrière-plan de monopoliser le CPU
- Répartir la charge entre les cœurs du processeur
- Limiter les processus "gourmands"

### Configuration pour le gaming:
1. Dans les paramètres, activez "Gaming Mode"
2. Dans "CPU Limiter", ajoutez les applications gourmandes à contrôler
3. Configurez la détection automatique des jeux

## ISLC (Intelligent Standby List Cleaner)

Ce petit utilitaire résout un problème courant sous Windows: l'accumulation de mémoire standby qui provoque des saccades (stuttering) dans les jeux.

### Comment l'utiliser:
1. Téléchargez ISLC depuis le forum [Wagnardsoft](https://www.wagnardsoft.com/)
2. Réglez "List size" sur 1024 MB
3. Activez "Start ISLC minimized and auto-start monitoring"
4. Cliquez sur "Start"

ISLC travaille silencieusement en arrière-plan et nettoie la mémoire standby lorsqu'elle atteint le seuil défini, réduisant considérablement les micro-saccades.

## Solutions Linux: GameMode et MangoHud

Pour les joueurs sous Linux, deux outils essentiels:

### Feral GameMode:
- Active automatiquement les optimisations système quand un jeu est lancé
- Ajuste la fréquence CPU/GPU au maximum
- Installation: \`sudo apt install gamemode\` (Ubuntu/Debian)
- Utilisation: lancez vos jeux avec \`gamemoderun ./jeu\``
    }]}