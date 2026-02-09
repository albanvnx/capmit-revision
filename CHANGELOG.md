# Changelog - Application de révision CAP M.I.T FC v2.0

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
