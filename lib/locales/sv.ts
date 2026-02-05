export const sv = {
  // Header
  title: "Markdown till PDF Converter",
  subtitle: "Konvertera Markdown till professionella PDF:er",

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

  // Editor
  editor: {
    title: "Markdown-redigerare",
    placeholder: "Börja skriva din Markdown här...\n\n# Rubrik 1\n## Rubrik 2\n\n**Fet** och *kursiv*\n\n- Listobjekt 1\n- Listobjekt 2\n\n```javascript\nconsole.log('Hej Världen!');\n```\n\n| Kolumn 1 | Kolumn 2 |\n|---------|----------|\n| Data 1  | Data 2   |",
    dragDropText: "Släpp din Markdown-fil här",
    dragDropSubtext: "Stöder .md och .txt filer",
    loading: "Laddar diagram...",
    rendering: "Renderar diagram...",
    stats: {
      characters: "Tecken",
      words: "Ord",
      lines: "Rader",
      readingTime: "Lästid"
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
    mermaidExampleSyntax: "Syntaxexempel:",
    mermaidRenderRetry: "Mermaid-renderingsförsök {count} misslyckades, kommer att försöka igen om 100ms",
    mermaidFinalError: "Mermaid-rendering slutgiltigt misslyckad",
    unknownError: "Okänt fel",
    highlightJsError: "Highlight.js-fel för språk \"{lang}\":",
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
    resetComplete: "Återställning komplett",
    resetCompleteMessage: "Redigerare och inställningar har återställts till standardvärden.",
    copySuccess: "Kopierat till urklipp",
    copyFailed: "Kopiering till urklipp misslyckades",
    networkError: "Nätverksfel. Kontrollera din anslutning.",
    quotaExceeded: "Lagringskvot överskriden. Rensa några webbläsardata.",
    autoSaveFailed: "Automatisk sparning misslyckades. Dina ändringar kanske inte sparas."
  },

  // Templates
  templates: {
    title: "Välj en Mall",
    description: "Välj bland professionellt utformade mallar för att snabbstarta",
    selectTemplate: "Klicka på en mall för att ladda den i redigeraren. Ditt nuvarande innehåll kommer att ersättas.",
    categories: {
      all: "Alla Mallar",
      basic: "Grundläggande",
      academic: "Akademisk",
      technical: "Teknisk",
      documentation: "Dokumentation"
    }
  },

  // Default Content
  defaultContent: `# Markdown till PDF Converter

> 🎯 **Konvertera dina Markdown-dokument till professionella PDF:er med matematiska formler, flödesscheman, kodmarkering och flera teman**

## ✨ Funktioner

### 📊 **Komplett Markdown-stöd**
- **Textformatering**: **Fet**, *Kursiv*, ~~Genomstruken~~, \`Inline-kod\`
- **Rubriknivåer**: Komplett H1-H6 rubrikstrukturstöd
- **Listor: Ordnade listor, oordnade listor, uppgiftslistor
- **Länkar och Bilder**: Automatisk länkigenkänning, stöd för inbäddning av bilder
- **Tabeller**: Stöd för justering och komplexa tabellstrukturer
- **Citat: Blockcitat och nästlade citat

### 🧮 **Matematisk Formel Rendering (KaTeX)**
**Inline-formel**: Einsteins massa-energi-ekvation $E = mc^2$

**Blockformel**:
$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

**Komplex formel**:
$$\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\cdots + x_n$$

**Matrisrepresentation**:
$$\\begin{bmatrix}
a & b \\\\
c & d
\\end{bmatrix}$$

### 📈 **Diagram Rita (Mermaid)**

#### Flödesschema
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

### 💻 **Kodmarkering**

#### JavaScript Exempel
\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Användningsexempel
console.log(fibonacci(10)); // Utdata: 55
\`\`\`

#### Python Exempel
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
| Matematiska formler | ✅ | Komplett KaTeX-stöd | \`$...\$ |
| Flödesscheman | ✅ | Mermaid-diagram | \`mermaid |
| Kodmarkering | ✅ | Flerspråkigt stöd | \`lang |
| Tabeller | ✅ | Komplett tabellfunktionalitet | \| \| \| |
| Länkar | ✅ | Automatisk länkigenkänning | [text](url) |

---

## 📖 Användarguide

### 🚀 **Snabbstart**

1. **Redigera Innehåll**
   - Skriv eller klistra in Markdown-innehåll i den vänstra redigeraren
   - Realtidsförhandsgranskning med WYSIWYG

2. **Ladda upp filer**
   - Klicka på knappen "Ladda upp" för att välja .md eller .txt filer
   - Eller dra och släpp filer direkt i redigerarområdet

3. **Anpassa Stilar**
   - Välj temastil (Standard/Akademisk/Modern/Minimalistisk)
   - Justera pappersstorlek och teckenstorlek
   - Realtidsförhandsgranskning av effekter

4. **Exportera PDF**
   - Klicka på knappen "Hämta PDF"
   - Automatisk nedladdning av det genererade PDF-dokumentet
   - Filnamn genereras automatiskt baserat på dokumenttiteln

### ⌨️ **Markdown Syntax Fuskark**

### Grundläggande Syntax
\`\`\`markdown
# Nivå 1 Rubrik
## Nivå 2 Rubrik
### Nivå 3 Rubrik

**Fet text** eller __Fet text__
*Kursiv text* eller _Kursiv text_
~~Genomstruken~~

- Oordnat listobjekt
  - Nästlat listobjekt

1. Ordnat listobjekt
2. Andra objekt
   1. Nästlat ordnat objekt

>Citattext
>> Nästlat citat

[Länktext](https://example.com)
![Bildbeskrivning](bild.jpg)

\`Inline-kod\`

\`\`\`språk
Kodblock
\`\`\`

### 💡 **Användningstips**

1. **Matematiska formler**
   - Använd \`$...\` för inline-formler
   - Använd \`$$...$$\` för blockformler
   - Komplett LaTeX-matematiksyntax stöds

2. **Kodblock**
   - Ange språk för syntaxmarkering: \`\`\`javascript
   - Språk som stöds: JavaScript, Python, JSON, Bash, etc.

3. **Diagram Rita**
   - Använd Mermaid-syntax för att skapa flödesscheman, grafer, etc.
   - Stöd för flera diagramtyper: graf, flödesschema, etc.

4. **Tabellformatering**
   - Använd \`|\` för att separera kolumner
   - Använd \`-\` för att separera rubriker och innehåll
   - Stöd för justering: \`:---\` (vänster), \`---:\` (höger), \`:---:\` (centrerad)

---

## ❓ Vanliga Frågor (FAQ)

### F1: Vilken Markdown-syntax stöds?
**S**: Detta verktyg stöder standard Markdown-syntax och GitHub Flavored Markdown (GFM) tillägg, inklusive tabeller, uppgiftslistor, genomstruket, etc. Det stöder också matematiska formler (KaTeX) och diagram rita (Mermaid).

### F2: Vad göra om matematiska formler inte visas?
**S**: Se till att du använder rätt syntax:
- Inline-formler: \`$formel$\`
- Blockformler: \`$$formel$$\`
Om de fortfarande inte visas, kontrollera om formelsyntaxen är korrekt.

### F3: Hur är kvaliteten på exporterade PDF:er?
**S**: Vi använder professionella PDF-genereringsmotorer för att säkerstlla utdatakvalitet:
- High-definition vektorgrafik
- Tydlig textrendering
- Korrekt sidnumrering
- Behåll originalformatering

### F4: Är mina data säkra?
**S**: Helt säkra! All bearbetning görs lokalt i din webbläsare:
- Inga data laddas upp till någon server
- Ingen lagring av ditt dokumentinnehåll
- Data raderas automatiskt efter bearbetning

### F5: Vilka webbläsare stöds?
**S**: Stöder alla moderna webbläsare:
- Chrome 65+
- Firefox 60+
- Safari 12+
- Edge 79+

### F6: Hur hantera stora dokument?
**S**: För stora dokument rekommenderar vi:
- Bearbeta i sektioner
- Justera teckenstorlek lämpligt
- Använd sidbrytningar för rimlig segmentering
- Förhandsgranska för att bekräpta effekter före export

### F7: Vad är filnamnet på den exporterade PDF:en?
**S**: Filnamnet genereras automatiskt baserat på titeln på dokumentets första rad, till exempel:
- Titel "Projektrapport" → "Projektrapport.pdf"
- Använder "document.pdf" när det inte finns någon titel

---

## 📞 Teknisk Support

### 🔧 **Teknisk Stack**
- **Next.js** - React-ramverk
- **Tailwind CSS** - Styling-ramverk
- **Marked** - Markdown-tolk
- **KaTeX** - Matematisk formel rendering
- **Mermaid** - Diagram rita
- **html2pdf.js** - PDF-generering
- **Highlight.js** - Kodmarkering

### 📧 **Kontakta Oss**
[Open Source](https://github.com/szlizhenhua/markdown-to-pdf). För frågor eller förslag, kontakta oss via:
- GitHub Issues: Rapportera problem eller begär funktioner
- E-postfeedback: support@markdown-to-pdf.org

### 🔄 **Ändringslogg**
- **v1.0.0** - Första utgåvan
- KaTeX matematisk formel stöd
- Mermaid diagram stöd
- Val av flera temastilar
- Responsiv designoptimering

---

<div style="text-align: center; margin-top: 3em; padding: 2em; border-top: 1px solid #eee; color: #666;">
  <p><strong>Markdown till PDF Converter</strong></p>
  <p>Professionellt Markdown till PDF Konverteringsverktyg</p>
  <p style="font-size: 0.9em; margin-top: 1em;">
    Gjord med ❤️ | Privatkomst Först
  </p>
  <p style="font-size: 0.8em; margin-top: 0.5em;">
    © 2025 Markdown to PDF. Alla rättigheter förbehållna.
  </p>
</div>`,

  // SEO
  seo: {
    title: "Markdown till PDF Converter | Professionell Dokumentexport",
    description: "Konvertera Markdown till professionella PDF-dokument med matematik, kod, diagram, innehållsförteckning, teman. Publiceringskvalitetsutdata för akademisk och kommersiell användning.",
    keywords: "Markdown, PDF, converter, KaTeX, Mermaid, kodmarkering, innehållsförteckning, teman, export, akademisk, professionell"
  },

  // SEO Content
  seoContent: {
    whyChooseUs: {
      label: "Varför välja oss",
      title: "Varför använda vår Markdown till PDF-konverterare?",
      subtitle: "En Apple-liknande upplevelse för publicering: ren, snabb och vackert konsekvent från utkast till PDF.",
      features: {
        privacy: {
          title: "Fokus på integritet",
          description: "Dina data är säkra hos oss. Alla konverteringar sker lokalt i din webbläsare. Vi laddar aldrig upp dina Markdown-filer till någon server."
        },
        instant: {
          title: "Omedelbar konvertering",
          description: "Inga köer. Vår optimerade motor konverterar dina dokument omedelbart och stöder stora filer med lätthet."
        },
        richSupport: {
          title: "Riktigt stöd",
          description: "Fullt stöd för GFM (GitHub Flavored Markdown), KaTeX matematiska formler, Mermaid-diagram och kod-syntaxmarkering."
        }
      }
    },
    howToConvert: {
      label: "Enkelt arbetsflöde",
      title: "Hur man konverterar Markdown till PDF",
      subtitle: "Ett lugnt trestegsprocess designat för att hålla dig fokuserad och få en polerad PDF på sekunder.",
      steps: {
        step1: {
          title: "Skriv eller klistra in Markdown",
          description: "Skriv direkt i vår realtidsredigerare eller klistra in din befintliga Markdown-kod. Du kan också dra och släppa .md-filer."
        },
        step2: {
          title: "Anpassa stilen",
          description: "Välj från våra professionella teman (Akademisk, Modern, etc.) och justera teckenstorlekar, marginaler och pappersstorlek (A4, Letter)."
        },
        step3: {
          title: "Ladda ner PDF",
          description: "Klicka på knappen Exportera för att omedelbart få ett formaterat PDF-dokument redo att delas eller skrivas ut."
        }
      }
    },
    faq: {
      label: "Vanliga frågor",
      title: "Vanliga frågor",
      items: {
        isFree: {
          question: "Är detta verktyg gratis?",
          answer: "Ja, vår Markdown till PDF-konverterare är 100% gratis för personligt och kommersiellt bruk."
        },
        dataStorage: {
          question: "Lagrar ni mina data?",
          answer: "Nej. Vi bearbetar allt i din webbläsare. Dina dokument lämnar aldrig din enhet."
        },
        mathSupport: {
          question: "Stöder den matematiska ekvationer?",
          answer: "Ja! Vi använder KaTeX för att vackert återge komplexa matematiska formler och ekvationer."
        },
        diagrams: {
          question: "Kan jag skapa diagram?",
          answer: "Absolut. Vi stöder Mermaid.js för att skapa flödesdiagram, sekvensdiagram och Gantt-diagram från text."
        }
      }
    },
    comprehensive: {
      title: "Omfattande Markdown-lösning",
      description1: "Oavsett om du är en student som skriver en avhandling, en utvecklare som dokumenterar kod eller en författare som skriver en roman, ger vår Markdown-redigerare de verktyg du behöver. Med funktioner som realtidsförhandsgranskning, ordräknings-spårning och fokusläge kan du skriva utan distraktioner.",
      description2: "Vår konverterare hanterar all standard Markdown-syntax inklusive rubriker, listor, länkar, bilder och citatblock. Avancerade användare kommer att uppskatta stödet för kodblock med språkspecifik syntaxmarkering, fotnoter och uppgiftslistor."
    }
  },

  // Footer
  footer: {
    tagline: "Markdown till PDF",
    subtitle: "Eleganta konverteringar varje gång.",
    description: "Professionellt dokumentkonverteringsverktyg för alla. Gratis, säkert och snabbt.",
    legal: {
      title: "Juridisk",
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
    bold: "Fet",
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
    special: "Särskild",
    lineOps: "Radoperationer"
  },

  // Dialogs
  dialogs: {
    markdownCheatSheet: "Markdown-fuskblad",
    documentStatistics: "Dokumentstatistik",
    close: "Stäng",
    focusMode: {
      title: "Fokusläge",
      enter: "Gå in i fokusläge",
      exit: "Avsluta fokusläge",
      description: "Störfri skrivmiljö"
    },
    wordGoal: {
      title: "Ordmåls-trackerare",
      setGoal: "Ange ordmål",
      currentWords: "Nuvarande ord",
      goalWords: "Mål",
      remaining: "Återstående",
      progress: "Förlopp",
      achieved: "Mål uppnått! 🎉"
    },
    timeTracker: {
      title: "Tidspårare",
      startTime: "Starta session",
      stopTime: "Stoppa session",
      reset: "Återställ",
      totalTime: "Total tid",
      sessions: "Dagens sessioner"
    },
    pomodoro: {
      title: "Pomodoro-timer",
      start: "Starta",
      pause: "Pausa",
      reset: "Återställ",
      work: "Arbete",
      shortBreak: "Kort paus",
      longBreak: "Lång paus",
      sessions: "Slutförda sessioner"
    },
    quickTemplates: {
      title: "Snabbb mallar",
      select: "Välj en mall att infoga"
    },
    documentTemplates: {
      title: "Dokumentmallar",
      description: "Välj en mall för att börja"
    },
    performance: {
      title: "Prestandainställningar",
      debounceTime: "Debounce-tid",
      description: "Justera renderingsprestanda"
    },
    autosave: {
      title: "Inställningar för autospar",
      interval: "Spara-intervall",
      description: "Hur ofta ditt arbete sparas automatiskt",
      status: {
        saved: "Sparad",
        saving: "Sparar...",
        unsaved: "Osparade ändringar",
        error: "Sparfel"
      }
    },
    typography: {
      title: "Typografi-kontroller",
      fontSize: "Teckenstorlek",
      lineHeight: "Radhöjd",
      fontFamily: "Teckenfamilj"
    },
    snippets: {
      title: "Snutt-bibliotek",
      add: "Lägg till snutt",
      save: "Spara snutt",
      cancel: "Avbryt",
      name: "Namn",
      content: "Innehåll"
    },
    keyboardShortcuts: {
      title: "Tangentbordsgenvägar",
      description: "Påskynda ditt arbetsflöde med dessa genvägar"
    }
  }
}
