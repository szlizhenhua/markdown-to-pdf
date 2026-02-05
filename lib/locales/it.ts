export const it = {
  // Header
  title: "Convertitore da Markdown a PDF",
  subtitle: "Converti Markdown in PDF professionali",

  // Controls
  buttons: {
    upload: "Carica",
    showPreview: "Mostra Anteprima",
    hidePreview: "Nascondi Anteprima",
    getPDF: "Ottieni PDF",
    generatingPDF: "Generazione PDF...",
    settings: "Impostazioni",
    tableOfContents: "Indice",
    exportHTML: "HTML",
    exportMarkdown: "MD"
  },

  // Editor
  editor: {
    title: "Editor Markdown",
    placeholder: "Inizia a digitare il tuo Markdown qui...\n\n# Intestazione 1\n## Intestazione 2\n\n**Grassetto** e *corsivo*\n\n- Elemento elenco 1\n- Elemento elenco 2\n\n```javascript\nconsole.log('Ciao Mondo!');\n```\n\n| Colonna 1 | Colonna 2 |\n|---------|----------|\n| Dato 1  | Dato 2   |",
    dragDropText: "Trascina qui il tuo file Markdown",
    dragDropSubtext: "Supporta file .md e .txt",
    loading: "Caricamento diagramma...",
    rendering: "Rendering diagramma...",
    stats: {
      characters: "Caratteri",
      words: "Parole",
      lines: "Righe",
      readingTime: "Tempo di lettura"
    }
  },

  // Preview
  preview: {
    title: "Anteprima",
    theme: "tema"
  },

  // Settings
  settings: {
    title: "Impostazioni",
    theme: "Tema",
    paperSize: "Formato Carta",
    fontSize: "Dimensione Carattere"
  },

  // Table of Contents
  toc: {
    title: "Indice"
  },

  // Themes
  themes: {
    default: "Predefinito",
    academic: "Accademico",
    modern: "Moderno",
    minimal: "Minimalista"
  },

  // Paper Sizes
  paperSizes: {
    a4: "A4",
    letter: "Lettera",
    legal: "Legale"
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
    pdfGenerationError: "Generazione PDF fallita",
    pdfExportError: "Esportazione PDF fallita, controlla la console per dettagli",
    mermaidRenderError: "Errore rendering Mermaid",
    mermaidSyntaxError: "Verifica la sintassi Mermaid",
    mermaidExampleSyntax: "Sintassi di esempio:",
    mermaidRenderRetry: "Tentativo rendering Mermaid {count} fallito, riproverò tra 100ms",
    mermaidFinalError: "Rendering Mermaid最终失败",
    unknownError: "Errore sconosciuto",
    highlightJsError: "Errore Highlight.js per lingua \"{lang}\":",
    katexRenderError: "Errore rendering KaTeX:",
    mermaidInitError: "Errore inizializzazione Mermaid:",
    mermaidLoading: "Caricamento diagramma...",
    mermaidRendering: "Rendering diagramma...",
    templateLoaded: "Modello caricato",
    templateLoadedMessage: "Il modello è stato applicato all'editor.",
    fileTooLarge: "File troppo grande. Dimensione massima 5MB.",
    invalidFileType: "Tipo file non valido. Carica un file .md o .txt.",
    fileUploadFailed: "Caricamento file fallito. Riprova.",
    fileUploaded: "File caricato con successo",
    resetComplete: "Reset completato",
    resetCompleteMessage: "Editor e impostazioni ripristinati ai valori predefiniti.",
    copySuccess: "Copiato negli appunti",
    copyFailed: "Copia negli appunti fallita",
    networkError: "Errore di rete. Verifica la connessione.",
    quotaExceeded: "Quota storage superata. Cancella alcuni dati del browser.",
    autoSaveFailed: "Salvataggio automatico fallito. Le modifiche potrebbero non essere salvate."
  },

  // Templates
  templates: {
    title: "Seleziona un Modello",
    description: "Scegli tra modelli professionali per iniziare rapidamente",
    selectTemplate: "Clicca su un modello per caricarlo nell'editor. Il contenuto attuale sarà sostituito.",
    categories: {
      all: "Tutti i Modelli",
      basic: "Base",
      academic: "Accademico",
      technical: "Tecnico",
      documentation: "Documentazione"
    }
  },

  // Default Content
  defaultContent: `# Convertitore da Markdown a PDF

> 🎯 **Converti i tuoi documenti Markdown in PDF professionali con formule matematiche, diagrammi di flusso, evidenziazione codice e più temi**

## ✨ Caratteristiche

### 📊 **Supporto Completo Markdown**
- **Formattazione Testo**: **Grassetto**, *Corsivo*, ~~Barrato~~, \`Codice inline\`
- **Livelli Intestazioni**: Supporto completo struttura intestazioni H1-H6
- **Elenchi**: Elenchi ordinati, non ordinati, elenchi attività
- **Link e Immagini**: Riconoscimento automatico link, supporto incorporamento immagini
- **Tabelle**: Supporto allineamento e strutture tabelle complesse
- **Citazioni**: Citazioni blocco e citazioni annidate

### 🧮 **Rendering Formule Matematiche (KaTeX)**
**Formula Inline**: Equazione massa-energia di Einstein $E = mc^2$

**Formula Blocco**:
$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

**Formula Complessa**:
$$\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\cdots + x_n$$

**Rappresentazione Matriciale**:
$$\\begin{bmatrix}
a & b \\\\
c & d
\\end{bmatrix}$$

### 📈 **Disegno Diagrammi (Mermaid)**

#### Diagramma di Flusso
\`\`\`mermaid
graph TD
    A[Inizio] --> B{Condizione}
    B -->|Sì| C[Esegui A]
    B -->|No| D[Esegui B]
    C --> E[Fine]
    D --> E
\`\`\`

#### Diagramma Grafo
\`\`\`mermaid
graph LR
    A[Utente] --> B[Sistema]
    B --> A[Risposta]
\`\`\`

### 💻 **Evidenziazione Codice**

#### Esempio JavaScript
\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Esempio utilizzo
console.log(fibonacci(10)); // Output: 55
\`\`\`

#### Esempio Python
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

### 📋 **Caratteristiche Tabella**

| Caratteristica | Stato | Descrizione | Scorciatoia |
|---------|:------:|-------------|----------|
| Formule Matematiche | ✅ | Supporto completo KaTeX | \`$...\$ |
| Diagrammi di Flusso | ✅ | Diagrammi Mermaid | \`mermaid |
| Evidenziazione Codice | ✅ | Supporto multilingua | \`lang |
| Tabelle | ✅ | Funzionalità completa tabelle | \| \| \| |
| Link | ✅ | Riconoscimento automatico link | [testo](url) |

---

## 📖 Guida Utente

### 🚀 **Avvio Rapido**

1. **Modifica Contenuto**
   - Digita o incolla contenuto Markdown nell'editor a sinistra
   - Anteprima tempo reale con WYSIWYG

2. **Carica File**
   - Clicca pulsante "Carica" per selezionare file .md o .txt
   - Oppure trascina file direttamente nell'area editor

3. **Personalizza Stili**
   - Scegli stile tema (Predefinito/Accademico/Moderno/Minimalista)
   - Regola formato carta e dimensione carattere
   - Anteprima tempo reale effetti

4. **Esporta PDF**
   - Clicca pulsante "Ottieni PDF"
   - Download automatico documento PDF generato
   - Nome file generato automaticamente basato sul titolo documento

### ⌨️ **Cheat Sheet Sintassi Markdown**

#### Sintassi Base
\`\`\`markdown
# Intestazione Livello 1
## Intestazione Livello 2
### Intestazione Livello 3

**Testo grassetto** o __Testo grassetto__
*Testo corsivo* o _Testo corsivo_
~~Barrato~~

- Elemento elenco non ordinato
  - Elemento elenco annidato

1. Elemento elenco ordinato
2. Secondo elemento
   1. Elemento ordinato annidato

> Testo citazione
>> Citazione annidata

[Testo link](https://example.com)
![Descrizione immagine](immagine.jpg)

\`Codice inline\`

\`\`\`lingua
Blocco codice
\`\`\`

### 💡 **Suggerimenti Utilizzo**

1. **Formule Matematiche**
   - Usa \`$...\` per formule inline
   - Usa \`$$...$$\` per formule blocco
   - Sintassi matematica LaTeX completa supportata

2. **Blocchi Codice**
   - Specifica linguaggio per evidenziazione sintassi: \`\`\`javascript
   - Linguaggi supportati: JavaScript, Python, JSON, Bash, ecc.

3. **Disegno Diagrammi**
   - Usa sintassi Mermaid per creare diagrammi di flusso, grafici, ecc.
   - Supporto tipi diagrammi multipli: grafo, diagramma flusso, ecc.

4. **Formattazione Tabelle**
   - Usa \`|\` per separare colonne
   - Usa \`-\` per separare intestazioni e contenuto
   - Supporto allineamento: \`:---\` (sinistra), \`---:\` (destra), \`:---:\` (centro)

---

## ❓ Domande Frequenti (FAQ)

### D1: Quali sintassi Markdown sono supportate?
**R**: Questo strumento supporta sintassi Markdown standard ed estensioni GitHub Flavored Markdown (GFM), incluse tabelle, elenchi attività, barrato, ecc. Supporta anche formule matematiche (KaTeX) e disegno diagrammi (Mermaid).

### D2: Cosa fare se le formule matematiche non vengono visualizzate?
**R**: Assicurati di usare la sintassi corretta:
- Formule inline: \`$formula$\`
- Formule blocco: \`$$formula$$\`
Se ancora non vengono visualizzate, verifica se la sintassi della formula è corretta.

### D3: Qual è la qualità dei PDF esportati?
**R**: Utilizziamo motori di generazione PDF professionali per garantire la qualità di output:
- Grafici vettoriali alta definizione
- Rendering testo chiaro
- Impaginazione pagine corretta
- Mantenere formattazione originale

### D4: I miei dati sono al sicuro?
**R**: Completamente sicuri! Tutta l'elaborazione avviene localmente nel tuo browser:
- Nessun dato caricato su alcun server
- Nessun memorizzazione contenuto documento
- Dati automaticamente cancellati dopo elaborazione

### D5: Quali browser sono supportati?
**R**: Supporta tutti i browser moderni:
- Chrome 65+
- Firefox 60+
- Safari 12+
- Edge 79+

### D6: Come gestire documenti di grandi dimensioni?
**R**: Per documenti di grandi dimensioni, raccomandiamo:
- Elaborare per sezioni
- Regolare opportunamente dimensione carattere
- Usare interruzioni pagina per segmentazione ragionevole
- Anteprima per confermare effetti prima di esportare

### D7: Qual è il nome del file PDF esportato?
**R**: Il nome file viene generato automaticamente basato sul titolo della prima riga del documento, ad esempio:
- Titolo "Report Progetto" → "Report Progetto.pdf"
- Usa "documento.pdf" quando non c'è titolo

---

## 📞 Supporto Tecnico

### 🔧 **Stack Tecnologico**
- **Next.js** - Framework React
- **Tailwind CSS** - Framework Styling
- **Marked** - Parser Markdown
- **KaTeX** - Rendering Formule Matematiche
- **Mermaid** - Disegno Diagrammi
- **html2pdf.js** - Generazione PDF
- **Highlight.js** - Evidenziazione Codice

### 📧 **Contattaci**
[Open Source](https://github.com/szlizhenhua/markdown-to-pdf). Per domande o suggerimenti, contattaci tramite:
- GitHub Issues: Segnala problemi o richiedi funzionalità
- Email feedback: support@markdown-to-pdf.org

### 🔄 **Registro Modifiche**
- **v1.0.0** - Versione iniziale
- Supporto formule matematiche KaTeX
- Supporto diagrammi Mermaid
- Selezione stili temi multipli
- Ottimizzazione design responsivo

---

<div style="text-align: center; margin-top: 3em; padding: 2em; border-top: 1px solid #eee; color: #666;">
  <p><strong>Convertitore da Markdown a PDF</strong></p>
  <p>Strumento Professionale Conversione Markdown in PDF</p>
  <p style="font-size: 0.9em; margin-top: 1em;">
    Creato con ❤️ | Privacy Prima
  </p>
  <p style="font-size: 0.8em; margin-top: 0.5em;">
    © 2025 Markdown to PDF. Tutti i diritti riservati.
  </p>
</div>`,

  // SEO
  seo: {
    title: "Convertitore da Markdown a PDF | Esportazione Documenti Professionale",
    description: "Converti Markdown in documenti PDF professionali con matematica, codice, diagrammi, indice, temi. Output qualità pubblicazione per uso accademico e commerciale.",
    keywords: "Markdown, PDF, convertitore, KaTeX, Mermaid, evidenziazione codice, indice, temi, esporta, accademico, professionale"
  },

  // SEO Content
  seoContent: {
    whyChooseUs: {
      label: "Perché sceglierci",
      title: "Perché utilizzare il nostro convertitore Markdown in PDF?",
      subtitle: "Un'esperienza simile ad Apple per la pubblicazione: pulita, veloce e bellamente coerente dalla bozza al PDF.",
      features: {
        privacy: {
          title: "Focus sulla privacy",
          description: "I tuoi dati sono al sicuro con noi. Tutte le conversioni avvengono localmente nel tuo browser. Non carichiamo mai i tuoi file Markdown su alcun server."
        },
        instant: {
          title: "Conversione istantanea",
          description: "Nessuna coda di attesa. Il nostro motore ottimizzato converte i tuoi documenti istantaneamente, supportando facilmente file di grandi dimensioni."
        },
        richSupport: {
          title: "Supporto ricco",
          description: "Supporto completo per GFM (GitHub Flavored Markdown), formule matematiche KaTeX, diagrammi Mermaid ed evidenziazione della sintassi del codice."
        }
      }
    },
    howToConvert: {
      label: "Flusso di lavoro semplice",
      title: "Come convertire Markdown in PDF",
      subtitle: "Un flusso tranquillo di tre passaggi progettato per mantenerti concentrato e ottenere un PDF rifinito in secondi.",
      steps: {
        step1: {
          title: "Scrivi o incolla Markdown",
          description: "Digita direttamente nel nostro editor in tempo reale o incolla il tuo codice Markdown esistente. Puoi anche trascinare e rilasciare file .md."
        },
        step2: {
          title: "Personalizza lo stile",
          description: "Scegli dai nostri temi professionali (Accademico, Moderno, ecc.) e regola dimensioni dei caratteri, margini e formato carta (A4, Lettera)."
        },
        step3: {
          title: "Scarica PDF",
          description: "Fai clic sul pulsante Esporta per ottenere istantaneamente il tuo documento PDF formattato, pronto per essere condiviso o stampato."
        }
      }
    },
    faq: {
      label: "FAQ",
      title: "Domande frequenti",
      items: {
        isFree: {
          question: "Questo strumento è gratuito?",
          answer: "Sì, il nostro convertitore Markdown in PDF è gratuito al 100% per uso personale e commerciale."
        },
        dataStorage: {
          question: "Memorizzate i miei dati?",
          answer: "No. Elaboriamo tutto nel tuo browser. I tuoi documenti non lasciano mai il tuo dispositivo."
        },
        mathSupport: {
          question: "Supporta equazioni matematiche?",
          answer: "Sì! Utilizziamo KaTeX per renderizzare bellamente formule ed equazioni matematiche complesse."
        },
        diagrams: {
          question: "Posso creare diagrammi?",
          answer: "Assolutamente. Supportiamo Mermaid.js per creare diagrammi di flusso, diagrammi di sequenza e diagrammi di Gantt dal testo."
        }
      }
    },
    comprehensive: {
      title: "Soluzione completa Markdown",
      description1: "Che tu sia uno studente che scrive una tesi, uno sviluppatore che documenta il codice o uno scrittore che sta scrivendo un romanzo, il nostro editor Markdown fornisce gli strumenti di cui hai bisogno. Con funzionalità come anteprima in tempo reale, monitoraggio del conteggio delle parole e modalità focus, puoi scrivere senza distrazioni.",
      description2: "Il nostro convertitore gestisce tutta la sintassi Markdown standard tra cui intestazioni, elenchi, collegamenti, immagini e blocchi di citazione. Gli utenti avanzati apprezzeranno il supporto per blocchi di codice con evidenziazione della sintassi specifica del linguaggio, note a piè di pagina ed elenchi di attività."
    }
  },

  // Footer
  footer: {
    tagline: "Markdown in PDF",
    subtitle: "Conversioni eleganti, ogni volta.",
    description: "Strumento di conversione documenti professionale per tutti. Gratuito, sicuro e veloce.",
    legal: {
      title: "Legale",
      privacyPolicy: "Informativa sulla privacy",
      termsOfService: "Termini di servizio"
    },
    links: {
      title: "Link",
      aboutUs: "Chi siamo",
      contact: "Contatto"
    },
    connect: {
      title: "Connetti",
      description: "Domande o feedback?"
    },
    copyright: "© {year} Markdown to PDF. Tutti i diritti riservati.",
    designed: "Progettato per la chiarezza"
  },

  // Toolbar
  toolbar: {
    heading: "Intestazione",
    bold: "Grassetto",
    italic: "Corsivo",
    strikethrough: "Barrato",
    code: "Codice",
    link: "Collegamento",
    image: "Immagine",
    bulletList: "Elenco puntato",
    numberedList: "Elenco numerato",
    quote: "Citazione",
    codeBlock: "Blocco di codice",
    horizontalRule: "Linea orizzontale",
    undo: "Annulla",
    redo: "Ripeti",
    showLess: "Mostra meno",
    showMore: "Mostra di più",
    disableWordWrap: "Disabilita a capo automatico",
    enableWordWrap: "Abilita a capo automatico",
    findAndReplace: "Trova e sostituisci",
    showTools: "Mostra strumenti",
    hideTools: "Nascondi strumenti",
    exportTXT: "TXT",
    special: "Speciale",
    lineOps: "Operazioni di riga"
  },

  // Dialogs
  dialogs: {
    markdownCheatSheet: "Cheat sheet Markdown",
    documentStatistics: "Statistiche del documento",
    close: "Chiudi",
    focusMode: {
      title: "Modalità focus",
      enter: "Entra in modalità focus",
      exit: "Esci dalla modalità focus",
      description: "Ambiente di scrittura senza distrazioni"
    },
    wordGoal: {
      title: "Tracker obiettivo parole",
      setGoal: "Imposta obiettivo parole",
      currentWords: "Parole attuali",
      goalWords: "Obiettivo",
      remaining: "Rimanenti",
      progress: "Progresso",
      achieved: "Obiettivo raggiunto! 🎉"
    },
    timeTracker: {
      title: "Tracker del tempo",
      startTime: "Avvia sessione",
      stopTime: "Ferma sessione",
      reset: "Resetta",
      totalTime: "Tempo totale",
      sessions: "Sessioni di oggi"
    },
    pomodoro: {
      title: "Timer Pomodoro",
      start: "Avvia",
      pause: "Pausa",
      reset: "Resetta",
      work: "Lavoro",
      shortBreak: "Pausa breve",
      longBreak: "Pausa lunga",
      sessions: "Sessioni completate"
    },
    quickTemplates: {
      title: "Modelli rapidi",
      select: "Seleziona un modello da inserire"
    },
    documentTemplates: {
      title: "Modelli di documento",
      description: "Scegli un modello per iniziare"
    },
    performance: {
      title: "Impostazioni prestazioni",
      debounceTime: "Tempo di debounce",
      description: "Regola le prestazioni di rendering"
    },
    autosave: {
      title: "Impostazioni salvataggio automatico",
      interval: "Intervallo di salvataggio",
      description: "Con quale frequenza salvare automaticamente il lavoro",
      status: {
        saved: "Salvato",
        saving: "Salvataggio...",
        unsaved: "Modifiche non salvate",
        error: "Errore di salvataggio"
      }
    },
    typography: {
      title: "Controlli tipografici",
      fontSize: "Dimensione carattere",
      lineHeight: "Altezza riga",
      fontFamily: "Famiglia carattere"
    },
    snippets: {
      title: "Libreria snippet",
      add: "Aggiungi snippet",
      save: "Salva snippet",
      cancel: "Annulla",
      name: "Nome",
      content: "Contenuto"
    },
    keyboardShortcuts: {
      title: "Scorciatoie da tastiera",
      description: "Accelera il tuo flusso di lavoro con queste scorciatoie"
    }
  }
}
