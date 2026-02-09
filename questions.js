// Base de données des questions CAP M.I.T FC - VERSION COMPLÈTE
// 150+ questions couvrant tous les stages

const allQuestions = [
    // ========== QUESTIONS TEST AVEC IMAGES (3 questions) ==========
    {
        id: 'qtest1',
        category: "Stage 4 - Symboles",
        difficulty: "easy",
        question: "Voici une page de symboles de chauffage. Ces symboles sont utilisés pour représenter les différents composants d'une installation thermique sur un schéma de principe.",
        image: "images/symboles/symbole-chauffage-1.png",
        imageAlt: "Page de symboles techniques de chauffage normalisés",
        answers: ["Vrai", "Faux", "Seulement pour le gaz", "Obsolète"],
        correct: 0,
        explanation: "Les symboles normalisés permettent une lecture universelle des plans de chauffage.",
        keyPoints: ["Normes NF", "Schémas de principe", "Communication technique", "Plans d'exécution"]
    },
    {
        id: 'qtest2',
        category: "Stage 4 - Schémas",
        difficulty: "medium",
        question: "Ce schéma représente un principe d'installation de chauffage. Quelle est l'utilité d'un schéma de principe ?",
        image: "images/schemas/schema-chauffage-1.png",
        imageAlt: "Schéma de principe d'une installation de chauffage",
        answers: [
            "Décorer le dossier technique",
            "Comprendre le fonctionnement global de l'installation",
            "Calculer les dimensions exactes",
            "Commander les matériaux"
        ],
        correct: 1,
        explanation: "Le schéma de principe montre comment les différents éléments fonctionnent ensemble, sans les dimensions exactes.",
        keyPoints: ["Vue d'ensemble", "Circulation des fluides", "Liens entre composants", "Base de travail"]
    },
    {
        id: 'qtest3',
        category: "Stage 4 - Symboles",
        difficulty: "hard",
        question: "Sur les schémas techniques, pourquoi est-il crucial d'utiliser des symboles normalisés ?",
        image: "images/symboles/symbole-chauffage-2.png",
        imageAlt: "Deuxième page de symboles techniques de chauffage",
        answers: [
            "C'est plus joli visuellement",
            "Pour assurer la compréhension universelle par tous les professionnels",
            "Pour économiser de l'encre",
            "C'est obligatoire seulement à l'export"
        ],
        correct: 1,
        explanation: "Les symboles normalisés garantissent que tous les professionnels (plombiers, chauffagistes, contrôleurs) comprennent exactement la même chose.",
        keyPoints: ["Langage universel", "Éviter les erreurs", "Normes françaises et européennes", "Sécurité"]
    },

    // ========== STAGE 1 - SÉCURITÉ (15 questions) ==========
    {
        id: 'q1',
        category: "Stage 1 - Sécurité",
        difficulty: "easy",
        question: "Que signifie l'acronyme EPI dans le contexte de la sécurité sur chantier ?",
        answers: ["Équipement de Protection Individuelle", "Entreprise de Plomberie Industrielle", "Évaluation des Procédures Internes", "Entretien et Prévention des Installations"],
        correct: 0,
        explanation: "EPI = Équipement de Protection Individuelle. Ce sont les équipements portés par le travailleur pour se protéger.",
        keyPoints: ["Casque", "Gants", "Lunettes", "Chaussures de sécurité", "Protection auditive"]
    },
    {
        id: 'q2',
        category: "Stage 1 - Sécurité",
        question: "Quel matériau dangereux nécessite des précautions spéciales lors de travaux sur d'anciennes installations ?",
        answers: ["Le cuivre", "L'amiante", "L'acier galvanisé", "Le PVC"],
        correct: 1,
        explanation: "L'amiante (interdit depuis 1997) peut causer de graves maladies respiratoires.",
        keyPoints: ["Diagnostic obligatoire", "Retrait par entreprise certifiée", "EPI spéciaux", "Risque cancer", "Mésothéliome"]
    },
    {
        id: 'q3',
        category: "Stage 1 - Sécurité",
        question: "Que signifie EPC en matière de sécurité ?",
        answers: ["Équipement de Protection Collective", "Entreprise de Plomberie Certifiée", "Évaluation des Procédures de Chantier", "Entretien Préventif et Correctif"],
        correct: 0,
        explanation: "EPC = Équipement de Protection Collective. Protège l'ensemble des travailleurs.",
        keyPoints: ["Garde-corps", "Filets de sécurité", "Barrières", "Signalisation", "Balisage"]
    },
    {
        id: 'q4',
        category: "Stage 1 - Sécurité",
        question: "Quelle est la première action en cas d'accident sur chantier ?",
        answers: ["Appeler l'entreprise", "Protéger-Alerter-Secourir", "Déplacer la victime", "Prendre des photos"],
        correct: 1,
        explanation: "PAS : Protéger (zone danger), Alerter (secours), Secourir (gestes appropriés).",
        keyPoints: ["Protéger la zone", "Appeler 15 ou 18", "Ne pas déplacer si trauma", "Gestes de premiers secours", "Défibrillateur"]
    },
    {
        id: 'q5',
        category: "Stage 1 - Sécurité",
        question: "À quelle hauteur doit-on obligatoirement utiliser un harnais de sécurité ?",
        answers: ["À partir de 1 mètre", "À partir de 2 mètres", "À partir de 3 mètres", "À partir de 5 mètres"],
        correct: 2,
        explanation: "Au-delà de 3 mètres de hauteur, le port du harnais avec point d'ancrage est obligatoire.",
        keyPoints: ["Hauteur > 3m", "Point d'ancrage certifié", "Contrôle annuel", "Formation obligatoire", "Longe absorbeur"]
    },
    {
        id: 'q6',
        category: "Stage 1 - Sécurité",
        question: "Que contient le PPSPS (Plan Particulier de Sécurité et de Protection de la Santé) ?",
        answers: ["Les salaires", "L'analyse des risques et mesures de prévention", "Les horaires", "Le planning"],
        correct: 1,
        explanation: "Le PPSPS identifie les risques du chantier et définit les mesures de prévention.",
        keyPoints: ["Obligatoire si > 1 entreprise", "Analyse risques", "Mesures prévention", "Coordonnateur SPS", "Organisation secours"]
    },
    {
        id: 'q7',
        category: "Stage 1 - Sécurité",
        question: "Quelle couleur identifie le plomb dans les canalisations anciennes ?",
        answers: ["Rouge", "Gris mat", "Blanc", "Bleu"],
        correct: 1,
        explanation: "Le plomb est gris mat, mou, rayable à l'ongle. Interdit pour eau potable depuis 1995.",
        keyPoints: ["Gris mat", "Mou et rayable", "Interdit depuis 1995", "Saturnisme", "Diagnostic obligatoire"]
    },
    {
        id: 'q8',
        category: "Stage 1 - Sécurité",
        question: "Quelle est la concentration maximale autorisée de plomb dans l'eau potable ?",
        answers: ["5 µg/L", "10 µg/L", "25 µg/L", "50 µg/L"],
        correct: 1,
        explanation: "Depuis 2013, la norme est de 10 µg/L maximum dans l'eau du robinet.",
        keyPoints: ["Norme : 10 µg/L", "Depuis 2013", "Analyse obligatoire", "Remplacement canalisations", "Risque saturnisme"]
    },
    {
        id: 'q9',
        category: "Stage 1 - Sécurité",
        question: "Quels sont les principaux risques liés aux colles et adhésifs ?",
        answers: ["Incendie uniquement", "Intoxication et irritation", "Électrocution", "Brûlures thermiques"],
        correct: 1,
        explanation: "Les colles contiennent des solvants volatils : irritation, vertiges, nausées possibles.",
        keyPoints: ["Solvants volatils", "Ventilation obligatoire", "Irritation voies respiratoires", "Vertiges", "Pas de flamme"]
    },
    {
        id: 'q10',
        category: "Stage 1 - Sécurité",
        question: "Comment doit-on gérer les déchets de chantier ?",
        answers: ["Tout jeter ensemble", "Tri sélectif selon catégories", "Brûler sur place", "Enfouir"],
        correct: 1,
        explanation: "Tri obligatoire : métaux, bois, gravats, déchets dangereux, plastiques.",
        keyPoints: ["Tri sélectif", "Bennes séparées", "Déchets dangereux à part", "Traçabilité BSD", "Recyclage"]
    },
    {
        id: 'q11',
        category: "Stage 1 - Sécurité",
        question: "Qu'est-ce qu'un BSD (Bordereau de Suivi de Déchets) ?",
        answers: ["Un plan de chantier", "Un document de traçabilité des déchets dangereux", "Un bon de livraison", "Un certificat"],
        correct: 1,
        explanation: "Le BSD assure la traçabilité des déchets dangereux du producteur à l'éliminateur.",
        keyPoints: ["Déchets dangereux", "Traçabilité complète", "3 volets", "Conservation 5 ans", "Obligatoire"]
    },
    {
        id: 'q12',
        category: "Stage 1 - Sécurité",
        question: "Quelle est la durée de validité d'une autorisation de conduite de nacelle ?",
        answers: ["1 an", "3 ans", "5 ans", "10 ans"],
        correct: 2,
        explanation: "L'autorisation de conduite de nacelle est valable 5 ans avec recyclage obligatoire.",
        keyPoints: ["Validité 5 ans", "Formation initiale", "Recyclage obligatoire", "Examen médical", "Délivrée par employeur"]
    },
    {
        id: 'q13',
        category: "Stage 1 - Sécurité",
        question: "Quelles sont les zones à risque sur un chantier ?",
        answers: ["Uniquement en hauteur", "Hauteur, électricité, machines, produits dangereux", "Seulement près des machines", "Partout de la même façon"],
        correct: 1,
        explanation: "Risques multiples : chutes, électrisation, écrasement, intoxication.",
        keyPoints: ["Chutes hauteur", "Électrisation", "Machines en mouvement", "Produits chimiques", "Effondrements"]
    },
    {
        id: 'q14',
        category: "Stage 1 - Sécurité",
        question: "Que faire avant d'intervenir sur un réseau de gaz ?",
        answers: ["Rien de spécial", "Obtenir permis feu + consignation", "Juste fermer la vanne", "Aérer la pièce"],
        correct: 1,
        explanation: "Permis de feu obligatoire + consignation du réseau + détecteur gaz.",
        keyPoints: ["Permis de feu", "Consignation", "Détecteur gaz", "Ventilation", "Extinction flammes"]
    },
    {
        id: 'q15',
        category: "Stage 1 - Sécurité",
        question: "Quelle est la principale cause d'accidents mortels sur les chantiers ?",
        answers: ["Électrocution", "Chutes de hauteur", "Intoxication", "Écrasement"],
        correct: 1,
        explanation: "Les chutes de hauteur représentent environ 15% des accidents mortels du BTP.",
        keyPoints: ["1ère cause mortalité", "15% accidents mortels", "> 3m = harnais", "Échafaudages", "Garde-corps"]
    },

    // ========== STAGE 1 - ATELIER (20 questions) ==========
    {
        id: 'q16',
        category: "Stage 1 - Atelier",
        question: "Quels sont les deux types principaux de brasure pour tubes cuivre ?",
        answers: ["Brasure forte et tendre", "Brasure chaude et froide", "Brasure électrique et thermique", "Brasure primaire et secondaire"],
        correct: 0,
        explanation: "Brasure forte (>450°C) pour haute pression et brasure tendre (<450°C) pour eau froide.",
        keyPoints: ["Forte : >450°C", "Tendre : <450°C", "Forte : haute pression", "Tendre : eau froide", "Chalumeau"]
    },
    {
        id: 'q17',
        category: "Stage 1 - Atelier",
        question: "Quel est le rayon de cintrage minimum pour un tube cuivre Ø12 ?",
        answers: ["2 fois le diamètre", "3 fois le diamètre", "4 fois le diamètre", "5 fois le diamètre"],
        correct: 1,
        explanation: "Le rayon de cintrage minimum est de 3 fois le diamètre du tube pour éviter le pincement.",
        keyPoints: ["3 × diamètre", "Évite pincement", "Cintreuse adaptée", "Pas de plis", "Ressort possible"]
    },
    {
        id: 'q18',
        category: "Stage 1 - Atelier",
        question: "Qu'est-ce que le taraudage ?",
        answers: ["Percer un trou", "Créer un filetage intérieur", "Couper un tube", "Souder deux pièces"],
        correct: 1,
        explanation: "Le taraudage consiste à créer un filetage intérieur dans un trou avec un taraud.",
        keyPoints: ["Filetage intérieur", "Outil : taraud", "Lubrification obligatoire", "Pas de vis", "3 passes minimum"]
    },
    {
        id: 'q19',
        category: "Stage 1 - Atelier",
        question: "Qu'est-ce que le filage ?",
        answers: ["Couper un fil", "Créer un filetage extérieur", "Tirer un câble", "Limer une pièce"],
        correct: 1,
        explanation: "Le filage crée un filetage extérieur sur un tube avec une filière.",
        keyPoints: ["Filetage extérieur", "Outil : filière", "Lubrification", "Tubes acier", "Étau nécessaire"]
    },
    {
        id: 'q20',
        category: "Stage 1 - Atelier",
        question: "Pourquoi doit-on ébavurer un tube après la coupe ?",
        answers: ["Pour l'esthétique", "Pour éviter turbulences et fuites", "Par obligation légale", "Pour le poids"],
        correct: 1,
        explanation: "Les bavures créent des turbulences, réduisent le débit et peuvent causer des fuites.",
        keyPoints: ["Enlève bavures", "Évite turbulences", "Meilleur débit", "Évite fuites", "Outil : ébavureur"]
    },
    {
        id: 'q21',
        category: "Stage 1 - Atelier",
        question: "Quelle est la température de fusion de la brasure tendre (étain) ?",
        answers: ["183°C", "250°C", "450°C", "650°C"],
        correct: 0,
        explanation: "L'alliage étain-plomb fond à environ 183°C, d'où le nom 'brasure tendre'.",
        keyPoints: ["183°C", "Étain-plomb", "Eau froide uniquement", "Flamme douce", "Pas haute pression"]
    },
    {
        id: 'q22',
        category: "Stage 1 - Atelier",
        question: "Quelle est la température de fusion de la brasure forte (argent) ?",
        answers: ["450°C", "650°C", "750°C", "850°C"],
        correct: 2,
        explanation: "Les alliages argent fondent entre 650-850°C selon composition.",
        keyPoints: ["650-850°C", "Alliage argent", "Haute pression OK", "Chauffage/ECS", "Flamme puissante"]
    },
    {
        id: 'q23',
        category: "Stage 1 - Atelier",
        question: "À quoi sert le décapant (flux) en brasure ?",
        answers: ["Refroidir", "Dissoudre les oxydes et faciliter l'accroche", "Colorer", "Renforcer"],
        correct: 1,
        explanation: "Le flux dissout les oxydes et permet au métal d'apport de bien adhérer.",
        keyPoints: ["Dissout oxydes", "Meilleure accroche", "Protection oxydation", "Application avant chauffe", "Brasure tendre"]
    },
    {
        id: 'q24',
        category: "Stage 1 - Atelier",
        question: "Quelle est la bonne méthode pour braser un raccord cuivre ?",
        answers: ["Chauffer le métal d'apport", "Chauffer le tube, le métal d'apport fond au contact", "Chauffer les deux", "Utiliser un fer à souder"],
        correct: 1,
        explanation: "On chauffe le tube/raccord, le métal d'apport fond à leur contact par capillarité.",
        keyPoints: ["Chauffer le tube", "Capillarité", "Métal fond au contact", "Flamme indirecte", "Rotation flamme"]
    },
    {
        id: 'q25',
        category: "Stage 1 - Atelier",
        question: "Quel outil utilise-t-on pour couper un tube cuivre proprement ?",
        answers: ["Scie à métaux", "Coupe-tube à molette", "Meuleuse", "Cisailles"],
        correct: 1,
        explanation: "Le coupe-tube à molette donne une coupe nette, perpendiculaire, sans déformation.",
        keyPoints: ["Coupe-tube molette", "Coupe nette", "Perpendiculaire", "Pas de déformation", "Puis ébavurer"]
    },
    {
        id: 'q26',
        category: "Stage 1 - Atelier",
        question: "Qu'est-ce qu'un collet battu ?",
        answers: ["Un raccord vissé", "Une extrémité de tube évasée pour joint", "Un type de soudure", "Un outil"],
        correct: 1,
        explanation: "Le collet battu est une extrémité de tube évasée à 45° pour recevoir un joint.",
        keyPoints: ["Extrémité évasée", "Angle 45°", "Joint fibre ou cuivre", "Écrou et olive", "Démontable"]
    },
    {
        id: 'q27',
        category: "Stage 1 - Atelier",
        question: "Quelle est la pente minimale pour une évacuation d'eaux usées ?",
        answers: ["0,5 cm/m", "1 cm/m", "2 cm/m", "5 cm/m"],
        correct: 1,
        explanation: "La pente minimale est de 1 cm par mètre (1%) pour assurer l'écoulement.",
        keyPoints: ["1 cm/m minimum", "1% de pente", "Évite stagnation", "Auto-curage", "DTU 60.11"]
    },
    {
        id: 'q28',
        category: "Stage 1 - Atelier",
        question: "Quel type de flamme utilise-t-on avec un chalumeau oxyacétylénique ?",
        answers: ["Oxydante", "Réductrice", "Neutre", "Carburante"],
        correct: 2,
        explanation: "La flamme neutre (autant d'oxygène que d'acétylène) est idéale pour la brasure.",
        keyPoints: ["Flamme neutre", "Équilibre O2/C2H2", "3 zones flamme", "Dard bleu", "Température 3200°C"]
    },
    {
        id: 'q29',
        category: "Stage 1 - Atelier",
        question: "Comment reconnaît-on un tube cuivre écroui ?",
        answers: ["Il est rouge", "Il est dur et difficile à cintrer", "Il est mou", "Il est rayé"],
        correct: 1,
        explanation: "Le cuivre écroui (dur) a été travaillé à froid, il est rigide et difficile à cintrer.",
        keyPoints: ["Dur", "Rigide", "Difficile à cintrer", "Résistance mécanique", "Droit en barre"]
    },
    {
        id: 'q30',
        category: "Stage 1 - Atelier",
        question: "Comment reconnaît-on un tube cuivre recuit ?",
        answers: ["Il est noir", "Il est mou et facile à cintrer", "Il est carré", "Il est fileté"],
        correct: 1,
        explanation: "Le cuivre recuit (mou) a été chauffé puis refroidi lentement, il est souple.",
        keyPoints: ["Mou", "Souple", "Facile à cintrer", "En couronne", "Installation facile"]
    },
    {
        id: 'q31',
        category: "Stage 1 - Atelier",
        question: "Qu'est-ce qu'un raccord bicône ?",
        answers: ["Un raccord soudé", "Un raccord à compression avec deux cônes", "Un raccord fileté", "Un raccord PVC"],
        correct: 1,
        explanation: "Le raccord bicône (deux cônes) sertit le tube par compression, sans soudure.",
        keyPoints: ["Deux cônes", "Compression", "Sans soudure", "Démontable", "Étanchéité olive"]
    },
    {
        id: 'q32',
        category: "Stage 1 - Atelier",
        question: "Quelle est la différence entre un té égal et un té réduit ?",
        answers: ["La forme", "Les diamètres : égaux ou différents", "Le matériau", "Le prix"],
        correct: 1,
        explanation: "Té égal : 3 diamètres identiques. Té réduit : un diamètre différent (souvent le piquage).",
        keyPoints: ["Té égal : Ø identiques", "Té réduit : Ø différents", "Piquage réduit", "Dérivation", "Moins de perte charge"]
    },
    {
        id: 'q33',
        category: "Stage 1 - Atelier",
        question: "Pourquoi utilise-t-on une presse à sertir pour les multicouches ?",
        answers: ["C'est obligatoire", "Étanchéité garantie sans flamme", "C'est moins cher", "C'est plus rapide"],
        correct: 1,
        explanation: "Le sertissage assure une étanchéité permanente sans risque d'incendie (pas de flamme).",
        keyPoints: ["Sans flamme", "Étanchéité garantie", "Indémontable", "Mâchoires adaptées", "Sécurité chantier"]
    },
    {
        id: 'q34',
        category: "Stage 1 - Atelier",
        question: "Qu'est-ce que le PER (tube) ?",
        answers: ["Polyéthylène Renforcé", "Polyéthylène Réticulé", "Polypropylène Extrudé", "Polyester Résistant"],
        correct: 1,
        explanation: "PER = Polyéthylène Réticulé. Flexible, résiste à la chaleur et à la pression.",
        keyPoints: ["Polyéthylène Réticulé", "Flexible", "Résiste 95°C", "6-10 bars", "Gaine protection"]
    },
    {
        id: 'q35',
        category: "Stage 1 - Atelier",
        question: "Quels sont les avantages du tube multicouche ?",
        answers: ["Moins cher", "Résiste température, pas de dilatation, garde forme", "Plus joli", "Plus léger"],
        correct: 1,
        explanation: "Le multicouche (PEX-ALU-PEX) résiste à la chaleur, ne dilate pas, garde sa forme.",
        keyPoints: ["PEX-ALU-PEX", "Pas de dilatation", "Garde la forme", "Résiste 95°C", "Raccords rapides"]
    },

    // ========== STAGE 1 - DESSIN TECHNIQUE (10 questions) ==========
    {
        id: 'q36',
        category: "Stage 1 - Dessin",
        question: "Qu'est-ce qu'un cartouche sur un plan technique ?",
        answers: ["Un type de fixation", "Le cadre avec infos du plan", "Un raccord", "Un outil"],
        correct: 1,
        explanation: "Le cartouche contient : titre, échelle, date, auteur, indice de révision.",
        keyPoints: ["Infos plan", "Titre", "Échelle", "Date", "Auteur", "Bas droite"]
    },
    {
        id: 'q37',
        category: "Stage 1 - Dessin",
        question: "Que signifie une échelle 1:50 ?",
        answers: ["Agrandi 50 fois", "Réduit 50 fois", "Taille réelle", "50 cm = 1 m"],
        correct: 1,
        explanation: "1:50 signifie que 1 cm sur le plan représente 50 cm en réalité (réduction).",
        keyPoints: ["1 cm = 50 cm réel", "Réduction", "Plan bâtiment", "Échelle courante", "Mesures × 50"]
    },
    {
        id: 'q38',
        category: "Stage 1 - Dessin",
        question: "Quelle est la différence entre un plan de masse et un plan de situation ?",
        answers: ["Aucune", "Masse : terrain, Situation : quartier", "Masse : intérieur, Situation : extérieur", "L'échelle"],
        correct: 1,
        explanation: "Plan de situation : localisation dans le quartier. Plan de masse : terrain avec bâtiment.",
        keyPoints: ["Situation : localisation", "Masse : terrain", "Échelles différentes", "Deux plans distincts", "Dossier permis"]
    },
    {
        id: 'q39',
        category: "Stage 1 - Dessin",
        question: "Que représente un trait mixte fin sur un plan ?",
        answers: ["Un mur", "Un axe ou élément caché", "Une porte", "Une fenêtre"],
        correct: 1,
        explanation: "Le trait mixte fin (tiret-point) représente les axes ou éléments cachés.",
        keyPoints: ["Tiret-point", "Axe", "Caché", "Trait fin", "Symétrie"]
    },
    {
        id: 'q40',
        category: "Stage 1 - Dessin",
        question: "Que représente un trait continu fort ?",
        answers: ["Un axe", "Un contour visible", "Un élément caché", "Une cote"],
        correct: 1,
        explanation: "Le trait continu fort (épais) représente les contours et arêtes visibles.",
        keyPoints: ["Continu épais", "Contours", "Arêtes visibles", "Murs", "Éléments principaux"]
    },
    {
        id: 'q41',
        category: "Stage 1 - Dessin",
        question: "Comment représente-t-on une cote sur un plan ?",
        answers: ["Trait épais", "Trait fin avec flèches et valeur", "Trait mixte", "Trait pointillé"],
        correct: 1,
        explanation: "Une cote est un trait fin terminé par des flèches avec la valeur de la dimension.",
        keyPoints: ["Trait fin", "Flèches", "Valeur dimension", "Ligne de cote", "Ligne d'attache"]
    },
    {
        id: 'q42',
        category: "Stage 1 - Dessin",
        question: "Qu'est-ce qu'une vue en coupe ?",
        answers: ["Vue extérieure", "Vue après découpe selon un plan", "Vue de dessus", "Vue 3D"],
        correct: 1,
        explanation: "La coupe montre l'intérieur après découpe imaginaire selon un plan.",
        keyPoints: ["Découpe imaginaire", "Intérieur visible", "Plan de coupe", "Hachures", "Détails internes"]
    },
    {
        id: 'q43',
        category: "Stage 1 - Dessin",
        question: "Combien y a-t-il de vues principales en projection orthogonale ?",
        answers: ["3", "4", "6", "8"],
        correct: 2,
        explanation: "6 vues : face, dessus, droite, gauche, dessous, arrière. On en utilise généralement 3.",
        keyPoints: ["6 vues possibles", "3 principales suffisent", "Face, dessus, droite", "Projection orthogonale", "2D"]
    },
    {
        id: 'q44',
        category: "Stage 1 - Dessin",
        question: "Qu'est-ce qu'un plan isométrique ?",
        answers: ["Plan 2D", "Plan 3D avec angles à 30°", "Plan de façade", "Plan électrique"],
        correct: 1,
        explanation: "Plan isométrique : représentation 3D avec axes à 30° pour visualiser tuyauteries.",
        keyPoints: ["3D", "Axes 30°", "Tuyauteries", "Perspective", "Facile à lire"]
    },
    {
        id: 'q45',
        category: "Stage 1 - Dessin",
        question: "Que signifie NGF sur un plan de bâtiment ?",
        answers: ["Niveau de Garantie Fondation", "Nivellement Général de la France", "Norme Générale Française", "Niveau de Gaz en Français"],
        correct: 1,
        explanation: "NGF = Nivellement Général de la France. Référence altimétrique nationale.",
        keyPoints: ["Référence altitude", "Niveau mer", "Repère géodésique", "±0.00 bâtiment", "Topographie"]
    },

    // ========== STAGE 1 - SYSTÈMES & EAU (15 questions) ==========
    {
        id: 'q46',
        category: "Stage 1 - Systèmes",
        question: "Que signifie ECS ?",
        answers: ["Énergie Calorifique Solaire", "Eau Chaude Sanitaire", "Équipement Chauffage Statique", "Expansion Circuit Secondaire"],
        correct: 1,
        explanation: "ECS = Eau Chaude Sanitaire, pour usages domestiques (douche, lavabo, cuisine).",
        keyPoints: ["Eau chaude", "Usage domestique", "55-60°C", "Séparé du chauffage", "Légionellose"]
    },
    {
        id: 'q47',
        category: "Stage 1 - Systèmes",
        question: "Quelle température doit avoir l'ECS pour éviter la légionellose ?",
        answers: ["40°C", "50°C", "60°C", "70°C"],
        correct: 2,
        explanation: "L'ECS doit être stockée à 60°C minimum et distribuée à 50°C minimum.",
        keyPoints: ["60°C stockage", "50°C distribution", "Légionellose < 50°C", "Contrôle régulier", "Désinfection thermique"]
    },
    {
        id: 'q48',
        category: "Stage 1 - Systèmes",
        question: "Quel est le rôle d'un circulateur ?",
        answers: ["Chauffer l'eau", "Faire circuler l'eau", "Filtrer l'eau", "Réguler température"],
        correct: 1,
        explanation: "Le circulateur (pompe) fait circuler l'eau dans le circuit de chauffage.",
        keyPoints: ["Pompe circulation", "50-150W", "Vitesse réglable", "Sur retour chaudière", "Distribution chaleur"]
    },
    {
        id: 'q49',
        category: "Stage 1 - Systèmes",
        question: "Quelle est la pression normale du réseau d'eau potable ?",
        answers: ["0,5-1 bar", "3-4 bars", "10-15 bars", "20-25 bars"],
        correct: 1,
        explanation: "La pression du réseau d'eau potable en ville est de 3-4 bars.",
        keyPoints: ["3-4 bars normal", "Min 0.3 bar", "Max 6-7 bars", "Réducteur si > 5", "Surpresseur si faible"]
    },
    {
        id: 'q50',
        category: "Stage 1 - Systèmes",
        question: "Qu'est-ce qu'un réducteur de pression ?",
        answers: ["Augmente pression", "Stabilise et réduit la pression", "Filtre eau", "Chauffe eau"],
        correct: 1,
        explanation: "Le réducteur stabilise la pression en aval à une valeur réglable (généralement 3 bars).",
        keyPoints: ["Réduit pression", "Réglable", "Généralement 3 bars", "Protection installation", "Si > 5 bars"]
    },
    {
        id: 'q51',
        category: "Stage 1 - Systèmes",
        question: "À quoi sert un disconnecteur ?",
        answers: ["Déconnecter l'eau", "Empêcher retour eau polluée", "Couper électricité", "Ventiler"],
        correct: 1,
        explanation: "Le disconnecteur empêche le retour d'eau usée vers le réseau d'eau potable.",
        keyPoints: ["Anti-retour", "Protection réseau", "Types BA/CA/EA", "Contrôle annuel", "Obligatoire"]
    },
    {
        id: 'q52',
        category: "Stage 1 - Systèmes",
        question: "Quelle est la différence entre eau dure et eau douce ?",
        answers: ["Température", "Teneur en calcaire (TH)", "Couleur", "Goût"],
        correct: 1,
        explanation: "Eau dure = riche en calcaire (TH élevé). Eau douce = peu de calcaire (TH faible).",
        keyPoints: ["TH = Titre Hydrotimétrique", "Dure : > 30°f", "Douce : < 15°f", "Calcaire", "Adoucisseur"]
    },
    {
        id: 'q53',
        category: "Stage 1 - Systèmes",
        question: "Que mesure le TH (Titre Hydrotimétrique) ?",
        answers: ["Température", "Dureté (calcaire)", "Pression", "Débit"],
        correct: 1,
        explanation: "Le TH mesure la concentration en calcium et magnésium (dureté de l'eau).",
        keyPoints: ["Dureté eau", "Calcium + Magnésium", "°f (degré français)", "Entartrage", "10 mg/L CaCO3 = 1°f"]
    },
    {
        id: 'q54',
        category: "Stage 1 - Systèmes",
        question: "À quoi sert un adoucisseur d'eau ?",
        answers: ["Chauffer l'eau", "Réduire le calcaire", "Filtrer impuretés", "Augmenter pression"],
        correct: 1,
        explanation: "L'adoucisseur échange les ions calcium/magnésium contre du sodium (résines).",
        keyPoints: ["Réduit calcaire", "Résines échangeuses", "Régénération sel", "TH < 15°f", "Entretien régulier"]
    },
    {
        id: 'q55',
        category: "Stage 1 - Systèmes",
        question: "Qu'est-ce qu'un ballon tampon dans un circuit de chauffage ?",
        answers: ["Réserve eau sanitaire", "Stockage inertie thermique", "Filtre à eau", "Pompe"],
        correct: 1,
        explanation: "Le ballon tampon stocke la chaleur et régule les cycles de la chaudière.",
        keyPoints: ["Inertie thermique", "Stockage chaleur", "Régule cycles", "Économie énergie", "Bois/PAC"]
    },
    {
        id: 'q56',
        category: "Stage 1 - Systèmes",
        question: "Qu'est-ce qu'un groupe de sécurité chauffe-eau ?",
        answers: ["Alarme", "Sécurité surpression + vidange", "Interrupteur", "Thermostat"],
        correct: 1,
        explanation: "Le groupe de sécurité protège contre la surpression et permet la vidange.",
        keyPoints: ["Soupape 7 bars", "Vidange", "Clapet anti-retour", "Goutte normale", "Obligatoire"]
    },
    {
        id: 'q57',
        category: "Stage 1 - Systèmes",
        question: "Pourquoi le groupe de sécurité goutte-t-il légèrement ?",
        answers: ["Fuite", "Dilatation eau chauffée (normal)", "Défaut", "Trop de pression"],
        correct: 1,
        explanation: "L'eau se dilate en chauffant, la soupape évacue le surplus (normal).",
        keyPoints: ["Dilatation normale", "Quelques gouttes", "Pas une fuite", "3-5% volume", "Si jet : problème"]
    },
    {
        id: 'q58',
        category: "Stage 1 - Systèmes",
        question: "Quelle est la capacité d'un chauffe-eau pour 4 personnes ?",
        answers: ["50L", "100L", "200L", "500L"],
        correct: 2,
        explanation: "Pour 4 personnes, on recommande 200L (50L par personne en moyenne).",
        keyPoints: ["50L/personne", "4 pers = 200L", "Usage normal", "Peut varier", "Habitudes"]
    },
    {
        id: 'q59',
        category: "Stage 1 - Systèmes",
        question: "Quelle est la différence entre production instantanée et accumulation ?",
        answers: ["Aucune", "Instantanée : chauffe à la demande, Accumulation : stocke", "Prix", "Taille"],
        correct: 1,
        explanation: "Instantanée : chauffe l'eau à la demande (débit). Accumulation : stocke eau chaude.",
        keyPoints: ["Instantané : à la demande", "Accumulation : stockage", "Instantané : débit limité", "Accumulation : réserve", "Usage différent"]
    },
    {
        id: 'q60',
        category: "Stage 1 - Systèmes",
        question: "Qu'est-ce qu'un mitigeur thermostatique ?",
        answers: ["Robinet simple", "Mélange eau chaude/froide à T° fixe", "Vanne électrique", "Filtre"],
        correct: 1,
        explanation: "Le mitigeur thermostatique maintient automatiquement la température choisie.",
        keyPoints: ["Température constante", "Sécurité anti-brûlure", "Réglage précis", "Cartouche cire", "Douche"]
    },

    // ========== STAGE 1 - COMBUSTION & ÉNERGIE (10 questions) ==========
    {
        id: 'q61',
        category: "Stage 1 - Combustion",
        question: "Quels sont les 3 éléments du triangle du feu ?",
        answers: ["Eau, air, chaleur", "Combustible, comburant, énergie", "Gaz, électricité, ventilation", "Feu, fumée, cendres"],
        correct: 1,
        explanation: "Triangle du feu : combustible (gaz, bois), comburant (O2), énergie d'activation.",
        keyPoints: ["Combustible", "Comburant (O2)", "Énergie activation", "Supprimer 1 = arrêt", "Base extinction"]
    },
    {
        id: 'q62',
        category: "Stage 1 - Combustion",
        question: "Quel gaz toxique se forme lors d'une combustion incomplète ?",
        answers: ["CO2", "CO (monoxyde de carbone)", "O2", "H2O"],
        correct: 1,
        explanation: "Le CO (monoxyde de carbone) est incolore, inodore et mortel.",
        keyPoints: ["CO mortel", "Incolore", "Inodore", "Combustion incomplète", "Détecteur obligatoire"]
    },
    {
        id: 'q63',
        category: "Stage 1 - Combustion",
        question: "Quel est le pourcentage d'oxygène dans l'air ?",
        answers: ["10%", "21%", "50%", "78%"],
        correct: 1,
        explanation: "L'air contient 21% d'oxygène, 78% d'azote et 1% d'autres gaz.",
        keyPoints: ["21% O2", "78% N2", "1% autres", "Comburant", "Combustion"]
    },
    {
        id: 'q64',
        category: "Stage 1 - Combustion",
        question: "Qu'est-ce que le PCI (Pouvoir Calorifique Inférieur) ?",
        answers: ["Prix du combustible", "Énergie libérée sans condensation vapeur", "Température de combustion", "Volume gaz"],
        correct: 1,
        explanation: "Le PCI est l'énergie libérée lors de la combustion, vapeur d'eau non condensée.",
        keyPoints: ["Énergie libérée", "Sans condensation", "kWh/kg ou kWh/m³", "Choix combustible", "< PCS"]
    },
    {
        id: 'q65',
        category: "Stage 1 - Combustion",
        question: "Qu'est-ce que le PCS (Pouvoir Calorifique Supérieur) ?",
        answers: ["Prix maximum", "Énergie avec récupération chaleur vapeur", "Température max", "Pression max"],
        correct: 1,
        explanation: "Le PCS inclut la chaleur latente de la vapeur d'eau (chaudière condensation).",
        keyPoints: ["Énergie totale", "Avec condensation", "> PCI", "Chaudière condensation", "Meilleur rendement"]
    },
    {
        id: 'q66',
        category: "Stage 1 - Combustion",
        question: "Quels sont les principaux combustibles utilisés en chauffage ?",
        answers: ["Uniquement gaz", "Gaz, fioul, bois, électricité", "Seulement électricité", "Charbon uniquement"],
        correct: 1,
        explanation: "Gaz naturel/propane, fioul, bois/granulés, électricité sont les plus utilisés.",
        keyPoints: ["Gaz naturel/propane", "Fioul domestique", "Bois/granulés", "Électricité", "Choix selon région"]
    },
    {
        id: 'q67',
        category: "Stage 1 - Combustion",
        question: "Qu'est-ce qu'une chaudière à condensation ?",
        answers: ["Chaudière ancienne", "Récupère chaleur des fumées", "Chaudière électrique", "Chaudière gaz uniquement"],
        correct: 1,
        explanation: "Elle récupère la chaleur latente de la vapeur d'eau des fumées (rendement >100%).",
        keyPoints: ["Récupère chaleur fumées", "Condensation vapeur", "Rendement > 100%", "Basse température", "Économie 15-20%"]
    },
    {
        id: 'q68',
        category: "Stage 1 - Combustion",
        question: "Pourquoi dit-on qu'une chaudière condensation a un rendement > 100% ?",
        answers: ["Erreur de mesure", "Référence au PCI, récupère + d'énergie", "Créé de l'énergie", "Calcul faux"],
        correct: 1,
        explanation: "Le rendement est calculé sur le PCI. La condensation récupère l'énergie du PCS.",
        keyPoints: ["Référence PCI", "Récupère PCS", "Pas création énergie", "Convention calcul", "Jusqu'à 110%"]
    },
    {
        id: 'q69',
        category: "Stage 1 - Combustion",
        question: "Quelle est la température des fumées d'une chaudière condensation ?",
        answers: ["300°C", "150°C", "50°C", "10°C"],
        correct: 2,
        explanation: "Les fumées sortent à environ 50-60°C, condensation de la vapeur d'eau.",
        keyPoints: ["50-60°C", "Basse température", "Condensation possible", "Économie énergie", "Fumées froides"]
    },
    {
        id: 'q70',
        category: "Stage 1 - Éco-construction",
        question: "Qu'est-ce qu'un matériau biosourcé ?",
        answers: ["Matériau chimique", "Matériau d'origine végétale ou animale", "Matériau recyclé", "Matériau minéral"],
        correct: 1,
        explanation: "Matériau biosourcé : d'origine végétale (bois, chanvre) ou animale (laine).",
        keyPoints: ["Origine vivante", "Végétal ou animal", "Renouvelable", "Carbone stocké", "Écologique"]
    },

    // ========== STAGE 2 - THÉORIE & ÉVACUATION (15 questions) ==========
    {
        id: 'q71',
        category: "Stage 2 - Évacuation",
        question: "Quel est le rôle d'un siphon ?",
        answers: ["Augmenter pression", "Garde d'eau anti-odeurs", "Filtrer", "Réguler débit"],
        correct: 1,
        explanation: "Le siphon crée une garde d'eau (5 cm min) empêchant les odeurs de remonter.",
        keyPoints: ["Garde d'eau 5 cm", "Anti-odeurs", "Anti-gaz", "Obligatoire", "Types S/P/bouteille"]
    },
    {
        id: 'q72',
        category: "Stage 2 - Évacuation",
        question: "Qu'est-ce qu'une chute d'eaux usées ?",
        answers: ["Fuite", "Canalisation verticale évacuation", "Robinet", "Pompe"],
        correct: 1,
        explanation: "La chute est une canalisation verticale qui collecte les évacuations des étages.",
        keyPoints: ["Verticale", "Collecte étages", "Diamètre 100mm", "Ventilation primaire", "Évite dépression"]
    },
    {
        id: 'q73',
        category: "Stage 2 - Évacuation",
        question: "Qu'est-ce que la ventilation primaire ?",
        answers: ["VMC", "Prolongement chute au-dessus toit", "Extracteur", "Fenêtre"],
        correct: 1,
        explanation: "La ventilation primaire prolonge la chute au-dessus du toit pour équilibrer pressions.",
        keyPoints: ["Prolonge chute", "Au-dessus toit", "Équilibre pression", "Évite siphonnage", "Obligatoire"]
    },
    {
        id: 'q74',
        category: "Stage 2 - Évacuation",
        question: "Qu'est-ce que la ventilation secondaire ?",
        answers: ["VMC", "Tuyau équilibrant pression siphons éloignés", "Aération naturelle", "Climatisation"],
        correct: 1,
        explanation: "La ventilation secondaire relie les siphons éloignés à la chute pour éviter le siphonnage.",
        keyPoints: ["Siphons éloignés", "Équilibre pression", "Évite dépression", "Ø32-40mm", "Facultative si proche"]
    },
    {
        id: 'q75',
        category: "Stage 2 - Évacuation",
        question: "Quelle est la pente d'une évacuation horizontale ?",
        answers: ["0 cm/m", "1 cm/m", "5 cm/m", "10 cm/m"],
        correct: 1,
        explanation: "Pente minimale : 1 cm/m (1%) pour assurer écoulement gravitaire.",
        keyPoints: ["1 cm/m minimum", "1%", "Gravitaire", "Auto-curage", "Pas de contre-pente"]
    },
    {
        id: 'q76',
        category: "Stage 2 - Évacuation",
        question: "Pourquoi ne doit-on pas mettre d'angle à 90° sur une évacuation ?",
        answers: ["Esthétique", "Risque bouchons et turbulences", "Plus cher", "Pas de raison"],
        correct: 1,
        explanation: "Les angles à 90° créent des turbulences et favorisent les bouchons.",
        keyPoints: ["Éviter 90°", "Turbulences", "Bouchons", "Préférer 2×45°", "Écoulement fluide"]
    },
    {
        id: 'q77',
        category: "Stage 2 - Évacuation",
        question: "Qu'est-ce qu'un séparateur de graisses ?",
        answers: ["Filtre eau", "Dispositif séparant graisses eaux usées", "Pompe", "Siphon"],
        correct: 1,
        explanation: "Le séparateur retient les graisses avant évacuation (cuisine professionnelle).",
        keyPoints: ["Retient graisses", "Cuisine pro", "Évite bouchons", "Nettoyage régulier", "Obligatoire restaurant"]
    },
    {
        id: 'q78',
        category: "Stage 2 - Évacuation",
        question: "Qu'est-ce qu'un regard de visite ?",
        answers: ["Fenêtre", "Accès canalisation pour entretien", "Siphon", "Vanne"],
        correct: 1,
        explanation: "Le regard permet l'accès aux canalisations enterrées pour inspection/débouchage.",
        keyPoints: ["Accès canalisation", "Inspection", "Débouchage", "Tampon", "Tous les 10-15m"]
    },
    {
        id: 'q79',
        category: "Stage 2 - Évacuation",
        question: "Quelle est la différence entre eaux vannes (EV) et eaux usées (EU) ?",
        answers: ["Aucune", "EV : WC, EU : lavabo/douche", "EV : chaudes, EU : froides", "EV : propres, EU : sales"],
        correct: 1,
        explanation: "EV = eaux vannes (WC), EU = eaux usées (lavabo, douche). EV+EU = eaux usées totales.",
        keyPoints: ["EV = WC", "EU = lavabo/douche", "Réseaux séparés/unitaires", "Traitement différent", "Collecte"]
    },
    {
        id: 'q80',
        category: "Stage 2 - Évacuation",
        question: "Qu'est-ce qu'un avaloir ?",
        answers: ["Robinet", "Grille collectant eaux pluviales", "Siphon", "Tuyau"],
        correct: 1,
        explanation: "L'avaloir (grille rue) collecte les eaux pluviales vers le réseau d'évacuation.",
        keyPoints: ["Grille rue", "Eaux pluviales", "Collecte surface", "Panier dégrilleur", "Nettoyage régulier"]
    },
    {
        id: 'q81',
        category: "Stage 2 - Émetteurs",
        question: "Quels sont les principaux types d'émetteurs de chaleur ?",
        answers: ["Chaudières, PAC", "Radiateurs, planchers chauffants, convecteurs", "Tuyaux, vannes", "Thermostats, sondes"],
        correct: 1,
        explanation: "Les émetteurs diffusent la chaleur : radiateurs, planchers chauffants, convecteurs.",
        keyPoints: ["Radiateurs", "Planchers chauffants", "Convecteurs", "Ventilo-convecteurs", "Diffusion chaleur"]
    },
    {
        id: 'q82',
        category: "Stage 2 - Émetteurs",
        question: "Quelle est la température de régime d'un plancher chauffant ?",
        answers: ["90/70°C", "75/65°C", "35/30°C", "20/15°C"],
        correct: 2,
        explanation: "Le plancher chauffant fonctionne en basse température : 35/30°C (départ/retour).",
        keyPoints: ["Basse température", "35/30°C", "Confort optimal", "Économie énergie", "Compatible condensation"]
    },
    {
        id: 'q83',
        category: "Stage 2 - Émetteurs",
        question: "Quelle est la température maximale au sol d'un plancher chauffant ?",
        answers: ["20°C", "28°C", "35°C", "40°C"],
        correct: 1,
        explanation: "Le DTU limite la température au sol à 28°C pour le confort (circulation pieds nus).",
        keyPoints: ["28°C max", "Confort", "Réglementation", "Zones 19-24°C", "Limite DTU"]
    },
    {
        id: 'q84',
        category: "Stage 2 - Émetteurs",
        question: "Quel est l'avantage d'un radiateur basse température ?",
        answers: ["Moins cher", "Compatible chaudière condensation", "Plus petit", "Plus léger"],
        correct: 1,
        explanation: "Les radiateurs BT (50/40°C) optimisent le rendement des chaudières condensation.",
        keyPoints: ["50/40°C", "Rendement optimal", "Condensation efficace", "Économie", "Surface + grande"]
    },
    {
        id: 'q85',
        category: "Stage 2 - Dimensionnement",
        question: "Comment dimensionne-t-on un réseau sanitaire ?",
        answers: ["Au hasard", "Selon débit simultané et perte de charge", "Toujours Ø20", "À l'œil"],
        correct: 1,
        explanation: "On calcule le débit simultané (coefficient K) et les pertes de charge pour choisir le diamètre.",
        keyPoints: ["Débit simultané", "Coefficient K", "Pertes charge", "Vitesse < 2 m/s", "Tableaux DTU"]
    },

    // ========== STAGE 2 - SÉCURITÉ & MESURE (10 questions) ==========
    {
        id: 'q86',
        category: "Stage 2 - Sécurité",
        question: "Qu'est-ce qu'un disconnecteur ?",
        answers: ["Interrupteur", "Anti-retour protégeant eau potable", "Outil", "Ventilation"],
        correct: 1,
        explanation: "Le disconnecteur empêche le retour d'eau polluée vers le réseau d'eau potable.",
        keyPoints: ["Anti-retour", "Protection réseau", "BA/CA/EA", "Contrôle annuel", "Obligatoire"]
    },
    {
        id: 'q87',
        category: "Stage 2 - Sécurité",
        question: "Quels sont les types de disconnecteurs selon le risque ?",
        answers: ["BA, CA, EA", "Type 1, 2, 3", "A, B, C", "Rouge, jaune, vert"],
        correct: 0,
        explanation: "BA (risque faible), CA (risque moyen), EA (risque élevé).",
        keyPoints: ["BA : faible", "CA : moyen", "EA : élevé", "Fluide A/B/C/D", "Choix selon usage"]
    },
    {
        id: 'q88',
        category: "Stage 2 - Sécurité",
        question: "Qu'est-ce qu'un clapet anti-retour ?",
        answers: ["Vanne manuelle", "Dispositif empêchant retour d'eau", "Filtre", "Pompe"],
        correct: 1,
        explanation: "Le clapet ne laisse passer l'eau que dans un sens (gravité ou ressort).",
        keyPoints: ["Un seul sens", "Ressort ou gravité", "Position horizontale", "Pas de maintenance", "Simple"]
    },
    {
        id: 'q89',
        category: "Stage 2 - Sécurité",
        question: "Qu'est-ce qu'une soupape de sécurité ?",
        answers: ["Thermostat", "Sécurité surpression (7 bars)", "Pompe", "Filtre"],
        correct: 1,
        explanation: "La soupape s'ouvre à 7 bars pour éviter l'éclatement du ballon.",
        keyPoints: ["7 bars", "Surpression", "Groupe sécurité", "Obligatoire", "Test régulier"]
    },
    {
        id: 'q90',
        category: "Stage 2 - Sécurité",
        question: "Qu'est-ce qu'une soupape thermique ?",
        answers: ["Thermostat", "Sécurité surchauffe (100-110°C)", "Vanne", "Capteur"],
        correct: 1,
        explanation: "La soupape thermique s'ouvre si température > 95-110°C (risque ébullition).",
        keyPoints: ["95-110°C", "Surchauffe", "Ébullition", "Vidange ballon", "Sécurité"]
    },
    {
        id: 'q91',
        category: "Stage 2 - Mesure",
        question: "À quoi sert un manomètre ?",
        answers: ["Mesurer température", "Mesurer pression", "Mesurer débit", "Mesurer niveau"],
        correct: 1,
        explanation: "Le manomètre mesure la pression en bars ou kPa.",
        keyPoints: ["Pression", "Bars ou kPa", "1-2 bars normal", "Chauffage", "Contrôle"]
    },
    {
        id: 'q92',
        category: "Stage 2 - Mesure",
        question: "À quoi sert un thermomètre ?",
        answers: ["Mesurer pression", "Mesurer température", "Mesurer débit", "Mesurer pH"],
        correct: 1,
        explanation: "Le thermomètre mesure la température en °C (aller/retour chauffage).",
        keyPoints: ["Température", "°C", "Aller/retour", "Contrôle", "Régulation"]
    },
    {
        id: 'q93',
        category: "Stage 2 - Mesure",
        question: "Qu'est-ce qu'un débitmètre ?",
        answers: ["Mesure pression", "Mesure débit d'eau", "Mesure température", "Mesure pH"],
        correct: 1,
        explanation: "Le débitmètre mesure le débit d'eau en L/h ou m³/h.",
        keyPoints: ["Débit", "L/h ou m³/h", "Eau ou gaz", "Comptage", "Régulation"]
    },
    {
        id: 'q94',
        category: "Stage 2 - Sécurité",
        question: "Qu'est-ce qu'un purgeur automatique ?",
        answers: ["Vanne manuelle", "Purge air automatiquement", "Pompe", "Filtre"],
        correct: 1,
        explanation: "Le purgeur automatique évacue l'air du circuit sans intervention.",
        keyPoints: ["Purge auto", "Évacue air", "Flotteur", "Points hauts", "Entretien minimal"]
    },
    {
        id: 'q95',
        category: "Stage 2 - Sécurité",
        question: "Où place-t-on les purgeurs automatiques ?",
        answers: ["Points bas", "Points hauts du circuit", "N'importe où", "Sur chaudière uniquement"],
        correct: 1,
        explanation: "Les purgeurs se placent aux points hauts où l'air s'accumule naturellement.",
        keyPoints: ["Points hauts", "Accumulation air", "Collecteurs", "Radiateurs", "Plusieurs points"]
    },

    // ========== STAGE 3 - GAZ (15 questions) ==========
    {
        id: 'q96',
        category: "Stage 3 - Gaz",
        question: "Quelle ventilation est obligatoire pour une installation gaz ?",
        answers: ["Aucune", "Haute et basse", "Uniquement haute", "Uniquement basse"],
        correct: 1,
        explanation: "Ventilation basse (air comburant) et haute (évacuation CO2) obligatoires.",
        keyPoints: ["Basse : air", "Haute : évacuation", "Section selon puissance", "Non obstruable", "Contrôle annuel"]
    },
    {
        id: 'q97',
        category: "Stage 3 - Gaz",
        question: "Quelle est la pression d'un réseau gaz naturel en ville ?",
        answers: ["20 mbar", "300 mbar", "4 bar", "10 bar"],
        correct: 0,
        explanation: "Le gaz naturel est distribué à 20 mbar (ou 300 mbar selon réseau).",
        keyPoints: ["20 mbar (BP)", "300 mbar (MP)", "Détendeur", "Compteur", "Distribution"]
    },
    {
        id: 'q98',
        category: "Stage 3 - Gaz",
        question: "Comment teste-t-on l'étanchéité d'une installation gaz ?",
        answers: ["Visuellement", "Test pression 150 mbar pendant 5 min", "Eau savonneuse seulement", "Pas nécessaire"],
        correct: 1,
        explanation: "Test à 150 mbar pendant 5 minutes minimum, pression ne doit pas chuter.",
        keyPoints: ["150 mbar", "5 min minimum", "Pas de chute", "Manomètre", "Certificat"]
    },
    {
        id: 'q99',
        category: "Stage 3 - Gaz",
        question: "Qu'est-ce qu'un détendeur gaz ?",
        answers: ["Pompe", "Réduit pression bouteille vers pression d'usage", "Vanne", "Filtre"],
        correct: 1,
        explanation: "Le détendeur réduit la pression de la bouteille (propane 37 mbar, butane 28 mbar).",
        keyPoints: ["Réduit pression", "Propane 37 mbar", "Butane 28 mbar", "Sécurité", "Obligatoire"]
    },
    {
        id: 'q100',
        category: "Stage 3 - Gaz",
        question: "Quelle est la différence entre butane et propane ?",
        answers: ["Couleur", "Température d'évaporation", "Goût", "Aucune"],
        correct: 1,
        explanation: "Butane : > 0°C (intérieur). Propane : > -44°C (extérieur).",
        keyPoints: ["Butane > 0°C", "Propane > -44°C", "Butane intérieur", "Propane extérieur", "Pression différente"]
    },
    {
        id: 'q101',
        category: "Stage 3 - Gaz",
        question: "Qu'est-ce qu'un robinet de barrage gaz ?",
        answers: ["Robinet cuisine", "Vanne coupure totale installation", "Détendeur", "Filtre"],
        correct: 1,
        explanation: "Le robinet de barrage (1/4 tour) coupe l'alimentation générale en gaz.",
        keyPoints: ["Coupure générale", "1/4 de tour", "Obligatoire", "Accessible", "Signalisation"]
    },
    {
        id: 'q102',
        category: "Stage 3 - Gaz",
        question: "Qu'est-ce qu'un coupe-tirage sur un appareil gaz ?",
        answers: ["Vanne", "Ouverture admettant air dilution fumées", "Filtre", "Thermostat"],
        correct: 1,
        explanation: "Le coupe-tirage empêche le refoulement et dilue les fumées en cas de refoulement.",
        keyPoints: ["Dilution fumées", "Anti-refoulement", "Entrée air", "Obligatoire", "Type B"]
    },
    {
        id: 'q103',
        category: "Stage 3 - Gaz",
        question: "Qu'est-ce qu'un appareil de type B (gaz) ?",
        answers: ["Étanche", "Non étanche, prélève air pièce", "Électrique", "Solaire"],
        correct: 1,
        explanation: "Type B : non étanche, prélève air dans la pièce, évacuation naturelle/forcée.",
        keyPoints: ["Non étanche", "Air pièce", "Ventilation obligatoire", "Évacuation", "Coupe-tirage"]
    },
    {
        id: 'q104',
        category: "Stage 3 - Gaz",
        question: "Qu'est-ce qu'un appareil de type C (gaz) ?",
        answers: ["Non étanche", "Étanche, circuit fermé air/fumées", "Ouvert", "Sans évacuation"],
        correct: 1,
        explanation: "Type C : étanche, circuit fermé (concentriqueventouse), pas de ventilation pièce.",
        keyPoints: ["Étanche", "Circuit fermé", "Ventouse", "Pas ventilation pièce", "Sécurité"]
    },
    {
        id: 'q105',
        category: "Stage 3 - Gaz",
        question: "Qu'est-ce qu'une ventouse (gaz) ?",
        answers: ["Outil", "Conduit concentrique étanche (air/fumées)", "Vanne", "Siphon"],
        correct: 1,
        explanation: "La ventouse est un conduit concentrique : air frais dans anneau, fumées au centre.",
        keyPoints: ["Concentrique", "Air + fumées", "Étanche", "Horizontal/vertical", "Type C"]
    },
    {
        id: 'q106',
        category: "Stage 3 - Gaz",
        question: "Quelle est la couleur réglementaire des tuyaux gaz apparents ?",
        answers: ["Rouge", "Jaune", "Bleu", "Noir"],
        correct: 1,
        explanation: "Les tuyaux gaz apparents doivent être de couleur jaune réglementaire.",
        keyPoints: ["Jaune", "Réglementaire", "Visible", "Repérage", "Sécurité"]
    },
    {
        id: 'q107',
        category: "Stage 3 - Gaz",
        question: "Qu'est-ce que le GN (Gaz Naturel) ?",
        answers: ["Gaz en bouteille", "Méthane distribué par réseau", "Propane", "Butane"],
        correct: 1,
        explanation: "GN = méthane distribué par réseau de ville, plus léger que l'air.",
        keyPoints: ["Méthane", "Réseau ville", "Plus léger air", "20 mbar", "Compteur"]
    },
    {
        id: 'q108',
        category: "Stage 3 - Gaz",
        question: "Le gaz naturel est-il plus lourd ou plus léger que l'air ?",
        answers: ["Plus lourd", "Plus léger", "Même densité", "Dépend de la température"],
        correct: 1,
        explanation: "Le gaz naturel (méthane) est plus léger que l'air, monte en cas de fuite.",
        keyPoints: ["Plus léger", "Monte", "Ventilation haute", "Détecteur haut", "Méthane"]
    },
    {
        id: 'q109',
        category: "Stage 3 - Gaz",
        question: "Le propane et le butane sont-ils plus lourds ou plus légers que l'air ?",
        answers: ["Plus légers", "Plus lourds", "Même densité", "Variable"],
        correct: 1,
        explanation: "Propane et butane sont plus lourds, stagnent au sol en cas de fuite.",
        keyPoints: ["Plus lourds", "Stagnent sol", "Ventilation basse", "Détecteur bas", "Danger"]
    },
    {
        id: 'q110',
        category: "Stage 3 - Gaz",
        question: "Que faire en cas de fuite de gaz détectée ?",
        answers: ["Allumer lumière", "Ne pas toucher électricité, aérer, couper, évacuer, appeler", "Fumer dehors", "Ignorer"],
        correct: 1,
        explanation: "1. Ne pas toucher électricité. 2. Aérer. 3. Couper gaz. 4. Évacuer. 5. Appeler pompiers.",
        keyPoints: ["Pas d'électricité", "Aérer", "Couper", "Évacuer", "Appeler 18"]
    },

    // ========== STAGE 3 - SOLAIRE (10 questions) ==========
    {
        id: 'q111',
        category: "Stage 3 - Solaire",
        question: "Que signifie CESI ?",
        answers: ["Centrale Électrique Solaire", "Chauffe-Eau Solaire Individuel", "Circuit Énergie Solaire", "Capteur Électrique"],
        correct: 1,
        explanation: "CESI = Chauffe-Eau Solaire Individuel pour production d'eau chaude sanitaire.",
        keyPoints: ["ECS solaire", "Individuel", "Capteurs + ballon", "Économie 50-70%", "Appoint"]
    },
    {
        id: 'q112',
        category: "Stage 3 - Solaire",
        question: "Quel fluide circule dans les capteurs solaires thermiques ?",
        answers: ["Eau pure", "Eau + glycol", "Huile", "Air"],
        correct: 1,
        explanation: "Mélange eau + glycol (30-40%) résiste au gel et à la surchauffe.",
        keyPoints: ["Eau + glycol", "30-40%", "Anti-gel", "Anti-surchauffe", "Circuit primaire"]
    },
    {
        id: 'q113',
        category: "Stage 3 - Solaire",
        question: "Quelle est la surface de capteurs pour 4 personnes ?",
        answers: ["1 m²", "3-5 m²", "10 m²", "20 m²"],
        correct: 1,
        explanation: "Pour 4 personnes, 3 à 5 m² de capteurs suffisent (selon région).",
        keyPoints: ["3-5 m²", "4 personnes", "Selon région", "Ballon 200-300L", "Ensoleillement"]
    },
    {
        id: 'q114',
        category: "Stage 3 - Solaire",
        question: "Quel est le taux de couverture moyen d'un CESI en France ?",
        answers: ["20-30%", "50-70%", "90-100%", "10%"],
        correct: 1,
        explanation: "Un CESI couvre 50 à 70% des besoins annuels en ECS (appoint nécessaire).",
        keyPoints: ["50-70%", "Annuel", "Appoint obligatoire", "Hiver faible", "Été fort"]
    },
    {
        id: 'q115',
        category: "Stage 3 - Solaire",
        question: "Pourquoi un appoint est-il nécessaire sur un CESI ?",
        answers: ["Pas nécessaire", "Soleil insuffisant en hiver", "Pour le prix", "Réglementation"],
        correct: 1,
        explanation: "L'ensoleillement est insuffisant en hiver et par mauvais temps (appoint chaudière/électrique).",
        keyPoints: ["Ensoleillement variable", "Hiver", "Mauvais temps", "Chaudière ou électrique", "Sécurité"]
    },
    {
        id: 'q116',
        category: "Stage 3 - Solaire",
        question: "Quelle est l'orientation idéale des capteurs solaires ?",
        answers: ["Nord", "Sud", "Est", "Ouest"],
        correct: 1,
        explanation: "Orientation plein Sud (±30°) et inclinaison 45° (selon latitude).",
        keyPoints: ["Plein Sud", "±30° OK", "Inclinaison 45°", "Selon latitude", "Optimisation"]
    },
    {
        id: 'q117',
        category: "Stage 3 - Solaire",
        question: "Qu'est-ce qu'un ballon solaire double échangeur ?",
        answers: ["Deux ballons", "Un ballon avec échangeur solaire + appoint", "Ballon électrique", "Pompe"],
        correct: 1,
        explanation: "Échangeur bas (solaire) + échangeur haut (appoint chaudière).",
        keyPoints: ["2 échangeurs", "Bas : solaire", "Haut : appoint", "Stratification", "Optimisation"]
    },
    {
        id: 'q118',
        category: "Stage 3 - Solaire",
        question: "Qu'est-ce que la stagnation d'une installation solaire ?",
        answers: ["Arrêt circulation", "Surchauffe capteurs sans soutirage", "Gel", "Fuite"],
        correct: 1,
        explanation: "En été sans soutirage, le fluide peut atteindre 150-200°C (vapeur).",
        keyPoints: ["Surchauffe", "Été", "Pas de soutirage", "150-200°C", "Protection nécessaire"]
    },
    {
        id: 'q119',
        category: "Stage 3 - Solaire",
        question: "Qu'est-ce qu'un SSC (Système Solaire Combiné) ?",
        answers: ["CESI simple", "Solaire pour ECS + chauffage", "Photovoltaïque", "Éolienne"],
        correct: 1,
        explanation: "SSC produit à la fois l'ECS et participe au chauffage de l'habitation.",
        keyPoints: ["ECS + chauffage", "Plus de capteurs", "10-15 m²", "Ballon tampon", "Appoint obligatoire"]
    },
    {
        id: 'q120',
        category: "Stage 3 - Solaire",
        question: "Quelle différence entre solaire thermique et photovoltaïque ?",
        answers: ["Aucune", "Thermique : chaleur, Photovoltaïque : électricité", "Couleur", "Prix"],
        correct: 1,
        explanation: "Thermique : produit chaleur (ECS/chauffage). Photovoltaïque : produit électricité.",
        keyPoints: ["Thermique : chaleur", "Photovoltaïque : électricité", "Capteurs différents", "Usages différents", "Complémentaires"]
    },

    // ========== STAGE 3 - VENTILATION (15 questions) ==========
    {
        id: 'q121',
        category: "Stage 3 - VMC",
        question: "Que signifie VMC ?",
        answers: ["Ventilation Murale", "Ventilation Mécanique Contrôlée", "Ventilateur Moteur", "Volume Minimal"],
        correct: 1,
        explanation: "VMC = Ventilation Mécanique Contrôlée, renouvelle l'air en continu.",
        keyPoints: ["Renouvellement air", "Mécanique", "Contrôlée", "Extracteur", "Entrées d'air"]
    },
    {
        id: 'q122',
        category: "Stage 3 - VMC",
        question: "Différence entre VMC simple flux et double flux ?",
        answers: ["Aucune", "Simple : extraction, Double : extraction + insufflation", "Prix", "Couleur"],
        correct: 1,
        explanation: "Simple flux : extraction seule. Double flux : extraction + insufflation avec échangeur.",
        keyPoints: ["Simple : extraction", "Double : extraction + insufflation", "Échangeur thermique", "Économie 15-20%", "Plus cher"]
    },
    {
        id: 'q123',
        category: "Stage 3 - VMC",
        question: "Où extrait-on l'air vicié avec une VMC ?",
        answers: ["Chambres", "Cuisine, SDB, WC", "Salon", "Toutes pièces"],
        correct: 1,
        explanation: "Extraction dans les pièces humides : cuisine, salle de bain, WC.",
        keyPoints: ["Pièces humides", "Cuisine", "SDB", "WC", "Buanderie"]
    },
    {
        id: 'q124',
        category: "Stage 3 - VMC",
        question: "Où place-t-on les entrées d'air avec une VMC ?",
        answers: ["Cuisine", "Pièces principales (salon, chambres)", "SDB", "Toutes pièces"],
        correct: 1,
        explanation: "Entrées d'air dans les pièces principales (chambres, salon), air circule sous portes.",
        keyPoints: ["Pièces principales", "Chambres", "Salon", "Fenêtres/coffres volets", "Détalonnage portes"]
    },
    {
        id: 'q125',
        category: "Stage 3 - VMC",
        question: "Qu'est-ce que le détalonnage des portes ?",
        answers: ["Décoration", "Espace sous porte pour circulation air", "Serrure", "Peinture"],
        correct: 1,
        explanation: "Espace de 1-2 cm sous les portes pour permettre la circulation de l'air.",
        keyPoints: ["Espace sous porte", "1-2 cm", "Circulation air", "Obligatoire", "Entre pièces"]
    },
    {
        id: 'q126',
        category: "Stage 3 - VMC",
        question: "Pourquoi entretenir une VMC régulièrement ?",
        answers: ["Pas nécessaire", "Filtres encrassés réduisent débit et consomment plus", "Esthétique", "Réglementation uniquement"],
        correct: 1,
        explanation: "L'encrassement réduit le débit, augmente la consommation et dégrade la qualité d'air.",
        keyPoints: ["Nettoyage filtres", "Bouches extraction", "Entrées d'air", "6 mois à 1 an", "Débit optimal"]
    },
    {
        id: 'q127',
        category: "Stage 3 - VMC",
        question: "Qu'est-ce qu'une VMC hygroréglable ?",
        answers: ["VMC à piles", "Débit adapté selon humidité", "VMC silencieuse", "VMC colorée"],
        correct: 1,
        explanation: "La VMC hygroréglable adapte le débit selon l'humidité détectée (économie d'énergie).",
        keyPoints: ["Adapte débit", "Selon humidité", "Économie énergie", "Confort", "Type A ou B"]
    },
    {
        id: 'q128',
        category: "Stage 3 - VMC",
        question: "Quelle est la durée de vie moyenne d'une VMC ?",
        answers: ["5 ans", "10-15 ans", "30 ans", "50 ans"],
        correct: 1,
        explanation: "Une VMC bien entretenue dure 10 à 15 ans (moteur et composants).",
        keyPoints: ["10-15 ans", "Entretien régulier", "Remplacement moteur", "Usure normale", "Maintenance"]
    },
    {
        id: 'q129',
        category: "Stage 3 - VMC",
        question: "Pourquoi une VMC double flux est-elle plus économe ?",
        answers: ["Elle consomme moins", "Échangeur récupère calories air extrait", "Elle est plus petite", "Moins de gaines"],
        correct: 1,
        explanation: "L'échangeur thermique récupère 70-90% des calories de l'air extrait.",
        keyPoints: ["Échangeur thermique", "Récupère 70-90%", "Préchauffage air neuf", "Économie 15-20%", "Filtration"]
    },
    {
        id: 'q130',
        category: "Stage 3 - Ventilation",
        question: "Qu'est-ce qu'un diagramme psychrométrique ?",
        answers: ["Schéma électrique", "Graphique propriétés air humide", "Plan bâtiment", "Outil calcul débit"],
        correct: 1,
        explanation: "Diagramme représentant température, humidité, enthalpie de l'air.",
        keyPoints: ["Propriétés air", "Température", "Humidité", "Enthalpie", "Point rosée"]
    },
    {
        id: 'q131',
        category: "Stage 3 - Ventilation",
        question: "Qu'est-ce que l'humidité relative ?",
        answers: ["Quantité d'eau", "Rapport humidité actuelle / humidité max (%)", "Température", "Pression"],
        correct: 1,
        explanation: "HR = (humidité actuelle / humidité maximale possible) × 100. Confort : 40-60%.",
        keyPoints: ["En %", "Actuelle / max", "Confort 40-60%", "Variable selon T°", "Condensation > 100%"]
    },
    {
        id: 'q132',
        category: "Stage 3 - Ventilation",
        question: "Qu'est-ce que le point de rosée ?",
        answers: ["Température extérieure", "Température où vapeur condense", "Pression atmosphérique", "Humidité maximale"],
        correct: 1,
        explanation: "Température à laquelle la vapeur d'eau condense (HR = 100%).",
        keyPoints: ["Condensation", "HR 100%", "Selon humidité", "Ponts thermiques", "Moisissures"]
    },
    {
        id: 'q133',
        category: "Stage 3 - Ventilation",
        question: "Pourquoi ventiler un logement ?",
        answers: ["Pour le bruit", "Évacuer humidité, CO2, polluants", "Chauffer", "Décoration"],
        correct: 1,
        explanation: "Ventiler évacue humidité, CO2, polluants (COV, radon) et apporte air frais.",
        keyPoints: ["Évacue humidité", "Évacue CO2", "Évacue polluants", "Air neuf", "Santé"]
    },
    {
        id: 'q134',
        category: "Stage 3 - Ventilation",
        question: "Quel est le débit minimal de ventilation par occupant ?",
        answers: ["5 m³/h", "15 m³/h", "30 m³/h", "50 m³/h"],
        correct: 2,
        explanation: "Débit minimal réglementaire : 30 m³/h par occupant (réglementation).",
        keyPoints: ["30 m³/h", "Par occupant", "Minimum", "Réglementation", "Santé"]
    },
    {
        id: 'q135',
        category: "Stage 3 - Ventilation",
        question: "Qu'est-ce qu'une ventilation naturelle assistée ?",
        answers: ["VMC", "Tirage naturel + extraction mécanique ponctuellement", "Fenêtre", "Climatisation"],
        correct: 1,
        explanation: "Tirage naturel (conduits) assisté par extraction mécanique si besoin.",
        keyPoints: ["Tirage naturel", "Assistance mécanique", "Ponctuelle", "Économique", "Conduits"]
    },

    // ========== STAGE 3 - PROTECTION & TRAITEMENT (5 questions) ==========
    {
        id: 'q136',
        category: "Stage 3 - Protection",
        question: "Pourquoi traiter l'eau d'un circuit de chauffage ?",
        answers: ["Goût", "Éviter tartre, corrosion, boues", "Augmenter pression", "Réduire consommation"],
        correct: 1,
        explanation: "Traitement évite tartre (calcaire), corrosion (métaux) et boues (oxydes).",
        keyPoints: ["Tartre", "Corrosion", "Boues", "Durée de vie", "Performance"]
    },
    {
        id: 'q137',
        category: "Stage 3 - Protection",
        question: "Qu'est-ce qu'un inhibiteur de corrosion ?",
        answers: ["Acide", "Produit chimique protégeant métaux", "Filtre", "Pompe"],
        correct: 1,
        explanation: "L'inhibiteur crée un film protecteur sur les métaux du circuit.",
        keyPoints: ["Protection métaux", "Film protecteur", "Dosage précis", "Contrôle pH", "Longévité installation"]
    },
    {
        id: 'q138',
        category: "Stage 3 - Protection",
        question: "Qu'est-ce qu'un pot à boues (bouteille de décantation) ?",
        answers: ["Filtre café", "Collecteur boues et impuretés par décantation", "Réservoir", "Pompe"],
        correct: 1,
        explanation: "Le pot à boues collecte les particules en suspension par gravité (ralentissement).",
        keyPoints: ["Collecte boues", "Décantation", "Sur retour chaudière", "Nettoyage régulier", "Protection chaudière"]
    },
    {
        id: 'q139',
        category: "Stage 3 - Protection",
        question: "Qu'est-ce qu'un filtre désemboueur magnétique ?",
        answers: ["Filtre eau potable", "Filtre + aimant captant particules fer", "Filtre café", "Adoucisseur"],
        correct: 1,
        explanation: "Filtre + aimant puissant captant les particules ferreuses (magnétite).",
        keyPoints: ["Filtre + aimant", "Particules fer", "Magnétite", "Nettoyage facile", "Protection optimale"]
    },
    {
        id: 'q140',
        category: "Stage 3 - Protection",
        question: "Quelle est la bonne qualité d'eau pour un circuit de chauffage ?",
        answers: ["Eau dure", "Eau adoucie TH 10-15°f, pH 7-8", "Eau distillée", "Eau de pluie"],
        correct: 1,
        explanation: "TH 10-15°f (légèrement adoucie), pH 7-8 (neutre), pas trop douce (corrosion).",
        keyPoints: ["TH 10-15°f", "pH 7-8", "Pas trop douce", "Inhibiteur", "Contrôle régulier"]
    },

    // ========== STAGE 4 - CHAUFFAGE & CIRCUITS (20 questions) ==========
    {
        id: 'q141',
        category: "Stage 4 - Chauffage",
        question: "Qu'est-ce qu'un circuit monotube ?",
        answers: ["Un radiateur", "Radiateurs en série sur même tuyau", "Un tuyau cuivre", "Une chaudière"],
        correct: 1,
        explanation: "Circuit monotube : radiateurs en série, dernier moins chaud (ancien système).",
        keyPoints: ["Série", "Un tuyau", "Dernier froid", "Ancien", "Difficile équilibrer"]
    },
    {
        id: 'q142',
        category: "Stage 4 - Chauffage",
        question: "Qu'est-ce qu'un circuit bitube ?",
        answers: ["Deux chaudières", "Aller + retour, radiateurs en parallèle", "Deux étages", "Deux pompes"],
        correct: 1,
        explanation: "Circuit bitube : aller et retour, radiateurs en parallèle (température homogène).",
        keyPoints: ["Parallèle", "Aller + retour", "Température égale", "Actuel", "Facile équilibrer"]
    },
    {
        id: 'q143',
        category: "Stage 4 - Chauffage",
        question: "Quel est le rôle d'un vase d'expansion ?",
        answers: ["Augmenter pression", "Absorber dilatation eau", "Filtrer", "Stocker ECS"],
        correct: 1,
        explanation: "Le vase absorbe la dilatation de l'eau (8-10% volume) lors du chauffage.",
        keyPoints: ["Absorbe dilatation", "8-10% volume", "Membrane", "Pré-gonflage 0.5-1 bar", "Protection circuit"]
    },
    {
        id: 'q144',
        category: "Stage 4 - Chauffage",
        question: "Quelle est la pression normale d'un circuit de chauffage à froid ?",
        answers: ["0,5 bar", "1-1,5 bar", "3 bars", "5 bars"],
        correct: 1,
        explanation: "Pression à froid : 1 à 1,5 bar (varie selon hauteur bâtiment).",
        keyPoints: ["1-1,5 bar", "À froid", "Selon hauteur", "1 bar = 10m H2O", "Contrôle régulier"]
    },
    {
        id: 'q145',
        category: "Stage 4 - Chauffage",
        question: "Quelle est la pression normale d'un circuit de chauffage à chaud ?",
        answers: ["1 bar", "2-2,5 bars", "5 bars", "10 bars"],
        correct: 1,
        explanation: "Pression à chaud : 2 à 2,5 bars (dilatation de l'eau).",
        keyPoints: ["2-2,5 bars", "À chaud", "Dilatation", "Normal", "Si > 3 : vérifier vase"]
    },
    {
        id: 'q146',
        category: "Stage 4 - Chauffage",
        question: "Comment purger un radiateur ?",
        answers: ["Ouvrir robinet", "Purgeur en haut, réservoir dessous, ouvrir jusqu'à eau", "Vidanger tout", "Démonter"],
        correct: 1,
        explanation: "Purgeur en haut du radiateur, ouvrir avec clé jusqu'à ce que l'eau coule (air sorti).",
        keyPoints: ["Purgeur haut", "Clé de purge", "Jusqu'à eau", "Récipient", "Vérifier pression après"]
    },
    {
        id: 'q147',
        category: "Stage 4 - Chauffage",
        question: "Pourquoi purger les radiateurs ?",
        answers: ["Augmenter poids", "Éliminer air qui bloque circulation", "Changer eau", "Nettoyer extérieur"],
        correct: 1,
        explanation: "L'air empêche la circulation d'eau et crée des zones froides dans le radiateur.",
        keyPoints: ["Éliminer air", "Zones froides", "Améliore circulation", "Annuel", "Début saison"]
    },
    {
        id: 'q148',
        category: "Stage 4 - Chauffage",
        question: "Qu'est-ce qu'un collecteur en chauffage ?",
        answers: ["Outil", "Distributeur alimentant plusieurs circuits", "Vanne", "Radiateur"],
        correct: 1,
        explanation: "Le collecteur distribue l'eau de départ vers plusieurs circuits (étages, zones).",
        keyPoints: ["Distribution", "Plusieurs circuits", "Aller + retour", "Équilibrage", "Débitmètres"]
    },
    {
        id: 'q149',
        category: "Stage 4 - Chauffage",
        question: "Qu'est-ce qu'une vanne d'équilibrage ?",
        answers: ["Vanne marche/arrêt", "Vanne réglant débit pour équilibrer circuit", "Thermostat", "Filtre"],
        correct: 1,
        explanation: "La vanne d'équilibrage règle le débit de chaque circuit pour homogénéiser températures.",
        keyPoints: ["Réglage débit", "Équilibre", "Sur retours", "Température homogène", "Réglage initial"]
    },
    {
        id: 'q150',
        category: "Stage 4 - Chauffage",
        question: "Qu'est-ce qu'un robinet thermostatique ?",
        answers: ["Robinet cuisine", "Vanne régulant débit selon température pièce", "Thermostat mural", "Vanne manuelle"],
        correct: 1,
        explanation: "Le robinet thermostatique régule automatiquement le débit selon la température ambiante.",
        keyPoints: ["Régulation auto", "Température pièce", "Bulbe cire/gaz", "Économie 15%", "Sur chaque radiateur"]
    },
    {
        id: 'q151',
        category: "Stage 4 - Régulation",
        question: "À quoi sert une sonde extérieure ?",
        answers: ["Mesurer température extérieure pour adapter chauffe", "Détecter fuites", "Mesurer consommation", "Ventilation"],
        correct: 0,
        explanation: "La sonde extérieure permet une régulation anticipative selon température extérieure (loi d'eau).",
        keyPoints: ["Température ext", "Régulation anticipative", "Loi d'eau", "Économie 10-15%", "Façade nord"]
    },
    {
        id: 'q152',
        category: "Stage 4 - Régulation",
        question: "Qu'est-ce que la régulation par loi d'eau ?",
        answers: ["Réglementation", "Température eau adaptée selon température extérieure", "Débit eau", "Qualité eau"],
        correct: 1,
        explanation: "Loi d'eau : relation température eau circuit / température extérieure (courbe de chauffe).",
        keyPoints: ["T° eau selon T° ext", "Courbe chauffe", "Anticipation", "Confort", "Économie"]
    },
    {
        id: 'q153',
        category: "Stage 4 - Régulation",
        question: "Qu'est-ce qu'un thermostat d'ambiance ?",
        answers: ["Thermomètre", "Régulateur température intérieure agissant sur chaudière", "Vanne radiateur", "Sonde"],
        correct: 1,
        explanation: "Le thermostat mesure température intérieure et commande marche/arrêt chaudière.",
        keyPoints: ["Température intérieure", "Commande chaudière", "Pièce de référence", "Consigne", "Économie"]
    },
    {
        id: 'q154',
        category: "Stage 4 - Régulation",
        question: "Où placer un thermostat d'ambiance ?",
        answers: ["Cuisine", "Pièce de référence, ni soleil ni courant d'air", "SDB", "Extérieur"],
        correct: 1,
        explanation: "Pièce de référence (salon), 1,5m hauteur, pas de soleil direct, ni courant d'air, ni radiateur proche.",
        keyPoints: ["Pièce référence", "1,5m hauteur", "Pas soleil", "Pas courant air", "Pas radiateur proche"]
    },
    {
        id: 'q155',
        category: "Stage 4 - Générateurs",
        question: "Quels sont les principaux types de générateurs de chaleur ?",
        answers: ["Radiateurs", "Chaudières gaz/fioul/bois, PAC, électrique", "Tuyaux", "Thermostats"],
        correct: 1,
        explanation: "Générateurs : chaudières (gaz, fioul, bois, granulés), PAC, chaudières électriques.",
        keyPoints: ["Chaudières", "Pompes à chaleur", "Électrique", "Bois/granulés", "Production chaleur"]
    },
    {
        id: 'q156',
        category: "Stage 4 - Générateurs",
        question: "Qu'est-ce que le COP d'une pompe à chaleur ?",
        answers: ["Rapport énergie produite / énergie consommée", "Puissance max", "Temps chauffe", "Niveau sonore"],
        correct: 0,
        explanation: "COP = Coefficient de Performance = énergie thermique produite / énergie électrique consommée.",
        keyPoints: ["COP = rendement", "Produite / consommée", "COP 3 = 3 kWh produits pour 1 kWh consommé", "Variable selon T°", "SCOP annuel"]
    },
    {
        id: 'q157',
        category: "Stage 4 - Générateurs",
        question: "Pourquoi le COP d'une PAC diminue quand il fait froid ?",
        answers: ["Défaut PAC", "Plus difficile extraire chaleur si T° ext basse", "Normal", "Réglage"],
        correct: 1,
        explanation: "Plus l'écart entre température extérieure et intérieure est grand, plus le COP diminue.",
        keyPoints: ["Écart température", "Extraction difficile", "COP baisse", "Normal", "Appoint nécessaire"]
    },
    {
        id: 'q158',
        category: "Stage 4 - Isométrie",
        question: "Qu'est-ce qu'un dessin isométrique ?",
        answers: ["Perspective 3D tuyauteries avec axes 30°", "Façade", "Schéma électrique", "Plan géographique"],
        correct: 0,
        explanation: "Dessin isométrique : représentation 3D avec axes à 30° pour visualiser tuyauteries.",
        keyPoints: ["3D", "Axes 30°", "Tuyauteries", "Facile à lire", "Métrés possibles"]
    },
    {
        id: 'q159',
        category: "Stage 4 - Installation",
        question: "Comment remplir un circuit de chauffage ?",
        answers: ["Robinet quelconque", "Robinet remplissage, ouvrir lentement, purger radiateurs", "Tuyau arrosage", "Pompe"],
        correct: 1,
        explanation: "Robinet de remplissage (sous chaudière), remplir lentement, purger radiateurs, pression 1-1,5 bar.",
        keyPoints: ["Robinet remplissage", "Lentement", "Purger au fur et à mesure", "1-1,5 bar", "Contrôler étanchéité"]
    },
    {
        id: 'q160',
        category: "Stage 4 - Installation",
        difficulty: "medium",
        question: "Pourquoi faut-il désembouer un circuit avant mise en service chaudière neuve ?",
        answers: ["Pas nécessaire", "Boues anciennes détruiraient échangeur neuf", "Réglementation", "Esthétique"],
        correct: 1,
        explanation: "Les boues d'un ancien circuit encrassent et détruisent l'échangeur de la chaudière neuve.",
        keyPoints: ["Protection chaudière neuve", "Boues anciennes", "Désembouage chimique", "Rinçage", "Inhibiteur après"]
    },

    // ========== NOUVELLES QUESTIONS AVEC IMAGES (40 questions) ==========

    // --- Symboles techniques (10 questions) ---
    {
        id: 'q161',
        category: "Stage 4 - Symboles",
        difficulty: "easy",
        question: "Les symboles de chauffage permettent de représenter les installations sur des plans techniques. Sont-ils obligatoires sur les schémas professionnels ?",
        image: "images/symboles/symbole-chauffage-3.png",
        imageAlt: "Symboles normalisés de chauffage",
        answers: ["Oui, normes obligatoires", "Non, facultatifs", "Seulement pour export", "Obsolètes"],
        correct: 0,
        explanation: "Les symboles normalisés sont obligatoires sur tous les schémas techniques professionnels pour garantir la compréhension universelle.",
        keyPoints: ["Normes NF", "Obligatoire", "Compréhension universelle", "Sécurité"]
    },
    {
        id: 'q162',
        category: "Stage 4 - Symboles",
        difficulty: "medium",
        question: "Sur un schéma de chauffage, comment distingue-t-on généralement le circuit aller du circuit retour ?",
        image: "images/symboles/symbole-chauffage-4.png",
        imageAlt: "Symboles de circuits de chauffage",
        answers: ["Par la couleur (rouge/bleu)", "Par l'épaisseur du trait", "Par des flèches", "Toutes ces réponses"],
        correct: 3,
        explanation: "Plusieurs conventions existent : couleurs (rouge=aller, bleu=retour), épaisseur de trait, ou flèches indiquant le sens de circulation.",
        keyPoints: ["Rouge = aller", "Bleu = retour", "Sens circulation", "Conventions graphiques"]
    },
    {
        id: 'q163',
        category: "Stage 4 - Symboles",
        difficulty: "easy",
        question: "Que représente un symbole de radiateur sur un plan de chauffage ?",
        image: "images/symboles/symbole-chauffage-5.png",
        imageAlt: "Symboles d'émetteurs de chaleur",
        answers: ["Un émetteur de chaleur", "Une chaudière", "Un circulateur", "Un vase d'expansion"],
        correct: 0,
        explanation: "Le radiateur est un émetteur de chaleur qui transfère l'énergie thermique de l'eau vers l'air ambiant.",
        keyPoints: ["Émetteur", "Transfert thermique", "Air ambiant", "Convection et rayonnement"]
    },
    {
        id: 'q164',
        category: "Stage 4 - Symboles",
        difficulty: "hard",
        question: "Quelle est la différence entre un schéma de principe et un schéma d'exécution ?",
        image: "images/symboles/symbole-chauffage-6.png",
        imageAlt: "Types de schémas techniques",
        answers: [
            "Aucune différence",
            "Le principe montre le fonctionnement, l'exécution donne les cotes exactes",
            "Le principe est en couleur, l'exécution en noir et blanc",
            "Le principe est pour le client, l'exécution pour l'installateur"
        ],
        correct: 1,
        explanation: "Le schéma de principe explique le fonctionnement global sans détails précis. Le schéma d'exécution indique les dimensions, cotes et implantations exactes pour l'installation.",
        keyPoints: ["Principe = fonctionnement", "Exécution = cotes précises", "Deux documents complémentaires", "Niveaux de détail différents"]
    },
    {
        id: 'q165',
        category: "Stage 4 - Schémas",
        difficulty: "medium",
        question: "Sur un schéma hydraulique, qu'indique une flèche sur une canalisation ?",
        image: "images/schemas/schema-chauffage-2.png",
        imageAlt: "Schéma hydraulique avec flèches",
        answers: ["La pression", "Le sens de circulation du fluide", "Le diamètre", "La température"],
        correct: 1,
        explanation: "Les flèches indiquent toujours le sens de circulation du fluide (eau chaude ou froide) dans les canalisations.",
        keyPoints: ["Sens de circulation", "Fluide", "Convention graphique", "Lecture du schéma"]
    },
    {
        id: 'q166',
        category: "Stage 4 - Schémas",
        difficulty: "easy",
        question: "À quoi sert un schéma isométrique en plomberie-chauffage ?",
        image: "images/schemas/schema-chauffage-3.png",
        imageAlt: "Schéma isométrique de tuyauterie",
        answers: [
            "Décoration du dossier",
            "Visualiser l'installation en 3D avec les hauteurs et parcours",
            "Calculer les pertes de charge",
            "Remplacer les photos"
        ],
        correct: 1,
        explanation: "Le schéma isométrique permet de représenter en 3D les canalisations avec leurs parcours exacts, changements de direction et hauteurs.",
        keyPoints: ["Représentation 3D", "Hauteurs", "Parcours réels", "Angles 30°"]
    },
    {
        id: 'q167',
        category: "Stage 4 - Schémas",
        difficulty: "hard",
        question: "Dans un schéma de chauffage, que représente un triangle barré sur une canalisation ?",
        image: "images/schemas/schema-chauffage-4.png",
        imageAlt: "Symbole de vanne sur schéma",
        answers: ["Un filtre", "Une vanne ou robinet", "Un clapet anti-retour", "Un purgeur"],
        correct: 1,
        explanation: "Le triangle barré est le symbole universel d'une vanne ou robinet permettant d'isoler une portion du circuit.",
        keyPoints: ["Vanne", "Isolation", "Symbole triangle", "Maintenance"]
    },
    {
        id: 'q168',
        category: "Stage 4 - Schémas",
        difficulty: "medium",
        question: "Sur un schéma de principe, que signifie un cercle avec une hélice à l'intérieur ?",
        image: "images/schemas/schema-chauffage-5.png",
        imageAlt: "Symbole de circulateur",
        answers: ["Un ventilateur", "Un circulateur (pompe)", "Un compteur", "Un disconnecteur"],
        correct: 1,
        explanation: "Ce symbole représente un circulateur, la pompe qui met en circulation l'eau chaude dans le circuit de chauffage.",
        keyPoints: ["Circulateur", "Pompe", "Circulation forcée", "Débit"]
    },
    {
        id: 'q169',
        category: "Stage 2 - Raccords",
        difficulty: "easy",
        question: "Les raccords cuivre présentés ici sont indispensables en plomberie. Quelle est leur principale fonction ?",
        image: "images/raccords/raccord-cuivre-1.png",
        imageAlt: "Différents types de raccords cuivre",
        answers: [
            "Décoration des tuyaux",
            "Assembler, changer de direction ou de diamètre",
            "Augmenter la pression",
            "Filtrer l'eau"
        ],
        correct: 1,
        explanation: "Les raccords permettent d'assembler des tubes, de changer de direction (coudes), de diviser le flux (tés) ou de changer de diamètre (réductions).",
        keyPoints: ["Assemblage", "Changement direction", "Changement diamètre", "Dérivation"]
    },
    {
        id: 'q170',
        category: "Stage 2 - Raccords",
        difficulty: "medium",
        question: "Quelle différence entre un coude 90° standard et un coude 90° grand rayon ?",
        image: "images/raccords/raccord-cuivre-2.png",
        imageAlt: "Coudes cuivre différents rayons",
        answers: [
            "Aucune différence",
            "Le grand rayon réduit les pertes de charge",
            "Le grand rayon est plus cher donc meilleur",
            "Le standard est plus solide"
        ],
        correct: 1,
        explanation: "Le coude grand rayon a un rayon de courbure plus important, ce qui réduit les turbulences et donc les pertes de charge.",
        keyPoints: ["Grand rayon", "Pertes de charge réduites", "Meilleur débit", "Économie d'énergie"]
    },

    // --- Raccords acier (5 questions) ---
    {
        id: 'q171',
        category: "Stage 2 - Raccords",
        difficulty: "easy",
        question: "Les raccords acier sont vissés contrairement au cuivre qui est brasé. Quel est l'avantage principal ?",
        image: "images/raccords/raccord-acier-1.png",
        imageAlt: "Raccords acier filetés",
        answers: [
            "Plus esthétique",
            "Démontable sans couper le tube",
            "Moins cher",
            "Plus léger"
        ],
        correct: 1,
        explanation: "Les raccords vissés sont démontables, ce qui facilite la maintenance et les modifications futures sans détruire les tuyaux.",
        keyPoints: ["Vissage", "Démontable", "Maintenance facile", "Filetage"]
    },
    {
        id: 'q172',
        category: "Stage 2 - Raccords",
        difficulty: "medium",
        question: "Lors du montage de raccords acier filetés, que doit-on obligatoirement utiliser ?",
        image: "images/raccords/raccord-acier-2.png",
        imageAlt: "Assemblage raccords acier",
        answers: [
            "Rien de spécial",
            "Un produit d'étanchéité (téflon, filasse + pâte)",
            "De la colle",
            "Du silicone"
        ],
        correct: 1,
        explanation: "Les filetages nécessitent un produit d'étanchéité : bande téflon, ou filasse chanvre + pâte à joint pour garantir l'étanchéité.",
        keyPoints: ["Téflon", "Filasse chanvre", "Pâte à joint", "Étanchéité obligatoire"]
    },
    {
        id: 'q173',
        category: "Stage 2 - Raccords",
        difficulty: "hard",
        question: "Dans quel sens enroule-t-on le téflon sur un filetage mâle ?",
        answers: [
            "N'importe quel sens",
            "Sens des aiguilles d'une montre (sens du vissage)",
            "Sens inverse des aiguilles d'une montre",
            "En croisant dans les deux sens"
        ],
        correct: 1,
        explanation: "Le téflon doit être enroulé dans le sens des aiguilles d'une montre (sens du vissage) pour ne pas se dérouler lors du montage.",
        keyPoints: ["Sens horaire", "Sens du vissage", "2-3 tours", "Bien tendu"]
    },
    {
        id: 'q174',
        category: "Stage 2 - Raccords",
        difficulty: "easy",
        question: "Qu'est-ce qu'un manchon en plomberie ?",
        answers: [
            "Un outil de coupe",
            "Un raccord droit pour assembler deux tubes de même diamètre",
            "Un appareil de mesure",
            "Un type de robinet"
        ],
        correct: 1,
        explanation: "Le manchon est un raccord cylindrique droit permettant d'assembler bout à bout deux tubes de même diamètre.",
        keyPoints: ["Raccord droit", "Même diamètre", "Assemblage bout à bout", "Cuivre ou acier"]
    },
    {
        id: 'q175',
        category: "Stage 2 - Raccords",
        difficulty: "medium",
        question: "Qu'est-ce qu'une réduction en plomberie ?",
        answers: [
            "Un rabais commercial",
            "Un raccord permettant de passer d'un diamètre à un autre",
            "Un outil pour cintrer",
            "Une diminution de pression"
        ],
        correct: 1,
        explanation: "Une réduction est un raccord conique permettant de passer d'un gros diamètre à un petit diamètre (ou inversement avec une réduction excentrée).",
        keyPoints: ["Changement diamètre", "Conique", "Réduction/augmentation", "Excentrée si besoin"]
    },

    // --- Solaire thermique CESI (8 questions) ---
    {
        id: 'q176',
        category: "Stage 3 - Solaire",
        difficulty: "easy",
        question: "Que signifie l'acronyme CESI ?",
        image: "images/solaire/cesi-01.png",
        imageAlt: "Système CESI complet",
        answers: [
            "Chauffage Électrique Solaire Individuel",
            "Chauffe-Eau Solaire Individuel",
            "Capteur Énergétique Solaire Industriel",
            "Circuit Eau Sanitaire Intégré"
        ],
        correct: 1,
        explanation: "CESI = Chauffe-Eau Solaire Individuel. C'est un système utilisant l'énergie solaire pour produire de l'eau chaude sanitaire.",
        keyPoints: ["Chauffe-Eau Solaire", "Individuel", "Eau chaude sanitaire", "Énergie gratuite"]
    },
    {
        id: 'q177',
        category: "Stage 3 - Solaire",
        difficulty: "medium",
        question: "Quel est le taux de couverture solaire moyen d'un CESI bien dimensionné en France ?",
        image: "images/solaire/cesi-02.png",
        imageAlt: "Rendement CESI",
        answers: ["10-20%", "30-40%", "50-70%", "90-100%"],
        correct: 2,
        explanation: "Un CESI bien dimensionné couvre en moyenne 50 à 70% des besoins annuels en eau chaude sanitaire, le complément étant assuré par une énergie d'appoint.",
        keyPoints: ["50-70% couverture", "Varie selon région", "Appoint nécessaire", "Économie substantielle"]
    },
    {
        id: 'q178',
        category: "Stage 3 - Solaire",
        difficulty: "easy",
        question: "Dans un CESI, quel fluide circule dans les capteurs solaires ?",
        image: "images/solaire/cesi-03.png",
        imageAlt: "Circuit primaire CESI",
        answers: [
            "Eau potable directement",
            "Fluide caloporteur (eau + antigel)",
            "Huile",
            "Air chaud"
        ],
        correct: 1,
        explanation: "Un fluide caloporteur (mélange eau + glycol antigel) circule dans les capteurs pour transférer la chaleur sans risque de gel.",
        keyPoints: ["Fluide caloporteur", "Eau + glycol", "Protection gel", "Circuit primaire"]
    },
    {
        id: 'q179',
        category: "Stage 3 - Solaire",
        difficulty: "medium",
        question: "Quelle est l'orientation idéale des capteurs solaires en France métropolitaine ?",
        image: "images/solaire/cesi-04.png",
        imageAlt: "Orientation capteurs solaires",
        answers: ["Nord", "Sud (±30°)", "Est", "Ouest"],
        correct: 1,
        explanation: "L'orientation Sud (±30°) est idéale pour capter un maximum d'ensoleillement toute l'année en France métropolitaine.",
        keyPoints: ["Plein Sud optimal", "±30° acceptable", "Inclinaison 45°", "Éviter ombres"]
    },
    {
        id: 'q180',
        category: "Stage 3 - Solaire",
        difficulty: "hard",
        question: "Quelle inclinaison est recommandée pour des capteurs solaires thermiques en France ?",
        image: "images/solaire/cesi-05.png",
        imageAlt: "Inclinaison capteurs",
        answers: ["0° (horizontal)", "20-30°", "45°", "90° (vertical)"],
        correct: 2,
        explanation: "Une inclinaison de 45° permet d'optimiser le rendement annuel en captant bien le soleil d'hiver (bas sur l'horizon) et d'été.",
        keyPoints: ["45° optimal", "Latitude +10°", "Compromis été/hiver", "Rendement annuel"]
    },
    {
        id: 'q181',
        category: "Stage 3 - Solaire",
        difficulty: "medium",
        question: "Dans un CESI, à quoi sert le circulateur du circuit primaire ?",
        image: "images/solaire/cesi-06.png",
        imageAlt: "Circulateur circuit primaire",
        answers: [
            "Augmenter la pression",
            "Faire circuler le fluide caloporteur entre capteurs et ballon",
            "Filtrer l'eau",
            "Chauffer l'eau"
        ],
        correct: 1,
        explanation: "Le circulateur (pompe) fait circuler le fluide caloporteur du circuit primaire entre les capteurs (qui chauffent) et l'échangeur du ballon (qui restitue).",
        keyPoints: ["Circulation forcée", "Capteurs vers ballon", "Régulation par sonde", "Circuit primaire"]
    },
    {
        id: 'q182',
        category: "Stage 3 - Solaire",
        difficulty: "easy",
        question: "Pourquoi un CESI nécessite-t-il toujours un système d'appoint ?",
        image: "images/solaire/cesi-07.png",
        imageAlt: "Système d'appoint CESI",
        answers: [
            "Ce n'est pas nécessaire",
            "Pour couvrir les besoins quand le soleil est insuffisant",
            "Pour augmenter la pression",
            "Par obligation légale"
        ],
        correct: 1,
        explanation: "L'appoint (électrique, gaz, bois...) prend le relais quand l'ensoleillement est insuffisant (nuit, hiver, mauvais temps) pour garantir l'eau chaude.",
        keyPoints: ["Soleil insuffisant", "Nuit et hiver", "Confort garanti", "Électrique ou gaz"]
    },
    {
        id: 'q183',
        category: "Stage 3 - Solaire",
        difficulty: "hard",
        question: "Qu'est-ce que la surchauffe d'un CESI et comment l'éviter ?",
        image: "images/solaire/cesi-08.png",
        imageAlt: "Gestion surchauffe CESI",
        answers: [
            "Ça n'existe pas",
            "Surchauffe en été : évacuer chaleur par dissipateur ou limiter capteurs",
            "Trop de pression : purger",
            "Manque d'eau : remplir"
        ],
        correct: 1,
        explanation: "En été avec forte chaleur et faible consommation, le fluide peut surchauffer. On installe un dissipateur thermique ou on limite la surface de capteurs.",
        keyPoints: ["Risque été", "Fort ensoleillement", "Dissipateur", "Protection installation"]
    },

    // --- Évacuation des eaux (7 questions) ---
    {
        id: 'q184',
        category: "Stage 2 - Plomberie",
        difficulty: "easy",
        question: "Quelle est la pente minimale recommandée pour une canalisation d'eaux usées ?",
        image: "images/evacuation/evacuation-1.png",
        imageAlt: "Schéma de pentes d'évacuation",
        answers: ["0% (horizontal)", "0.5%", "1% (1 cm/m)", "5%"],
        correct: 2,
        explanation: "La pente minimale est de 1% soit 1 cm par mètre. Cela garantit un écoulement correct sans stagnation ni dépôts.",
        keyPoints: ["1 cm/m minimum", "Éviter stagnation", "Empêcher dépôts", "Autocurage"]
    },
    {
        id: 'q185',
        category: "Stage 2 - Plomberie",
        difficulty: "medium",
        question: "À quoi sert un siphon dans une évacuation sanitaire ?",
        image: "images/evacuation/evacuation-2.png",
        imageAlt: "Différents types de siphons",
        answers: [
            "Décoration",
            "Empêcher les odeurs de remonter grâce à une garde d'eau",
            "Filtrer les déchets",
            "Augmenter la pression"
        ],
        correct: 1,
        explanation: "Le siphon crée une garde d'eau qui empêche les gaz et odeurs de l'égout de remonter dans le logement.",
        keyPoints: ["Garde d'eau", "Anti-odeurs", "Anti-retour gaz", "Démontable"]
    },
    {
        id: 'q186',
        category: "Stage 2 - Plomberie",
        difficulty: "hard",
        question: "Quelle est la hauteur minimale de garde d'eau d'un siphon ?",
        image: "images/evacuation/evacuation-3.png",
        imageAlt: "Garde d'eau d'un siphon",
        answers: ["1 cm", "3 cm", "5 cm", "10 cm"],
        correct: 2,
        explanation: "La garde d'eau minimale est de 5 cm selon les normes. Cela garantit une protection efficace contre les remontées d'odeurs.",
        keyPoints: ["5 cm minimum", "Norme DTU", "Protection odeurs", "Ne pas dépasser 10 cm"]
    },
    {
        id: 'q187',
        category: "Stage 2 - Plomberie",
        difficulty: "easy",
        question: "Pourquoi installe-t-on des évents (ventilations) sur les réseaux d'évacuation ?",
        image: "images/evacuation/evacuation-4.png",
        imageAlt: "Schéma de ventilation primaire",
        answers: [
            "Pour faire joli",
            "Pour équilibrer les pressions et protéger les gardes d'eau",
            "Pour refroidir les tuyaux",
            "C'est obligatoire mais inutile"
        ],
        correct: 1,
        explanation: "Les évents (ventilation primaire et secondaire) équilibrent les pressions, empêchent le désamorçage des siphons et évacuent les gaz.",
        keyPoints: ["Équilibre pression", "Protège siphons", "Évacue gaz", "Ventilation primaire obligatoire"]
    },
    {
        id: 'q188',
        category: "Stage 2 - Plomberie",
        difficulty: "medium",
        question: "Qu'est-ce qu'une chute en plomberie sanitaire ?",
        image: "images/evacuation/evacuation-5.png",
        imageAlt: "Chute d'eaux usées",
        answers: [
            "Une fuite",
            "Une canalisation verticale collectant les eaux usées",
            "Une pente trop forte",
            "Un accident"
        ],
        correct: 1,
        explanation: "La chute est la canalisation verticale qui collecte les eaux usées de tous les étages pour les acheminer vers l'égout.",
        keyPoints: ["Canalisation verticale", "Collecte étages", "DN 100 minimum", "Évent en partie haute"]
    },
    {
        id: 'q189',
        category: "Stage 2 - Plomberie",
        difficulty: "hard",
        question: "Quel diamètre minimal pour une évacuation de WC ?",
        image: "images/evacuation/evacuation-6.png",
        imageAlt: "Diamètres d'évacuation",
        answers: ["DN 32", "DN 40", "DN 100", "DN 125"],
        correct: 2,
        explanation: "Le diamètre minimal pour une évacuation de WC est de DN 100 (100 mm) pour permettre le passage des matières solides.",
        keyPoints: ["DN 100 minimum", "Matières solides", "Norme DTU", "Pas de réduction"]
    },
    {
        id: 'q190',
        category: "Stage 2 - Plomberie",
        difficulty: "medium",
        question: "Quelle est la différence entre eaux usées (EU) et eaux vannes (EV) ?",
        answers: [
            "Aucune différence",
            "EU = lavabos/douches, EV = WC",
            "EU = chaudes, EV = froides",
            "EU = cuisine, EV = salle de bain"
        ],
        correct: 1,
        explanation: "Les eaux usées (EU) proviennent des lavabos, douches, éviers. Les eaux vannes (EV) proviennent des WC et contiennent des matières fécales.",
        keyPoints: ["EU sans matières fécales", "EV avec matières fécales", "Parfois réseaux séparés", "Assainissement"]
    },

    // --- Calculs et dimensionnement (10 questions) ---
    {
        id: 'q191',
        category: "Stage 2 - Dimensionnement",
        difficulty: "easy",
        question: "Pour chauffer une pièce de 20 m² avec 2.5 m de hauteur et isolation moyenne (60 W/m³), quelle puissance faut-il ?",
        answers: ["1 kW", "3 kW", "5 kW", "10 kW"],
        correct: 1,
        explanation: "Volume = 20 × 2.5 = 50 m³. Puissance = 50 × 60 = 3000 W = 3 kW.",
        keyPoints: ["Volume = Surface × Hauteur", "Puissance = Volume × Coefficient", "60 W/m³ isolation moyenne", "3 kW"]
    },
    {
        id: 'q192',
        category: "Stage 2 - Dimensionnement",
        difficulty: "medium",
        question: "Une canalisation d'évacuation de 8 mètres avec une pente de 1% a un dénivelé de combien ?",
        answers: ["1 cm", "8 cm", "10 cm", "80 cm"],
        correct: 1,
        explanation: "Dénivelé = Longueur × (Pente/100) = 8 × 0.01 = 0.08 m = 8 cm.",
        keyPoints: ["1% = 1 cm/m", "8 m × 1% = 8 cm", "Formule simple", "Pente minimale"]
    },
    {
        id: 'q193',
        category: "Stage 2 - Dimensionnement",
        difficulty: "easy",
        question: "Convertir 12 L/min en L/h :",
        answers: ["12 L/h", "120 L/h", "720 L/h", "7200 L/h"],
        correct: 2,
        explanation: "12 L/min × 60 min = 720 L/h.",
        keyPoints: ["×60 pour passer en heures", "720 L/h", "Débit d'eau", "Conversion simple"]
    },
    {
        id: 'q194',
        category: "Stage 2 - Dimensionnement",
        difficulty: "medium",
        question: "Un pouce (1\") équivaut approximativement à combien de millimètres ?",
        answers: ["10 mm", "25.4 mm", "50 mm", "100 mm"],
        correct: 1,
        explanation: "1 pouce = 25.4 mm exactement. C'est une conversion fondamentale en plomberie.",
        keyPoints: ["1\" = 25.4 mm", "Unité anglo-saxonne", "3/4\" = 19 mm", "1/2\" = 12.7 mm"]
    },
    {
        id: 'q195',
        category: "Stage 2 - Dimensionnement",
        difficulty: "hard",
        question: "Pour une maison de 120 m² avec 2.5 m de hauteur et bonne isolation (40 W/m³), quelle puissance de chaudière ?",
        answers: ["5 kW", "8 kW", "12 kW", "20 kW"],
        correct: 2,
        explanation: "Volume = 120 × 2.5 = 300 m³. Puissance = 300 × 40 = 12000 W = 12 kW.",
        keyPoints: ["Volume 300 m³", "40 W/m³ bonne isolation", "12 kW", "Surdimensionner légèrement"]
    },
    {
        id: 'q196',
        category: "Stage 2 - Dimensionnement",
        difficulty: "medium",
        question: "Convertir 1.5 m³/h en L/min :",
        answers: ["15 L/min", "25 L/min", "90 L/min", "1500 L/min"],
        correct: 1,
        explanation: "1.5 m³/h = 1500 L/h. 1500 ÷ 60 = 25 L/min.",
        keyPoints: ["1 m³ = 1000 L", "÷60 pour minutes", "25 L/min", "Débit circulateur"]
    },
    {
        id: 'q197',
        category: "Stage 2 - Dimensionnement",
        difficulty: "easy",
        question: "Une pièce rectangulaire de 5 m × 4 m a quelle surface ?",
        answers: ["9 m²", "18 m²", "20 m²", "40 m²"],
        correct: 2,
        explanation: "Surface = Longueur × Largeur = 5 × 4 = 20 m².",
        keyPoints: ["Rectangle", "L × l", "20 m²", "Calcul simple"]
    },
    {
        id: 'q198',
        category: "Stage 2 - Dimensionnement",
        difficulty: "hard",
        question: "Quelle pente en % pour une canalisation de 12 m avec un dénivelé de 18 cm ?",
        answers: ["0.5%", "1%", "1.5%", "2%"],
        correct: 2,
        explanation: "Pente% = (Dénivelé/Longueur) × 100 = (0.18/12) × 100 = 1.5%.",
        keyPoints: ["18 cm = 0.18 m", "0.18/12 = 0.015", "×100 = 1.5%", "Pente correcte"]
    },
    {
        id: 'q199',
        category: "Stage 1 - Éco-construction",
        difficulty: "medium",
        question: "Quel est l'avantage principal d'une isolation thermique performante ?",
        answers: [
            "Esthétique",
            "Réduire les besoins en chauffage et les déperditions",
            "Augmenter la valeur immobilière uniquement",
            "Obligation légale sans intérêt"
        ],
        correct: 1,
        explanation: "Une bonne isolation réduit drastiquement les déperditions thermiques, donc les besoins en chauffage, les coûts et l'impact environnemental.",
        keyPoints: ["Déperditions réduites", "Économies énergie", "Confort", "RT 2012/RE2020"]
    },
    {
        id: 'q200',
        category: "Stage 1 - Éco-construction",
        difficulty: "easy",
        question: "Qu'est-ce qu'un matériau biosourcé ?",
        answers: [
            "Un matériau synthétique",
            "Un matériau d'origine végétale ou animale",
            "Un matériau importé",
            "Un matériau recyclé uniquement"
        ],
        correct: 1,
        explanation: "Un matériau biosourcé provient de la biomasse (végétale ou animale) : bois, chanvre, laine de mouton, paille, etc.",
        keyPoints: ["Origine naturelle", "Végétal ou animal", "Renouvelable", "Faible impact carbone"]
    }
];
