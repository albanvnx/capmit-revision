# Changelog - Application de révision CAP M.I.T FC

## Version 2.1 - 2026-02-14

### 🎉 Nouvelles fonctionnalités majeures

#### 1. Système de progression par stages 📚
- **Sélection des stages à réviser** : choisissez quels stages activer selon votre progression
- **4 stages renommés** selon leur contenu réel :
  - 🎓 **Fondamentaux & Sécurité** (ex-Stage 1) : Atelier, dessin, sécurité, bases
  - 🔧 **Systèmes Thermiques** (ex-Stage 2) : ECS, évacuation, émetteurs
  - ⚙️ **Systèmes Avancés** (ex-Stage 3) : Gaz, solaire, VMC
  - 🔥 **Chauffage** (ex-Stage 4) : Circuits, régulation, dimensionnement
- **Par défaut** : seul "Fondamentaux & Sécurité" activé pour les débutants
- **Filtrage automatique** : questions filtrées selon les stages sélectionnés
- **Progression sauvegardée** : préférences stockées dans localStorage

#### 2. Nouvel onglet "Formules" 📐
Toutes les formules essentielles pour le CAP M.I.T FC organisées par sections :
- **🔄 Conversions courantes** : longueurs, volumes, débits, puissance, pression, température
- **🔧 Diamètres cuivre** : tableau complet DN avec équivalences pouces et usage
- **📏 Formules cintrage cuivre** : périmètre, longueur développée, rayon minimum, matrices
- **🔩 Acier et taraudage** : diamètres, filetages gaz ISO 228, longueur de filetage
- **🔥 Formules chauffage** : puissance, déperditions, coefficients isolation, débit circulation
- **💧 Formules hydraulique** : débit, vitesse, pression hydrostatique, perte de charge
- **↘️ Évacuation - Pentes** : calcul pentes, pentes minimales EU, diamètres évacuation
- **📐 Surfaces et volumes** : rectangle, cercle, parallélépipède, cylindre, périmètre

#### 3. 30 nouvelles questions de conversion 🔢
Questions QCM sur les conversions les plus courantes :
- mm/cm/m/pouces (q201-q203, q208, q215, q219)
- L/min ↔ L/h ↔ m³/h (q204-q205, q220)
- kW/W (q206-q207, q225)
- bar/Pa/kPa (q212-q213)
- °C/K (q214)
- Surfaces et volumes (q210-q211, q216-q217, q226)
- Pentes (q218, q230)
- Calculs pratiques (q221-q224, q227-q229)

**Total : 230 questions** (200 avant + 30 conversions)

### 🔧 Améliorations techniques

- **Service Worker v2.1** : cache mis à jour
- **Architecture** : méthode `getFilteredQuestions()` dans QuizMode
- **Persistance** : préférences de stages dans localStorage
- **Filtrage intelligent** : les "Conversions" sont toujours incluses quel que soit le stage
- **UI/UX** : section sélection de stages dans Réglages avec badges visuels
- **Performance** : filtrage optimisé des questions

### 📊 Statistiques finales v2.1

- **Total questions** : 230 (200 + 30 conversions)
- **Questions avec images** : 28
- **Catégories** : 22 (21 + Conversions)
- **Stages** : 4 (progression par étape)
- **Outils de calcul** : 6
- **Formules** : 7 sections complètes
- **Taille totale** : ~13 MB (app + images)

### 🎨 Interface

Nouveaux onglets :
- 📐 **Formules** : toutes les formules essentielles

Onglets existants améliorés :
- ⚙️ **Réglages** : nouvelle section "Stages à réviser"
- ❓ **Quiz** : filtrage selon stages actifs
- 📅 **Révision** : questions filtrées selon stages

### 🚀 Déploiement

- **URL** : https://albanvnx.github.io/capmit-revision/
- **Mise à jour** : automatique via service worker v2.1

### 📝 Notes de mise à jour

**Pour les nouveaux utilisateurs** :
- Par défaut, seul le stage "Fondamentaux & Sécurité" est activé
- Activez les stages suivants au fur et à mesure de votre progression
- 30 questions de conversion toujours disponibles

**Pour les utilisateurs existants** :
- Vos données de progression sont conservées
- Par défaut, seul le stage 1 sera activé au premier lancement v2.1
- Activez les autres stages dans Réglages selon votre niveau

---

