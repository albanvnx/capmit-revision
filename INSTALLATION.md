# 📱 Guide d'Installation - Application Révision CAP M.I.T FC

## 🎯 Pour utiliser sur votre téléphone

### Étape 1 : Mettre l'application en ligne

Vous avez plusieurs options **GRATUITES** :

#### Option A : GitHub Pages (Recommandé) ⭐

1. **Créer un compte GitHub** (si vous n'en avez pas) : https://github.com/signup

2. **Créer un nouveau repository** :
   - Cliquez sur "New repository"
   - Nom : `revision-cap` (ou autre nom)
   - Cochez "Public"
   - Cliquez "Create repository"

3. **Uploader les fichiers** :
   - Cliquez "uploading an existing file"
   - Glissez tous les fichiers du dossier `app-revision`
   - Cliquez "Commit changes"

4. **Activer GitHub Pages** :
   - Allez dans Settings (⚙️)
   - Dans le menu latéral : Pages
   - Source : sélectionnez "main" branch
   - Cliquez Save

5. **Accéder à votre app** :
   - URL : `https://VOTRE-NOM.github.io/revision-cap`
   - Attendez 1-2 minutes pour le déploiement

#### Option B : Netlify (Plus simple) 🚀

1. Allez sur https://app.netlify.com/drop
2. Glissez-déposez le dossier `app-revision` complet
3. Votre app est en ligne immédiatement !
4. Vous obtenez une URL comme : `https://random-name.netlify.app`

#### Option C : Serveur local (Pour tester)

```bash
cd /home/ubuntu/Documents/Claude/app-revision
python3 -m http.server 8000
```

Puis ouvrez : http://localhost:8000

**⚠️ Cette option ne fonctionne que sur votre ordinateur**

---

### Étape 2 : Installer sur votre téléphone

Une fois l'application en ligne :

#### Sur Android (Chrome)

1. **Ouvrez Chrome** sur votre téléphone
2. **Allez sur l'URL** de votre app
3. Une bannière apparaît : **"Ajouter à l'écran d'accueil"**
   - Si elle n'apparaît pas : Menu (⋮) → "Installer l'application"
4. **Confirmez** l'installation
5. L'icône apparaît sur votre écran d'accueil 🎉

#### Sur iPhone (Safari)

1. **Ouvrez Safari** sur votre iPhone
2. **Allez sur l'URL** de votre app
3. Appuyez sur le **bouton Partager** (carré avec flèche)
4. Faites défiler et sélectionnez **"Sur l'écran d'accueil"**
5. Nommez l'app : "Révision CAP"
6. Appuyez sur **"Ajouter"**
7. L'icône apparaît sur votre écran d'accueil 🎉

---

### Étape 3 : Activer les notifications

1. **Ouvrez l'app** depuis votre écran d'accueil
2. Allez dans l'onglet **⚙️ Réglages**
3. Activez **🔔 Rappels quotidiens**
4. Autorisez les notifications quand demandé
5. Choisissez votre heure de rappel préférée

---

## ✅ Vérification

Votre app est bien installée si :

- ✅ Une icône "Révision CAP" est sur votre écran d'accueil
- ✅ L'app s'ouvre en plein écran (pas dans le navigateur)
- ✅ Vous pouvez utiliser l'app sans internet (après la première visite)
- ✅ Vous recevez des notifications aux heures définies

---

## 🎓 Utilisation quotidienne

1. **Chaque jour**, ouvrez l'app
2. Faites votre **session de révision**
3. **Évaluez** chaque question (Difficile/Moyen/Facile)
4. L'app **adapte automatiquement** les prochaines révisions
5. Maintenez votre **série** 🔥

---

## 💡 Astuces

### Partager avec vos camarades

Envoyez-leur simplement l'URL de votre app !

### Sauvegarder vos données

1. Allez dans **⚙️ Réglages**
2. Cliquez **📥 Exporter mes données**
3. Gardez le fichier JSON en sécurité

### Synchroniser entre appareils

1. Exportez vos données depuis l'appareil 1
2. Envoyez-vous le fichier par email
3. Sur l'appareil 2, vous pouvez créer une fonction d'import (à développer)

---

## ❓ Problèmes fréquents

### L'app ne s'installe pas

- **Android** : Assurez-vous d'utiliser Chrome (pas Firefox/Opera)
- **iPhone** : Utilisez Safari (pas Chrome)
- Vérifiez que l'app est bien en HTTPS (pas HTTP)

### Pas de notifications

- **iPhone** : Safari ne supporte pas bien les notifications web (limitation Apple)
- **Android** : Vérifiez dans Paramètres → Applis → Révision CAP → Notifications

### Les données sont perdues

- Si vous effacez les données du navigateur, tout est perdu
- Pensez à exporter régulièrement vos données
- Les données sont liées au navigateur/appareil

### L'app ne fonctionne pas hors ligne

- Assurez-vous d'avoir visité l'app une fois avec internet
- Le Service Worker doit être activé (automatique)

---

## 📞 Besoin d'aide ?

### Test rapide sur ordinateur

```bash
cd /home/ubuntu/Documents/Claude/app-revision
python3 -m http.server 8000
```

Ouvrez http://localhost:8000 dans Chrome et testez l'app !

### Hébergement recommandé

Pour un usage sérieux, utilisez **Netlify** ou **GitHub Pages**.
Les deux sont :
- ✅ Gratuits
- ✅ En HTTPS automatique
- ✅ Fiables
- ✅ Simples à utiliser

---

## 🚀 Prêt !

Vous êtes maintenant prêt à réviser efficacement pour votre CAP M.I.T FC !

**Bon courage pour vos révisions ! 🎓📚🔧**
