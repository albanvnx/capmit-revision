// Base de données des questions CAP M.I.T FC - VERSION COMPLÈTE v3.1
// 497 questions : distracteurs techniques améliorés + 15 symboles visuels + 8 schémas ID + 25 terminologie bidirectionnelle

const allQuestions = [
    // ========== QUESTIONS TEST AVEC IMAGES (3 questions) ==========
    {
        id: 'qtest1',
        category: "Chauffage - Symboles",
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
        category: "Chauffage - Schémas",
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
        category: "Chauffage - Symboles",
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
        category: "Fondamentaux & Sécurité - Sécurité",
        difficulty: "easy",
        question: "Que signifie l'acronyme EPI dans le contexte de la sécurité sur chantier ?",
        answers: ["Équipement de Protection Individuelle", "Entreprise de Plomberie Industrielle", "Évaluation des Procédures Internes", "Entretien et Prévention des Installations"],
        correct: 0,
        explanation: "EPI = Équipement de Protection Individuelle. Ce sont les équipements portés par le travailleur pour se protéger.",
        keyPoints: ["Casque", "Gants", "Lunettes", "Chaussures de sécurité", "Protection auditive"]
    },
    {
        id: 'q2',
        category: "Fondamentaux & Sécurité - Sécurité",
        question: "Quel matériau dangereux nécessite des précautions spéciales lors de travaux sur d'anciennes installations ?",
        answers: ["Le cuivre", "L'amiante", "L'acier galvanisé", "Le PVC"],
        correct: 1,
        explanation: "L'amiante (interdit depuis 1997) peut causer de graves maladies respiratoires.",
        keyPoints: ["Diagnostic obligatoire", "Retrait par entreprise certifiée", "EPI spéciaux", "Risque cancer", "Mésothéliome"]
    },
    {
        id: 'q3',
        category: "Fondamentaux & Sécurité - Sécurité",
        question: "Que signifie EPC en matière de sécurité ?",
        answers: ["Équipement de Protection Collective", "Entreprise de Plomberie Certifiée", "Évaluation des Procédures de Chantier", "Entretien Préventif et Correctif"],
        correct: 0,
        explanation: "EPC = Équipement de Protection Collective. Protège l'ensemble des travailleurs.",
        keyPoints: ["Garde-corps", "Filets de sécurité", "Barrières", "Signalisation", "Balisage"]
    },
    {
        id: 'q4',
        category: "Fondamentaux & Sécurité - Sécurité",
        question: "Quelle est la première action en cas d'accident sur chantier ?",
        answers: ["Appeler l'entreprise", "Protéger-Alerter-Secourir", "Déplacer la victime", "Prendre des photos"],
        correct: 1,
        explanation: "PAS : Protéger (zone danger), Alerter (secours), Secourir (gestes appropriés).",
        keyPoints: ["Protéger la zone", "Appeler 15 ou 18", "Ne pas déplacer si trauma", "Gestes de premiers secours", "Défibrillateur"]
    },
    {
        id: 'q5',
        category: "Fondamentaux & Sécurité - Sécurité",
        question: "À quelle hauteur doit-on obligatoirement utiliser un harnais de sécurité ?",
        answers: ["À partir de 1 mètre", "À partir de 2 mètres", "À partir de 3 mètres", "À partir de 5 mètres"],
        correct: 2,
        explanation: "Au-delà de 3 mètres de hauteur, le port du harnais avec point d'ancrage est obligatoire.",
        keyPoints: ["Hauteur > 3m", "Point d'ancrage certifié", "Contrôle annuel", "Formation obligatoire", "Longe absorbeur"]
    },
    {
        id: 'q6',
        category: "Fondamentaux & Sécurité - Sécurité",
        question: "Que contient le PPSPS (Plan Particulier de Sécurité et de Protection de la Santé) ?",
        answers: ["L'analyse des risques et mesures de prévention du chantier", "Le calendrier d'exécution des travaux par corps de métier", "La liste des sous-traitants et contrats d'interface", "Les procédures qualité de réception de chantier"],
        correct: 0,
        explanation: "Le PPSPS identifie les risques du chantier et définit les mesures de prévention.",
        keyPoints: ["Obligatoire si > 1 entreprise", "Analyse risques", "Mesures prévention", "Coordonnateur SPS", "Organisation secours"]
    },
    {
        id: 'q7',
        category: "Fondamentaux & Sécurité - Sécurité",
        question: "Quelle couleur identifie le plomb dans les canalisations anciennes ?",
        answers: ["Rouge", "Gris mat", "Blanc", "Bleu"],
        correct: 1,
        explanation: "Le plomb est gris mat, mou, rayable à l'ongle. Interdit pour eau potable depuis 1995.",
        keyPoints: ["Gris mat", "Mou et rayable", "Interdit depuis 1995", "Saturnisme", "Diagnostic obligatoire"]
    },
    {
        id: 'q8',
        category: "Fondamentaux & Sécurité - Sécurité",
        question: "Quelle est la concentration maximale autorisée de plomb dans l'eau potable ?",
        answers: ["5 µg/L", "10 µg/L", "25 µg/L", "50 µg/L"],
        correct: 1,
        explanation: "Depuis 2013, la norme est de 10 µg/L maximum dans l'eau du robinet.",
        keyPoints: ["Norme : 10 µg/L", "Depuis 2013", "Analyse obligatoire", "Remplacement canalisations", "Risque saturnisme"]
    },
    {
        id: 'q9',
        category: "Fondamentaux & Sécurité - Sécurité",
        question: "Quels sont les principaux risques liés aux colles et adhésifs ?",
        answers: ["Incendie uniquement", "Intoxication et irritation", "Électrocution", "Brûlures thermiques"],
        correct: 1,
        explanation: "Les colles contiennent des solvants volatils : irritation, vertiges, nausées possibles.",
        keyPoints: ["Solvants volatils", "Ventilation obligatoire", "Irritation voies respiratoires", "Vertiges", "Pas de flamme"]
    },
    {
        id: 'q10',
        category: "Fondamentaux & Sécurité - Sécurité",
        question: "Comment doit-on gérer les déchets de chantier ?",
        answers: ["Tri sélectif selon les catégories réglementaires (inertes, non dangereux, dangereux)", "Regrouper dans une benne unique pour traitement en centre de tri collectif", "Séparer uniquement les déchets dangereux, le reste en mélange autorisé", "Évacuer l'ensemble en déchetterie municipale en fin de chantier"],
        correct: 0,
        explanation: "Tri obligatoire : métaux, bois, gravats, déchets dangereux, plastiques.",
        keyPoints: ["Tri sélectif", "Bennes séparées", "Déchets dangereux à part", "Traçabilité BSD", "Recyclage"]
    },
    {
        id: 'q11',
        category: "Fondamentaux & Sécurité - Sécurité",
        question: "Qu'est-ce qu'un BSD (Bordereau de Suivi de Déchets) ?",
        answers: ["Un plan de chantier", "Un document de traçabilité des déchets dangereux", "Un bon de livraison", "Un certificat"],
        correct: 1,
        explanation: "Le BSD assure la traçabilité des déchets dangereux du producteur à l'éliminateur.",
        keyPoints: ["Déchets dangereux", "Traçabilité complète", "3 volets", "Conservation 5 ans", "Obligatoire"]
    },
    {
        id: 'q12',
        category: "Fondamentaux & Sécurité - Sécurité",
        question: "Quelle est la durée de validité d'une autorisation de conduite de nacelle ?",
        answers: ["1 an", "3 ans", "5 ans", "10 ans"],
        correct: 2,
        explanation: "L'autorisation de conduite de nacelle est valable 5 ans avec recyclage obligatoire.",
        keyPoints: ["Validité 5 ans", "Formation initiale", "Recyclage obligatoire", "Examen médical", "Délivrée par employeur"]
    },
    {
        id: 'q13',
        category: "Fondamentaux & Sécurité - Sécurité",
        question: "Quelles sont les zones à risque sur un chantier ?",
        answers: ["Uniquement en hauteur", "Hauteur, électricité, machines, produits dangereux", "Seulement près des machines", "Partout de la même façon"],
        correct: 1,
        explanation: "Risques multiples : chutes, électrisation, écrasement, intoxication.",
        keyPoints: ["Chutes hauteur", "Électrisation", "Machines en mouvement", "Produits chimiques", "Effondrements"]
    },
    {
        id: 'q14',
        category: "Fondamentaux & Sécurité - Sécurité",
        question: "Que faire avant d'intervenir sur un réseau de gaz ?",
        answers: ["Obtenir un permis de feu + consigner le réseau + utiliser un détecteur gaz", "Fermer la vanne principale et ventiler la pièce pendant 15 minutes", "Consigner le réseau et vérifier l'absence de gaz avec un détecteur uniquement", "Obtenir l'accord du responsable de chantier et couper l'alimentation électrique"],
        correct: 0,
        explanation: "Permis de feu obligatoire + consignation du réseau + détecteur gaz.",
        keyPoints: ["Permis de feu", "Consignation", "Détecteur gaz", "Ventilation", "Extinction flammes"]
    },
    {
        id: 'q15',
        category: "Fondamentaux & Sécurité - Sécurité",
        question: "Quelle est la principale cause d'accidents mortels sur les chantiers ?",
        answers: ["Électrocution", "Chutes de hauteur", "Intoxication", "Écrasement"],
        correct: 1,
        explanation: "Les chutes de hauteur représentent environ 15% des accidents mortels du BTP.",
        keyPoints: ["1ère cause mortalité", "15% accidents mortels", "> 3m = harnais", "Échafaudages", "Garde-corps"]
    },

    // ========== STAGE 1 - ATELIER (20 questions) ==========
    {
        id: 'q16',
        category: "Fondamentaux & Sécurité - Atelier",
        question: "Quels sont les deux types principaux de brasure pour tubes cuivre ?",
        answers: ["Brasure forte et tendre", "Brasure chaude et froide", "Brasure électrique et thermique", "Brasure primaire et secondaire"],
        correct: 0,
        explanation: "Brasure forte (>450°C) pour haute pression et brasure tendre (<450°C) pour eau froide.",
        keyPoints: ["Forte : >450°C", "Tendre : <450°C", "Forte : haute pression", "Tendre : eau froide", "Chalumeau"]
    },
    {
        id: 'q17',
        category: "Fondamentaux & Sécurité - Atelier",
        question: "Quel est le rayon de cintrage minimum pour un tube cuivre Ø12 ?",
        answers: ["2 fois le diamètre", "3 fois le diamètre", "4 fois le diamètre", "5 fois le diamètre"],
        correct: 1,
        explanation: "Le rayon de cintrage minimum est de 3 fois le diamètre du tube pour éviter le pincement.",
        keyPoints: ["3 × diamètre", "Évite pincement", "Cintreuse adaptée", "Pas de plis", "Ressort possible"]
    },
    {
        id: 'q18',
        category: "Fondamentaux & Sécurité - Atelier",
        question: "Qu'est-ce que le taraudage ?",
        answers: ["Percer un trou", "Créer un filetage intérieur", "Couper un tube", "Souder deux pièces"],
        correct: 1,
        explanation: "Le taraudage consiste à créer un filetage intérieur dans un trou avec un taraud.",
        keyPoints: ["Filetage intérieur", "Outil : taraud", "Lubrification obligatoire", "Pas de vis", "3 passes minimum"]
    },
    {
        id: 'q19',
        category: "Fondamentaux & Sécurité - Atelier",
        question: "Qu'est-ce que le filage ?",
        answers: ["Couper un fil", "Créer un filetage extérieur", "Tirer un câble", "Limer une pièce"],
        correct: 1,
        explanation: "Le filage crée un filetage extérieur sur un tube avec une filière.",
        keyPoints: ["Filetage extérieur", "Outil : filière", "Lubrification", "Tubes acier", "Étau nécessaire"]
    },
    {
        id: 'q20',
        category: "Fondamentaux & Sécurité - Atelier",
        question: "Pourquoi doit-on ébavurer un tube après la coupe ?",
        answers: ["Pour éviter les turbulences, réduire les pertes de charge et permettre une bonne capillarité à la brasure", "Pour permettre l'insertion facile du tube dans les raccords à sertir sans forcer", "Pour respecter la longueur nominale d'emboîtement et les cotes des raccords", "Pour éviter la corrosion des bavures en contact avec l'eau"],
        correct: 0,
        explanation: "Les bavures créent des turbulences, réduisent le débit et peuvent causer des fuites.",
        keyPoints: ["Enlève bavures", "Évite turbulences", "Meilleur débit", "Évite fuites", "Outil : ébavureur"]
    },
    {
        id: 'q21',
        category: "Fondamentaux & Sécurité - Atelier",
        question: "Quelle est la température de fusion de la brasure tendre (étain) ?",
        answers: ["183°C", "250°C", "450°C", "650°C"],
        correct: 0,
        explanation: "L'alliage étain-plomb fond à environ 183°C, d'où le nom 'brasure tendre'.",
        keyPoints: ["183°C", "Étain-plomb", "Eau froide uniquement", "Flamme douce", "Pas haute pression"]
    },
    {
        id: 'q22',
        category: "Fondamentaux & Sécurité - Atelier",
        question: "Quelle est la température de fusion de la brasure forte (argent) ?",
        answers: ["450°C", "650°C", "750°C", "850°C"],
        correct: 2,
        explanation: "Les alliages argent fondent entre 650-850°C selon composition.",
        keyPoints: ["650-850°C", "Alliage argent", "Haute pression OK", "Chauffage/ECS", "Flamme puissante"]
    },
    {
        id: 'q23',
        category: "Fondamentaux & Sécurité - Atelier",
        question: "À quoi sert le décapant (flux) en brasure ?",
        answers: ["Refroidir", "Dissoudre les oxydes et faciliter l'accroche", "Colorer", "Renforcer"],
        correct: 1,
        explanation: "Le flux dissout les oxydes et permet au métal d'apport de bien adhérer.",
        keyPoints: ["Dissout oxydes", "Meilleure accroche", "Protection oxydation", "Application avant chauffe", "Brasure tendre"]
    },
    {
        id: 'q24',
        category: "Fondamentaux & Sécurité - Atelier",
        question: "Quelle est la bonne méthode pour braser un raccord cuivre ?",
        answers: ["Chauffer le métal d'apport", "Chauffer le tube, le métal d'apport fond au contact", "Chauffer les deux", "Utiliser un fer à souder"],
        correct: 1,
        explanation: "On chauffe le tube/raccord, le métal d'apport fond à leur contact par capillarité.",
        keyPoints: ["Chauffer le tube", "Capillarité", "Métal fond au contact", "Flamme indirecte", "Rotation flamme"]
    },
    {
        id: 'q25',
        category: "Fondamentaux & Sécurité - Atelier",
        question: "Quel outil utilise-t-on pour couper un tube cuivre proprement ?",
        answers: ["Scie à métaux", "Coupe-tube à molette", "Meuleuse", "Cisailles"],
        correct: 1,
        explanation: "Le coupe-tube à molette donne une coupe nette, perpendiculaire, sans déformation.",
        keyPoints: ["Coupe-tube molette", "Coupe nette", "Perpendiculaire", "Pas de déformation", "Puis ébavurer"]
    },
    {
        id: 'q26',
        category: "Fondamentaux & Sécurité - Atelier",
        question: "Qu'est-ce qu'un collet battu ?",
        answers: ["Un raccord vissé", "Une extrémité de tube évasée pour joint", "Un type de soudure", "Un outil"],
        correct: 1,
        explanation: "Le collet battu est une extrémité de tube évasée à 45° pour recevoir un joint.",
        keyPoints: ["Extrémité évasée", "Angle 45°", "Joint fibre ou cuivre", "Écrou et olive", "Démontable"]
    },
    {
        id: 'q27',
        category: "Fondamentaux & Sécurité - Atelier",
        question: "Quelle est la pente minimale pour une évacuation d'eaux usées ?",
        answers: ["0,5 cm/m", "1 cm/m", "2 cm/m", "5 cm/m"],
        correct: 1,
        explanation: "La pente minimale est de 1 cm par mètre (1%) pour assurer l'écoulement.",
        keyPoints: ["1 cm/m minimum", "1% de pente", "Évite stagnation", "Auto-curage", "DTU 60.11"]
    },
    {
        id: 'q28',
        category: "Fondamentaux & Sécurité - Atelier",
        question: "Quel type de flamme utilise-t-on avec un chalumeau oxyacétylénique ?",
        answers: ["Oxydante", "Réductrice", "Neutre", "Carburante"],
        correct: 2,
        explanation: "La flamme neutre (autant d'oxygène que d'acétylène) est idéale pour la brasure.",
        keyPoints: ["Flamme neutre", "Équilibre O2/C2H2", "3 zones flamme", "Dard bleu", "Température 3200°C"]
    },
    {
        id: 'q29',
        category: "Fondamentaux & Sécurité - Atelier",
        question: "Comment reconnaît-on un tube cuivre écroui ?",
        answers: ["Il est rouge", "Il est dur et difficile à cintrer", "Il est mou", "Il est rayé"],
        correct: 1,
        explanation: "Le cuivre écroui (dur) a été travaillé à froid, il est rigide et difficile à cintrer.",
        keyPoints: ["Dur", "Rigide", "Difficile à cintrer", "Résistance mécanique", "Droit en barre"]
    },
    {
        id: 'q30',
        category: "Fondamentaux & Sécurité - Atelier",
        question: "Comment reconnaît-on un tube cuivre recuit ?",
        answers: ["Il est noir", "Il est mou et facile à cintrer", "Il est carré", "Il est fileté"],
        correct: 1,
        explanation: "Le cuivre recuit (mou) a été chauffé puis refroidi lentement, il est souple.",
        keyPoints: ["Mou", "Souple", "Facile à cintrer", "En couronne", "Installation facile"]
    },
    {
        id: 'q31',
        category: "Fondamentaux & Sécurité - Atelier",
        question: "Qu'est-ce qu'un raccord bicône ?",
        answers: ["Un raccord soudé", "Un raccord à compression avec deux cônes", "Un raccord fileté", "Un raccord PVC"],
        correct: 1,
        explanation: "Le raccord bicône (deux cônes) sertit le tube par compression, sans soudure.",
        keyPoints: ["Deux cônes", "Compression", "Sans soudure", "Démontable", "Étanchéité olive"]
    },
    {
        id: 'q32',
        category: "Fondamentaux & Sécurité - Atelier",
        question: "Quelle est la différence entre un té égal et un té réduit ?",
        answers: ["La forme", "Les diamètres : égaux ou différents", "Le matériau", "Le prix"],
        correct: 1,
        explanation: "Té égal : 3 diamètres identiques. Té réduit : un diamètre différent (souvent le piquage).",
        keyPoints: ["Té égal : Ø identiques", "Té réduit : Ø différents", "Piquage réduit", "Dérivation", "Moins de perte charge"]
    },
    {
        id: 'q33',
        category: "Fondamentaux & Sécurité - Atelier",
        question: "Pourquoi utilise-t-on une presse à sertir pour les multicouches ?",
        answers: ["Étanchéité permanente garantie sans flamme, même en zone à risque incendie", "Résistance mécanique du sertissage supérieure à la brasure forte en traction", "Compatible avec tous types de tube dont le cuivre et l'acier fileté", "Étanchéité certifiée sans contrôle ultérieur quel que soit l'opérateur"],
        correct: 0,
        explanation: "Le sertissage assure une étanchéité permanente sans risque d'incendie (pas de flamme).",
        keyPoints: ["Sans flamme", "Étanchéité garantie", "Indémontable", "Mâchoires adaptées", "Sécurité chantier"]
    },
    {
        id: 'q34',
        category: "Fondamentaux & Sécurité - Atelier",
        question: "Qu'est-ce que le PER (tube) ?",
        answers: ["Polyéthylène Renforcé", "Polyéthylène Réticulé", "Polypropylène Extrudé", "Polyester Résistant"],
        correct: 1,
        explanation: "PER = Polyéthylène Réticulé. Flexible, résiste à la chaleur et à la pression.",
        keyPoints: ["Polyéthylène Réticulé", "Flexible", "Résiste 95°C", "6-10 bars", "Gaine protection"]
    },
    {
        id: 'q35',
        category: "Fondamentaux & Sécurité - Atelier",
        question: "Quels sont les avantages du tube multicouche ?",
        answers: ["Résiste à 95°C, faible dilatation grâce à l'aluminium, garde sa forme après cintrage", "Meilleure résistance chimique aux eaux très acides (pH < 6) que le cuivre", "Compatible avec des températures jusqu'à 120°C en pointe comme le cuivre écroui", "Diamètre extérieur identique aux tubes en acier fileté pour mêmes raccords"],
        correct: 0,
        explanation: "Le multicouche (PEX-ALU-PEX) résiste à la chaleur, ne dilate pas, garde sa forme.",
        keyPoints: ["PEX-ALU-PEX", "Pas de dilatation", "Garde la forme", "Résiste 95°C", "Raccords rapides"]
    },

    // ========== STAGE 1 - DESSIN TECHNIQUE (10 questions) ==========
    {
        id: 'q36',
        category: "Fondamentaux & Sécurité - Dessin",
        question: "Qu'est-ce qu'un cartouche sur un plan technique ?",
        answers: ["Un encadré normalisé contenant les informations du plan (titre, échelle, auteur, date, indice)", "Un tableau récapitulatif des notes de calcul hydraulique annexé au plan", "La zone de repères et de révisions d'un document technique normalisé ISO", "Un encadré symbolisant les coupes et sections sur les plans d'exécution"],
        correct: 0,
        explanation: "Le cartouche contient : titre, échelle, date, auteur, indice de révision.",
        keyPoints: ["Infos plan", "Titre", "Échelle", "Date", "Auteur", "Bas droite"]
    },
    {
        id: 'q37',
        category: "Fondamentaux & Sécurité - Dessin",
        question: "Que signifie une échelle 1:50 ?",
        answers: ["Agrandi 50 fois", "Réduit 50 fois", "Taille réelle", "50 cm = 1 m"],
        correct: 1,
        explanation: "1:50 signifie que 1 cm sur le plan représente 50 cm en réalité (réduction).",
        keyPoints: ["1 cm = 50 cm réel", "Réduction", "Plan bâtiment", "Échelle courante", "Mesures × 50"]
    },
    {
        id: 'q38',
        category: "Fondamentaux & Sécurité - Dessin",
        question: "Quelle est la différence entre un plan de masse et un plan de situation ?",
        answers: ["Aucune", "Masse : terrain, Situation : quartier", "Masse : intérieur, Situation : extérieur", "L'échelle"],
        correct: 1,
        explanation: "Plan de situation : localisation dans le quartier. Plan de masse : terrain avec bâtiment.",
        keyPoints: ["Situation : localisation", "Masse : terrain", "Échelles différentes", "Deux plans distincts", "Dossier permis"]
    },
    {
        id: 'q39',
        category: "Fondamentaux & Sécurité - Dessin",
        question: "Que représente un trait mixte fin sur un plan ?",
        answers: ["Un mur", "Un axe ou élément caché", "Une porte", "Une fenêtre"],
        correct: 1,
        explanation: "Le trait mixte fin (tiret-point) représente les axes ou éléments cachés.",
        keyPoints: ["Tiret-point", "Axe", "Caché", "Trait fin", "Symétrie"]
    },
    {
        id: 'q40',
        category: "Fondamentaux & Sécurité - Dessin",
        question: "Que représente un trait continu fort ?",
        answers: ["Un axe", "Un contour visible", "Un élément caché", "Une cote"],
        correct: 1,
        explanation: "Le trait continu fort (épais) représente les contours et arêtes visibles.",
        keyPoints: ["Continu épais", "Contours", "Arêtes visibles", "Murs", "Éléments principaux"]
    },
    {
        id: 'q41',
        category: "Fondamentaux & Sécurité - Dessin",
        question: "Comment représente-t-on une cote sur un plan ?",
        answers: ["Trait épais", "Trait fin avec flèches et valeur", "Trait mixte", "Trait pointillé"],
        correct: 1,
        explanation: "Une cote est un trait fin terminé par des flèches avec la valeur de la dimension.",
        keyPoints: ["Trait fin", "Flèches", "Valeur dimension", "Ligne de cote", "Ligne d'attache"]
    },
    {
        id: 'q42',
        category: "Fondamentaux & Sécurité - Dessin",
        question: "Qu'est-ce qu'une vue en coupe ?",
        answers: ["Vue extérieure", "Vue après découpe selon un plan", "Vue de dessus", "Vue 3D"],
        correct: 1,
        explanation: "La coupe montre l'intérieur après découpe imaginaire selon un plan.",
        keyPoints: ["Découpe imaginaire", "Intérieur visible", "Plan de coupe", "Hachures", "Détails internes"]
    },
    {
        id: 'q43',
        category: "Fondamentaux & Sécurité - Dessin",
        question: "Combien y a-t-il de vues principales en projection orthogonale ?",
        answers: ["3", "4", "6", "8"],
        correct: 2,
        explanation: "6 vues : face, dessus, droite, gauche, dessous, arrière. On en utilise généralement 3.",
        keyPoints: ["6 vues possibles", "3 principales suffisent", "Face, dessus, droite", "Projection orthogonale", "2D"]
    },
    {
        id: 'q44',
        category: "Fondamentaux & Sécurité - Dessin",
        question: "Qu'est-ce qu'un plan isométrique ?",
        answers: ["Plan 2D", "Plan 3D avec angles à 30°", "Plan de façade", "Plan électrique"],
        correct: 1,
        explanation: "Plan isométrique : représentation 3D avec axes à 30° pour visualiser tuyauteries.",
        keyPoints: ["3D", "Axes 30°", "Tuyauteries", "Perspective", "Facile à lire"]
    },
    {
        id: 'q45',
        category: "Fondamentaux & Sécurité - Dessin",
        question: "Que signifie NGF sur un plan de bâtiment ?",
        answers: ["Niveau de Garantie Fondation", "Nivellement Général de la France", "Norme Générale Française", "Niveau de Gaz en Français"],
        correct: 1,
        explanation: "NGF = Nivellement Général de la France. Référence altimétrique nationale.",
        keyPoints: ["Référence altitude", "Niveau mer", "Repère géodésique", "±0.00 bâtiment", "Topographie"]
    },

    // ========== STAGE 1 - SYSTÈMES & EAU (15 questions) ==========
    {
        id: 'q46',
        category: "Fondamentaux & Sécurité - Systèmes",
        question: "Que signifie ECS ?",
        answers: ["Énergie Calorifique Solaire", "Eau Chaude Sanitaire", "Équipement Chauffage Statique", "Expansion Circuit Secondaire"],
        correct: 1,
        explanation: "ECS = Eau Chaude Sanitaire, pour usages domestiques (douche, lavabo, cuisine).",
        keyPoints: ["Eau chaude", "Usage domestique", "55-60°C", "Séparé du chauffage", "Légionellose"]
    },
    {
        id: 'q47',
        category: "Fondamentaux & Sécurité - Systèmes",
        question: "Quelle température doit avoir l'ECS pour éviter la légionellose ?",
        answers: ["40°C", "50°C", "60°C", "70°C"],
        correct: 2,
        explanation: "L'ECS doit être stockée à 60°C minimum et distribuée à 50°C minimum.",
        keyPoints: ["60°C stockage", "50°C distribution", "Légionellose < 50°C", "Contrôle régulier", "Désinfection thermique"]
    },
    {
        id: 'q48',
        category: "Fondamentaux & Sécurité - Systèmes",
        question: "Quel est le rôle d'un circulateur ?",
        answers: ["Assurer la mise en circulation de l'eau dans le circuit de chauffage", "Maintenir une pression constante en tête de réseau hydraulique", "Éliminer l'air dissous dans les canalisations de chauffage", "Réguler la température de départ chaudière selon la demande"],
        correct: 0,
        explanation: "Le circulateur (pompe) fait circuler l'eau dans le circuit de chauffage.",
        keyPoints: ["Pompe circulation", "50-150W", "Vitesse réglable", "Sur retour chaudière", "Distribution chaleur"]
    },
    {
        id: 'q49',
        category: "Fondamentaux & Sécurité - Systèmes",
        question: "Quelle est la pression normale du réseau d'eau potable ?",
        answers: ["0,5-1 bar", "3-4 bars", "10-15 bars", "20-25 bars"],
        correct: 1,
        explanation: "La pression du réseau d'eau potable en ville est de 3-4 bars.",
        keyPoints: ["3-4 bars normal", "Min 0.3 bar", "Max 6-7 bars", "Réducteur si > 5", "Surpresseur si faible"]
    },
    {
        id: 'q50',
        category: "Fondamentaux & Sécurité - Systèmes",
        question: "Qu'est-ce qu'un réducteur de pression ?",
        answers: ["Augmente pression", "Stabilise et réduit la pression", "Filtre eau", "Chauffe eau"],
        correct: 1,
        explanation: "Le réducteur stabilise la pression en aval à une valeur réglable (généralement 3 bars).",
        keyPoints: ["Réduit pression", "Réglable", "Généralement 3 bars", "Protection installation", "Si > 5 bars"]
    },
    {
        id: 'q51',
        category: "Fondamentaux & Sécurité - Systèmes",
        question: "À quoi sert un disconnecteur ?",
        answers: ["Empêcher le retour d'eau non-potable vers le réseau d'eau potable par une zone de pression réduite", "Filtrer les particules en suspension dans le réseau d'alimentation d'eau", "Réduire et stabiliser la pression d'eau à l'entrée de l'installation (3 bars)", "Séparer hydrauliquement le réseau d'eau froide du circuit de chauffage"],
        correct: 0,
        explanation: "Le disconnecteur empêche le retour d'eau usée vers le réseau d'eau potable.",
        keyPoints: ["Anti-retour", "Protection réseau", "Types BA/CA/EA", "Contrôle annuel", "Obligatoire"]
    },
    {
        id: 'q52',
        category: "Fondamentaux & Sécurité - Systèmes",
        question: "Quelle est la différence entre eau dure et eau douce ?",
        answers: ["Température", "Teneur en calcaire (TH)", "Couleur", "Goût"],
        correct: 1,
        explanation: "Eau dure = riche en calcaire (TH élevé). Eau douce = peu de calcaire (TH faible).",
        keyPoints: ["TH = Titre Hydrotimétrique", "Dure : > 30°f", "Douce : < 15°f", "Calcaire", "Adoucisseur"]
    },
    {
        id: 'q53',
        category: "Fondamentaux & Sécurité - Systèmes",
        question: "Que mesure le TH (Titre Hydrotimétrique) ?",
        answers: ["Température", "Dureté (calcaire)", "Pression", "Débit"],
        correct: 1,
        explanation: "Le TH mesure la concentration en calcium et magnésium (dureté de l'eau).",
        keyPoints: ["Dureté eau", "Calcium + Magnésium", "°f (degré français)", "Entartrage", "10 mg/L CaCO3 = 1°f"]
    },
    {
        id: 'q54',
        category: "Fondamentaux & Sécurité - Systèmes",
        question: "À quoi sert un adoucisseur d'eau ?",
        answers: ["Réduire la dureté calcaire par échange ionique Ca²⁺/Mg²⁺ → Na⁺ sur résines", "Neutraliser le pH de l'eau acide pour protéger les canalisations en cuivre", "Filtrer par tamisage les particules de calcaire en suspension dans l'eau", "Traiter l'eau par dosage d'inhibiteurs de corrosion et d'anti-tartre"],
        correct: 0,
        explanation: "L'adoucisseur échange les ions calcium/magnésium contre du sodium (résines).",
        keyPoints: ["Réduit calcaire", "Résines échangeuses", "Régénération sel", "TH < 15°f", "Entretien régulier"]
    },
    {
        id: 'q55',
        category: "Fondamentaux & Sécurité - Systèmes",
        question: "Qu'est-ce qu'un ballon tampon dans un circuit de chauffage ?",
        answers: ["Réserve eau sanitaire", "Stockage inertie thermique", "Filtre à eau", "Pompe"],
        correct: 1,
        explanation: "Le ballon tampon stocke la chaleur et régule les cycles de la chaudière.",
        keyPoints: ["Inertie thermique", "Stockage chaleur", "Régule cycles", "Économie énergie", "Bois/PAC"]
    },
    {
        id: 'q56',
        category: "Fondamentaux & Sécurité - Systèmes",
        question: "Qu'est-ce qu'un groupe de sécurité chauffe-eau ?",
        answers: ["Alarme", "Sécurité surpression + vidange", "Interrupteur", "Thermostat"],
        correct: 1,
        explanation: "Le groupe de sécurité protège contre la surpression et permet la vidange.",
        keyPoints: ["Soupape 7 bars", "Vidange", "Clapet anti-retour", "Goutte normale", "Obligatoire"]
    },
    {
        id: 'q57',
        category: "Fondamentaux & Sécurité - Systèmes",
        question: "Pourquoi le groupe de sécurité goutte-t-il légèrement ?",
        answers: ["Fuite", "Dilatation eau chauffée (normal)", "Défaut", "Trop de pression"],
        correct: 1,
        explanation: "L'eau se dilate en chauffant, la soupape évacue le surplus (normal).",
        keyPoints: ["Dilatation normale", "Quelques gouttes", "Pas une fuite", "3-5% volume", "Si jet : problème"]
    },
    {
        id: 'q58',
        category: "Fondamentaux & Sécurité - Systèmes",
        question: "Quelle est la capacité d'un chauffe-eau pour 4 personnes ?",
        answers: ["50L", "100L", "200L", "500L"],
        correct: 2,
        explanation: "Pour 4 personnes, on recommande 200L (50L par personne en moyenne).",
        keyPoints: ["50L/personne", "4 pers = 200L", "Usage normal", "Peut varier", "Habitudes"]
    },
    {
        id: 'q59',
        category: "Fondamentaux & Sécurité - Systèmes",
        question: "Quelle est la différence entre production instantanée et accumulation ?",
        answers: ["Aucune", "Instantanée : chauffe à la demande, Accumulation : stocke", "Prix", "Taille"],
        correct: 1,
        explanation: "Instantanée : chauffe l'eau à la demande (débit). Accumulation : stocke eau chaude.",
        keyPoints: ["Instantané : à la demande", "Accumulation : stockage", "Instantané : débit limité", "Accumulation : réserve", "Usage différent"]
    },
    {
        id: 'q60',
        category: "Fondamentaux & Sécurité - Systèmes",
        question: "Qu'est-ce qu'un mitigeur thermostatique ?",
        answers: ["Robinet simple", "Mélange eau chaude/froide à T° fixe", "Vanne électrique", "Filtre"],
        correct: 1,
        explanation: "Le mitigeur thermostatique maintient automatiquement la température choisie.",
        keyPoints: ["Température constante", "Sécurité anti-brûlure", "Réglage précis", "Cartouche cire", "Douche"]
    },

    // ========== STAGE 1 - COMBUSTION & ÉNERGIE (10 questions) ==========
    {
        id: 'q61',
        category: "Fondamentaux & Sécurité - Combustion",
        question: "Quels sont les 3 éléments du triangle du feu ?",
        answers: ["Eau, air, chaleur", "Combustible, comburant, énergie", "Gaz, électricité, ventilation", "Feu, fumée, cendres"],
        correct: 1,
        explanation: "Triangle du feu : combustible (gaz, bois), comburant (O2), énergie d'activation.",
        keyPoints: ["Combustible", "Comburant (O2)", "Énergie activation", "Supprimer 1 = arrêt", "Base extinction"]
    },
    {
        id: 'q62',
        category: "Fondamentaux & Sécurité - Combustion",
        question: "Quel gaz toxique se forme lors d'une combustion incomplète ?",
        answers: ["CO2", "CO (monoxyde de carbone)", "O2", "H2O"],
        correct: 1,
        explanation: "Le CO (monoxyde de carbone) est incolore, inodore et mortel.",
        keyPoints: ["CO mortel", "Incolore", "Inodore", "Combustion incomplète", "Détecteur obligatoire"]
    },
    {
        id: 'q63',
        category: "Fondamentaux & Sécurité - Combustion",
        question: "Quel est le pourcentage d'oxygène dans l'air ?",
        answers: ["10%", "21%", "50%", "78%"],
        correct: 1,
        explanation: "L'air contient 21% d'oxygène, 78% d'azote et 1% d'autres gaz.",
        keyPoints: ["21% O2", "78% N2", "1% autres", "Comburant", "Combustion"]
    },
    {
        id: 'q64',
        category: "Fondamentaux & Sécurité - Combustion",
        question: "Qu'est-ce que le PCI (Pouvoir Calorifique Inférieur) ?",
        answers: ["Prix du combustible", "Énergie libérée sans condensation vapeur", "Température de combustion", "Volume gaz"],
        correct: 1,
        explanation: "Le PCI est l'énergie libérée lors de la combustion, vapeur d'eau non condensée.",
        keyPoints: ["Énergie libérée", "Sans condensation", "kWh/kg ou kWh/m³", "Choix combustible", "< PCS"]
    },
    {
        id: 'q65',
        category: "Fondamentaux & Sécurité - Combustion",
        question: "Qu'est-ce que le PCS (Pouvoir Calorifique Supérieur) ?",
        answers: ["Prix maximum", "Énergie avec récupération chaleur vapeur", "Température max", "Pression max"],
        correct: 1,
        explanation: "Le PCS inclut la chaleur latente de la vapeur d'eau (chaudière condensation).",
        keyPoints: ["Énergie totale", "Avec condensation", "> PCI", "Chaudière condensation", "Meilleur rendement"]
    },
    {
        id: 'q66',
        category: "Fondamentaux & Sécurité - Combustion",
        question: "Quels sont les principaux combustibles utilisés en chauffage ?",
        answers: ["Uniquement gaz", "Gaz, fioul, bois, électricité", "Seulement électricité", "Charbon uniquement"],
        correct: 1,
        explanation: "Gaz naturel/propane, fioul, bois/granulés, électricité sont les plus utilisés.",
        keyPoints: ["Gaz naturel/propane", "Fioul domestique", "Bois/granulés", "Électricité", "Choix selon région"]
    },
    {
        id: 'q67',
        category: "Fondamentaux & Sécurité - Combustion",
        question: "Qu'est-ce qu'une chaudière à condensation ?",
        answers: ["Chaudière ancienne", "Récupère chaleur des fumées", "Chaudière électrique", "Chaudière gaz uniquement"],
        correct: 1,
        explanation: "Elle récupère la chaleur latente de la vapeur d'eau des fumées (rendement >100%).",
        keyPoints: ["Récupère chaleur fumées", "Condensation vapeur", "Rendement > 100%", "Basse température", "Économie 15-20%"]
    },
    {
        id: 'q68',
        category: "Fondamentaux & Sécurité - Combustion",
        question: "Pourquoi dit-on qu'une chaudière condensation a un rendement > 100% ?",
        answers: ["Erreur de mesure", "Référence au PCI, récupère + d'énergie", "Créé de l'énergie", "Calcul faux"],
        correct: 1,
        explanation: "Le rendement est calculé sur le PCI. La condensation récupère l'énergie du PCS.",
        keyPoints: ["Référence PCI", "Récupère PCS", "Pas création énergie", "Convention calcul", "Jusqu'à 110%"]
    },
    {
        id: 'q69',
        category: "Fondamentaux & Sécurité - Combustion",
        question: "Quelle est la température des fumées d'une chaudière condensation ?",
        answers: ["300°C", "150°C", "50°C", "10°C"],
        correct: 2,
        explanation: "Les fumées sortent à environ 50-60°C, condensation de la vapeur d'eau.",
        keyPoints: ["50-60°C", "Basse température", "Condensation possible", "Économie énergie", "Fumées froides"]
    },
    {
        id: 'q70',
        category: "Fondamentaux & Sécurité - Éco-construction",
        question: "Qu'est-ce qu'un matériau biosourcé ?",
        answers: ["Matériau chimique", "Matériau d'origine végétale ou animale", "Matériau recyclé", "Matériau minéral"],
        correct: 1,
        explanation: "Matériau biosourcé : d'origine végétale (bois, chanvre) ou animale (laine).",
        keyPoints: ["Origine vivante", "Végétal ou animal", "Renouvelable", "Carbone stocké", "Écologique"]
    },

    // ========== STAGE 2 - THÉORIE & ÉVACUATION (15 questions) ==========
    {
        id: 'q71',
        category: "Systèmes Thermiques - Évacuation",
        question: "Quel est le rôle d'un siphon ?",
        answers: ["Augmenter pression", "Garde d'eau anti-odeurs", "Filtrer", "Réguler débit"],
        correct: 1,
        explanation: "Le siphon crée une garde d'eau (5 cm min) empêchant les odeurs de remonter.",
        keyPoints: ["Garde d'eau 5 cm", "Anti-odeurs", "Anti-gaz", "Obligatoire", "Types S/P/bouteille"]
    },
    {
        id: 'q72',
        category: "Systèmes Thermiques - Évacuation",
        question: "Qu'est-ce qu'une chute d'eaux usées ?",
        answers: ["Fuite", "Canalisation verticale évacuation", "Robinet", "Pompe"],
        correct: 1,
        explanation: "La chute est une canalisation verticale qui collecte les évacuations des étages.",
        keyPoints: ["Verticale", "Collecte étages", "Diamètre 100mm", "Ventilation primaire", "Évite dépression"]
    },
    {
        id: 'q73',
        category: "Systèmes Thermiques - Évacuation",
        question: "Qu'est-ce que la ventilation primaire ?",
        answers: ["VMC", "Prolongement chute au-dessus toit", "Extracteur", "Fenêtre"],
        correct: 1,
        explanation: "La ventilation primaire prolonge la chute au-dessus du toit pour équilibrer pressions.",
        keyPoints: ["Prolonge chute", "Au-dessus toit", "Équilibre pression", "Évite siphonnage", "Obligatoire"]
    },
    {
        id: 'q74',
        category: "Systèmes Thermiques - Évacuation",
        question: "Qu'est-ce que la ventilation secondaire ?",
        answers: ["VMC", "Tuyau équilibrant pression siphons éloignés", "Aération naturelle", "Climatisation"],
        correct: 1,
        explanation: "La ventilation secondaire relie les siphons éloignés à la chute pour éviter le siphonnage.",
        keyPoints: ["Siphons éloignés", "Équilibre pression", "Évite dépression", "Ø32-40mm", "Facultative si proche"]
    },
    {
        id: 'q75',
        category: "Systèmes Thermiques - Évacuation",
        question: "Quelle est la pente d'une évacuation horizontale ?",
        answers: ["0 cm/m", "1 cm/m", "5 cm/m", "10 cm/m"],
        correct: 1,
        explanation: "Pente minimale : 1 cm/m (1%) pour assurer écoulement gravitaire.",
        keyPoints: ["1 cm/m minimum", "1%", "Gravitaire", "Auto-curage", "Pas de contre-pente"]
    },
    {
        id: 'q76',
        category: "Systèmes Thermiques - Évacuation",
        question: "Pourquoi ne doit-on pas mettre d'angle à 90° sur une évacuation ?",
        answers: ["Esthétique", "Risque bouchons et turbulences", "Plus cher", "Pas de raison"],
        correct: 1,
        explanation: "Les angles à 90° créent des turbulences et favorisent les bouchons.",
        keyPoints: ["Éviter 90°", "Turbulences", "Bouchons", "Préférer 2×45°", "Écoulement fluide"]
    },
    {
        id: 'q77',
        category: "Systèmes Thermiques - Évacuation",
        question: "Qu'est-ce qu'un séparateur de graisses ?",
        answers: ["Filtre eau", "Dispositif séparant graisses eaux usées", "Pompe", "Siphon"],
        correct: 1,
        explanation: "Le séparateur retient les graisses avant évacuation (cuisine professionnelle).",
        keyPoints: ["Retient graisses", "Cuisine pro", "Évite bouchons", "Nettoyage régulier", "Obligatoire restaurant"]
    },
    {
        id: 'q78',
        category: "Systèmes Thermiques - Évacuation",
        question: "Qu'est-ce qu'un regard de visite ?",
        answers: ["Fenêtre", "Accès canalisation pour entretien", "Siphon", "Vanne"],
        correct: 1,
        explanation: "Le regard permet l'accès aux canalisations enterrées pour inspection/débouchage.",
        keyPoints: ["Accès canalisation", "Inspection", "Débouchage", "Tampon", "Tous les 10-15m"]
    },
    {
        id: 'q79',
        category: "Systèmes Thermiques - Évacuation",
        question: "Quelle est la différence entre eaux vannes (EV) et eaux usées (EU) ?",
        answers: ["Aucune", "EV : WC, EU : lavabo/douche", "EV : chaudes, EU : froides", "EV : propres, EU : sales"],
        correct: 1,
        explanation: "EV = eaux vannes (WC), EU = eaux usées (lavabo, douche). EV+EU = eaux usées totales.",
        keyPoints: ["EV = WC", "EU = lavabo/douche", "Réseaux séparés/unitaires", "Traitement différent", "Collecte"]
    },
    {
        id: 'q80',
        category: "Systèmes Thermiques - Évacuation",
        question: "Qu'est-ce qu'un avaloir ?",
        answers: ["Robinet", "Grille collectant eaux pluviales", "Siphon", "Tuyau"],
        correct: 1,
        explanation: "L'avaloir (grille rue) collecte les eaux pluviales vers le réseau d'évacuation.",
        keyPoints: ["Grille rue", "Eaux pluviales", "Collecte surface", "Panier dégrilleur", "Nettoyage régulier"]
    },
    {
        id: 'q81',
        category: "Systèmes Thermiques - Émetteurs",
        question: "Quels sont les principaux types d'émetteurs de chaleur ?",
        answers: ["Chaudières, PAC", "Radiateurs, planchers chauffants, convecteurs", "Tuyaux, vannes", "Thermostats, sondes"],
        correct: 1,
        explanation: "Les émetteurs diffusent la chaleur : radiateurs, planchers chauffants, convecteurs.",
        keyPoints: ["Radiateurs", "Planchers chauffants", "Convecteurs", "Ventilo-convecteurs", "Diffusion chaleur"]
    },
    {
        id: 'q82',
        category: "Systèmes Thermiques - Émetteurs",
        question: "Quelle est la température de régime d'un plancher chauffant ?",
        answers: ["90/70°C", "75/65°C", "35/30°C", "20/15°C"],
        correct: 2,
        explanation: "Le plancher chauffant fonctionne en basse température : 35/30°C (départ/retour).",
        keyPoints: ["Basse température", "35/30°C", "Confort optimal", "Économie énergie", "Compatible condensation"]
    },
    {
        id: 'q83',
        category: "Systèmes Thermiques - Émetteurs",
        question: "Quelle est la température maximale au sol d'un plancher chauffant ?",
        answers: ["20°C", "28°C", "35°C", "40°C"],
        correct: 1,
        explanation: "Le DTU limite la température au sol à 28°C pour le confort (circulation pieds nus).",
        keyPoints: ["28°C max", "Confort", "Réglementation", "Zones 19-24°C", "Limite DTU"]
    },
    {
        id: 'q84',
        category: "Systèmes Thermiques - Émetteurs",
        question: "Quel est l'avantage d'un radiateur basse température ?",
        answers: ["Moins cher", "Compatible chaudière condensation", "Plus petit", "Plus léger"],
        correct: 1,
        explanation: "Les radiateurs BT (50/40°C) optimisent le rendement des chaudières condensation.",
        keyPoints: ["50/40°C", "Rendement optimal", "Condensation efficace", "Économie", "Surface + grande"]
    },
    {
        id: 'q85',
        category: "Systèmes Thermiques - Dimensionnement",
        question: "Comment dimensionne-t-on un réseau sanitaire ?",
        answers: ["Au hasard", "Selon débit simultané et perte de charge", "Toujours Ø20", "À l'œil"],
        correct: 1,
        explanation: "On calcule le débit simultané (coefficient K) et les pertes de charge pour choisir le diamètre.",
        keyPoints: ["Débit simultané", "Coefficient K", "Pertes charge", "Vitesse < 2 m/s", "Tableaux DTU"]
    },

    // ========== STAGE 2 - SÉCURITÉ & MESURE (10 questions) ==========
    {
        id: 'q86',
        category: "Systèmes Thermiques - Sécurité",
        question: "Qu'est-ce qu'un disconnecteur ?",
        answers: ["Interrupteur", "Anti-retour protégeant eau potable", "Outil", "Ventilation"],
        correct: 1,
        explanation: "Le disconnecteur empêche le retour d'eau polluée vers le réseau d'eau potable.",
        keyPoints: ["Anti-retour", "Protection réseau", "BA/CA/EA", "Contrôle annuel", "Obligatoire"]
    },
    {
        id: 'q87',
        category: "Systèmes Thermiques - Sécurité",
        question: "Quels sont les types de disconnecteurs selon le risque ?",
        answers: ["BA, CA, EA", "Type 1, 2, 3", "A, B, C", "Rouge, jaune, vert"],
        correct: 0,
        explanation: "BA (risque faible), CA (risque moyen), EA (risque élevé).",
        keyPoints: ["BA : faible", "CA : moyen", "EA : élevé", "Fluide A/B/C/D", "Choix selon usage"]
    },
    {
        id: 'q88',
        category: "Systèmes Thermiques - Sécurité",
        question: "Qu'est-ce qu'un clapet anti-retour ?",
        answers: ["Vanne manuelle", "Dispositif empêchant retour d'eau", "Filtre", "Pompe"],
        correct: 1,
        explanation: "Le clapet ne laisse passer l'eau que dans un sens (gravité ou ressort).",
        keyPoints: ["Un seul sens", "Ressort ou gravité", "Position horizontale", "Pas de maintenance", "Simple"]
    },
    {
        id: 'q89',
        category: "Systèmes Thermiques - Sécurité",
        question: "Qu'est-ce qu'une soupape de sécurité ?",
        answers: ["Thermostat", "Sécurité surpression (7 bars)", "Pompe", "Filtre"],
        correct: 1,
        explanation: "La soupape s'ouvre à 7 bars pour éviter l'éclatement du ballon.",
        keyPoints: ["7 bars", "Surpression", "Groupe sécurité", "Obligatoire", "Test régulier"]
    },
    {
        id: 'q90',
        category: "Systèmes Thermiques - Sécurité",
        question: "Qu'est-ce qu'une soupape thermique ?",
        answers: ["Thermostat", "Sécurité surchauffe (100-110°C)", "Vanne", "Capteur"],
        correct: 1,
        explanation: "La soupape thermique s'ouvre si température > 95-110°C (risque ébullition).",
        keyPoints: ["95-110°C", "Surchauffe", "Ébullition", "Vidange ballon", "Sécurité"]
    },
    {
        id: 'q91',
        category: "Systèmes Thermiques - Mesure",
        question: "À quoi sert un manomètre ?",
        answers: ["Mesurer température", "Mesurer pression", "Mesurer débit", "Mesurer niveau"],
        correct: 1,
        explanation: "Le manomètre mesure la pression en bars ou kPa.",
        keyPoints: ["Pression", "Bars ou kPa", "1-2 bars normal", "Chauffage", "Contrôle"]
    },
    {
        id: 'q92',
        category: "Systèmes Thermiques - Mesure",
        question: "À quoi sert un thermomètre ?",
        answers: ["Mesurer pression", "Mesurer température", "Mesurer débit", "Mesurer pH"],
        correct: 1,
        explanation: "Le thermomètre mesure la température en °C (aller/retour chauffage).",
        keyPoints: ["Température", "°C", "Aller/retour", "Contrôle", "Régulation"]
    },
    {
        id: 'q93',
        category: "Systèmes Thermiques - Mesure",
        question: "Qu'est-ce qu'un débitmètre ?",
        answers: ["Mesure pression", "Mesure débit d'eau", "Mesure température", "Mesure pH"],
        correct: 1,
        explanation: "Le débitmètre mesure le débit d'eau en L/h ou m³/h.",
        keyPoints: ["Débit", "L/h ou m³/h", "Eau ou gaz", "Comptage", "Régulation"]
    },
    {
        id: 'q94',
        category: "Systèmes Thermiques - Sécurité",
        question: "Qu'est-ce qu'un purgeur automatique ?",
        answers: ["Vanne manuelle", "Purge air automatiquement", "Pompe", "Filtre"],
        correct: 1,
        explanation: "Le purgeur automatique évacue l'air du circuit sans intervention.",
        keyPoints: ["Purge auto", "Évacue air", "Flotteur", "Points hauts", "Entretien minimal"]
    },
    {
        id: 'q95',
        category: "Systèmes Thermiques - Sécurité",
        question: "Où place-t-on les purgeurs automatiques ?",
        answers: ["Points bas", "Points hauts du circuit", "N'importe où", "Sur chaudière uniquement"],
        correct: 1,
        explanation: "Les purgeurs se placent aux points hauts où l'air s'accumule naturellement.",
        keyPoints: ["Points hauts", "Accumulation air", "Collecteurs", "Radiateurs", "Plusieurs points"]
    },

    // ========== STAGE 3 - GAZ (15 questions) ==========
    {
        id: 'q96',
        category: "Systèmes Avancés - Gaz",
        question: "Quelle ventilation est obligatoire pour une installation gaz ?",
        answers: ["Aucune", "Haute et basse", "Uniquement haute", "Uniquement basse"],
        correct: 1,
        explanation: "Ventilation basse (air comburant) et haute (évacuation CO2) obligatoires.",
        keyPoints: ["Basse : air", "Haute : évacuation", "Section selon puissance", "Non obstruable", "Contrôle annuel"]
    },
    {
        id: 'q97',
        category: "Systèmes Avancés - Gaz",
        question: "Quelle est la pression d'un réseau gaz naturel en ville ?",
        answers: ["20 mbar", "300 mbar", "4 bar", "10 bar"],
        correct: 0,
        explanation: "Le gaz naturel est distribué à 20 mbar (ou 300 mbar selon réseau).",
        keyPoints: ["20 mbar (BP)", "300 mbar (MP)", "Détendeur", "Compteur", "Distribution"]
    },
    {
        id: 'q98',
        category: "Systèmes Avancés - Gaz",
        question: "Comment teste-t-on l'étanchéité d'une installation gaz ?",
        answers: ["Visuellement", "Test pression 150 mbar pendant 5 min", "Eau savonneuse seulement", "Pas nécessaire"],
        correct: 1,
        explanation: "Test à 150 mbar pendant 5 minutes minimum, pression ne doit pas chuter.",
        keyPoints: ["150 mbar", "5 min minimum", "Pas de chute", "Manomètre", "Certificat"]
    },
    {
        id: 'q99',
        category: "Systèmes Avancés - Gaz",
        question: "Qu'est-ce qu'un détendeur gaz ?",
        answers: ["Pompe", "Réduit pression bouteille vers pression d'usage", "Vanne", "Filtre"],
        correct: 1,
        explanation: "Le détendeur réduit la pression de la bouteille (propane 37 mbar, butane 28 mbar).",
        keyPoints: ["Réduit pression", "Propane 37 mbar", "Butane 28 mbar", "Sécurité", "Obligatoire"]
    },
    {
        id: 'q100',
        category: "Systèmes Avancés - Gaz",
        question: "Quelle est la différence entre butane et propane ?",
        answers: ["Couleur", "Température d'évaporation", "Goût", "Aucune"],
        correct: 1,
        explanation: "Butane : > 0°C (intérieur). Propane : > -44°C (extérieur).",
        keyPoints: ["Butane > 0°C", "Propane > -44°C", "Butane intérieur", "Propane extérieur", "Pression différente"]
    },
    {
        id: 'q101',
        category: "Systèmes Avancés - Gaz",
        question: "Qu'est-ce qu'un robinet de barrage gaz ?",
        answers: ["Robinet cuisine", "Vanne coupure totale installation", "Détendeur", "Filtre"],
        correct: 1,
        explanation: "Le robinet de barrage (1/4 tour) coupe l'alimentation générale en gaz.",
        keyPoints: ["Coupure générale", "1/4 de tour", "Obligatoire", "Accessible", "Signalisation"]
    },
    {
        id: 'q102',
        category: "Systèmes Avancés - Gaz",
        question: "Qu'est-ce qu'un coupe-tirage sur un appareil gaz ?",
        answers: ["Vanne", "Ouverture admettant air dilution fumées", "Filtre", "Thermostat"],
        correct: 1,
        explanation: "Le coupe-tirage empêche le refoulement et dilue les fumées en cas de refoulement.",
        keyPoints: ["Dilution fumées", "Anti-refoulement", "Entrée air", "Obligatoire", "Type B"]
    },
    {
        id: 'q103',
        category: "Systèmes Avancés - Gaz",
        question: "Qu'est-ce qu'un appareil de type B (gaz) ?",
        answers: ["Étanche", "Non étanche, prélève air pièce", "Électrique", "Solaire"],
        correct: 1,
        explanation: "Type B : non étanche, prélève air dans la pièce, évacuation naturelle/forcée.",
        keyPoints: ["Non étanche", "Air pièce", "Ventilation obligatoire", "Évacuation", "Coupe-tirage"]
    },
    {
        id: 'q104',
        category: "Systèmes Avancés - Gaz",
        question: "Qu'est-ce qu'un appareil de type C (gaz) ?",
        answers: ["Non étanche", "Étanche, circuit fermé air/fumées", "Ouvert", "Sans évacuation"],
        correct: 1,
        explanation: "Type C : étanche, circuit fermé (concentriqueventouse), pas de ventilation pièce.",
        keyPoints: ["Étanche", "Circuit fermé", "Ventouse", "Pas ventilation pièce", "Sécurité"]
    },
    {
        id: 'q105',
        category: "Systèmes Avancés - Gaz",
        question: "Qu'est-ce qu'une ventouse (gaz) ?",
        answers: ["Outil", "Conduit concentrique étanche (air/fumées)", "Vanne", "Siphon"],
        correct: 1,
        explanation: "La ventouse est un conduit concentrique : air frais dans anneau, fumées au centre.",
        keyPoints: ["Concentrique", "Air + fumées", "Étanche", "Horizontal/vertical", "Type C"]
    },
    {
        id: 'q106',
        category: "Systèmes Avancés - Gaz",
        question: "Quelle est la couleur réglementaire des tuyaux gaz apparents ?",
        answers: ["Rouge", "Jaune", "Bleu", "Noir"],
        correct: 1,
        explanation: "Les tuyaux gaz apparents doivent être de couleur jaune réglementaire.",
        keyPoints: ["Jaune", "Réglementaire", "Visible", "Repérage", "Sécurité"]
    },
    {
        id: 'q107',
        category: "Systèmes Avancés - Gaz",
        question: "Qu'est-ce que le GN (Gaz Naturel) ?",
        answers: ["Gaz en bouteille", "Méthane distribué par réseau", "Propane", "Butane"],
        correct: 1,
        explanation: "GN = méthane distribué par réseau de ville, plus léger que l'air.",
        keyPoints: ["Méthane", "Réseau ville", "Plus léger air", "20 mbar", "Compteur"]
    },
    {
        id: 'q108',
        category: "Systèmes Avancés - Gaz",
        question: "Le gaz naturel est-il plus lourd ou plus léger que l'air ?",
        answers: ["Plus lourd", "Plus léger", "Même densité", "Dépend de la température"],
        correct: 1,
        explanation: "Le gaz naturel (méthane) est plus léger que l'air, monte en cas de fuite.",
        keyPoints: ["Plus léger", "Monte", "Ventilation haute", "Détecteur haut", "Méthane"]
    },
    {
        id: 'q109',
        category: "Systèmes Avancés - Gaz",
        question: "Le propane et le butane sont-ils plus lourds ou plus légers que l'air ?",
        answers: ["Plus légers", "Plus lourds", "Même densité", "Variable"],
        correct: 1,
        explanation: "Propane et butane sont plus lourds, stagnent au sol en cas de fuite.",
        keyPoints: ["Plus lourds", "Stagnent sol", "Ventilation basse", "Détecteur bas", "Danger"]
    },
    {
        id: 'q110',
        category: "Systèmes Avancés - Gaz",
        question: "Que faire en cas de fuite de gaz détectée ?",
        answers: ["Allumer lumière", "Ne pas toucher électricité, aérer, couper, évacuer, appeler", "Fumer dehors", "Ignorer"],
        correct: 1,
        explanation: "1. Ne pas toucher électricité. 2. Aérer. 3. Couper gaz. 4. Évacuer. 5. Appeler pompiers.",
        keyPoints: ["Pas d'électricité", "Aérer", "Couper", "Évacuer", "Appeler 18"]
    },

    // ========== STAGE 3 - SOLAIRE (10 questions) ==========
    {
        id: 'q111',
        category: "Systèmes Avancés - Solaire",
        question: "Que signifie CESI ?",
        answers: ["Centrale Électrique Solaire", "Chauffe-Eau Solaire Individuel", "Circuit Énergie Solaire", "Capteur Électrique"],
        correct: 1,
        explanation: "CESI = Chauffe-Eau Solaire Individuel pour production d'eau chaude sanitaire.",
        keyPoints: ["ECS solaire", "Individuel", "Capteurs + ballon", "Économie 50-70%", "Appoint"]
    },
    {
        id: 'q112',
        category: "Systèmes Avancés - Solaire",
        question: "Quel fluide circule dans les capteurs solaires thermiques ?",
        answers: ["Eau pure", "Eau + glycol", "Huile", "Air"],
        correct: 1,
        explanation: "Mélange eau + glycol (30-40%) résiste au gel et à la surchauffe.",
        keyPoints: ["Eau + glycol", "30-40%", "Anti-gel", "Anti-surchauffe", "Circuit primaire"]
    },
    {
        id: 'q113',
        category: "Systèmes Avancés - Solaire",
        question: "Quelle est la surface de capteurs pour 4 personnes ?",
        answers: ["1 m²", "3-5 m²", "10 m²", "20 m²"],
        correct: 1,
        explanation: "Pour 4 personnes, 3 à 5 m² de capteurs suffisent (selon région).",
        keyPoints: ["3-5 m²", "4 personnes", "Selon région", "Ballon 200-300L", "Ensoleillement"]
    },
    {
        id: 'q114',
        category: "Systèmes Avancés - Solaire",
        question: "Quel est le taux de couverture moyen d'un CESI en France ?",
        answers: ["20-30%", "50-70%", "90-100%", "10%"],
        correct: 1,
        explanation: "Un CESI couvre 50 à 70% des besoins annuels en ECS (appoint nécessaire).",
        keyPoints: ["50-70%", "Annuel", "Appoint obligatoire", "Hiver faible", "Été fort"]
    },
    {
        id: 'q115',
        category: "Systèmes Avancés - Solaire",
        question: "Pourquoi un appoint est-il nécessaire sur un CESI ?",
        answers: ["Pas nécessaire", "Soleil insuffisant en hiver", "Pour le prix", "Réglementation"],
        correct: 1,
        explanation: "L'ensoleillement est insuffisant en hiver et par mauvais temps (appoint chaudière/électrique).",
        keyPoints: ["Ensoleillement variable", "Hiver", "Mauvais temps", "Chaudière ou électrique", "Sécurité"]
    },
    {
        id: 'q116',
        category: "Systèmes Avancés - Solaire",
        question: "Quelle est l'orientation idéale des capteurs solaires ?",
        answers: ["Nord", "Sud", "Est", "Ouest"],
        correct: 1,
        explanation: "Orientation plein Sud (±30°) et inclinaison 45° (selon latitude).",
        keyPoints: ["Plein Sud", "±30° OK", "Inclinaison 45°", "Selon latitude", "Optimisation"]
    },
    {
        id: 'q117',
        category: "Systèmes Avancés - Solaire",
        question: "Qu'est-ce qu'un ballon solaire double échangeur ?",
        answers: ["Deux ballons", "Un ballon avec échangeur solaire + appoint", "Ballon électrique", "Pompe"],
        correct: 1,
        explanation: "Échangeur bas (solaire) + échangeur haut (appoint chaudière).",
        keyPoints: ["2 échangeurs", "Bas : solaire", "Haut : appoint", "Stratification", "Optimisation"]
    },
    {
        id: 'q118',
        category: "Systèmes Avancés - Solaire",
        question: "Qu'est-ce que la stagnation d'une installation solaire ?",
        answers: ["Arrêt circulation", "Surchauffe capteurs sans soutirage", "Gel", "Fuite"],
        correct: 1,
        explanation: "En été sans soutirage, le fluide peut atteindre 150-200°C (vapeur).",
        keyPoints: ["Surchauffe", "Été", "Pas de soutirage", "150-200°C", "Protection nécessaire"]
    },
    {
        id: 'q119',
        category: "Systèmes Avancés - Solaire",
        question: "Qu'est-ce qu'un SSC (Système Solaire Combiné) ?",
        answers: ["CESI simple", "Solaire pour ECS + chauffage", "Photovoltaïque", "Éolienne"],
        correct: 1,
        explanation: "SSC produit à la fois l'ECS et participe au chauffage de l'habitation.",
        keyPoints: ["ECS + chauffage", "Plus de capteurs", "10-15 m²", "Ballon tampon", "Appoint obligatoire"]
    },
    {
        id: 'q120',
        category: "Systèmes Avancés - Solaire",
        question: "Quelle différence entre solaire thermique et photovoltaïque ?",
        answers: ["Aucune", "Thermique : chaleur, Photovoltaïque : électricité", "Couleur", "Prix"],
        correct: 1,
        explanation: "Thermique : produit chaleur (ECS/chauffage). Photovoltaïque : produit électricité.",
        keyPoints: ["Thermique : chaleur", "Photovoltaïque : électricité", "Capteurs différents", "Usages différents", "Complémentaires"]
    },

    // ========== STAGE 3 - VENTILATION (15 questions) ==========
    {
        id: 'q121',
        category: "Systèmes Avancés - VMC",
        question: "Que signifie VMC ?",
        answers: ["Ventilation Murale", "Ventilation Mécanique Contrôlée", "Ventilateur Moteur", "Volume Minimal"],
        correct: 1,
        explanation: "VMC = Ventilation Mécanique Contrôlée, renouvelle l'air en continu.",
        keyPoints: ["Renouvellement air", "Mécanique", "Contrôlée", "Extracteur", "Entrées d'air"]
    },
    {
        id: 'q122',
        category: "Systèmes Avancés - VMC",
        question: "Différence entre VMC simple flux et double flux ?",
        answers: ["Aucune", "Simple : extraction, Double : extraction + insufflation", "Prix", "Couleur"],
        correct: 1,
        explanation: "Simple flux : extraction seule. Double flux : extraction + insufflation avec échangeur.",
        keyPoints: ["Simple : extraction", "Double : extraction + insufflation", "Échangeur thermique", "Économie 15-20%", "Plus cher"]
    },
    {
        id: 'q123',
        category: "Systèmes Avancés - VMC",
        question: "Où extrait-on l'air vicié avec une VMC ?",
        answers: ["Chambres", "Cuisine, SDB, WC", "Salon", "Toutes pièces"],
        correct: 1,
        explanation: "Extraction dans les pièces humides : cuisine, salle de bain, WC.",
        keyPoints: ["Pièces humides", "Cuisine", "SDB", "WC", "Buanderie"]
    },
    {
        id: 'q124',
        category: "Systèmes Avancés - VMC",
        question: "Où place-t-on les entrées d'air avec une VMC ?",
        answers: ["Cuisine", "Pièces principales (salon, chambres)", "SDB", "Toutes pièces"],
        correct: 1,
        explanation: "Entrées d'air dans les pièces principales (chambres, salon), air circule sous portes.",
        keyPoints: ["Pièces principales", "Chambres", "Salon", "Fenêtres/coffres volets", "Détalonnage portes"]
    },
    {
        id: 'q125',
        category: "Systèmes Avancés - VMC",
        question: "Qu'est-ce que le détalonnage des portes ?",
        answers: ["Décoration", "Espace sous porte pour circulation air", "Serrure", "Peinture"],
        correct: 1,
        explanation: "Espace de 1-2 cm sous les portes pour permettre la circulation de l'air.",
        keyPoints: ["Espace sous porte", "1-2 cm", "Circulation air", "Obligatoire", "Entre pièces"]
    },
    {
        id: 'q126',
        category: "Systèmes Avancés - VMC",
        question: "Pourquoi entretenir une VMC régulièrement ?",
        answers: ["Pas nécessaire", "Filtres encrassés réduisent débit et consomment plus", "Esthétique", "Réglementation uniquement"],
        correct: 1,
        explanation: "L'encrassement réduit le débit, augmente la consommation et dégrade la qualité d'air.",
        keyPoints: ["Nettoyage filtres", "Bouches extraction", "Entrées d'air", "6 mois à 1 an", "Débit optimal"]
    },
    {
        id: 'q127',
        category: "Systèmes Avancés - VMC",
        question: "Qu'est-ce qu'une VMC hygroréglable ?",
        answers: ["VMC à piles", "Débit adapté selon humidité", "VMC silencieuse", "VMC colorée"],
        correct: 1,
        explanation: "La VMC hygroréglable adapte le débit selon l'humidité détectée (économie d'énergie).",
        keyPoints: ["Adapte débit", "Selon humidité", "Économie énergie", "Confort", "Type A ou B"]
    },
    {
        id: 'q128',
        category: "Systèmes Avancés - VMC",
        question: "Quelle est la durée de vie moyenne d'une VMC ?",
        answers: ["5 ans", "10-15 ans", "30 ans", "50 ans"],
        correct: 1,
        explanation: "Une VMC bien entretenue dure 10 à 15 ans (moteur et composants).",
        keyPoints: ["10-15 ans", "Entretien régulier", "Remplacement moteur", "Usure normale", "Maintenance"]
    },
    {
        id: 'q129',
        category: "Systèmes Avancés - VMC",
        question: "Pourquoi une VMC double flux est-elle plus économe ?",
        answers: ["Elle consomme moins", "Échangeur récupère calories air extrait", "Elle est plus petite", "Moins de gaines"],
        correct: 1,
        explanation: "L'échangeur thermique récupère 70-90% des calories de l'air extrait.",
        keyPoints: ["Échangeur thermique", "Récupère 70-90%", "Préchauffage air neuf", "Économie 15-20%", "Filtration"]
    },
    {
        id: 'q130',
        category: "Systèmes Avancés - Ventilation",
        question: "Qu'est-ce qu'un diagramme psychrométrique ?",
        answers: ["Schéma électrique", "Graphique propriétés air humide", "Plan bâtiment", "Outil calcul débit"],
        correct: 1,
        explanation: "Diagramme représentant température, humidité, enthalpie de l'air.",
        keyPoints: ["Propriétés air", "Température", "Humidité", "Enthalpie", "Point rosée"]
    },
    {
        id: 'q131',
        category: "Systèmes Avancés - Ventilation",
        question: "Qu'est-ce que l'humidité relative ?",
        answers: ["Quantité d'eau", "Rapport humidité actuelle / humidité max (%)", "Température", "Pression"],
        correct: 1,
        explanation: "HR = (humidité actuelle / humidité maximale possible) × 100. Confort : 40-60%.",
        keyPoints: ["En %", "Actuelle / max", "Confort 40-60%", "Variable selon T°", "Condensation > 100%"]
    },
    {
        id: 'q132',
        category: "Systèmes Avancés - Ventilation",
        question: "Qu'est-ce que le point de rosée ?",
        answers: ["Température extérieure", "Température où vapeur condense", "Pression atmosphérique", "Humidité maximale"],
        correct: 1,
        explanation: "Température à laquelle la vapeur d'eau condense (HR = 100%).",
        keyPoints: ["Condensation", "HR 100%", "Selon humidité", "Ponts thermiques", "Moisissures"]
    },
    {
        id: 'q133',
        category: "Systèmes Avancés - Ventilation",
        question: "Pourquoi ventiler un logement ?",
        answers: ["Pour le bruit", "Évacuer humidité, CO2, polluants", "Chauffer", "Décoration"],
        correct: 1,
        explanation: "Ventiler évacue humidité, CO2, polluants (COV, radon) et apporte air frais.",
        keyPoints: ["Évacue humidité", "Évacue CO2", "Évacue polluants", "Air neuf", "Santé"]
    },
    {
        id: 'q134',
        category: "Systèmes Avancés - Ventilation",
        question: "Quel est le débit minimal de ventilation par occupant ?",
        answers: ["5 m³/h", "15 m³/h", "30 m³/h", "50 m³/h"],
        correct: 2,
        explanation: "Débit minimal réglementaire : 30 m³/h par occupant (réglementation).",
        keyPoints: ["30 m³/h", "Par occupant", "Minimum", "Réglementation", "Santé"]
    },
    {
        id: 'q135',
        category: "Systèmes Avancés - Ventilation",
        question: "Qu'est-ce qu'une ventilation naturelle assistée ?",
        answers: ["VMC", "Tirage naturel + extraction mécanique ponctuellement", "Fenêtre", "Climatisation"],
        correct: 1,
        explanation: "Tirage naturel (conduits) assisté par extraction mécanique si besoin.",
        keyPoints: ["Tirage naturel", "Assistance mécanique", "Ponctuelle", "Économique", "Conduits"]
    },

    // ========== STAGE 3 - PROTECTION & TRAITEMENT (5 questions) ==========
    {
        id: 'q136',
        category: "Systèmes Avancés - Protection",
        question: "Pourquoi traiter l'eau d'un circuit de chauffage ?",
        answers: ["Goût", "Éviter tartre, corrosion, boues", "Augmenter pression", "Réduire consommation"],
        correct: 1,
        explanation: "Traitement évite tartre (calcaire), corrosion (métaux) et boues (oxydes).",
        keyPoints: ["Tartre", "Corrosion", "Boues", "Durée de vie", "Performance"]
    },
    {
        id: 'q137',
        category: "Systèmes Avancés - Protection",
        question: "Qu'est-ce qu'un inhibiteur de corrosion ?",
        answers: ["Acide", "Produit chimique protégeant métaux", "Filtre", "Pompe"],
        correct: 1,
        explanation: "L'inhibiteur crée un film protecteur sur les métaux du circuit.",
        keyPoints: ["Protection métaux", "Film protecteur", "Dosage précis", "Contrôle pH", "Longévité installation"]
    },
    {
        id: 'q138',
        category: "Systèmes Avancés - Protection",
        question: "Qu'est-ce qu'un pot à boues (bouteille de décantation) ?",
        answers: ["Filtre café", "Collecteur boues et impuretés par décantation", "Réservoir", "Pompe"],
        correct: 1,
        explanation: "Le pot à boues collecte les particules en suspension par gravité (ralentissement).",
        keyPoints: ["Collecte boues", "Décantation", "Sur retour chaudière", "Nettoyage régulier", "Protection chaudière"]
    },
    {
        id: 'q139',
        category: "Systèmes Avancés - Protection",
        question: "Qu'est-ce qu'un filtre désemboueur magnétique ?",
        answers: ["Filtre eau potable", "Filtre + aimant captant particules fer", "Filtre café", "Adoucisseur"],
        correct: 1,
        explanation: "Filtre + aimant puissant captant les particules ferreuses (magnétite).",
        keyPoints: ["Filtre + aimant", "Particules fer", "Magnétite", "Nettoyage facile", "Protection optimale"]
    },
    {
        id: 'q140',
        category: "Systèmes Avancés - Protection",
        question: "Quelle est la bonne qualité d'eau pour un circuit de chauffage ?",
        answers: ["Eau dure", "Eau adoucie TH 10-15°f, pH 7-8", "Eau distillée", "Eau de pluie"],
        correct: 1,
        explanation: "TH 10-15°f (légèrement adoucie), pH 7-8 (neutre), pas trop douce (corrosion).",
        keyPoints: ["TH 10-15°f", "pH 7-8", "Pas trop douce", "Inhibiteur", "Contrôle régulier"]
    },

    // ========== STAGE 4 - CHAUFFAGE & CIRCUITS (20 questions) ==========
    {
        id: 'q141',
        category: "Chauffage - Chauffage",
        question: "Qu'est-ce qu'un circuit monotube ?",
        answers: ["Un radiateur", "Radiateurs en série sur même tuyau", "Un tuyau cuivre", "Une chaudière"],
        correct: 1,
        explanation: "Circuit monotube : radiateurs en série, dernier moins chaud (ancien système).",
        keyPoints: ["Série", "Un tuyau", "Dernier froid", "Ancien", "Difficile équilibrer"]
    },
    {
        id: 'q142',
        category: "Chauffage - Chauffage",
        question: "Qu'est-ce qu'un circuit bitube ?",
        answers: ["Deux chaudières", "Aller + retour, radiateurs en parallèle", "Deux étages", "Deux pompes"],
        correct: 1,
        explanation: "Circuit bitube : aller et retour, radiateurs en parallèle (température homogène).",
        keyPoints: ["Parallèle", "Aller + retour", "Température égale", "Actuel", "Facile équilibrer"]
    },
    {
        id: 'q143',
        category: "Chauffage - Chauffage",
        question: "Quel est le rôle d'un vase d'expansion ?",
        answers: ["Augmenter pression", "Absorber dilatation eau", "Filtrer", "Stocker ECS"],
        correct: 1,
        explanation: "Le vase absorbe la dilatation de l'eau (8-10% volume) lors du chauffage.",
        keyPoints: ["Absorbe dilatation", "8-10% volume", "Membrane", "Pré-gonflage 0.5-1 bar", "Protection circuit"]
    },
    {
        id: 'q144',
        category: "Chauffage - Chauffage",
        question: "Quelle est la pression normale d'un circuit de chauffage à froid ?",
        answers: ["0,5 bar", "1-1,5 bar", "3 bars", "5 bars"],
        correct: 1,
        explanation: "Pression à froid : 1 à 1,5 bar (varie selon hauteur bâtiment).",
        keyPoints: ["1-1,5 bar", "À froid", "Selon hauteur", "1 bar = 10m H2O", "Contrôle régulier"]
    },
    {
        id: 'q145',
        category: "Chauffage - Chauffage",
        question: "Quelle est la pression normale d'un circuit de chauffage à chaud ?",
        answers: ["1 bar", "2-2,5 bars", "5 bars", "10 bars"],
        correct: 1,
        explanation: "Pression à chaud : 2 à 2,5 bars (dilatation de l'eau).",
        keyPoints: ["2-2,5 bars", "À chaud", "Dilatation", "Normal", "Si > 3 : vérifier vase"]
    },
    {
        id: 'q146',
        category: "Chauffage - Chauffage",
        question: "Comment purger un radiateur ?",
        answers: ["Ouvrir robinet", "Purgeur en haut, réservoir dessous, ouvrir jusqu'à eau", "Vidanger tout", "Démonter"],
        correct: 1,
        explanation: "Purgeur en haut du radiateur, ouvrir avec clé jusqu'à ce que l'eau coule (air sorti).",
        keyPoints: ["Purgeur haut", "Clé de purge", "Jusqu'à eau", "Récipient", "Vérifier pression après"]
    },
    {
        id: 'q147',
        category: "Chauffage - Chauffage",
        question: "Pourquoi purger les radiateurs ?",
        answers: ["Augmenter poids", "Éliminer air qui bloque circulation", "Changer eau", "Nettoyer extérieur"],
        correct: 1,
        explanation: "L'air empêche la circulation d'eau et crée des zones froides dans le radiateur.",
        keyPoints: ["Éliminer air", "Zones froides", "Améliore circulation", "Annuel", "Début saison"]
    },
    {
        id: 'q148',
        category: "Chauffage - Chauffage",
        question: "Qu'est-ce qu'un collecteur en chauffage ?",
        answers: ["Outil", "Distributeur alimentant plusieurs circuits", "Vanne", "Radiateur"],
        correct: 1,
        explanation: "Le collecteur distribue l'eau de départ vers plusieurs circuits (étages, zones).",
        keyPoints: ["Distribution", "Plusieurs circuits", "Aller + retour", "Équilibrage", "Débitmètres"]
    },
    {
        id: 'q149',
        category: "Chauffage - Chauffage",
        question: "Qu'est-ce qu'une vanne d'équilibrage ?",
        answers: ["Vanne marche/arrêt", "Vanne réglant débit pour équilibrer circuit", "Thermostat", "Filtre"],
        correct: 1,
        explanation: "La vanne d'équilibrage règle le débit de chaque circuit pour homogénéiser températures.",
        keyPoints: ["Réglage débit", "Équilibre", "Sur retours", "Température homogène", "Réglage initial"]
    },
    {
        id: 'q150',
        category: "Chauffage - Chauffage",
        question: "Qu'est-ce qu'un robinet thermostatique ?",
        answers: ["Robinet cuisine", "Vanne régulant débit selon température pièce", "Thermostat mural", "Vanne manuelle"],
        correct: 1,
        explanation: "Le robinet thermostatique régule automatiquement le débit selon la température ambiante.",
        keyPoints: ["Régulation auto", "Température pièce", "Bulbe cire/gaz", "Économie 15%", "Sur chaque radiateur"]
    },
    {
        id: 'q151',
        category: "Chauffage - Régulation",
        question: "À quoi sert une sonde extérieure ?",
        answers: ["Mesurer température extérieure pour adapter chauffe", "Détecter fuites", "Mesurer consommation", "Ventilation"],
        correct: 0,
        explanation: "La sonde extérieure permet une régulation anticipative selon température extérieure (loi d'eau).",
        keyPoints: ["Température ext", "Régulation anticipative", "Loi d'eau", "Économie 10-15%", "Façade nord"]
    },
    {
        id: 'q152',
        category: "Chauffage - Régulation",
        question: "Qu'est-ce que la régulation par loi d'eau ?",
        answers: ["Réglementation", "Température eau adaptée selon température extérieure", "Débit eau", "Qualité eau"],
        correct: 1,
        explanation: "Loi d'eau : relation température eau circuit / température extérieure (courbe de chauffe).",
        keyPoints: ["T° eau selon T° ext", "Courbe chauffe", "Anticipation", "Confort", "Économie"]
    },
    {
        id: 'q153',
        category: "Chauffage - Régulation",
        question: "Qu'est-ce qu'un thermostat d'ambiance ?",
        answers: ["Thermomètre", "Régulateur température intérieure agissant sur chaudière", "Vanne radiateur", "Sonde"],
        correct: 1,
        explanation: "Le thermostat mesure température intérieure et commande marche/arrêt chaudière.",
        keyPoints: ["Température intérieure", "Commande chaudière", "Pièce de référence", "Consigne", "Économie"]
    },
    {
        id: 'q154',
        category: "Chauffage - Régulation",
        question: "Où placer un thermostat d'ambiance ?",
        answers: ["Cuisine", "Pièce de référence, ni soleil ni courant d'air", "SDB", "Extérieur"],
        correct: 1,
        explanation: "Pièce de référence (salon), 1,5m hauteur, pas de soleil direct, ni courant d'air, ni radiateur proche.",
        keyPoints: ["Pièce référence", "1,5m hauteur", "Pas soleil", "Pas courant air", "Pas radiateur proche"]
    },
    {
        id: 'q155',
        category: "Chauffage - Générateurs",
        question: "Quels sont les principaux types de générateurs de chaleur ?",
        answers: ["Radiateurs", "Chaudières gaz/fioul/bois, PAC, électrique", "Tuyaux", "Thermostats"],
        correct: 1,
        explanation: "Générateurs : chaudières (gaz, fioul, bois, granulés), PAC, chaudières électriques.",
        keyPoints: ["Chaudières", "Pompes à chaleur", "Électrique", "Bois/granulés", "Production chaleur"]
    },
    {
        id: 'q156',
        category: "Chauffage - Générateurs",
        question: "Qu'est-ce que le COP d'une pompe à chaleur ?",
        answers: ["Rapport énergie produite / énergie consommée", "Puissance max", "Temps chauffe", "Niveau sonore"],
        correct: 0,
        explanation: "COP = Coefficient de Performance = énergie thermique produite / énergie électrique consommée.",
        keyPoints: ["COP = rendement", "Produite / consommée", "COP 3 = 3 kWh produits pour 1 kWh consommé", "Variable selon T°", "SCOP annuel"]
    },
    {
        id: 'q157',
        category: "Chauffage - Générateurs",
        question: "Pourquoi le COP d'une PAC diminue quand il fait froid ?",
        answers: ["Défaut PAC", "Plus difficile extraire chaleur si T° ext basse", "Normal", "Réglage"],
        correct: 1,
        explanation: "Plus l'écart entre température extérieure et intérieure est grand, plus le COP diminue.",
        keyPoints: ["Écart température", "Extraction difficile", "COP baisse", "Normal", "Appoint nécessaire"]
    },
    {
        id: 'q158',
        category: "Chauffage - Isométrie",
        question: "Qu'est-ce qu'un dessin isométrique ?",
        answers: ["Perspective 3D tuyauteries avec axes 30°", "Façade", "Schéma électrique", "Plan géographique"],
        correct: 0,
        explanation: "Dessin isométrique : représentation 3D avec axes à 30° pour visualiser tuyauteries.",
        keyPoints: ["3D", "Axes 30°", "Tuyauteries", "Facile à lire", "Métrés possibles"]
    },
    {
        id: 'q159',
        category: "Chauffage - Installation",
        question: "Comment remplir un circuit de chauffage ?",
        answers: ["Robinet quelconque", "Robinet remplissage, ouvrir lentement, purger radiateurs", "Tuyau arrosage", "Pompe"],
        correct: 1,
        explanation: "Robinet de remplissage (sous chaudière), remplir lentement, purger radiateurs, pression 1-1,5 bar.",
        keyPoints: ["Robinet remplissage", "Lentement", "Purger au fur et à mesure", "1-1,5 bar", "Contrôler étanchéité"]
    },
    {
        id: 'q160',
        category: "Chauffage - Installation",
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
        category: "Chauffage - Symboles",
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
        category: "Chauffage - Symboles",
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
        category: "Chauffage - Symboles",
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
        category: "Chauffage - Symboles",
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
        category: "Chauffage - Schémas",
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
        category: "Chauffage - Schémas",
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
        category: "Chauffage - Schémas",
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
        category: "Chauffage - Schémas",
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
        category: "Systèmes Thermiques - Raccords",
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
        category: "Systèmes Thermiques - Raccords",
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
        category: "Systèmes Thermiques - Raccords",
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
        category: "Systèmes Thermiques - Raccords",
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
        category: "Systèmes Thermiques - Raccords",
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
        category: "Systèmes Thermiques - Raccords",
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
        category: "Systèmes Thermiques - Raccords",
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
        category: "Systèmes Avancés - Solaire",
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
        category: "Systèmes Avancés - Solaire",
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
        category: "Systèmes Avancés - Solaire",
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
        category: "Systèmes Avancés - Solaire",
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
        category: "Systèmes Avancés - Solaire",
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
        category: "Systèmes Avancés - Solaire",
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
        category: "Systèmes Avancés - Solaire",
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
        category: "Systèmes Avancés - Solaire",
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
        category: "Systèmes Thermiques - Plomberie",
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
        category: "Systèmes Thermiques - Plomberie",
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
        category: "Systèmes Thermiques - Plomberie",
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
        category: "Systèmes Thermiques - Plomberie",
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
        category: "Systèmes Thermiques - Plomberie",
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
        category: "Systèmes Thermiques - Plomberie",
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
        category: "Systèmes Thermiques - Plomberie",
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
        category: "Systèmes Thermiques - Dimensionnement",
        difficulty: "easy",
        question: "Pour chauffer une pièce de 20 m² avec 2.5 m de hauteur et isolation moyenne (60 W/m³), quelle puissance faut-il ?",
        answers: ["1 kW", "3 kW", "5 kW", "10 kW"],
        correct: 1,
        explanation: "Volume = 20 × 2.5 = 50 m³. Puissance = 50 × 60 = 3000 W = 3 kW.",
        keyPoints: ["Volume = Surface × Hauteur", "Puissance = Volume × Coefficient", "60 W/m³ isolation moyenne", "3 kW"]
    },
    {
        id: 'q192',
        category: "Systèmes Thermiques - Dimensionnement",
        difficulty: "medium",
        question: "Une canalisation d'évacuation de 8 mètres avec une pente de 1% a un dénivelé de combien ?",
        answers: ["1 cm", "8 cm", "10 cm", "80 cm"],
        correct: 1,
        explanation: "Dénivelé = Longueur × (Pente/100) = 8 × 0.01 = 0.08 m = 8 cm.",
        keyPoints: ["1% = 1 cm/m", "8 m × 1% = 8 cm", "Formule simple", "Pente minimale"]
    },
    {
        id: 'q193',
        category: "Systèmes Thermiques - Dimensionnement",
        difficulty: "easy",
        question: "Convertir 12 L/min en L/h :",
        answers: ["12 L/h", "120 L/h", "720 L/h", "7200 L/h"],
        correct: 2,
        explanation: "12 L/min × 60 min = 720 L/h.",
        keyPoints: ["×60 pour passer en heures", "720 L/h", "Débit d'eau", "Conversion simple"]
    },
    {
        id: 'q194',
        category: "Systèmes Thermiques - Dimensionnement",
        difficulty: "medium",
        question: "Un pouce (1\") équivaut approximativement à combien de millimètres ?",
        answers: ["10 mm", "25.4 mm", "50 mm", "100 mm"],
        correct: 1,
        explanation: "1 pouce = 25.4 mm exactement. C'est une conversion fondamentale en plomberie.",
        keyPoints: ["1\" = 25.4 mm", "Unité anglo-saxonne", "3/4\" = 19 mm", "1/2\" = 12.7 mm"]
    },
    {
        id: 'q195',
        category: "Systèmes Thermiques - Dimensionnement",
        difficulty: "hard",
        question: "Pour une maison de 120 m² avec 2.5 m de hauteur et bonne isolation (40 W/m³), quelle puissance de chaudière ?",
        answers: ["5 kW", "8 kW", "12 kW", "20 kW"],
        correct: 2,
        explanation: "Volume = 120 × 2.5 = 300 m³. Puissance = 300 × 40 = 12000 W = 12 kW.",
        keyPoints: ["Volume 300 m³", "40 W/m³ bonne isolation", "12 kW", "Surdimensionner légèrement"]
    },
    {
        id: 'q196',
        category: "Systèmes Thermiques - Dimensionnement",
        difficulty: "medium",
        question: "Convertir 1.5 m³/h en L/min :",
        answers: ["15 L/min", "25 L/min", "90 L/min", "1500 L/min"],
        correct: 1,
        explanation: "1.5 m³/h = 1500 L/h. 1500 ÷ 60 = 25 L/min.",
        keyPoints: ["1 m³ = 1000 L", "÷60 pour minutes", "25 L/min", "Débit circulateur"]
    },
    {
        id: 'q197',
        category: "Systèmes Thermiques - Dimensionnement",
        difficulty: "easy",
        question: "Une pièce rectangulaire de 5 m × 4 m a quelle surface ?",
        answers: ["9 m²", "18 m²", "20 m²", "40 m²"],
        correct: 2,
        explanation: "Surface = Longueur × Largeur = 5 × 4 = 20 m².",
        keyPoints: ["Rectangle", "L × l", "20 m²", "Calcul simple"]
    },
    {
        id: 'q198',
        category: "Systèmes Thermiques - Dimensionnement",
        difficulty: "hard",
        question: "Quelle pente en % pour une canalisation de 12 m avec un dénivelé de 18 cm ?",
        answers: ["0.5%", "1%", "1.5%", "2%"],
        correct: 2,
        explanation: "Pente% = (Dénivelé/Longueur) × 100 = (0.18/12) × 100 = 1.5%.",
        keyPoints: ["18 cm = 0.18 m", "0.18/12 = 0.015", "×100 = 1.5%", "Pente correcte"]
    },
    {
        id: 'q199',
        category: "Fondamentaux & Sécurité - Éco-construction",
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
        category: "Fondamentaux & Sécurité - Éco-construction",
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
    },

    // ========== CONVERSIONS ET CALCULS (30 questions) ==========
    {
        id: 'q201',
        category: "Conversions",
        difficulty: "easy",
        question: "Combien de millimètres dans 1 mètre ?",
        answers: ["10 mm", "100 mm", "1000 mm", "10000 mm"],
        correct: 2,
        explanation: "1 mètre = 1000 millimètres (1 m = 1000 mm).",
        keyPoints: ["1 m = 100 cm", "1 m = 1000 mm", "1 cm = 10 mm"]
    },
    {
        id: 'q202',
        category: "Conversions",
        difficulty: "easy",
        question: "Combien vaut 1 pouce en millimètres ?",
        answers: ["10 mm", "25.4 mm", "30 mm", "50 mm"],
        correct: 1,
        explanation: "1 pouce (1\") = 25.4 mm exactement. C'est une conversion fondamentale en plomberie.",
        keyPoints: ["1\" = 25.4 mm", "3/4\" = 19.05 mm", "1/2\" = 12.7 mm"]
    },
    {
        id: 'q203',
        category: "Conversions",
        difficulty: "medium",
        question: "Un tube cuivre de 3/4\" correspond à quel diamètre en mm ?",
        answers: ["12 mm", "14 mm", "16 mm", "19 mm"],
        correct: 2,
        explanation: "Un tube 3/4\" correspond à environ 16 mm de diamètre nominal (DN 16).",
        keyPoints: ["3/4\" ≈ 19 mm (calcul exact)", "DN 16 pour cuivre", "Tube 16 mm extérieur"]
    },
    {
        id: 'q204',
        category: "Conversions",
        difficulty: "easy",
        question: "Combien de litres par heure dans 10 L/min ?",
        answers: ["60 L/h", "100 L/h", "600 L/h", "1000 L/h"],
        correct: 2,
        explanation: "10 L/min × 60 minutes = 600 L/h.",
        keyPoints: ["1 min = 60 secondes", "1 heure = 60 min", "Multiplier par 60"]
    },
    {
        id: 'q205',
        category: "Conversions",
        difficulty: "medium",
        question: "Un débit de 1 m³/h équivaut à combien de L/min ?",
        answers: ["10 L/min", "16.67 L/min", "60 L/min", "100 L/min"],
        correct: 1,
        explanation: "1 m³ = 1000 L. Donc 1000 L/h ÷ 60 min = 16.67 L/min.",
        keyPoints: ["1 m³ = 1000 L", "Diviser par 60 pour L/min", "16.67 L/min"]
    },
    {
        id: 'q206',
        category: "Conversions",
        difficulty: "easy",
        question: "Combien de watts dans 1 kilowatt (kW) ?",
        answers: ["10 W", "100 W", "1000 W", "10000 W"],
        correct: 2,
        explanation: "1 kW = 1000 W (kilo = mille).",
        keyPoints: ["1 kW = 1000 W", "Puissance chauffage", "k = kilo = ×1000"]
    },
    {
        id: 'q207',
        category: "Conversions",
        difficulty: "medium",
        question: "Une chaudière de 24 kW équivaut à combien de watts ?",
        answers: ["2400 W", "24000 W", "240 W", "240000 W"],
        correct: 1,
        explanation: "24 kW × 1000 = 24000 W.",
        keyPoints: ["Multiplier par 1000", "24 kW = 24000 W", "Puissance typique chaudière"]
    },
    {
        id: 'q208',
        category: "Conversions",
        difficulty: "easy",
        question: "Combien de centimètres dans 2.5 mètres ?",
        answers: ["25 cm", "250 cm", "2.5 cm", "2500 cm"],
        correct: 1,
        explanation: "2.5 m × 100 = 250 cm.",
        keyPoints: ["1 m = 100 cm", "Multiplier par 100", "2.5 × 100 = 250"]
    },
    {
        id: 'q209',
        category: "Conversions",
        difficulty: "medium",
        question: "Un raccord de 1/2\" correspond à quel DN (diamètre nominal) en cuivre ?",
        answers: ["DN 10", "DN 12", "DN 14", "DN 16"],
        correct: 2,
        explanation: "1/2\" correspond à un DN 14 en tuyauterie cuivre (tube de 14 mm).",
        keyPoints: ["1/2\" = DN 14", "Tube cuivre 14 mm", "Usage sanitaire courant"]
    },
    {
        id: 'q210',
        category: "Conversions",
        difficulty: "hard",
        question: "Quelle est la surface d'une pièce de 4.5 m × 3.2 m ?",
        answers: ["13.5 m²", "14.4 m²", "15.2 m²", "16.8 m²"],
        correct: 1,
        explanation: "Surface = Longueur × Largeur = 4.5 × 3.2 = 14.4 m².",
        keyPoints: ["S = L × l", "4.5 × 3.2", "= 14.4 m²", "Calcul de surface"]
    },
    {
        id: 'q211',
        category: "Conversions",
        difficulty: "medium",
        question: "Quel est le volume d'une pièce de 5 m × 4 m avec 2.5 m de hauteur ?",
        answers: ["40 m³", "50 m³", "45 m³", "60 m³"],
        correct: 1,
        explanation: "Volume = Longueur × Largeur × Hauteur = 5 × 4 × 2.5 = 50 m³.",
        keyPoints: ["V = L × l × h", "5 × 4 × 2.5", "= 50 m³", "Calcul chauffage"]
    },
    {
        id: 'q212',
        category: "Conversions",
        difficulty: "easy",
        question: "Combien de bar dans 1 bar ?",
        answers: ["1 bar = 100 Pa", "1 bar = 1000 Pa", "1 bar = 100000 Pa", "1 bar = 10000 Pa"],
        correct: 2,
        explanation: "1 bar = 100000 Pa = 100 kPa = 0.1 MPa.",
        keyPoints: ["1 bar = 10⁵ Pa", "1 bar ≈ 1 atm", "Pression eau", "100 kPa"]
    },
    {
        id: 'q213',
        category: "Conversions",
        difficulty: "medium",
        question: "Une pression de 3 bar équivaut à combien de kPa ?",
        answers: ["30 kPa", "300 kPa", "3000 kPa", "3 kPa"],
        correct: 1,
        explanation: "3 bar × 100 kPa/bar = 300 kPa.",
        keyPoints: ["1 bar = 100 kPa", "Multiplier par 100", "3 bar = 300 kPa"]
    },
    {
        id: 'q214',
        category: "Conversions",
        difficulty: "easy",
        question: "À combien de Kelvin correspond 20°C ?",
        answers: ["253 K", "273 K", "293 K", "313 K"],
        correct: 2,
        explanation: "T(K) = T(°C) + 273.15. Donc 20 + 273 = 293 K.",
        keyPoints: ["K = °C + 273", "0°C = 273 K", "20°C = 293 K", "Échelle absolue"]
    },
    {
        id: 'q215',
        category: "Conversions",
        difficulty: "medium",
        question: "Combien de mm fait 3.5 pouces ?",
        answers: ["35 mm", "88.9 mm", "70 mm", "100 mm"],
        correct: 1,
        explanation: "3.5\" × 25.4 mm/\" = 88.9 mm.",
        keyPoints: ["1\" = 25.4 mm", "3.5 × 25.4", "= 88.9 mm"]
    },
    {
        id: 'q216',
        category: "Conversions",
        difficulty: "easy",
        question: "Combien de litres dans 1 m³ ?",
        answers: ["10 L", "100 L", "1000 L", "10000 L"],
        correct: 2,
        explanation: "1 m³ = 1000 litres (1 m³ = 1000 L).",
        keyPoints: ["1 m³ = 1000 L", "1 L = 1 dm³", "Volume d'eau"]
    },
    {
        id: 'q217',
        category: "Conversions",
        difficulty: "hard",
        question: "Un ballon de 300 L correspond à combien de m³ ?",
        answers: ["0.03 m³", "0.3 m³", "3 m³", "30 m³"],
        correct: 1,
        explanation: "300 L ÷ 1000 = 0.3 m³.",
        keyPoints: ["Diviser par 1000", "300 L = 0.3 m³", "Ballon ECS"]
    },
    {
        id: 'q218',
        category: "Conversions",
        difficulty: "medium",
        question: "Quelle est la pente en % pour un dénivelé de 5 cm sur 2.5 m ?",
        answers: ["1%", "2%", "5%", "10%"],
        correct: 1,
        explanation: "Pente (%) = (dénivelé / longueur) × 100 = (0.05 / 2.5) × 100 = 2%.",
        keyPoints: ["5 cm = 0.05 m", "0.05/2.5 = 0.02", "×100 = 2%", "Évacuation"]
    },
    {
        id: 'q219',
        category: "Conversions",
        difficulty: "easy",
        question: "Combien fait 150 cm en mètres ?",
        answers: ["0.15 m", "1.5 m", "15 m", "150 m"],
        correct: 1,
        explanation: "150 cm ÷ 100 = 1.5 m.",
        keyPoints: ["Diviser par 100", "150 cm = 1.5 m", "cm → m"]
    },
    {
        id: 'q220',
        category: "Conversions",
        difficulty: "medium",
        question: "Un débit de 600 L/h équivaut à combien de L/min ?",
        answers: ["6 L/min", "10 L/min", "60 L/min", "100 L/min"],
        correct: 1,
        explanation: "600 L/h ÷ 60 min = 10 L/min.",
        keyPoints: ["Diviser par 60", "600/60 = 10", "L/h → L/min"]
    },
    {
        id: 'q221',
        category: "Conversions",
        difficulty: "hard",
        question: "Pour chauffer 50 m³ avec une isolation moyenne (60 W/m³), quelle puissance faut-il ?",
        answers: ["2 kW", "3 kW", "5 kW", "10 kW"],
        correct: 1,
        explanation: "Puissance = Volume × Coefficient = 50 m³ × 60 W/m³ = 3000 W = 3 kW.",
        keyPoints: ["P = V × coef", "50 × 60 = 3000 W", "= 3 kW", "Calcul puissance"]
    },
    {
        id: 'q222',
        category: "Conversions",
        difficulty: "easy",
        question: "Combien de secondes dans 1 minute ?",
        answers: ["10 s", "30 s", "60 s", "100 s"],
        correct: 2,
        explanation: "1 minute = 60 secondes.",
        keyPoints: ["1 min = 60 s", "1 h = 60 min", "1 h = 3600 s"]
    },
    {
        id: 'q223',
        category: "Conversions",
        difficulty: "medium",
        question: "Quel est le périmètre d'un cercle de diamètre 100 mm ? (π ≈ 3.14)",
        answers: ["314 mm", "200 mm", "100 mm", "628 mm"],
        correct: 0,
        explanation: "Périmètre = π × diamètre = 3.14 × 100 = 314 mm.",
        keyPoints: ["P = π × D", "3.14 × 100", "= 314 mm", "Cintrage cuivre"]
    },
    {
        id: 'q224',
        category: "Conversions",
        difficulty: "hard",
        question: "Un tube de DN 40 peut-il remplacer un tube de 1\"1/2 ?",
        answers: ["Oui, équivalent", "Non, 1\"1/2 = DN 33", "Non, 1\"1/2 = DN 50", "Oui mais surdimensionné"],
        correct: 1,
        explanation: "1\"1/2 (un pouce et demi) correspond à DN 33, pas DN 40. DN 40 est surdimensionné.",
        keyPoints: ["1\"1/2 = DN 33", "DN 40 > DN 33", "Vérifier équivalences"]
    },
    {
        id: 'q225',
        category: "Conversions",
        difficulty: "medium",
        question: "Combien de kWh pour 2000 Wh ?",
        answers: ["0.2 kWh", "2 kWh", "20 kWh", "200 kWh"],
        correct: 1,
        explanation: "2000 Wh ÷ 1000 = 2 kWh.",
        keyPoints: ["Diviser par 1000", "Wh → kWh", "2000 Wh = 2 kWh", "Consommation"]
    },
    {
        id: 'q226',
        category: "Conversions",
        difficulty: "easy",
        question: "Combien de mm² dans 1 cm² ?",
        answers: ["10 mm²", "100 mm²", "1000 mm²", "10000 mm²"],
        correct: 1,
        explanation: "1 cm = 10 mm, donc 1 cm² = 10 × 10 = 100 mm².",
        keyPoints: ["1 cm = 10 mm", "1 cm² = 100 mm²", "Surface au carré"]
    },
    {
        id: 'q227',
        category: "Conversions",
        difficulty: "hard",
        question: "Un radiateur émet 1200 W. Combien émet-il en kcal/h ? (1 W ≈ 0.86 kcal/h)",
        answers: ["860 kcal/h", "1032 kcal/h", "1400 kcal/h", "1200 kcal/h"],
        correct: 1,
        explanation: "1200 W × 0.86 = 1032 kcal/h.",
        keyPoints: ["1 W ≈ 0.86 kcal/h", "1200 × 0.86", "= 1032 kcal/h", "Ancienne unité"]
    },
    {
        id: 'q228',
        category: "Conversions",
        difficulty: "medium",
        question: "Quelle est la vitesse de l'eau si 10 L/min passe dans un tube de section 1 cm² ?",
        answers: ["0.17 m/s", "1.67 m/s", "10 m/s", "100 m/s"],
        correct: 1,
        explanation: "10 L/min = 10000 cm³/min = 166.7 cm³/s. Vitesse = Débit/Section = 166.7/1 = 166.7 cm/s = 1.67 m/s.",
        keyPoints: ["v = Q/S", "10 L/min = 166.7 cm³/s", "v = 1.67 m/s", "Vitesse recommandée < 2 m/s"]
    },
    {
        id: 'q229',
        category: "Conversions",
        difficulty: "easy",
        question: "Combien de minutes dans 2 heures ?",
        answers: ["60 min", "100 min", "120 min", "200 min"],
        correct: 2,
        explanation: "2 heures × 60 minutes/heure = 120 minutes.",
        keyPoints: ["1 h = 60 min", "2 × 60 = 120", "Temps de travail"]
    },
    {
        id: 'q230',
        category: "Conversions",
        difficulty: "medium",
        question: "Pour une pente de 1 cm/m, quel dénivelé sur 8 mètres ?",
        answers: ["1 cm", "8 cm", "10 cm", "80 cm"],
        correct: 1,
        explanation: "1 cm/m × 8 m = 8 cm de dénivelé total.",
        keyPoints: ["Pente × longueur", "1 cm/m × 8 m", "= 8 cm", "Évacuation EU"]
    },

    // ========== STAGE 2 - SYSTÈMES THERMIQUES (50 questions) ==========
    {
        id: 'q231',
        category: "Systèmes Thermiques - Évacuation",
        difficulty: "easy",
        question: "Que signifie l'acronyme EU dans un réseau d'évacuation ?",
        answers: ["Eaux Usagées", "Eaux Usées", "Eaux Ménagères", "Eaux Uniques"],
        correct: 2,
        explanation: "EU signifie Eaux Ménagères, c'est-à-dire l'ensemble des eaux provenant des salles de bains, cuisine, lavabos (sauf WC).",
        keyPoints: ["EU = Eaux Ménagères", "Exclut les WC", "Salles de bains et cuisine", "Différent des eaux vannes"]
    },
    {
        id: 'q232',
        category: "Systèmes Thermiques - Évacuation",
        difficulty: "easy",
        question: "Quelles sont les eaux vannes ?",
        answers: ["Eaux de pluie", "Eaux des WC et urinoirs", "Eaux des lavabos", "Eaux des douches"],
        correct: 1,
        explanation: "Les eaux vannes (EV) proviennent des WC et urinoirs. On distingue parfois les eaux noires (avec matières fécales) et les eaux grises (sans matières fécales).",
        keyPoints: ["EV = WC + urinoirs", "Eaux noires vs grises", "Séparées des eaux ménagères", "Circuit spécifique"]
    },
    {
        id: 'q233',
        category: "Systèmes Thermiques - Évacuation",
        difficulty: "medium",
        question: "Quelle est la pente minimale recommandée pour les collecteurs d'immeubles ?",
        answers: ["1 cm/m", "2 cm/m", "3 cm/m", "5 cm/m"],
        correct: 2,
        explanation: "La pente des collecteurs d'immeubles doit être de 3 cm par mètre au minimum pour assurer un bon écoulement et éviter les stagnations.",
        keyPoints: ["Pente minimale 3 cm/m", "Évite stagnations", "Assure bon écoulement", "Norme DTU 60.11"]
    },
    {
        id: 'q234',
        category: "Systèmes Thermiques - Évacuation",
        difficulty: "medium",
        question: "Quelle vitesse d'écoulement est considérée comme convenable pour l'évacuation des eaux usées ?",
        answers: ["0,5 à 1 m/s", "1 à 2 m/s", "2 à 3 m/s", "3 à 4 m/s"],
        correct: 1,
        explanation: "Une vitesse comprise entre 1 et 2 m/s est convenable. Un débit trop important entraîne un désamorçage des siphons, un débit trop faible entraîne le colmatage.",
        keyPoints: ["Vitesse idéale 1-2 m/s", "Trop rapide = désamorçage siphons", "Trop lent = colmatage", "Équilibre important"]
    },
    {
        id: 'q235',
        category: "Systèmes Thermiques - Évacuation",
        difficulty: "medium",
        question: "Quel est le diamètre extérieur utilisé en pratique pour l'évacuation d'un lavabo ?",
        answers: ["32 mm", "40 mm", "50 mm", "63 mm"],
        correct: 1,
        explanation: "Pour un lavabo, le diamètre extérieur utilisé en pratique est de 32 mm ou 40 mm (diamètre intérieur minimal de 30 mm selon DTU 60.11).",
        keyPoints: ["Lavabo: Ø32 ou 40 mm", "Diamètre intérieur 30 mm", "Pente 1-3 cm/m", "Selon DTU 60.11"]
    },
    {
        id: 'q236',
        category: "Systèmes Thermiques - Évacuation",
        difficulty: "hard",
        question: "Quel diamètre intérieur minimal est requis pour un WC à chasse directe ?",
        answers: ["60 mm", "70 mm", "80 mm", "90 mm"],
        correct: 2,
        explanation: "Pour un WC à chasse directe, le diamètre intérieur minimal est de 80 mm pour les tuyauteries horizontales, soit un diamètre extérieur de 100 mm en pratique.",
        keyPoints: ["WC chasse directe: Ø int. 80 mm", "Ø ext. pratique 100 mm", "Tuyauteries horizontales", "Plus grand que WC siphonique"]
    },
    {
        id: 'q237',
        category: "Systèmes Thermiques - Évacuation",
        difficulty: "medium",
        question: "Que signifie 'chute' dans un réseau d'évacuation ?",
        answers: ["Canalisation horizontale", "Canalisation verticale", "Siphon de sol", "Collecteur principal"],
        correct: 1,
        explanation: "Une chute (ou descente) est une canalisation verticale utilisée pour l'évacuation des eaux usées des étages vers le collecteur principal.",
        keyPoints: ["Chute = canalisation verticale", "Évacuation des étages", "Différent du collecteur", "Raccordée au collecteur"]
    },
    {
        id: 'q238',
        category: "Systèmes Thermiques - Évacuation",
        difficulty: "easy",
        question: "Qu'est-ce qu'un collecteur d'appareils ?",
        answers: ["Canalisation verticale", "Canalisation horizontale raccordant les appareils", "Égout public", "Système de ventilation"],
        correct: 1,
        explanation: "Un collecteur d'appareils est une canalisation d'allure horizontale raccordant les appareils sanitaires ou les tuyaux de chutes.",
        keyPoints: ["Collecteur = horizontal", "Raccorde les appareils", "Vers chute ou collecteur principal", "Pente minimale 3 cm/m"]
    },
    {
        id: 'q239',
        category: "Systèmes Thermiques - Évacuation",
        difficulty: "medium",
        question: "Pour une baignoire de plus de 1 mètre, quel diamètre extérieur est recommandé ?",
        answers: ["32 mm", "40 mm", "50 mm", "63 mm"],
        correct: 2,
        explanation: "Pour une baignoire dont la longueur est supérieure à 1 m, le diamètre extérieur utilisé est de 40 mm ou parfois 50 mm (diamètre intérieur 38 mm).",
        keyPoints: ["Baignoire >1m: Ø40-50 mm", "Baignoire <1m: Ø40 mm", "Diamètre intérieur 38 mm si >1m", "Selon longueur baignoire"]
    },
    {
        id: 'q240',
        category: "Systèmes Thermiques - Évacuation",
        difficulty: "hard",
        question: "Dans un système séparatif, est-il autorisé de raccorder les eaux pluviales sur le réseau d'évacuation des eaux usées ?",
        answers: ["Oui, toujours", "Oui, avec autorisation", "Non, strictement interdit", "Oui, si diamètre suffisant"],
        correct: 2,
        explanation: "Dans un système séparatif, il est strictement interdit de raccorder les eaux pluviales sur le réseau d'évacuation des eaux usées. Les réseaux doivent rester séparés.",
        keyPoints: ["Séparatif = réseaux séparés", "Interdiction stricte", "EP ≠ EU", "Vérifier avec mairie"]
    },
    {
        id: 'q241',
        category: "Systèmes Thermiques - Évacuation",
        difficulty: "medium",
        question: "Quel est le diamètre minimal pour un collecteur desservant 4 à 10 appareils (hors WC) dont 2 baignoires maximum ?",
        answers: ["50 mm", "65 mm", "80 mm", "100 mm"],
        correct: 2,
        explanation: "Pour 4 à 10 appareils (hors WC) dont 2 baignoires maximum, le diamètre intérieur minimal est de 65 mm, soit 80 mm en diamètre extérieur pratique.",
        keyPoints: ["4-10 appareils: Ø65/80 mm", "Maximum 2 baignoires", "Hors WC", "Diamètre croissant selon nombre"]
    },
    {
        id: 'q242',
        category: "Systèmes Thermiques - Évacuation",
        difficulty: "easy",
        question: "Quel DTU régit les installations d'évacuation des eaux usées ?",
        answers: ["DTU 60.1 et 60.11", "DTU 65.10", "DTU 68.3", "DTU 24.1"],
        correct: 0,
        explanation: "Les DTU 60.1 et 60.11 régissent les installations de plomberie sanitaire et d'évacuation des eaux usées et pluviales.",
        keyPoints: ["DTU 60.1 et 60.11", "Plomberie sanitaire", "Évacuation EU et EP", "Norme obligatoire"]
    },
    {
        id: 'q243',
        category: "Systèmes Thermiques - Évacuation",
        difficulty: "medium",
        question: "Qu'est-ce qu'une chute unique ?",
        answers: ["Chute d'eaux ménagères seule", "Chute d'eaux vannes seule", "Chute mixte EU + EV avec système agréé", "Chute d'eaux pluviales"],
        correct: 2,
        explanation: "Une chute unique est une canalisation verticale qui évacue à la fois les eaux ménagères et les eaux vannes, avec un tube et des culottes agréées (ex: Chutunic de Nicoll).",
        keyPoints: ["Chute mixte EU + EV", "Système agréé obligatoire", "Ex: Chutunic Nicoll", "Alternative aux chutes séparées"]
    },
    {
        id: 'q244',
        category: "Systèmes Thermiques - Évacuation",
        difficulty: "medium",
        question: "Pour un groupe de sécurité avec partie verticale >1m, quel diamètre extérieur utiliser ?",
        answers: ["25 mm", "32 mm", "40 mm", "50 mm"],
        correct: 1,
        explanation: "Pour un groupe de sécurité avec une partie verticale dont la longueur est supérieure à 1 m, le diamètre intérieur minimal est de 20 mm, soit 32 mm en diamètre extérieur.",
        keyPoints: ["Partie verticale >1m: Ø32 mm", "Partie verticale <1m: Ø32 mm (25 int.)", "Évacuation groupe sécurité", "Dimensionnement selon hauteur"]
    },
    {
        id: 'q245',
        category: "Systèmes Thermiques - Évacuation",
        difficulty: "hard",
        question: "Quelle est la pente minimale d'un égout public selon les normes ?",
        answers: ["0,01 m/m (1 cm/m)", "0,03 m/m (3 cm/m)", "0,05 m/m (5 cm/m)", "0,1 m/m (10 cm/m)"],
        correct: 0,
        explanation: "Un égout public doit avoir une pente minimale de 0,01 m par mètre (soit 1 cm/m), inférieure à celle des collecteurs d'immeubles (3 cm/m).",
        keyPoints: ["Égout public: 1 cm/m", "Collecteur immeuble: 3 cm/m", "Pente minimale", "Assure écoulement gravitaire"]
    },

    // === PRODUCTION ECS (18 questions) ===
    {
        id: 'q246',
        category: "Systèmes Thermiques - ECS",
        difficulty: "easy",
        question: "Que signifie l'acronyme ECS ?",
        answers: ["Eau Chaude Solaire", "Eau Chaude Sanitaire", "Évacuation Chaude Séparée", "Échangeur Chauffage Solaire"],
        correct: 1,
        explanation: "ECS signifie Eau Chaude Sanitaire, c'est-à-dire l'eau potable chauffée destinée aux usages domestiques (douche, lavabo, cuisine...).",
        keyPoints: ["ECS = Eau Chaude Sanitaire", "Eau potable chauffée", "Usages domestiques", "Différent du chauffage"]
    },
    {
        id: 'q247',
        category: "Systèmes Thermiques - ECS",
        difficulty: "easy",
        question: "Quels sont les trois principaux types de production d'ECS ?",
        answers: ["Instantanée, accumulation, mixte", "Instantanée, accumulation, semi-accumulation", "Électrique, gaz, solaire", "Directe, indirecte, mixte"],
        correct: 1,
        explanation: "Les trois procédés de production d'ECS sont : la production instantanée (sans réserve), l'accumulation (stockage journalier), et la semi-accumulation/semi-instantanée (ballon tampon).",
        keyPoints: ["3 procédés principaux", "Instantanée (sans réserve)", "Accumulation (stockage)", "Semi-accumulation (tampon)"]
    },
    {
        id: 'q248',
        category: "Systèmes Thermiques - ECS",
        difficulty: "medium",
        question: "À quelle température est préréglé en usine le thermostat d'un ballon électrique ?",
        answers: ["50°C", "55°C", "60°C", "65°C"],
        correct: 2,
        explanation: "Le thermostat d'un ballon électrique est préréglé en usine à 60°C. Cette température permet d'éviter le développement de légionelles tout en limitant les risques de brûlure.",
        keyPoints: ["Préréglage usine 60°C", "Prévention légionellose", "Compromis sécurité/hygiène", "Température minimale recommandée"]
    },
    {
        id: 'q249',
        category: "Systèmes Thermiques - ECS",
        difficulty: "medium",
        question: "Quel est l'avantage principal d'un système de production ECS à accumulation ?",
        answers: ["Faible encombrement", "Prix d'achat réduit", "Puissance nécessaire faible", "Production continue 24h/24"],
        correct: 2,
        explanation: "L'accumulation nécessite une puissance faible car l'eau est chauffée progressivement sur une longue période. Elle permet aussi de profiter d'énergie à prix réduit (heures creuses).",
        keyPoints: ["Puissance nécessaire faible", "Chauffe progressive", "Heures creuses possibles", "Adapté consommation espacée"]
    },
    {
        id: 'q250',
        category: "Systèmes Thermiques - ECS",
        difficulty: "hard",
        question: "Dans un ballon électrique, quel est le rôle de l'anode ?",
        answers: ["Chauffer l'eau", "Protéger la cuve de la corrosion", "Réguler la température", "Évacuer le calcaire"],
        correct: 1,
        explanation: "L'anode est une tige de métal destinée à protéger la cuve du réservoir des courants vagabonds et des phénomènes d'électrolyse. Le métal utilisé (magnésium) est sacrificiel et doit être remplacé quand il est consommé.",
        keyPoints: ["Protection contre corrosion", "Métal sacrificiel (magnésium)", "Protège la cuve", "Doit être remplacée régulièrement"]
    },
    {
        id: 'q251',
        category: "Systèmes Thermiques - ECS",
        difficulty: "medium",
        question: "Qu'est-ce que la stratification dans un ballon d'eau chaude ?",
        answers: ["Accumulation de calcaire", "Superposition de couches d'eau à températures différentes", "Corrosion de la cuve", "Formation de bulles d'air"],
        correct: 1,
        explanation: "La stratification est la superposition de lames d'eau à des températures croissantes du bas vers le haut du réservoir. L'eau chaude, plus légère, monte naturellement vers le haut.",
        keyPoints: ["Couches à températures différentes", "Eau chaude en haut (60°C)", "Eau froide en bas (15°C)", "Phénomène naturel de densité"]
    },
    {
        id: 'q252',
        category: "Systèmes Thermiques - ECS",
        difficulty: "medium",
        question: "À quel endroit du ballon est placée la canne de prise d'eau chaude ?",
        answers: ["En bas du ballon", "Au milieu du ballon", "En haut du ballon", "Sur le côté du ballon"],
        correct: 2,
        explanation: "La canne de prise d'eau chaude est placée en haut du ballon, au point où l'eau est la plus chaude grâce à la stratification thermique.",
        keyPoints: ["Canne en haut du ballon", "Point le plus chaud", "Profite de la stratification", "Température maximale (60°C)"]
    },
    {
        id: 'q253',
        category: "Systèmes Thermiques - ECS",
        difficulty: "hard",
        question: "Combien de fonctions assure le groupe de sécurité d'un ballon ECS ?",
        answers: ["3 fonctions", "4 fonctions", "5 fonctions", "6 fonctions"],
        correct: 2,
        explanation: "Le groupe de sécurité assure 5 fonctions : 1) vanne de fermeture, 2) filtre, 3) clapet anti-retour, 4) vanne de vidange, 5) soupape de sécurité tarée à 7 bars.",
        keyPoints: ["5 fonctions distinctes", "Fermeture + protection", "Soupape 7 bars", "Élément de sécurité obligatoire"]
    },
    {
        id: 'q254',
        category: "Systèmes Thermiques - ECS",
        difficulty: "medium",
        question: "À quelle pression est tarée la soupape de sécurité d'un groupe de sécurité ECS ?",
        answers: ["3 bars", "5 bars", "7 bars", "10 bars"],
        correct: 2,
        explanation: "La soupape de sécurité du groupe de sécurité est tarée à 7 bars. Elle permet d'évacuer le surplus de pression dû à l'expansion de l'eau lors du chauffage.",
        keyPoints: ["Tarage à 7 bars", "Évacue surplus de pression", "Protection contre surpression", "Partie du groupe de sécurité"]
    },
    {
        id: 'q255',
        category: "Systèmes Thermiques - ECS",
        difficulty: "easy",
        question: "Quels sont les deux types d'accumulateurs ECS à accumulation ?",
        answers: ["Horizontal et vertical", "Blindé et stéatite", "Électriques et à gaz", "Simple et double paroi"],
        correct: 2,
        explanation: "On rencontre deux types de préparateurs ECS à accumulation : les accumulateurs électriques et les accumulateurs à gaz.",
        keyPoints: ["Électriques", "À gaz", "Principe d'accumulation", "Deux sources d'énergie différentes"]
    },
    {
        id: 'q256',
        category: "Systèmes Thermiques - ECS",
        difficulty: "medium",
        question: "Quelle est la différence entre une résistance blindée et une résistance stéatite ?",
        answers: ["La tension électrique", "Le contact avec l'eau", "La puissance", "La durée de vie"],
        correct: 1,
        explanation: "La résistance blindée est directement plongée dans l'eau. La résistance stéatite est placée dans un doigt de gant et n'est pas en contact direct avec l'eau, ce qui permet de l'intervenir sans vider le réservoir.",
        keyPoints: ["Blindée = contact direct eau", "Stéatite = dans doigt de gant", "Stéatite permet intervention", "Stéatite protégée du calcaire"]
    },
    {
        id: 'q257',
        category: "Systèmes Thermiques - ECS",
        difficulty: "hard",
        question: "Quel est le besoin journalier moyen en ECS à 60°C pour 3-4 personnes avec évier et lavabo ?",
        answers: ["36 litres en pointe", "50 litres en pointe", "88 litres en moyenne", "120 litres en pointe"],
        correct: 3,
        explanation: "Pour 3-4 personnes au foyer avec évier et lavabo, les besoins sont de 88 litres/jour en moyenne et 120 litres en pointe à 60°C selon les tableaux d'évaluation.",
        keyPoints: ["3-4 personnes: 88L moyenne", "120L en pointe", "À 60°C", "Évier + lavabo"]
    },
    {
        id: 'q258',
        category: "Systèmes Thermiques - ECS",
        difficulty: "easy",
        question: "Quel est l'inconvénient principal d'un système de production ECS instantanée ?",
        answers: ["Encombrement important", "Prix élevé", "Puissance nécessaire importante", "Entretien complexe"],
        correct: 2,
        explanation: "Le principal inconvénient de la production instantanée est la puissance nécessaire importante, parfois supérieure à la puissance requise pour chauffer les locaux.",
        keyPoints: ["Puissance importante requise", "Peut dépasser puissance chauffage", "Faible encombrement (avantage)", "Adapté petits débits fréquents"]
    },
    {
        id: 'q259',
        category: "Systèmes Thermiques - ECS",
        difficulty: "medium",
        question: "Qu'est-ce qu'un système de production ECS semi-accumulation ?",
        answers: ["Production alternée jour/nuit", "Production + stockage dans ballon tampon", "Deux ballons en série", "Système mixte gaz + électricité"],
        correct: 1,
        explanation: "La semi-accumulation produit l'ECS instantanément et la stocke dans un ballon tampon dimensionné pour assurer un débit de pointe de 10 minutes. Cela permet de réduire la puissance de la chaudière.",
        keyPoints: ["Production instantanée + stockage", "Ballon tampon pour pointe", "Réduit puissance chaudière", "Compromis instantané/accumulation"]
    },
    {
        id: 'q260',
        category: "Systèmes Thermiques - ECS",
        difficulty: "medium",
        question: "Pour un préparateur ECS instantané, l'échangeur doit satisfaire les pointes de consommation de quelle durée ?",
        answers: ["5 minutes", "10 minutes", "15 minutes", "20 minutes"],
        correct: 1,
        explanation: "L'échangeur d'un système instantané doit avoir une puissance suffisante pour satisfaire les pointes de consommation de 10 minutes.",
        keyPoints: ["Pointe de 10 minutes", "Puissance suffisante requise", "Production instantanée", "Sans limitation de durée totale"]
    },
    {
        id: 'q261',
        category: "Systèmes Thermiques - ECS",
        difficulty: "hard",
        question: "Dans un ballon électrique, à quelle tension peut fonctionner la résistance de chauffe ?",
        answers: ["Uniquement 230V", "Uniquement 380V", "230V ou 380V selon modèle", "12V sécurisé"],
        correct: 2,
        explanation: "La résistance peut être alimentée en 230V ou en 380V selon les cas. Certains appareils fonctionnent avec les deux tensions (tous courants). Une manipulation dans le boîtier électrique permet d'adapter la résistance à la tension fournie.",
        keyPoints: ["230V ou 380V", "Adaptation possible", "Appareils 'tous courants'", "Configuration dans boîtier"]
    },
    {
        id: 'q262',
        category: "Systèmes Thermiques - ECS",
        difficulty: "medium",
        question: "Quel est le rôle du raccord diélectrique sur un ballon ECS ?",
        answers: ["Réguler la température", "Protéger de l'électrolyse", "Réduire le bruit", "Filtrer l'eau"],
        correct: 1,
        explanation: "Le raccord diélectrique placé sur la sortie d'eau chaude protège le réservoir de l'électrolyse. Ce phénomène se produit lorsque différents métaux sont employés sur le réseau de distribution (ex: cuve acier + canalisation cuivre).",
        keyPoints: ["Protection contre électrolyse", "Joint isolant électrique", "Métaux différents = risque", "Sur sortie ECS"]
    },
    {
        id: 'q263',
        category: "Systèmes Thermiques - ECS",
        difficulty: "hard",
        question: "Dans un ballon à gaz à accumulation, où est situé le tube de fumées ?",
        answers: ["À l'extérieur du ballon", "Sur le côté du ballon", "Au centre du réservoir", "Sous le ballon"],
        correct: 2,
        explanation: "Le tube de fumées est situé au centre du réservoir. Les gaz de combustion évacués par ce tube sont ralentis par des turbulateurs placés à l'intérieur pour favoriser l'échange de chaleur entre l'eau et les fumées.",
        keyPoints: ["Tube au centre du réservoir", "Turbulateurs pour échange", "Ralentit les fumées", "Optimise rendement"]
    },

    // === ÉMETTEURS DE CHALEUR (10 questions) ===
    {
        id: 'q264',
        category: "Systèmes Thermiques - Émetteurs",
        difficulty: "easy",
        question: "Quels sont les trois principaux types d'émetteurs de chaleur ?",
        answers: ["Radiateurs, convecteurs, climatiseurs", "Radiateurs, plancher chauffant, ventilo-convecteurs", "Chaudières, pompes, radiateurs", "Poêles, inserts, radiateurs"],
        correct: 1,
        explanation: "Les trois principaux types d'émetteurs de chaleur sont : les radiateurs (fonte, acier, aluminium), le plancher chauffant (basse température), et les ventilo-convecteurs (pulsent l'air).",
        keyPoints: ["Radiateurs (différents matériaux)", "Plancher chauffant", "Ventilo-convecteurs", "Diffusion chaleur dans locaux"]
    },
    {
        id: 'q265',
        category: "Systèmes Thermiques - Émetteurs",
        difficulty: "medium",
        question: "Quel est l'avantage principal du plancher chauffant ?",
        answers: ["Installation rapide", "Coût minimal", "Température basse et confort optimal", "Aucun entretien"],
        correct: 2,
        explanation: "Le plancher chauffant fonctionne à basse température (35-40°C) et offre un confort optimal avec une répartition homogène de la chaleur et une sensation de bien-être au niveau des pieds.",
        keyPoints: ["Basse température (35-40°C)", "Confort optimal", "Répartition homogène", "Économies d'énergie"]
    },
    {
        id: 'q266',
        category: "Systèmes Thermiques - Émetteurs",
        difficulty: "medium",
        question: "Quel matériau de radiateur offre la meilleure inertie thermique ?",
        answers: ["Aluminium", "Acier", "Fonte", "Cuivre"],
        correct: 2,
        explanation: "Les radiateurs en fonte offrent la meilleure inertie thermique. Ils accumulent la chaleur et continuent à chauffer même après l'arrêt de la chaudière, mais sont plus lourds et longs à chauffer.",
        keyPoints: ["Fonte = meilleure inertie", "Continue à chauffer après arrêt", "Lourd et massif", "Chauffe lente"]
    },
    {
        id: 'q267',
        category: "Systèmes Thermiques - Émetteurs",
        difficulty: "easy",
        question: "Quel type de radiateur chauffe le plus rapidement ?",
        answers: ["Radiateur en fonte", "Radiateur en aluminium", "Radiateur en acier", "Tous identiques"],
        correct: 1,
        explanation: "Les radiateurs en aluminium chauffent le plus rapidement grâce à leur faible masse et leur excellente conductivité thermique, mais ont peu d'inertie.",
        keyPoints: ["Aluminium = chauffe rapide", "Faible masse", "Bonne conductivité", "Peu d'inertie"]
    },
    {
        id: 'q268',
        category: "Systèmes Thermiques - Émetteurs",
        difficulty: "medium",
        question: "Quelle est la température maximale du plancher chauffant dans les pièces principales ?",
        answers: ["28°C", "35°C", "40°C", "45°C"],
        correct: 0,
        explanation: "Dans les pièces principales (séjour, chambres), la température de surface du plancher chauffant ne doit pas dépasser 28°C pour éviter la sensation de jambes lourdes et assurer le confort.",
        keyPoints: ["Maximum 28°C en surface", "Pièces principales", "Confort et santé", "Norme réglementaire"]
    },
    {
        id: 'q269',
        category: "Systèmes Thermiques - Émetteurs",
        difficulty: "hard",
        question: "Quelle est la différence entre un radiateur haute température et basse température ?",
        answers: ["Le matériau utilisé", "La température de l'eau (70-90°C vs 45-55°C)", "La forme du radiateur", "Le mode de fixation"],
        correct: 1,
        explanation: "Un radiateur haute température fonctionne avec une eau à 70-90°C (chaudières classiques), tandis qu'un radiateur basse température fonctionne à 45-55°C (chaudières à condensation, pompes à chaleur). Les radiateurs BT sont plus grands.",
        keyPoints: ["HT: 70-90°C", "BT: 45-55°C", "BT plus grands", "BT adaptés condensation/PAC"]
    },
    {
        id: 'q270',
        category: "Systèmes Thermiques - Émetteurs",
        difficulty: "medium",
        question: "Qu'est-ce qu'un ventilo-convecteur ?",
        answers: ["Un radiateur sans eau", "Un émetteur avec ventilateur intégré", "Un système de ventilation", "Une chaudière mobile"],
        correct: 1,
        explanation: "Un ventilo-convecteur est un émetteur de chaleur équipé d'un ventilateur qui pulse l'air à travers une batterie d'échange. Il permet une montée en température rapide et peut aussi rafraîchir en été (réversible).",
        keyPoints: ["Ventilateur intégré", "Montée rapide en température", "Peut être réversible", "Batterie d'échange"]
    },
    {
        id: 'q271',
        category: "Systèmes Thermiques - Émetteurs",
        difficulty: "easy",
        question: "Où doivent être placés les radiateurs dans une pièce ?",
        answers: ["Au centre de la pièce", "Sous les fenêtres", "Près de la porte", "N'importe où"],
        correct: 1,
        explanation: "Les radiateurs doivent être placés sous les fenêtres pour contrer les déperditions thermiques par les vitrages (pont froid) et créer un rideau d'air chaud.",
        keyPoints: ["Sous les fenêtres", "Contre déperditions", "Rideau d'air chaud", "Optimise confort"]
    },
    {
        id: 'q272',
        category: "Systèmes Thermiques - Émetteurs",
        difficulty: "medium",
        question: "Quel est l'inconvénient principal des radiateurs en acier ?",
        answers: ["Poids élevé", "Coût important", "Faible inertie thermique", "Corrosion rapide"],
        correct: 2,
        explanation: "Les radiateurs en acier ont une faible inertie thermique : ils chauffent et refroidissent rapidement. Ils sont cependant légers, économiques et offrent un bon compromis pour la plupart des installations.",
        keyPoints: ["Faible inertie", "Chauffe/refroidit vite", "Léger et économique", "Bon compromis"]
    },
    {
        id: 'q273',
        category: "Systèmes Thermiques - Émetteurs",
        difficulty: "hard",
        question: "Pourquoi le plancher chauffant est-il compatible avec les pompes à chaleur ?",
        answers: ["Installation facile", "Coût réduit", "Fonctionne à basse température", "Entretien simplifié"],
        correct: 2,
        explanation: "Le plancher chauffant est idéal avec les pompes à chaleur car il fonctionne à basse température (35-40°C). Les PAC sont plus efficaces (meilleur COP) lorsqu'elles produisent de l'eau à basse température.",
        keyPoints: ["Compatible basse température", "Optimise COP de la PAC", "Eau 35-40°C", "Solution économique"]
    },

    // === SÉCURITÉ ET ORGANES (7 questions) ===
    {
        id: 'q274',
        category: "Systèmes Thermiques - Sécurité",
        difficulty: "medium",
        question: "Quel est le rôle d'un vase d'expansion dans une installation de chauffage ?",
        answers: ["Filtrer l'eau", "Compenser la dilatation de l'eau", "Augmenter la pression", "Purger l'air"],
        correct: 1,
        explanation: "Le vase d'expansion compense l'augmentation de volume de l'eau lors du chauffage (dilatation thermique). Il absorbe le surplus de volume pour éviter une surpression dans le circuit.",
        keyPoints: ["Compense dilatation eau", "Évite surpression", "Volume variable", "Obligatoire sur circuits fermés"]
    },
    {
        id: 'q275',
        category: "Systèmes Thermiques - Sécurité",
        difficulty: "hard",
        question: "À quelle pression est généralement tarée une soupape de sécurité sur une installation de chauffage domestique ?",
        answers: ["1,5 bar", "3 bars", "7 bars", "10 bars"],
        correct: 1,
        explanation: "Une soupape de sécurité sur une installation de chauffage domestique est généralement tarée à 3 bars (parfois 2,5 bars). Elle protège l'installation contre les surpressions dangereuses.",
        keyPoints: ["Tarage 3 bars (chauffage)", "7 bars (ECS)", "Protection surpression", "Évacue excès de pression"]
    },
    {
        id: 'q276',
        category: "Systèmes Thermiques - Sécurité",
        difficulty: "medium",
        question: "Qu'est-ce qu'un purgeur automatique ?",
        answers: ["Une vanne de vidange", "Un dispositif d'évacuation d'air automatique", "Un filtre à boues", "Une soupape de sécurité"],
        correct: 1,
        explanation: "Un purgeur automatique est un dispositif qui évacue automatiquement l'air présent dans le circuit de chauffage. Il se place aux points hauts de l'installation pour éliminer les bulles d'air qui nuisent à la circulation.",
        keyPoints: ["Évacuation air automatique", "Points hauts de l'installation", "Améliore circulation", "Évite bouchons d'air"]
    },
    {
        id: 'q277',
        category: "Systèmes Thermiques - Sécurité",
        difficulty: "easy",
        question: "Quel est le rôle d'un disconnecteur ?",
        answers: ["Réguler la température", "Empêcher le retour d'eau contaminée", "Filtrer les impuretés", "Réduire la pression"],
        correct: 1,
        explanation: "Un disconnecteur empêche le retour d'eau potentiellement contaminée dans le réseau d'eau potable. Il protège le réseau public contre les pollutions accidentelles provenant des installations privées.",
        keyPoints: ["Protection eau potable", "Empêche retour eau contaminée", "Obligatoire selon installations", "Zone de rupture de charge"]
    },
    {
        id: 'q278',
        category: "Systèmes Thermiques - Sécurité",
        difficulty: "medium",
        question: "Où doit être placé le vase d'expansion dans un circuit de chauffage ?",
        answers: ["Sur le départ chaudière", "Sur le retour chaudière avant circulateur", "À l'étage le plus haut", "Indifférent"],
        correct: 1,
        explanation: "Le vase d'expansion doit être placé sur le retour chaudière, avant le circulateur, en zone froide. Cela évite les variations de pression dues au pompage et assure un fonctionnement optimal.",
        keyPoints: ["Retour chaudière", "Avant circulateur", "Zone froide", "Optimal pour régulation"]
    },
    {
        id: 'q279',
        category: "Systèmes Thermiques - Sécurité",
        difficulty: "hard",
        question: "Quelle est la différence entre un vase d'expansion ouvert et fermé ?",
        answers: ["Le matériau de fabrication", "Le contact avec l'atmosphère", "La capacité", "La pression de service"],
        correct: 1,
        explanation: "Un vase ouvert est en contact avec l'atmosphère (pression atmosphérique), placé en hauteur, plus simple mais risque de corrosion. Un vase fermé est pressurisé, avec membrane, plus compact, obligatoire sur installations modernes.",
        keyPoints: ["Ouvert = contact atmosphère", "Fermé = pressurisé, membrane", "Fermé plus compact", "Fermé obligatoire installations modernes"]
    },
    {
        id: 'q280',
        category: "Systèmes Thermiques - Sécurité",
        difficulty: "medium",
        question: "Qu'est-ce qu'un clapet anti-retour ?",
        answers: ["Un dispositif de filtration", "Un dispositif empêchant l'inversion du flux", "Une soupape de sécurité", "Un régulateur de débit"],
        correct: 1,
        explanation: "Un clapet anti-retour est un dispositif qui autorise le passage de l'eau dans un seul sens et empêche le retour en sens inverse. Il est essentiel pour protéger certains équipements et éviter les inversions de flux.",
        keyPoints: ["Passage unidirectionnel", "Empêche retour", "Protection équipements", "Partie du groupe de sécurité"]
    },

    // ========== STAGE 3 - SYSTÈMES AVANCÉS (36 questions) ==========
    {
        id: 'q281',
        category: "Systèmes Avancés - Gaz",
        difficulty: "medium",
        question: "Pour un appareil à gaz non raccordé seul dans un logement construit avant 1969, quel est le volume minimal requis pour le local ?",
        answers: ["4 m³", "6 m³", "8 m³", "10 m³"],
        correct: 2,
        explanation: "Le volume minimal requis est de 8 m³ pour installer un appareil à gaz non raccordé seul dans un logement ancien. C'est une exigence de sécurité fondamentale.",
        keyPoints: ["Volume ≥ 8 m³", "Logements avant 1969", "Appareil non raccordé", "Ventilation obligatoire"]
    },
    {
        id: 'q282',
        category: "Systèmes Avancés - Gaz",
        difficulty: "easy",
        question: "Quelle est la section minimale de l'amenée d'air directe pour un appareil à gaz non raccordé ?",
        answers: ["50 cm²", "100 cm²", "150 cm²", "200 cm²"],
        correct: 1,
        explanation: "L'amenée d'air directe doit avoir une section minimale de 100 cm² pour assurer une combustion correcte et la sécurité de l'installation.",
        keyPoints: ["100 cm² minimum", "Amenée d'air directe", "Combustion sûre", "Norme obligatoire"]
    },
    {
        id: 'q283',
        category: "Systèmes Avancés - Gaz",
        difficulty: "medium",
        question: "À quelle hauteur minimale doit se situer la sortie d'air pour un appareil à gaz non raccordé ?",
        answers: ["1,20 m", "1,50 m", "1,80 m", "2,00 m"],
        correct: 2,
        explanation: "La sortie d'air doit être à minimum 1,80 m du sol pour éviter les courants d'air bas et assurer une évacuation correcte des produits de combustion.",
        keyPoints: ["Hauteur ≥ 1,80 m", "Sortie d'air haute", "Sécurité combustion", "Évacuation efficace"]
    },
    {
        id: 'q284',
        category: "Systèmes Avancés - Gaz",
        difficulty: "hard",
        question: "Dans un placard cuisine avec appareil gaz, quelle distance maximale entre l'appareil et la porte permet la dispense d'ouvrant et volume ?",
        answers: ["20 cm", "30 cm", "40 cm", "50 cm"],
        correct: 1,
        explanation: "Pour bénéficier de la dispense, la bande de sol entre l'appareil et la porte doit être ≤ 30 cm, ce qui empêche d'y séjourner porte fermée.",
        keyPoints: ["≤ 30 cm", "Dispense ouvrant/volume", "Placard cuisine", "Kitchenette"]
    },
    {
        id: 'q285',
        category: "Systèmes Avancés - Gaz",
        difficulty: "medium",
        question: "Pour deux locaux contigus considérés comme local unique, quelle surface minimale de baie les reliant est requise ?",
        answers: ["1 m²", "2 m²", "3 m²", "4 m²"],
        correct: 2,
        explanation: "Une baie de surface libre ≥ 3 m² permet de considérer deux locaux contigus comme un local unique pour l'installation d'appareils à gaz.",
        keyPoints: ["Baie ≥ 3 m²", "Locaux contigus", "Local unique", "V.A.S.O. ensemble"]
    },
    {
        id: 'q286',
        category: "Systèmes Avancés - Gaz",
        difficulty: "hard",
        question: "Pour une véranda, quelle relation mathématique permet de vérifier l'aération correcte de la cuisine adjacente ?",
        answers: ["Sc + Sv ≥ 0,16", "(Sc² x Sv²) / (Sc² + Sv²) ≥ 0,16", "Sc x Sv ≥ 0,16", "Sc² + Sv² ≥ 0,16"],
        correct: 1,
        explanation: "La formule (Sc² x Sv²) / (Sc² + Sv²) ≥ 0,16 permet de vérifier que les ouvrants cuisine/véranda assurent une aération suffisante.",
        keyPoints: ["Formule véranda", "Sc = surface cuisine", "Sv = surface véranda", "≥ 0,16 requis"]
    },
    {
        id: 'q287',
        category: "Systèmes Avancés - Gaz",
        difficulty: "easy",
        question: "Depuis le 1er janvier 2006, est-il autorisé d'installer un appareil de chauffage non étanche dans une salle de bain neuve ?",
        answers: ["Oui, sans restriction", "Oui, avec autorisation", "Non, interdit", "Oui, si volume > 10 m³"],
        correct: 2,
        explanation: "Il est strictement interdit en installation neuve de poser un appareil de chauffage ou ECS non étanche dans une salle de bain (arrêté du 5 octobre 2005).",
        keyPoints: ["Interdit depuis 2006", "Installation neuve", "Salle de bain/douche", "Étanche autorisée"]
    },
    {
        id: 'q288',
        category: "Systèmes Avancés - Gaz",
        difficulty: "medium",
        question: "Pour un appareil raccordé seul avec sécurité de flamme et contrôle du tirage, quelle dérogation est accordée ?",
        answers: ["Volume seul", "Ouvrant et volume", "Sortie d'air seule", "Amenée d'air seule"],
        correct: 1,
        explanation: "Un appareil raccordé avec sécurité de flamme (thermocouple/ionisation) et contrôle du tirage (spott) bénéficie d'une dérogation pour l'ouvrant et le volume.",
        keyPoints: ["Dérogation ouvrant/volume", "Sécurité flamme", "Contrôle tirage (spott)", "Appareil raccordé"]
    },
    {
        id: 'q289',
        category: "Systèmes Avancés - Gaz",
        difficulty: "hard",
        question: "En tirage naturel avec Pu = 28 kW, quelle valeur minimale doit atteindre la somme des modules d'amenée d'air ?",
        answers: ["90", "134", "173,6", "259"],
        correct: 2,
        explanation: "En tirage naturel, le calcul est 6,2 x Pu. Donc 6,2 x 28 = 173,6. La somme des modules doit être ≥ à cette valeur pour assurer la combustion.",
        keyPoints: ["Formule: 6,2 x Pu", "Tirage naturel", "Modules d'amenée d'air", "Ventilation suffisante"]
    },
    {
        id: 'q290',
        category: "Systèmes Avancés - Gaz",
        difficulty: "medium",
        question: "En VMC avec Pu = 18 kW, quelle formule permet de calculer le débit d'amenée d'air minimal requis ?",
        answers: ["6,2 x Pu", "3,1 x Pu", "4,5 x Pu", "2,0 x Pu"],
        correct: 1,
        explanation: "Pour une extraction mécanique (VMC), la formule est 3,1 x Pu. Donc 3,1 x 18 = 55,8. Cette formule réduite tient compte de l'assistance mécanique.",
        keyPoints: ["Formule VMC: 3,1 x Pu", "Extraction mécanique", "Débit réduit vs naturel", "M ≥ 45 minimum"]
    },

    // ===== SOLAIRE - CESI (13 questions) =====
    {
        id: 'q291',
        category: "Systèmes Avancés - Solaire",
        difficulty: "easy",
        question: "Que signifie l'acronyme C.E.S.I. ?",
        answers: ["Capteur d'Énergie Solaire Intégré", "Chauffe-Eau Solaire Individuel", "Circuit d'Eau Sanitaire Intelligent", "Centrale d'Énergie Solaire Installée"],
        correct: 1,
        explanation: "C.E.S.I. signifie Chauffe-Eau Solaire Individuel. C'est un système qui utilise l'énergie solaire pour produire de l'eau chaude sanitaire pour une habitation.",
        keyPoints: ["Chauffe-Eau Solaire", "Individuel", "ECS solaire", "Installation domestique"]
    },
    {
        id: 'q292',
        category: "Systèmes Avancés - Solaire",
        difficulty: "easy",
        question: "Combien de grandes familles de systèmes C.E.S.I. existe-t-il ?",
        answers: ["1 famille", "2 familles", "3 familles", "4 familles"],
        correct: 1,
        explanation: "Il existe deux grandes familles de systèmes CESI : THERMOSIPHON (circulation naturelle) et CIRCULATION FORCÉE (avec circulateur).",
        keyPoints: ["2 familles", "Thermosiphon", "Circulation forcée", "Principes différents"]
    },
    {
        id: 'q293',
        category: "Systèmes Avancés - Solaire",
        difficulty: "medium",
        question: "Quel est le principe de fonctionnement d'un CESI thermosiphon monobloc ?",
        answers: ["Circulateur électrique", "Hauteur d'eau naturelle", "Pression forcée", "Pompe solaire"],
        correct: 1,
        explanation: "Le thermosiphon utilise la différence de hauteur : le liquide chaud monte naturellement vers le ballon de stockage, le froid redescend vers les capteurs. Pas de régulation électrique.",
        keyPoints: ["Circulation naturelle", "Pas de circulateur", "Ballon sur toiture", "Simple et économique"]
    },
    {
        id: 'q294',
        category: "Systèmes Avancés - Solaire",
        difficulty: "easy",
        question: "Quels sont les 5 éléments successifs composant une installation C.E.S.I. ?",
        answers: ["Captage, Transfert, Échange & Stockage, Appoint, Distribution", "Captage, Pompe, Ballon, Chaudière, Robinet", "Panneau, Tuyau, Réservoir, Chauffage, Eau", "Soleil, Circuit, Eau, Gaz, Maison"],
        correct: 0,
        explanation: "Les 5 éléments sont : 1) Captage (capteur solaire), 2) Transfert (circuit caloporteur), 3) Échange & Stockage (échangeur + ballon), 4) Appoint (résistance/chaudière), 5) Distribution (ECS).",
        keyPoints: ["5 éléments", "Captage → Distribution", "Circuit complet", "Appoint nécessaire"]
    },
    {
        id: 'q295',
        category: "Systèmes Avancés - Solaire",
        difficulty: "hard",
        question: "Dans un CESI thermosiphon monobloc, où doit obligatoirement se situer le ballon de stockage par rapport au capteur ?",
        answers: ["En dessous du capteur", "Au même niveau", "Plus haut que le capteur", "N'importe où"],
        correct: 2,
        explanation: "Le stockage doit être directement sur la toiture avec le capteur, plus haut pour que le thermosiphon fonctionne. Il faut respecter une pente vers le stockage pour la circulation naturelle.",
        keyPoints: ["Ballon plus haut", "Sur toiture", "Pente vers stockage", "Circulation naturelle"]
    },
    {
        id: 'q296',
        category: "Systèmes Avancés - Solaire",
        difficulty: "medium",
        question: "Quelle est la principale différence entre un CESI thermosiphon et un CESI à circulation forcée ?",
        answers: ["La couleur des capteurs", "La présence d'un circulateur", "La taille du ballon", "Le type de toit"],
        correct: 1,
        explanation: "Le CESI à circulation forcée utilise un circulateur piloté pour provoquer la circulation du fluide caloporteur, contrairement au thermosiphon qui fonctionne naturellement.",
        keyPoints: ["Circulateur piloté", "Régulation électronique", "Ballon séparé possible", "Plus flexible"]
    },
    {
        id: 'q297',
        category: "Systèmes Avancés - Solaire",
        difficulty: "medium",
        question: "Dans un système CESI à éléments séparés, où peut se situer le ballon de stockage ?",
        answers: ["Uniquement sur le toit", "Uniquement au sol", "Plus haut ou plus bas que le capteur", "Obligatoirement en cave"],
        correct: 2,
        explanation: "Dans un système à éléments séparés, le ballon peut être installé plus haut OU plus bas que le capteur. Il peut s'intégrer dans une installation existante et nécessite une régulation.",
        keyPoints: ["Ballon séparé", "Position flexible", "Intégration existante", "Régulation nécessaire"]
    },
    {
        id: 'q298',
        category: "Systèmes Avancés - Solaire",
        difficulty: "hard",
        question: "Dans un CESI à circulation forcée auto-vidangeable, que se passe-t-il lors de l'arrêt du circulateur ?",
        answers: ["Le système explose", "Le fluide se refugie dans l'échangeur", "Les capteurs se vident automatiquement", "Rien de spécial"],
        correct: 2,
        explanation: "Quand le circulateur s'arrête, le fluide caloporteur se réfugie spontanément vers l'échangeur et les capteurs se vident automatiquement. Cela protège contre la surchauffe et le gel.",
        keyPoints: ["Auto-vidangeable", "Protection gel", "Protection surchauffe", "Capteurs vides à l'arrêt"]
    },
    {
        id: 'q299',
        category: "Systèmes Avancés - Solaire",
        difficulty: "medium",
        question: "Quelles sont les deux températures mesurées par la régulation d'un CESI à circulation forcée ?",
        answers: ["Tc (capteur) et Tb (ballon)", "T1 (entrée) et T2 (sortie)", "Ta (air) et Te (eau)", "Th (haut) et Tb (bas)"],
        correct: 0,
        explanation: "La régulation mesure Tc (température point haut du capteur) et Tb (température du ballon à l'échangeur). Elle calcule le ΔT pour piloter le circulateur.",
        keyPoints: ["Tc = température capteur", "Tb = température ballon", "Calcul ΔT = Tc - Tb", "Pilotage circulateur"]
    },
    {
        id: 'q300',
        category: "Systèmes Avancés - Solaire",
        difficulty: "hard",
        question: "À partir de quel différentiel de température (ΔT) le circulateur d'un CESI démarre-t-il généralement ?",
        answers: ["ΔT > 2°C (DD)", "ΔT > 5°C (DD)", "ΔT > 10°C (DD)", "ΔT > 15°C (DD)"],
        correct: 1,
        explanation: "Le circulateur démarre quand ΔT = Tc - Tb > DD (Différentiel de Démarrage), généralement réglé autour de 5-8°C. Il s'arrête quand ΔT < DA (Différentiel d'Arrêt).",
        keyPoints: ["DD = Différentiel Démarrage", "ΔT > DD → ON", "ΔT < DA → OFF", "Valeurs réglables"]
    },
    {
        id: 'q301',
        category: "Systèmes Avancés - Solaire",
        difficulty: "medium",
        question: "Quelle solution permet de fournir de l'ECS quand l'énergie solaire n'est pas suffisante ?",
        answers: ["L'appoint", "Le complément", "Le supplément", "Le renfort"],
        correct: 0,
        explanation: "L'APPOINT (résistance électrique, chaudière, PAC) prend le relais quand le capteur solaire ne peut fournir l'énergie nécessaire (nuit, hiver, météo défavorable).",
        keyPoints: ["Appoint indispensable", "Résistance électrique", "Chaudière ou PAC", "Complète le solaire"]
    },
    {
        id: 'q302',
        category: "Systèmes Avancés - Solaire",
        difficulty: "hard",
        question: "Dans un système CESI à circulation forcée sous pression, que se passe-t-il quand la température du ballon atteint 65°C ?",
        answers: ["Le système s'arrête", "Le circulateur refroidit la nuit", "Le capteur peut surchauffer", "L'appoint démarre"],
        correct: 2,
        explanation: "À 65°C dans le ballon, la régulation arrête le circulateur pour protéger l'ECS, mais le capteur reste exposé au soleil. Sa température peut continuer d'augmenter et le fluide caloporteur peut se vaporiser (protection nécessaire).",
        keyPoints: ["Arrêt à 65-85°C", "Capteur exposé", "Risque surchauffe", "Vaporisation possible"]
    },
    {
        id: 'q303',
        category: "Systèmes Avancés - Solaire",
        difficulty: "medium",
        question: "Quel type d'antigel DOIT être utilisé dans un circuit de CESI ?",
        answers: ["Éthylène glycol", "Mono propylène glycol (MPG)", "Alcool à 90°", "Eau pure"],
        correct: 1,
        explanation: "On DOIT utiliser un antigel alimentaire comme le mono propylène glycol (MPG), jamais d'éthylène glycol. L'antigel ne doit EN AUCUN CAS être jeté à l'égout.",
        keyPoints: ["MPG alimentaire", "Jamais éthylène glycol", "Protection gel/corrosion", "Ne pas jeter égout"]
    },

    // ===== SOLAIRE - Implantation (3 questions) =====
    {
        id: 'q304',
        category: "Systèmes Avancés - Solaire",
        difficulty: "easy",
        question: "Quels sont les types d'implantation possibles pour des capteurs solaires ? (Sélectionnez la réponse la plus complète)",
        answers: ["Toiture uniquement", "Toiture et terrasse", "Toiture, terrasse, auvent, sol, local secondaire", "Toiture intégrée uniquement"],
        correct: 2,
        explanation: "Les capteurs peuvent être implantés : en toiture (superposés ou intégrés), sur terrasse, en auvent (fixé à la façade), au sol, ou sur un local secondaire.",
        keyPoints: ["6 types d'implantation", "Toiture (superposé/intégré)", "Terrasse, sol, auvent", "Local secondaire"]
    },
    {
        id: 'q305',
        category: "Systèmes Avancés - Solaire",
        difficulty: "medium",
        question: "Pour une implantation optimale en toiture, comment doit être positionné le capteur solaire ?",
        answers: ["Capteur perpendiculaire à la toiture", "Capteur superposé par rapport à la toiture", "Capteur intégré à la toiture", "Les options B et C sont correctes"],
        correct: 3,
        explanation: "Le capteur peut être soit superposé (fixé au-dessus de la toiture existante), soit intégré (remplace une partie de la couverture). Les deux méthodes sont valables.",
        keyPoints: ["Superposé ou intégré", "Orientation sud idéale", "Inclinaison 30-45°", "Pas d'ombrage"]
    },
    {
        id: 'q306',
        category: "Systèmes Avancés - Solaire",
        difficulty: "hard",
        question: "Quel est le principal avantage d'une implantation en auvent (fixé à la façade) ?",
        answers: ["Meilleure performance", "Installation moins chère", "Pas besoin d'accès toiture", "Plus esthétique"],
        correct: 2,
        explanation: "L'implantation en auvent permet d'installer les capteurs sans accéder à la toiture, ce qui peut être pratique pour certaines configurations ou contraintes bâtimentaires.",
        keyPoints: ["Fixation façade", "Pas d'accès toiture", "Vertical possible", "Solution alternative"]
    },

    // ===== VENTILATION - VMC et systèmes (5 questions) =====
    {
        id: 'q307',
        category: "Systèmes Avancés - Ventilation",
        difficulty: "easy",
        question: "Que signifie l'acronyme V.M.C. ?",
        answers: ["Ventilation Mécanique Centralisée", "Ventilation Mécanique Contrôlée", "Vérification Mécanique Continue", "Volume Minimal de Circulation"],
        correct: 1,
        explanation: "V.M.C. signifie Ventilation Mécanique Contrôlée. C'est un système qui assure le renouvellement de l'air intérieur de manière automatique et continue.",
        keyPoints: ["Ventilation Mécanique", "Contrôlée", "Renouvellement d'air", "Automatique"]
    },
    {
        id: 'q308',
        category: "Systèmes Avancés - Ventilation",
        difficulty: "medium",
        question: "Quelle est la différence entre une VMC simple flux et une VMC double flux ?",
        answers: ["La puissance", "La récupération de chaleur", "La couleur", "Le prix"],
        correct: 1,
        explanation: "La VMC double flux récupère la chaleur de l'air extrait pour préchauffer l'air entrant, contrairement à la simple flux qui évacue directement l'air vicié sans récupération.",
        keyPoints: ["Simple flux: extraction", "Double flux: échange chaleur", "Économies d'énergie", "Échangeur thermique"]
    },
    {
        id: 'q309',
        category: "Systèmes Avancés - Ventilation",
        difficulty: "medium",
        question: "Dans une installation VMC, où sont généralement situées les bouches d'extraction ?",
        answers: ["Dans les pièces de vie (salon, chambres)", "Dans les pièces humides (cuisine, SDB, WC)", "Dans toutes les pièces", "Uniquement dans la cuisine"],
        correct: 1,
        explanation: "Les bouches d'extraction VMC sont placées dans les pièces humides (cuisine, salle de bain, WC) pour évacuer l'air vicié et l'humidité. L'air neuf entre dans les pièces sèches.",
        keyPoints: ["Extraction pièces humides", "Cuisine, SDB, WC", "Entrée air pièces sèches", "Balayage du logement"]
    },
    {
        id: 'q310',
        category: "Systèmes Avancés - Ventilation",
        difficulty: "hard",
        question: "Pourquoi est-il déconseillé d'installer un appareil à gaz raccordé à un conduit de fumée à tirage naturel avec une VMC ?",
        answers: ["C'est trop cher", "La VMC crée une dépression qui contrarie le tirage", "C'est interdit", "Ça consomme trop"],
        correct: 1,
        explanation: "La dépression créée par la VMC risque de contrarier le tirage naturel de l'appareil à gaz, pouvant causer un refoulement des fumées. Cette configuration est à proscrire pour la sécurité.",
        keyPoints: ["Dépression VMC", "Contrarie tirage naturel", "Risque refoulement", "Configuration à proscrire"]
    },
    {
        id: 'q311',
        category: "Systèmes Avancés - Ventilation",
        difficulty: "medium",
        question: "Qu'est-ce qu'une VMC hygro-réglable ?",
        answers: ["VMC qui mesure la température", "VMC qui ajuste le débit selon l'humidité", "VMC avec filtre HEPA", "VMC silencieuse"],
        correct: 1,
        explanation: "Une VMC hygro-réglable adapte automatiquement son débit de ventilation en fonction du taux d'humidité détecté, ce qui optimise la qualité d'air et les économies d'énergie.",
        keyPoints: ["Débit variable", "Détection humidité", "Économies d'énergie", "Confort optimisé"]
    },

    // ===== ORGANES DE PROTECTION (5 questions) =====
    {
        id: 'q312',
        category: "Systèmes Avancés - Protection",
        difficulty: "easy",
        question: "Quel est le rôle principal d'un disconnecteur dans une installation sanitaire ?",
        answers: ["Augmenter la pression", "Empêcher le retour d'eau polluée vers le réseau", "Filtrer l'eau", "Chauffer l'eau"],
        correct: 1,
        explanation: "Le disconnecteur protège le réseau public d'eau potable contre les retours d'eau potentiellement polluée provenant d'une installation privée (phénomène de siphonage).",
        keyPoints: ["Protection réseau public", "Anti-retour", "Eau potable", "Obligatoire selon usage"]
    },
    {
        id: 'q313',
        category: "Systèmes Avancés - Protection",
        difficulty: "medium",
        question: "Qu'est-ce que le TH (Titre Hydrotimétrique) de l'eau ?",
        answers: ["La température de l'eau", "La dureté de l'eau (teneur en calcaire)", "La pression de l'eau", "Le pH de l'eau"],
        correct: 1,
        explanation: "Le TH (Titre Hydrotimétrique) mesure la dureté de l'eau, c'est-à-dire sa teneur en ions calcium et magnésium (calcaire). Il s'exprime en degrés français (°f).",
        keyPoints: ["TH = dureté", "Teneur calcaire", "°f (degrés français)", "Cause entartrage"]
    },
    {
        id: 'q314',
        category: "Systèmes Avancés - Protection",
        difficulty: "medium",
        question: "À partir de quelle valeur de TH une eau est-elle considérée comme dure (nécessitant un traitement) ?",
        answers: ["TH > 10°f", "TH > 15°f", "TH > 20°f", "TH > 30°f"],
        correct: 2,
        explanation: "Une eau est considérée comme dure au-delà de 20°f. Elle nécessite généralement un traitement (adoucisseur) pour protéger les installations thermiques de l'entartrage.",
        keyPoints: ["TH > 20°f = eau dure", "Risque entartrage", "Traitement recommandé", "Protection installation"]
    },
    {
        id: 'q315',
        category: "Systèmes Avancés - Protection",
        difficulty: "hard",
        question: "Dans une installation de chauffage, quel organe protège contre les surpressions dues à la dilatation de l'eau ?",
        answers: ["Le disconnecteur", "Le groupe de sécurité", "Le vase d'expansion", "Le clapet anti-retour"],
        correct: 2,
        explanation: "Le vase d'expansion (ou vase d'expansion fermé) compense l'augmentation de volume de l'eau lors de la chauffe, évitant ainsi les surpressions dangereuses dans le circuit.",
        keyPoints: ["Vase d'expansion", "Compensation dilatation", "Protection surpression", "Circuit fermé chauffage"]
    },
    {
        id: 'q316',
        category: "Systèmes Avancés - Protection",
        difficulty: "medium",
        question: "Quel est le rôle d'un groupe de sécurité sur un chauffe-eau ?",
        answers: ["Filtrer l'eau", "Protéger contre surpression et permettre la vidange", "Adoucir l'eau", "Réchauffer l'eau"],
        correct: 1,
        explanation: "Le groupe de sécurité protège le chauffe-eau contre les surpressions (soupape taré à 7 bars), permet la vidange de l'appareil et l'évacuation de l'eau lors de la dilatation.",
        keyPoints: ["Protection surpression", "Soupape 7 bars", "Vidange possible", "Évacuation dilatation"]
    },

    // ========== STAGE 4 - CHAUFFAGE (35 questions) ==========
    {
        id: 'q321',
        category: "Chauffage - Circuits",
        difficulty: "easy",
        question: "Quelle est la pente recommandée pour une tuyauterie de chauffage ?",
        answers: ["0,5 à 1 mm/m", "1 à 2 mm/m", "3 à 5 mm/m", "5 à 10 mm/m"],
        correct: 1,
        explanation: "La pente d'une installation de chauffage est de 1 à 2 millimètres par mètre pour permettre l'évacuation de l'air vers les points hauts.",
        keyPoints: ["Pente : 1 à 2 mm/m", "Évacuation de l'air", "Vers les points hauts", "Indépendante du sens du fluide"]
    },
    {
        id: 'q322',
        category: "Chauffage - Circuits",
        difficulty: "medium",
        question: "Quel est le rôle principal du circulateur dans une installation de chauffage ?",
        answers: ["Chauffer l'eau", "Faire circuler l'eau dans le réseau", "Réguler la température", "Purger l'air"],
        correct: 1,
        explanation: "Le circulateur sert à donner de la force motrice à l'eau pour qu'elle puisse irriguer tous les corps de chauffe (radiateurs) du réseau.",
        keyPoints: ["Force motrice", "Circulation de l'eau", "Irrigation des émetteurs", "Position sur l'ALLER"]
    },
    {
        id: 'q323',
        category: "Chauffage - Circuits",
        difficulty: "medium",
        question: "Dans quel mode de distribution l'eau traverse-t-elle successivement tous les radiateurs ?",
        answers: ["Bi-tubes", "Mono-tube", "Mono-tube dérivation", "Collecteur"],
        correct: 1,
        explanation: "En distribution mono-tube, l'eau passe successivement dans chaque radiateur. Ce système ne permet pas de robinets sur les radiateurs.",
        keyPoints: ["Circuit série", "Pas de robinets", "Un seul tuyau", "Température décroissante"]
    },
    {
        id: 'q324',
        category: "Chauffage - Circuits",
        difficulty: "hard",
        question: "Quelle est la formule pour calculer le débit Q d'un circulateur ?",
        answers: ["Q = P / (Δt × Cm)", "Q = P × Δt × Cm", "Q = Δt / (P × Cm)", "Q = Cm / (P × Δt)"],
        correct: 0,
        explanation: "Le débit Q = P / (Δt × Cm) où P = puissance en kW, Δt = écart de température en Kelvin, Cm = chaleur massique (1,163 kWh/t.K).",
        keyPoints: ["Q en t/h (tours par heure)", "P en kW", "Δt en Kelvin", "Cm = 1,163 kWh/t.K"]
    },
    {
        id: 'q325',
        category: "Chauffage - Circuits",
        difficulty: "medium",
        question: "Si l'ALLER d'un radiateur est raccordé vers le bas, que faut-il obligatoirement installer ?",
        answers: ["Un robinet thermostatique", "Un purgeur", "Une vanne de réglage", "Un clapet anti-retour"],
        correct: 1,
        explanation: "Si l'ALLER d'un radiateur est raccordé vers le bas, un purgeur est obligatoire car l'air ne peut pas s'évacuer naturellement vers le haut.",
        keyPoints: ["Raccordement par le bas", "Purgeur obligatoire", "Air emprisonné", "Évacuation impossible"]
    },

    // RADIATEURS (5 questions)
    {
        id: 'q326',
        category: "Chauffage - Radiateurs",
        difficulty: "easy",
        question: "Quel matériau offre le meilleur échange thermique pour un générateur de chaleur ?",
        answers: ["Acier", "Inox", "Fonte", "Cuivre"],
        correct: 2,
        explanation: "La fonte offre un très bon échange entre la flamme et le fluide, avec un rendement élevé. C'est le matériau idéal pour les générateurs.",
        keyPoints: ["Fonte = meilleur échange", "Rendement élevé", "Résistance thermique", "Durabilité"]
    },
    {
        id: 'q327',
        category: "Chauffage - Radiateurs",
        difficulty: "medium",
        question: "Comment désigne-t-on un radiateur en fonte de 12 éléments, 3 branches et 700 mm de hauteur ?",
        answers: ["12-3-700", "12 S 3 700", "700-12-3", "S 700 12 3"],
        correct: 1,
        explanation: "La désignation fournisseur est : 12 S 3 700 (12 éléments, S pour le nom du constructeur, 3 branches, 700 mm de hauteur).",
        keyPoints: ["12 éléments", "S = constructeur", "3 branches", "700 mm hauteur"]
    },
    {
        id: 'q328',
        category: "Chauffage - Radiateurs",
        difficulty: "medium",
        question: "Quelle est la formule pour calculer le Δt (Delta T) d'un radiateur ?",
        answers: ["Δt = T°moyenne - T°ambiante", "Δt = T°aller - T°retour", "Δt = T°ambiante - T°moyenne", "Δt = (T°aller + T°ambiante) / 2"],
        correct: 0,
        explanation: "Le Δt = Température MOYENNE - Température AMBIANTE, où T°moyenne = (T°aller + T°retour) / 2. La température ambiante de référence est 20°C.",
        keyPoints: ["Δt = Tmoy - Tamb", "Tmoy = (Taller + Tretour)/2", "Tambiante = 20°C", "Nécessaire au choix du radiateur"]
    },
    {
        id: 'q329',
        category: "Chauffage - Radiateurs",
        difficulty: "easy",
        question: "Quels sont les trois modes de transmission de la chaleur ?",
        answers: ["Convection, conduction, rayonnement", "Radiation, circulation, émission", "Absorption, diffusion, réflexion", "Chauffage, refroidissement, ventilation"],
        correct: 0,
        explanation: "Les trois modes de transmission sont : la convection (circulation d'air), la conduction (contact), et le rayonnement (ondes électromagnétiques).",
        keyPoints: ["Convection : circulation air", "Conduction : contact", "Rayonnement : ondes", "Du chaud vers le froid"]
    },
    {
        id: 'q330',
        category: "Chauffage - Radiateurs",
        difficulty: "hard",
        question: "Avec un circuit 80°C aller / 60°C retour dans une pièce à 20°C, quel est le Δt ?",
        answers: ["40°C", "50°C", "60°C", "70°C"],
        correct: 1,
        explanation: "Tmoyenne = (80+60)/2 = 70°C. Donc Δt = 70-20 = 50°C. Ce Δt est nécessaire pour choisir la puissance du radiateur dans le catalogue.",
        keyPoints: ["Tmoy = (80+60)/2 = 70°C", "Δt = 70-20 = 50°C", "Base catalogue", "T ambiante = 20°C"]
    },

    // CIRCULATEURS (5 questions)
    {
        id: 'q331',
        category: "Chauffage - Circulateurs",
        difficulty: "easy",
        question: "Sur quelle partie du circuit le circulateur doit-il être positionné ?",
        answers: ["Sur le retour", "Sur l'aller", "Indifférent", "Avant le vase d'expansion"],
        correct: 1,
        explanation: "Le circulateur se positionne sur l'ALLER d'une installation de chauffage, après le générateur de chaleur.",
        keyPoints: ["Position sur ALLER", "Après générateur", "Force motrice", "Irrigation du réseau"]
    },
    {
        id: 'q332',
        category: "Chauffage - Circulateurs",
        difficulty: "medium",
        question: "Qu'est-ce que la hauteur manométrique (Hm) d'un circulateur ?",
        answers: ["La hauteur du bâtiment", "La différence de pression entre aspiration et refoulement", "La pression maximale", "Le débit maximal"],
        correct: 1,
        explanation: "La hauteur manométrique (Hm) est la différence de pression entre l'aspiration et le refoulement de la pompe, exprimée en mCE (mètres de colonne d'eau).",
        keyPoints: ["Hm en mCE", "Différence de pression", "Aspiration vs refoulement", "Pertes de charge du réseau"]
    },
    {
        id: 'q333',
        category: "Chauffage - Circulateurs",
        difficulty: "hard",
        question: "Que signifie le NPSH d'un circulateur ?",
        answers: ["Niveau de puissance sonore horaire", "Net Positive Suction Head - charge nette absolue minimum", "Nombre de passages par seconde haute vitesse", "Nouvelle pompe sanitaire hydraulique"],
        correct: 1,
        explanation: "Le NPSH (Net Positive Suction Head) indique la charge nette absolue minimum à l'entrée de la pompe pour éviter la cavitation (formation de bulles de vapeur).",
        keyPoints: ["Charge minimum entrée", "Évite cavitation", "Varie selon débit", "CMA = 10,33 - NPSH"]
    },
    {
        id: 'q334',
        category: "Chauffage - Circulateurs",
        difficulty: "medium",
        question: "Quelles sont les conséquences d'un circulateur sous-dimensionné ?",
        answers: ["Tous les radiateurs ne chauffent pas", "Les débits et vitesses sont élevés", "Le circulateur engendre des bruits", "La consommation électrique augmente"],
        correct: 0,
        explanation: "Un circulateur sous-dimensionné ne permet pas d'irriguer correctement tous les radiateurs. Les radiateurs les plus éloignés ne chaufferont pas.",
        keyPoints: ["Radiateurs non irrigués", "Les plus loin ne chauffent pas", "Débit insuffisant", "Pression insuffisante"]
    },
    {
        id: 'q335',
        category: "Chauffage - Circulateurs",
        difficulty: "easy",
        question: "Quel est le symbole normalisé d'un circulateur sur un schéma ?",
        answers: ["Un cercle avec une flèche", "Un triangle dans un cercle avec le sens du fluide", "Un carré avec une pompe", "Une étoile"],
        correct: 1,
        explanation: "Le circulateur est représenté par un triangle noir dans un cercle, avec une flèche indiquant le sens de circulation du fluide.",
        keyPoints: ["Triangle dans cercle", "Flèche de sens", "Symbole normalisé", "Sens du fluide"]
    },

    // GÉNÉRATEURS (5 questions)
    {
        id: 'q336',
        category: "Chauffage - Générateurs",
        difficulty: "easy",
        question: "Quel est le rôle principal d'un générateur de chaleur ?",
        answers: ["Distribuer la chaleur", "Transformer une énergie en chaleur pour un fluide caloporteur", "Réguler la température", "Purger le circuit"],
        correct: 1,
        explanation: "Le générateur transforme une énergie (combustible) en chaleur et la transmet à un fluide caloporteur (eau) qui circule dans le réseau.",
        keyPoints: ["Transformation énergie", "Vers fluide caloporteur", "Combustible → chaleur", "Eau chauffée"]
    },
    {
        id: 'q337',
        category: "Chauffage - Générateurs",
        difficulty: "medium",
        question: "Quelle est la différence entre une chaudière simple service et double service ?",
        answers: ["La puissance", "Simple = chauffage / Double = chauffage + ECS", "Le nombre de brûleurs", "La pression de service"],
        correct: 1,
        explanation: "Une chaudière simple service produit uniquement du chauffage. Une chaudière double service (ou mixte) produit le chauffage ET l'eau chaude sanitaire (ECS).",
        keyPoints: ["Simple = chauffage seul", "Double = chauffage + ECS", "Système intégré", "ECS prioritaire"]
    },
    {
        id: 'q338',
        category: "Chauffage - Générateurs",
        difficulty: "medium",
        question: "Quelle est la différence entre un foyer atmosphérique et pressurisé ?",
        answers: ["La température de combustion", "Atmosphérique = tirage naturel / Pressurisé = air pulsé par brûleur", "La pression de service", "Le type de combustible"],
        correct: 1,
        explanation: "Le foyer atmosphérique fonctionne par tirage naturel (dépression de la cheminée). Le foyer pressurisé utilise un brûleur à air pulsé pour un meilleur rendement.",
        keyPoints: ["Atmosphérique = tirage naturel", "Pressurisé = air pulsé", "Brûleur forcé", "Meilleur rendement"]
    },
    {
        id: 'q339',
        category: "Chauffage - Générateurs",
        difficulty: "hard",
        question: "Quel rendement peut atteindre une chaudière à condensation (sur PCI) ?",
        answers: ["70-80%", "80-90%", "90-100%", "100-110%"],
        correct: 3,
        explanation: "Une chaudière à condensation peut atteindre 100 à 110% de rendement sur PCI grâce à la récupération de la chaleur latente de condensation des fumées.",
        keyPoints: ["Rendement > 100% sur PCI", "Condensation vapeur d'eau", "Récupération chaleur latente", "Haute performance énergétique"]
    },
    {
        id: 'q340',
        category: "Chauffage - Générateurs",
        difficulty: "easy",
        question: "Quels sont les principaux matériaux utilisés pour les générateurs ?",
        answers: ["Plastique et aluminium", "Fonte, acier, inox, cuivre", "Bois et céramique", "Zinc et plomb"],
        correct: 1,
        explanation: "Les générateurs sont fabriqués en fonte (excellent échange thermique), acier (prix attractif), inox (anti-corrosion), ou cuivre (excellent échange mais cher).",
        keyPoints: ["Fonte = bon échange", "Acier = économique", "Inox = anti-corrosion", "Cuivre = cher, risque électrolyse"]
    },

    // RÉGULATION (6 questions)
    {
        id: 'q341',
        category: "Chauffage - Régulation",
        difficulty: "easy",
        question: "Quels sont les trois mots clés qui résument le rôle de la régulation ?",
        answers: ["Chauffer, distribuer, économiser", "Mesurer, comparer, corriger", "Allumer, éteindre, régler", "Calculer, installer, maintenir"],
        correct: 1,
        explanation: "L'objectif de la régulation est de mesurer une grandeur, la comparer à la consigne, puis corriger automatiquement l'écart.",
        keyPoints: ["Mesurer la grandeur", "Comparer à consigne", "Corriger l'écart", "Automatique"]
    },
    {
        id: 'q342',
        category: "Chauffage - Régulation",
        difficulty: "medium",
        question: "Qu'est-ce qu'une boucle fermée en régulation ?",
        answers: ["Un circuit sans purge", "La mesure est la grandeur à régler", "Un circuit sans vase d'expansion", "Une régulation manuelle"],
        correct: 1,
        explanation: "Une boucle fermée (ou longue/lente) mesure la grandeur à régler elle-même (température ambiante). Elle prend en compte les apports internes.",
        keyPoints: ["Mesure = grandeur à régler", "Température ambiante", "Apports internes pris en compte", "Boucle longue/lente"]
    },
    {
        id: 'q343',
        category: "Chauffage - Régulation",
        difficulty: "medium",
        question: "Qu'est-ce qu'une boucle ouverte (ou loi d'eau) en régulation ?",
        answers: ["Un circuit avec fuite", "La mesure n'est pas la grandeur à régler", "Un système sans thermostat", "Une régulation mécanique"],
        correct: 1,
        explanation: "Une boucle ouverte mesure la température extérieure pour déterminer la température de départ d'eau. C'est une régulation rapide mais qui ne prend pas en compte les apports internes.",
        keyPoints: ["Mesure ≠ grandeur à régler", "Température extérieure", "Loi d'eau (courbe)", "Boucle courte/rapide"]
    },
    {
        id: 'q344',
        category: "Chauffage - Régulation",
        difficulty: "hard",
        question: "Avec une loi d'eau de pente 2, si la température extérieure baisse de 1°C, de combien augmente la température de départ ?",
        answers: ["1°C", "2°C", "3°C", "4°C"],
        correct: 1,
        explanation: "La pente 2 signifie : pour 1°C de baisse extérieure, la température de départ augmente de 2°C. Exemple : ext -10°C → départ 80°C / ext 20°C → départ 20°C.",
        keyPoints: ["Pente = coefficient", "Pente 2 = 2°C départ / 1°C ext", "Courbe de chauffe", "Adapte température départ"]
    },
    {
        id: 'q345',
        category: "Chauffage - Régulation",
        difficulty: "medium",
        question: "Qu'est-ce que le différentiel statique (Sd) d'un thermostat ?",
        answers: ["La différence entre ouvert et fermé", "L'écart entre enclenchement et déclenchement", "La pression du système", "Le temps de réponse"],
        correct: 1,
        explanation: "Le Sd est l'écart entre l'enclenchement et le déclenchement de l'organe de réglage. Exemple : sur un thermostat d'ambiance, Sd = 0,5°C.",
        keyPoints: ["Écart ON/OFF", "Sd = 0,5°C thermostat", "Différentiel statique", "Évite cycles courts"]
    },
    {
        id: 'q346',
        category: "Chauffage - Régulation",
        difficulty: "hard",
        question: "Dans une régulation PID, que signifie 'I' (action intégrale) ?",
        answers: ["Vitesse de correction proportionnelle à l'écart", "Vitesse proportionnelle au temps passé en écart", "Vitesse de variation de l'écart", "Vitesse constante"],
        correct: 1,
        explanation: "L'action intégrale (I) : la vitesse pour atteindre la consigne est proportionnelle à l'écart mesuré multiplié par le temps. Plus l'écart dure, plus la correction est rapide.",
        keyPoints: ["Proportionnel au temps d'écart", "Rattrape écart permanent", "Élimine l'erreur statique", "Lent au démarrage"]
    },

    // REMPLISSAGE ET PURGE (5 questions)
    {
        id: 'q347',
        category: "Chauffage - Remplissage/Purge",
        difficulty: "easy",
        question: "Quelle est la pression d'essai recommandée pour un réseau de chauffage ?",
        answers: ["1 bar", "1,5 bars", "Le double de la pression statique", "10 bars"],
        correct: 2,
        explanation: "La pression d'essai correspond généralement au double de la pression statique moyenne en service. Une mise en pression de 12 heures est suffisante.",
        keyPoints: ["Double pression service", "Vérifier étanchéité", "12 heures minimum", "Avant mise en service"]
    },
    {
        id: 'q348',
        category: "Chauffage - Remplissage/Purge",
        difficulty: "medium",
        question: "Pourquoi faut-il purger l'air d'une installation de chauffage ?",
        answers: ["Pour réduire la consommation", "Pour éviter la corrosion et les poches de gaz compressibles", "Pour augmenter la température", "Pour nettoyer le circuit"],
        correct: 1,
        explanation: "L'air forme des poches de gaz compressibles qui empêchent la circulation. L'oxygène provoque aussi la corrosion. L'hydrogène se forme par réaction électrochimique (fer, aluminium, cuivre).",
        keyPoints: ["Poches de gaz", "Bloque circulation", "Corrosion", "Hydrogène formé"]
    },
    {
        id: 'q349',
        category: "Chauffage - Remplissage/Purge",
        difficulty: "medium",
        question: "À quelle vitesse l'eau doit-elle circuler dans une bouteille de purge pour favoriser la séparation du gaz ?",
        answers: ["0,01 m/s", "0,1 m/s", "1 m/s", "10 m/s"],
        correct: 1,
        explanation: "Pour favoriser la séparation du gaz, la vitesse de l'eau doit être réduite à environ 0,1 m/s dans les bouteilles de purge et séparateurs d'air/eau.",
        keyPoints: ["Vitesse réduite 0,1 m/s", "Séparation par gravité", "Bouteille casse-pression", "Gaz monte naturellement"]
    },
    {
        id: 'q350',
        category: "Chauffage - Remplissage/Purge",
        difficulty: "easy",
        question: "Quel appareil permet d'éliminer automatiquement l'air d'une installation sans intervention manuelle ?",
        answers: ["Robinet de purge manuel", "Purgeur automatique", "Soupape de sécurité", "Disconnecteur"],
        correct: 1,
        explanation: "Le purgeur automatique élimine automatiquement les gaz se trouvant dans l'installation sans intervention manuelle. Le débit de purge n'est pas élevé.",
        keyPoints: ["Élimination automatique", "Sans intervention", "Débit faible", "Points hauts installation"]
    },
    {
        id: 'q351',
        category: "Chauffage - Remplissage/Purge",
        difficulty: "hard",
        question: "Quel est l'avantage principal d'un séparateur d'air/eau par rapport à un purgeur simple ?",
        answers: ["Plus esthétique", "Utilise la force centrifuge pour séparer les gaz", "Moins cher", "Plus petit"],
        correct: 1,
        explanation: "Les séparateurs d'air/eau utilisent la force centrifuge pour dissocier les gaz de l'eau. Ils sont placés à l'origine de l'installation, en partie haute, avec un purgeur automatique.",
        keyPoints: ["Force centrifuge", "Séparation efficace", "Partie haute installation", "Avec purgeur automatique"]
    },

    // ENVIRONNEMENT & ÉNERGIE (4 questions)
    {
        id: 'q352',
        category: "Chauffage - Environnement",
        difficulty: "medium",
        question: "Quels sont les principaux gaz à effet de serre (GES) visés par le protocole de Kyoto ?",
        answers: ["O2, N2, Ar", "CO2, CH4, N2O, HFC, PFC, SF6", "H2O, CO, NO", "He, Ne, Kr"],
        correct: 1,
        explanation: "Les 6 gaz visés sont : le dioxyde de carbone (CO2, 63% des GES), le méthane (CH4, 18%), le protoxyde d'azote (N2O, 7%), et les gaz fluorés (HFC, PFC, SF6).",
        keyPoints: ["CO2 = 63% des GES", "CH4 = 18% (élevage)", "N2O = 7% (engrais)", "Gaz fluorés = industrie"]
    },
    {
        id: 'q353',
        category: "Chauffage - Environnement",
        difficulty: "easy",
        question: "Quelle source d'énergie émet le plus de CO2 par type d'énergie (en équivalent TEP) ?",
        answers: ["Gaz naturel", "Diesel/Fuel", "Charbon", "Nucléaire"],
        correct: 2,
        explanation: "Le charbon émet le plus de CO2 (1123 kg eq. carbone par TEP), suivi du diesel/fuel (856), puis du gaz naturel (651). Le nucléaire émet très peu (19).",
        keyPoints: ["Charbon = 1123 kg/TEP", "Diesel = 856 kg/TEP", "Gaz = 651 kg/TEP", "Nucléaire = 19 kg/TEP"]
    },
    {
        id: 'q354',
        category: "Chauffage - Environnement",
        difficulty: "medium",
        question: "Quel est le rôle de l'effet de serre naturel pour la Terre ?",
        answers: ["Détruire l'ozone", "Maintenir une température moyenne de +15°C au lieu de -18°C", "Créer des tempêtes", "Faire fondre les glaces"],
        correct: 1,
        explanation: "L'effet de serre naturel est essentiel : il permet d'avoir une température moyenne de +15°C sur Terre au lieu de -18°C. Le problème est l'excès de GES d'origine humaine.",
        keyPoints: ["Phénomène naturel essentiel", "+15°C au lieu de -18°C", "Retient chaleur solaire", "Excès humain = problème"]
    },
    {
        id: 'q355',
        category: "Chauffage - Environnement",
        difficulty: "hard",
        question: "Qu'est-ce que la TEP (Tonne d'Équivalent Pétrole) ?",
        answers: ["Une unité de pression", "Une unité permettant de comparer les combustibles", "Une taxe environnementale", "Un type de chaudière"],
        correct: 1,
        explanation: "La TEP (Tonne d'Équivalent Pétrole) est une unité dans un bilan énergétique permettant de comparer des quantités de combustibles solides, liquides, gazeux et d'électricité.",
        keyPoints: ["Unité bilan énergétique", "Compare combustibles", "Référence = pétrole", "Quantités comparables"]
    },

    // ========================================
    // ✨ NOUVELLES QUESTIONS - SYMBOLES TECHNIQUES (59 questions)
    // ========================================

    // ========== SYMBOLES SANITAIRES (11 questions) ==========
    {
        id: 'sym001',
        category: "Symboles - Sanitaire",
        difficulty: "easy",
        question: "Quel équipement sanitaire est représenté par le symbole montrant un rectangle avec un égouttoir à droite ?",
        answers: ["Évier 1 bac + 1 égouttoir à droite", "Évier 2 bacs", "Lavabo simple", "Plan de travail"],
        correct: 0,
        explanation: "Ce symbole représente un évier avec 1 bac et 1 égouttoir positionné à droite.",
        keyPoints: ["Symbole sanitaire", "Évier", "Égouttoir", "Plan de cuisine"]
    },
    {
        id: 'sym002',
        category: "Symboles - Sanitaire",
        difficulty: "easy",
        question: "Quel équipement sanitaire comporte 2 bacs et un égouttoir à gauche ?",
        answers: ["Évier 2 bacs + 1 égouttoir à gauche", "Double lavabo", "Évier 1 bac", "Bac à laver"],
        correct: 0,
        explanation: "Ce symbole représente un évier avec 2 bacs et 1 égouttoir positionné à gauche.",
        keyPoints: ["Symbole sanitaire", "Évier double", "Égouttoir gauche", "Installation cuisine"]
    },
    {
        id: 'sym003',
        category: "Symboles - Sanitaire",
        difficulty: "easy",
        question: "Le symbole ovale allongé sur un plan représente quel équipement ?",
        answers: ["Baignoire", "Receveur de douche", "Lavabo", "Bac à douche"],
        correct: 0,
        explanation: "Ce symbole ovale allongé représente une baignoire. Il permet de situer le vidage et la robinetterie.",
        keyPoints: ["Symbole sanitaire", "Baignoire", "Salle de bain", "Vidage"]
    },
    {
        id: 'sym004',
        category: "Symboles - Sanitaire",
        difficulty: "easy",
        question: "Le symbole carré avec indication de la bonde représente quel équipement ?",
        answers: ["Receveur de douche", "Baignoire", "Bac de lavage", "Évier"],
        correct: 0,
        explanation: "Ce symbole carré avec indication de la bonde représente un receveur de douche. Attention à la position de la bonde !",
        keyPoints: ["Symbole sanitaire", "Receveur douche", "Position bonde", "Salle de bain"]
    },
    {
        id: 'sym005',
        category: "Symboles - Sanitaire",
        difficulty: "easy",
        question: "Quel équipement est représenté par un symbole en forme de demi-cercle ?",
        answers: ["Lavabo", "Vasque sur meuble", "Évier", "Lave-mains"],
        correct: 0,
        explanation: "Ce symbole en forme de demi-cercle représente un lavabo simple.",
        keyPoints: ["Symbole sanitaire", "Lavabo", "Salle de bain", "Point d'eau"]
    },
    {
        id: 'sym006',
        category: "Symboles - Sanitaire",
        difficulty: "easy",
        question: "Le symbole circulaire dans un rectangle représente quel équipement ?",
        answers: ["Vasque sur meuble", "Lavabo suspendu", "Lave-mains", "Évier encastré"],
        correct: 0,
        explanation: "Ce symbole circulaire dans un rectangle représente une vasque (lavabo rond) posée sur un meuble.",
        keyPoints: ["Symbole sanitaire", "Vasque", "Meuble", "Encastrement"]
    },
    {
        id: 'sym007',
        category: "Symboles - Sanitaire",
        difficulty: "easy",
        question: "Quel équipement sanitaire utilise le symbole en forme de cuvette avec réservoir ?",
        answers: ["WC (Water Closet)", "Bidet", "Urinoir", "Cuvette de lavage"],
        correct: 0,
        explanation: "Ce symbole représente un WC (toilettes). La forme indique la cuvette et le réservoir.",
        keyPoints: ["Symbole sanitaire", "WC", "Toilettes", "Évacuation EU"]
    },
    {
        id: 'sym008',
        category: "Symboles - Sanitaire",
        difficulty: "easy",
        question: "Quel est le symbole d'un bidet ?",
        answers: ["Bidet", "WC", "Lave-pieds", "Cuvette"],
        correct: 0,
        explanation: "Ce symbole représente un bidet, appareil sanitaire de lavage intime.",
        keyPoints: ["Symbole sanitaire", "Bidet", "Obsolète", "Eau chaude/froide"]
    },
    {
        id: 'sym009',
        category: "Symboles - Sanitaire",
        difficulty: "medium",
        question: "Le symbole triangulaire noir sur un plan représente quoi ?",
        answers: ["Cheminée", "Conduit de ventilation", "Sortie VMC", "Gaine technique"],
        correct: 0,
        explanation: "Ce symbole triangulaire noir représente une cheminée sur un plan architectural.",
        keyPoints: ["Symbole", "Cheminée", "Conduit fumées", "Chauffage bois"]
    },
    {
        id: 'sym010',
        category: "Symboles - Sanitaire",
        difficulty: "medium",
        question: "Le symbole avec 4 cercles représente quel équipement de cuisine ?",
        answers: ["Gazinière (plaque de cuisson gaz)", "Four électrique", "Hotte aspirante", "Plaque induction"],
        correct: 0,
        explanation: "Ce symbole avec 4 cercles représente une gazinière (plaque de cuisson au gaz) avec 4 feux.",
        keyPoints: ["Symbole", "Gazinière", "Gaz de ville", "Cuisine"]
    },
    {
        id: 'sym011',
        category: "Symboles - Sanitaire",
        difficulty: "easy",
        question: "Le symbole avec une flèche vers le bas représente quoi en général ?",
        answers: ["Générateur de chaleur", "Chaudière murale", "Ballon ECS", "Radiateur"],
        correct: 0,
        explanation: "Ce symbole avec une flèche vers le bas représente un générateur de chaleur en général (chaudière, etc.).",
        keyPoints: ["Symbole chauffage", "Générateur", "Production chaleur", "Chaudière"]
    },

    // ========== SYMBOLES CHAUFFAGE (15 questions) ==========
    {
        id: 'sym012',
        category: "Symboles - Chauffage",
        difficulty: "medium",
        question: "Quel symbole représente une chaudière à combustible liquide ou gazeux ?",
        answers: ["Rectangle avec symbole flamme", "Cercle simple", "Carré", "Triangle"],
        correct: 0,
        explanation: "Ce symbole représente une chaudière fonctionnant au fioul, gaz ou autre combustible liquide/gazeux.",
        keyPoints: ["Symbole chauffage", "Chaudière", "Combustible", "Fioul/Gaz"]
    },
    {
        id: 'sym013',
        category: "Symboles - Chauffage",
        difficulty: "medium",
        question: "Le symbole en rectangle allongé avec flèches représente quel type d'échangeur ?",
        answers: ["Échangeur de chaleur tubulaire", "Radiateur", "Batterie chaude", "Condenseur"],
        correct: 0,
        explanation: "Ce symbole représente un échangeur de chaleur de type tubulaire, utilisé pour transférer la chaleur entre deux fluides.",
        keyPoints: ["Symbole chauffage", "Échangeur", "Transfert thermique", "Tubulaire"]
    },
    {
        id: 'sym014',
        category: "Symboles - Chauffage",
        difficulty: "medium",
        question: "Le symbole en losange représente quel type d'échangeur ?",
        answers: ["Échangeur de chaleur à plaques", "Radiateur panneau", "Batterie froide", "Condenseur"],
        correct: 0,
        explanation: "Ce symbole losange représente un échangeur de chaleur à plaques, très utilisé en chauffage et ECS.",
        keyPoints: ["Symbole chauffage", "Échangeur plaques", "Transfert thermique", "Compact"]
    },
    {
        id: 'sym015',
        category: "Symboles - Chauffage",
        difficulty: "easy",
        question: "Le symbole rectangulaire avec ailettes représente quoi ?",
        answers: ["Radiateur", "Convecteur", "Sèche-serviettes", "Plancher chauffant"],
        correct: 0,
        explanation: "Ce symbole rectangulaire avec ailettes représente un radiateur (émetteur de chaleur).",
        keyPoints: ["Symbole chauffage", "Radiateur", "Émetteur", "Chauffage central"]
    },
    {
        id: 'sym016',
        category: "Symboles - Chauffage",
        difficulty: "medium",
        question: "Le symbole avec ressort et flèche vers le haut représente quoi ?",
        answers: ["Soupape de sécurité", "Soupape différentielle", "Vanne de régulation", "Clapet anti-retour"],
        correct: 0,
        explanation: "Ce symbole avec ressort et flèche représente une soupape de sécurité, organe obligatoire sur circuit de chauffage.",
        keyPoints: ["Symbole chauffage", "Soupape sécurité", "Protection", "3 bars chauffage"]
    },
    {
        id: 'sym017',
        category: "Symboles - Chauffage",
        difficulty: "medium",
        question: "Le symbole représentant une soupape avec deux pressions représente quoi ?",
        answers: ["Soupape à pression différentielle (soupape de décharge)", "Soupape de sécurité", "Vanne 3 voies", "Régulateur de pression"],
        correct: 0,
        explanation: "Ce symbole représente une soupape à pression différentielle, aussi appelée soupape de décharge, qui équilibre les pressions.",
        keyPoints: ["Symbole chauffage", "Soupape différentielle", "Décharge", "Équilibrage"]
    },
    {
        id: 'sym018',
        category: "Symboles - Chauffage",
        difficulty: "easy",
        question: "Le symbole avec flèche et triangle représente quoi ?",
        answers: ["Clapet anti-retour", "Vanne d'arrêt", "Filtre à tamis", "Régulateur de débit"],
        correct: 0,
        explanation: "Ce symbole avec flèche et triangle représente un clapet anti-retour. Le fluide circule dans le sens de la flèche uniquement.",
        keyPoints: ["Symbole", "Clapet anti-retour", "Sens unique", "Protection retour"]
    },
    {
        id: 'sym019',
        category: "Symboles - Chauffage",
        difficulty: "medium",
        question: "Le symbole circulaire avec membrane représente quoi ?",
        answers: ["Vase d'expansion fermé (membrane)", "Vase d'expansion ouvert", "Ballon tampon", "Réservoir sous pression"],
        correct: 0,
        explanation: "Ce symbole circulaire avec membrane représente un vase d'expansion fermé à membrane, obligatoire sur circuit fermé de chauffage.",
        keyPoints: ["Symbole chauffage", "Vase expansion", "Membrane", "Circuit fermé"]
    },
    {
        id: 'sym020',
        category: "Symboles - Chauffage",
        difficulty: "medium",
        question: "Le symbole rectangulaire ouvert vers le haut représente quoi ?",
        answers: ["Vase d'expansion ouvert", "Vase d'expansion fermé", "Ballon ECS", "Réservoir de stockage"],
        correct: 0,
        explanation: "Ce symbole rectangulaire ouvert représente un vase d'expansion ouvert, aujourd'hui rare (installations anciennes).",
        keyPoints: ["Symbole chauffage", "Vase expansion ouvert", "Obsolète", "Circuit ouvert"]
    },
    {
        id: 'sym021',
        category: "Symboles - Chauffage",
        difficulty: "medium",
        question: "Le symbole rectangulaire simple représente quel appareil de mesure ?",
        answers: ["Compteur volumétrique", "Débitmètre", "Manomètre", "Thermomètre"],
        correct: 0,
        explanation: "Ce symbole rectangulaire représente un compteur volumétrique d'eau (compteur d'eau froide ou chaude).",
        keyPoints: ["Symbole", "Compteur eau", "Volume", "m³"]
    },
    {
        id: 'sym022',
        category: "Symboles - Chauffage",
        difficulty: "easy",
        question: "Le symbole circulaire avec 'T' ou 'θ' représente quoi ?",
        answers: ["Thermomètre", "Manomètre", "Thermostat", "Sonde de température"],
        correct: 0,
        explanation: "Ce symbole circulaire avec 'T' ou 'θ' représente un thermomètre (mesure de température).",
        keyPoints: ["Symbole", "Thermomètre", "Température", "Mesure °C"]
    },
    {
        id: 'sym023',
        category: "Symboles - Chauffage",
        difficulty: "easy",
        question: "Le symbole circulaire avec 'P' ou 'μ' représente quoi ?",
        answers: ["Manomètre", "Thermomètre", "Pressostat", "Débitmètre"],
        correct: 0,
        explanation: "Ce symbole circulaire avec 'P' ou 'μ' représente un manomètre (mesure de pression).",
        keyPoints: ["Symbole", "Manomètre", "Pression", "Mesure bars"]
    },
    {
        id: 'sym024',
        category: "Symboles - Chauffage",
        difficulty: "medium",
        question: "Le symbole rectangulaire avec 'TA' et flèche représente quoi ?",
        answers: ["Thermostat d'ambiance", "Thermomètre", "Sonde extérieure", "Programmateur"],
        correct: 0,
        explanation: "Ce symbole rectangulaire avec 'TA' et flèche représente un thermostat d'ambiance qui régule la température de la pièce.",
        keyPoints: ["Symbole chauffage", "Thermostat ambiance", "Régulation", "Confort"]
    },
    {
        id: 'sym025',
        category: "Symboles - Chauffage",
        difficulty: "medium",
        question: "Le symbole rectangulaire avec 'D' représente quoi ?",
        answers: ["Débitmètre", "Compteur volumétrique", "Manomètre", "Régulateur de débit"],
        correct: 0,
        explanation: "Ce symbole rectangulaire avec 'D' représente un débitmètre qui mesure le débit du fluide (L/h ou m³/h).",
        keyPoints: ["Symbole", "Débitmètre", "Débit", "Mesure L/h"]
    },
    {
        id: 'sym026',
        category: "Symboles - Chauffage",
        difficulty: "medium",
        question: "Le symbole rectangulaire avec 'P' représente un appareil de contrôle automatique. Lequel ?",
        answers: ["Pressostat", "Manomètre", "Régulateur de pression", "Soupape de sécurité"],
        correct: 0,
        explanation: "Ce symbole rectangulaire avec 'P' représente un pressostat qui contrôle automatiquement la pression.",
        keyPoints: ["Symbole", "Pressostat", "Contrôle pression", "Automatisme"]
    },

    // ========== SYMBOLES VANNES (8 questions) ==========
    {
        id: 'sym027',
        category: "Symboles - Vannes",
        difficulty: "easy",
        question: "Le symbole en losange avec deux traits représente quelle vanne ?",
        answers: ["Vanne d'arrêt manuelle", "Vanne motorisée", "Vanne 3 voies", "Robinet à tournant"],
        correct: 0,
        explanation: "Ce symbole en losange avec deux traits représente une vanne d'arrêt manuelle (tout ou rien : ouverte ou fermée).",
        keyPoints: ["Symbole", "Vanne d'arrêt", "Manuelle", "Isolation"]
    },
    {
        id: 'sym028',
        category: "Symboles - Vannes",
        difficulty: "medium",
        question: "Le symbole en T avec losange représente quelle vanne ?",
        answers: ["Vanne 3 voies", "Vanne 4 voies", "Té de raccordement", "Vanne mélangeuse"],
        correct: 0,
        explanation: "Ce symbole en T avec losange représente une vanne 3 voies qui peut mélanger ou dériver 3 circuits.",
        keyPoints: ["Symbole", "Vanne 3 voies", "Mélange", "Dérivation"]
    },
    {
        id: 'sym029',
        category: "Symboles - Vannes",
        difficulty: "medium",
        question: "Le symbole en croix avec losange représente quelle vanne ?",
        answers: ["Vanne 4 voies", "Vanne 3 voies", "Croisement", "Vanne de mélange"],
        correct: 0,
        explanation: "Ce symbole en croix avec losange représente une vanne 4 voies qui peut inverser les circuits.",
        keyPoints: ["Symbole", "Vanne 4 voies", "Inversion", "Circuits multiples"]
    },
    {
        id: 'sym030',
        category: "Symboles - Vannes",
        difficulty: "medium",
        question: "Le symbole avec losange et 'M' représente quelle vanne ?",
        answers: ["Vanne motorisée", "Vanne manuelle", "Vanne thermostatique", "Électrovanne"],
        correct: 0,
        explanation: "Ce symbole avec losange et 'M' représente une vanne motorisée commandée électriquement.",
        keyPoints: ["Symbole", "Vanne motorisée", "Automatisme", "Régulation"]
    },
    {
        id: 'sym031',
        category: "Symboles - Vannes",
        difficulty: "medium",
        question: "Le symbole en losange avec trait incliné représente quelle vanne ?",
        answers: ["Vanne de réglage (pointeau)", "Vanne d'arrêt", "Vanne thermostatique", "Robinet de puisage"],
        correct: 0,
        explanation: "Ce symbole en losange avec trait incliné représente une vanne de réglage (pointeau) pour ajuster le débit.",
        keyPoints: ["Symbole", "Vanne de réglage", "Pointeau", "Équilibrage"]
    },
    {
        id: 'sym032',
        category: "Symboles - Vannes",
        difficulty: "medium",
        question: "Le symbole rectangulaire avec 'DISC' représente quoi ?",
        answers: ["Disconnecteur", "Clapet anti-retour", "Vanne d'isolement", "Régulateur de pression"],
        correct: 0,
        explanation: "Ce symbole rectangulaire avec 'DISC' représente un disconnecteur, protection contre le retour d'eau polluée.",
        keyPoints: ["Symbole", "Disconnecteur", "Protection", "Anti-pollution"]
    },
    {
        id: 'sym033',
        category: "Symboles - Vannes",
        difficulty: "medium",
        question: "Le symbole en U inversé représente quoi ?",
        answers: ["Vidange siphonnée", "Siphon de sol", "Regard de visite", "Té de branchement"],
        correct: 0,
        explanation: "Ce symbole en U inversé représente une vidange siphonnée qui évacue l'eau tout en gardant une garde d'eau.",
        keyPoints: ["Symbole", "Vidange", "Siphon", "Garde d'eau"]
    },
    {
        id: 'sym034',
        category: "Symboles - Vannes",
        difficulty: "medium",
        question: "Le symbole en L avec trait vertical représente quoi ?",
        answers: ["Robinet de puisage", "Vanne d'arrêt", "Robinet thermostatique", "Mitigeur"],
        correct: 0,
        explanation: "Ce symbole en L avec trait vertical représente un robinet de puisage (point de tirage d'eau).",
        keyPoints: ["Symbole", "Robinet", "Puisage", "Point d'eau"]
    },

    // ========== SYMBOLES ÉQUIPEMENTS (12 questions) ==========
    {
        id: 'sym035',
        category: "Symboles - Équipements",
        difficulty: "medium",
        question: "Le symbole circulaire avec flèche et triangle noir représente quoi ?",
        answers: ["Pompe (circulateur) avec sens du fluide", "Ventilateur", "Compresseur", "Turbine"],
        correct: 0,
        explanation: "Ce symbole circulaire avec flèche et triangle noir représente une pompe/circulateur. La flèche indique le sens de circulation.",
        keyPoints: ["Symbole", "Pompe", "Circulateur", "Sens circulation"]
    },
    {
        id: 'sym036',
        category: "Symboles - Équipements",
        difficulty: "medium",
        question: "Le symbole avec tamis incliné représente quoi ?",
        answers: ["Filtre à tamis", "Crépine", "Pot à boue", "Adoucisseur"],
        correct: 0,
        explanation: "Ce symbole avec tamis incliné représente un filtre à tamis qui retient les impuretés solides.",
        keyPoints: ["Symbole", "Filtre", "Tamis", "Protection circuit"]
    },
    {
        id: 'sym037',
        category: "Symboles - Équipements",
        difficulty: "medium",
        question: "Le symbole conique (rétrécissement) représente quoi ?",
        answers: ["Venturi (effet venturi)", "Réducteur de pression", "Diaphragme", "Convergent"],
        correct: 0,
        explanation: "Ce symbole conique représente un venturi, dispositif créant une dépression par rétrécissement de section.",
        keyPoints: ["Symbole", "Venturi", "Dépression", "Effet Bernoulli"]
    },
    {
        id: 'sym038',
        category: "Symboles - Équipements",
        difficulty: "medium",
        question: "Le symbole avec arc de cercle (deux tubes qui se croisent sans se toucher) représente quoi ?",
        answers: ["Croisement sans mélange (chapeau de gendarme)", "Vanne 4 voies", "Té double", "Jonction"],
        correct: 0,
        explanation: "Ce symbole avec arc de cercle représente un croisement de canalisations SANS mélange des fluides (chapeau de gendarme).",
        keyPoints: ["Symbole", "Croisement", "Chapeau gendarme", "Sans mélange"]
    },
    {
        id: 'sym039',
        category: "Symboles - Équipements",
        difficulty: "easy",
        question: "Le symbole en T simple (raccordement 90°) représente quel raccord ?",
        answers: ["Té 130 (raccordement 90°)", "Té 131", "Coude 90°", "Té réduit"],
        correct: 0,
        explanation: "Ce symbole en T simple représente un Té 130, raccord permettant de dériver un circuit à 90°.",
        keyPoints: ["Symbole", "Té 130", "Raccord 90°", "Dérivation"]
    },
    {
        id: 'sym040',
        category: "Symboles - Équipements",
        difficulty: "easy",
        question: "Le symbole avec trait vertical descendant oblique représente quel raccord ?",
        answers: ["Té 131 (pied de biche)", "Té 130", "Té 132", "Culotte 45°"],
        correct: 0,
        explanation: "Ce symbole avec trait vertical représente un Té 131 ou 'pied de biche', raccord oblique descendant.",
        keyPoints: ["Symbole", "Té 131", "Pied de biche", "Raccord oblique"]
    },
    {
        id: 'sym041',
        category: "Symboles - Équipements",
        difficulty: "easy",
        question: "Le symbole en Y inversé (deux départs obliques) représente quel raccord ?",
        answers: ["Té 132 (paire de fesses)", "Culotte 45°", "Té 131", "Y double"],
        correct: 0,
        explanation: "Ce symbole en Y inversé représente un Té 132 ou 'paire de fesses', raccord à deux départs obliques.",
        keyPoints: ["Symbole", "Té 132", "Paire de fesses", "Double oblique"]
    },
    {
        id: 'sym042',
        category: "Symboles - Équipements",
        difficulty: "medium",
        question: "Le symbole avec filetage des deux côtés (D-G) représente quoi ?",
        answers: ["Manchon D-G (droite-gauche)", "Manchon simple", "Manchon réduit", "Raccord union"],
        correct: 0,
        explanation: "Ce symbole avec filetage des deux côtés représente un manchon D-G permettant de raccorder deux tubes filetés.",
        keyPoints: ["Symbole", "Manchon D-G", "Filetage", "Assemblage"]
    },
    {
        id: 'sym043',
        category: "Symboles - Équipements",
        difficulty: "medium",
        question: "Le symbole avec un seul type de filetage (double droite) représente quoi ?",
        answers: ["Manchon D-D (double droite)", "Manchon D-G", "Manchon lisse", "Raccord femelle-femelle"],
        correct: 0,
        explanation: "Ce symbole avec un seul type de filetage représente un manchon D-D (double droite), tous deux filetés à droite.",
        keyPoints: ["Symbole", "Manchon D-D", "Double droite", "Filetage identique"]
    },
    {
        id: 'sym044',
        category: "Symboles - Équipements",
        difficulty: "medium",
        question: "Le symbole rectangulaire avec 'T' (dans l'eau) représente quoi ?",
        answers: ["Aquastat (thermostat plongeur)", "Thermostat d'ambiance", "Sonde de température", "Thermomètre"],
        correct: 0,
        explanation: "Ce symbole rectangulaire avec 'T' représente un aquastat, thermostat plongeur qui contrôle la température de l'eau.",
        keyPoints: ["Symbole", "Aquastat", "Thermostat plongeur", "Régulation eau"]
    },
    {
        id: 'sym045',
        category: "Symboles - Équipements",
        difficulty: "medium",
        question: "Le symbole circulaire avec flèche vers le haut représente quoi ?",
        answers: ["Purgeur automatique d'air", "Soupape de sécurité", "Clapet de ventilation", "Évent manuel"],
        correct: 0,
        explanation: "Ce symbole circulaire avec flèche vers le haut représente un purgeur automatique qui évacue l'air du circuit.",
        keyPoints: ["Symbole", "Purgeur air", "Automatique", "Dégazage"]
    },
    {
        id: 'sym046',
        category: "Symboles - Équipements",
        difficulty: "medium",
        question: "Le symbole rectangulaire arrondi représente quoi ?",
        answers: ["Réservoir de liquide", "Ballon tampon", "Cuve de stockage", "Vase d'expansion"],
        correct: 0,
        explanation: "Ce symbole rectangulaire arrondi représente un réservoir de stockage de liquide.",
        keyPoints: ["Symbole", "Réservoir", "Stockage", "Liquide"]
    },

    // ========== SYMBOLES PROTECTION (7 questions) ==========
    {
        id: 'sym047',
        category: "Symboles - Protection",
        difficulty: "medium",
        question: "Le symbole avec 'GS' représente quoi ?",
        answers: ["Groupe de sécurité sanitaire", "Soupape de sécurité chauffage", "Réducteur de pression", "Disconnecteur"],
        correct: 0,
        explanation: "Ce symbole avec 'GS' représente un groupe de sécurité sanitaire, obligatoire sur ballon ECS (limite 7 bars).",
        keyPoints: ["Symbole", "Groupe sécurité", "GS", "Ballon ECS"]
    },
    {
        id: 'sym048',
        category: "Symboles - Protection",
        difficulty: "medium",
        question: "Le symbole d'amortisseur de coups de bélier est ?",
        answers: ["Anti-bélier", "Vase d'expansion", "Clapet anti-retour", "Limiteur de pression"],
        correct: 0,
        explanation: "Ce symbole représente un anti-bélier qui absorbe les coups de bélier (surpressions brutales).",
        keyPoints: ["Symbole", "Anti-bélier", "Coup de bélier", "Protection"]
    },
    {
        id: 'sym049',
        category: "Symboles - Protection",
        difficulty: "medium",
        question: "Le symbole conique avec flèche vers le bas représente quoi ?",
        answers: ["Détendeur (réducteur de pression)", "Surpresseur", "Régulateur de débit", "Vanne de réglage"],
        correct: 0,
        explanation: "Ce symbole conique avec flèche représente un détendeur/réducteur de pression qui abaisse la pression du réseau.",
        keyPoints: ["Symbole", "Détendeur", "Réducteur pression", "3 bars"]
    },
    {
        id: 'sym050',
        category: "Symboles - Protection",
        difficulty: "medium",
        question: "Le symbole conique inversé avec flèche vers le haut représente quoi ?",
        answers: ["Surpresseur", "Détendeur", "Pompe de relevage", "Compresseur"],
        correct: 0,
        explanation: "Ce symbole conique inversé avec flèche représente un surpresseur qui augmente la pression du réseau.",
        keyPoints: ["Symbole", "Surpresseur", "Augmentation pression", "Pompage"]
    },
    {
        id: 'sym051',
        category: "Symboles - Protection",
        difficulty: "hard",
        question: "Le symbole en X dans un cadre représente quoi ?",
        answers: ["Batterie chaude (ou froide)", "Échangeur à plaques", "Radiateur", "Convecteur"],
        correct: 0,
        explanation: "Ce symbole en X dans un cadre représente une batterie chaude ou froide utilisée en climatisation/CTA.",
        keyPoints: ["Symbole", "Batterie chaude/froide", "Climatisation", "CTA"]
    },
    {
        id: 'sym052',
        category: "Symboles - Protection",
        difficulty: "hard",
        question: "Le symbole circulaire avec pales représente quoi ?",
        answers: ["Ventilateur", "Extracteur d'air", "Pompe", "Circulateur"],
        correct: 0,
        explanation: "Ce symbole circulaire avec pales représente un ventilateur pour extraction ou insufflation d'air.",
        keyPoints: ["Symbole VMC", "Ventilateur", "Extraction air", "Ventilation"]
    },
    {
        id: 'sym053',
        category: "Symboles - Protection",
        difficulty: "hard",
        question: "Le symbole avec ventilateur et batterie représente quoi ?",
        answers: ["Ventilo-convecteur", "Radiateur soufflant", "Convecteur électrique", "Aérotherme"],
        correct: 0,
        explanation: "Ce symbole avec ventilateur et batterie représente un ventilo-convecteur (chauffage + ventilation).",
        keyPoints: ["Symbole", "Ventilo-convecteur", "Chauffage soufflé", "Climatisation"]
    },

    // ========== SYMBOLES RÉFRIGÉRATION (6 questions) ==========
    {
        id: 'sym054',
        category: "Symboles - Réfrigération",
        difficulty: "hard",
        question: "Le symbole d'aérotherme (air pulsé) est utilisé pour ?",
        answers: ["Chauffage par air pulsé (industrie)", "Ventilo-convecteur", "Batterie chaude", "Radiateur soufflant"],
        correct: 0,
        explanation: "Ce symbole représente un aérotherme, appareil de chauffage par air pulsé (industrie, ateliers).",
        keyPoints: ["Symbole", "Aérotherme", "Air pulsé", "Industrie"]
    },
    {
        id: 'sym055',
        category: "Symboles - Réfrigération",
        difficulty: "hard",
        question: "Le symbole en zigzag représente quel type de filtre ?",
        answers: ["Filtre aéraulique (filtre à air)", "Filtre à tamis", "Filtre hydraulique", "Grille de ventilation"],
        correct: 0,
        explanation: "Ce symbole en zigzag représente un filtre aéraulique qui filtre l'air en ventilation/climatisation.",
        keyPoints: ["Symbole VMC", "Filtre air", "Aéraulique", "Ventilation"]
    },
    {
        id: 'sym056',
        category: "Symboles - Réfrigération",
        difficulty: "hard",
        question: "Le symbole circulaire avec flèche (groupe frigorifique) représente quoi ?",
        answers: ["Compresseur frigorifique", "Pompe", "Circulateur", "Turbine"],
        correct: 0,
        explanation: "Ce symbole circulaire avec flèche représente un compresseur frigorifique (PAC, climatisation).",
        keyPoints: ["Symbole", "Compresseur", "Froid", "PAC"]
    },
    {
        id: 'sym057',
        category: "Symboles - Réfrigération",
        difficulty: "hard",
        question: "Le symbole en X barré (transformation gaz→liquide) représente quoi ?",
        answers: ["Condenseur", "Évaporateur", "Échangeur", "Radiateur"],
        correct: 0,
        explanation: "Ce symbole en X barré représente un condenseur qui transforme le gaz en liquide (cycle frigorifique).",
        keyPoints: ["Symbole", "Condenseur", "Cycle froid", "Liquéfaction"]
    },
    {
        id: 'sym058',
        category: "Symboles - Réfrigération",
        difficulty: "hard",
        question: "Le symbole en X (transformation liquide→gaz) représente quoi ?",
        answers: ["Évaporateur", "Condenseur", "Batterie froide", "Échangeur"],
        correct: 0,
        explanation: "Ce symbole en X représente un évaporateur qui transforme le liquide en gaz (cycle frigorifique).",
        keyPoints: ["Symbole", "Évaporateur", "Cycle froid", "Vaporisation"]
    },
    {
        id: 'sym059',
        category: "Symboles - Réfrigération",
        difficulty: "medium",
        question: "Le symbole circulaire double (contrôle visuel) représente quoi ?",
        answers: ["Voyant (indicateur visuel de fluide)", "Hublot", "Regard", "Témoin lumineux"],
        correct: 0,
        explanation: "Ce symbole circulaire double représente un voyant permettant de voir le fluide circuler.",
        keyPoints: ["Symbole", "Voyant", "Contrôle visuel", "Fluide"]
    },

    // ========================================
    // ✨ NOUVELLES QUESTIONS - SCHÉMAS (25 questions)
    // ========================================

    // ========== SCHÉMA INSTALLATION COMPLÈTE DE CHAUFFAGE (10 questions) ==========
    {
        id: 'sch001',
        category: "Schémas - Installation Chauffage",
        difficulty: "medium",
        question: "Sur un schéma d'installation de chauffage, le composant principal qui produit la chaleur est ?",
        answers: [
            "Chaudière - Production de chaleur",
            "Circulateur - Circulation du fluide",
            "Radiateur - Émission de chaleur",
            "Vase d'expansion - Compensation dilatation"
        ],
        correct: 0,
        explanation: "La chaudière est le générateur de chaleur qui produit l'eau chaude pour le circuit de chauffage.",
        keyPoints: ["Schéma chauffage", "Chaudière", "Générateur", "Production chaleur"]
    },
    {
        id: 'sch002',
        category: "Schémas - Installation Chauffage",
        difficulty: "medium",
        question: "Dans une installation de chauffage, l'émetteur de chaleur le plus courant est ?",
        answers: [
            "Radiateur à eau",
            "Convecteur électrique",
            "Plancher chauffant",
            "Ventilo-convecteur"
        ],
        correct: 0,
        explanation: "Le radiateur à eau (symbole rectangulaire avec ailettes) est l'émetteur principal en chauffage central.",
        keyPoints: ["Schéma chauffage", "Radiateur", "Émetteur", "Chaleur par convection"]
    },
    {
        id: 'sch003',
        category: "Schémas - Installation Chauffage",
        difficulty: "hard",
        question: "Quel organe de sécurité obligatoire protège l'installation contre les surpressions ?",
        answers: [
            "Soupape de sécurité",
            "Vase d'expansion",
            "Disconnecteur",
            "Purgeur automatique"
        ],
        correct: 0,
        explanation: "La soupape de sécurité est obligatoire et protège l'installation contre les surpressions (tarage 3 bars pour chauffage).",
        keyPoints: ["Schéma chauffage", "Soupape sécurité", "3 bars", "Protection"]
    },
    {
        id: 'sch004',
        category: "Schémas - Installation Chauffage",
        difficulty: "hard",
        question: "Le manomètre sur une installation de chauffage permet de contrôler ?",
        answers: [
            "La pression du circuit de chauffage",
            "La température de l'eau",
            "Le débit du circulateur",
            "Le niveau d'eau"
        ],
        correct: 0,
        explanation: "Le manomètre mesure la pression du circuit, normalement entre 1 et 2 bars à froid.",
        keyPoints: ["Schéma chauffage", "Manomètre", "Pression", "1-2 bars"]
    },
    {
        id: 'sch005',
        category: "Schémas - Installation Chauffage",
        difficulty: "medium",
        question: "Le robinet thermostatique sur un radiateur permet de ?",
        answers: [
            "Réguler la température de la pièce individuellement",
            "Réguler la température globale de l'installation",
            "Contrôler le débit global du circuit",
            "Mesurer la pression du radiateur"
        ],
        correct: 0,
        explanation: "Le robinet thermostatique régule automatiquement la température de chaque pièce en modulant le débit au radiateur.",
        keyPoints: ["Schéma chauffage", "Robinet thermostatique", "Régulation pièce", "Confort"]
    },
    {
        id: 'sch006',
        category: "Schémas - Installation Chauffage",
        difficulty: "hard",
        question: "Le vase d'expansion a pour rôle principal de ?",
        answers: [
            "Compenser la dilatation de l'eau lors de la chauffe",
            "Stocker l'eau de chauffage",
            "Filtrer l'eau du circuit",
            "Évacuer l'air du circuit"
        ],
        correct: 0,
        explanation: "Le vase d'expansion compense l'augmentation de volume de l'eau due à la dilatation thermique (environ 4% de 20°C à 80°C).",
        keyPoints: ["Schéma chauffage", "Vase expansion", "Dilatation", "Volume variable"]
    },
    {
        id: 'sch007',
        category: "Schémas - Installation Chauffage",
        difficulty: "medium",
        question: "Dans quel ordre logique circule l'eau dans un circuit de chauffage ?",
        answers: [
            "Chaudière → Circulateur → Radiateurs → Retour chaudière",
            "Circulateur → Chaudière → Radiateurs → Retour",
            "Radiateurs → Chaudière → Circulateur → Radiateurs",
            "Vase expansion → Chaudière → Radiateurs"
        ],
        correct: 0,
        explanation: "Le circuit logique : la chaudière chauffe l'eau, le circulateur la pousse vers les radiateurs, puis elle retourne à la chaudière.",
        keyPoints: ["Schéma chauffage", "Circuit fermé", "Sens circulation", "Aller-retour"]
    },
    {
        id: 'sch008',
        category: "Schémas - Installation Chauffage",
        difficulty: "hard",
        question: "Pourquoi place-t-on généralement le circulateur sur le retour (après les radiateurs) ?",
        answers: [
            "Pour pomper de l'eau plus froide et protéger le moteur",
            "Pour augmenter la pression",
            "Pour économiser de l'énergie",
            "C'est une obligation réglementaire"
        ],
        correct: 0,
        explanation: "Le circulateur sur retour aspire de l'eau plus froide (60-70°C vs 80-90°C aller), ce qui prolonge la durée de vie du moteur.",
        keyPoints: ["Schéma chauffage", "Circulateur retour", "Eau froide", "Longévité"]
    },
    {
        id: 'sch009',
        category: "Schémas - Installation Chauffage",
        difficulty: "hard",
        question: "Le disconnecteur sur l'alimentation en eau a pour rôle de ?",
        answers: [
            "Empêcher le retour d'eau du circuit de chauffage vers le réseau",
            "Réduire la pression du réseau",
            "Filtrer l'eau d'appoint",
            "Mesurer la consommation d'eau"
        ],
        correct: 0,
        explanation: "Le disconnecteur protège le réseau d'eau potable contre tout retour d'eau polluée du circuit de chauffage.",
        keyPoints: ["Schéma chauffage", "Disconnecteur", "Protection réseau", "Anti-pollution"]
    },
    {
        id: 'sch010',
        category: "Schémas - Installation Chauffage",
        difficulty: "medium",
        question: "Le purgeur automatique placé en point haut sert à ?",
        answers: [
            "Évacuer automatiquement l'air du circuit",
            "Évacuer l'eau en cas de surpression",
            "Réguler la pression",
            "Contrôler la température"
        ],
        correct: 0,
        explanation: "Le purgeur automatique évacue l'air qui s'accumule naturellement en point haut, évitant les bruits et mauvaise circulation.",
        keyPoints: ["Schéma chauffage", "Purgeur air", "Point haut", "Dégazage"]
    },

    // ========== SCHÉMA ADOUCISSEUR (5 questions) ==========
    {
        id: 'sch011',
        category: "Schémas - Adoucisseur",
        difficulty: "medium",
        image: "images/schemas/schema-adoucisseur.png",
        imageAlt: "Schéma d'installation d'un adoucisseur d'eau avec by-pass",
        question: "Sur ce schéma d'adoucisseur, dans quel ordre doit-on le raccorder sur l'installation ?",
        answers: [
            "Après le compteur général et avant la distribution",
            "Après le ballon ECS",
            "Uniquement sur l'eau chaude",
            "En parallèle du circuit principal"
        ],
        correct: 0,
        explanation: "L'adoucisseur se place après le compteur général et AVANT toute distribution, pour traiter toute l'eau de la maison.",
        keyPoints: ["Adoucisseur", "Après compteur", "Avant distribution", "Eau générale"]
    },
    {
        id: 'sch012',
        category: "Schémas - Adoucisseur",
        difficulty: "hard",
        question: "Pourquoi faut-il prévoir un by-pass (dérivation) sur un adoucisseur ?",
        answers: [
            "Pour pouvoir isoler l'adoucisseur en cas de maintenance",
            "Pour économiser le sel",
            "Pour augmenter la pression",
            "C'est obligatoire par la loi"
        ],
        correct: 0,
        explanation: "Le by-pass permet d'isoler l'adoucisseur pour maintenance ou remplacement de résines sans couper l'eau de la maison.",
        keyPoints: ["Adoucisseur", "By-pass", "Maintenance", "Isolation"]
    },
    {
        id: 'sch013',
        category: "Schémas - Adoucisseur",
        difficulty: "medium",
        question: "Quel est le rôle principal d'un adoucisseur d'eau ?",
        answers: [
            "Éliminer le calcaire (calcium et magnésium)",
            "Filtrer les impuretés solides",
            "Augmenter la pression de l'eau",
            "Chauffer l'eau"
        ],
        correct: 0,
        explanation: "L'adoucisseur élimine le calcaire (ions calcium Ca²⁺ et magnésium Mg²⁺) par échange d'ions avec du sodium.",
        keyPoints: ["Adoucisseur", "Calcaire", "Échange d'ions", "Résines"]
    },
    {
        id: 'sch014',
        category: "Schémas - Adoucisseur",
        difficulty: "hard",
        question: "Pourquoi laisser un robinet d'eau froide NON adoucie (en amont de l'adoucisseur) ?",
        answers: [
            "Pour conserver une eau avec minéraux pour la consommation",
            "Pour économiser le sel",
            "Pour augmenter la pression",
            "Ce n'est pas nécessaire"
        ],
        correct: 0,
        explanation: "On laisse souvent un robinet d'eau dure (non adoucie) pour la boisson, car l'eau adoucie contient plus de sodium et moins de minéraux.",
        keyPoints: ["Adoucisseur", "Eau dure", "Minéraux", "Santé"]
    },
    {
        id: 'sch015',
        category: "Schémas - Adoucisseur",
        difficulty: "medium",
        question: "À quelle fréquence un adoucisseur effectue-t-il une régénération ?",
        answers: [
            "Selon le volume d'eau traitée (automatique ou programmée)",
            "Une fois par jour obligatoirement",
            "Une fois par mois",
            "Uniquement manuellement"
        ],
        correct: 0,
        explanation: "La régénération se déclenche selon le volume d'eau traité (compteur volumétrique) ou par programmation horaire, pour régénérer les résines avec du sel.",
        keyPoints: ["Adoucisseur", "Régénération", "Résines", "Sel"]
    },

    // ========== SCHÉMA GROUPE DE SÉCURITÉ (5 questions) ==========
    {
        id: 'sch016',
        category: "Schémas - Groupe de Sécurité",
        difficulty: "medium",
        image: "images/schemas/schema-groupe-securite.png",
        imageAlt: "Schéma d'installation d'un groupe de sécurité sur ballon ECS",
        question: "Sur ce schéma, où doit obligatoirement être installé le groupe de sécurité sur un ballon ECS ?",
        answers: [
            "Sur l'arrivée d'eau froide du ballon (partie haute)",
            "Sur la sortie d'eau chaude",
            "Sur le retour de chauffage",
            "Au point le plus bas"
        ],
        correct: 0,
        explanation: "Le groupe de sécurité se monte TOUJOURS sur l'arrivée d'eau froide du ballon, en partie haute, sans vanne d'arrêt entre lui et le ballon.",
        keyPoints: ["Groupe sécurité", "Arrivée EF", "Partie haute", "Obligatoire"]
    },
    {
        id: 'sch017',
        category: "Schémas - Groupe de Sécurité",
        difficulty: "hard",
        question: "Quel est le tarage (pression d'ouverture) standard d'un groupe de sécurité sanitaire ?",
        answers: [
            "7 bars",
            "3 bars",
            "10 bars",
            "1,5 bar"
        ],
        correct: 0,
        explanation: "Le groupe de sécurité sanitaire est taré à 7 bars, contrairement à la soupape de chauffage tarée à 3 bars.",
        keyPoints: ["Groupe sécurité", "7 bars", "Tarage", "ECS"]
    },
    {
        id: 'sch018',
        category: "Schémas - Groupe de Sécurité",
        difficulty: "medium",
        question: "Pourquoi le groupe de sécurité goutte-t-il régulièrement (quelques gouttes) ?",
        answers: [
            "C'est normal : évacuation de la dilatation lors de la chauffe",
            "Le groupe est défectueux",
            "La pression du réseau est trop forte",
            "Le ballon fuit"
        ],
        correct: 0,
        explanation: "L'eau se dilate de 2-3% en chauffant. Le groupe de sécurité évacue ce surplus par son orifice de vidange (goutte-à-goutte normal).",
        keyPoints: ["Groupe sécurité", "Dilatation", "Goutte-à-goutte", "Normal"]
    },
    {
        id: 'sch019',
        category: "Schémas - Groupe de Sécurité",
        difficulty: "hard",
        question: "Quelles sont les 3 fonctions principales d'un groupe de sécurité sanitaire ?",
        answers: [
            "Protection surpression, vidange ballon, anti-retour",
            "Filtration, régulation, mesure",
            "Chauffage, stockage, distribution",
            "Détartrage, désinfection, filtration"
        ],
        correct: 0,
        explanation: "Le groupe de sécurité assure 3 fonctions : 1) Soupape de sécurité (7 bars), 2) Vidange du ballon, 3) Clapet anti-retour.",
        keyPoints: ["Groupe sécurité", "3 fonctions", "Soupape", "Vidange", "Anti-retour"]
    },
    {
        id: 'sch020',
        category: "Schémas - Groupe de Sécurité",
        difficulty: "hard",
        question: "Pourquoi ne doit-on JAMAIS mettre de vanne d'arrêt entre le groupe de sécurité et le ballon ?",
        answers: [
            "Risque d'explosion si vanne fermée et surpression",
            "Pour des raisons esthétiques",
            "Pour faciliter la maintenance",
            "Ce n'est pas interdit"
        ],
        correct: 0,
        explanation: "Une vanne fermée entre GS et ballon empêcherait l'évacuation de pression → risque d'explosion du ballon ! C'est STRICTEMENT INTERDIT.",
        keyPoints: ["Groupe sécurité", "Pas de vanne", "Sécurité", "Explosion"]
    },

    // ========== SCHÉMA CIRCUIT PRIMAIRE / SECONDAIRE (5 questions) ==========
    {
        id: 'sch021',
        category: "Schémas - Primaire Secondaire",
        difficulty: "hard",
        image: "images/schemas/schema-primaire-secondaire.png",
        imageAlt: "Schéma de circuit primaire et secondaire de chauffage",
        question: "Sur ce schéma primaire/secondaire, qu'est-ce que le circuit primaire ?",
        answers: [
            "Le circuit entre la chaudière et le ballon tampon/échangeur",
            "Le circuit de distribution vers les radiateurs",
            "Le circuit d'eau froide",
            "Le circuit de sécurité"
        ],
        correct: 0,
        explanation: "Le circuit primaire est le circuit fermé entre la chaudière et le ballon tampon ou l'échangeur. Il fonctionne indépendamment du secondaire.",
        keyPoints: ["Circuit primaire", "Chaudière", "Ballon tampon", "Production"]
    },
    {
        id: 'sch022',
        category: "Schémas - Primaire Secondaire",
        difficulty: "hard",
        question: "Qu'est-ce qu'un circuit secondaire dans une installation de chauffage ?",
        answers: [
            "Le circuit de distribution du ballon tampon vers les émetteurs",
            "Le circuit de production (chaudière)",
            "Le circuit d'eau sanitaire",
            "Le circuit de sécurité"
        ],
        correct: 0,
        explanation: "Le circuit secondaire distribue l'eau chaude du ballon tampon vers les différents émetteurs (radiateurs, plancher chauffant, etc.).",
        keyPoints: ["Circuit secondaire", "Distribution", "Émetteurs", "Ballon tampon"]
    },
    {
        id: 'sch023',
        category: "Schémas - Primaire Secondaire",
        difficulty: "hard",
        question: "Quel est l'avantage principal de séparer primaire et secondaire avec un ballon tampon ?",
        answers: [
            "Découpler les débits et protéger la chaudière contre les retours froids",
            "Augmenter la pression",
            "Réduire la consommation",
            "Faciliter l'installation"
        ],
        correct: 0,
        explanation: "Le ballon tampon découple les circuits : la chaudière peut chauffer à son rythme optimal sans être perturbée par les variations de demande du secondaire.",
        keyPoints: ["Primaire/Secondaire", "Découplage", "Ballon tampon", "Protection chaudière"]
    },
    {
        id: 'sch024',
        category: "Schémas - Primaire Secondaire",
        difficulty: "hard",
        question: "Pourquoi utilise-t-on souvent 2 circulateurs (un par circuit) en primaire-secondaire ?",
        answers: [
            "Pour gérer indépendamment les débits de chaque circuit",
            "Pour doubler la puissance",
            "Pour faire des économies d'énergie",
            "C'est une obligation réglementaire"
        ],
        correct: 0,
        explanation: "Chaque circuit (primaire et secondaire) a son propre circulateur pour gérer son débit de façon indépendante et optimale.",
        keyPoints: ["Primaire/Secondaire", "2 circulateurs", "Débits indépendants", "Gestion"]
    },
    {
        id: 'sch025',
        category: "Schémas - Primaire Secondaire",
        difficulty: "hard",
        question: "Dans quel type d'installation retrouve-t-on souvent un circuit primaire-secondaire ?",
        answers: [
            "Chaudière bois/granulés avec plusieurs zones de chauffage",
            "Petit appartement avec 3 radiateurs",
            "Chauffe-eau électrique",
            "VMC simple flux"
        ],
        correct: 0,
        explanation: "Les circuits primaire-secondaire sont fréquents avec chaudières bois/granulés, PAC, ou installations complexes avec plusieurs zones (plancher + radiateurs).",
        keyPoints: ["Primaire/Secondaire", "Chaudière bois", "Multi-zones", "Complexe"]
    },

    // ========== SYMBOLES - IDENTIFICATION VISUELLE (15 questions) ==========
    {
        id: 'symid001',
        category: "Symboles - Vannes",
        difficulty: "medium",
        image: "images/symboles-tech/clapet-anti-retour.png",
        imageAlt: "Symbole technique de plomberie - à identifier",
        question: "Quel est ce symbole utilisé sur les schémas de plomberie ?",
        answers: [
            "Clapet anti-retour",
            "Vanne de réglage à pointeau",
            "Filtre en Y avec tamis",
            "Robinet à passage intégral"
        ],
        correct: 0,
        explanation: "Le clapet anti-retour est représenté par un triangle pointant dans le sens du flux autorisé. Il s'oppose à tout retour de fluide dans le sens inverse.",
        keyPoints: ["Triangle = sens autorisé", "Sens unique", "Protection réseau", "Clapet à disque ou bille"]
    },
    {
        id: 'symid002',
        category: "Symboles - Vannes",
        difficulty: "easy",
        image: "images/symboles-tech/vanne-arret-manuelle.png",
        imageAlt: "Symbole technique de plomberie - à identifier",
        question: "Identifiez ce symbole sur un schéma de principe :",
        answers: [
            "Robinet d'arrêt manuel",
            "Vanne motorisée à servomoteur électrique",
            "Détendeur-régulateur de pression",
            "Robinet à flotteur de remplissage"
        ],
        correct: 0,
        explanation: "Le robinet d'arrêt manuel est représenté par deux triangles pointe à pointe. L'absence de symbole de motorisation indique une manœuvre manuelle.",
        keyPoints: ["Deux triangles pointe à pointe", "Manœuvre manuelle", "Isolement circuit", "Quart de tour ou volant"]
    },
    {
        id: 'symid003',
        category: "Symboles - Vannes",
        difficulty: "hard",
        image: "images/symboles-tech/vanne-3-voies.png",
        imageAlt: "Symbole technique de plomberie - à identifier",
        question: "Ce symbole représente :",
        answers: [
            "Une vanne 3 voies mélangeuse ou distributrice",
            "Un té de dérivation hydraulique sur collecteur",
            "Un mélangeur thermostatique sanitaire",
            "Une vanne 2 voies à double siège d'étanchéité"
        ],
        correct: 0,
        explanation: "La vanne 3 voies possède 3 orifices (A, B, AB). En position mélangeuse, elle dose le mélange entre départ et retour chaudière pour réguler la température de l'installation.",
        keyPoints: ["3 orifices A / B / AB", "Mélangeuse ou distributrice", "Régulation température", "Commandée par servomoteur"]
    },
    {
        id: 'symid004',
        category: "Symboles - Vannes",
        difficulty: "hard",
        image: "images/symboles-tech/vanne-reglage.png",
        imageAlt: "Symbole technique de plomberie - à identifier",
        question: "Identifiez ce symbole de régulation hydraulique :",
        answers: [
            "Vanne de réglage (robinet à pointeau réglable)",
            "Clapet de retenue à ressort taré",
            "Soupape de sécurité à ressort compressé",
            "Vanne d'équilibrage à index verrouillable"
        ],
        correct: 0,
        explanation: "La vanne de réglage permet un ajustement précis du débit par ouverture partielle contrôlée. Indispensable pour l'équilibrage hydraulique entre les émetteurs.",
        keyPoints: ["Réglage fin du débit", "Perte de charge intentionnelle", "Équilibrage circuit", "Vis micrométrique graduée"]
    },
    {
        id: 'symid005',
        category: "Symboles - Chauffage",
        difficulty: "medium",
        image: "images/symboles-tech/pompe-sens-fluide.png",
        imageAlt: "Symbole technique de plomberie - à identifier",
        question: "Ce symbole représente :",
        answers: [
            "Un circulateur avec indication du sens de circulation du fluide",
            "Un ventilateur de soufflage dans un conduit d'air",
            "Un compresseur de circuit frigorigène",
            "Une turbine d'éjecteur hydraulique"
        ],
        correct: 0,
        explanation: "Le circulateur est symbolisé par un cercle avec une flèche indiquant le sens d'écoulement. Il assure la mise en mouvement de l'eau dans le circuit fermé de chauffage.",
        keyPoints: ["Cercle + flèche direction", "Circuit fermé chauffage", "Sur retour chaudière", "50 à 150 W"]
    },
    {
        id: 'symid006',
        category: "Symboles - Protection",
        difficulty: "medium",
        image: "images/symboles-tech/vase-expansion-ferme.png",
        imageAlt: "Symbole technique de plomberie - à identifier",
        question: "Identifiez ce symbole de sécurité thermique :",
        answers: [
            "Vase d'expansion fermé à membrane",
            "Ballon tampon de découplage hydraulique",
            "Bouteille de mélange primaire-secondaire",
            "Séparateur d'air et de boues magnétique"
        ],
        correct: 0,
        explanation: "Le vase d'expansion fermé à membrane absorbe les variations de volume de l'eau dues à la dilatation thermique. Sa membrane sépare le côté eau du côté gaz sous pression.",
        keyPoints: ["Membrane séparatrice", "Absorbe la dilatation (~4%)", "Côté gaz pré-chargé à 1 bar", "Maintient pression 1-3 bars"]
    },
    {
        id: 'symid007',
        category: "Symboles - Protection",
        difficulty: "medium",
        image: "images/symboles-tech/soupape-securite.png",
        imageAlt: "Symbole technique de plomberie - à identifier",
        question: "Quel est ce symbole de sécurité ?",
        answers: [
            "Soupape de sécurité à ressort taré",
            "Détendeur de pression aval réglable",
            "Réducteur de pression à membrane",
            "Vanne de régulation pression différentielle"
        ],
        correct: 0,
        explanation: "La soupape de sécurité s'ouvre automatiquement quand la pression dépasse son tarage. Tarée à 3 bars pour chauffage (circuit fermé) ou 7 bars pour ECS (groupe de sécurité sanitaire).",
        keyPoints: ["Ouverture automatique", "Tarage fixe non réglable", "3 bars chauffage", "7 bars ECS (groupe sécurité)"]
    },
    {
        id: 'symid008',
        category: "Symboles - Équipements",
        difficulty: "easy",
        image: "images/symboles-tech/manometre.png",
        imageAlt: "Symbole technique de plomberie - à identifier",
        question: "Cet instrument de mesure est :",
        answers: [
            "Un manomètre (mesure et affichage de la pression)",
            "Un thermomètre à cadran bimétallique",
            "Un hygromètre d'ambiance",
            "Un pressostat de régulation électrique"
        ],
        correct: 0,
        explanation: "Le manomètre mesure et affiche la pression du fluide de façon analogique. À distinguer du pressostat qui commande électriquement un équipement selon un seuil de pression.",
        keyPoints: ["Mesure pression (bar)", "Affichage analogique direct", "Pas de contact électrique", "À distinguer du pressostat"]
    },
    {
        id: 'symid009',
        category: "Symboles - Équipements",
        difficulty: "easy",
        image: "images/symboles-tech/thermometre.png",
        imageAlt: "Symbole technique de plomberie - à identifier",
        question: "Identifiez cet instrument de mesure :",
        answers: [
            "Un thermomètre (mesure et affichage de la température)",
            "Un thermostat de régulation de chaudière",
            "Une sonde de température PT100 à résistance",
            "Un thermocouple de contrôle de sécurité"
        ],
        correct: 0,
        explanation: "Le thermomètre mesure et affiche la température du fluide directement. À distinguer du thermostat (commande électrique) et de la sonde PT100 (signal électrique 4-20mA).",
        keyPoints: ["Mesure température directe", "Plongeur dans le fluide", "Affichage analogique", "À distinguer thermostat/sonde PT100"]
    },
    {
        id: 'symid010',
        category: "Symboles - Chauffage",
        difficulty: "easy",
        image: "images/symboles-tech/radiateur.png",
        imageAlt: "Symbole technique de plomberie - à identifier",
        question: "Ce symbole sur un schéma de chauffage représente :",
        answers: [
            "Un radiateur (émetteur de chaleur à eau chaude)",
            "Un échangeur de chaleur à plaques brasées",
            "Un ventilo-convecteur (fan-coil)",
            "Un plancher chauffant hydraulique"
        ],
        correct: 0,
        explanation: "Le radiateur est symbolisé par des lignes parallèles évoquant ses éléments. Il émet la chaleur de l'eau (70-80°C en BT, 45-55°C en très BT) par convection naturelle et rayonnement.",
        keyPoints: ["Émetteur chaleur eau chaude", "Convection + rayonnement", "Vanne thermostatique en tête", "Purgeur en partie haute"]
    },
    {
        id: 'symid011',
        category: "Symboles - Protection",
        difficulty: "hard",
        image: "images/symboles-tech/groupe-securite-sanitaire.png",
        imageAlt: "Symbole technique de plomberie - à identifier",
        question: "Ce symbole de sécurité sanitaire représente :",
        answers: [
            "Un groupe de sécurité sanitaire pour ballon ECS",
            "Un groupe hydrophore de surpression d'eau",
            "Un disconnecteur sanitaire de type BA",
            "Un limiteur de pression différentielle ECS"
        ],
        correct: 0,
        explanation: "Le groupe de sécurité sanitaire regroupe 3 fonctions en 1 corps : clapet anti-retour + soupape tarée à 7 bars + robinet de vidange. Obligatoire sur tout ballon ECS.",
        keyPoints: ["3 fonctions en 1 corps", "Soupape 7 bars (ECS)", "Arrivée eau froide ballon", "Obligatoire - jamais de vanne entre lui et le ballon"]
    },
    {
        id: 'symid012',
        category: "Symboles - Sanitaire",
        difficulty: "easy",
        image: "images/symboles-tech/baignoire.png",
        imageAlt: "Symbole sanitaire - à identifier",
        question: "Sur un plan de plomberie sanitaire, ce symbole représente :",
        answers: [
            "Une baignoire",
            "Un bac à douche rectangulaire",
            "Un bac de lavage collectif en inox",
            "Une cuve de rétention technique"
        ],
        correct: 0,
        explanation: "La baignoire est représentée en vue de dessus avec sa forme ovale ou rectangulaire arrondie. Taille standard : 170×70 cm. Alimentation par mitigeur, évacuation DN 40.",
        keyPoints: ["Vue de dessus", "170×70 cm standard", "Alimentation mitigeur bain", "Évacuation DN 40 avec siphon"]
    },
    {
        id: 'symid013',
        category: "Symboles - Sanitaire",
        difficulty: "easy",
        image: "images/symboles-tech/lavabo.png",
        imageAlt: "Symbole sanitaire - à identifier",
        question: "Ce symbole sur un plan sanitaire représente :",
        answers: [
            "Un lavabo (salle de bain)",
            "Une vasque semi-encastrée sur meuble",
            "Un évier de cuisine 1 bac",
            "Un lave-mains d'angle pour WC"
        ],
        correct: 0,
        explanation: "Le lavabo est représenté en vue de dessus avec son débordement arrière et ses deux perçages de robinetterie. Standard : 60×50 cm. Évacuation DN 32 par siphon bouteille.",
        keyPoints: ["Vue de dessus", "60×50 cm standard", "Robinetterie 2 trous (H/F)", "Évacuation DN 32 siphon bouteille"]
    },
    {
        id: 'symid014',
        category: "Symboles - Sanitaire",
        difficulty: "easy",
        image: "images/symboles-tech/evier-1bac.png",
        imageAlt: "Symbole sanitaire - à identifier",
        question: "Identifiez cet appareil sanitaire :",
        answers: [
            "Un évier 1 bac (cuisine)",
            "Un lave-mains compact pour WC",
            "Un bac à laver en buanderie",
            "Un lavabo de laboratoire"
        ],
        correct: 0,
        explanation: "L'évier 1 bac est l'appareil de cuisine. Il se distingue du lavabo par sa position en plan de travail et sa taille. Évacuation DN 40, nécessite un siphon avec bouchon de vidage.",
        keyPoints: ["Cuisine", "Plan de travail", "Évacuation DN 40", "Siphon avec bouchon de vidage"]
    },
    {
        id: 'symid015',
        category: "Symboles - Sanitaire",
        difficulty: "easy",
        image: "images/symboles-tech/wc.png",
        imageAlt: "Symbole sanitaire - à identifier",
        question: "Ce symbole sur un plan de plomberie représente :",
        answers: [
            "Un WC (cuvette + réservoir de chasse)",
            "Un urinoir mural à chasse intégrée",
            "Un broyeur sanitaire avec cuvette",
            "Une douche à l'italienne avec siphon de sol"
        ],
        correct: 0,
        explanation: "Le WC est représenté avec sa cuvette et son réservoir de chasse en vue de dessus. Taille standard : 36×60 cm. Évacuation obligatoirement en DN 100.",
        keyPoints: ["Vue dessus : cuvette + réservoir", "DN 100 évacuation", "Chasse 6/3 L (norme PMR)", "Ventilation primaire DN 100 en toiture"]
    },

    // ========== SCHÉMAS - IDENTIFICATION D'ÉLÉMENTS (8 questions) ==========
    {
        id: 'schid001',
        category: "Schémas - Groupe de Sécurité",
        difficulty: "medium",
        image: "images/schemas/schema-groupe-securite.png",
        imageAlt: "Schéma d'un groupe de sécurité sanitaire sur ballon ECS",
        question: "Sur ce schéma de groupe de sécurité ECS, quel organe s'ouvre automatiquement quand la pression dépasse 7 bars pour protéger le ballon ?",
        answers: [
            "La soupape de sécurité tarée à 7 bars",
            "Le clapet anti-retour à disque",
            "Le robinet de vidange à quart de tour",
            "Le manomètre de contrôle de pression"
        ],
        correct: 0,
        explanation: "La soupape de sécurité (ressort calibré à 7 bars) s'ouvre automatiquement pour évacuer la surpression. Elle est différente de la soupape de chauffage tarée à 3 bars.",
        keyPoints: ["Soupape tarée 7 bars", "Protection surpression ballon", "Ouverture automatique par ressort", "Différente soupape chauffage = 3 bars"]
    },
    {
        id: 'schid002',
        category: "Schémas - Groupe de Sécurité",
        difficulty: "hard",
        image: "images/schemas/schema-groupe-securite.png",
        imageAlt: "Schéma d'un groupe de sécurité sanitaire sur ballon ECS",
        question: "Sur ce schéma, quel composant du groupe de sécurité empêche l'eau chaude du ballon de refluer vers le réseau d'alimentation eau froide ?",
        answers: [
            "Le clapet anti-retour intégré au groupe",
            "La soupape de sécurité calibrée à 7 bars",
            "Le robinet d'isolement amont",
            "La chambre d'expansion intégrée au corps"
        ],
        correct: 0,
        explanation: "Le clapet anti-retour du groupe de sécurité empêche le retour d'eau chaude contaminée vers le réseau public. Obligatoire : sans lui, tout le réseau collectif serait contaminé.",
        keyPoints: ["Clapet = sens unique", "Protège le réseau public", "Réglementaire DTU 60.11", "Fonctionne indépendamment de la pression"]
    },
    {
        id: 'schid003',
        category: "Schémas - Adoucisseur",
        difficulty: "medium",
        image: "images/schemas/schema-adoucisseur.png",
        imageAlt: "Schéma d'installation d'un adoucisseur d'eau avec by-pass",
        question: "Sur ce schéma d'adoucisseur, le by-pass (dérivation) permet de :",
        answers: [
            "Maintenir l'alimentation en eau non-adoucie pendant la régénération des résines",
            "Diluer l'eau adoucie pour ajuster le TH de sortie au niveau souhaité",
            "Augmenter la capacité d'adoucissement en faisant passer l'eau deux fois",
            "Rincer les résines encrassées sans consommer de saumure"
        ],
        correct: 0,
        explanation: "Pendant la régénération (adoucisseur hors service), le by-pass maintient l'alimentation en eau, temporairement non-adoucie. Indispensable en habitat pour ne pas couper l'eau.",
        keyPoints: ["Régénération = adoucisseur hors service", "By-pass = alimentation directe EF", "Eau non-adoucie temporairement", "Indispensable habitat occupé"]
    },
    {
        id: 'schid004',
        category: "Schémas - Adoucisseur",
        difficulty: "hard",
        image: "images/schemas/schema-adoucisseur.png",
        imageAlt: "Schéma d'installation d'un adoucisseur d'eau avec by-pass",
        question: "Sur ce schéma d'adoucisseur, par quel procédé les résines saturées en calcium sont-elles régénérées ?",
        answers: [
            "Injection d'une solution de saumure (NaCl dissous) en contre-courant",
            "Passage d'acide chlorhydrique dilué pour dissoudre le calcaire accumulé",
            "Chauffe de l'eau à 80°C pour désorber thermiquement les ions calcaires",
            "Application d'un courant électrique pour inverser la polarité des résines"
        ],
        correct: 0,
        explanation: "La régénération échange les ions Ca²⁺ et Mg²⁺ saturant les résines contre des ions Na⁺ de la saumure. Le sel de régénération (NaCl) est la seule consommable de l'adoucisseur.",
        keyPoints: ["Saumure = eau + sel NaCl", "Échange ionique Ca²⁺/Mg²⁺ → Na⁺", "Consommation sel ~150g/régénération", "Rinçage final obligatoire"]
    },
    {
        id: 'schid005',
        category: "Schémas - Installation Chauffage",
        difficulty: "medium",
        image: "images/schemas/schema-chauffage-complet.png",
        imageAlt: "Schéma complet d'installation de chauffage central",
        question: "Sur ce schéma d'installation de chauffage, quel organe raccordé directement sur le circuit fermé absorbe la dilatation de l'eau lors de la chauffe ?",
        answers: [
            "Le vase d'expansion à membrane",
            "Le ballon tampon de découplage",
            "Le séparateur hydraulique",
            "Le purgeur automatique central"
        ],
        correct: 0,
        explanation: "Le vase d'expansion fermé à membrane compense la dilatation de l'eau (~4% entre 10 et 80°C) pour maintenir la pression entre 1 et 3 bars. Sa membrane sépare eau et azote.",
        keyPoints: ["Dilatation ~4% (10→80°C)", "Maintien pression 1-3 bars", "Membrane eau/azote", "Pré-charge azote à 1 bar"]
    },
    {
        id: 'schid006',
        category: "Schémas - Installation Chauffage",
        difficulty: "hard",
        image: "images/schemas/schema-chauffage-complet.png",
        imageAlt: "Schéma complet d'installation de chauffage central",
        question: "Sur ce schéma de chauffage, quel composant adapte la température de l'eau de départ en fonction de la température extérieure (loi d'eau) ?",
        answers: [
            "Le régulateur/programmateur avec sonde extérieure",
            "La vanne mélangeuse 3 voies seule, sans régulateur",
            "Le thermostat d'ambiance installé dans la pièce de référence",
            "La soupape de sécurité chaudière à tarage thermique"
        ],
        correct: 0,
        explanation: "La régulation par sonde extérieure (loi d'eau) adapte la température de départ : -10°C → ~75°C départ ; +5°C → ~55°C départ. Économies de 10-15% vs thermostat seul.",
        keyPoints: ["Sonde extérieure", "Courbe de chauffe programmable", "Température départ variable", "Économies 10-15%"]
    },
    {
        id: 'schid007',
        category: "Schémas - Primaire Secondaire",
        difficulty: "hard",
        image: "images/schemas/schema-primaire-secondaire.png",
        imageAlt: "Schéma de circuit primaire et secondaire de chauffage",
        question: "Sur ce schéma primaire/secondaire, quel composant découple hydrauliquement les deux circuits tout en assurant le transfert thermique ?",
        answers: [
            "Le ballon tampon (ou bouteille de mélange)",
            "La vanne 3 voies de régulation de température",
            "L'échangeur à plaques brasées inox",
            "Le circulateur à vitesse variable du secondaire"
        ],
        correct: 0,
        explanation: "Le ballon tampon découple les débits : la chaudière travaille à son débit optimal sans être perturbée par les variations de demande des émetteurs. Protège la chaudière des retours froids.",
        keyPoints: ["Découplage hydraulique", "Ballon tampon ou bouteille mélange", "Protection chaudière retours froids", "Indépendance débits primaire/secondaire"]
    },
    {
        id: 'schid008',
        category: "Schémas - Primaire Secondaire",
        difficulty: "hard",
        image: "images/schemas/schema-primaire-secondaire.png",
        imageAlt: "Schéma de circuit primaire et secondaire de chauffage",
        question: "Sur ce schéma, pourquoi chaque circuit (primaire et secondaire) possède-t-il son propre vase d'expansion et sa propre soupape de sécurité ?",
        answers: [
            "Chaque circuit fermé indépendant doit avoir ses propres organes de sécurité dimensionnés pour son volume",
            "Pour équilibrer les pressions entre les deux circuits via les organes de sécurité",
            "Obligation réglementaire uniquement pour les chaudières à condensation type B",
            "Pour permettre la vidange indépendante sans interaction entre les circuits"
        ],
        correct: 0,
        explanation: "Chaque circuit fermé indépendant doit être protégé par sa propre soupape (débit d'évacuation calculé) et son propre vase (dimensionné selon son volume). Ce sont 2 installations séparées.",
        keyPoints: ["Chaque circuit fermé = organes de sécurité dédiés", "Dimensionnement propre à chaque volume", "Soupape : débit calculé", "Vase : volume × coefficient dilatation"]
    },

    // ========== TERMINOLOGIE - DÉFINITION → TERME (13 questions) ==========
    {
        id: 'term001',
        category: "Systèmes Thermiques - Sécurité",
        difficulty: "hard",
        question: "Dispositif empêchant la contamination du réseau d'eau potable par retour d'eau non-potable, via une zone de pression réduite contrôlée par deux clapets et une chambre intermédiaire à l'atmosphère :",
        answers: [
            "Un disconnecteur à zone de pression réduite (type EA ou BA)",
            "Un clapet anti-retour simple à disque libre",
            "Un séparateur de réseau hydraulique à manchon",
            "Un filtre anti-retour à tamis inox"
        ],
        correct: 0,
        explanation: "Le disconnecteur (types EA, BA, CA selon le niveau de risque de contamination) crée une zone de basse pression entre deux clapets. Contrôle annuel obligatoire par organisme agréé.",
        keyPoints: ["Types EA/BA/CA selon risque", "Zone basse pression intermédiaire", "Protège réseau AEP public", "Contrôle annuel SOCOTEC/Véritas"]
    },
    {
        id: 'term002',
        category: "Systèmes Thermiques - ECS",
        difficulty: "hard",
        question: "Appareil qui produit de l'eau chaude sanitaire stockée dans un ballon préchauffé par des capteurs solaires, avec appoint chaudière ou électrique pour les jours de faible ensoleillement :",
        answers: [
            "Un Chauffe-Eau Solaire Individuel (CESI)",
            "Un échangeur thermodynamique à détente directe",
            "Un chauffe-eau thermodynamique (PAC air/eau)",
            "Un ballon électrique à accumulation avec résistance stéatite"
        ],
        correct: 0,
        explanation: "Le CESI couple capteurs solaires thermiques + ballon bi-énergie (solaire + appoint). Taux de couverture solaire : 60-70% en France. Aide MaPrimeRénov' possible.",
        keyPoints: ["CESI = Chauffe-Eau Solaire Individuel", "Capteurs solaires thermiques", "Ballon bi-énergie", "60-70% couverture solaire annuelle"]
    },
    {
        id: 'term003',
        category: "Systèmes Thermiques - Plomberie",
        difficulty: "hard",
        question: "Phénomène hydraulique de formation et d'implosion de bulles de vapeur dans une pompe, causé par une dépression locale supérieure à la pression de vapeur du liquide, entraînant bruit, vibrations et érosion des pièces :",
        answers: [
            "La cavitation",
            "Le coup de bélier",
            "L'auto-amorçage par dépression",
            "La vaporisation flash en sortie de vanne"
        ],
        correct: 0,
        explanation: "La cavitation se produit quand la pression locale chute sous la pression de vapeur : des bulles de vapeur se forment puis implosent violemment, érodant les aubages de la roue.",
        keyPoints: ["Pression locale < P_vapeur", "Bulles implosion = érosion roue", "Bruit caractéristique (graviers)", "Prévention : Hm aspiration < 6m"]
    },
    {
        id: 'term004',
        category: "Systèmes Thermiques - Plomberie",
        difficulty: "medium",
        question: "Surpression transitoire dans une canalisation, générée par l'arrêt brutal d'un fluide en mouvement (pompe coupée, vanne fermée rapidement), pouvant provoquer chocs, vibrations et ruptures de canalisations :",
        answers: [
            "Le coup de bélier",
            "La cavitation de décharge",
            "La résonance hydrodynamique",
            "Le phénomène d'inertie fluidique de Joukowski"
        ],
        correct: 0,
        explanation: "Le coup de bélier crée des ondes de pression pouvant dépasser 100× la pression nominale. Remèdes : fermeture progressive des vannes, pot d'inertie, soupape anti-bélier.",
        keyPoints: ["Arrêt brutal du flux", "Onde de surpression propagée", "Fermeture progressive = prévention", "Pot d'inertie ou soupape anti-bélier"]
    },
    {
        id: 'term005',
        category: "Chauffage - Circuits",
        difficulty: "hard",
        question: "Procédé d'ajustement des résistances hydrauliques par des vannes de réglage, permettant de distribuer exactement les débits calculés à chaque émetteur indépendamment de sa position dans le réseau :",
        answers: [
            "L'équilibrage hydraulique",
            "La régulation proportionnelle-intégrale",
            "La compensation de débit par bypass",
            "L'ajustement dynamique de vitesse du circulateur"
        ],
        correct: 0,
        explanation: "L'équilibrage hydraulique évite que les émetteurs proches reçoivent trop et les éloignés pas assez. Vannes d'équilibrage statiques ou dynamiques, mesure par débitmètre.",
        keyPoints: ["Vannes d'équilibrage statiques/dynamiques", "Mesure débits par orifice calibré", "Évite déséquilibre court-circuit", "Calcul pertes de charge préalable"]
    },
    {
        id: 'term006',
        category: "Chauffage - Régulation",
        difficulty: "hard",
        question: "Mode de régulation calculant la température de l'eau de départ en fonction de la température extérieure mesurée, selon une courbe de chauffe programmée dans le régulateur :",
        answers: [
            "La régulation par loi d'eau (compensation météorologique)",
            "La régulation par thermostat d'ambiance à sonde unique",
            "La régulation par sonde de plancher chauffant",
            "La régulation prédictive par apprentissage automatique"
        ],
        correct: 0,
        explanation: "La loi d'eau adapte la température de départ selon la température extérieure : courbe réglable (ex: -10°C → 75°C départ). Économies de 10-15% vs thermostat ambiance seul.",
        keyPoints: ["Sonde extérieure obligatoire", "Courbe de chauffe réglable", "Température départ variable selon T°ext", "Combinable avec thermostat ambiance"]
    },
    {
        id: 'term007',
        category: "Systèmes Thermiques - ECS",
        difficulty: "medium",
        question: "Maladie respiratoire grave causée par la bactérie Legionella pneumophila, se développant dans les réseaux d'eau entre 25 et 45°C, transmise par inhalation d'aérosols contaminés (douche, aérotherme) :",
        answers: [
            "La légionellose (maladie du légionnaire)",
            "La leptospirose transmise par les eaux douces",
            "La cryptosporidiose intestinale",
            "La fièvre de Pontiac (forme bénigne différente)"
        ],
        correct: 0,
        explanation: "La légionellose est mortelle dans 10-15% des cas. Prévention ECS : stockage à 60°C minimum, distribution à 50°C minimum, purge hebdomadaire si peu utilisé.",
        keyPoints: ["Legionella : 25-45°C zone de risque", "Stockage ECS ≥ 60°C obligatoire", "Distribution ≥ 50°C", "Purge hebdomadaire si inutilisé"]
    },
    {
        id: 'term008',
        category: "Systèmes Avancés - Ventilation",
        difficulty: "medium",
        question: "Système de ventilation qui extrait mécaniquement l'air vicié des pièces humides, sans souffler d'air neuf (entrée naturelle par grilles en menuiseries des pièces de vie) :",
        answers: [
            "La VMC simple flux auto-réglable",
            "La VMC double flux avec échangeur thermique",
            "La VEC (Ventilation par Extraction Concentrée)",
            "La ventilation naturelle assistée par conduits shunt"
        ],
        correct: 0,
        explanation: "La VMC simple flux (la plus courante en rénovation) extrait l'air des pièces humides (cuisine, SdB, WC). L'air neuf entre par les grilles de façade en pièces de vie.",
        keyPoints: ["Extraction seule (pièces humides)", "Pas de soufflage", "Entrées d'air en façade", "Débit réglementaire : 135 m³/h minimum logement"]
    },
    {
        id: 'term009',
        category: "Systèmes Avancés - Gaz",
        difficulty: "hard",
        question: "Document délivré par un organisme de contrôle agréé après vérification d'une installation intérieure de gaz (étanchéité, conformité DTU 61.1), obligatoire à la mise en service ou remise en service :",
        answers: [
            "L'attestation de conformité gaz (délivrée par CERTIGAZ ou Qualigaz)",
            "Le certificat d'aptitude professionnelle au gaz (habilitation)",
            "Le diagnostic de performance énergétique (DPE) avec mention gaz",
            "Le procès-verbal de réception de chantier signé par le maître d'œuvre"
        ],
        correct: 0,
        explanation: "CERTIGAZ et Qualigaz sont les organismes agréés pour contrôler et certifier les installations gaz. Cette attestation est exigée par le fournisseur pour l'ouverture du compteur.",
        keyPoints: ["CERTIGAZ ou Qualigaz", "Conformité DTU 61.1", "Obligatoire mise en service", "Vérification étanchéité + conformité + ventilation"]
    },
    {
        id: 'term010',
        category: "Fondamentaux & Sécurité - Atelier",
        difficulty: "medium",
        question: "Opération créant un filetage extérieur hélicoïdal sur un tube ou une barre d'acier à l'aide d'une filière, permettant le vissage d'un raccord ou d'un écrou fileté :",
        answers: [
            "Le filetage (ou filage)",
            "Le taraudage",
            "Le tronçonnage hélicoïdal",
            "Le fraisage en bout fileté"
        ],
        correct: 0,
        explanation: "Le filetage (ou filage) crée le profil hélicoïdal extérieur avec une filière. Le taraudage crée le filetage intérieur dans un trou avec un taraud. Ces opérations sont complémentaires.",
        keyPoints: ["Filetage = extérieur (filière)", "Taraudage = intérieur (taraud)", "Graissage obligatoire", "3 passes minimum (ébauche, demi-finition, finition)"]
    },
    {
        id: 'term011',
        category: "Fondamentaux & Sécurité - Éco-construction",
        difficulty: "medium",
        question: "Document estimant la consommation annuelle d'énergie d'un logement en kWh/m²/an et son impact CO2, classant le bien de A (très performant, < 70 kWh/m²) à G (passoire thermique, > 420 kWh/m²) :",
        answers: [
            "Le Diagnostic de Performance Énergétique (DPE)",
            "Le Bilan Thermique Réglementaire (BTR) selon RT2012",
            "Le label BBC-Rénovation délivré par Promotelec",
            "L'Audit Énergétique obligatoire pour les maisons classées F ou G"
        ],
        correct: 0,
        explanation: "Le DPE (obligatoire à la vente et à la location) classe de A à G. Depuis 2025, les logements classés G sont interdits à la location. Depuis 2028, les logements F seront interdits.",
        keyPoints: ["A < 70 kWh/m²/an", "G > 420 kWh/m²/an", "Obligatoire vente et location", "G interdit location depuis 01/2025"]
    },
    {
        id: 'term012',
        category: "Fondamentaux & Sécurité - Combustion",
        difficulty: "hard",
        question: "Valeur calorifique d'un combustible incluant la chaleur de condensation de la vapeur d'eau contenue dans les fumées (supérieure au PCI d'environ 10% pour le gaz naturel) :",
        answers: [
            "Le PCS (Pouvoir Calorifique Supérieur)",
            "Le PCI (Pouvoir Calorifique Inférieur)",
            "Le PCN (Pouvoir Calorifique Net à condensation)",
            "Le PCE (Pouvoir Calorifique Effectif à charge nominale)"
        ],
        correct: 0,
        explanation: "PCS > PCI car il intègre la chaleur latente de condensation (≈10% pour le gaz naturel). Les chaudières à condensation récupèrent cette énergie, d'où un rendement > 100% PCI.",
        keyPoints: ["PCS > PCI (+ chaleur latente)", "Δ ≈ 10% pour gaz naturel", "Base de calcul chaudières condensation", "Rendement condensation > 100% PCI"]
    },
    {
        id: 'term013',
        category: "Systèmes Thermiques - Dimensionnement",
        difficulty: "hard",
        question: "Perte de pression causée par les changements de direction, vannes, coudes, tés et autres obstacles ponctuels dans un réseau de tuyauteries, s'ajoutant aux pertes linéaires par frottement :",
        answers: [
            "La perte de charge singulière",
            "La perte de charge linéaire de Darcy-Weisbach",
            "La résistance hydraulique spécifique du réseau",
            "La dépression de cavitation aux points hauts"
        ],
        correct: 0,
        explanation: "Les pertes singulières (coudes, vannes, tés, réductions) représentent 20-40% des pertes totales. Elles se calculent en longueur équivalente de tube droit ajoutée aux pertes linéaires.",
        keyPoints: ["Coudes, vannes, tés, réductions", "20-40% des pertes totales", "Méthode longueur équivalente", "Ajoutée aux pertes linéaires"]
    },

    // ========== TERMINOLOGIE - TERME → DÉFINITION (12 questions) ==========
    {
        id: 'term014',
        category: "Systèmes Thermiques - Sécurité",
        difficulty: "medium",
        question: "Qu'est-ce qu'un purgeur automatique d'air dans un circuit de chauffage ?",
        answers: [
            "Un dispositif à flotteur qui évacue automatiquement l'air accumulé aux points hauts du circuit hydraulique",
            "Un organe qui régule la pression dans le vase d'expansion en évacuant l'excès",
            "Une soupape de sécurité qui protège le circuit contre les surpressions de vapeur",
            "Un appareil mesurant la teneur en oxygène dissous pour contrôler la corrosion"
        ],
        correct: 0,
        explanation: "Le purgeur automatique (à flotteur ou mécanique) s'ouvre pour laisser passer l'air et se ferme dès que l'eau arrive. À installer en points hauts du circuit et sur les radiateurs.",
        keyPoints: ["Points hauts du circuit", "Flotteur = ouverture automatique", "Fermeture dès que l'eau arrive", "Radiateurs froids en partie haute = air non purgé"]
    },
    {
        id: 'term015',
        category: "Chauffage - Régulation",
        difficulty: "medium",
        question: "Quelle est la différence entre un thermostat d'ambiance simple et un thermostat programmable ?",
        answers: [
            "Le programmable permet de définir des plages horaires avec des températures différentes (confort 20°C / réduit 17°C / hors-gel 8°C)",
            "Le programmable est nécessairement connecté Wi-Fi et piloté par application mobile",
            "Le thermostat d'ambiance simple est plus précis (±0,1°C) que le programmable",
            "Le programmable est utilisable uniquement sur les chaudières à condensation récentes"
        ],
        correct: 0,
        explanation: "Le thermostat programmable permet plusieurs zones de température selon les heures (ex: 20°C le jour, 17°C la nuit, 8°C en absence). Économies de 10 à 20% selon programmation.",
        keyPoints: ["Plages horaires configurables", "Confort/Réduit/Hors-gel", "Économies 10-20%", "7 plages/jour minimum en RT2012"]
    },
    {
        id: 'term016',
        category: "Chauffage - Générateurs",
        difficulty: "hard",
        question: "Qu'est-ce que le rendement d'une chaudière à condensation peut dépasser 100% du PCI et pourquoi ?",
        answers: [
            "Elle récupère la chaleur latente de condensation de la vapeur d'eau des fumées (≈10% pour gaz naturel), non comptée dans le PCI",
            "Elle utilise un échangeur supplémentaire qui génère de l'énergie électrique en complément",
            "La condensation des fumées comprime l'eau de retour, augmentant son enthalpie disponible",
            "Elle fonctionne avec un combustible enrichi dont le PCI réel est supérieur au PCI déclaré"
        ],
        correct: 0,
        explanation: "Le PCI exclut la chaleur de condensation de la vapeur d'eau des fumées. En récupérant cette énergie via un échangeur de condensation, la chaudière dépasse 100% PCI (généralement 105-109%).",
        keyPoints: ["PCI exclut chaleur latente condensation", "Condensation fumées < 57°C", "105-109% rendement PCI", "T° retour < 55°C pour condenser"]
    },
    {
        id: 'term017',
        category: "Systèmes Avancés - Solaire",
        difficulty: "hard",
        question: "Quelle est la différence de performance entre un capteur solaire plan vitré et un capteur à tubes sous vide par temps froid ou couvert ?",
        answers: [
            "Les tubes sous vide sont plus efficaces par temps froid car le vide élimine les pertes par convection entre l'absorbeur et la vitre",
            "Le capteur plan est plus efficace en hiver car sa surface plus grande capte plus d'énergie diffuse",
            "Les tubes sous vide ne fonctionnent qu'en circuit forcé, pas en thermosiphon, ce qui les pénalise",
            "Le capteur plan résiste mieux à la surchauffe estivale car il perd plus de chaleur en été"
        ],
        correct: 0,
        explanation: "Le vide dans les tubes supprime la convection : l'absorbeur perd moins de chaleur même à basse température extérieure. Rendement tubes > plan quand T°ext < 15°C ou rayonnement faible.",
        keyPoints: ["Vide = suppression convection", "Meilleur par T°ext < 15°C", "Capteur plan : robuste, moins cher", "Tubes sous vide : meilleur hiver/couvert"]
    },
    {
        id: 'term018',
        category: "Systèmes Avancés - Ventilation",
        difficulty: "hard",
        question: "Qu'est-ce qu'une VMC double flux et quel est son principal avantage sur la VMC simple flux ?",
        answers: [
            "Elle souffle de l'air neuf préchauffé via un échangeur avec l'air extrait, récupérant 75-95% de l'énergie de ventilation",
            "Elle extrait deux fois plus d'air qu'une VMC simple flux pour les grands logements",
            "Elle chauffe le logement en été grâce à la récupération thermique de l'air extérieur",
            "Elle fonctionne uniquement la nuit pour le rafraîchissement par free-cooling"
        ],
        correct: 0,
        explanation: "La VMC double flux récupère la chaleur de l'air extrait pour préchauffer l'air neuf (rendement échangeur 75-95%). Obligatoire dans les maisons passives. Coût plus élevé à l'installation.",
        keyPoints: ["Échangeur air/air thermique", "Récupération 75-95% énergie ventilation", "Air neuf préchauffé avant soufflage", "Obligatoire label Passif/BEPOS"]
    },
    {
        id: 'term019',
        category: "Chauffage - Circulateurs",
        difficulty: "medium",
        question: "Qu'est-ce qu'un circulateur à rotor noyé et pourquoi est-il préféré en chauffage résidentiel ?",
        answers: [
            "Son moteur baigne directement dans le fluide caloporteur qui assure son refroidissement et sa lubrification, sans joint d'étanchéité rotatif",
            "Son rotor est noyé dans une résine époxy imperméable pour résister à l'humidité des locaux techniques",
            "Il peut fonctionner à sec sans dommage, contrairement aux circulateurs à joint mécanique",
            "Son axe horizontal est noyé dans le béton pour amortir les vibrations transmises aux planchers"
        ],
        correct: 0,
        explanation: "Le rotor noyé (type dominant en résidentiel) est immergé dans le fluide : pas de joint d'étanchéité = pas de fuite mécanique. Silencieux, fiable, longue durée de vie (15-20 ans).",
        keyPoints: ["Rotor immergé dans le fluide", "Pas de joint rotatif = pas de fuite", "Fluide = refroidissement + lubrification", "Standard résidentiel : Grundfos, Wilo, DAB"]
    },
    {
        id: 'term020',
        category: "Systèmes Avancés - Protection",
        difficulty: "hard",
        question: "Quelle est la différence entre un inhibiteur de corrosion et un anti-tartre dans le traitement d'eau d'un circuit de chauffage ?",
        answers: [
            "L'inhibiteur forme une couche protectrice sur les métaux (contre l'oxydation) ; l'anti-tartre séquestre ou disperse les ions calcaires (contre l'entartrage)",
            "L'inhibiteur est dosé une seule fois à la mise en eau ; l'anti-tartre nécessite un dosage mensuel continu",
            "L'inhibiteur est réservé aux circuits en acier ; l'anti-tartre est uniquement pour les circuits en aluminium",
            "Ce sont deux noms du même produit, la différence est uniquement commerciale selon les fabricants"
        ],
        correct: 0,
        explanation: "L'inhibiteur de corrosion forme une couche passive sur les métaux (Fe, Al, Cu). L'anti-tartre séquestre les ions Ca²⁺ et Mg²⁺. Les deux sont souvent combinés dans un seul produit bi-fonctionnel.",
        keyPoints: ["Inhibiteur = couche passive anti-corrosion", "Anti-tartre = séquestration Ca²⁺/Mg²⁺", "Souvent combinés bi-fonctionnels", "Dosage : 1-2% du volume circuit"]
    },
    {
        id: 'term021',
        category: "Chauffage - Émetteurs",
        difficulty: "medium",
        question: "Quelle est la différence technique entre un plancher chauffant hydraulique et un plancher chauffant électrique ?",
        answers: [
            "L'hydraulique utilise des tubes PER/multicouche noyés dans la chape avec eau chaude à 35-45°C ; l'électrique utilise des câbles résistifs ou un film chauffant",
            "L'hydraulique chauffe plus vite car l'eau a une meilleure conductivité thermique que les câbles électriques",
            "L'électrique est obligatoirement couplé à une pompe à chaleur pour atteindre une efficacité acceptable",
            "L'hydraulique ne peut pas être installé en rénovation, uniquement en construction neuve"
        ],
        correct: 0,
        explanation: "Le plancher hydraulique nécessite une chaudière ou PAC basse température (35-45°C). L'électrique est plus simple mais plus coûteux à l'usage. Inertie thermique identique (dalle béton 8-10 cm).",
        keyPoints: ["Hydraulique : tubes PER + eau 35-45°C", "Électrique : câbles résistifs ou film", "Inertie identique (dalle béton)", "Hydraulique + PAC = optimal"]
    },
    {
        id: 'term022',
        category: "Systèmes Thermiques - ECS",
        difficulty: "medium",
        question: "Qu'est-ce qu'un ballon ECS à préparation indirecte (ou ballon à serpentin) ?",
        answers: [
            "Un ballon dont l'eau sanitaire est chauffée par un serpentin parcouru par l'eau du circuit de chauffage, sans aucun mélange des deux fluides",
            "Un ballon alimenté en eau froide de façon indirecte via un surpresseur pour maintenir la pression",
            "Un ballon qui produit l'ECS uniquement à la demande sans stockage (système instantané)",
            "Un ballon couplé à un panneau solaire via une pompe à chaleur intermédiaire de type DRV"
        ],
        correct: 0,
        explanation: "Le ballon indirect (ou à serpentin) échange la chaleur de la chaudière vers l'ECS via un serpentin interne. Les deux fluides ne se mélangent JAMAIS. Pas d'appoint électrique intégré.",
        keyPoints: ["Serpentin interne = échangeur", "2 fluides toujours séparés", "Couplé à chaudière/PAC", "Pas d'appoint électrique intégré"]
    },
    {
        id: 'term023',
        category: "Fondamentaux & Sécurité - Sécurité",
        difficulty: "medium",
        question: "Qu'est-ce qu'une habilitation électrique de niveau B0 et quelle est sa limite d'intervention ?",
        answers: [
            "Elle autorise un non-électricien à travailler dans un environnement électrique hors tension : perçage, fixation, sans contact avec des conducteurs actifs",
            "Elle autorise tous les travaux sur installations électriques jusqu'à 400V en milieu professionnel",
            "Elle est réservée aux électriciens certifiés pour les travaux en basse tension (BT)",
            "Elle permet uniquement les contrôles visuels et les relevés sans aucune intervention physique"
        ],
        correct: 0,
        explanation: "B0 = niveau minimal pour un non-électricien travaillant à proximité d'installations électriques. Elle n'autorise PAS les travaux sous tension ni le contact avec des conducteurs.",
        keyPoints: ["B0 = non-électricien", "Hors tension uniquement", "Pas de contact conducteurs actifs", "Perçage, fixation, déplacement matériel"]
    },
    {
        id: 'term024',
        category: "Systèmes Thermiques - Dimensionnement",
        difficulty: "hard",
        question: "Qu'est-ce que le débit nominal d'un appareil sanitaire et à quoi sert-il en plomberie ?",
        answers: [
            "Le débit consommé par l'appareil en utilisation normale (en L/s), servant au calcul des sections de canalisations par la méthode des unités de comptage",
            "La pression minimale garantie par le réseau pour que l'appareil fonctionne correctement",
            "Le volume maximum que l'appareil peut stocker avant de déborder en cas de défaillance du siphon",
            "La vitesse de remplissage d'un ballon ECS en régime thermique normal"
        ],
        correct: 0,
        explanation: "Le débit nominal (ex: lavabo = 0,1 L/s, douche = 0,15 L/s, baignoire = 0,3 L/s) est la base du calcul des canalisations. La méthode des UC (Unités de Comptage) s'appuie dessus.",
        keyPoints: ["Lavabo : 0,1 L/s", "Douche : 0,15 L/s", "Baignoire : 0,3 L/s", "Base calcul sections (méthode UC)"]
    },
    {
        id: 'term025',
        category: "Chauffage - Remplissage/Purge",
        difficulty: "medium",
        question: "Quelles sont les étapes correctes pour remplir et purger un circuit de chauffage à eau chaude après travaux ?",
        answers: [
            "1) Fermer tous les robinets de purge, 2) Ouvrir l'alimentation en eau lentement, 3) Purger chaque radiateur du bas vers le haut, 4) Vérifier pression (1-1,5 bar froid), 5) Redémarrer la chaudière",
            "1) Démarrer la chaudière à pleine puissance, 2) Ouvrir les purgeurs pour évacuer l'air chaud, 3) Ajouter de l'eau jusqu'à 2,5 bars, 4) Fermer progressivement les purgeurs",
            "1) Remplir à 3 bars pour forcer l'eau jusqu'aux points hauts, 2) Purger en une seule fois, 3) Revenir à 1 bar après purge, 4) Vérifier l'étanchéité sous pression",
            "1) Vider totalement le circuit avant remplissage, 2) Injecter un fluide prétraité sous pression, 3) Purger uniquement les purgeurs automatiques, 4) Mettre en chauffe directement"
        ],
        correct: 0,
        explanation: "La purge se fait du bas vers le haut (les radiateurs bas en premier, puis les hauts). Pression de remplissage : 1 à 1,5 bar en eau froide (lira 1,5-2 bar chaud). Ne pas trop remplir.",
        keyPoints: ["Bas vers le haut", "1-1,5 bar eau froide", "Purgeur = 1 tour, attendre l'eau, refermer", "Vérifier après chauffe : < 3 bars"]
    }
];
