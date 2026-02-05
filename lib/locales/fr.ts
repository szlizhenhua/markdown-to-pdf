export const fr = {
  // Header
  title: "Convertisseur Markdown vers PDF",
  subtitle: "Convertissez Markdown en PDFs professionnels",

  // Controls
  buttons: {
    upload: "Télécharger",
    showPreview: "Afficher l'Aperçu",
    hidePreview: "Masquer l'Aperçu",
    getPDF: "Obtenir PDF",
    generatingPDF: "Génération du PDF...",
    settings: "Paramètres",
    tableOfContents: "Table des Matières",
    exportHTML: "HTML",
    exportMarkdown: "MD"
  },

  // Editor
  editor: {
    title: "Éditeur Markdown",
    placeholder: "Commencez à taper votre Markdown ici...\n\n# Titre 1\n## Titre 2\n\n**Gras** et *italique*\n\n- Élément de liste 1\n- Élément de liste 2\n\n```javascript\nconsole.log('Bonjour le Monde !');\n```\n\n| Colonne 1 | Colonne 2 |\n|---------|----------|\n| Donnée 1  | Donnée 2   |",
    dragDropText: "Déposez votre fichier Markdown ici",
    dragDropSubtext: "Supporte les fichiers .md et .txt",
    loading: "Chargement du diagramme...",
    rendering: "Rendu du diagramme...",
    stats: {
      characters: "Caractères",
      words: "Mots",
      lines: "Lignes",
      readingTime: "Temps de lecture",
      readingTimeLessThanOne: "< 1 min",
      readingTimeMinute: "min",
      readingTimeHour: "h"
    }
  },

  // Preview
  preview: {
    title: "Aperçu",
    theme: "thème"
  },

  // Settings
  settings: {
    title: "Paramètres",
    theme: "Thème",
    paperSize: "Format du Papier",
    fontSize: "Taille de la Police"
  },

  // Table of Contents
  toc: {
    title: "Table des Matières"
  },

  // Themes
  themes: {
    default: "Défaut",
    academic: "Académique",
    modern: "Moderne",
    minimal: "Minimaliste"
  },

  // Paper Sizes
  paperSizes: {
    a4: "A4",
    letter: "Lettre",
    legal: "Legal"
  },

  // Font Sizes
  fontSizes: {
    10: "10pt",
    11: "11pt",
    12: "12pt",
    14: "14pt",
    16: "16pt"
  },

  // Messages
  messages: {
    pdfGenerationError: "Échec de la génération du PDF",
    pdfExportError: "Échec de l'exportation du PDF, vérifiez la console pour plus de détails",
    mermaidRenderError: "Erreur de rendu Mermaid",
    mermaidSyntaxError: "Veuillez vérifier la syntaxe Mermaid",
    mermaidExampleSyntax: "Exemple de syntaxe :",
    mermaidRenderRetry: "La tentative de rendu Mermaid {count} a échoué, réessai dans 100ms",
    mermaidFinalError: "Échec final du rendu Mermaid",
    unknownError: "Erreur inconnue",
    highlightJsError: "Erreur Highlight.js pour la langue \"{lang}\" :",
    katexRenderError: "Erreur de rendu KaTeX :",
    mermaidInitError: "Erreur d'initialisation Mermaid :",
    mermaidLoading: "Chargement du diagramme...",
    mermaidRendering: "Rendu du diagramme...",
    templateLoaded: "Modèle chargé",
    templateLoadedMessage: "Le modèle a été appliqué à l'éditeur.",
    fileTooLarge: "Le fichier est trop volumineux. La taille maximale est de 5 Mo.",
    invalidFileType: "Type de fichier invalide. Veuillez télécharger un fichier .md ou .txt.",
    fileUploadFailed: "Échec du téléchargement du fichier. Veuillez réessayer.",
    fileUploaded: "Fichier téléchargé avec succès",
    resetComplete: "Réinitialisation terminée",
    resetCompleteMessage: "L'éditeur et les paramètres ont été réinitialisés aux valeurs par défaut.",
    copySuccess: "Copié dans le presse-papiers",
    copyFailed: "Échec de la copie dans le presse-papiers",
    networkError: "Erreur réseau. Veuillez vérifier votre connexion.",
    quotaExceeded: "Quota de stockage dépassé. Veuillez effacer certaines données du navigateur.",
    autoSaveFailed: "Échec de la sauvegarde automatique. Vos modifications peuvent ne pas être sauvegardées."
  },

  // Templates
  templates: {
    title: "Sélectionner un Modèle",
    description: "Choisissez parmi des modèles conçus par des professionnels pour démarrer rapidement",
    selectTemplate: "Cliquez sur un modèle pour le charger dans l'éditeur. Votre contenu actuel sera remplacé.",
    categories: {
      all: "Tous les Modèles",
      basic: "Basique",
      academic: "Académique",
      technical: "Technique",
      documentation: "Documentation"
    },
    // Document templates
    blank: {
      name: "Document Vide",
      description: "Commencer avec une page blanche"
    },
    article: {
      name: "Article de Blog",
      description: "Structure d'article de blog standard"
    },
    readme: {
      name: "README.md",
      description: "Modèle de documentation de projet"
    },
    resume: {
      name: "CV",
      description: "Modèle de CV professionnel"
    },
    essay: {
      name: "Dissertation Académique",
      description: "Travail académique structuré"
    },
    meeting: {
      name: "Notes de Réunion",
      description: "Modèle de notes de réunion structurées"
    },
    tutorial: {
      name: "Tutoriel/Guide",
      description: "Modèle de tutoriel pas à pas"
    },
    simpleNotes: {
      name: "Notes Simples",
      description: "Modèle de notes de base"
    },
    meetingNotes: {
      name: "Notes de Réunion",
      description: "Documentation de réunion structurée"
    },
    researchPaper: {
      name: "Article de Recherche",
      description: "Modèle d'article académique avec citations"
    },
    apiDocumentation: {
      name: "Documentation API",
      description: "Modèle de référence technique API"
    },
    blogPost: {
      name: "Modèle d'article de Blog",
      description: "Modèle d'article de blog optimisé SEO"
    },
    productRequirements: {
      name: "Exigences du Produit",
      description: "Modèle PRD pour les chefs de produit"
    },
    templates: "Modèles"
  },

  quickTemplates: {
    apiEndpoint: "Endpoint API",
    codeSnippet: "Extrait de Code",
    meetingNotes: "Notes de Réunion",
    bugReport: "Rapport de Bug",
    dailyStandup: "Quotidien Standup",
    featureRequest: "Demande de Fonctionnalité",
    codeReview: "Revue de Code",
    projectReadme: "README du Projet"
  },
  textTransform: {
    title: "Transformer le Texte",
    close: "Fermer",
    uppercase: "MAJUSCULE",
    lowercase: "minuscule",
    titleCase: "Titre",
    sentenceCase: "Phrase",
    camelCase: "chameauCase",
    kebabCase: "kebab-case",
    snakeCase: "snake_case",
    toggleCase: "tOGGLE cASE",
    capitalize: "Capitaliser",
    uppercaseDesc: "Convertir en majuscules",
    lowercaseDesc: "Convertir en minuscules",
    titleCaseDesc: "Capitaliser Chaque Mot",
    sentenceCaseDesc: "Capitaliser seulement le premier mot",
    camelCaseDesc: "Convertir en chameauCase",
    kebabCaseDesc: "Convertir en kebab-case",
    snakeCaseDesc: "Convertir en snake_case",
    toggleCaseDesc: "Alterner la casse",
    capitalizeDesc: "Capitaliser la première lettre"
  },
  codeLanguages: {
    javascript: "JavaScript",
    typescript: "TypeScript",
    python: "Python",
    java: "Java",
    cpp: "C++",
    csharp: "C#",
    go: "Go",
    rust: "Rust",
    php: "PHP",
    ruby: "Ruby",
    swift: "Swift",
    kotlin: "Kotlin",
    html: "HTML",
    css: "CSS",
    scss: "SCSS",
    sql: "SQL",
    bash: "Bash",
    shell: "Shell",
    json: "JSON",
    yaml: "YAML",
    xml: "XML",
    markdown: "Markdown",
    dockerfile: "Dockerfile",
    diff: "Diff",
    language: "Langue",
    insertCodeBlock: "Insérer un Bloc de Code",
    preview: "Aperçu"
  },
  dateTime: {
    insertDateTime: "Insérer Date/Heure",
    date: "Date",
    time: "Heure",
    dateTime: "Date et Heure",
    iso8601: "ISO 8601",
    usFormat: "Format US",
    euFormat: "Format UE",
    readable: "Lisible",
    cancel: "Annuler"
  },
  listHelper: {
    listType: "Type de Liste",
    bullet: "Puces",
    numbered: "Numérotée",
    numberOfItems: "Nombre d'Éléments",
    listItems: "Éléments de Liste",
    insertList: "Insérer une Liste",
    cancel: "Annuler",
    item: "Élément"
  },
  highlightHelper: {
    insertHighlight: "Insérer un surlignage",
    highlightText: "Surligner le Texte",
    textToHighlight: "Texte à surligner",
    color: "Couleur",
    visualOnly: "(visuel uniquement)",
    note: "Note : Le surlignage utilise la syntaxe ==texte==. Peut ne pas être pris en charge par tous les rendus Markdown.",
    cancel: "Annuler",
    yellow: "Jaune",
    red: "Rouge",
    green: "Vert",
    blue: "Bleu",
    purple: "Violet",
    pink: "Rose"
  },

  helpDialog: {
    title: "Référence Rapide Markdown",
    close: "Fermer",
    headings: "Titres",
    textStyles: "Styles de Texte",
    codeBlocks: "Blocs de Code",
    lists: "Listes",
    links: "Liens",
    images: "Images",
    quotes: "Citations",
    tables: "Tableaux"
  },

  // Default Content
  defaultContent: `# Convertisseur Markdown vers PDF

> 🎯 **Convertissez vos documents Markdown en PDFs professionnels avec des formules mathématiques, des organigrammes, du coloration syntaxique et plusieurs thèmes**

## ✨ Fonctionnalités

### 📊 **Support Complet de Markdown**
- **Formatage du Texte** : **Gras**, *Italique*, ~~Barré~~, \`Code en ligne\`
- **Niveaux de Titres** : Support complet de la structure des titres H1-H6
- **Listes** : Listes ordonnées, listes non ordonnées, listes de tâches
- **Liens et Images** : Reconnaissance automatique des liens, support pour l'incorporation d'images
- **Tableaux** : Support pour l'alignement et les structures de tableaux complexes
- **Citations** : Citations en bloc et citations imbriquées

### 🧮 **Rendu de Formules Mathématiques (KaTeX)**
**Formule en Ligne** : L'équation masse-énergie d'Einstein $E = mc^2$

**Formule en Bloc** :
$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

**Formule Complexe** :
$$\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\cdots + x_n$$

**Représentation Matricielle** :
$$\\begin{bmatrix}
a & b \\\\
c & d
\\end{bmatrix}$$

### 📈 **Dessin de Diagrammes (Mermaid)**

#### Organigramme
\`\`\`mermaid
graph TD
    A[Début] --> B{Condition}
    B -->|Oui| C[Exécuter A]
    B -->|Non| D[Exécuter B]
    C --> E[Fin]
    D --> E
\`\`\`

#### Diagramme de Graphe
\`\`\`mermaid
graph LR
    A[Utilisateur] --> B[Système]
    B --> A[Réponse]
\`\`\`

### 💻 **Coloration Syntaxique**

#### Exemple JavaScript
\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Exemple d'utilisation
console.log(fibonacci(10)); // Sortie : 55
\`\`\`

#### Exemple Python
\`\`\`python
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)
\`\`\`

### 📋 **Fonctionnalités de Tableau**

| Fonctionnalité | Statut | Description | Raccourci |
|---------|:------:|-------------|----------|
| Formules Mathématiques | ✅ | Support complet KaTeX | \`$...\$ |
| Organigrammes | ✅ | Diagrammes Mermaid | \`mermaid |
| Coloration Syntaxique | ✅ | Support multilingue | \`lang |
| Tableaux | ✅ | Fonctionnalité complète de tableaux | \| \| \| |
| Liens | ✅ | Reconnaissance automatique des liens | [texte](url) |

---

## 📖 Guide de l'Utilisateur

### 🚀 **Démarrage Rapide**

1. **Éditer le Contenu**
   - Tapez ou collez du contenu Markdown dans l'éditeur de gauche
   - Aperçu en temps réel avec WYSIWYG

2. **Télécharger des Fichiers**
   - Cliquez sur le bouton "Télécharger" pour sélectionner des fichiers .md ou .txt
   - Ou faites glisser et déposez des fichiers directement dans la zone de l'éditeur

3. **Personnaliser les Styles**
   - Choisissez le style du thème (Défaut/Académique/Moderne/Minimaliste)
   - Ajustez la taille du papier et la taille de la police
   - Aperçu en temps réel des effets

4. **Exporter en PDF**
   - Cliquez sur le bouton "Obtenir PDF"
   - Téléchargement automatique du document PDF généré
   - Le nom du fichier est généré automatiquement en fonction du titre du document

### ⌨️ **Aide-Memoire de la Syntaxe Markdown**

#### Syntaxe de Base
\`\`\`markdown
# Titre de Niveau 1
## Titre de Niveau 2
### Titre de Niveau 3

**Texte en gras** ou __Texte en gras__
*Texte en italique* ou _Texte en italique_
~~Barré~~

- Élément de liste non ordonnée
  - Élément de liste imbriqué

1. Élément de liste ordonnée
2. Deuxième élément
   1. Élément ordonné imbriqué

> Texte de citation
>> Citation imbriquée

[Texte du lien](https://example.com)
![Description de l'image](image.jpg)

\`Code en ligne\`

\`\`\`langue
Bloc de code
\`\`\`

### 💡 **Conseils d'Utilisation**

1. **Formules Mathématiques**
   - Utilisez \`$...\` pour entourer les formules en ligne
   - Utilisez \`$$...$$\` pour entourer les formules en bloc
   - Support complet de la syntaxe mathématique LaTeX

2. **Blocs de Code**
   - Spécifiez la langue pour la coloration syntaxique : \`\`\`javascript
   - Langues prises en charge : JavaScript, Python, JSON, Bash, etc.

3. **Dessin de Diagrammes**
   - Utilisez la syntaxe Mermaid pour créer des organigrammes, des graphiques, etc.
   - Supporte plusieurs types de diagrammes : graphe, organigramme, etc.

4. **Formatage des Tableaux**
   - Utilisez \`|\` pour séparer les colonnes
   - Utilisez \`-\` pour séparer les en-têtes et le contenu
   - Support pour l'alignement : \`:---\` (gauche), \`---:\` (droite), \`:---:\` (centre)

---

## ❓ Questions Fréquentes (FAQ)

### Q1 : Quelle syntaxe Markdown est prise en charge ?
**R** : Cet outil prend en charge la syntaxe Markdown standard et les extensions GitHub Flavored Markdown (GFM), y compris les tableaux, les listes de tâches, le texte barré, etc. Il prend également en charge les formules mathématiques (KaTeX) et le dessin de diagrammes (Mermaid).

### Q2 : Que faire si les formules mathématiques ne s'affichent pas ?
**R** : Assurez-vous d'utiliser la bonne syntaxe :
- Formules en ligne : \`$formule$\`
- Formules en bloc : \`$$formule$$\`
Si elles ne s'affichent toujours pas, vérifiez si la syntaxe de la formule est correcte.

### Q3 : Quelle est la qualité des PDF exportés ?
**R** : Nous utilisons des moteurs de génération PDF professionnels pour assurer la qualité de sortie :
- Graphiques vectoriels haute définition
- Rendu de texte clair
- Pagination correcte des pages
- Maintenir le formatage original

### Q4 : Mes données sont-elles en sécurité ?
**R** : Entièrement sécurisées ! Tout le traitement est effectué localement dans votre navigateur :
- Aucune donnée téléchargée sur un serveur
- Aucun stockage du contenu de votre document
- Données automatiquement effacées après traitement

### Q5 : Quels navigateurs sont pris en charge ?
**R** : Prend en charge tous les navigateurs modernes :
- Chrome 65+
- Firefox 60+
- Safari 12+
- Edge 79+

### Q6 : Comment gérer les documents volumineux ?
**R** : Pour les documents volumineux, nous recommandons :
- Traiter par sections
- Ajuster de manière appropriée la taille de la police
- Utiliser des sauts de page pour une segmentation raisonnable
- Aperçu pour confirmer les effets avant d'exporter

### Q7 : Quel est le nom du fichier PDF exporté ?
**R** : Le nom du fichier est généré automatiquement en fonction du titre de la première ligne du document, par exemple :
- Titre "Rapport de Projet" → "Rapport de Projet.pdf"
- Utilise "document.pdf" lorsqu'il n'y a pas de titre

---

## 📞 Support Technique

### 🔧 **Stack Technique**
- **Next.js** - Framework React
- **Tailwind CSS** - Framework de Style
- **Marked** - Analyseur Markdown
- **KaTeX** - Rendu de Formules Mathématiques
- **Mermaid** - Dessin de Diagrammes
- **html2pdf.js** - Génération PDF
- **Highlight.js** - Coloration Syntaxique

### 📧 **Contactez-Nous**
[Open Source](https://github.com/szlizhenhua/markdown-to-pdf). Pour des questions ou suggestions, veuillez nous contacter via :
- GitHub Issues : Signaler des problèmes ou demander des fonctionnalités
- Courrier de rétroaction : support@markdown-to-pdf.org

### 🔄 **Journal des Modifications**
- **v1.0.0** - Première version
- Support des formules mathématiques KaTeX
- Support des diagrammes Mermaid
- Sélection de plusieurs styles de thème
- Optimisation du design responsive

---

<div style="text-align: center; margin-top: 3em; padding: 2em; border-top: 1px solid #eee; color: #666;">
  <p><strong>Convertisseur Markdown vers PDF</strong></p>
  <p>Outil Professionnel de Conversion Markdown vers PDF</p>
  <p style="font-size: 0.9em; margin-top: 1em;">
    Fait avec ❤️ | Confidentialité d'Abord
  </p>
  <p style="font-size: 0.8em; margin-top: 0.5em;">
    © 2025 Markdown to PDF. Tous droits réservés.
  </p>
</div>`,

  // SEO
  seo: {
    title: "Convertisseur Markdown vers PDF | Exportation de Documents Professionnels",
    description: "Convertissez Markdown en documents PDF professionnels avec mathématiques, code, diagrammes, table des matières, thèmes. Sortie de qualité éditoriale pour un usage académique et commercial.",
    keywords: "Markdown, PDF, convertisseur, KaTeX, Mermaid, coloration syntaxique, table des matières, thèmes, exporter, académique, professionnel"
  },

  // SEO Content
  seoContent: {
    whyChooseUs: {
      label: "Pourquoi nous choisir",
      title: "Pourquoi utiliser notre convertisseur Markdown vers PDF ?",
      subtitle: "Une expérience de type Apple pour la publication : propre, rapide et magnifiquement cohérente du brouillon au PDF.",
      features: {
        privacy: {
          title: "Focus sur la confidentialité",
          description: "Vos données sont en sécurité avec nous. Toutes les conversions se produisent localement dans votre navigateur. Nous ne téléchargeons jamais vos fichiers Markdown sur aucun serveur."
        },
        instant: {
          title: "Conversion instantanée",
          description: "Pas de files d'attente. Notre moteur optimisé convertit vos documents instantanément, prenant en charge les gros fichiers facilement."
        },
        richSupport: {
          title: "Support riche",
          description: "Support complet pour GFM (GitHub Flavored Markdown), formules mathématiques KaTeX, diagrammes Mermaid et coloration syntaxique du code."
        }
      }
    },
    howToConvert: {
      label: "Flux de travail simple",
      title: "Comment convertir Markdown en PDF",
      subtitle: "Un flux calme en trois étapes conçu pour vous garder concentré et obtenir un PDF soigné en quelques secondes.",
      steps: {
        step1: {
          title: "Écrivez ou collez du Markdown",
          description: "Tapez directement dans notre éditeur en temps réel ou collez votre code Markdown existant. Vous pouvez également faire glisser et déposer des fichiers .md."
        },
        step2: {
          title: "Personnalisez le style",
          description: "Choisissez parmi nos thèmes professionnels (Académique, Moderne, etc.) et ajustez les tailles de police, les marges et le format du papier (A4, Lettre)."
        },
        step3: {
          title: "Télécharger le PDF",
          description: "Cliquez sur le bouton Exporter pour obtenir instantanément votre document PDF formaté, prêt à être partagé ou imprimé."
        }
      }
    },
    faq: {
      label: "FAQ",
      title: "Questions Fréquentes",
      items: {
        isFree: {
          question: "Cet outil est-il gratuit ?",
          answer: "Oui, notre convertisseur Markdown vers PDF est gratuit à 100% pour un usage personnel et commercial."
        },
        dataStorage: {
          question: "Stockez-vous mes données ?",
          answer: "Non. Nous traitons tout dans votre navigateur. Vos documents ne quittent jamais votre appareil."
        },
        mathSupport: {
          question: "Est-ce qu'il supporte les équations mathématiques ?",
          answer: "Oui ! Nous utilisons KaTeX pour rendre magnifiquement des formules et équations mathématiques complexes."
        },
        diagrams: {
          question: "Puis-je créer des diagrammes ?",
          answer: "Absolument. Nous supportons Mermaid.js pour créer des diagrammes de flux, des diagrammes de séquence et des diagrammes de Gantt à partir du texte."
        }
      }
    },
    comprehensive: {
      title: "Solution complète Markdown",
      description1: "Que vous soyez un étudiant écrivant une thèse, un développeur documentant du code ou un écrivain rédigeant un roman, notre éditeur Markdown fournit les outils dont vous avez besoin. Avec des fonctionnalités comme l'aperçu en temps réel, le suivi du nombre de mots et le mode focus, vous pouvez écrire sans distractions.",
      description2: "Notre convertisseur gère toute la syntaxe Markdown standard y compris les en-têtes, listes, liens, images et blocs de citation. Les utilisateurs avancés apprécieront le support pour les blocs de code avec coloration syntaxique spécifique au langage, les notes de bas de page et les listes de tâches."
    }
  },

  // Footer
  footer: {
    tagline: "Markdown vers PDF",
    subtitle: "Des conversions élégantes, à chaque fois.",
    description: "Outil de conversion de documents professionnel pour tous. Gratuit, sécurisé et rapide.",
    legal: {
      title: "Légal",
      privacyPolicy: "Politique de confidentialité",
      termsOfService: "Conditions d'utilisation"
    },
    links: {
      title: "Liens",
      aboutUs: "À propos",
      contact: "Contact"
    },
    connect: {
      title: "Connecter",
      description: "Questions ou commentaires ?"
    },
    copyright: "© {year} Markdown to PDF. Tous droits réservés.",
    designed: "Conçu pour la clarté"
  },

  // Toolbar
  toolbar: {
    heading: "Titre",
    bold: "Gras",
    italic: "Italique",
    strikethrough: "Barré",
    code: "Code",
    link: "Lien",
    image: "Image",
    bulletList: "Liste à puces",
    numberedList: "Liste numérotée",
    quote: "Citation",
    codeBlock: "Bloc de code",
    horizontalRule: "Ligne horizontale",
    undo: "Annuler",
    redo: "Rétablir",
    showLess: "Afficher moins",
    showMore: "Afficher plus",
    disableWordWrap: "Désactiver le retour à la ligne",
    enableWordWrap: "Activer le retour à la ligne",
    findAndReplace: "Rechercher et remplacer",
    showTools: "Afficher les outils",
    hideTools: "Masquer les outils",
    exportTXT: "TXT",
    special: "Spécial",
    lineOps: "Opérations de ligne",
    focus: "Focus",
    focused: "Concentré",
    exportMarkdownLabel: "Exporter .md",
    splitView: {
      sideBySide: "Côte à côte",
      vertical: "Vertical",
      switchToSideBySide: "Passer en vue côte à côte",
      switchToVertical: "Passer en vue verticale"
    },
    lineOpsActions: {
      duplicate: "Dupliquer la ligne",
      delete: "Supprimer la ligne",
      join: "Fusionner",
      sortAsc: "Trier ↑",
      sortDesc: "Trier ↓",
      reverse: "Inverser",
      clean: "Nettoyer"
    }
  },

  // Dialogs
  dialogs: {
    markdownCheatSheet: "Aide-mémoire Markdown",
    documentStatistics: "Statistiques du document",
    close: "Fermer",
    focusMode: {
      title: "Mode focus",
      enter: "Entrer en mode focus",
      exit: "Quitter le mode focus",
      description: "Environnement d'écriture sans distraction",
      activeHint: "Mode Focus activé - Appuyez sur Échap pour quitter"
    },
    markdownExport: {
      title: "Exporter Markdown",
      description: "Téléchargez votre markdown en .md ou copiez-le dans le presse-papiers",
      filenameLabel: "Nom de fichier",
      filenamePlaceholder: "document",
      filenameHint: "Le fichier sera enregistré sous \"{filename}\"",
      download: "Télécharger .md",
      copy: "Copier dans le presse-papiers",
      fileInfoTitle: "Infos du fichier :"
    },
    wordGoal: {
      title: "Suivi des objectifs de mots",
      setGoal: "Définir l'objectif de mots",
      currentWords: "Mots actuels",
      goalWords: "Objectif",
      remaining: "Restant",
      progress: "Progrès",
      achieved: "Objectif atteint ! 🎉",
      doneBadge: "Terminé"
    },
    timeTracker: {
      title: "Suivi du temps",
      startTime: "Démarrer",
      stopTime: "Pause",
      reset: "Réinitialiser",
      totalTime: "Temps total",
      sessions: "Sessions d'aujourd'hui",
      wordsPerMin: "mots/min",
      recording: "Enregistrement",
      stopped: "Arrêté",
      today: "Aujourd'hui",
      thisWeek: "Cette Semaine",
      avgSession: "Session Moyenne",
      dailyTimeGoal: "Objectif de Temps Quotidien",
      hours: "2 heures",
      recentSessions: "Sessions Récentes"
    },
    pomodoro: {
      title: "Minuterie Pomodoro",
      description: "Utilisez la technique Pomodoro pour des sessions d'écriture concentrées",
      start: "Démarrer",
      pause: "Pause",
      reset: "Réinitialiser",
      work: "Travail",
      shortBreak: "Pause courte",
      longBreak: "Pause longue",
      sessions: "Sessions terminées"
    },
    quickTemplates: {
      title: "Modèles rapides",
      select: "Sélectionner un modèle à insérer"
    },
    documentTemplates: {
      title: "Modèles de document",
      description: "Choisir un modèle pour commencer"
    },
    performance: {
      title: "Paramètres de performance",
      debounceTime: "Temps de debounce",
      description: "Ajuster les performances de rendu"
    },
    autosave: {
      title: "Paramètres de sauvegarde automatique",
      interval: "Intervalle de sauvegarde",
      description: "Fréquence de sauvegarde automatique de votre travail",
      status: {
        saved: "Enregistré",
        saving: "Enregistrement...",
        unsaved: "Modifications non enregistrées",
        error: "Erreur de sauvegarde"
      }
    },
    typography: {
      title: "Contrôles typographiques",
      description: "Personnalisez l'apparence du texte de prévisualisation",
      fontSize: "Taille de police",
      lineHeight: "Hauteur de ligne",
      fontFamily: "Famille de police"
    },
    snippets: {
      title: "Bibliothèque d'extraits",
      description: "Accès rapide aux modèles et motifs Markdown réutilisables",
      add: "Ajouter un extrait",
      save: "Enregistrer l'extrait",
      cancel: "Annuler",
      name: "Nom",
    },
    keyboardShortcuts: {
      title: "Raccourcis clavier",
      description: "Accélérez votre flux de travail avec ces raccourcis"
    }
  },
}
