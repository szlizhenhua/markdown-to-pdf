export const de = {
  // Header
  title: "Markdown zu PDF Konverter",
  subtitle: "Konvertieren Sie Markdown in professionelle PDFs",

  // Controls
  buttons: {
    upload: "Hochladen",
    showPreview: "Vorschau anzeigen",
    hidePreview: "Vorschau ausblenden",
    getPDF: "PDF abrufen",
    generatingPDF: "PDF wird erstellt...",
    settings: "Einstellungen",
    tableOfContents: "Inhaltsverzeichnis",
    exportHTML: "HTML",
    exportMarkdown: "MD"
  },

  // Editor
  editor: {
    title: "Markdown-Editor",
    placeholder: "Beginnen Sie hier mit der Eingabe Ihres Markdowns...\n\n# Überschrift 1\n## Überschrift 2\n\n**Fett** und *kursiv*\n\n- Listenelement 1\n- Listenelement 2\n\n```javascript\nconsole.log('Hallo Welt!');\n```\n\n| Spalte 1 | Spalte 2 |\n|---------|----------|\n| Daten 1  | Daten 2   |",
    dragDropText: "Ziehen Sie Ihre Markdown-Datei hierher",
    dragDropSubtext: "Unterstützt .md und .txt Dateien",
    loading: "Diagramm wird geladen...",
    rendering: "Diagramm wird gerendert...",
    stats: {
      characters: "Zeichen",
      words: "Wörter",
      lines: "Zeilen",
      readingTime: "Lesezeit",
      readingTimeLessThanOne: "< 1 Min",
      readingTimeMinute: "Min",
      readingTimeHour: "Std"
    }
  },

  // Preview
  preview: {
    title: "Vorschau",
    theme: "Thema"
  },

  // Settings
  settings: {
    title: "Einstellungen",
    theme: "Thema",
    paperSize: "Papierformat",
    fontSize: "Schriftgröße"
  },

  // Table of Contents
  toc: {
    title: "Inhaltsverzeichnis"
  },

  // Themes
  themes: {
    default: "Standard",
    academic: "Akademisch",
    modern: "Modern",
    minimal: "Minimalistisch"
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
    pdfGenerationError: "PDF-Erstellung fehlgeschlagen",
    pdfExportError: "PDF-Export fehlgeschlagen, bitte überprüfen Sie die Konsole für Details",
    mermaidRenderError: "Mermaid-Renderfehler",
    mermaidSyntaxError: "Bitte überprüfen Sie die Mermaid-Syntax",
    mermaidExampleSyntax: "Beispielsyntax:",
    mermaidRenderRetry: "Mermaid-Render-Versuch {count} fehlgeschlagen, erneuter Versuch in 100ms",
    mermaidFinalError: "Mermaid-Render endgültig fehlgeschlagen",
    unknownError: "Unbekannter Fehler",
    highlightJsError: "Highlight.js-Fehler für Sprache \"{lang}\":",
    katexRenderError: "KaTeX-Renderfehler:",
    mermaidInitError: "Mermaid-Initialisierungsfehler:",
    mermaidLoading: "Diagramm wird geladen...",
    mermaidRendering: "Diagramm wird gerendert...",
    templateLoaded: "Vorlage geladen",
    templateLoadedMessage: "Die Vorlage wurde auf den Editor angewendet.",
    fileTooLarge: "Die Datei ist zu groß. Die maximale Größe beträgt 5 MB.",
    invalidFileType: "Ungültiger Dateityp. Bitte laden Sie eine .md oder .txt Datei hoch.",
    fileUploadFailed: "Datei-Upload fehlgeschlagen. Bitte versuchen Sie es erneut.",
    fileUploaded: "Datei erfolgreich hochgeladen",
    resetComplete: "Zurücksetzung abgeschlossen",
    resetCompleteMessage: "Editor und Einstellungen wurden auf Standardwerte zurückgesetzt.",
    copySuccess: "In die Zwischenablage kopiert",
    copyFailed: "Kopieren in die Zwischenablage fehlgeschlagen",
    networkError: "Netzwerkfehler. Bitte überprüfen Sie Ihre Verbindung.",
    quotaExceeded: "Speicherplatzkontingent überschritten. Bitte löschen Sie einige Browser-Daten.",
    autoSaveFailed: "Automatisches Speichern fehlgeschlagen. Ihre Änderungen werden möglicherweise nicht gespeichert."
  },

  // Templates
  templates: {
    title: "Vorlage auswählen",
    description: "Wählen Sie aus professionell gestalteten Vorlagen für einen schnellen Start",
    selectTemplate: "Klicken Sie auf eine Vorlage, um sie in den Editor zu laden. Ihr aktueller Inhalt wird ersetzt.",
    categories: {
      all: "Alle Vorlagen",
      basic: "Grundlegend",
      academic: "Akademisch",
      technical: "Technisch",
      documentation: "Dokumentation"
    },
    // Document templates
    blank: {
      name: "Leeres Dokument",
      description: "Mit einem leeren Blatt beginnen"
    },
    article: {
      name: "Blog-Artikel",
      description: "Standard-Beitragsstruktur"
    },
    readme: {
      name: "README.md",
      description: "Projektdokumentationsvorlage"
    },
    resume: {
      name: "Lebenslauf",
      description: "Professionelle Lebenslaufvorlage"
    },
    essay: {
      name: "Wissenschaftliche Arbeit",
      description: "Strukturierte wissenschaftliche Arbeit"
    },
    meeting: {
      name: "Meeting-Protokoll",
      description: "Vorlage für strukturierte Meeting-Notizen"
    },
    tutorial: {
      name: "Tutorial/Leitfaden",
      description: "Schritt-für-Schritt-Tutorial-Vorlage"
    },
    simpleNotes: {
      name: "Einfache Notizen",
      description: "Grundlegende Notizvorlage"
    },
    meetingNotes: {
      name: "Meeting-Notizen",
      description: "Strukturierte Meeting-Dokumentation"
    },
    researchPaper: {
      name: "Forschungsarbeit",
      description: "Akademische Vorlage mit Zitaten"
    },
    apiDocumentation: {
      name: "API-Dokumentation",
      description: "Technische API-Referenzvorlage"
    },
    blogPost: {
      name: "Blog-Artikel-Vorlage",
      description: "SEO-optimierte Blog-Artikelvorlage"
    },
    productRequirements: {
      name: "Produktanforderungen",
      description: "PRD-Vorlage für Produktmanager"
    },
    templates: "Vorlagen"
  },

  quickTemplates: {
    apiEndpoint: "API-Endpunkt",
    codeSnippet: "Code-Schnipsel",
    meetingNotes: "Meeting-Notizen",
    bugReport: "Fehlerbericht",
    dailyStandup: "Tägliches Standup",
    featureRequest: "Funktionsanfrage",
    codeReview: "Code-Review",
    projectReadme: "Projekt-README"
  },
  textTransform: {
    title: "Text transformieren",
    close: "Schließen",
    uppercase: "GROSSBUCHSTABEN",
    lowercase: "kleinbuchstaben",
    titleCase: "Titel",
    sentenceCase: "Satz",
    camelCase: "camelCase",
    kebabCase: "kebab-case",
    snakeCase: "snake_case",
    toggleCase: "tOGGLE cASE",
    capitalize: "Großschreiben",
    uppercaseDesc: "In Großbuchstaben umwandeln",
    lowercaseDesc: "In Kleinbuchstaben umwandeln",
    titleCaseDesc: "Jedes Wort großschreiben",
    sentenceCaseDesc: "Nur erstes Wort großschreiben",
    camelCaseDesc: "In camelCase umwandeln",
    kebabCaseDesc: "In kebab-case umwandeln",
    snakeCaseDesc: "In snake_case umwandeln",
    toggleCaseDesc: "Groß-/Kleinschreibung umschalten",
    capitalizeDesc: "Ersten Buchstaben großschreiben"
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
    language: "Sprache",
    insertCodeBlock: "Code-Block einfügen",
    preview: "Vorschau"
  },
  dateTime: {
    insertDateTime: "Datum/Uhrzeit einfügen",
    date: "Datum",
    time: "Uhrzeit",
    dateTime: "Datum & Uhrzeit",
    iso8601: "ISO 8601",
    usFormat: "US-Format",
    euFormat: "EU-Format",
    readable: "Lesbar",
    cancel: "Abbrechen"
  },
  listHelper: {
    listType: "Listentyp",
    bullet: "Aufzählung",
    numbered: "Nummeriert",
    numberOfItems: "Anzahl der Elemente",
    listItems: "Listenelemente",
    insertList: "Liste einfügen",
    cancel: "Abbrechen",
    item: "Element"
  },
  highlightHelper: {
    insertHighlight: "Hervorhebung einfügen",
    highlightText: "Text hervorheben",
    textToHighlight: "Zu hervorhebender Text",
    color: "Farbe",
    visualOnly: "(nur visuell)",
    note: "Hinweis: Hervorhebung verwendet die Syntax ==Text==. Wird möglicherweise nicht von allen Markdown-Renderern unterstützt.",
    cancel: "Abbrechen",
    yellow: "Gelb",
    red: "Rot",
    green: "Grün",
    blue: "Blau",
    purple: "Lila",
    pink: "Rosa"
  },

  helpDialog: {
    title: "Markdown-Schnellreferenz",
    close: "Schließen",
    headings: "Überschriften",
    textStyles: "Textstile",
    codeBlocks: "Code-Blöcke",
    lists: "Listen",
    links: "Links",
    images: "Bilder",
    quotes: "Zitate",
    tables: "Tabellen"
  },

  // Batch Conversion
  batchConversion: {
    button: "Batch-PDF",
    buttonShort: "Batch",
    dialogTitle: "Markdown Batch-Konvertierung",
    dialogDescription: "Wählen Sie einen Ordner oder mehrere .md-Dateien aus, wählen Sie dann einen Ausgabeordner, um die PDFs nacheinander zu generieren.",
    selectFolder: "Ordner auswählen",
    selectFiles: "Dateien auswählen",
    outputTitle: "Ausgabeordner auswählen",
    outputDescription: "{count} Markdown-Dateien gefunden. Wählen Sie einen Ausgabeordner und starten Sie die Konvertierung.",
    duplicateHint: "Wenn im Ausgabeordner bereits ein PDF mit demselben Namen vorhanden ist, wird ein numerisches Suffix hinzugefügt, um ein Überschreiben zu vermeiden.",
    folderHint: "Rekursives Scannen des ausgewählten Ordners und seiner Unterordner",
    filesHint: "Mehrere .md-Dateien auf einmal auswählen",
    chooseOutput: "Ausgabeordner auswählen und starten",
    processingTitle: "Batch-Konvertierung läuft",
    processingDescription: "PDFs werden sequenziell generiert. Halten Sie diese Seite geöffnet.",
    currentFile: "Aktuelle Datei",
    completed: "Abgeschlossen",
    resultTitle: "Batch-Konvertierung abgeschlossen",
    resultSummary: "{success} erfolgreich, {failed} fehlgeschlagen.",
    outputFolder: "Ausgabeordner",
    selectedFiles: "Ausgewählte Dateien",
    failedFiles: "Fehlgeschlagene Dateien",
    moreFiles: "weitere Dateien",
    close: "Schließen",
    cancel: "Abbrechen",
    unsupported: "Dieser Browser unterstützt keine ordnerbasierte Batch-Konvertierung. Verwenden Sie einen aktuellen Chromium-basierten Browser wie Chrome oder Edge.",
    noMarkdownFiles: "Keine Markdown-Dateien in der ausgewählten Quelle gefunden.",
    skippedFiles: "{count} Dateien, die die Anforderungen nicht erfüllen, wurden übersprungen.",
    finishedToast: "Batch-Konvertierung abgeschlossen",
    partialFailureToast: "Einige Dateien konnten nicht konvertiert werden"
  },

  // Default Content
  defaultContent: `# Markdown zu PDF Konverter

> 🎯 **Konvertieren Sie Ihre Markdown-Dokumente in professionelle PDFs mit mathematischen Formeln, Flussdiagrammen, Code-Hervorhebung und mehreren Themen**

## ✨ Funktionen

### 📊 **Umfassende Markdown-Unterstützung**
- **Textformatierung**: **Fett**, *Kursiv*, ~~Durchgestrichen~~, \`Inline-Code\`
- **Überschriftenebenen**: Vollständige H1-H6-Überschriftenstruktur-Unterstützung
- **Listen**: Geordnete Listen, ungeordnete Listen, Aufgabenlisten
- **Links und Bilder**: Automatische Link-Erkennung, Unterstützung für das Einbetten von Bildern
- **Tabellen**: Unterstützung für Ausrichtung und komplexe Tabellenstrukturen
- **Zitate**: Blockzitate und verschachtelte Zitate

### 🧮 **Mathematische Formeln (KaTeX)**
**Inline-Formel**: Einsteins Masse-Energie-Gleichung $E = mc^2$

**Block-Formel**:
$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

**Komplexe Formel**:
$$\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\cdots + x_n$$

**Matrix-Darstellung**:
$$\\begin{bmatrix}
a & b \\\\
c & d
\\end{bmatrix}$$

### 📈 **Diagramm-Erstellung (Mermaid)**

#### Flussdiagramm
\`\`\`mermaid
graph TD
    A[Start] --> B{Bedingung}
    B -->|Ja| C[Ausführen A]
    B -->|Nein| D[Ausführen B]
    C --> E[Ende]
    D --> E
\`\`\`

#### Graph-Diagramm
\`\`\`mermaid
graph LR
    A[Benutzer] --> B[System]
    B --> A[Antwort]
\`\`\`

#### Sequenzdiagramm
\`\`\`mermaid
sequenceDiagram
    participant U as Benutzer
    participant W as Webanwendung
    participant S as PDF-Service
    U->>W: Einfügen/Bearbeiten Markdown
    W-->>U: Live-Vorschau
    U->>W: Klick "PDF abrufen"
    W->>S: Rendern & PDF generieren
    S-->>W: PDF zurückgeben
    W-->>U: Datei herunterladen
\`\`\`

#### Gantt-Diagramm
\`\`\`mermaid
gantt
    title Projektplan (Beispiel)
    dateFormat  YYYY-MM-DD
    section Planung
    Anforderungen        :a1, 2026-02-01, 3d
    Überprüfung          :a2, 2026-02-04, 1d
    section Bereitstellung
    Editor-Funktionen     :b1, 2026-02-05, 5d
    PDF-Export-Politur   :b2, 2026-02-10, 3d
\`\`\`

#### Klassendiagramm
\`\`\`mermaid
classDiagram
    class MarkdownRenderer {
      +render(markdown) HTML
      +renderMermaid() void
    }
    class PdfExporter {
      +export(html) PDF
    }
    MarkdownRenderer --> PdfExporter : stellt HTML bereit
\`\`\`

#### Zustandsdiagramm
\`\`\`mermaid
stateDiagram-v2
    [*] --> Leerlauf
    Leerlauf --> Bearbeitung : tippen
    Bearbeitung --> Vorschau : vorschau
    Vorschau --> Exportieren : exportieren
    Exportieren --> Leerlauf : fertig
\`\`\`

#### Kreisdiagramm
\`\`\`mermaid
pie title Risikoaufteilung (Beispiel)
    "Hoch" : 15
    "Mittel" : 35
    "Niedrig" : 50
\`\`\`

#### Mindmap
\`\`\`mermaid
mindmap
  root((Risiko))
    Identifizieren
      Bedrohungen
      Chancen
    Bewerten
      Auswirkung
      Wahrscheinlichkeit
    Reagieren
      Mindern
      Übertragen
      Akzeptieren
\`\`\`

#### Zeitleiste
\`\`\`mermaid
timeline
    title Veröffentlichungs-Rhythmus (Beispiel)
    2026-02 : v1.0 Start
    2026-03 : Vorlagen-Bibliothek
    2026-04 : Zusammenarbeit & Verlauf
\`\`\`

#### Radar-Diagramm (Benutzerdefiniert)
\`\`\`mermaid
radar-chart
    title Teamfähigkeiten-Radar (Beispiel 1)
    axis Kommunikation, Design, Entwicklung, QA, Dokumentation
    series Plan A [80, 70, 90, 60, 75]
    series Plan B [65, 85, 70, 80, 60]
\`\`\`

\`\`\`mermaid
radar
    title Produktmetriken-Radar (Beispiel 2)
    axis Geschwindigkeit, Stabilität, UX, Wartbarkeit
    v1 [70, 60, 80, 65]
\`\`\`

#### Quadrant-Diagramm (Benutzerdefiniert)
\`\`\`mermaid
quadrant-chart
    title Risiko-vs-Zeitraum-Matrix
    x-axis "Kontrollierbarkeit" --> "Sensibilität"
    y-axis "Reife" --> "Dringlichkeit"
    quadrant-1 "Strategisches Fenster"
    quadrant-2 "Beobachten & vorbereiten"
    quadrant-3 "Vermeiden"
    quadrant-4 "Beschleunigen"
    "Lokale Vertiefung": [0.75, 0.85]
    "ASE-Erkundung": [0.45, 0.65]
    "Zweigleisig": [0.35, 0.55]
    "Wettbewerbsvorsprung": [0.60, 0.31]
\`\`\`

### 💻 **Code-Hervorhebung**

#### JavaScript-Beispiel
\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Verwendungsbeispiel
console.log(fibonacci(10)); // Ausgabe: 55
\`\`\`

#### Python-Beispiel
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

### 📋 **Tabellen-Funktionen**

| Funktion | Status | Beschreibung | Verknüpfung |
|---------|:------:|-------------|----------|
| Mathematische Formeln | ✅ | Vollständige KaTeX-Unterstützung | \`$...\$ |
| Flussdiagramme | ✅ | Mermaid-Diagramme | \`mermaid |
| Code-Hervorhebung | ✅ | Mehrsprachige Unterstützung | \`lang |
| Tabellen | ✅ | Vollständige Tabellenfunktionalität | \| \| \| |
| Links | ✅ | Automatische Link-Erkennung | [text](url) |

---

## 📖 Benutzerhandbuch

### 🚀 **Schnellstart**

1. **Inhalt bearbeiten**
   - Geben Sie Markdown-Inhalt in den linken Editor ein oder fügen Sie ihn ein
   - Echtzeitvorschau mit WYSIWYG

2. **Dateien hochladen**
   - Klicken Sie auf die Schaltfläche "Hochladen", um .md oder .txt Dateien auszuwählen
   - Oder ziehen Sie Dateien direkt in den Editor-Bereich

3. **Stile anpassen**
   - Wählen Sie das Themen-Design (Standard/Akademisch/Modern/Minimalistisch)
   - Passen Sie Papierformat und Schriftgröße an
   - Echtzeitvorschau der Effekte

4. **PDF exportieren**
   - Klicken Sie auf die Schaltfläche "PDF abrufen"
   - Automatischer Download des generierten PDF-Dokuments
   - Dateiname wird automatisch basierend auf dem Dokumenttitel generiert

### ⌨️ **Markdown-Syntax-Referenz**

#### Grundlegende Syntax
\`\`\`markdown
# Überschrift Ebene 1
## Überschrift Ebene 2
### Überschrift Ebene 3

**Fetter Text** oder __Fetter Text__
*Kursiver Text* oder _Kursiver Text_
~~Durchgestrichen~~

- Ungeordnetes Listenelement
  - Verschachteltes Listenelement

1. Geordnetes Listenelement
2. Zweites Element
   1. Verschachteltes geordnetes Element

> Zitattext
>> Verschachteltes Zitat

[Linktext](https://example.com)
![Bildbeschreibung](bild.jpg)

\`Inline-Code\`

\`\`\`sprache
Codeblock
\`\`\`

### 💡 **Nutzungstipps**

1. **Mathematische Formeln**
   - Verwenden Sie \`$...\` für Inline-Formeln
   - Verwenden Sie \`$$...$$\` für Block-Formeln
   - Volle LaTeX-Mathematik-Syntax unterstützt

2. **Codeblöcke**
   - Geben Sie die Sprache für Syntaxhervorhebung an: \`\`\`javascript
   - Unterstützte Sprachen: JavaScript, Python, JSON, Bash, etc.

3. **Diagramm-Erstellung**
   - Verwenden Sie Mermaid-Syntax zum Erstellen von Flussdiagrammen, Graphen, etc.
   - Unterstützung für mehrere Diagrammtypen: Graph, Flussdiagramm, etc.

4. **Tabellenformatierung**
   - Verwenden Sie \`|\` zum Trennen von Spalten
   - Verwenden Sie \`-\` zum Trennen von Kopfzeilen und Inhalt
   - Unterstützung für Ausrichtung: \`:---\` (links), \`---:\` (rechts), \`:---:\` (zentriert)

---

## ❓ Häufig Gestellte Fragen (FAQ)

### F1: Welche Markdown-Syntax wird unterstützt?
**A**: Dieses Tool unterstützt die Standard-Markdown-Syntax und GitHub Flavored Markdown (GFM) Erweiterungen, einschließlich Tabellen, Aufgabenlisten, Durchgestrichenem, etc. Es unterstützt auch mathematische Formeln (KaTeX) und Diagramm-Erstellung (Mermaid).

### F2: Was tun, wenn mathematische Formeln nicht angezeigt werden?
**A**: Stellen Sie sicher, dass Sie die korrekte Syntax verwenden:
- Inline-Formeln: \`$Formel$\`
- Block-Formeln: \`$$Formel$$\`
Wenn sie immer noch nicht angezeigt werden, überprüfen Sie, ob die Formelsyntax korrekt ist.

### F3: Wie ist die Qualität der exportierten PDFs?
**A**: Wir verwenden professionelle PDF-Generierungs-Engines, um die Ausgabequalität zu sicherstellen:
- High-Definition-Vektorgrafiken
- Klare Textwiedergabe
- Korrekte Seitenpaginierung
- Originalformatierung beibehalten

### F4: Sind meine Daten sicher?
**A**: Vollständig sicher! Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser:
- Keine Daten werden auf einen Server hochgeladen
- Kein Speichern Ihres Dokumentinhalts
- Daten werden nach der Verarbeitung automatisch gelöscht

### F5: Welche Browser werden unterstützt?
**A**: Unterstützt alle modernen Browser:
- Chrome 65+
- Firefox 60+
- Safari 12+
- Edge 79+

### F6: Wie gehe ich mit großen Dokumenten um?
**A**: Für große Dokumente empfehlen wir:
- Verarbeitung in Abschnitten
- Schriftgröße angemessen anpassen
- Seitenumbrüche für vernünftige Segmentierung verwenden
- Vorschau verwenden, um Effekte vor dem Export zu bestätigen

### F7: Wie lautet der Dateiname des exportierten PDFs?
**A**: Der Dateiname wird automatisch basierend auf dem Titel der ersten Zeile des Dokuments generiert, zum Beispiel:
- Titel "Projektbericht" → "Projektbericht.pdf"
- Verwendet "dokument.pdf", wenn kein Titel vorhanden ist

---

## 📞 Technischer Support

### 🔧 **Tech-Stack**
- **Next.js** - React-Framework
- **Tailwind CSS** - Styling-Framework
- **Marked** - Markdown-Parser
- **KaTeX** - Mathematische Formel-Rendering
- **Mermaid** - Diagramm-Erstellung
- **html2pdf.js** - PDF-Generierung
- **Highlight.js** - Code-Hervorhebung

### 📧 **Kontaktieren Sie uns**
[Open Source](https://github.com/szlizhenhua/markdown-to-pdf). Bei Fragen oder Vorschlägen kontaktieren Sie uns bitte über:
- GitHub Issues: Probleme melden oder Funktionen anfordern
- E-Mail-Feedback: support@markdown-to-pdf.org

### 🔄 **Änderungsprotokoll**
- **v1.0.0** - Erste Version
- KaTeX-Mathematikformel-Unterstützung
- Mermaid-Diagramm-Unterstützung
- Mehrere Themenstil-Selection
- Responsive Design-Optimierung

---

<div style="text-align: center; margin-top: 3em; padding: 2em; border-top: 1px solid #eee; color: #666;">
  <p><strong>Markdown zu PDF Konverter</strong></p>
  <p>Professionelles Markdown-zu-PDF-Konvertierungstool</p>
  <p style="font-size: 0.9em; margin-top: 1em;">
    Mit ❤️ erstellt | Datenschutz zuerst
  </p>
  <p style="font-size: 0.8em; margin-top: 0.5em;">
    © 2025 Markdown to PDF. Alle Rechte vorbehalten.
  </p>
</div>`,

  // SEO
  seo: {
    title: "Markdown zu PDF Konverter | Professioneller Dokumenten-Export",
    description: "Konvertieren Sie Markdown in professionelle PDF-Dokumente mit Mathematik, Code, Diagrammen, Inhaltsverzeichnis, Themen. Veröffentlichungsqualität für akademische und kommerzielle Nutzung.",
    keywords: "Markdown, PDF, Konverter, KaTeX, Mermaid, Code-Hervorhebung, Inhaltsverzeichnis, Themen, Export, akademisch, professionell"
  },

  // SEO Content
  seoContent: {
    whyChooseUs: {
      label: "Warum uns wählen",
      title: "Warum unseren Markdown zu PDF Konverter verwenden?",
      subtitle: "Ein Apple-ähnliches Erlebnis für das Publizieren: sauber, schnell und schön konsistent vom Entwurf zum PDF.",
      features: {
        privacy: {
          title: "Privatsphäre-fokussiert",
          description: "Ihre Daten sind bei uns sicher. Alle Konvertierungen finden lokal in Ihrem Browser statt. Wir laden Ihre Markdown-Dateien niemals auf einen Server hoch."
        },
        instant: {
          title: "Sofortige Konvertierung",
          description: "Keine Warteschlangen. Unsere optimierte Engine konvertiert Ihre Dokumente sofort und unterstützt große Dateien mühelos."
        },
        richSupport: {
          title: "Umfangreiche Unterstützung",
          description: "Volle Unterstützung für GFM (GitHub Flavored Markdown), KaTeX mathematische Formeln, Mermaid-Diagramme und Code-Syntax-Hervorhebung."
        }
      }
    },
    howToConvert: {
      label: "Einfacher Arbeitsablauf",
      title: "Wie man Markdown zu PDF konvertiert",
      subtitle: "Ein ruhiger Dreischritt-Prozess, der Sie fokussiert hält und in Sekunden ein polishedes PDF liefert.",
      steps: {
        step1: {
          title: "Markdown schreiben oder einfügen",
          description: "Tippen Sie direkt in unseren Echtzeit-Editor oder fügen Sie Ihren vorhandenen Markdown-Code ein. Sie können auch .md-Dateien per Drag & Drop hinzufügen."
        },
        step2: {
          title: "Stil anpassen",
          description: "Wählen Sie aus unseren professionellen Themen (Akademisch, Modern, etc.) und passen Sie Schriftgrößen, Ränder und Papiergröße (A4, Letter) an."
        },
        step3: {
          title: "PDF herunterladen",
          description: "Klicken Sie auf die Export-Schaltfläche, um sofort Ihr formatiertes PDF-Dokument zu erhalten, bereit zum Teilen oder Drucken."
        }
      }
    },
    faq: {
      label: "FAQ",
      title: "Häufig gestellte Fragen",
      items: {
        isFree: {
          question: "Ist dieses Werkzeug kostenlos?",
          answer: "Ja, unser Markdown zu PDF Konverter ist zu 100% kostenlos für persönliche und kommerzielle Nutzung."
        },
        dataStorage: {
          question: "Speichern Sie meine Daten?",
          answer: "Nein. Wir verarbeiten alles in Ihrem Browser. Ihre Dokumente verlassen niemals Ihr Gerät."
        },
        mathSupport: {
          question: "Unterstützt es mathematische Gleichungen?",
          answer: "Ja! Wir verwenden KaTeX, um komplexe mathematische Formeln und Gleichungen schön darzustellen."
        },
        diagrams: {
          question: "Kann ich Diagramme erstellen?",
          answer: "Absolut. Wir unterstützen Mermaid.js, um Flussdiagramme, Sequenzdiagramme und Gantt-Diagramme aus Text zu erstellen."
        }
      }
    },
    comprehensive: {
      title: "Umfassende Markdown-Lösung",
      description1: "Ob Sie ein Student sind, der eine Abschlussarbeit schreibt, ein Entwickler, der Code dokumentiert, oder ein Schriftsteller, der an einem Roman arbeitet, unser Markdown-Editor bietet die Werkzeuge, die Sie benötigen. Mit Funktionen wie Live-Vorschau, Wortzahlverfolgung und Fokusmodus können Sie ohne Ablenkungen schreiben.",
      description2: "Unser Konverter处理 alle Standard-Markdown-Syntaxe einschließlich Überschriften, Listen, Links, Bilder und Zitatblöcke. Fortgeschrittene Benutzer werden die Unterstützung für Code-Blöcke mit sprachspezifischer Syntaxhervorhebung, Fußnoten und Aufgabenlisten zu schätzen wissen."
    }
  },

  // Footer
  footer: {
    tagline: "Markdown zu PDF",
    subtitle: "Elegante Konvertierungen, jedes Mal.",
    description: "Professionelles Dokumentenkonvertierungstool für alle. Kostenlos, sicher und schnell.",
    legal: {
      title: "Rechtliches",
      privacyPolicy: "Datenschutzrichtlinie",
      termsOfService: "Nutzungsbedingungen"
    },
    links: {
      title: "Links",
      aboutUs: "Über uns",
      contact: "Kontakt"
    },
    connect: {
      title: "Verbinden",
      description: "Fragen oder Feedback?"
    },
    copyright: "© {year} Markdown to PDF. Alle Rechte vorbehalten.",
    designed: "Entworfen für Klarheit"
  },

  // Toolbar
  toolbar: {
    heading: "Überschrift",
    bold: "Fett",
    italic: "Kursiv",
    strikethrough: "Durchgestrichen",
    code: "Code",
    link: "Link",
    image: "Bild",
    bulletList: "Aufzählungsliste",
    numberedList: "Nummerierte Liste",
    quote: "Zitat",
    codeBlock: "Codeblock",
    horizontalRule: "Horizontale Linie",
    undo: "Rückgängig",
    redo: "Wiederholen",
    showLess: "Weniger anzeigen",
    showMore: "Mehr anzeigen",
    disableWordWrap: "Zeilenumbruch deaktivieren",
    enableWordWrap: "Zeilenumbruch aktivieren",
    findAndReplace: "Suchen und ersetzen",
    showTools: "Tools anzeigen",
    hideTools: "Tools ausblenden",
    exportTXT: "TXT",
    special: "Spezial",
    lineOps: "Zeilenoperationen",
    focus: "Fokus",
    focused: "Fokussiert",
    exportMarkdownLabel: "Export .md",
    splitView: {
      sideBySide: "Nebeneinander",
      vertical: "Vertikal",
      switchToSideBySide: "Zur Nebeneinander-Ansicht wechseln",
      switchToVertical: "Zur vertikalen Ansicht wechseln"
    },
    lineOpsActions: {
      duplicate: "Zeile duplizieren",
      delete: "Zeile löschen",
      join: "Verbinden",
      sortAsc: "Sortieren ↑",
      sortDesc: "Sortieren ↓",
      reverse: "Umkehren",
      clean: "Bereinigen"
    }
  },

  // Dialogs
  dialogs: {
    markdownCheatSheet: "Markdown-Spickzettel",
    documentStatistics: "Dokumentstatistiken",
    close: "Schließen",
    focusMode: {
      title: "Fokusmodus",
      enter: "Fokusmodus betreten",
      exit: "Fokusmodus beenden",
      description: "Ablenkungsfreie Schreibumgebung",
      activeHint: "Fokusmodus aktiv – Esc zum Beenden"
    },
    markdownExport: {
      title: "Markdown exportieren",
      description: "Markdown als .md-Datei herunterladen oder in die Zwischenablage kopieren",
      filenameLabel: "Dateiname",
      filenamePlaceholder: "document",
      filenameHint: "Datei wird als \"{filename}\" gespeichert",
      download: ".md herunterladen",
      copy: "In Zwischenablage kopieren",
      fileInfoTitle: "Dateiinfo:"
    },
    wordGoal: {
      title: "Wortziel-Tracker",
      setGoal: "Wortziel festlegen",
      currentWords: "Aktuelle Wörter",
      goalWords: "Ziel",
      remaining: "Verbleibend",
      progress: "Fortschritt",
      achieved: "Ziel erreicht! 🎉",
      doneBadge: "Fertig"
    },
    timeTracker: {
      title: "Zeit-Tracker",
      startTime: "Starten",
      stopTime: "Pause",
      reset: "Zurücksetzen",
      totalTime: "Gesamtzeit",
      sessions: "Heutige Sitzungen",
      wordsPerMin: "Wörter/Min",
      recording: "Aufnahme",
      stopped: "Gestoppt",
      today: "Heute",
      thisWeek: "Diese Woche",
      avgSession: "Durchschnittssitzung",
      dailyTimeGoal: "Tägliches Zeitziel",
      hours: "2 Stunden",
      recentSessions: "Letzte Sitzungen"
    },
    pomodoro: {
      title: "Pomodoro-Timer",
      description: "Verwenden Sie die Pomodoro-Technik für fokussierte Schreibsessions",
      start: "Starten",
      pause: "Pause",
      reset: "Zurücksetzen",
      work: "Arbeit",
      shortBreak: "Kurze Pause",
      longBreak: "Lange Pause",
      sessions: "Abgeschlossene Sitzungen"
    },
    quickTemplates: {
      title: "Schnellvorlagen",
      select: "Vorlage zum Einfügen auswählen"
    },
    documentTemplates: {
      title: "Dokumentvorlagen",
      description: "Vorlage auswählen, um loszulegen"
    },
    performance: {
      title: "Leistungseinstellungen",
      debounceTime: "Debounce-Zeit",
      description: "Rendering-Leistung anpassen"
    },
    autosave: {
      title: "Automatische Speicheroptionen",
      interval: "Speicherintervall",
      description: "Wie oft Ihre Arbeit automatisch gespeichert wird",
      status: {
        saved: "Gespeichert",
        saving: "Speichern...",
        unsaved: "Ungespeicherte Änderungen",
        error: "Speicherfehler"
      }
    },
    typography: {
      title: "Typografie-Steuerelemente",
      description: "Passen Sie das Erscheinungsbild des Vorschautextes an",
      fontSize: "Schriftgröße",
      lineHeight: "Zeilenhöhe",
      fontFamily: "Schriftfamilie"
    },
    snippets: {
      title: "Snippet-Bibliothek",
      description: "Schneller Zugriff auf wiederverwendbare Markdown-Muster und Vorlagen",
      add: "Snippet hinzufügen",
      save: "Snippet speichern",
      cancel: "Abbrechen",
      name: "Name",
    },
    keyboardShortcuts: {
      title: "Tastenkürzel",
      description: "Beschleunigen Sie Ihren Arbeitsablauf mit diesen Tastenkürzeln"
    }
  },
}
