export const hi = {
  // Header
  title: "Markdown से PDF कनवर्टर",
  subtitle: "Markdown को पेशेवर PDF में बदलें",

  // Controls
  buttons: {
    upload: "अपलोड",
    showPreview: "पूर्वावलोकन दिखाएं",
    hidePreview: "पूर्वावलोकन छिपाएं",
    getPDF: "PDF प्राप्त करें",
    generatingPDF: "PDF उत्पन्न हो रहा है...",
    settings: "सेटिंग्स",
    tableOfContents: "विषय सूची",
    exportHTML: "HTML",
    exportMarkdown: "MD"
  },

  // Editor
  editor: {
    title: "Markdown एडिटर",
    placeholder: "यहां अपना Markdown लिखना शुरू करें...\n\n# शीर्षक 1\n## शीर्षक 2\n\n**बोल्ड** और *इटैलिक*\n\n- सूची आइटम 1\n- सूची आइटम 2\n\n```javascript\nconsole.log('नमस्ते दुनिया!');\n```\n\n| कॉलम 1 | कॉलम 2 |\n|---------|----------|\n| डेटा 1  | डेटा 2   |",
    dragDropText: "अपनी Markdown फ़ाइल यहां ड्रॉप करें",
    dragDropSubtext: ".md और .txt फ़ाइलों का समर्थन",
    loading: "आरेख लोड हो रहा है...",
    rendering: "आरेख प्रस्तुत किया जा रहा है...",
    stats: {
      characters: "अक्षर",
      words: "शब्द",
      lines: "पंक्तियां",
      readingTime: "पढ़ने का समय",
      readingTimeLessThanOne: "< 1 मिनट",
      readingTimeMinute: "मिनट",
      readingTimeHour: "घं"
    }
  },

  // Preview
  preview: {
    title: "पूर्वावलोकन",
    theme: "थीम"
  },

  // Settings
  settings: {
    title: "सेटिंग्स",
    theme: "थीम",
    paperSize: "पेपर आकार",
    fontSize: "फ़ॉन्ट आकार"
  },

  // Table of Contents
  toc: {
    title: "विषय सूची"
  },

  // Themes
  themes: {
    default: "डिफ़ॉल्ट",
    academic: "शैक्षिक",
    modern: "आधुनिक",
    minimal: "न्यूनतम"
  },

  // Paper Sizes
  paperSizes: {
    a4: "A4",
    letter: "लेटर",
    legal: "लीगल"
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
    pdfGenerationError: "PDF जनरेशन विफल",
    pdfExportError: "PDF निर्यात विफल, विवरण के लिए कंसोल की जांच करें",
    mermaidRenderError: "Mermaid प्रस्तुति त्रुटि",
    mermaidSyntaxError: "कृपया Mermaid सिंटैक्स की जांच करें",
    mermaidExampleSyntax: "सिंटैक्स उदाहरण:",
    mermaidRenderRetry: "Mermaid प्रस्तुति प्रयास {count} विफल, 100ms में पुनः प्रयास करेगा",
    mermaidFinalError: "Mermaid प्रस्तुति अंतिम विफल",
    unknownError: "अज्ञात त्रुटि",
    highlightJsError: "भाषा \"{lang}\" के लिए Highlight.js त्रुटि:",
    katexRenderError: "KaTeX प्रस्तुति त्रुटि:",
    mermaidInitError: "Mermaid प्रारंभीकरण त्रुटि:",
    mermaidLoading: "आरेख लोड हो रहा है...",
    mermaidRendering: "आरेख प्रस्तुत किया जा रहा है...",
    templateLoaded: "टेम्पलेट लोड हुआ",
    templateLoadedMessage: "टेम्पलेट एडिटर पर लागू किया गया है।",
    fileTooLarge: "फ़ाइल बहुत बड़ी है। अधिकतम आकार 5MB है।",
    invalidFileType: "अमान्य फ़ाइल प्रकार। कृपया .md या .txt फ़ाइल अपलोड करें।",
    fileUploadFailed: "फ़ाइल अपलोड विफल। कृपया पुनः प्रयास करें।",
    fileUploaded: "फ़ाइल सफलतापूर्वक अपलोड की गई",
    resetComplete: "रीसेट पूर्ण",
    resetCompleteMessage: "एडिटर और सेटिंग्स डिफ़ॉल्ट मानों पर रीसेट कर दिए गए हैं।",
    copySuccess: "क्लिपबोर्ड पर कॉपी किया गया",
    copyFailed: "क्लिपबोर्ड पर कॉपी करने में विफल",
    networkError: "नेटवर्क त्रुटि। कृपया अपना कनेक्शन जांचें।",
    quotaExceeded: "भंडारण कोटा पार हो गई। कुछ ब्राउज़र डेटा साफ़ करें।",
    autoSaveFailed: "ऑटो-सेव विफल। आपके परिवर्तन सहेजे नहीं जा सकते हैं।"
  },

  // Templates
  templates: {
    title: "एक टेम्पलेट चुनें",
    description: "जल्दी शुरू करने के लिए पेशेवर रूप से डिज़ाइन किए गए टेम्पलेट में से चुनें",
    selectTemplate: "एडिटर में लोड करने के लिए एक टेम्पलेट पर क्लिक करें। आपकी वर्तमान सामग्री प्रतिस्थापित हो जाएगी।",
    categories: {
      all: "सभी टेम्पलेट",
      basic: "बुनियादी",
      academic: "शैक्षिक",
      technical: "तकनीकी",
      documentation: "प्रलेखन"
    },
    // Document templates
    blank: {
      name: "रिक्त दस्तावेज़",
      description: "खाली पृष्ठ से शुरू करें"
    },
    article: {
      name: "ब्लॉग लेख",
      description: "मानक ब्लॉग पोस्ट संरचना"
    },
    readme: {
      name: "README.md",
      description: "प्रोजेक्ट प्रलेखन टेम्पलेट"
    },
    resume: {
      name: "बायोडाटा/CV",
      description: "पेशेवर बायोडाटा टेम्पलेट"
    },
    essay: {
      name: "शैक्षिक निबंध",
      description: "संरचित शैक्षिक पत्र"
    },
    meeting: {
      name: "बैठक नोट्स",
      description: "संरचित बैठक नोट्स टेम्पलेट"
    },
    tutorial: {
      name: "ट्यूटोरियल/गाइड",
      description: "चरण-दर-चरण ट्यूटोरियल टेम्पलेट"
    },
    simpleNotes: {
      name: "सरल नोट्स",
      description: "बुनियादी नोट टेम्पलेट"
    },
    meetingNotes: {
      name: "बैठक के नोट्स",
      description: "संरचित बैठक दस्तावेज़"
    },
    researchPaper: {
      name: "शोध पत्र",
      description: "उद्धरणों के साथ शैक्षणिक पत्र टेम्पलेट"
    },
    apiDocumentation: {
      name: "API दस्तावेज़ीकरण",
      description: "तकनीकी API संदर्भ टेम्पलेट"
    },
    blogPost: {
      name: "ब्लॉग पोस्ट टेम्पलेट",
      description: "SEO-अनुकूलित ब्लॉग पोस्ट टेम्पलेट"
    },
    productRequirements: {
      name: "उत्पाद आवश्यकताएं",
      description: "उत्पाद प्रबंधकों के लिए PRD टेम्पलेट"
    },
    templates: "टेम्पलेट"
  },

  quickTemplates: {
    apiEndpoint: "API एंडपॉइंट",
    codeSnippet: "कोड स्निपेट",
    meetingNotes: "बैठक नोट्स",
    bugReport: "बग रिपोर्ट",
    dailyStandup: "दैनिक स्टैंडअप",
    featureRequest: "सुविधा अनुरोध",
    codeReview: "कोड समीक्षा",
    projectReadme: "प्रोजेक्ट README"
  },
  textTransform: {
    title: "पाठ रूपांतरित करें",
    close: "बंद करें",
    uppercase: "बड़े अक्षर",
    lowercase: "छोटे अक्षर",
    titleCase: "टाइटल केस",
    sentenceCase: "सेंटेंस केस",
    camelCase: "कैमल केस",
    kebabCase: "केबेब-केस",
    snakeCase: "स्नेक केस",
    toggleCase: "टॉगल केस",
    capitalize: "कैपिटलाइज़",
    uppercaseDesc: "बड़े अक्षरों में बदलें",
    lowercaseDesc: "छोटे अक्षरों में बदलें",
    titleCaseDesc: "प्रत्येक शब्द का पहला अक्षर बड़ा करें",
    sentenceCaseDesc: "केवल पहला शब्द बड़ा करें",
    camelCaseDesc: "कैमल केस में बदलें",
    kebabCaseDesc: "केबेब-केस में बदलें",
    snakeCaseDesc: "स्नेक केस में बदलें",
    toggleCaseDesc: "अक्षरों का आकार बदलें",
    capitalizeDesc: "पहला अक्षर बड़ा करें"
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
    language: "भाषा",
    insertCodeBlock: "कोड ब्लॉक डालें",
    preview: "पूर्वावलोकन"
  },
  dateTime: {
    insertDateTime: "दिनांक/समय डालें",
    date: "दिनांक",
    time: "समय",
    dateTime: "दिनांक और समय",
    iso8601: "ISO 8601",
    usFormat: "US प्रारूप",
    euFormat: "EU प्रारूप",
    readable: "पठनीय",
    cancel: "रद्द करें"
  },
  listHelper: {
    listType: "सूची प्रकार",
    bullet: "बुलेट",
    numbered: "क्रमांकित",
    numberOfItems: "आइटम की संख्या",
    listItems: "सूची आइटम",
    insertList: "सूची डालें",
    cancel: "रद्द करें",
    item: "आइटम"
  },
  highlightHelper: {
    insertHighlight: "हाइलाइट डालें",
    highlightText: "पाठ हाइलाइट करें",
    textToHighlight: "हाइलाइट करने के लिए पाठ",
    color: "रंग",
    visualOnly: "(केवल दृश्य)",
    note: "नोट: हाइलाइट करने के लिए ==पाठ== वाक्यविन्यास का उपयोग किया जाता है। यह सभी मार्कडाउन रेंडरर द्वारा समर्थित नहीं हो सकता है।",
    cancel: "रद्द करें",
    yellow: "पीला",
    red: "लाल",
    green: "हरा",
    blue: "नीला",
    purple: "बैंगनी",
    pink: "गुलाबी"
  },

  helpDialog: {
    title: "मार्कडाउन त्वरित संदर्भ",
    close: "बंद करें",
    headings: "शीर्षक",
    textStyles: "टेक्स्ट शैलियाँ",
    codeBlocks: "कोड ब्लॉक",
    lists: "सूचियाँ",
    links: "लिंक",
    images: "चित्र",
    quotes: "उद्धरण",
    tables: "तालिकाएं"
  },

  // Batch Conversion
  batchConversion: {
    button: "बैच PDF",
    buttonShort: "बैच",
    dialogTitle: "मार्कडाउन बैच रूपांतरण",
    dialogDescription: "एक फ़ोल्डर या कई .md फ़ाइलें चुनें, फिर एक-एक करके PDF बनाने के लिए एक आउटपुट फ़ोल्डर चुनें।",
    selectFolder: "फ़ोल्डर चुनें",
    selectFiles: "फ़ाइलें चुनें",
    outputTitle: "आउटपुट फ़ोल्डर चुनें",
    outputDescription: "{count} मार्कडाउन फ़ाइलें मिलीं। एक आउटपुट फ़ोल्डर चुनें और रूपांतरण शुरू करें।",
    duplicateHint: "यदि आउटपुट फ़ोल्डर में एक PDF पहले से मौजूद है, तो अधिलेखन से बचने के लिए एक संख्यात्मक प्रत्यय जोड़ा जाएगा।",
    folderHint: "चयनित फ़ोल्डर और इसके उप-फ़ोल्डर्स का पुनरावर्ती स्कैन",
    filesHint: "एक साथ कई .md फ़ाइलें चुनें",
    chooseOutput: "आउटपुट फ़ोल्डर चुनें और शुरू करें",
    processingTitle: "बैच रूपांतरण जारी है",
    processingDescription: "क्रमिक रूप से PDF बनाए जा रहे हैं। इस पृष्ठ को खुला रखें।",
    currentFile: "वर्तमान फ़ाइल",
    completed: "पूर्ण",
    resultTitle: "बैच रूपांतरण पूर्ण",
    resultSummary: "{success} सफल, {failed} असफल।",
    outputFolder: "आउटपुट फ़ोल्डर",
    selectedFiles: "चयनित फ़ाइलें",
    failedFiles: "असफल फ़ाइलें",
    moreFiles: "और फ़ाइलें",
    close: "बंद करें",
    cancel: "रद्द करें",
    unsupported: "यह ब्राउज़र फ़ोल्डर-आधारित बैच रूपांतरण का समर्थन नहीं करता है। क्रोम या एज जैसे किसी नवीनतम क्रोमियम-आधारित ब्राउज़र का उपयोग करें।",
    noMarkdownFiles: "चयनित स्रोत में कोई मार्कडाउन फ़ाइलें नहीं मिलीं।",
    skippedFiles: "आवश्यकताओं को पूरा न करने वाली {count} फ़ाइलों को छोड़ दिया गया।",
    finishedToast: "बैच रूपांतरण पूर्ण",
    partialFailureToast: "कुछ फ़ाइलों का रूपांतरण विफल"
  },

  // Default Content
  defaultContent: `# Markdown से PDF कनवर्टर

> 🎯 **गणितीय सूत्र, फ़्लोचार्ट, कोड हाइलाइटिंग और कई थीम के साथ अपने Markdown दस्तावेज़ों को पेशेवर PDF में बदलें**

## ✨ सुविधाएं

### 📊 **पूर्ण Markdown समर्थन**
- **टेक्स्ट फ़ॉर्मेटिंग**: **बोल्ड**, *इटैलिक*, ~~स्ट्राइकथ्रू~~, \`इनलाइन कोड\`
- **शीर्षक स्तर**: पूर्ण H1-H6 शीर्षक संरचना समर्थन
- **सूचियां**: क्रमबद्ध सूचियां, अक्रमबद्ध सूचियां, कार्य सूचियां
- **लिंक और चित्र**: स्वचालित लिंक पहचान, चित्र एम्बेडिंग समर्थन
- **तालिकाएं**: संरेखण और जटिल तालिका संरचनाओं का समर्थन
- **उद्धरण**: ब्लॉक उद्धरण और नेस्टेड उद्धरण

### 🧮 **गणितीय सूत्र प्रस्तुति (KaTeX)**
**इनलाइन सूत्र**: आइंस्टीन का द्रव्यमान-ऊर्जा समीकरण $E = mc^2$

**ब्लॉक सूत्र**:
$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

**जटिल सूत्र**:
$$\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\cdots + x_n$$

**आव्यूह निरूपण**:
$$\\begin{bmatrix}
a & b \\\\
c & d
\\end{bmatrix}$$

### 📈 **आरेख बनाना (Mermaid)**

#### फ़्लोचार्ट
\`\`\`mermaid
graph TD
    A[प्रारंभ] --> B{स्थिति}
    B -->|हां| C[कार्य A]
    B -->|नहीं| D[कार्य B]
    C --> E[अंत]
    D --> E
\`\`\`

#### ग्राफ़ आरेख
\`\`\`mermaid
graph LR
    A[उपयोगकर्ता] --> B[प्रणाली]
    B --> A[प्रतिक्रिया]
\`\`\`

#### अनुक्रम आरेख
\`\`\`mermaid
sequenceDiagram
    participant U as उपयोगकर्ता
    participant W as वेब ऐप
    participant S as पीडीएफ सेवा
    U->>W: मार्कडाउन पेस्ट/संपादित करें
    W-->>U: लाइव पूर्वावलोकन
    U->>W: "पीडीएफ प्राप्त करें" क्लिक करें
    W->>S: रेंडर और पीडीएफ बनाएं
    S-->>W: पीडीएफ लौटाएं
    W-->>U: फ़ाइल डाउनलोड करें
\`\`\`

#### गैंट आरेख
\`\`\`mermaid
gantt
    title परियोजना योजना (उदाहरण)
    dateFormat  YYYY-MM-DD
    section योजना
    आवश्यकताएं        :a1, 2026-02-01, 3d
    समीक्षा          :a2, 2026-02-04, 1d
    section वितरण
    संपादक सुविधाएं     :b1, 2026-02-05, 5d
    पीडीएफ निर्यात पॉलिश   :b2, 2026-02-10, 3d
\`\`\`

#### वर्ग आरेख
\`\`\`mermaid
classDiagram
    class MarkdownRenderer {
      +render(markdown) HTML
      +renderMermaid() void
    }
    class PdfExporter {
      +export(html) PDF
    }
    MarkdownRenderer --> PdfExporter : HTML प्रदान करता है
\`\`\`

#### स्थिति आरेख
\`\`\`mermaid
stateDiagram-v2
    [*] --> निष्क्रिय
    निष्क्रिय --> संपादन : टाइप करें
    संपादन --> पूर्वावलोकन : पूर्वावलोकन
    पूर्वावलोकन --> निर्यात : निर्यात
    निर्यात --> निष्क्रिय : पूर्ण
\`\`\`

#### पाई चार्ट
\`\`\`mermaid
pie title जोखिम वितरण (उदाहरण)
    "उच्च" : 15
    "मध्यम" : 35
    "निम्न" : 50
\`\`\`

#### माइंड मैप
\`\`\`mermaid
mindmap
  root((जोखिम))
    पहचान
      खतरे
      अवसर
    मूल्यांकन
      प्रभाव
      संभावना
    प्रतिक्रिया
      कम करें
      स्थानांतरण
      स्वीकार करें
\`\`\`

#### समयरेखा
\`\`\`mermaid
timeline
    title रिलीज़ आवृत्ति (उदाहरण)
    2026-02 : v1.0 लॉन्च
    2026-03 : टेम्पलेट लाइब्रेरी
    2026-04 : सहयोग और इतिहास
\`\`\`

#### रडार चार्ट (कस्टम)
\`\`\`mermaid
radar-chart
    title टीम कौशल रडार (उदाहरण 1)
    axis संचार, डिज़ाइन, विकास, QA, दस्तावेज़
    series योजना A [80, 70, 90, 60, 75]
    series योजना B [65, 85, 70, 80, 60]
\`\`\`

\`\`\`mermaid
radar
    title उत्पाद मेट्रिक्स रडार (उदाहरण 2)
    axis गति, स्थिरता, UX, रखरखाव
    v1 [70, 60, 80, 65]
\`\`\`

#### चतुर्थांश चार्ट (कस्टम)
\`\`\`mermaid
quadrant-chart
    title जोखिम बनाम समय मैट्रिक्स
    x-axis "नियंत्रणीयता" --> "संवेदनशीलता"
    y-axis "परिपक्वता" --> "तात्कालिकता"
    quadrant-1 "रणनीतिक खिड़की"
    quadrant-2 "देखें और तैयार रहें"
    quadrant-3 "बचें"
    quadrant-4 "त्वरित करें"
    "स्थानीय गहराई": [0.75, 0.85]
    "SEA अन्वेषण": [0.45, 0.65]
    "दोहरी पटरी": [0.35, 0.55]
    "प्रतियोगी बढ़त": [0.60, 0.31]
\`\`\`

### 💻 **कोड हाइलाइटिंग**

#### JavaScript उदाहरण
\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// उपयोग उदाहरण
console.log(fibonacci(10)); // आउटपुट: 55
\`\`\`

#### Python उदाहरण
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

### 📋 **तालिका सुविधाएं**

| सुविधा | स्थिति | विवरण | शॉर्टकट |
|---------|:------:|-------------|----------|
| गणितीय सूत्र | ✅ | पूर्ण KaTeX समर्थन | \`$...\$ |
| फ़्लोचार्ट | ✅ | Mermaid आरेख | \`mermaid |
| कोड हाइलाइटिंग | ✅ | बहु-भाषा समर्थन | \`lang |
| तालिकाएं | ✅ | पूर्ण तालिका कार्यक्षमता | \| \| \| |
| लिंक | ✅ | स्वचालित लिंक पहचान | [पाठ](url) |

---

## 📖 उपयोगकर्ता गाइड

### 🚀 **त्वरित शुरुआत**

1. **सामग्री संपादित करें**
   - बाएं एडिटर में Markdown सामग्री टाइप करें या पेस्ट करें
   - WYSIWYG के साथ वास्तविक समय पूर्वावलोकन

2. **फ़ाइलें अपलोड करें**
   - .md या .txt फ़ाइलों का चयन करने के लिए "अपलोड" बटन पर क्लिक करें
   - या फ़ाइलों को सीधे एडिटर क्षेत्र में ड्रैग और ड्रॉप करें

3. **शैलियां अनुकूलित करें**
   - थीम शैली चुनें (डिफ़ॉल्ट/शैक्षिक/आधुनिक/न्यूनतम)
   - पेपर आकार और फ़ॉन्ट आकार समायोजित करें
   - प्रभावों का वास्तविक समय पूर्वावलोकन

4. **PDF निर्यात करें**
   - "PDF प्राप्त करें" बटन पर क्लिक करें
   - उत्पन्न PDF दस्तावेज़ का स्वचालित डाउनलोड
   - दस्तावेज़ शीर्षक के आधार पर फ़ाइल नाम स्वचालित रूप से उत्पन्न

### ⌨️ **Markdown सिंटैक्स चीट शीट**

#### बुनियादी सिंटैक्स
\`\`\`markdown
# स्तर 1 शीर्षक
## स्तर 2 शीर्षक
### स्तर 3 शीर्षक

**बोल्ड टेक्स्ट** या __बोल्ड टेक्स्ट__
*इटैलिक टेक्स्ट* या _इटैलिक टेक्स्ट_
~~स्ट्राइकथ्रू~~

- अक्रमबद्ध सूची आइटम
  - नेस्टेड सूची आइटम

1. क्रमबद्ध सूची आइटम
2. दूसरा आइटम
   1. नेस्टेड क्रमबद्ध आइटम

> उद्धरण टेक्स्ट
>> नेस्टेड उद्धरण

[लिंक टेक्स्ट](https://example.com)
![छवि विवरण](छवि.jpg)

\`इनलाइन कोड\`

\`\`\`भाषा
कोड ब्लॉक
\`\`\`

### 💡 **उपयोग युक्तियां**

1. **गणितीय सूत्र**
   - इनलाइन सूत्रों के लिए \`$...\` का उपयोग करें
   - ब्लॉक सूत्रों के लिए \`$$...$$\` का उपयोग करें
   - पूर्ण LaTeX गणित सिंटैक्स समर्थित

2. **कोड ब्लॉक**
   - सिंटैक्स हाइलाइटिंग के लिए भाषा निर्दिष्ट करें: \`\`\`javascript
   - समर्थित भाषाएं: JavaScript, Python, JSON, Bash, आदि

3. **आरेख बनाना**
   - फ़्लोचार्ट, ग्राफ़, आदि बनाने के लिए Mermaid सिंटैक्स का उपयोग करें
   - कई आरेख प्रकारों का समर्थन: ग्राफ़, फ़्लोचार्ट, आदि

4. **तालिका फ़ॉर्मेटिंग**
   - कॉलम अलग करने के लिए \`|\` का उपयोग करें
   - शीर्षकों और सामग्री को अलग करने के लिए \`-\` का उपयोग करें
   - संरेखण समर्थन: \`:---\` (बाएं), \`---:\` (दाएं), \`:---:\` (केंद्र)

---

## ❓ अक्सर पूछे जाने वाले प्रश्न (FAQ)

### प्रश्न 1: कौन सा Markdown सिंटैक्स समर्थित है?
**उ**: यह टूल मानक Markdown सिंटैक्स और GitHub Flavored Markdown (GFM) एक्सटेंशन का समर्थन करता है, जिसमें तालिकाएं, कार्य सूचियां, स्ट्राइकथ्रू, आदि शामिल हैं। इसके अलावा, यह गणितीय सूत्र (KaTeX) और आरेख बनाना (Mermaid) भी समर्थित करता है।

### प्रश्न 2: गणितीय सूत्र प्रदर्शित नहीं होने पर क्या करें?
**उ**: सुनिश्चित करें कि आप सही सिंटैक्स का उपयोग कर रहे हैं:
- इनलाइन सूत्र: \`$सूत्र$\`
- ब्लॉक सूत्र: \`$$सूत्र$$\`
यदि अभी भी प्रदर्शित नहीं होता है, तो सूत्र सिंटैक्स सही है या नहीं जांचें।

### प्रश्न 3: निर्यातित PDF की गुणवत्ता कैसी है?
**उ**: हम आउटपुट गुणवत्ता सुनिश्चित करने के लिए पेशेवर PDF जनरेशन इंजन का उपयोग करते हैं:
- हाई-डेफिनिशन वेक्टर ग्राफिक्स
- स्पष्ट टेक्स्ट प्रस्तुति
- सही पेज पेजिनेशन
- मूल स्वरूपण बनाए रखें

### प्रश्न 4: क्या मेरा डेटा सुरक्षित है?
**उ**: पूरी तरह सुरक्षित! सभी प्रसंस्करण आपके ब्राउज़र में स्थानीय रूप से किए जाते हैं:
- किसी भी सर्वर पर डेटा अपलोड नहीं किया जाता है
- आपके दस्तावेज़ की सामग्री संग्रहीत नहीं की जाती है
- प्रसंस्करण के बाद डेटा स्वचालित रूप से मिटा दिया जाता है

### प्रश्न 5: कौन से ब्राउज़र समर्थित हैं?
**उ**: सभी आधुनिक ब्राउज़र समर्थित हैं:
- Chrome 65+
- Firefox 60+
- Safari 12+
- Edge 79+

### प्रश्न 6: बड़े दस्तावेज़ों को कैसे संभालें?
**उ**: बड़े दस्तावेज़ों के लिए, हम अनुशंसा करते हैं:
- अनुभागों में प्रसंस्करण
- फ़ॉन्ट आकार को उचित रूप से समायोजित करें
- उचित विभाजन के लिए पेज ब्रेक का उपयोग करें
- निर्यात करने से पहले प्रभावों की पुष्टि के लिए पूर्वावलोकन

### प्रश्न 7: निर्यातित PDF फ़ाइल नाम क्या है?
**उ**: फ़ाइल नाम दस्तावेज़ की पहली पंक्ति के शीर्षक के आधार पर स्वचालित रूप से उत्पन्न होता है, उदाहरण के लिए:
- शीर्षक "परियोजना रिपोर्ट" → "परियोजना रिपोर्ट.pdf"
- जब कोई शीर्षक नहीं हो तो "document.pdf" का उपयोग करें

---

## 📞 तकनीकी सहायता

### 🔧 **तकनीकी स्टैक**
- **Next.js** - React फ़्रेमवर्क
- **Tailwind CSS** - स्टाइलिंग फ़्रेमवर्क
- **Marked** - Markdown पार्सर
- **KaTeX** - गणितीय सूत्र प्रस्तुति
- **Mermaid** - आरेख बनाना
- **html2pdf.js** - PDF जनरेशन
- **Highlight.js** - कोड हाइलाइटिंग

### 📧 **संपर्क करें**
[ओपन सोर्स](https://github.com/szlizhenhua/markdown-to-pdf). प्रश्नों या सुझावों के लिए, कृपया निम्नलिखित के माध्यम से संपर्क करें:
- GitHub Issues: समस्याओं की रिपोर्ट करें या सुविधाओं का अनुरोध करें
- ईमेल प्रतिक्रिया: support@markdown-to-pdf.org

### 🔄 **बदलाव लॉग**
- **v1.0.0** - प्रारंभिक रिलीज़
- KaTeX गणितीय सूत्र समर्थन
- Mermaid आरेख समर्थन
- कई थीम शैली चयन
- रेस्पॉन्सिव डिज़ाइन अनुकूलन

---

<div style="text-align: center; margin-top: 3em; padding: 2em; border-top: 1px solid #eee; color: #666;">
  <p><strong>Markdown से PDF कनवर्टर</strong></p>
  <p>पेशेवर Markdown से PDF रूपांतरण टूल</p>
  <p style="font-size: 0.9em; margin-top: 1em;">
    ❤️ के साथ बनाया गया | गोपनीयता पहले
  </p>
  <p style="font-size: 0.8em; margin-top: 0.5em;">
    © 2025 Markdown to PDF. सर्वाधिकार सुरक्षित।
  </p>
</div>`,

  // SEO
  seo: {
    title: "Markdown से PDF कनवर्टर | पेशेवर दस्तावेज़ निर्यात",
    description: "गणित, कोड, आरेख, विषय सूची, थीम के साथ Markdown को पेशेवर PDF दस्तावेज़ों में बदलें। शैक्षिक और वाणिज्यिक उपयोग के लिए प्रकाशन गुणवत्ता आउटपुट।",
    keywords: "Markdown, PDF, कनवर्टर, KaTeX, Mermaid, कोड हाइलाइटिंग, विषय सूची, थीम, निर्यात, शैक्षिक, पेशेवर"
  },

  // SEO Content
  seoContent: {
    whyChooseUs: {
      label: "हमें क्यों चुनें",
      title: "हमारे Markdown से PDF कनवर्टर का उपयोग क्यों करें?",
      subtitle: "प्रकाशन के लिए Apple जैसा अनुभव: साफ, तेज़ और प्रारूप से PDF तक सुंदर रूप से एकरूपता।",
      features: {
        privacy: {
          title: "गोपनीयता पर ध्यान केंद्रित",
          description: "आपका डेटा हमारे साथ सुरक्षित है। सभी रूपांतरण स्थानीय रूप से आपके ब्राउज़र में होते हैं। हम कभी भी आपके Markdown फ़ाइलों को किसी भी सर्वर पर अपलोड नहीं करते।"
        },
        instant: {
          title: "तत्काल रूपांतरण",
          description: "प्रतीक्षा कोई कतार नहीं। हमारा अनुकूलित इंजन आपके दस्तावेज़ों को तुरंत परिवर्तित करता है और बड़ी फ़ाइलों को आसानी से समर्थन देता है।"
        },
        richSupport: {
          title: "समृद्ध समर्थन",
          description: "GFM (GitHub Flavored Markdown), KaTeX गणित सूत्र, Mermaid आरेख और कोड सिंटैक्स हाइलाइटिंग के लिए पूर्ण समर्थन।"
        }
      }
    },
    howToConvert: {
      label: "सरल कार्यप्रवाह",
      title: "Markdown को PDF में कैसे बदलें",
      subtitle: "एक शांत तीन-चरणीय प्रवाह जो आपको केंद्रित रखने और सेकंड में एक पॉलिश किया हुआ PDF प्राप्त करने के लिए डिज़ाइन किया गया है।",
      steps: {
        step1: {
          title: "Markdown लिखें या पेस्ट करें",
          description: "हमारे रीयल-टाइम संपादक में सीधे टाइप करें या अपने मौजूदा Markdown कोड पेस्ट करें। आप .md फ़ाइलों को खींचकर छोड़ भी सकते हैं।"
        },
        step2: {
          title: "शैली अनुकूलित करें",
          description: "हमारे पेशेवर थीम (अकादमिक, मॉडर्न, आदि) में से चुनें और फ़ॉन्ट आकार, मार्जिन और पेपर आकार (A4, Letter) समायोजित करें।"
        },
        step3: {
          title: "PDF डाउनलोड करें",
          description: "साझा करने या प्रिंट करने के लिए तुरंत एक स्वरूपित PDF दस्तावेज़ प्राप्त करने के लिए निर्यात बटन पर क्लिक करें।"
        }
      }
    },
    faq: {
      label: "अक्सर पूछे जाने वाले प्रश्न",
      title: "बार-बार पूछे जाने वाले प्रश्न",
      items: {
        isFree: {
          question: "क्या यह टूल मुफ़्त है?",
          answer: "हाँ, हमारा Markdown से PDF कनवर्टर व्यक्तिगत और वाणिज्यिक उपयोग के लिए 100% मुफ़्त है।"
        },
        dataStorage: {
          question: "क्या आप मेरा डेटा संग्रहीत करते हैं?",
          answer: "नहीं। हम सब कुछ आपके ब्राउज़र में संसाधित करते हैं। आपके दस्तावेज़ कभी भी आपके डिवाइस से बाहर नहीं निकलते।"
        },
        mathSupport: {
          question: "क्या यह गणितीय समीकरणों का समर्थन करता है?",
          answer: "हाँ! हम सुंदर गणितीय सूत्रों और समीकरणों को प्रस्तुत करने के लिए KaTeX का उपयोग करते हैं।"
        },
        diagrams: {
          question: "क्या मैं आरेख बना सकता हूँ?",
          answer: "बिल्कुल। हम Mermaid.js का समर्थन करते हैं जिससे आप पाठ से प्रवाह चार्ट, अनुक्रम आरेख और गैंट चार्ट बना सकते हैं।"
        }
      }
    },
    comprehensive: {
      title: "व्यापक Markdown समाधान",
      description1: "चाहे आप एक छात्र हों जो शोध पत्र लिख रहा हो, एक डेवलपर जो कोड दस्तावेज़ कर रहा हो, या एक लेखक जो उपन्यास लिख रहा हो, हमारा Markdown संपादक आपको आवश्यक उपकरण प्रदान करता है। वास्तविक समय पूर्वावलोकन, शब्द गणना ट्रैकिंग और फोकस मोड जैसी सुविधाओं के साथ, आप बिना विचलित हुए लिख सकते हैं।",
      description2: "हमारा कनवर्टर सभी मानक Markdown सिंटैक्स को संभालता है जिसमें शीर्षक, सूचियाँ, लिंक, चित्र और उद्धरण ब्लॉक शामिल हैं। उन्नत उपयोगकर्ता भाषा-विशिष्ट सिंटैक्स हाइलाइटिंग, फुटनोट और कार्य सूचियों के साथ कोड ब्लॉकों के समर्थन की सराहना करेंगे।"
    }
  },

  // Footer
  footer: {
    tagline: "Markdown से PDF",
    subtitle: "हर बार शानदार रूपांतरण।",
    description: "सभी के लिए पेशेवर दस्तावेज़ रूपांतरण टूल। मुफ़्त, सुरक्षित और तेज़।",
    legal: {
      title: "कानूनी",
      privacyPolicy: "गोपनीयता नीति",
      termsOfService: "सेवा की शर्तें"
    },
    links: {
      title: "लिंक",
      aboutUs: "हमारे बारे में",
      contact: "संपर्क करें"
    },
    connect: {
      title: "जुड़ें",
      description: "प्रश्न या प्रतिक्रिया?"
    },
    copyright: "© {year} Markdown to PDF. सर्वाधिकार सुरक्षित।",
    designed: "स्पष्टता के लिए डिज़ाइन किया गया"
  },

  // Toolbar
  toolbar: {
    heading: "शीर्षक",
    bold: "बोल्ड",
    italic: "इटैलिक",
    strikethrough: "स्ट्राइकथ्रू",
    code: "कोड",
    link: "लिंक",
    image: "छवि",
    bulletList: "बुलेट सूची",
    numberedList: "क्रमांकित सूची",
    quote: "उद्धरण",
    codeBlock: "कोड ब्लॉक",
    horizontalRule: "क्षैतिज रेखा",
    undo: "पूर्ववत करें",
    redo: "फिर से करें",
    showLess: "कम दिखाएं",
    showMore: "अधिक दिखाएं",
    disableWordWrap: "वर्ड रैप अक्षम करें",
    enableWordWrap: "वर्ड रैप सक्षम करें",
    findAndReplace: "खोजें और बदलें",
    showTools: "टूल दिखाएं",
    hideTools: "टूल छुपाएं",
    exportTXT: "TXT",
    special: "विशेष",
    lineOps: "लाइन ऑपरेशन",
    focus: "फोकस",
    focused: "फोकस्ड",
    exportMarkdownLabel: "निर्यात .md",
    splitView: {
      sideBySide: "साथ-साथ",
      vertical: "ऊर्ध्वाधर",
      switchToSideBySide: "साथ-साथ दृश्य में बदलें",
      switchToVertical: "ऊर्ध्वाधर दृश्य में बदलें"
    },
    lineOpsActions: {
      duplicate: "लाइन डुप्लिकेट",
      delete: "लाइन हटाएँ",
      join: "जोड़ें",
      sortAsc: "क्रमबद्ध ↑",
      sortDesc: "क्रमबद्ध ↓",
      reverse: "उलटें",
      clean: "साफ़ करें"
    }
  },

  // Dialogs
  dialogs: {
    markdownCheatSheet: "मार्कडाउन चीट शीट",
    documentStatistics: "दस्तावेज़ आँकड़े",
    close: "बंद करें",
    focusMode: {
      title: "फ़ोकस मोड",
      enter: "फ़ोकस मोड में प्रवेश करें",
      exit: "फ़ोकस मोड से बाहर निकलें",
      description: "बिना विचलित किए लेखने का वातावरण",
      activeHint: "फोकस मोड सक्रिय - बाहर निकलने के लिए Esc दबाएँ"
    },
    markdownExport: {
      title: "Markdown निर्यात",
      description: "Markdown को .md फ़ाइल के रूप में डाउनलोड करें या क्लिपबोर्ड पर कॉपी करें",
      filenameLabel: "फ़ाइल नाम",
      filenamePlaceholder: "document",
      filenameHint: "फ़ाइल \"{filename}\" के रूप में सहेजी जाएगी",
      download: ".md डाउनलोड करें",
      copy: "क्लिपबोर्ड पर कॉपी करें",
      fileInfoTitle: "फ़ाइल जानकारी:"
    },
    wordGoal: {
      title: "शब्द लक्ष्य ट्रैकर",
      setGoal: "शब्द लक्ष्य सेट करें",
      currentWords: "वर्तमान शब्द",
      goalWords: "लक्ष्य",
      remaining: "शेष",
      progress: "प्रगति",
      achieved: "लक्ष्य पूरा हुआ! 🎉",
      doneBadge: "पूर्ण"
    },
    timeTracker: {
      title: "समय ट्रैकर",
      startTime: "शुरू करें",
      stopTime: "रोकें",
      reset: "रीसेट करें",
      totalTime: "कुल समय",
      sessions: "आज के सत्र",
      wordsPerMin: "शब्द/मिनट",
      recording: "रिकॉर्ड",
      stopped: "रुका हुआ",
      today: "आज",
      thisWeek: "इस सप्ताह",
      avgSession: "औसत सत्र",
      dailyTimeGoal: "दैनिक समय लक्ष्य",
      hours: "2 घंटे",
      recentSessions: "हाल के सत्र"
    },
    pomodoro: {
      title: "पोमोडोरो टाइमर",
      description: "केंद्रित लेखन सत्रों के लिए पोमोडोरो तकनीक का उपयोग करें",
      start: "प्रारंभ करें",
      pause: "रोकें",
      reset: "रीसेट करें",
      work: "कार्य",
      shortBreak: "छोटा ब्रेक",
      longBreak: "लंबा ब्रेक",
      sessions: "पूर्ण सत्र"
    },
    quickTemplates: {
      title: "त्वरित टेम्पलेट",
      select: "सम्मिलित करने के लिए एक टेम्पलेट चुनें"
    },
    documentTemplates: {
      title: "दस्तावेज़ टेम्पलेट",
      description: "शुरू करने के लिए एक टेम्पलेट चुनें"
    },
    performance: {
      title: "प्रदर्शन सेटिंग्स",
      debounceTime: "डाउन्स समय",
      description: "रेंडरिंग प्रदर्शन समायोजित करें"
    },
    autosave: {
      title: "ऑटो-सेव सेटिंग्स",
      interval: "सहेजने की अवधि",
      description: "स्वचालित रूप से अपना कार्य कितनी बार सहेजा जाए",
      status: {
        saved: "सहेजा गया",
        saving: "सहेज रहा है...",
        unsaved: "असहेजा परिवर्तन",
        error: "सहेजने में त्रुटि"
      }
    },
    typography: {
      title: "टाइपोग्राफी नियंत्रण",
      description: "पूर्वावलोकन पाठ की उपस्थिति अनुकूलित करें",
      fontSize: "फ़ॉन्ट आकार",
      lineHeight: "पंक्ति ऊंचाई",
      fontFamily: "फ़ॉन्ट परिवार"
    },
    snippets: {
      title: "स्निपेट लाइब्रेरी",
      description: "पुन: उपयोग योग्य मार्कडाउन पैटर्न और टेम्पलेट तक त्वरित पहुंच",
      add: "स्निपेट जोड़ें",
      save: "स्निपेट सहेजें",
      cancel: "रद्द करें",
      name: "नाम",
      content: "सामग्री"
    },
    keyboardShortcuts: {
      title: "कीबोर्ड शॉर्टकट",
      description: "इन शॉर्टकट के साथ अपने वर्कफ़्लो को गति दें"
    }
  }
}
