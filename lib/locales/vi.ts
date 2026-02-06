export const vi = {
  // Header
  title: "Chuyển đổi Markdown sang PDF",
  subtitle: "Chuyển đổi Markdown sang PDF chuyên nghiệp's",

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
      readingTime: "Leestijd",
      readingTimeLessThanOne: "< 1 phút",
      readingTimeMinute: "phút",
      readingTimeHour: "giờ"
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
    },
    // Document templates
    blank: {
      name: "Leeg Document",
      description: "Begin met een schone lei"
    },
    article: {
      name: "Blogartikel",
      description: "Standaard blogpost structuur"
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
      name: "Academisch Essay",
      description: "Gestructureerd academisch paper"
    },
    meeting: {
      name: "Ghi chú cuộc họp",
      description: "Gestructureerd notulen sjabloon"
    },
    tutorial: {
      name: "Hướng dẫn/Cẩm nang",
      description: "Mẫu hướng dẫn từng bước"
    },
    simpleNotes: {
      name: "Ghi Chú Đơn Giản",
      description: "Mẫu ghi chú cơ bản"
    },
    meetingNotes: {
      name: "Ghi Chú Cuộc Họp",
      description: "Tài liệu cuộc họp có cấu trúc"
    },
    researchPaper: {
      name: "Bài Cáo Nghiên Cứu",
      description: "Mẫu bài báo học thuật với trích dẫn"
    },
    apiDocumentation: {
      name: "Tài Liệu API",
      description: "Mẫu tham khảo kỹ thuật API"
    },
    blogPost: {
      name: "Mẫu Bài Viết Blog",
      description: "Mẫu bài viết blog tối ưu SEO"
    },
    productRequirements: {
      name: "Yêu Cầu Sản Phẩm",
      description: "Mẫu PRD cho quản lý sản phẩm"
    },
    templates: "Mẫu"
  },

  quickTemplates: {
    apiEndpoint: "Điểm cuối API",
    codeSnippet: "Đoạn mã",
    meetingNotes: "Ghi chú cuộc họp",
    bugReport: "Báo cáo lỗi",
    dailyStandup: "Họp giao ban hàng ngày",
    featureRequest: "Yêu cầu tính năng",
    codeReview: "Code Review",
    projectReadme: "Project README"
  },
  textTransform: {
    title: "Chuyển đổi văn bản",
    close: "Đóng",
    uppercase: "CHỮ HOA",
    lowercase: "kleine letters",
    titleCase: "Titelhoofdletters",
    sentenceCase: "Zinshoofdletters",
    camelCase: "kameelHuis",
    kebabCase: "kebab-huis",
    snakeCase: "slang_huis",
    toggleCase: "hOOFDlETTERS wISSELEN",
    capitalize: "Hoofdfletter",
    uppercaseDesc: "Chuyển đổi sang hoofdletters",
    lowercaseDesc: "Chuyển đổi sang kleine letters",
    titleCaseDesc: "Elk woord met hoofdletter",
    sentenceCaseDesc: "Alleen eerste woord met hoofdletter",
    camelCaseDesc: "Chuyển đổi sang camelCase",
    kebabCaseDesc: "Chuyển đổi sang kebab-case",
    snakeCaseDesc: "Chuyển đổi sang snake_case",
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
    language: "Ngôn ngữ",
    insertCodeBlock: "Chèn Khối Mã",
    preview: "Voorbeeld"
  },
  dateTime: {
    insertDateTime: "Chèn Ngày/Giờ",
    date: "Ngày",
    time: "Giờ",
    dateTime: "Ngày & Giờ",
    iso8601: "ISO 8601",
    usFormat: "US Formaat",
    euFormat: "EU Formaat",
    readable: "Leesbaar",
    cancel: "Hủy"
  },
  listHelper: {
    listType: "Loại danh sách",
    bullet: "Dấu đầu dòng",
    numbered: "Đánh số",
    numberOfItems: "Aantal Items",
    listItems: "Lijstitems",
    insertList: "Lijst Invoegen",
    cancel: "Hủy",
    item: "Item"
  },
  highlightHelper: {
    insertHighlight: "Chèn Đánh dấu",
    highlightText: "Đánh dấu Văn bản",
    textToHighlight: "Te markeren tekst",
    color: "Kleur",
    visualOnly: "(alleen visueel)",
    note: "Let op: Markering gebruikt ==tekst== syntaxis. Mogelijk niet ondersteund door alle markdown renderers.",
    cancel: "Hủy",
    yellow: "Vàng",
    red: "Đỏ",
    green: "Xanh lá cây",
    blue: "Xanh dương",
    purple: "Tím",
    pink: "Hồng"
  },

  helpDialog: {
    title: "Tài liệu Tham khảo Markdown Nhanh",
    close: "Đóng",
    headings: "Tiêu đề",
    textStyles: "Kiểu văn bản",
    codeBlocks: "Khối mã",
    lists: "Danh sách",
    links: "Liên kết",
    images: "Hình ảnh",
    quotes: "Trích dẫn",
    tables: "Bảng"
  },

  // Default Content
  defaultContent: `# Chuyển đổi Markdown sang PDF

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

#### Sơ đồ Trình tự
\`\`\`mermaid
sequenceDiagram
    participant U as Người dùng
    participant W as Ứng dụng Web
    participant S as Dịch vụ PDF
    U->>W: Dán/Chỉnh sửa Markdown
    W-->>U: Xem trước trực tiếp
    U->>W: Nhấp "Lấy PDF"
    W->>S: Kết xuất & tạo PDF
    S-->>W: Trả về PDF
    W-->>U: Tải xuống tệp
\`\`\`

#### Sơ đồ Gantt
\`\`\`mermaid
gantt
    title Kế hoạch Dự án (Ví dụ)
    dateFormat  YYYY-MM-DD
    section Lập kế hoạch
    Yêu cầu        :a1, 2026-02-01, 3d
    Xem xét          :a2, 2026-02-04, 1d
    section Giao hàng
    Tính năng trình soạn thảo     :b1, 2026-02-05, 5d
    Hoàn thiện xuất PDF   :b2, 2026-02-10, 3d
\`\`\`

#### Sơ đồ Lớp
\`\`\`mermaid
classDiagram
    class MarkdownRenderer {
      +render(markdown) HTML
      +renderMermaid() void
    }
    class PdfExporter {
      +export(html) PDF
    }
    MarkdownRenderer --> PdfExporter : cung cấp HTML
\`\`\`

#### Sơ đồ Trạng thái
\`\`\`mermaid
stateDiagram-v2
    [*] --> Nhàn rỗi
    Nhàn rỗi --> Chỉnh sửa : nhập
    Chỉnh sửa --> Xem trước : xem trước
    Xem trước --> Xuất : xuất
    Xuất --> Nhàn rỗi : hoàn thành
\`\`\`

#### Sơ đồ Tròn
\`\`\`mermaid
pie title Phân bổ Rủi ro (Ví dụ)
    "Cao" : 15
    "Trung bình" : 35
    "Thấp" : 50
\`\`\`

#### Sơ đồ Tư duy
\`\`\`mermaid
mindmap
  root((Rủi ro))
    Xác định
      Mối đe dọa
      Cơ hội
    Đánh giá
      Tác động
      Khả năng
    Phản hồi
      Giảm thiểu
      Chuyển nhượng
      Chấp nhận
\`\`\`

#### Dòng thời gian
\`\`\`mermaid
timeline
    title Tần suất Phát hành (Ví dụ)
    2026-02 : ra mắt v1.0
    2026-03 : thư viện mẫu
    2026-04 : cộng tác & lịch sử
\`\`\`

#### Sơ đồ Radar (Tùy chỉnh)
\`\`\`mermaid
radar-chart
    title Radar Kỹ năng Đội (Ví dụ 1)
    axis Giao tiếp, Thiết kế, Phát triển, QA, Tài liệu
    series Kế hoạch A [80, 70, 90, 60, 75]
    series Kế hoạch B [65, 85, 70, 80, 60]
\`\`\`

\`\`\`mermaid
radar
    title Radar Chỉ số Sản phẩm (Ví dụ 2)
    axis Tốc độ, Ổn định, UX, Khả năng bảo trì
    v1 [70, 60, 80, 65]
\`\`\`

#### Sơ đồ Tứ phân đoạn (Tùy chỉnh)
\`\`\`mermaid
quadrant-chart
    title Ma trận Rủi ro vs Thời điểm
    x-axis "Khả năng kiểm soát" --> "Độ nhạy cảm"
    y-axis "Độ trưởng thành" --> "Tính cấp thiết"
    quadrant-1 "Cửa sổ chiến lược"
    quadrant-2 "Quan sát & chuẩn bị"
    quadrant-3 "Tránh"
    quadrant-4 "Thúc đẩy"
    "Đi sâu địa phương": [0.75, 0.85]
    "Khảo sát SEA": [0.45, 0.65]
    "Đôi đường": [0.35, 0.55]
    "Dẫn đầu đối thủ": [0.60, 0.31]
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
  <p><strong>Chuyển đổi Markdown sang PDF</strong></p>
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
    title: "Chuyển đổi Markdown sang PDF | Professionele Document Export",
    description: "Chuyển đổi Markdown sang PDF chuyên nghiệp-documenten met wiskunde, code, diagrammen, inhoudsopgave, thema's. Publicatiekwaliteit output voor academisch en commercieel gebruik.",
    keywords: "Markdown, PDF, converter, KaTeX, Mermaid, code highlighting, inhoudsopgave, thema's, export, academisch, professioneel"
  },

  // SEO Content
  seoContent: {
    whyChooseUs: {
      label: "Waarom ons",
      title: "Waarom onze Markdown sang PDF bộ chuyển đổi gebruiken?",
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
      title: "Markdown sang PDF bộ chuyển đổien",
      subtitle: "Een rustig driestappenproces ontworpen om u gefocust te houden en binnen enkele seconden een gepolijste PDF te krijgen.",
      steps: {
        step1: {
          title: "Markdown schrijven of plakken",
          description: "Typ direct in onze real-time editor of plak uw bestaande Markdown-code. U kunt ook .md-bestanden slepen en neerzetten."
        },
        step2: {
          title: "Stijl aanpassen",
          description: "Kies uit onze professionele thema's (Academisch, Modern, enz.) en pas lettergroottes, marges en papierformaat (A4, Letter) aan."
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
          answer: "Ja, onze Markdown sang PDF bộ chuyển đổi is 100% gratis voor persoonlijk en commercieel gebruik."
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
    numberedList: "Đánh sốe lijst",
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
    lineOps: "Regelbewerkingen",
    focus: "Tập trung",
    focused: "Đang tập trung",
    exportMarkdownLabel: "Xuất .md",
    splitView: {
      sideBySide: "Song song",
      vertical: "Dọc",
      switchToSideBySide: "Chuyển sang chế độ song song",
      switchToVertical: "Chuyển sang chế độ dọc"
    },
    lineOpsActions: {
      duplicate: "Nhân đôi dòng",
      delete: "Xóa dòng",
      join: "Gộp",
      sortAsc: "Sắp xếp ↑",
      sortDesc: "Sắp xếp ↓",
      reverse: "Đảo ngược",
      clean: "Làm sạch"
    }
  },

  // Dialogs
  dialogs: {
    markdownCheatSheet: "Markdown-spiekkaart",
    documentStatistics: "Documentstatistieken",
    close: "Đóng",
    focusMode: {
      title: "Focusmodus",
      enter: "Focusmodus betreden",
      exit: "Focusmodus verlaten",
      description: "Afleidingsvrij schrijfmilieu",
      activeHint: "Chế độ tập trung đang bật - Nhấn Esc để thoát"
    },
    markdownExport: {
      title: "Xuất Markdown",
      description: "Tải markdown dưới dạng .md hoặc sao chép vào clipboard",
      filenameLabel: "Tên tệp",
      filenamePlaceholder: "document",
      filenameHint: "Tệp sẽ được lưu dưới dạng \"{filename}\"",
      download: "Tải .md",
      copy: "Sao chép vào clipboard",
      fileInfoTitle: "Thông tin tệp:"
    },
    wordGoal: {
      title: "Woordendoel-tracker",
      setGoal: "Woordendoel instellen",
      currentWords: "Huidige woorden",
      goalWords: "Doel",
      remaining: "Resterend",
      progress: "Voortgang",
      achieved: "Doel bereikt! 🎉",
      doneBadge: "Xong"
    },
    timeTracker: {
      title: "Giờstracker",
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
      title: "Bộ đếm Pomodoro",
      description: "Sử dụng kỹ thuật Pomodoro cho các phiên viết tập trung",
      start: "Bắt đầu",
      pause: "Tạm dừng",
      reset: "Đặt lại",
      work: "Làm việc",
      shortBreak: "Nghỉ ngắn",
      longBreak: "Nghỉ dài",
      sessions: "Phiên đã hoàn thành"
    },
    performance: {
      title: "Cài đặt hiệu suất",
      debounceTime: "Thời gian debounce",
      description: "Điều chỉnh hiệu suất kết xuất"
    },
    autosave: {
      title: "Cài đặt tự động lưu",
      interval: "Khoảng lưu",
      description: "Tần suất tự động lưu công việc của bạn",
      status: {
        saved: "Đã lưu",
        saving: "Đang lưu...",
        unsaved: "Thay đổi chưa lưu",
        error: "Lỗi lưu"
      }
    },
    typography: {
      title: "Kiểm soát typography",
      description: "Tùy chỉnh giao diện của văn bản xem trước",
      fontSize: "Cỡ chữ",
      lineHeight: "Độ cao dòng",
      fontFamily: "Họ phông chữ"
    },
    snippets: {
      title: "Thư viện đoạn mã",
      description: "Truy cập nhanh vào các mẫu và mẫu Markdown có thể tái sử dụng",
      add: "Thêm đoạn mã",
      save: "Lưu đoạn mã",
      cancel: "Hủy",
      name: "Tên",
      content: "Nội dung"
    },
    keyboardShortcuts: {
      title: "Phím tắt",
      description: "Tăng tốc quy trình làm việc của bạn với các phím tắt này"
    }
  }
}
