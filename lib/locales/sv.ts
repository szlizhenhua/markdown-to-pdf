export const sv = {
  // Header
  title: "Markdown till PDF-konverterare",
  subtitle: "Konvertera Markdown till professionella PDF-filer",

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
    placeholder: "Börja skriva din Markdown här...\n\n# Rubrik 1\n## Rubrik 2\n\n**Fetstil** och *kursiv*\n\n- Listobjekt 1\n- Listobjekt 2\n\n```javascript\nconsole.log('Hej Världen!');\n```\n\n| Kolumn 1 | Kolumn 2 |\n|---------|----------|\n| Data 1  | Data 2   |",
    dragDropText: "Dra din Markdown-fil hit",
    dragDropSubtext: "Stöder .md och .txt filer",
    loading: "Laddar diagram...",
    rendering: "Renderar diagram...",
    stats: {
      characters: "Tecken",
      words: "Ord",
      lines: "Rader",
      readingTime: "Lästid",
      readingTimeLessThanOne: "< 1 min",
      readingTimeMinute: "min",
      readingTimeHour: "h"
    }
  },

  // Preview
  preview: {
    title: "Förhandsgranskning",
    theme: "tema"
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
    pdfGenerationError: "PDF-generering misslyckades",
    pdfExportError: "PDF-export misslyckades, kontrollera konsolen för detaljer",
    mermaidRenderError: "Mermaid-renderingsfel",
    mermaidSyntaxError: "Kontrollera Mermaid-syntaxen",
    mermaidExampleSyntax: "Exempel på syntax:",
    mermaidRenderRetry: "Mermaid-renderingsförsök {count} misslyckades, kommer att försöka igen om 100ms",
    mermaidFinalError: "Mermaid-rendering misslyckades slutgiltigt",
    unknownError: "Okänt fel",
    highlightJsError: "Highlight.js-fel för språket \"{lang}\":",
    katexRenderError: "KaTeX-renderingsfel:",
    mermaidInitError: "Mermaid-initieringsfel:",
    mermaidLoading: "Laddar diagram...",
    mermaidRendering: "Renderar diagram...",
    templateLoaded: "Mall laddad",
    templateLoadedMessage: "Mallen har applicerats på redigeraren.",
    fileTooLarge: "Filen är för stor. Maximal storlek är 5MB.",
    invalidFileType: "Ogiltig filtyp. Ladda upp en .md eller .txt fil.",
    fileUploadFailed: "Filuppladdning misslyckades. Försök igen.",
    fileUploaded: "Filen uppladdad framgångsrikt",
    resetComplete: "Återställning slutförd",
    resetCompleteMessage: "Redigerare och inställningar har återställts till standardvärden.",
    copySuccess: "Kopierat till urklipp",
    copyFailed: "Kopiering till urklipp misslyckades",
    networkError: "Nätverksfel. Kontrollera din anslutning.",
    quotaExceeded: "Lagringskvot överskriden. Rensa några browserdata.",
    autoSaveFailed: "Automatisk sparande misslyckades. Dina ändringar kanske inte sparas."
  },

  // Templates
  templates: {
    title: "Välj en Mall",
    description: "Välj från professionellt utformade mallar för att börja snabbt",
    selectTemplate: "Klicka på en mall för att ladda den i redigeraren. Ditt nuvarande innehåll kommer att ersättas.",
    categories: {
      all: "Alla Mallar",
      basic: "Grundläggande",
      academic: "Akademisk",
      technical: "Teknisk",
      documentation: "Dokumentation"
    },
    // Document templates
    blank: {
      name: "Tomt Dokument",
      description: "Börja med en ren tavla"
    },
    article: {
      name: "Bloggartikel",
      description: "Standard blogginläggsstruktur"
    },
    readme: {
      name: "README.md",
      description: "Projektdokumentationsmall"
    },
    resume: {
      name: "CV",
      description: "Professionell CV-mall"
    },
    essay: {
      name: "Akademisk Essä",
      description: "Strukturerad akademisk uppsats"
    },
    meeting: {
      name: "Mötesanteckningar",
      description: "Strukturerad protokollmall"
    },
    tutorial: {
      name: "Handledning/Guide",
      description: "Steg-för-steg handledningsmall"
    },
    simpleNotes: {
      name: "Enkla Anteckningar",
      description: "Grundläggande anteckningsmall"
    },
    meetingNotes: {
      name: "Mötesanteckningar",
      description: "Strukturerad mötesdokumentation"
    },
    researchPaper: {
      name: "Forskningsrapport",
      description: "Akademisk rapportmall med citat"
    },
    apiDocumentation: {
      name: "API-dokumentation",
      description: "Teknisk API-referensmall"
    },
    blogPost: {
      name: "Blogginläggsmall",
      description: "SEO-optimerad blogginläggsmall"
    },
    productRequirements: {
      name: "Produktkrav",
      description: "PRD-mall för produktchefer"
    },
    templates: "Mallar"
  },

  quickTemplates: {
    apiEndpoint: "API-slutpunkt",
    codeSnippet: "Kodsnutt",
    meetingNotes: "Mötesanteckningar",
    bugReport: "Felrapport",
    dailyStandup: "Dagligt Standup",
    featureRequest: "Funktionsbegäran",
    codeReview: "Kodgranskning",
    projectReadme: "Projekt-README"
  },
  textTransform: {
    title: "Transformera Text",
    close: "Stäng",
    uppercase: "VERSALER",
    lowercase: "gemener",
    titleCase: "Stora Bokstäver i Ord",
    sentenceCase: "Stora Bokstäver i Meningar",
    camelCase: "camelCase",
    kebabCase: "kebab-case",
    snakeCase: "snake_case",
    toggleCase: "vÄXLA sTORA/lILLA",
    capitalize: "Stor bokstav",
    uppercaseDesc: "Konvertera till versaler",
    lowercaseDesc: "Konvertera till gemener",
    titleCaseDesc: "Varje ord med stor bokstav",
    sentenceCaseDesc: "Bara första ordet med stor bokstav",
    camelCaseDesc: "Konvertera till camelCase",
    kebabCaseDesc: "Konvertera till kebab-case",
    snakeCaseDesc: "Konvertera till snake_case",
    toggleCaseDesc: "Växla versaler/gemener",
    capitalizeDesc: "Första bokstav stor"
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
    preview: "Förhandsgranska"
  },
  dateTime: {
    insertDateTime: "Infoga Datum/Tid",
    date: "Datum",
    time: "Tid",
    dateTime: "Datum & Tid",
    iso8601: "ISO 8601",
    usFormat: "US-format",
    euFormat: "EU-format",
    readable: "Läsbar",
    cancel: "Avbryt"
  },
  listHelper: {
    listType: "Listtyp",
    bullet: "Punkt",
    numbered: "Numrerad",
    numberOfItems: "Antal objekt",
    listItems: "Listobjekt",
    insertList: "Infoga Lista",
    cancel: "Avbryt",
    item: "Objekt"
  },
  highlightHelper: {
    insertHighlight: "Infoga Markering",
    highlightText: "Markera Text",
    textToHighlight: "Text att markera",
    color: "Färg",
    visualOnly: "(endast visuellt)",
    note: "Observera: Markering använder ==text== syntax. Stöds möjligen inte av alla markdown-renderare.",
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

  // Batch Conversion
  batchConversion: {
    button: "Batch PDF",
    buttonShort: "Batch",
    dialogTitle: "Markdown Batch-konvertering",
    dialogDescription: "Välj en mapp eller välj flera .md-filer, välj sedan en utmatningsmapp för att generera PDF-filerna ett och ett.",
    selectFolder: "Välj mapp",
    selectFiles: "Välj filer",
    outputTitle: "Välj utmatningsmapp",
    outputDescription: "{count} Markdown-filer hittade. Välj en utmatningsmapp och starta konverteringen.",
    duplicateHint: "Om en PDF med samma namn redan finns i utmatningsmappen kommer ett numeriskt suffix att läggas till för att undvika överskrivning.",
    folderHint: "Rekursiv skanning av den valda mappen och dess undermappar",
    filesHint: "Välj flera .md-filer samtidigt",
    chooseOutput: "Välj utmatningsmapp och starta",
    processingTitle: "Batch-konvertering pågår",
    processingDescription: "Genererar PDF-filer sekventiellt. Håll denna sida öppen.",
    currentFile: "Aktuell fil",
    completed: "Slutförd",
    resultTitle: "Batch-konvertering slutförd",
    resultSummary: "{success} lyckades, {failed} misslyckades.",
    outputFolder: "Utmatningsmapp",
    selectedFiles: "Valda filer",
    failedFiles: "Misslyckade filer",
    moreFiles: " fler filer",
    close: "Stäng",
    cancel: "Avbryt",
    unsupported: "Denna webbläsare stöder inte mappbaserad batch-konvertering. Använd en nyare Chromium-baserad webbläsare som Chrome eller Edge.",
    noMarkdownFiles: "Inga Markdown-filer hittades i den valda källan.",
    skippedFiles: "{count} filer som inte uppfyllde kraven hoppades över.",
    finishedToast: "Batch-konvertering slutförd",
    partialFailureToast: "Vissa filer kunde inte konverteras"
  },

  // Default Content
  defaultContent: `# Markdown till PDF-konverterare

> 🎯 **Konvertera dina Markdown-dokument till professionella PDF-filer med matematiska formler, flödesdiagram, kodmarkering och flera teman**

## ✨ Funktioner

### 📊 **Fullt Markdown-stöd**
- **Textformatering**: **Fetstil**, *Kursiv*, ~~Genomstruken~~, \`Inline-kod\`
- **Rubriknivåer**: Fullt H1-H6 rubrikstrukturstöd
- **Listor**: Numrerade listor, punktlistor, uppgiftslistor
- **Länkar och Bilder**: Automatisk länkigenkänning, stöd för inbäddning av bilder
- **Tabeller**: Stöd för justering och komplexa tabellstrukturer
- **Citat**: Blockcitat och nästlade citat

### 🧮 **Matematisk Formelrendering (KaTeX)**
**Inline formel**: Einsteins massa-energi-ekvation $E = mc^2$

**Blockformel**:
$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

**Komplex formel**:
$$\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\cdots + x_n$$

**Matrisrepresentation**:
$$\\begin{bmatrix}
a & b \\\\
c & d
\\end{bmatrix}$$

### 📈 **Diagramritning (Mermaid)**

#### Flödesdiagram
\`\`\`mermaid
graph TD
    A[Start] --> B{Villkor}
    B -->|Ja| C[Utför A]
    B -->|Nej| D[Utför B]
    C --> E[Slut]
    D --> E
\`\`\`

#### Grafdiagram
\`\`\`mermaid
graph LR
    A[Användare] --> B[System]
    B --> A[Svar]
\`\`\`

#### Sekvensdiagram
\`\`\`mermaid
sequenceDiagram
    participant U as Användare
    participant W as Webbapp
    participant S as PDF-tjänst
    U->>W: Klistra in/Redigera Markdown
    W-->>U: Live förhandsgranskning
    U->>W: Klicka "Hämta PDF"
    W->>S: Rendera & generera PDF
    S-->>W: Returnera PDF
    W-->>U: Ladda ner fil
\`\`\`

#### Gantt
\`\`\`mermaid
gantt
    title Projektplan (Exempel)
    dateFormat  YYYY-MM-DD
    section Planering
    Krav        :a1, 2026-02-01, 3d
    Granskning              :a2, 2026-02-04, 1d
    section Leverans
    Redigerarfunktioner     :b1, 2026-02-05, 5d
    PDF-export polish   :b2, 2026-02-10, 3d
\`\`\`

#### Klassdiagram
\`\`\`mermaid
classDiagram
    class MarkdownRenderer {
      +render(markdown) HTML
      +renderMermaid() void
    }
    class PdfExporter {
      +export(html) PDF
    }
    MarkdownRenderer --> PdfExporter : tillhandahåller HTML
\`\`\`

#### Tillståndsdiagram
\`\`\`mermaid
stateDiagram-v2
    [*] --> Inaktiv
    Inaktiv --> Redigering : skriv
    Redigering --> Förhandsgranskning : förhandsgranska
    Förhandsgranskning --> Exporterar : exportera
    Exporterar --> Inaktiv : klar
\`\`\`

#### Tårtdiagram
\`\`\`mermaid
pie title Riskfördelning (Exempel)
    "Hög" : 15
    "Medel" : 35
    "Låg" : 50
\`\`\`

#### Mindmap
\`\`\`mermaid
mindmap
  root((Risk))
    Identifiera
      Hot
      Möjligheter
    Bedöm
      Påverkan
      Sannolikhet
    Svara
      Mildra
      Överför
      Acceptera
\`\`\`

#### Tidslinje
\`\`\`mermaid
timeline
    title Releasefrekvens (Exempel)
    2026-02 : v1.0 lansering
    2026-03 : mallbibliotek
    2026-04 : samarbete & historik
\`\`\`

#### Radardiagram (Anpassat)
\`\`\`mermaid
radar-chart
    title Teamkompetensradar (Exempel 1)
    axis Kommunikation, Design, Utveckling, QA, Dokumentation
    series Plan A [80, 70, 90, 60, 75]
    series Plan B [65, 85, 70, 80, 60]
\`\`\`

\`\`\`mermaid
radar
    title Produktmätvärdesradar (Exempel 2)
    axis Hastighet, Stabilitet, UX, Underhåll
    v1 [70, 60, 80, 65]
\`\`\`

#### Kvadrantdiagram (Anpassat)
\`\`\`mermaid
quadrant-chart
    title Risk vs Timing-matris
    x-axis "Kontrollerbarhet" --> "Känslighet"
    y-axis "Mognad" --> "Brådska"
    quadrant-1 "Strategiskt fönster"
    quadrant-2 "Observation & förberedelse"
    quadrant-3 "Undvik"
    quadrant-4 "Accelerera"
    "Lokal fördjupning": [0.75, 0.85]
    "SEA-sondering": [0.45, 0.65]
    "Dubbla spår": [0.35, 0.55]
    "Konkurrentledning": [0.60, 0.31]
\`\`\`

### 💻 **Kodmarkering**

#### JavaScript-exempel
\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Användningsexempel
console.log(fibonacci(10)); // Output: 55
\`\`\`

#### Python-exempel
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

### 📋 **Tabellfunktioner**

| Funktion | Status | Beskrivning | Genväg |
|---------|:------:|-------------|----------|
| Matematiska formler | ✅ | Fullt KaTeX-stöd | \`$...\$ |
| Flödesdiagram | ✅ | Mermaid-diagram | \`mermaid |
| Kodmarkering | ✅ | Flerspråksstöd | \`lang |
| Tabeller | ✅ | Komplett tabellfunktionalitet | \| \| \| |
| Länkar | ✅ | Automatisk länkigenkänning | [text](url) |

---

## 📖 Användarguide

### 🚀 **Snabbstart**

1. **Redigera innehåll**
   - Skriv eller klistra in Markdown-innehåll i den vänstra redigeraren
   - Realtidsförhandsgranskning med WYSIWYG

2. **Ladda upp filer**
   - Klicka på "Ladda upp"-knappen för att välja .md eller .txt filer
   - Eller dra och släpp filer direkt i redigerarområdet

3. **Anpassa stilar**
   - Välj temastil (Standard/Akademisk/Modern/Minimalistisk)
   - Justera pappersstorlek och teckenstorlek
   - Realtidsförhandsgranskning av effekter

4. **Exportera PDF**
   - Klicka på "Hämta PDF"-knappen
   - Ladda automatiskt ner genererat PDF-dokument
   - Filnamn genereras automatiskt baserat på dokumenttitel

### ⌨️ **Markdown-syntax Fuskblad**

#### Grundläggande syntax
\`\`\`markdown
# Nivå 1 Rubrik
## Nivå 2 Rubrik
### Nivå 3 Rubrik

**Fet text** eller __Fet text__
*Kursiv text* eller _Kursiv text__
~~Genomstruken~~

- Oordnad listpost
  - Nästlad listpost

1. Ordnad listpost
2. Andra post
   1. Nästlad ordnad post

> Citattext
>> Nästlat citat

[Länktext](https://example.com)
![Bildbeskrivning](image.jpg)

\`Inline-kod\`

\`\`\`språk
Kodblock
\`\`\`
\`\`\`

### 💡 **Användningstips**

1. **Matematiska formler**
   - Använd \`$...\` för inline formler
   - Använd \`$$...$$\` för block formler
   - Fullt LaTeX-matematiksyntax stöds

2. **Kodblock**
   - Ange språk för syntaxmarkering: \`\`\`javascript
   - Språk som stöds: JavaScript, Python, JSON, Bash, etc.

3. **Diagramritning**
   - Använd Mermaid-syntax för att skapa flödesdiagram, grafer, etc.
   - Stöd för flera diagramtyper: graph, flowchart, etc.

4. **Tabellformatering**
   - Använd \`|\` för att separera kolumner
   - Använd \`-\` för att separera rubriker och innehåll
   - Stöd för justering: \`:---\` (vänster), \`---:\` (höger), \`:---:\` (centrerad)

---

## ❓ Vanliga frågor (FAQ)

### F1: Vilken Markdown-syntax stöds?
**S**: Detta verktyg stöder standard Markdown-syntax och GitHub Flavored Markdown (GFM) tillägg, inklusive tabeller, uppgiftslistor, genomstrukning, etc. Det stöder också matematiska formler (KaTeX) och diagramritning (Mermaid).

### F2: Vad gör jag om matematiska formler inte visas?
**S**: Se till att du använder rätt syntax:
- Inline formler: \`$formel$\`
- Block formler: \`$$formel$$\`
Om de fortfarande inte visas, kontrollera om formelsyntaxen är korrekt.

### F3: Hur är kvaliteten på exporterade PDF-filer?
**S**: Vi använder professionella PDF-genereringsmotorer för att säkerstlla utmatningskvalitet:
- High definition vektorgrafik
- Tydlig textrendering
- Korrekt sidpaginering
- Behåll originalformatering

### F4: Är mina data säkra?
**S**: Helt säkert! All bearbetning sker lokalt i din webbläsare:
- Inga data uppladdade till någon server
- Ingen lagring av ditt dokumentinnehåll
- Data rensas automatiskt efter bearbetning

### F5: Vilka webbläsare stöds?
**S**: Stöder alla moderna webbläsare:
- Chrome 65+
- Firefox 60+
- Safari 12+
- Edge 79+

### F6: Hur hanterar jag stora dokument?
**S**: För stora dokument rekommenderar vi:
- Bearbeta i sektioner
- Justera teckenstorlek lämpligt
- Använd sidbrytningar för rimlig segmentering
- Förhandsgranska för att bekräfta effekter före export

### F7: Vad är det exporterade PDF-filnamnet?
**S**: Filnamn genereras automatiskt baserat på dokumentets första rubrik, till exempel:
- Rubrik "Projektrapport" → "Projektrapport.pdf"
- Använd "document.pdf" när ingen rubrik

---

## 📞 Teknisk support

### 🔧 **Teknisk stack**
- **Next.js** - React-ramverk
- **Tailwind CSS** - Stilramverk
- **Marked** - Markdown-tolk
- **KaTeX** - Matematisk formelrendering
- **Mermaid** - Diagramritning
- **html2pdf.js** - PDF-generering
- **Highlight.js** - Kodmarkering

### 📧 **Kontakta oss**
[Open Source](https://github.com/szlizhenhua/markdown-to-pdf). För frågor eller förslag, kontakta oss via:
- GitHub Issues: Rapportera problem eller begär funktioner
- E-postfeedback: support@markdown-to-pdf.org

### 🔄 **Ändringslogg**
- **v1.0.0** - Första utgåva
- KaTeX matematisk formelstöd
- Mermaid diagramstöd
- Flera temastilsval
- Responsiv designoptimering

---

<div style="text-align: center; margin-top: 3em; padding: 2em; border-top: 1px solid #eee; color: #666;">
  <p><strong>Markdown till PDF-konverterare</strong></p>
  <p>Professionellt Markdown till PDF-konverteringsverktyg</p>
  <p style="font-size: 0.9em; margin-top: 1em;">
    Gjord med ❤️ | Integritet först
  </p>
  <p style="font-size: 0.8em; margin-top: 0.5em;">
    © 2025 Markdown to PDF. Alla rättigheter förbehållna.
  </p>
</div>`,

  // SEO
  seo: {
    title: "Markdown till PDF-konverterare | Professionell Dokumentexport",
    description: "Konvertera Markdown till professionella PDF-dokument med matematik, kod, diagram, innehållsförteckning, teman. Publiceringskvalitet output för akademisk och kommersiell användning.",
    keywords: "Markdown, PDF, konverterare, KaTeX, Mermaid, kodmarkering, innehållsförteckning, teman, export, akademisk, professionell"
  },

  // SEO Content
  seoContent: {
    whyChooseUs: {
      label: "Varför välja oss",
      title: "Varför använda vår Markdown till PDF-konverterare?",
      subtitle: "En Apple-liknande upplevelse för publicering: ren, snabb och vackrt konsekvent från utkast till PDF.",
      features: {
        privacy: {
          title: "Integritetsfokuserad",
          description: "Dina data är säkra hos oss. Alla konverteringar sker lokalt i din webbläsare. Vi laddar aldrig upp dina Markdown-filer till någon server."
        },
        instant: {
          title: "Omedelbar konvertering",
          description: "Inga köer. Vår optimerade motor konverterar dina dokument omedelbart och stöder stora filer utan problem."
        },
        richSupport: {
          title: "Rikt stöd",
          description: "Fullt stöd för GFM (GitHub Flavored Markdown), KaTeX matematiska formler, Mermaid-diagram och kodsyntaxmarkering."
        }
      }
    },
    howToConvert: {
      label: "Enkelt arbetsflöde",
      title: "Hur man konverterar Markdown till PDF",
      subtitle: "Ett lugnt, trestegsflöde designat för att hålla dig fokuserad och få en polish PDF på sekunder.",
      steps: {
        step1: {
          title: "Skriv eller klistra in Markdown",
          description: "Skriv direkt i vår realtidsredigerare eller klistra in din befintliga Markdown-kod. Du kan också dra och släppa .md-filer."
        },
        step2: {
          title: "Anpassa stil",
          description: "Välj från våra professionella teman (Akademisk, Modern, etc.) och justera teckenstorlek, marginaler och pappersstorlek (A4, Letter)."
        },
        step3: {
          title: "Ladda ner PDF",
          description: "Klicka på exportknappen för att omedelbart få ditt formaterade PDF-dokument, redo för delning eller utskrift."
        }
      }
    },
    faq: {
      label: "Vanliga frågor",
      title: "Vanliga frågor",
      items: {
        isFree: {
          question: "Är detta verktyg gratis?",
          answer: "Ja, vår Markdown till PDF-konverterare är 100% gratis för både personlig och kommersiell användning."
        },
        dataStorage: {
          question: "Lagrar ni mina data?",
          answer: "Nej. Vi bearbetar allt i din webbläsare. Dina dokument lämnar aldrig din enhet."
        },
        mathSupport: {
          question: "Stöder den matematiska ekvationer?",
          answer: "Ja! Vi använder KaTeX för att vackert rendera komplexa matematiska formler och ekvationer."
        },
        diagrams: {
          question: "Kan jag skapa diagram?",
          answer: "Absolut. Vi stöder Mermaid.js för att skapa flödesdiagram, sekvensdiagram och gantt-diagram från text."
        }
      }
    },
    comprehensive: {
      title: "Omfattande Markdown-lösning",
      description1: "Oavsett om du är student som skriver en uppsats, utvecklare som dokumenterar kod eller författare som skriver en roman, ger vår Markdown-redigerare verktygen du behöver. Med funktioner som realtidsförhandsgranskning, ordräknings-spårare och fokusläge kan du skriva utan distraktioner.",
      description2: "Vår konverterare hanterar all standard Markdown-syntax inklusive rubriker, listor, länkar, bilder och blockcitat. Avancerade användare kommer att uppskatta stödet för kodblock med språkspecifik syntaxmarkering, fotnoter och uppgiftslistor."
    }
  },

  // Footer
  footer: {
    tagline: "Markdown till PDF",
    subtitle: "Eleganta konverteringar varje gång.",
    description: "Professionellt dokumentkonverteringsverktyg för alla. Gratis, säkert och snabbt.",
    legal: {
      title: "Juridiskt",
      privacyPolicy: "Integritetspolicy",
      termsOfService: "Användarvillkor"
    },
    links: {
      title: "Länkar",
      aboutUs: "Om oss",
      contact: "Kontakt"
    },
    connect: {
      title: "Anslut",
      description: "Frågor eller feedback?"
    },
    copyright: "© {year} Markdown to PDF. Alla rättigheter förbehållna.",
    designed: "Designad för tydlighet"
  },

  // Toolbar
  toolbar: {
    heading: "Rubrik",
    bold: "Fetstil",
    italic: "Kursiv",
    strikethrough: "Genomstruken",
    code: "Kod",
    link: "Länk",
    image: "Bild",
    bulletList: "Punktlista",
    numberedList: "Numrerad lista",
    quote: "Citat",
    codeBlock: "Kodblock",
    horizontalRule: "Horisontell linje",
    undo: "Ångra",
    redo: "Gör om",
    showLess: "Visa mindre",
    showMore: "Visa mer",
    disableWordWrap: "Inaktivera ordbrytning",
    enableWordWrap: "Aktivera ordbrytning",
    findAndReplace: "Sök och ersätt",
    showTools: "Visa verktyg",
    hideTools: "Dölj verktyg",
    exportTXT: "TXT",
    special: "Special",
    lineOps: "Radoperationer",
    focus: "Fokus",
    focused: "Fokuserad",
    exportMarkdownLabel: "Exportera .md",
    splitView: {
      sideBySide: "Sida vid sida",
      vertical: "Vertikal",
      switchToSideBySide: "Växla till sida-vid-sida-läge",
      switchToVertical: "Växla till vertikalt läge"
    },
    lineOpsActions: {
      duplicate: "Duplicera rad",
      delete: "Ta bort rad",
      join: "Slå ihop",
      sortAsc: "Sortera ↑",
      sortDesc: "Sortera ↓",
      reverse: "Omvänd",
      clean: "Rensa"
    }
  },

  // Dialogs
  dialogs: {
    markdownCheatSheet: "Markdown-fuskblad",
    documentStatistics: "Dokumentstatistik",
    close: "Stäng",
    focusMode: {
      title: "Fokusläge",
      enter: "Gå in i fokusläge",
      exit: "Lämna fokusläge",
      description: "Störfritt skrivmiljö",
      activeHint: "Fokusläge aktivt — tryck Esc för att avsluta"
    },
    markdownExport: {
      title: "Exportera Markdown",
      description: "Ladda ner markdown som .md eller kopiera till urklipp",
      filenameLabel: "Filnamn",
      filenamePlaceholder: "dokument",
      filenameHint: "Filen kommer att sparas som \"{filename}\"",
      download: "Ladda ner .md",
      copy: "Kopiera till urklipp",
      fileInfoTitle: "Filinformation:"
    },
    wordGoal: {
      title: "Ordmåls-spårare",
      setGoal: "Ange ordmål",
      currentWords: "Nuvarande ord",
      goalWords: "Mål",
      remaining: "Återstående",
      progress: "Förlopp",
      achieved: "Mål uppnått! 🎉",
      doneBadge: "Klar"
    },
    timeTracker: {
      title: "Tidsspårare",
      startTime: "Starta session",
      stopTime: "Stoppa session",
      reset: "Återställ",
      totalTime: "Total tid",
      sessions: "Sessioner idag",
      wordsPerMin: "ord/min",
      recording: "Spelar in",
      stopped: "Stoppad",
      today: "Idag",
      thisWeek: "Denna vecka",
      avgSession: "Genomsnittlig session",
      dailyTimeGoal: "Dagligt tidsmål",
      hours: "2 timmar",
      recentSessions: "Senaste sessioner"
    },
    pomodoro: {
      title: "Pomodoro-timer",
      description: "Använd Pomodoro-tekniken för fokuserade skrivsessioner",
      start: "Starta",
      pause: "Paus",
      reset: "Återställ",
      work: "Arbete",
      shortBreak: "Kort paus",
      longBreak: "Lång paus",
      sessions: "Slutförda sessioner"
    },
    quickTemplates: {
      title: "Snabba Mallar",
      select: "Välj en mall att infoga"
    },
    documentTemplates: {
      title: "Dokumentmallar",
      description: "Välj en mall att börja med"
    },
    performance: {
      title: "Prestandainställningar",
      debounceTime: "Debounce-tid",
      description: "Justera renderingsprestanda (lägre = snabbare men använder fler resurser)"
    },
    autosave: {
      title: "Inställningar för autospar",
      interval: "Sparintervall",
      description: "Hur ofta automatiskt spara ditt arbete",
      status: {
        saved: "Sparad",
        saving: "Sparar...",
        unsaved: "Osparade ändringar",
        error: "Sparfel"
      }
    },
    typography: {
      title: "Typografi-kontroller",
      description: "Justera utseendet på förhandsgranskningstexten",
      fontSize: "Teckenstorlek",
      lineHeight: "Radhöjd",
      fontFamily: "Typsnittsfamilj"
    },
    snippets: {
      title: "Kodsnuttbibliotek",
      description: "Snabb åtkomst till återanvändbara Markdown-mönster och mallar",
      add: "Lägg till kodsnutt",
      save: "Spara kodsnutt",
      cancel: "Avbryt",
      name: "Namn",
      content: "Innehåll"
    },
    keyboardShortcuts: {
      title: "Tangentbordsgenvägar",
      description: "Snabba upp ditt arbetsflöde med dessa genvägar"
    }
  }
}
