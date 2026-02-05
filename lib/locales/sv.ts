export const sv = {
  // Header
  title: "Markdown till PDF Converter",
  subtitle: "Konvertera Markdown till professionella PDF's",

  // Controls
  buttons: {
    upload: "Ladda upp",
    showPreview: "Visa förhandsgranskning",
    hidePreview: "Dölj förhandsgranskning",
    getPDF: "Hämta PDF",
    generatingPDF: "Genererar PDF...",
    settings: "Inställningar",
    tableOfContents: "Innehållsförteckning",
    exportHTML: "HTML",
    exportMarkdown: "MD"
  },

  // Redigerare
  editor: {
    title: "Markdown-redigerare",
    placeholder: "Begin hier met het typen van uw Markdown...\n\n# Kop 1\n## Kop 2\n\n**Vet** en *cursief*\n\n- Lijstitem 1\n- Lijstitem 2\n\n```javascript\nconsole.log('Hallo Wereld!');\n```\n\n| Kolom 1 | Kolom 2 |\n|---------|----------|\n| Gegevens 1  | Gegevens 2   |",
    dragDropText: "Sleep uw Markdown-bestand hier",
    dragDropSubtext: "Ondersteunt .md en .txt bestanden",
    loading: "Diagram laden...",
    rendering: "Diagram renderen...",
    stats: {
      characters: "Tekens",
      words: "Woorden",
      lines: "Regels",
      readingTime: "Leestijd"
    }
  },

  // Preview
  preview: {
    title: "Förhandsgranskning",
    theme: "thema"
  },

  // Settings
  settings: {
    title: "Inställningar",
    theme: "Tema",
    paperSize: "Pappersstorlek",
    fontSize: "Teckenstorlek"
  },

  // Table of Contents
  toc: {
    title: "Innehållsförteckning"
  },

  // Themes
  themes: {
    default: "Standard",
    academic: "Akademisk",
    modern: "Modern",
    minimal: "Minimalistisk"
  },

  // Paper Sizes
  paperSizes: {
    a4: "A4",
    letter: "Letter",
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
    pdfGenerationError: "PDF-generatie mislukt",
    pdfExportError: "PDF-export mislukt, controleer de console voor details",
    mermaidRenderError: "Mermaid renderfout",
    mermaidSyntaxError: "Controleer de Mermaid-syntaxis",
    mermaidExampleSyntax: "Förhandsgranskning van syntaxis:",
    mermaidRenderRetry: "Mermaid render poging {count} mislukt, zal opnieuw proberen in 100ms",
    mermaidFinalError: "Mermaid render uiteindelijk mislukt",
    unknownError: "Onbekende fout",
    highlightJsError: "Highlight.js-fout voor taal \"{lang}\":",
    katexRenderError: "KaTeX-renderfout:",
    mermaidInitError: "Mermaid-initialisatiefout:",
    mermaidLoading: "Diagram laden...",
    mermaidRendering: "Diagram renderen...",
    templateLoaded: "Sjabloon geladen",
    templateLoadedMessage: "Het sjabloon is toegepast op de editor.",
    fileTooLarge: "Bestand is te groot. Maximale grootte is 5MB.",
    invalidFileType: "Ongeldig bestandstype. Upload een .md of .txt bestand.",
    fileUploadFailed: "Bestand uploaden mislukt. Probeer opnieuw.",
    fileUploaded: "Bestand succesvol geüpload",
    resetComplete: "Reset voltooid",
    resetCompleteMessage: "Redigerare en instellingen zijn teruggezet naar de standaardwaarden.",
    copySuccess: "Gekopieerd naar klembord",
    copyFailed: "Kopiëren naar klembord mislukt",
    networkError: "Netwerkfout. Controleer uw verbinding.",
    quotaExceeded: "Opslagquota overschreden. Wis enkele browsergegevens.",
    autoSaveFailed: "Automatisch opslaan mislukt. Uw wijzigingen worden mogelijk niet opgeslagen."
  },

  // Templates
  templates: {
    title: "Selecteer een Sjabloon",
    description: "Kies uit professioneel ontworpen sjablonen om snel te beginnen",
    selectTemplate: "Klik op een sjabloon om het in de editor te laden. Uw huidige inhoud wordt vervangen.",
    categories: {
      all: "Alle Sjablonen",
      basic: "Basis",
      academic: "Akademisk",
      technical: "Technisch",
      documentation: "Documentatie"
    },
    // Document templates
    blank: {
      name: "Leeg Document",
      description: "Begin met een schone lei"
    },
    article: {
      name: "Blogartikel",
      description: "Standard blogpost structuur"
    },
    readme: {
      name: "README.md",
      description: "Projectdocumentatie sjabloon"
    },
    resume: {
      name: "CV",
      description: "Professioneel cv-sjabloon"
    },
    essay: {
      name: "Akademisk Essay",
      description: "Gestructureerd academisch paper"
    },
    meeting: {
      name: "Mötesanteckningar",
      description: "Gestructureerd notulen sjabloon"
    },
    tutorial: {
      name: "Tutorial/Gids",
      description: "Stap-voor-stap tutorial sjabloon"
    },
    templates: "Sjablonen"
  },

  quickTemplates: {
    apiEndpoint: "API-slutpunkt",
    codeSnippet: "Kodsnutt",
    meetingNotes: "Mötesanteckningar",
    bugReport: "Buggrapport",
    dailyStandup: "Daglig Standup",
    featureRequest: "Funktionsförfrågan",
    codeReview: "Kodgranskning",
    projectReadme: "Projekt README"
  },
  textTransform: {
    title: "Transformera Text",
    close: "Stäng",
    uppercase: "STORA BOKSTÄVER",
    lowercase: "kleine letters",
    titleCase: "Titelstorabokstäver",
    sentenceCase: "Meningstorabokstäver",
    camelCase: "kameelHuis",
    kebabCase: "kebab-huis",
    snakeCase: "slang_huis",
    toggleCase: "hOOFDlETTERS wISSELEN",
    capitalize: "Hoofdfletter",
    uppercaseDesc: "Konvertera till hoofdletters",
    lowercaseDesc: "Konvertera till kleine letters",
    titleCaseDesc: "Varje ord med stor bokstav",
    sentenceCaseDesc: "Alleen eerste woord met hoofdletter",
    camelCaseDesc: "Konvertera till camelCase",
    kebabCaseDesc: "Konvertera till kebab-case",
    snakeCaseDesc: "Konvertera till snake_case",
    toggleCaseDesc: "Hoofdletter/kleine letter wisselen",
    capitalizeDesc: "Eerste letter hoofdletter"
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
    language: "Språk",
    insertCodeBlock: "Infoga Kodblock",
    preview: "Förhandsgranskning"
  },
  dateTime: {
    insertDateTime: "Infoga Datum/Tid",
    date: "Datum",
    time: "Tid",
    dateTime: "Datum & Tid",
    iso8601: "ISO 8601",
    usFormat: "US Formaat",
    euFormat: "EU Formaat",
    readable: "Leesbaar",
    cancel: "Avbryt"
  },
  listHelper: {
    listType: "Listtyp",
    bullet: "Punkt",
    numbered: "Numrerad",
    numberOfItems: "Aantal Items",
    listItems: "Lijstitems",
    insertList: "Lijst Invoegen",
    cancel: "Avbryt",
    item: "Item"
  },
  highlightHelper: {
    insertHighlight: "Infoga Markering",
    highlightText: "Markera Text",
    textToHighlight: "Te markeren tekst",
    color: "Kleur",
    visualOnly: "(alleen visueel)",
    note: "Let op: Markering gebruikt ==tekst== syntaxis. Mogelijk niet ondersteund door alle markdown renderers.",
    cancel: "Avbryt",
    yellow: "Gul",
    red: "Röd",
    green: "Grön",
    blue: "Blå",
    purple: "Lila",
    pink: "Rosa"
  },

  helpDialog: {
    title: "Markdown Snabbreferens",
    close: "Stäng",
    headings: "Rubriker",
    textStyles: "Textstilar",
    codeBlocks: "Kodblock",
    lists: "Listor",
    links: "Länkar",
    images: "Bilder",
    quotes: "Citat",
    tables: "Tabeller"
  },

  // Default Content
  defaultContent: `# Markdown till PDF Converter

> 🎯 **Converteer uw Markdown-documenten naar professionele PDF's met wiskundige formules, stroomdiagrammen, code-highlighting en meerdere thema's**

## ✨ Functies

### 📊 **Volledige Markdown-ondersteuning**
- **Tekstopmaak**: **Vet**, *Cursief*, ~~Doorhalen~~, \`Inline code\`
- **Kopniveaus**: Volledige H1-H6 kopstructuurondersteuning
- **Lijsten**: Geordende lijsten, ongeordende lijsten, takenlijsten
- **Links en Afbeeldingen**: Automatische linkherkenning, ondersteuning voor het insluiten van afbeeldingen
- **Tabellen**: Ondersteuning voor uitlijning en complexe tabelstructuren
- **Citaten**: Blokcitaten en geneste citaten

### 🧮 **Wiskundige Formule Rendering (KaTeX)**
**Inline formule**: Einsteins massa-energievergelijking $E = mc^2$

**Blokformule**:
$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

**Complexe formule**:
$$\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\cdots + x_n$$

**Matrixrepresentatie**:
$$\\begin{bmatrix}
a & b \\\\
c & d
\\end{bmatrix}$$

### 📈 **Diagram Tekenen (Mermaid)**

#### Stroomdiagram
\`\`\`mermaid
graph TD
    A[Start] --> B{Voorwaarde}
    B -->|Ja| C[Voer A uit]
    B -->|Nee| D[Voer B uit]
    C --> E[Einde]
    D --> E
\`\`\`

#### Grafiekdiagram
\`\`\`mermaid
graph LR
    A[Gebruiker] --> B[Systeem]
    B --> A[Antwoord]
\`\`\`

### 💻 **Code Highlighting**

#### JavaScript Förhandsgranskning
\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Gebruiksvoorbeeld
console.log(fibonacci(10)); // Uitvoer: 55
\`\`\`

#### Python Förhandsgranskning
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

### 📋 **Tabel Functies**

| Functie | Status | Beschrijving | Snelkoppeling |
|---------|:------:|-------------|----------|
| Wiskundige Formules | ✅ | Volledige KaTeX-ondersteuning | \`$...\$ |
| Stroomdiagrammen | ✅ | Mermaid-diagrammen | \`mermaid |
| Code Highlighting | ✅ | Meertalige ondersteuning | \`lang |
| Tabellen | ✅ | Volledige tabelfunctionaliteit | \| \| \| |
| Links | ✅ | Automatische linkherkenning | [tekst](url) |

---

## 📖 Gebruikershandleiding

### 🚀 **Snelstart**

1. **Inhoud bewerken**
   - Typ of plak Markdown-inhoud in de linkereditor
   - Real-time voorbeeld met WYSIWYG

2. **Bestanden uploaden**
   - Klik op de knop "Ladda upp" om .md of .txt bestanden te selecteren
   - Of sleep bestanden direct naar het editorgebied

3. **Stijlen aanpassen**
   - Kies de themastijl (Standard/Akademisk/Modern/Minimalistisk)
   - Pas papierformaat en lettergrootte aan
   - Real-time voorbeeld van effecten

4. **PDF exporteren**
   - Klik op de knop "Hämta PDF"
   - Automatische download van het gegenereerde PDF-document
   - Bestandsnaam wordt automatisch gegenereerd op basis van de documenttitel

### ⌨️ **Markdown Syntaxis Cheat Sheet\`

#### Basis Syntaxis
\`\`\`markdown
# Niveau 1 Kop
## Niveau 2 Kop
### Niveau 3 Kop

**Vette tekst** of __Vette tekst__
*Cursieve tekst* of _Cursieve tekst_
~~Doorhalen~~

- Ongeordend lijstitem
  - Genest lijstitem

1. Geordend lijstitem
2. Tweede item
   1. Genest geordend item

>Citeertekst
>> Genest citaat

[Linktekst](https://example.com)
![Afbeeldingbeschrijving](afbeelding.jpg)

\`Inline code\`

\`\`\`taal
Codeblok
\`\`\`

### 💡 **Gebruikstips**

1. **Wiskundige Formules**
   - Gebruik \`$...\` voor inline formules
   - Gebruik \`$$...$$\` voor blokformules
   - Volledige LaTeX-wiskundesyntaxis ondersteund

2. **Codeblokken**
   - Geef de taal op voor syntaxis-highlighting: \`\`\`javascript
   - Ondersteunde talen: JavaScript, Python, JSON, Bash, etc.

3. **Diagram Tekenen**
   - Gebruik Mermaid-syntaxis om stroomdiagrammen, grafieken, etc. te maken
   - Ondersteuning voor meerdere diagramtypen: graaf, stroomdiagram, etc.

4. **Tabelopmaak**
   - Gebruik \`|\` om kolommen te scheiden
   - Gebruik \`-\` om kopteksten en inhoud te scheiden
   - Ondersteuning voor uitlijning: \`:---\` (links), \`---:\` (rechts), \`:---:\` (midden)

---

## ❓ Vaak Gestelde Vragen (FAQ)

### V1: Welke Markdown-syntaxis wordt ondersteund?
**A**: Deze tool ondersteunt de standaard Markdown-syntaxis en GitHub Flavored Markdown (GFM) extensies, inclusief tabellen, takenlijsten, doorhalen, etc. Het ondersteunt ook wiskundige formules (KaTeX) en diagram tekenen (Mermaid).

### V2: Wat te doen als wiskundige formules niet worden weergegeven?
**A**: Zorg ervoor dat u de juiste syntaxis gebruikt:
- Inline formules: \`$formule$\`
- Blokformules: \`$$formule$$\`
Als ze nog steeds niet worden weergegeven, controleer dan of de formulesyntaxis correct is.

### V3: Hoe is de kwaliteit van geëxporteerde PDF's?
**A**: Wij gebruiken professionele PDF-generatie-engines om de outputkwaliteit te waarborgen:
- High-definition vectorafbeeldingen
- Duidelijke tekstweergave
- Correcte paginering
- Oorspronkelijke opmaak behouden

### V4: Zijn mijn gegevens veilig?
**A**: Volledig veilig! Alle verwerking wordt lokaal in uw browser uitgevoerd:
- Geen gegevens worden naar een server geüpload
- Geen opslag van uw documentinhoud
- Gegevens worden automatisch gewist na verwerking

### V5: Welke browsers worden ondersteund?
**A**: Ondersteunt alle moderne browsers:
- Chrome 65+
- Firefox 60+
- Safari 12+
- Edge 79+

### V6: Hoe ga ik om met grote documenten?
**A**: Voor grote documenten raden wij aan:
- Verwerken in secties
- Teckenstorlek indien aanpassen
- Pagina-einden gebruiken voor redelijke segmentering
- Förhandsgranskning bekijken om effecten te bevestigen voordat u exporteert

### V7: Wat is de bestandsnaam van de geëxporteerde PDF?
**A**: De bestandsnaam wordt automatisch gegenereerd op basis van de titel van de eerste regel van het document, bijvoorbeeld:
- Titel "Projectrapport" → "Projectrapport.pdf"
- Gebruikt "document.pdf" wanneer er geen titel is

---

## 📞 Technische Ondersteuning

### 🔧 **Tech Stack**
- **Next.js** - React-framework
- **Tailwind CSS** - Styling-framework
- **Marked** - Markdown-parser
- **KaTeX** - Wiskundige formule rendering
- **Mermaid** - Diagram tekenen
- **html2pdf.js** - PDF-generatie
- **Highlight.js** - Code highlighting

### 📧 **Neem Contact Op**
[Open Source](https://github.com/szlizhenhua/markdown-to-pdf). Voor vragen of suggesties, neem contact met ons op via:
- GitHub Issues: Problemen melden of functies aanvragen
- E-mailfeedback: support@markdown-to-pdf.org

### 🔄 **Wijzigingenlog**
- **v1.0.0** - Eerste release
- KaTeX wiskundige formule ondersteuning
- Mermaid diagram ondersteuning
- Selectie van meerdere themastijlen
- Responsief ontwerp optimalisatie

---

<div style="text-align: center; margin-top: 3em; padding: 2em; border-top: 1px solid #eee; color: #666;">
  <p><strong>Markdown till PDF Converter</strong></p>
  <p>Professionele Markdown naar PDF Conversie Tool</p>
  <p style="font-size: 0.9em; margin-top: 1em;">
    Gemaakt met ❤️ | Privacy First
  </p>
  <p style="font-size: 0.8em; margin-top: 0.5em;">
    © 2025 Markdown to PDF. Alle rechten voorbehouden.
  </p>
</div>`,

  // SEO
  seo: {
    title: "Markdown till PDF Converter | Professionele Document Export",
    description: "Konvertera Markdown till professionella PDF-documenten met wiskunde, code, diagrammen, inhoudsopgave, thema's. Publicatiekwaliteit output voor academisch en commercieel gebruik.",
    keywords: "Markdown, PDF, converter, KaTeX, Mermaid, code highlighting, inhoudsopgave, thema's, export, academisch, professioneel"
  },

  // SEO Content
  seoContent: {
    whyChooseUs: {
      label: "Waarom ons",
      title: "Waarom onze Markdown naar PDF converter gebruiken?",
      subtitle: "Een Apple-achtige ervaring voor publiceren: schoon, snel en mooi consistent van concept tot PDF.",
      features: {
        privacy: {
          title: "Privacy-gericht",
          description: "Uw gegevens zijn veilig bij ons. Alle conversies vinden lokaal in uw browser plaats. We uploaden nooit uw Markdown-bestanden naar een server."
        },
        instant: {
          title: "Directe conversie",
          description: "Geen wachtrijen. Onze geoptimaliseerde engine converteert uw documenten direct en ondersteunt grote bestanden met gemak."
        },
        richSupport: {
          title: "Rijke ondersteuning",
          description: "Volledige ondersteuning voor GFM (GitHub Flavored Markdown), KaTeX wiskundige formules, Mermaid diagrammen en code syntax highlighting."
        }
      }
    },
    howToConvert: {
      label: "Eenvoudige workflow",
      title: "Markdown naar PDF converteren",
      subtitle: "Een rustig driestappenproces ontworpen om u gefocust te houden en binnen enkele seconden een gepolijste PDF te krijgen.",
      steps: {
        step1: {
          title: "Markdown schrijven of plakken",
          description: "Typ direct in onze real-time editor of plak uw bestaande Markdown-code. U kunt ook .md-bestanden slepen en neerzetten."
        },
        step2: {
          title: "Stijl aanpassen",
          description: "Kies uit onze professionele thema's (Akademisk, Modern, enz.) en pas lettergroottes, marges en papierformaat (A4, Letter) aan."
        },
        step3: {
          title: "PDF downloaden",
          description: "Klik op de knop Exporteren om direct een opgemaakt PDF-document te krijgen dat klaar is om te delen of af te drukken."
        }
      }
    },
    faq: {
      label: "FAQ",
      title: "Veelgestelde vragen",
      items: {
        isFree: {
          question: "Is deze tool gratis?",
          answer: "Ja, onze Markdown naar PDF converter is 100% gratis voor persoonlijk en commercieel gebruik."
        },
        dataStorage: {
          question: "Slaan jullie mijn gegevens op?",
          answer: "Nee. We verwerken alles in uw browser. Uw documenten verlaten nooit uw apparaat."
        },
        mathSupport: {
          question: "Ondersteunt het wiskundige vergelijkingen?",
          answer: "Ja! We gebruiken KaTeX om complexe wiskundige formules en vergelijkingen mooi weer te geven."
        },
        diagrams: {
          question: "Kan ik diagrammen maken?",
          answer: "Absoluut. We ondersteunen Mermaid.js om stroomdiagrammen, sequentiediagrammen en Gantt-diagrammen van tekst te maken."
        }
      }
    },
    comprehensive: {
      title: "Compleet Markdown-oplossing",
      description1: "Of u nu een student bent die een scriptie schrijft, een ontwikkelaar die code documenteert of een schrijver die aan een roman werkt, onze Markdown-editor biedt de tools die u nodig heeft. Met functies zoals real-time voorbeeld, woordentaltracking en focusmodus kunt u zonder afleiding schrijven.",
      description2: "Onze converter verwerkt alle standaard Markdown-syntaxis inclusief koppen, lijsten, links, afbeeldingen en citaatblokken. Geavanceerde gebruikers zullen de ondersteuning voor codeblokken met taalspecifieke syntax-highlighting, voetnoten en takenlijsten op prijs stellen."
    }
  },

  // Footer
  footer: {
    tagline: "Markdown naar PDF",
    subtitle: "Elke keer elegante conversies.",
    description: "Professionele documentconversietool voor iedereen. Gratis, veilig en snel.",
    legal: {
      title: "Juridisch",
      privacyPolicy: "Privacybeleid",
      termsOfService: "Servicevoorwaarden"
    },
    links: {
      title: "Links",
      aboutUs: "Over ons",
      contact: "Contact"
    },
    connect: {
      title: "Verbinden",
      description: "Vragen of feedback?"
    },
    copyright: "© {year} Markdown to PDF. Alle rechten voorbehouden.",
    designed: "Ontworpen voor helderheid"
  },

  // Toolbar
  toolbar: {
    heading: "Kop",
    bold: "Vet",
    italic: "Cursief",
    strikethrough: "Doorhalen",
    code: "Code",
    link: "Link",
    image: "Afbeelding",
    bulletList: "Lijst met opsommingstekens",
    numberedList: "Numrerade lijst",
    quote: "Citaat",
    codeBlock: "Codeblok",
    horizontalRule: "Horizontale lijn",
    undo: "Ongedaan maken",
    redo: "Opnieuw",
    showLess: "Minder weergeven",
    showMore: "Meer weergeven",
    disableWordWrap: "Woordafbreking uitschakelen",
    enableWordWrap: "Woordafbreking inschakelen",
    findAndReplace: "Zoeken en vervangen",
    showTools: "Tools weergeven",
    hideTools: "Tools verbergen",
    exportTXT: "TXT",
    special: "Speciaal",
    lineOps: "Regelbewerkingen"
  },

  // Dialogs
  dialogs: {
    markdownCheatSheet: "Markdown-spiekkaart",
    documentStatistics: "Documentstatistieken",
    close: "Stäng",
    focusMode: {
      title: "Focusmodus",
      enter: "Focusmodus betreden",
      exit: "Focusmodus verlaten",
      description: "Afleidingsvrij schrijfmilieu"
    },
    wordGoal: {
      title: "Woordendoel-tracker",
      setGoal: "Woordendoel instellen",
      currentWords: "Huidige woorden",
      goalWords: "Doel",
      remaining: "Resterend",
      progress: "Voortgang",
      achieved: "Doel bereikt! 🎉"
    },
    timeTracker: {
      title: "Tidstracker",
      startTime: "Sessie starten",
      stopTime: "Sessie stoppen",
      reset: "Resetten",
      totalTime: "Totale tijd",
      sessions: "Sessies vandaag",
      wordsPerMin: "Woorden/min",
      recording: "Opnemen",
      stopped: "Gestopt",
      today: "Vandaag",
      thisWeek: "Deze week",
      avgSession: "Gemiddelde sessie",
      dailyTimeGoal: "Dagelijks tijddoel",
      hours: "2 uur",
      recentSessions: "Recente sessies"
    },
    pomodoro: {
      title: "Pomodoro-timer",
      description: "Använd Pomodoro-tekniken för fokuserade skrivsessioner",
      start: "Starten",
      pause: "Pauzeren",
      reset: "Resetten",
      work: "Werk",
      shortBreak: "Korte pauze",
      longBreak: "Lange pauze",
      sessions: "Voltooide sessies"
    },
    typography: {
      title: "Typografikontroller",
      description: "Anpassa utseendet på förhandsgranskningstexten",
      fontSize: "Teckenstorlek",
      lineHeight: "Radhöjd",
      fontFamily: "Teckenfamilj"
    },
    snippets: {
      title: "Utökningsbibliotek",
      description: "Snabb åtkomst till återanvändbara Markdown-mönster och mallar",
      add: "Utökning lägga till",
      save: "Utökning spara",
      cancel: "Avbryt",
      name: "Namn",
      content: "Innehåll"
    }
  }
}
