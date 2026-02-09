# Application de Révision CAP M.I.T FC - PWA

Application mobile de révision espacée pour le CAP Monteur en Installations Thermiques.

## 🚀 Installation

### Sur Android

1. Ouvrez Chrome et naviguez vers l'application
2. Appuyez sur le menu (⋮) en haut à droite
3. Sélectionnez "Ajouter à l'écran d'accueil"
4. Confirmez l'installation

### Sur iPhone

1. Ouvrez Safari et naviguez vers l'application
2. Appuyez sur le bouton Partager (icône carré avec flèche)
3. Faites défiler et sélectionnez "Sur l'écran d'accueil"
4. Appuyez sur "Ajouter"

## 📱 Fonctionnalités

### ✅ Révision espacée intelligente
- Algorithme SM-2 (comme Anki)
- Intervalles adaptatifs selon vos performances
- 5 nouvelles questions par jour automatiquement

### 🔔 Notifications quotidiennes
- Rappels personnalisables
- Définissez votre heure de révision préférée
- Notifications natives sur mobile

### 📊 Suivi de progression
- Statistiques détaillées
- Calendrier des 30 derniers jours
- Série de jours consécutifs
- Taux de maîtrise

### 🗂️ Fiches de révision
- Fiches interactives pour concepts difficiles
- Points clés et explications
- Focus sur vos difficultés

### 💾 Sauvegarde
- Données stockées localement
- Export/import de vos données
- Fonctionne hors ligne

## 🔧 Création des icônes

Pour générer les icônes PNG depuis le SVG :

### Option 1 : Avec Inkscape (gratuit)
```bash
# Installer Inkscape
sudo apt install inkscape

# Générer les icônes
inkscape icon.svg --export-filename=icon-192.png --export-width=192 --export-height=192
inkscape icon.svg --export-filename=icon-512.png --export-width=512 --export-height=512
```

### Option 2 : Avec ImageMagick
```bash
# Installer ImageMagick
sudo apt install imagemagick

# Générer les icônes
convert -background none -resize 192x192 icon.svg icon-192.png
convert -background none -resize 512x512 icon.svg icon-512.png
```

### Option 3 : En ligne
1. Allez sur https://cloudconvert.com/svg-to-png
2. Uploadez `icon.svg`
3. Réglez la taille (192x192 puis 512x512)
4. Téléchargez les fichiers

## 🌐 Déploiement

### Hébergement local
```bash
# Avec Python
cd app-revision
python3 -m http.server 8000
# Ouvrez http://localhost:8000
```

### Hébergement en ligne (gratuit)

#### GitHub Pages
1. Créez un repo GitHub
2. Uploadez tous les fichiers
3. Activez GitHub Pages dans Settings
4. Accédez via `https://votre-nom.github.io/nom-repo`

#### Netlify
1. Allez sur netlify.com
2. Glissez-déposez le dossier `app-revision`
3. Votre app est en ligne !

#### Vercel
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
cd app-revision
vercel
```

## 📚 Contenu

L'application contient **30 questions** couvrant :

- **Stage 1** : Sécurité, atelier, dessin technique, systèmes de base
- **Stage 2** : Théorie, évacuation, émetteurs, sécurité, mesures
- **Stage 3** : Gaz, solaire, ventilation, protection
- **Stage 4** : Chauffage, circuits hydrauliques, régulation, générateurs

Chaque question inclut :
- 4 réponses possibles
- Explication détaillée
- Points clés à retenir

## 🔒 Confidentialité

- Toutes les données sont stockées **localement** sur votre appareil
- Aucune donnée n'est envoyée à un serveur
- Aucun compte requis
- Aucun tracking

## 🛠️ Technologies

- **PWA** (Progressive Web App)
- **Service Worker** pour fonctionnement hors ligne
- **Web Push API** pour les notifications
- **LocalStorage** pour la sauvegarde
- **Vanilla JavaScript** (pas de framework)

## 📖 Algorithme de répétition espacée

L'application utilise une version simplifiée de l'algorithme **SM-2** (SuperMemo 2) :

1. **Nouvelle carte** : Révision dans 1 jour
2. **Première révision réussie** : Révision dans 6 jours
3. **Révisions suivantes** : Intervalle × facteur de facilité (2.5 par défaut)
4. **Échec** : Recommencer à 1 jour

Le facteur de facilité s'ajuste selon votre évaluation (Difficile/Moyen/Facile).

## 🎯 Conseils d'utilisation

1. **Révisez chaque jour** pour maintenir votre série
2. **Soyez honnête** avec l'évaluation de difficulté
3. **Consultez les fiches** pour les concepts difficiles
4. Une question est "maîtrisée" après plusieurs révisions espacées réussies
5. **Activez les notifications** pour ne jamais oublier vos révisions

## 🐛 Problèmes connus

- Les notifications peuvent ne pas fonctionner sur iOS (limitation Safari)
- Sur certains anciens navigateurs, l'installation PWA n'est pas disponible

## 📞 Support

Pour toute question ou problème, consultez la documentation du CAP M.I.T FC ou contactez votre formateur.

## 📄 Licence

Cette application est un outil pédagogique pour les étudiants du CAP M.I.T FC.

---

**Bonne révision ! 🎓**