## Version 2.0 - 2026-02-09

### 🎉 Nouvelles fonctionnalités majeures

#### 1. Mode Quiz libre ❓
- **Entraînement sans impact sur la révision espacée**
- Filtrage par catégorie (21 catégories disponibles)
- Filtrage par difficulté (facile/moyen/difficile)
- Mélange aléatoire des questions (algorithme Fisher-Yates)
- Scoring en temps réel et écran de résultats détaillé
- Explications et points clés après chaque réponse

#### 2. Calculatrice de chantier 🧮
Six outils pratiques pour les installations :
- **📏 Convertisseur d'unités** : mm ↔ cm ↔ m ↔ pouces
- **🔥 Puissance de chauffage** : calcul selon surface, hauteur, isolation
- **💧 Débit d'eau** : conversion L/min ↔ L/h ↔ m³/h
- **↘️ Pente d'évacuation** : calcul dénivelé selon longueur et pente %
- **🔧 Diamètres tuyauterie** : tableau équivalences cuivre/PVC/acier
- **📐 Surface et volume** : calcul rectangles et pièces

#### 3. Support d'images techniques 🖼️
- 33 images techniques haute qualité (11 MB total)
- Images intégrées dans les questions de révision
- Zoom au clic sur les images
- Cache dynamique pour mode hors ligne

##### Images disponibles :
- **Symboles** (6) : tous les symboles normalisés de chauffage
- **Schémas** (5) : circuits hydrauliques et isométriques
- **Raccords** (5) : photos cuivre et acier
- **Solaire** (11) : systèmes CESI complets
- **Évacuation** (6) : réseaux sanitaires

#### 4. Niveaux de difficulté 🎯
- Badge visuel pour chaque question (😊 Facile, 🤔 Moyen, 😰 Difficile)
- Filtrage possible dans le mode Quiz
- Aide à la progression pédagogique

#### 5. Contenu enrichi 📚
- **200 questions** (vs 160 avant)
- 40 nouvelles questions ajoutées :
  - 10 sur symboles/schémas
  - 10 sur raccords cuivre/acier
  - 8 sur solaire thermique (CESI)
  - 7 sur évacuation des eaux
  - 5 sur calculs pratiques
- 25 questions avec images intégrées

### 🔧 Améliorations techniques

- **Service Worker v2.0** : cache dynamique pour les images
- **Performance** : optimisation taille images (11 MB pour 33 fichiers)
- **Architecture** : 2 nouvelles classes (QuizMode, ConstructionCalculator)
- **UI/UX** : design cohérent avec l'application existante
- **Responsive** : tous les nouveaux onglets optimisés mobile

### 📊 Statistiques finales

- **Total questions** : 200 (163 initiales + 40 nouvelles - 3 test)
- **Questions avec images** : 28
- **Catégories** : 21
- **Outils de calcul** : 6
- **Taille totale** : ~13 MB (app + images)
- **Mode hors ligne** : 100% fonctionnel

### 🎨 Interface

Nouveaux onglets :
- ❓ **Quiz** : mode entraînement libre
- 🧮 **Calcul** : calculatrice de chantier

Onglets existants conservés :
- 📅 Révision (révision espacée SM-2)
- 🗂️ Fiches (flashcards)
- 📊 Stats (progression)
- 📆 Calendrier (historique)
- ⚙️ Réglages (notifications, données)

### 🚀 Déploiement

- **URL** : https://albanvnx.github.io/capmit-revision/
- **GitHub** : https://github.com/albanvnx/capmit-revision
- **PWA** : installable sur Android et iOS
- **Déploiement** : automatique via GitHub Pages

### 📝 Notes de mise à jour

Cette version transforme l'application de révision espacée en une **plateforme d'apprentissage complète** pour le CAP M.I.T FC (Monteur en Installations Thermiques) avec :
- Mode apprentissage (révision espacée)
- Mode entraînement (quiz libre)
- Outils pratiques (calculatrice)
- Ressources visuelles (images techniques)

Toutes les fonctionnalités existantes sont conservées et améliorées.

---

## Version 1.0 - 2026-01-XX (antérieur)

- 160 questions de révision CAP M.I.T FC
- Système de révision espacée (algorithme SM-2)
- 5 onglets : Révision, Fiches, Stats, Calendrier, Réglages
- Service Worker pour mode hors ligne
- PWA installable
