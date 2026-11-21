// Études de cas types Prestoillico. Situations représentatives ; chiffres indicatifs
// à remplacer par des résultats clients mesurés au moment de la publication.
export const method = [
  {
    title: "Audit & cadrage",
    text: "Parcours, outils, CRM, automatisations et data : on clarifie l'existant et les leviers à activer en premier.",
  },
  {
    title: "Design & implémentation",
    text: "Design, intégrations, automatisations et IA, livrés par itérations courtes jusqu'à la mise en ligne.",
  },
  {
    title: "Pilotage & optimisation",
    text: "KPI suivis, ajustements et transmission aux équipes pour que les gains tiennent.",
  },
];

export const projects = [
  {
    slug: "eigna",
    number: "01",
    title: "PROJET 01",
    name: "CRM connecté",
    category: "CRM & IA appliquée",
    statement: ["Cartographier vos outils, détecter les frictions,", "automatiser et mesurer le gain."],
    statementMobile: ["Cartographier vos outils,", "détecter les frictions,", "automatiser et mesurer le gain."],
    tagline: "Une seule vue. Tous vos outils.",
    outcome: "Site, WhatsApp, mail et facturation branchés sur un CRM unique — avec la marge visible par mission.",
    services: "CRM · Automatisation · IA · Dashboards",
    sector: "PME de services, 30–80 personnes",
    duration: "6–8 semaines",
    team: "Chef de projet · Consultant CRM · Développeur",
    context:
      "Une PME jongle entre site, Excel, mail, WhatsApp et facturation. Chaque équipe a sa vérité. On cartographie, on relie, on mesure — adapté Maroc / MENA / Europe (TVA, ICE, SIREN, FR/AR).",
    challengeTitle: "Six outils. Zéro vue unique.",
    problem:
      "Les leads se perdent entre mail et WhatsApp, les devis ne sont pas rattachés, la direction pilote avec des chiffres d'une semaine.",
    before: [
      "Leads dispersés (mail, WhatsApp, fichiers)",
      "Triple ressaisie des mêmes données",
      "Reporting commercial reconstruit chaque lundi",
      "Marge par mission invisible",
    ],
    after: [
      "CRM unique alimenté par tous les canaux",
      "Une saisie, synchronisée partout",
      "Dashboard commercial en continu",
      "Marge visible dès la facturation",
    ],
    approach: [
      {
        title: "Cartographier",
        text: "Atelier de deux demi-journées : outils, flux, frictions classées par coût réel.",
      },
      {
        title: "Connecter",
        text: "CRM, pipelines, connecteurs site / messagerie / WhatsApp / facturation. Migration propre.",
      },
      {
        title: "Automatiser",
        text: "Relances, devis, qualification IA. Dashboard ROI temps + marge par mission.",
      },
    ],
    deliverables: [
      "Carte des flux avant / après",
      "CRM configuré (pipelines, droits)",
      "8–12 automatisations documentées",
      "Dashboard commercial & marge",
      "Formation + guide d'usage",
    ],
    stack: ["HubSpot / Zoho / Odoo", "n8n ou Make", "WhatsApp Business API", "LLM qualification", "Metabase / Looker"],
    offer: "crm-automatisation",
    metrics: [
      { label: "Ressaisie", value: "×1", text: "Une info, tous les outils." },
      { label: "Relances perdues", value: "0", text: "Suivi depuis une seule vue." },
      { label: "Pipeline qualifié", value: "3,1×", text: "Hausse moyenne des opportunités." },
    ],
  },
  {
    slug: "orbit",
    number: "02",
    title: "PROJET 02",
    name: "Assistant agentique",
    category: "IA agentique",
    statement: ["Formulez votre demande : l'assistant agit", "dans les bons outils pour la traiter."],
    statementMobile: ["Formulez votre demande :", "l'assistant agit dans les bons", "outils pour la traiter."],
    tagline: "De l'intention à l'action.",
    outcome: "Un assistant qui répond, cherche et agit dans le CRM, l'agenda et la doc — avec validation humaine sur le sensible.",
    services: "IA appliquée · Automatisation · Intégrations",
    sector: "Services, support & back-office",
    duration: "6–10 semaines",
    team: "Chef de projet · Ingénieur IA · Intégrations",
    context:
      "Assistant connecté aux opérations : qualification, recherche interne, premier niveau, escalade fluide. Il agit dans vos outils, sous vos droits.",
    challengeTitle: "Une demande simple = plusieurs personnes.",
    problem:
      "Mêmes questions chaque jour, réponses variables selon qui est là, nouveaux arrivants perdus dans 4 outils.",
    before: [
      "Questions répétitives traitées à la main",
      "Réponses variables selon la personne",
      "4 outils pour un seul dossier",
      "Support limité aux heures de bureau",
    ],
    after: [
      "Premier niveau immédiat, sourcé",
      "Actions dans les outils, validées si besoin",
      "Une barre de demande pour toute l'entreprise",
      "24/7 + escalade contextualisée",
    ],
    approach: [
      {
        title: "Choisir les cas",
        text: "3 cas à fort volume / faible risque. Jamais le plus spectaculaire en premier.",
      },
      {
        title: "Connecter",
        text: "RAG documentaire, APIs outils, droits repris. Actions sensibles = validation humaine.",
      },
      {
        title: "Évaluer",
        text: "Tests réels, qualité des réponses, journal d'escalade. Amélioration chaque semaine.",
      },
    ],
    deliverables: [
      "Assistant FR / AR / EN selon les équipes",
      "Base de connaissances indexée",
      "Connecteurs CRM, agenda, facturation",
      "Garde-fous + journal d'audit",
      "Suivi qualité et coût d'usage",
    ],
    stack: ["LLM API", "RAG vectoriel", "n8n / code", "API CRM / ERP", "Supervision"],
    offer: "ia-appliquee",
    metrics: [
      { label: "Disponibilité", value: "24/7", text: "Sur les flux clés, sans attente." },
      { label: "Temps traité", value: "−58 %", text: "Recherche et brouillon automatisés." },
      { label: "Escalade", value: "100 %", text: "Cas sensibles avec contexte complet." },
    ],
  },
  {
    slug: "immersion",
    number: "03",
    title: "PROJET 03",
    name: "Site immersif",
    category: "Développement web immersif",
    statement: [
      "Un site qui se lit comme une expérience : scroll,",
      "mouvement et narration au service de la conversion.",
    ],
    statementMobile: [
      "Un site qui se lit comme une expérience :",
      "scroll, mouvement et narration",
      "au service de la conversion.",
    ],
    tagline: "L’écran devient le récit.",
    outcome:
      "Parcours immersif Next.js, animations pilotées au scroll, SEO technique et tracking — pensé pour convertir sur mobile et desktop.",
    services: "Sites & expériences · Motion · SEO · Analytics",
    sector: "Marque, produit ou agence qui doit marquer les esprits",
    duration: "5–8 semaines",
    team: "Chef de projet · Designer · Développeur front",
    context:
      "Un site vitrine classique ne porte plus la marque. On construit une expérience immersive : hiérarchie visuelle forte, fil narratif au scroll, micro-interactions, performance et mesure — adaptée Casablanca / MENA / Europe.",
    challengeTitle: "Un site plat dans un marché saturé.",
    problem:
      "La marque a une offre solide, mais le site se confond avec les autres : peu de récit, zéro sensation, conversion faible sur mobile, analytics incomplets.",
    before: [
      "Pages statiques, sans fil narratif",
      "Animations lourdes ou absentes",
      "Mobile négligé, LCP trop lent",
      "Conversion et parcours non mesurés",
    ],
    after: [
      "Parcours immersif guidé au scroll",
      "Motion fluide, 60 fps, reduced-motion OK",
      "Performance mobile-first, SEO technique",
      "Funnels et events suivis de bout en bout",
    ],
    approach: [
      {
        title: "Scénariser",
        text: "Storyboard du parcours : messages, sections, moments forts, CTA. On fixe ce que chaque viewport doit faire ressentir et convertir.",
      },
      {
        title: "Construire",
        text: "Design system, Next.js, GSAP / ScrollTrigger, médias optimisés. Itérations courtes jusqu’à la sensation juste.",
      },
      {
        title: "Mesurer",
        text: "SEO technique, Core Web Vitals, events de conversion, A/B léger sur les CTA. Formation à l’édition du contenu.",
      },
    ],
    deliverables: [
      "Site immersif Next.js (desktop + mobile)",
      "Direction artistique + motion au scroll",
      "SEO technique et balisage",
      "Analytics + events de conversion",
      "Formation et guide d’édition",
    ],
    stack: ["Next.js", "GSAP / ScrollTrigger", "Lenis", "WebGL / canvas (si besoin)", "GA4 / Meta Pixel"],
    offer: "site-experience-web",
    metrics: [
      { label: "Temps sur page", value: "+2,4×", text: "Lecture plus longue du récit." },
      { label: "Conv. mobile", value: "+38 %", text: "CTA et parcours pensés tactile." },
      { label: "LCP", value: "<2,0 s", text: "Sensation premium, sans frein." },
    ],
  },
  {
    slug: "papertrail",
    number: "04",
    title: "PROJET 04",
    name: "Docs → données",
    category: "Automatisation documentaire",
    statement: ["Importez vos documents comptables et transformez-les", "en données structurées, vérifiées et prêtes à l'emploi."],
    statementMobile: ["Importez vos documents comptables", "et transformez-les en données", "vérifiées, prêtes à l'emploi."],
    tagline: "Du document à la donnée vérifiée.",
    outcome: "Factures lues, contrôlées (TVA, doublons) et injectées dans votre outil comptable après validation.",
    services: "Automatisation · IA · Intégrations",
    sector: "Cabinet comptable ou PME à forte volumétrie",
    duration: "4–6 semaines",
    team: "Chef de projet · Ingénieur IA · Intégrations",
    context:
      "Pipeline qui extrait HT, TVA, TTC, ICE/SIREN, date, fournisseur. L'IA prépare, vous validez les cas douteux.",
    challengeTitle: "La saisie retarde clôtures et paiements.",
    problem:
      "PDF, photos, scans variables. Erreurs de TVA, clôtures en retard, pièces perdues entre mail et dossiers.",
    before: [
      "Factures ressaisies à la main",
      "Erreurs TVA en fin de mois",
      "Pièces dispersées mail / dossiers",
      "Clôture freinée par le rapprochement",
    ],
    after: [
      "Extraction auto des champs clés",
      "Contrôles TVA, doublons, fournisseurs",
      "Boîte de dépôt unique, horodatée",
      "Injection comptable après validation",
    ],
    approach: [
      {
        title: "Qualifier",
        text: "Échantillon réel : formats, langues, scans. Taux d'extraction cible fixé avant build.",
      },
      {
        title: "Extraire",
        text: "OCR + IA, règles métier, score de confiance. File de validation pour les cas flous.",
      },
      {
        title: "Intégrer",
        text: "Export logiciel comptable, journal des rejets, suivi du taux auto.",
      },
    ],
    deliverables: [
      "Boîte de dépôt (mail / drag-drop)",
      "Extraction + score de confiance",
      "Règles TVA / doublons / fournisseurs",
      "File de validation humaine",
      "Connecteur logiciel comptable",
    ],
    stack: ["OCR + IA", "Règles métier", "File validation web", "API comptable", "Journal d'audit"],
    offer: "data-dashboards",
    metrics: [
      { label: "Admin", value: "−55 %", text: "Moins de saisie et de vérifs." },
      { label: "Contrôle", value: "100 %", text: "Validé ou rejeté avec motif." },
      { label: "Dispo", value: "J+0", text: "Dans vos outils dès validation." },
    ],
  },
  {
    slug: "scribe",
    number: "05",
    title: "PROJET 05",
    name: "Réunions → livrables",
    category: "Intelligence des réunions",
    statement: ["Transformez vos réunions en documents structurés :", "cahiers des charges, procédures et chartes projet."],
    statementMobile: ["Transformez vos réunions en", "documents structurés : cahiers des", "charges, procédures, chartes projet."],
    tagline: "De la réunion au livrable.",
    outcome: "Atelier → cahier des charges en heures, pas en jours. Décisions tracées, versions claires.",
    services: "IA · Stratégie digitale · Automatisation",
    sector: "Agences, cabinets, équipes projet",
    duration: "3–5 semaines",
    team: "Consultant · Ingénieur IA",
    context:
      "L'outil que nous utilisons nous-mêmes : analyse de réunion, objectifs, responsables, décisions → document révisable.",
    challengeTitle: "Les décisions se perdent entre deux réunions.",
    problem:
      "Comptes rendus tardifs ou absents, décisions sans responsable, versions multiples du cahier des charges.",
    before: [
      "CR rédigé le soir — ou jamais",
      "Décisions sans responsable ni date",
      "Plusieurs versions en circulation",
      "Reprise des infos à chaque intervenant",
    ],
    after: [
      "Document structuré en fin de réunion",
      "Décision = responsable + échéance",
      "Révisions en langage naturel, versionnées",
      "CdC, procédure, charte prêts à partager",
    ],
    approach: [
      {
        title: "Modèles",
        text: "On part de vos vrais livrables : CdC, procédure, charte. Chaque modèle a ses rubriques.",
      },
      {
        title: "Structurer",
        text: "Transcription, détection objectifs / décisions, remplissage avec renvoi à l'extrait.",
      },
      {
        title: "Diffuser",
        text: "Révision simple, régénération, export Notion / Docs / outil projet.",
      },
    ],
    deliverables: [
      "Modèles adaptés à votre métier",
      "Transcription + structuration auto",
      "Interface de révision versionnée",
      "Export vers vos outils",
      "Guide de bonnes pratiques réunion",
    ],
    stack: ["Transcription", "LLM + modèles", "UI révision", "Notion / Docs", "Jira / Asana / Trello"],
    offer: "audit-strategie-ia",
    metrics: [
      { label: "Rédaction", value: "−70 %", text: "Temps après chaque atelier." },
      { label: "Décisions", value: "100 %", text: "Tracées avec responsable." },
      { label: "Versions", value: "v1→v2", text: "Révisions documentées." },
    ],
  },
  {
    slug: "crediflow",
    number: "06",
    title: "PROJET 06",
    name: "Crédit digital",
    category: "Financement digital",
    statement: ["Demandez un crédit professionnel, déposez vos documents", "financiers et passez de l'éligibilité au décaissement."],
    statementMobile: ["Demandez un crédit professionnel,", "déposez vos documents financiers,", "de l'éligibilité au décaissement."],
    tagline: "Du dossier au décaissement.",
    outcome: "Pièces, analyse, éligibilité et CRM reliés. Le conseiller ne traite que ce qui demande son expertise.",
    services: "CRM · Automatisation · Data",
    sector: "Financement / courtage PME",
    duration: "10–14 semaines",
    team: "Chef de projet · CRM · Data · 2 dévs",
    context:
      "Parcours financement PME : dépôt, analyse auto, éligibilité, suivi jusqu'au décaissement — relié au CRM.",
    challengeTitle: "Dossiers incomplets, pipeline qui ralentit.",
    problem:
      "Fichiers personnels, relances oubliées, analyse financière de plusieurs jours avant le premier retour client.",
    before: [
      "Incomplets découverts trop tard",
      "Relances manuelles, souvent oubliées",
      "Analyse financière en plusieurs jours",
      "Pipeline dans des fichiers perso",
    ],
    after: [
      "Liste de pièces + relances auto",
      "Analyse financière préparée",
      "Éligibilité en minutes, validée humain",
      "Pipeline unique dépôt → décaissement",
    ],
    approach: [
      {
        title: "Parcours",
        text: "Étapes, pièces, règles, points d'abandon. On voit où les dossiers meurent.",
      },
      {
        title: "Construire",
        text: "Portail, extraction états financiers, scoring encadré, CRM + relances.",
      },
      {
        title: "Piloter",
        text: "Conversion par étape, alertes dossiers bloqués, revue des règles risque.",
      },
    ],
    deliverables: [
      "Portail client dépôt & suivi",
      "Extraction + analyse financière",
      "Règles d'éligibilité + validation",
      "CRM et relances automatiques",
      "Dashboard conversion",
    ],
    stack: ["Portail web", "Extraction IA", "Moteur de règles", "CRM + workflows", "Dashboards"],
    offer: "pilotage-mensuel",
    metrics: [
      { label: "Pipeline", value: "3,1×", text: "Dossiers qualifiés transmis." },
      { label: "Admin", value: "−55 %", text: "Grâce aux relances auto." },
      { label: "Visibilité", value: "1 vue", text: "Du dépôt au décaissement." },
    ],
  },
];

export const projectBySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));
