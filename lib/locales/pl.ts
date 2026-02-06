export const pl = {
  // Header
  title: "Konwerter Markdown na PDF",
  subtitle: "Konwertuj Markdown na profesjonalne pliki PDF",

  // Controls
  buttons: {
    upload: "Wgraj",
    showPreview: "Pokaż podgląd",
    hidePreview: "Ukryj podgląd",
    getPDF: "Pobierz PDF",
    generatingPDF: "Generowanie PDF...",
    settings: "Ustawienia",
    tableOfContents: "Spis treści",
    exportHTML: "HTML",
    exportMarkdown: "MD"
  },

  // Editor
  editor: {
    title: "Edytor Markdown",
    placeholder: "Zacznij pisać swój Markdown tutaj...\n\n# Nagłówek 1\n## Nagłówek 2\n\n**Pogrubienie** i *kursywa*\n\n- Pozycja listy 1\n- Pozycja listy 2\n\n```javascript\nconsole.log('Witaj Świecie!');\n```\n\n| Kolumna 1 | Kolumna 2 |\n|---------|----------|\n| Dane 1  | Dane 2   |",
    dragDropText: "Przeciągnij swój plik Markdown tutaj",
    dragDropSubtext: "Obsługuje pliki .md i .txt",
    loading: "Ładowanie diagramu...",
    rendering: "Renderowanie diagramu...",
    stats: {
      characters: "Znaki",
      words: "Słowa",
      lines: "Linie",
      readingTime: "Czas czytania",
      readingTimeLessThanOne: "< 1 min",
      readingTimeMinute: "min",
      readingTimeHour: "godz"
    }
  },

  // Preview
  preview: {
    title: "Podgląd",
    theme: "motyw"
  },

  // Settings
  settings: {
    title: "Ustawienia",
    theme: "Motyw",
    paperSize: "Format papieru",
    fontSize: "Rozmiar czcionki"
  },

  // Table of Contents
  toc: {
    title: "Spis treści"
  },

  // Themes
  themes: {
    default: "Domyślny",
    academic: "Akademicki",
    modern: "Nowoczesny",
    minimal: "Minimalny"
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
    pdfGenerationError: "Generowanie PDF nie powiodło się",
    pdfExportError: "Eksport PDF nie powiódł się, sprawdź konsolę, aby uzyskać szczegóły",
    mermaidRenderError: "Błąd renderowania Mermaid",
    mermaidSyntaxError: "Sprawdź składnię Mermaid",
    mermaidExampleSyntax: "Przykład składni:",
    mermaidRenderRetry: "Próba renderowania Mermaid {count} nie powiodła się, ponowna próba za 100ms",
    mermaidFinalError: "Ostateczne niepowodzenie renderowania Mermaid",
    unknownError: "Nieznany błąd",
    highlightJsError: "Błąd Highlight.js dla języka \"{lang}\":",
    katexRenderError: "Błąd renderowania KaTeX:",
    mermaidInitError: "Błąd inicjalizacji Mermaid:",
    mermaidLoading: "Ładowanie diagramu...",
    mermaidRendering: "Renderowanie diagramu...",
    templateLoaded: "Szablon załadowany",
    templateLoadedMessage: "Szablon został zastosowany w edytorze.",
    fileTooLarge: "Plik jest zbyt duży. Maksymalny rozmiar to 5MB.",
    invalidFileType: "Nieprawidłowy typ pliku. Prześlij plik .md lub .txt.",
    fileUploadFailed: "Przesyłanie pliku nie powiodło się. Spróbuj ponownie.",
    fileUploaded: "Plik pomyślnie przesłany",
    resetComplete: "Resetowanie zakończone",
    resetCompleteMessage: "Edytor i ustawienia zostały przywrócone do wartości domyślnych.",
    copySuccess: "Skopiowano do schowka",
    copyFailed: "Kopiowanie do schowka nie powiodło się",
    networkError: "Błąd sieci. Sprawdź swoje połączenie.",
    quotaExceeded: "Przekroczono limit pamięci. Wyczyść niektóre dane przeglądarki.",
    autoSaveFailed: "Automatyczne zapisywanie nie powiodło się. Twoje zmiany mogą nie zostać zapisane."
  },

  // Templates
  templates: {
    title: "Wybierz Szablon",
    description: "Wybierz z profesjonalnie zaprojektowanych szablonów, aby szybko rozpocząć",
    selectTemplate: "Kliknij szablon, aby załadować go do edytora. Twoja obecna zawartość zostanie zastąpiona.",
    categories: {
      all: "Wszystkie Szablony",
      basic: "Podstawowy",
      academic: "Akademicki",
      technical: "Techniczny",
      documentation: "Dokumentacja"
    },
    // Document templates
    blank: {
      name: "Pusty Dokument",
      description: "Zacznij od czystej karty"
    },
    article: {
      name: "Artykuł na Bloga",
      description: "Standardowa struktura wpisu na bloga"
    },
    readme: {
      name: "README.md",
      description: "Szablon dokumentacji projektu"
    },
    resume: {
      name: "CV",
      description: "Profesjonalny szablon CV"
    },
    essay: {
      name: "Esej Akademicki",
      description: "Ustrukturywana praca akademicka"
    },
    meeting: {
      name: "Notatki ze spotkania",
      description: "Ustrukturyzowany szablon protokołów"
    },
    tutorial: {
      name: "Samouczek/Przewodnik",
      description: "Szablon samouczka krok po kroku"
    },
    simpleNotes: {
      name: "Proste Notatki",
      description: "Podstawowy szablon notatek"
    },
    meetingNotes: {
      name: "Notatki ze Spotkania",
      description: "Strukturalna dokumentacja spotkania"
    },
    researchPaper: {
      name: "Artykuł Naukowy",
      description: "Szablon artykułu akademickiego z cytowaniami"
    },
    apiDocumentation: {
      name: "Dokumentacja API",
      description: "Techniczny szablon odniesienia API"
    },
    blogPost: {
      name: "Szablon Wpisu na Blogu",
      description: "Zoptymalizowany pod SEO szablon wpisu na blogu"
    },
    productRequirements: {
      name: "Wymagania Produktu",
      description: "Szablon PRD dla menedżerów produktu"
    },
    templates: "Szablony"
  },

  quickTemplates: {
    apiEndpoint: "Punkt końcowy API",
    codeSnippet: "Fragment kodu",
    meetingNotes: "Notatki ze spotkania",
    bugReport: "Raport błędów",
    dailyStandup: "Dzienne Standup",
    featureRequest: "Prośba o funkcję",
    codeReview: "Code Review",
    projectReadme: "Project README"
  },
  textTransform: {
    title: "Przekształć Tekst",
    close: "Zamknij",
    uppercase: "WIELKIE LITERY",
    lowercase: "małe litery",
    titleCase: "Wielkie Litery Wyrazów",
    sentenceCase: "Wielkie litery zdań",
    camelCase: "camelCase",
    kebabCase: "kebab-case",
    snakeCase: "snake_case",
    toggleCase: "zMIEŃ wIELKIE lITERY",
    capitalize: "Duża litera",
    uppercaseDesc: "Konwertuj na wielkie litery",
    lowercaseDesc: "Konwertuj na małe litery",
    titleCaseDesc: "Każdy wyraz z wielkiej litery",
    sentenceCaseDesc: "Tylko pierwsze słowo z wielkiej litery",
    camelCaseDesc: "Konwertuj na camelCase",
    kebabCaseDesc: "Konwertuj na kebab-case",
    snakeCaseDesc: "Konwertuj na snake_case",
    toggleCaseDesc: "Zmień wielkość liter",
    capitalizeDesc: "Pierwsza litera wielka"
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
    language: "Język",
    insertCodeBlock: "Wstaw Blok Kodu",
    preview: "Podgląd"
  },
  dateTime: {
    insertDateTime: "Wstaw Datę/Czas",
    date: "Data",
    time: "Czas",
    dateTime: "Data & Czas",
    iso8601: "ISO 8601",
    usFormat: "Format US",
    euFormat: "Format UE",
    readable: "Czytelny",
    cancel: "Anuluj"
  },
  listHelper: {
    listType: "Typ listy",
    bullet: "Punkt",
    numbered: "Numerowana",
    numberOfItems: "Liczba elementów",
    listItems: "Elementy listy",
    insertList: "Wstaw Listę",
    cancel: "Anuluj",
    item: "Element"
  },
  highlightHelper: {
    insertHighlight: "Wstaw Wyróżnienie",
    highlightText: "Zaznacz Tekst",
    textToHighlight: "Tekst do wyróżnienia",
    color: "Kolor",
    visualOnly: "(tylko wizualne)",
    note: "Uwaga: Wyróżnienie używa składni ==tekst==. Może nie być obsługiwane przez wszystkie renderery Markdown.",
    cancel: "Anuluj",
    yellow: "Żółty",
    red: "Czerwony",
    green: "Zielony",
    blue: "Niebieski",
    purple: "Fioletowy",
    pink: "Różowy"
  },

  helpDialog: {
    title: "Szybki Przewodnik po Markdown",
    close: "Zamknij",
    headings: "Nagłówki",
    textStyles: "Style Tekstu",
    codeBlocks: "Bloki Kodu",
    lists: "Listy",
    links: "Linki",
    images: "Obrazy",
    quotes: "Cytaty",
    tables: "Tabele"
  },

  // Default Content
  defaultContent: `# Konwerter Markdown na PDF

> 🎯 **Konwertuj swoje dokumenty Markdown na profesjonalne pliki PDF z wzorami matematycznymi, diagramami, podświetlaniem kodu i wieloma motywami**

## ✨ Funkcje

### 📊 **Pełna obsługa Markdown**
- **Formatowanie tekstu**: **Pogrubienie**, *Kursywa*, ~~Przekreślenie~~, \`Kod inline\`
- **Poziomy nagłówków**: Pełna obsługa struktury nagłówków H1-H6
- **Listy**: Listy numerowane, nienumerowane, listy zadań
- **Linki i Obrazy**: Automatyczne rozpoznawanie linków, obsługa osadzania obrazów
- **Tabele**: Obsługa wyrównania i złożonych struktur tabel
- **Cytaty**: Bloki cytatów i cytaty zagnieżdżone

### 🧮 **Renderowanie Wzorów Matematycznych (KaTeX)**
**Wzór inline**: Równanie masy-energii Einsteina $E = mc^2$

**Wzór blokowy**:
$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

**Złożony wzór**:
$$\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\cdots + x_n$$

**Reprezentacja macierzowa**:
$$\\begin{bmatrix}
a & b \\\\
c & d
\\end{bmatrix}$$

### 📈 **Rysowanie Diagramów (Mermaid)**

#### Schemat Blokowy
\`\`\`mermaid
graph TD
    A[Start] --> B{Warunek}
    B -->|Tak| C[Wykonaj A]
    B -->|Nie| D[Wykonaj B]
    C --> E[Koniec]
    D --> E
\`\`\`

#### Diagram Grafowy
\`\`\`mermaid
graph LR
    A[Użytkownik] --> B[System]
    B --> A[Odpowiedź]
\`\`\`

#### Diagram Sekwencyjny
\`\`\`mermaid
sequenceDiagram
    participant U as Użytkownik
    participant W as Aplikacja Web
    participant S as Serwis PDF
    U->>W: Wklej/Edytuj Markdown
    W-->>U: Podgląd na żywo
    U->>W: Kliknij "Pobierz PDF"
    W->>S: Renderuj i wygeneruj PDF
    S-->>W: Zwróć PDF
    W-->>U: Pobierz plik
\`\`\`

#### Diagram Gantta
\`\`\`mermaid
gantt
    title Plan Projektu (Przykład)
    dateFormat  YYYY-MM-DD
    section Planowanie
    Wymagania        :a1, 2026-02-01, 3d
    Przegląd          :a2, 2026-02-04, 1d
    section Dostawa
    Funkcje edytora     :b1, 2026-02-05, 5d
    Udoskonalenie eksportu PDF   :b2, 2026-02-10, 3d
\`\`\`

#### Diagram Klas
\`\`\`mermaid
classDiagram
    class MarkdownRenderer {
      +render(markdown) HTML
      +renderMermaid() void
    }
    class PdfExporter {
      +export(html) PDF
    }
    MarkdownRenderer --> PdfExporter : dostarcza HTML
\`\`\`

#### Diagram Stanów
\`\`\`mermaid
stateDiagram-v2
    [*] --> Bezczynny
    Bezczynny --> Edycja : pisz
    Edycja --> Podgląd : podgląd
    Podgląd --> Eksportowanie : eksportuj
    Eksportowanie --> Bezczynny : gotowe
\`\`\`

#### Diagram Kołowy
\`\`\`mermaid
pie title Podział Ryzyka (Przykład)
    "Wysokie" : 15
    "Średnie" : 35
    "Niskie" : 50
\`\`\`

#### Mapa Myśli
\`\`\`mermaid
mindmap
  root((Ryzyko))
    Identyfikacja
      Zagrożenia
      Szanse
    Ocena
      Wpływ
      Prawdopodobieństwo
    Reakcja
      Łagodzenie
      Transfer
      Akceptacja
\`\`\`

#### Oś Czasu
\`\`\`mermaid
timeline
    title Rytm Wydań (Przykład)
    2026-02 : premiera v1.0
    2026-03 : biblioteka szablonów
    2026-04 : współpraca i historia
\`\`\`

#### Wykres Radarowy (Niestandardowy)
\`\`\`mermaid
radar-chart
    title Radar Umiejętności Zespołu (Przykład 1)
    axis Komunikacja, Design, Rozwój, QA, Dokumentacja
    series Plan A [80, 70, 90, 60, 75]
    series Plan B [65, 85, 70, 80, 60]
\`\`\`

\`\`\`mermaid
radar
    title Radar Metryk Produktu (Przykład 2)
    axis Szybkość, Stabilność, UX, Utrzymanie
    v1 [70, 60, 80, 65]
\`\`\`

#### Wykres Kwadrantów (Niestandardowy)
\`\`\`mermaid
quadrant-chart
    title Macierz Ryzyko vs Czas
    x-axis "Kontrolowalność" --> "Wrażliwość"
    y-axis "Dojrzałość" --> "Urgentność"
    quadrant-1 "Okno strategiczne"
    quadrant-2 "Obserwuj i przygotuj"
    quadrant-3 "Unikaj"
    quadrant-4 "Przyspiesz"
    "Lokalna pogłębia": [0.75, 0.85]
    "Sonda SEA": [0.45, 0.65]
    "Podwójny tor": [0.35, 0.55]
    "Przewaga konkurencji": [0.60, 0.31]
\`\`\`

### 💻 **Podświetlanie Kodu**

#### Przykład JavaScript
\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Przykład użycia
console.log(fibonacci(10)); // Wyjście: 55
\`\`\`

#### Przykład Python
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

### 📋 **Funkcje Tabeli**

| Funkcja | Status | Opis | Skrót |
|---------|:------:|-------------|----------|
| Wzory Matematyczne | ✅ | Pełna obsługa KaTeX | \`$...\$ |
| Schematy Blokowe | ✅ | Diagramy Mermaid | \`mermaid |
| Podświetlanie Kodu | ✅ | Wsparcie wielojęzyczne | \`lang |
| Tabele | ✅ | Pełna funkcjonalność tabel | \| \| \| |
| Linki | ✅ | Automatyczne rozpoznawanie linków | [tekst](url) |

---

## 📖 Podręcznik Użytkownika

### 🚀 **Szybki Start**

1. **Edytuj zawartość**
   - Wpisz lub wklej zawartość Markdown w lewym edytorze
   - Podgląd w czasie rzeczywistym z WYSIWYG

2. **Prześlij pliki**
   - Kliknij przycisk "Wgraj", aby wybrać pliki .md lub .txt
   - Lub przeciągnij pliki bezpośrednio do obszaru edytora

3. **Dostosuj style**
   - Wybierz styl motywu (Domyślny/Akademicki/Nowoczesny/Minimalny)
   - Dostosuj format papieru i rozmiar czcionki
   - Podgląd efektów w czasie rzeczywistym

4. **Eksportuj PDF**
   - Kliknij przycisk "Pobierz PDF"
   - Automatyczne pobranie wygenerowanego dokumentu PDF
   - Nazwa pliku jest generowana automatycznie na podstawie tytułu dokumentu

### ⌨️ **Ściąga Składni Markdown**

#### Podstawowa Składnia
\`\`\`markdown
# Poziom 1 Nagłówek
## Poziom 2 Nagłówek
### Poziom 3 Nagłówek

**Pogrubiony tekst** lub __Pogrubiony tekst__
*Kursywa* lub _Kursywa_
~~Przekreślenie~~

- Nienumerowany element listy
  - Zagnieżdżony element listy

1. Numerowany element listy
2. Drugi element
   1. Zagnieżdżony numerowany element

>Cytat
>> Zagnieżdżony cytat

[Link tekst](https://example.com)
![Opis obrazu](obraz.jpg)

\`Kod inline\`

\`\`\`jezyk
Blok kodu
\`\`\`

### 💡 **Wskazówki Użytkowania**

1. **Wzory Matematyczne**
   - Użyj \`$...\` dla wzorów inline
   - Użyj \`$$...$$\` dla wzorów blokowych
   - Pełna obsługa składni matematycznej LaTeX

2. **Bloki Kodu**
   - Określ język dla podświetlania składni: \`\`\`javascript
   - Obsługiwane języki: JavaScript, Python, JSON, Bash, itp.

3. **Rysowanie Diagramów**
   - Użyj składni Mermaid do tworzenia schematów blokowych, grafów, itp.
   - Obsługa wielu typów diagramów: graf, schemat blokowy, itp.

4. **Formatowanie Tabel**
   - Użyj \`|\` do oddzielenia kolumn
   - Użyj \`-\` do oddzielenia nagłówków i zawartości
   - Obsługa wyrównania: \`:---\` (lewo), \`---:\` (prawo), \`:---:\` (środek)

---

## ❓ Często Zadawane Pytania (FAQ)

### P1: Która składnia Markdown jest obsługiwana?
**O**: To narzędzie obsługuje standardową składnię Markdown i rozszerzenia GitHub Flavored Markdown (GFM), w tym tabele, listy zadań, przekreślenia, itp. Obsługuje również wzory matematyczne (KaTeX) i rysowanie diagramów (Mermaid).

### P2: Co zrobić, jeśli wzory matematyczne nie są wyświetlane?
**O**: Upewnij się, że używasz poprawnej składni:
- Wzory inline: \`$wzór$\`
- Wzory blokowe: \`$$wzór$$\`
 Jeśli nadal nie są wyświetlane, sprawdź, czy składnia wzoru jest poprawna.

### P3: Jaka jest jakość eksportowanych plików PDF?
**O**: Używamy profesjonalnych silników generowania PDF, aby zapewnić jakość wyjściową:
- Obrazy wektorowe wysokiej rozdzielczości
- Jasne wyświetlanie tekstu
- Poprawne paginacja
- Zachowanie oryginalnego formatowania

### P4: Czy moje dane są bezpieczne?
**O**: Całkowicie bezpieczne! Wszystkie przetwarzanie odbywa się lokalnie w Twojej przeglądarce:
- Żadne dane nie są przesyłane na serwer
- Brak przechowywania zawartości dokumentu
- Dane są automatycznie usuwane po przetworzeniu

### P5: Które przeglądarki są obsługiwane?
**O**: Obsługuje wszystkie nowoczesne przeglądarki:
- Chrome 65+
- Firefox 60+
- Safari 12+
- Edge 79+

### P6: Jak obsłużyć duże dokumenty?
**O**: W przypadku dużych dokumentów zalecamy:
- Przetwarzanie w sekcjach
- Dostosuj rozmiar czcionki w razie potrzeby
- Używaj podziałów stron do rozsądnego segmentowania
- Wyświetl podgląd, aby potwierdzić efekty przed eksportem

### P7: Jak nazywa się plik eksportowanego PDF?
**O**: Nazwa pliku jest generowana automatycznie na podstawie tytułu pierwszego wiersza dokumentu, na przykład:
- Tytuł "Raport Projektu" → "Raport Projektu.pdf"
- Używa "document.pdf", gdy nie ma tytułu

---

## 📞 Wsparcie Techniczne

### 🔧 **Tech Stack**
- **Next.js** - Framework React
- **Tailwind CSS** - Framework stylów
- **Marked** - Parser Markdown
- **KaTeX** - Renderowanie wzorów matematycznych
- **Mermaid** - Rysowanie diagramów
- **html2pdf.js** - Generowanie PDF
- **Highlight.js** - Podświetlanie kodu

### 📧 **Kontakt**
[Open Source](https://github.com/szlizhenhua/markdown-to-pdf). W przypadku pytań lub sugestii, skontaktuj się z nami przez:
- GitHub Issues: Zgłaszanie problemów lub prośby o funkcje
- Feedback e-mail: support@markdown-to-pdf.org

### 🔄 **Dziennik Zmian**
- **v1.0.0** - Pierwsze wydanie
- Obsługa wzorów matematycznych KaTeX
- Obsługa diagramów Mermaid
- Wybór wielu stylów motywów
- Optymalizacja projektowania responsywnego

---

<div style="text-align: center; margin-top: 3em; padding: 2em; border-top: 1px solid #eee; color: #666;">
  <p><strong>Konwerter Markdown na PDF</strong></p>
  <p>Profesjonalne Narzędzie Konwersji Markdown na PDF</p>
  <p style="font-size: 0.9em; margin-top: 1em;">
    Stworzone z ❤️ | Prywatność w pierwszej kolejności
  </p>
  <p style="font-size: 0.8em; margin-top: 0.5em;">
    © 2025 Markdown to PDF. Wszelkie prawa zastrzeżone.
  </p>
</div>`,

  // SEO
  seo: {
    title: "Konwerter Markdown na PDF | Profesyjny Eksport Dokumentów",
    description: "Konwertuj Markdown na profesjonalne dokumenty PDF z matematyką, kodem, diagramami, spisem treści, motywami. Wyjście jakości publikacji dla użytku akademickiego i komercyjnego.",
    keywords: "Markdown, PDF, konwerter, KaTeX, Mermaid, podświetlanie kodu, spis treści, motywy, eksport, akademicki, profesjonalny"
  },

  // SEO Content
  seoContent: {
    whyChooseUs: {
      label: "Dlaczego my",
      title: "Dlaczego warto użyć naszego konwertera Markdown na PDF?",
      subtitle: "Doświadczenie w stylu Apple dla publikacji: czyste, szybkie i pięknie spójne od koncepcji do PDF.",
      features: {
        privacy: {
          title: "Orientacja na prywatność",
          description: "Twoje dane są bezpieczne u nas. Wszystkie konwersje odbywają się lokalnie w Twojej przeglądarce. Nigdy nie przesyłamy Twoich plików Markdown na serwer."
        },
        instant: {
          title: "Natychmiastowa konwersja",
          description: "Brak kolejek. Nasza zoptymalizowana silnik konwertuje dokumenty natychmiast i obsługuje duże pliki z łatwością."
        },
        richSupport: {
          title: "Bogata obsługa",
          description: "Pełna obsługa GFM (GitHub Flavored Markdown), wzorów matematycznych KaTeX, diagramów Mermaid i podświetlania składni kodu."
        }
      }
    },
    howToConvert: {
      label: "Prosty przepływ",
      title: "Jak Konwertować Markdown na PDF",
      subtitle: "Spokojny trzystopniowy proces zaprojektowany, aby utrzymać Cię skupionym i otrzymać elegancki PDF w kilka sekund.",
      steps: {
        step1: {
          title: "Pisz lub wklej Markdown",
          description: "Wpisz bezpośrednio w naszym edytorze czasu rzeczywistego lub wklej istniejący kod Markdown. Możesz również przeciągać i upuszczać pliki .md."
        },
        step2: {
          title: "Dostosuj styl",
          description: "Wybierz z naszych profesjonalnych motywów (Akademicki, Nowoczesny, itp.) i dostosuj rozmiary czcionek, marginesy i format papieru (A4, Letter)."
        },
        step3: {
          title: "Pobierz PDF",
          description: "Kliknij przycisk Eksportuj, aby natychmiast otrzymać sformatowany dokument PDF gotowy do udostępnienia lub druku."
        }
      }
    },
    faq: {
      label: "FAQ",
      title: "Często Zadawane Pytania",
      items: {
        isFree: {
          question: "Czy to narzędzie jest darmowe?",
          answer: "Tak, nasz konwerter Markdown na PDF jest w 100% darmowy do użytku osobistego i komercyjnego."
        },
        dataStorage: {
          question: "Czy przechowujecie moje dane?",
          answer: "Nie. Przetwarzamy wszystko w Twojej przeglądarce. Twoje dokumenty nigdy nie opuszczają Twojego urządzenia."
        },
        mathSupport: {
          question: "Czy obsługuje równania matematyczne?",
          answer: "Tak! Używamy KaTeX, aby pięknie wyświetlać złożone wzory matematyczne i równania."
        },
        diagrams: {
          question: "Czy mogę tworzyć diagramy?",
          answer: "Absolutnie. Obsługujemy Mermaid.js do tworzenia schematów blokowych, diagramów sekwencyjnych i diagramów Gantta z tekstu."
        }
      }
    },
    comprehensive: {
      title: "Kompletne Rozwiązanie Markdown",
      description1: "Niezależnie od tego, czy jesteś studentem piszącym pracę dyplomową, deweloperem dokumentującym kod, czy pisarzem pracującym nad romansem, nasz edytor Markdown zapewnia narzędzia, których potrzebujesz. Z funkcjami takimi jak podgląd w czasie rzeczywistym, śledzenie liczby słów i tryb skupienia możesz pisać bez rozproszeń.",
      description2: "Nasz konwerter obsługuje całą standardową składnię Markdown, w tym nagłówki, listy, linki, obrazy i bloki cytatów. Zaawansowani użytkownicy docenią obsługę bloków kodu z podświetlaniem składni specyficznym dla języka, przypisów i list zadań."
    }
  },

  // Footer
  footer: {
    tagline: "Markdown na PDF",
    subtitle: "Eleganckie konwersje za każdym razem.",
    description: "Profesjonalne narzędzie konwersji dokumentów dla każdego. Darmowe, bezpieczne i szybkie.",
    legal: {
      title: "Prawne",
      privacyPolicy: "Polityka Prywatności",
      termsOfService: "Warunki Korzystania z Usługi"
    },
    links: {
      title: "Linki",
      aboutUs: "O nas",
      contact: "Kontakt"
    },
    connect: {
      title: "Połącz",
      description: "Pytania lub feedback?"
    },
    copyright: "© {year} Markdown to PDF. Wszelkie prawa zastrzeżone.",
    designed: "Zaprojektowane dla jasności"
  },

  // Toolbar
  toolbar: {
    heading: "Nagłówek",
    bold: "Pogrubienie",
    italic: "Kursywa",
    strikethrough: "Przekreślenie",
    code: "Kod",
    link: "Link",
    image: "Obraz",
    bulletList: "Lista wypunktowana",
    numberedList: "Lista numerowana",
    quote: "Cytat",
    codeBlock: "Blok kodu",
    horizontalRule: "Linia pozioma",
    undo: "Cofnij",
    redo: "Ponów",
    showLess: "Pokaż mniej",
    showMore: "Pokaż więcej",
    disableWordWrap: "Wyłącz zawijanie słów",
    enableWordWrap: "Włącz zawijanie słów",
    findAndReplace: "Znajdź i zastąp",
    showTools: "Pokaż narzędzia",
    hideTools: "Ukryj narzędzia",
    exportTXT: "TXT",
    special: "Specjalne",
    lineOps: "Operacje na wierszach",
    focus: "Skupienie",
    focused: "Skupiony",
    exportMarkdownLabel: "Eksportuj .md",
    splitView: {
      sideBySide: "Obok siebie",
      vertical: "Pionowo",
      switchToSideBySide: "Przełącz na widok obok siebie",
      switchToVertical: "Przełącz na widok pionowy"
    },
    lineOpsActions: {
      duplicate: "Duplikuj wiersz",
      delete: "Usuń wiersz",
      join: "Połącz",
      sortAsc: "Sortuj ↑",
      sortDesc: "Sortuj ↓",
      reverse: "Odwróć",
      clean: "Wyczyść"
    }
  },

  // Dialogs
  dialogs: {
    markdownCheatSheet: "Ściąga Markdown",
    documentStatistics: "Statystyki Dokumentu",
    close: "Zamknij",
    focusMode: {
      title: "Tryb Skupienia",
      enter: "Wejdź do Trybu Skupienia",
      exit: "Wyjdź z Trybu Skupienia",
      description: "Środowisko pisania bez rozproszeń",
      activeHint: "Tryb skupienia aktywny — naciśnij Esc, aby wyjść"
    },
    markdownExport: {
      title: "Eksportuj Markdown",
      description: "Pobierz markdown jako plik .md lub skopiuj do schowka",
      filenameLabel: "Nazwa pliku",
      filenamePlaceholder: "dokument",
      filenameHint: "Plik zostanie zapisany jako \"{filename}\"",
      download: "Pobierz .md",
      copy: "Kopiuj do schowka",
      fileInfoTitle: "Informacje o pliku:"
    },
    wordGoal: {
      title: "Śledzenie Celu Słownego",
      setGoal: "Ustaw cel słowny",
      currentWords: "Obecne słowa",
      goalWords: "Cel",
      remaining: "Pozostało",
      progress: "Postęp",
      achieved: "Cel osiągnięty! 🎉",
      doneBadge: "Gotowe"
    },
    timeTracker: {
      title: "Śledzenie Czasu",
      startTime: "Rozpocznij sesję",
      stopTime: "Zatrzymaj sesję",
      reset: "Resetuj",
      totalTime: "Całkowity czas",
      sessions: "Sesje dzisiaj",
      wordsPerMin: "słów/min",
      recording: "Nagrywanie",
      stopped: "Zatrzymano",
      today: "Dzisiaj",
      thisWeek: "Ten tydzień",
      avgSession: "Średnia sesja",
      dailyTimeGoal: "Dzienny cel czasowy",
      hours: "2 godziny",
      recentSessions: "Ostatnie sesje"
    },
    pomodoro: {
      title: "Timer Pomodoro",
      description: "Użyj techniki Pomodoro do skoncentrowanych sesji pisania",
      start: "Rozpocznij",
      pause: "Pauza",
      reset: "Resetuj",
      work: "Praca",
      shortBreak: "Krótka przerwa",
      longBreak: "Długa przerwa",
      sessions: "Ukończone sesje"
    },
    quickTemplates: {
      title: "Szybkie Szablony",
      select: "Wybierz szablon do wstawienia"
    },
    documentTemplates: {
      title: "Szablony Dokumentów",
      description: "Wybierz szablon, aby rozpocząć"
    },
    performance: {
      title: "Ustawienia Wydajności",
      debounceTime: "Czas debouncingu",
      description: "Dostosuj wydajność renderowania (niższy = szybciej, ale zużywa więcej zasobów)"
    },
    autosave: {
      title: "Ustawienia Autosave",
      interval: "Interwał zapisu",
      description: "Jak często automatycznie zapisować swoją pracę",
      status: {
        saved: "Zapisano",
        saving: "Zapisywanie...",
        unsaved: "Niezapisane zmiany",
        error: "Błąd zapisu"
      }
    },
    typography: {
      title: "Kontrolka Typografii",
      description: "Dostosuj wygląd tekstu podglądu",
      fontSize: "Rozmiar czcionki",
      lineHeight: "Wysokość linii",
      fontFamily: "Rodzina czcionek"
    },
    snippets: {
      title: "Biblioteka Fragmentów",
      description: "Szybki dostęp do wielokrotnego użytku wzorców i szablonów Markdown",
      add: "Dodaj fragment",
      save: "Zapisz fragment",
      cancel: "Anuluj",
      name: "Nazwa",
      content: "Zawartość"
    },
    keyboardShortcuts: {
      title: "Skróty klawiaturowe",
      description: "Przyspiesz swoją pracę tymi skrótami"
    }
  }
}
