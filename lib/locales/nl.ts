export const nl = {
  // Header
  title: "Markdown naar PDF Converter",
  subtitle: "Converteer Markdown naar professionele PDF's",

  // Controls
  buttons: {
    upload: "Uploaden",
    showPreview: "Voorbeeld weergeven",
    hidePreview: "Voorbeeld verbergen",
    getPDF: "PDF ophalen",
    generatingPDF: "PDF genereren...",
    settings: "Instellingen",
    tableOfContents: "Inhoudsopgave",
    exportHTML: "HTML",
    exportMarkdown: "MD"
  },

  // Editor
  editor: {
    title: "Markdown Editor",
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
    title: "Voorbeeld",
    theme: "thema"
  },

  // Settings
  settings: {
    title: "Instellingen",
    theme: "Thema",
    paperSize: "Papierformaat",
    fontSize: "Lettergrootte"
  },

  // Table of Contents
  toc: {
    title: "Inhoudsopgave"
  },

  // Themes
  themes: {
    default: "Standaard",
    academic: "Academisch",
    modern: "Modern",
    minimal: "Minimaal"
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
    mermaidExampleSyntax: "Voorbeeld van syntaxis:",
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
    resetCompleteMessage: "Editor en instellingen zijn teruggezet naar de standaardwaarden.",
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
      academic: "Academisch",
      technical: "Technisch",
      documentation: "Documentatie"
    }
  },

  // Default Content
  defaultContent: `# Markdown naar PDF Converter

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

#### JavaScript Voorbeeld
\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Gebruiksvoorbeeld
console.log(fibonacci(10)); // Uitvoer: 55
\`\`\`

#### Python Voorbeeld
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
   - Klik op de knop "Uploaden" om .md of .txt bestanden te selecteren
   - Of sleep bestanden direct naar het editorgebied

3. **Stijlen aanpassen**
   - Kies de themastijl (Standaard/Academisch/Modern/Minimaal)
   - Pas papierformaat en lettergrootte aan
   - Real-time voorbeeld van effecten

4. **PDF exporteren**
   - Klik op de knop "PDF ophalen"
   - Automatische download van het gegenereerde PDF-document
   - Bestandsnaam wordt automatisch gegenereerd op basis van de documenttitel

### ⌨️ **Markdown Syntaxis Cheat Sheet**

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
- Lettergrootte indien aanpassen
- Pagina-einden gebruiken voor redelijke segmentering
- Voorbeeld bekijken om effecten te bevestigen voordat u exporteert

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
  <p><strong>Markdown naar PDF Converter</strong></p>
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
    title: "Markdown naar PDF Converter | Professionele Document Export",
    description: "Converteer Markdown naar professionele PDF-documenten met wiskunde, code, diagrammen, inhoudsopgave, thema's. Publicatiekwaliteit output voor academisch en commercieel gebruik.",
    keywords: "Markdown, PDF, converter, KaTeX, Mermaid, code highlighting, inhoudsopgave, thema's, export, academisch, professioneel"
  }
}
