export const pl = {
  // Header
  title: "Konwerter Markdown na PDF",
  subtitle: "Konwertuj Markdown na profesjonalne PDF",

  // Controls
  buttons: {
    upload: "Prześlij",
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
    placeholder: "Zacznij pisać swój Markdown tutaj...\n\n# Nagłówek 1\n## Nagłówek 2\n\n**Pogrubienie** i *kursywa*\n\n- Element listy 1\n- Element listy 2\n\n```javascript\nconsole.log('Witaj Świecie!');\n```\n\n| Kolumna 1 | Kolumna 2 |\n|---------|----------|\n| Dane 1  | Dane 2   |",
    dragDropText: "Przeciągnij swój plik Markdown tutaj",
    dragDropSubtext: "Obsługuje pliki .md i .txt",
    loading: "Ładowanie diagramu...",
    rendering: "Renderowanie diagramu...",
    stats: {
      characters: "Znaki",
      words: "Słowa",
      lines: "Linie",
      readingTime: "Czas czytania"
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
    paperSize: "Rozmiar papieru",
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
    minimal: "Minimalistyczny"
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
    pdfGenerationError: "Generowanie PDF nieudane",
    pdfExportError: "Eksport PDF nieudany, sprawdź konsolę dla szczegółów",
    mermaidRenderError: "Błąd renderowania Mermaid",
    mermaidSyntaxError: "Sprawdź składnię Mermaid",
    mermaidExampleSyntax: "Przykład składni:",
    mermaidRenderRetry: "Próba renderowania Mermaid {count} nieudana, ponowna próba za 100ms",
    mermaidFinalError: "Ostateczne niepowodzenie renderowania Mermaid",
    unknownError: "Nieznany błąd",
    highlightJsError: "Błąd Highlight.js dla języka \"{lang}\":",
    katexRenderError: "Błąd renderowania KaTeX:",
    mermaidInitError: "Błąd inicjalizacji Mermaid:",
    mermaidLoading: "Ładowanie diagramu...",
    mermaidRendering: "Renderowanie diagramu...",
    templateLoaded: "Szablon załadowany",
    templateLoadedMessage: "Szablon został zastosowany do edytora.",
    fileTooLarge: "Plik jest za duży. Maksymalny rozmiar to 5MB.",
    invalidFileType: "Nieprawidłowy typ pliku. Prześlij plik .md lub .txt.",
    fileUploadFailed: "Przesyłanie pliku nieudane. Spróbuj ponownie.",
    fileUploaded: "Plik pomyślnie przesłany",
    resetComplete: "Resetowanie zakończone",
    resetCompleteMessage: "Edytor i ustawienia zostały zresetowane do wartości domyślnych.",
    copySuccess: "Skopiowano do schowka",
    copyFailed: "Kopiowanie do schowka nieudane",
    networkError: "Błąd sieci. Sprawdź swoje połączenie.",
    quotaExceeded: "Przekroczono przydział pamięci. Wyczyść trochę danych przeglądarki.",
    autoSaveFailed: "Automatyczne zapisywanie nieudane. Twoje zmiany mogą nie zostać zapisane."
  },

  // Templates
  templates: {
    title: "Wybierz Szablon",
    description: "Wybierz spośród profesjonalnie zaprojektowanych szablonów, aby szybko rozpocząć",
    selectTemplate: "Kliknij szablon, aby załadować go do edytora. Twoja obecna zawartość zostanie zastąpiona.",
    categories: {
      all: "Wszystkie Szablony",
      basic: "Podstawowy",
      academic: "Akademicki",
      technical: "Techniczny",
      documentation: "Dokumentacja"
    }
  },

  // Default Content
  defaultContent: `# Konwerter Markdown na PDF

> 🎯 **Konwertuj swoje dokumenty Markdown na profesjonalne PDF z formułami matematycznymi, schematami blokowymi, podświetlaniem kodu i wieloma motywami**

## ✨ Funkcje

### 📊 **Pełne wsparcie Markdown**
- **Formatowanie tekstu**: **Pogrubienie**, *Kursywa*, ~~Przekreślenie~~, \`Kod w tekście\`
- **Poziomy nagłówków**: Pełna obsługa struktury nagłówków H1-H6
- **Listy**: Listy uporządkowane, listy nieuporządkowane, listy zadań
- **Linki i obrazy**: Automatyczne rozpoznawanie linków, obsługa osadzania obrazów
- **Tabele**: Obsługa wyrównania i złożonych struktur tabel
- **Cytaty**: Bloki cytatów i zagnieżdżone cytaty

### 🧮 **Renderowanie formuł matematycznych (KaTeX)**
**Formuła w tekście**: Równanie Einsteina $E = mc^2$

**Formuła blokowa**:
$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

**Złożona formuła**:
$$\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\cdots + x_n$$

**Reprezentacja macierzowa**:
$$\\begin{bmatrix}
a & b \\\\
c & d
\\end{bmatrix}$$

### 📈 **Rysowanie diagramów (Mermaid)**

#### Schemat blokowy
\`\`\`mermaid
graph TD
    A[Start] --> B{Warunek}
    B -->|Tak| C[Wykonaj A]
    B -->|Nie| D[Wykonaj B]
    C --> E[Koniec]
    D --> E
\`\`\`

#### Diagram grafowy
\`\`\`mermaid
graph LR
    A[Użytkownik] --> B[System]
    B --> A[Odpowiedź]
\`\`\`

### 💻 **Podświetlanie kodu**

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

### 📋 **Funkcje tabeli**

| Funkcja | Status | Opis | Skrót |
|---------|:------:|-------------|----------|
| Formuły matematyczne | ✅ | Pełna obsługa KaTeX | \`$...\$ |
| Schematy blokowe | ✅ | Diagramy Mermaid | \`mermaid |
| Podświetlanie kodu | ✅ | Obsługa wielojęzyczna | \`lang |
| Tabele | ✅ | Pełna funkcjonalność tabel | \| \| \| |
| Linki | ✅ | Automatyczne rozpoznawanie linków | [tekst](url) |

---

## 📖 Przewodnik użytkownika

### 🚀 **Szybki start**

1. **Edytuj zawartość**
   - Wpisz lub wklej zawartość Markdown w lewym edytorze
   - Podgląd w czasie rzeczywistym z WYSIWYG

2. **Prześlij pliki**
   - Kliknij przycisk "Prześlij", aby wybrać pliki .md lub .txt
   - Lub przeciągnij i upuść pliki bezpośrednio w obszarze edytora

3. **Dostosuj style**
   - Wybierz styl motywu (Domyślny/Akademicki/Nowoczesny/Minimalistyczny)
   - Dostosuj rozmiar papieru i rozmiar czcionki
   - Podgląd w czasie rzeczywistym efektów

4. **Eksportuj PDF**
   - Kliknij przycisk "Pobierz PDF"
   - Automatyczne pobieranie wygenerowanego dokumentu PDF
   - Nazwa pliku jest generowana automatycznie na podstawie tytułu dokumentu

### ⌨️ **Ściąga składni Markdown**

#### Podstawowa składnia
\`\`\`markdown
# Nagłówek poziomu 1
## Nagłówek poziomu 2
### Nagłówek poziomu 3

**Tekst pogrubiony** lub __Tekst pogrubiony__
*Tekst kursywa* lub _Tekst kursywa_
~~Przekreślenie~~

- Element listy nieuporządkowanej
  - Zagnieżdżony element listy

1. Element listy uporządkowanej
2. Drugi element
   1. Zagnieżdżony element uporządkowany

> Tekst cytatu
>> Zagnieżdżony cytat

[Tekst linku](https://example.com)
![Opis obrazu](obraz.jpg)

\`Kod w tekście\`

\`\`\`język
Blok kodu
\`\`\`

### 💡 **Wskazówki użytkowania**

1. **Formuły matematyczne**
   - Użyj \`$...\` dla formuł w tekście
   - Użyj \`$$...$$\` dla formuł blokowych
   - Pełna składnia matematyczna LaTeX obsługiwana

2. **Bloki kodu**
   - Określ język dla podświetlania składni: \`\`\`javascript
   - Obsługiwane języki: JavaScript, Python, JSON, Bash, itp.

3. **Rysowanie diagramów**
   - Użyj składni Mermaid do tworzenia schematów blokowych, grafów, itp.
   - Obsługa wielu typów diagramów: graf, schemat blokowy, itp.

4. **Formatowanie tabel**
   - Użyj \`|\` do oddzielania kolumn
   - Użyj \`-\` do oddzielania nagłówków i treści
   - Obsługa wyrównania: \`:---\` (lewo), \`---:\` (prawo), \`:---:\` (centrum)

---

## ❓ Często zadawane pytania (FAQ)

### P1: Która składnia Markdown jest obsługiwana?
**O**: To narzędzie obsługuje standardową składnię Markdown i rozszerzenia GitHub Flavored Markdown (GFM), w tym tabele, listy zadań, przekreślenie, itp. Obsługuje również formuły matematyczne (KaTeX) i rysowanie diagramów (Mermaid).

### P2: Co zrobić, jeśli formuły matematyczne nie są wyświetlane?
**O**: Upewnij się, że używasz prawidłowej składni:
- Formuły w tekście: \`$formuła$\`
- Formuły blokowe: \`$$formuła$$\`
Jeśli nadal nie są wyświetlane, sprawdź, czy składnia formuły jest poprawna.

### P3: Jaka jest jakość eksportowanych plików PDF?
**O**: Używamy profesjonalnych silników generowania PDF, aby zapewnić jakość wyjściową:
- Grafiki wektorowe wysokiej definicji
- Wyraźne renderowanie tekstu
- Prawidłowe paginowanie stron
- Zachowanie oryginalnego formatowania

### P4: Czy moje dane są bezpieczne?
**O**: Całkowicie bezpieczne! Wszystkie przetwarzanie odbywa się lokalnie w Twojej przeglądarce:
- Żadne dane nie są przesyłane na żaden serwer
- Brak przechowywania zawartości Twojego dokumentu
- Dane są automatycznie usuwane po przetworzeniu

### P5: Które przeglądarki są obsługiwane?
**O**: Obsługuje wszystkie nowoczesne przeglądarki:
- Chrome 65+
- Firefox 60+
- Safari 12+
- Edge 79+

### P6: Jak obsługiwać duże dokumenty?
**O**: W przypadku dużych dokumentów zalecamy:
- Przetwarzanie w sekcjach
- Odpowiednie dostosowanie rozmiaru czcionki
- Używanie podziałów stron do rozsądnego segmentowania
- Podgląd w celu potwierdzenia efektów przed eksportem

### P7: Jakie jest nazwa eksportowanego pliku PDF?
**O**: Nazwa pliku jest generowana automatycznie na podstawie tytułu pierwszego wiersza dokumentu, na przykład:
- Tytuł "Raport projektu" → "Raport projektu.pdf"
- Używa "document.pdf", gdy nie ma tytułu

---

## 📞 Wsparcie techniczne

### 🔧 **Stos technologiczny**
- **Next.js** - Framework React
- **Tailwind CSS** - Framework stylowania
- **Marked** - Parser Markdown
- **KaTeX** - Renderowanie formuł matematycznych
- **Mermaid** - Rysowanie diagramów
- **html2pdf.js** - Generowanie PDF
- **Highlight.js** - Podświetlanie kodu

### 📧 **Skontaktuj się z nami**
[Otwarte źródło](https://github.com/szlizhenhua/markdown-to-pdf). W przypadku pytań lub sugestii, skontaktuj się z nami przez:
- GitHub Issues: Zgłoś problemy lub żądaj funkcji
- E-mail z opiniami: support@markdown-to-pdf.org

### 🔄 **Dziennik zmian**
- **v1.0.0** - Pierwsze wydanie
- Obsługa formuł matematycznych KaTeX
- Obsługa diagramów Mermaid
- Wybór wielu stylów motywów
- Optymalizacja projektu responsywnego

---

<div style="text-align: center; margin-top: 3em; padding: 2em; border-top: 1px solid #eee; color: #666;">
  <p><strong>Konwerter Markdown na PDF</strong></p>
  <p>Profesjonalne narzędzie do konwersji Markdown na PDF</p>
  <p style="font-size: 0.9em; margin-top: 1em;">
    Zrobione z ❤️ | Prywatność przede wszystkim
  </p>
  <p style="font-size: 0.8em; margin-top: 0.5em;">
    © 2025 Markdown to PDF. Wszelkie prawa zastrzeżone.
  </p>
</div>`,

  // SEO
  seo: {
    title: "Konwerter Markdown na PDF | Profesjonalny eksport dokumentów",
    description: "Konwertuj Markdown na profesjonalne dokumenty PDF z matematyką, kodem, diagramami, spisem treści, motywami. Wyjście jakości publikacji do użytku akademickiego i komercyjnego.",
    keywords: "Markdown, PDF, konwerter, KaTeX, Mermaid, podświetlanie kodu, spis treści, motywy, eksport, akademicki, profesjonalny"
  }
}
