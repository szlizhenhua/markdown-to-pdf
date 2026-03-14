export const ar = {
  // Header
  title: "محول Markdown إلى PDF",
  subtitle: "تحويل Markdown إلى ملفات PDF احترافية",

  // Controls
  buttons: {
    upload: "رفع",
    showPreview: "عرض المعاينة",
    hidePreview: "إخفاء المعاينة",
    getPDF: "الحصول على PDF",
    generatingPDF: "جاري إنشاء PDF...",
    settings: "الإعدادات",
    tableOfContents: "جدول المحتويات",
    exportHTML: "HTML",
    exportMarkdown: "MD"
  },

  // Editor
  editor: {
    title: "محرر Markdown",
    placeholder: "ابدأ الكتابة هنا...\n\n# العنوان 1\n## العنوان 2\n\n**عريض** و *مائل*\n\n- بند قائمة 1\n- بند قائمة 2\n\n```javascript\nconsole.log('مرحبا بالعالم!');\n```\n\n| العمود 1 | العمود 2 |\n|---------|----------|\n| البيانات 1  | البيانات 2   |",
    dragDropText: "أسقط ملف Markdown هنا",
    dragDropSubtext: "يدعم ملفات .md و .txt",
    loading: "جاري تحميل المخطط...",
    rendering: "جاري عرض المخطط...",
    stats: {
      characters: "الأحرف",
      words: "الكلمات",
      lines: "الأسطر",
      readingTime: "وقت القراءة",
      readingTimeLessThanOne: "< 1 د",
      readingTimeMinute: "د",
      readingTimeHour: "س"
    }
  },

  // Preview
  preview: {
    title: "المعاينة",
    theme: "المظهر"
  },

  // Settings
  settings: {
    title: "الإعدادات",
    theme: "المظهر",
    paperSize: "حجم الورق",
    fontSize: "حجم الخط"
  },

  // Table of Contents
  toc: {
    title: "جدول المحتويات"
  },

  // Themes
  themes: {
    default: "الافتراضي",
    academic: "أكاديمي",
    modern: "حديث",
    minimal: "بسيط"
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
    pdfGenerationError: "فشل إنشاء PDF",
    pdfExportError: "فشل تصدير PDF، تحقق من وحدة التحكم للحصول على التفاصيل",
    mermaidRenderError: "خطأ في عرض Mermaid",
    mermaidSyntaxError: "التحقق من بناء جملة Mermaid",
    mermaidExampleSyntax: "مثال على البناء:",
    mermaidRenderRetry: "فشلت محاولة عرض Mermaid {count}، ستعاد المحاولة خلال 100ms",
    mermaidFinalError: "فشل العرض النهائي لـ Mermaid",
    unknownError: "خطأ غير معروف",
    highlightJsError: "خطأ Highlight.js للغة \"{lang}\":",
    katexRenderError: "خطأ في عرض KaTeX:",
    mermaidInitError: "خطأ في تهيئة Mermaid:",
    mermaidLoading: "جاري تحميل المخطط...",
    mermaidRendering: "جاري عرض المخطط...",
    templateLoaded: "تم تحميل القالب",
    templateLoadedMessage: "تم تطبيق القالب على المحرر.",
    fileTooLarge: "الملف كبير جداً. الحد الأقصى هو 5 ميجابايت.",
    invalidFileType: "نوع ملف غير صالح. يرجى رفع ملف .md أو .txt.",
    fileUploadFailed: "فشل رفع الملف. حاول مرة أخرى.",
    fileUploaded: "تم رفع الملف بنجاح",
    resetComplete: "إكمال إعادة التعيين",
    resetCompleteMessage: "تمت إعادة تعيين المحرر والإعدادات إلى القيم الافتراضية.",
    copySuccess: "تم النسخ إلى الحافظة",
    copyFailed: "فشل النسخ إلى الحافظة",
    networkError: "خطأ في الشبكة. تحقق من اتصالك.",
    quotaExceeded: "تم تجاوز حصة التخزين. امسح بعض بيانات المتصفح.",
    autoSaveFailed: "فشل الحفظ التلقائي. قد لا يتم حفظ التغييرات."
  },

  // Templates
  templates: {
    title: "اختيار قالب",
    description: "اختر من القوالب المصممة احترافياً للبدء بسرعة",
    selectTemplate: "انقر فوق قالب لتحميله في المحرر. سيتم استبدال المحتوى الحالي.",
    categories: {
      all: "جميع القوالب",
      basic: "أساسي",
      academic: "أكاديمي",
      technical: "تقني",
      documentation: "توثيق"
    },
    // Document templates
    blank: {
      name: "مستند فارغ",
      description: "ابدأ من صفحة فارغة"
    },
    article: {
      name: "مقالة مدونة",
      description: "هيكل مشاركة مدونة قياسي"
    },
    readme: {
      name: "README.md",
      description: "قالب توثيق المشروع"
    },
    resume: {
      name: "سيرة ذاتية/CV",
      description: "قالب سيرة ذاتية احترافي"
    },
    essay: {
      name: "مقال أكاديمي",
      description: "ورقة أكاديمية منظمة"
    },
    meeting: {
      name: "ملاحظات الاجتماع",
      description: "قالب ملاحظات اجتماع منظمة"
    },
    tutorial: {
      name: "درس تعليمي/دليل",
      description: "قالب درس تعليمي خطوة بخطوة"
    },
    simpleNotes: {
      name: "ملاحظات بسيطة",
      description: "نموذج ملاحظات أساسي"
    },
    meetingNotes: {
      name: "محضر الاجتماع",
      description: "وثائق اجتماع منظمة"
    },
    researchPaper: {
      name: "ورقة بحثية",
      description: "نموذج ورقة أكاديمية مع استشهادات"
    },
    apiDocumentation: {
      name: "وثائق API",
      description: "نموذج مرجع تقني لـ API"
    },
    blogPost: {
      name: "قالب منشور المدونة",
      description: "نموذج منشور مدونة محسن لمحركات البحث"
    },
    productRequirements: {
      name: "متطلبات المنتج",
      description: "نموذج PRD لمديري المنتجات"
    },
    templates: "القوالب"
  },

  quickTemplates: {
    apiEndpoint: "نقطة نهاية API",
    codeSnippet: "قصاصة برمجية",
    meetingNotes: "ملاحظات الاجتماع",
    bugReport: "تقرير خطأ",
    dailyStandup: "الوقوف اليومي",
    featureRequest: "طلب ميزة",
    codeReview: "مراجعة الكود",
    projectReadme: "README للمشروع"
  },
  textTransform: {
    title: "تحويل النص",
    close: "إغلاق",
    uppercase: "أحرف كبيرة",
    lowercase: "أحرف صغيرة",
    titleCase: "حالة العنوان",
    sentenceCase: "حالة الجملة",
    camelCase: "حالة الجمل",
    kebabCase: "kebab-case",
    snakeCase: "snake_case",
    toggleCase: "تبديل الحالة",
    capitalize: "تكبير الحرف الأول",
    uppercaseDesc: "تحويل إلى أحرف كبيرة",
    lowercaseDesc: "تحويل إلى أحرف صغيرة",
    titleCaseDesc: "تكبير كل كلمة",
    sentenceCaseDesc: "تكبير أول كلمة فقط",
    camelCaseDesc: "التحويل إلى camelCase",
    kebabCaseDesc: "التحويل إلى kebab-case",
    snakeCaseDesc: "التحويل إلى snake_case",
    toggleCaseDesc: "تبديل حالة الأحرف",
    capitalizeDesc: "تكبير الحرف الأول"
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
    language: "اللغة",
    insertCodeBlock: "إدراج كود",
    preview: "معاينة"
  },
  dateTime: {
    insertDateTime: "إدراج التاريخ/الوقت",
    date: "التاريخ",
    time: "الوقت",
    dateTime: "التاريخ والوقت",
    iso8601: "ISO 8601",
    usFormat: "التنسيق الأمريكي",
    euFormat: "التنسيق الأوروبي",
    readable: "مقروء",
    cancel: "إلغاء"
  },
  listHelper: {
    listType: "نوع القائمة",
    bullet: "نقطي",
    numbered: "مرقم",
    numberOfItems: "عدد العناصر",
    listItems: "عناصر القائمة",
    insertList: "إدراج قائمة",
    cancel: "إلغاء",
    item: "عنصر"
  },
  highlightHelper: {
    insertHighlight: "إدراج تمييز",
    highlightText: "تمييز النص",
    textToHighlight: "النص المميز",
    color: "اللون",
    visualOnly: "(مرئي فقط)",
    note: "ملاحظة: التمييز يستخدم بناء الجملة ==نص==. قد لا تكون مدعومة من قبل جميع عارضات Markdown.",
    cancel: "إلغاء",
    yellow: "أصفر",
    red: "أحمر",
    green: "أخضر",
    blue: "أزرق",
    purple: "بنفسجي",
    pink: "وردي"
  },

  helpDialog: {
    title: "مرجع سريع لـ Markdown",
    close: "إغلاق",
    headings: "العناوين",
    textStyles: "أنماط النص",
    codeBlocks: "كتل الكود",
    lists: "القوائم",
    links: "الروابط",
    images: "الصور",
    quotes: "الاقتباسات",
    tables: "الجداول"
  },

  // Batch Conversion
  batchConversion: {
    button: "PDF دفعي",
    buttonShort: "دفعي",
    dialogTitle: "تحويل Markdown الدفعي",
    dialogDescription: "اختر مجلدًا أو حدد ملفات .md متعددة، ثم اختر مجلد إخراج لإنشاء ملفات PDF واحدة تلو الأخرى.",
    selectFolder: "اختر مجلد",
    selectFiles: "اختر ملفات",
    outputTitle: "اختر مجلد الإخراج",
    outputDescription: "تم العثور على {count} ملف Markdown. اختر مجلد إخراج وابدأ التحويل.",
    duplicateHint: "إذا كان هناك PDF بنفس الاسم موجود بالفعل في مجلد الإخراج، سيتم إضافة لاحقة رقمية لتجنب الكتابة فوقه.",
    folderHint: "المسح التكراري للمجلد المختار والمجلدات الفرعية الخاصة به",
    filesHint: "تحديد ملفات .md متعددة في وقت واحد",
    chooseOutput: "اختر مجلد الإخراج وابدأ",
    processingTitle: "جارٍ التحويل الدفعي",
    processingDescription: "جارٍ إنشاء ملفات PDF بشكل تسلسلي. احتفظ بهذه الصفحة مفتوحة.",
    currentFile: "الملف الحالي",
    completed: "مكتمل",
    resultTitle: "اكتمل التحويل الدفعي",
    resultSummary: "{success} نجح، {failed} فشل.",
    outputFolder: "مجلد الإخراج",
    selectedFiles: "الملفات المحددة",
    failedFiles: "الملفات الفاشلة",
    moreFiles: "ملفات أخرى",
    close: "إغلاق",
    cancel: "إلغاء",
    unsupported: "هذا المتصفح لا يدعم التحويل الدفعي القائم على المجلدات. استخدم متصفح Chromium حديث مثل Chrome أو Edge.",
    noMarkdownFiles: "لم يتم العثور على ملفات Markdown في المصدر المحدد.",
    skippedFiles: "تم تخطي {count} ملف لا تستوفي المتطلبات.",
    finishedToast: "اكتمل التحويل الدفعي",
    partialFailureToast: "فشل تحويل بعض الملفات"
  },

  // Default Content
  defaultContent: `# محول Markdown إلى PDF

> 🎯 **حول مستندات Markdown إلى ملفات PDF احترافية باستخدام الصيغ الرياضية والمخططات الانسيابية وتلوين الأكواد والمظاهر المتعددة**

## ✨ الميزات

### 📊 **دعم Markdown الكامل**
- **تنسيق النص**: **عريض**، *مائل*، ~~مشطوب~~، \`كود مضمّن\`
- **مستويات العناوين**: دعم كامل لبنية العناوين H1-H6
- **القوائم**: القوائم المرقمة، القوائم غير المرقمة، قوائم المهام
- **الروابط والصور**: الاعتراف التلقائي بالروابط، دعم تضمين الصور
- **الجداول**: دعم المحاذاة وهياكل الجداول المعقدة
- **الاقتباسات**: اقتباسات الكتلة والاقتباسات المتداخلة

### 🧮 **عرض الصيغ الرياضية (KaTeX)**
**معادلة مضمّنة**: معادلة أينشتاين للكتلة والطاقة $E = mc^2$

**معادلة كتلة**:
$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

**معادلة معقدة**:
$$\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\cdots + x_n$$

**تمثيل مصفوفة**:
$$\\begin{bmatrix}
a & b \\\\
c & d
\\end{bmatrix}$$

### 📈 **رسم المخططات (Mermaid)**

#### المخطط الانسيابي
\`\`\`mermaid
graph TD
    A[البداية] --> B{الشرط}
    B -->|نعم| C[تنفيذ A]
    B -->|لا| D[تنفيذ B]
    C --> E[النهاية]
    D --> E
\`\`\`

#### مخطط الرسم البياني
\`\`\`mermaid
graph LR
    A[المستخدم] --> B[النظام]
    B --> A[الرد]
\`\`\`

#### مخطط التسلسل
\`\`\`mermaid
sequenceDiagram
    participant U as المستخدم
    participant W as تطبيق الويب
    participant S as خدمة PDF
    U->>W: لصق/تحرير Markdown
    W-->>U: معاينة مباشرة
    U->>W: انقر "الحصول على PDF"
    W->>S: عرض وتوليد PDF
    S-->>W: إرجاع PDF
    W-->>U: تحميل الملف
\`\`\`

#### مخطط جانت
\`\`\`mermaid
gantt
    title خطة المشروع (مثال)
    dateFormat  YYYY-MM-DD
    section التخطيط
    المتطلبات        :a1, 2026-02-01, 3d
    المراجعة          :a2, 2026-02-04, 1d
    section التسليم
    ميزات المحرر     :b1, 2026-02-05, 5d
    تحسين تصدير PDF   :b2, 2026-02-10, 3d
\`\`\`

#### مخطط الفئة
\`\`\`mermaid
classDiagram
    class MarkdownRenderer {
      +render(markdown) HTML
      +renderMermaid() void
    }
    class PdfExporter {
      +export(html) PDF
    }
    MarkdownRenderer --> PdfExporter : يوفر HTML
\`\`\`

#### مخطط الحالة
\`\`\`mermaid
stateDiagram-v2
    [*] --> خامل
    خامل --> التحرير : الكتابة
    التحرير --> المعاينة : معاينة
    المعاينة --> التصدير : تصدير
    التصدير --> خامل : تم
\`\`\`

#### مخطط دائري
\`\`\`mermaid
pie title توزيع المخاطر (مثال)
    "مرتفع" : 15
    "متوسط" : 35
    "منخفض" : 50
\`\`\`

#### خريطة ذهنية
\`\`\`mermaid
mindmap
  root((المخاطر))
    تحديد
      التهديدات
      الفرص
    تقييم
      الأثر
      الاحتمالية
    الاستجابة
      التخفيف
      النقل
      القبول
\`\`\`

#### الجدول الزمني
\`\`\`mermaid
timeline
    title وتيرة الإصدار (مثال)
    2026-02 : إطلاق v1.0
    2026-03 : مكتبة القوالب
    2026-04 : التعاون والسجل
\`\`\`

#### مخطط الرادار (مخصص)
\`\`\`mermaid
radar-chart
    title رادار مهارات الفريق (مثال 1)
    axis التواصل، التصميم، التطوير، ضمان الجودة، التوثيق
    series الخطة A [80, 70, 90, 60, 75]
    series الخطة B [65, 85, 70, 80, 60]
\`\`\`

\`\`\`mermaid
radar
    title رادار مقاييس المنتج (مثال 2)
    axis السرعة، الاستقرار، تجربة المستخدم، القابلية للصيانة
    v1 [70, 60, 80, 65]
\`\`\`

#### مخطط الربع (مخصص)
\`\`\`mermaid
quadrant-chart
    title مصفوفة المخاطر ضد التوقيت
    x-axis "التحكم" --> "الحساسية"
    y-axis "النضج" --> "الإلحاح"
    quadrant-1 "النافذة الاستراتيجية"
    quadrant-2 "راقب واستعد"
    quadrant-3 "تجنب"
    quadrant-4 "تسريع"
    "التعزيز المحلي": [0.75, 0.85]
    "استطلاع SEA": [0.45, 0.65]
    "المسار المزدوج": [0.35, 0.55]
    "القيادة التنافسية": [0.60, 0.31]
\`\`\`

### 💻 **تلوين الأكواد**

#### مثال JavaScript
\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// مثال على الاستخدام
console.log(fibonacci(10)); // المخرجات: 55
\`\`\`

#### مثال Python
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

### 📋 **ميزات الجدول**

| الميزة | الحالة | الوصف | الاختصار |
|---------|:------:|-------------|----------|
| الصيغ الرياضية | ✅ | دعم KaTeX الكامل | \`$...\$ |
| المخططات الانسيابية | ✅ | مخططات Mermaid | \`mermaid |
| تلوين الأكواد | ✅ | دعم متعدد اللغات | \`lang |
| الجداول | ✅ | وظائف الجدول الكاملة | \| \| \| |
| الروابط | ✅ | الاعتراف التلقائي بالروابط | [النص](url) |

---

## 📖 دليل المستخدم

### 🚀 **البدء السريع**

1. **تحرير المحتوى**
   - اكتب أو الصق محتوى Markdown في المحرر على اليسار
   - معاينة فورية مع WYSIWYG

2. **رفع الملفات**
   - انقر فوق زر "رفع" لتحديد ملفات .md أو .txt
   - أو اسحب وأفلت الملفات مباشرة في منطقة المحرر

3. **تخصيص الأنماط**
   - اختر نمط المظهر (الافتراضي/الأكاديمي/الحديث/البسيط)
   - اضبط حجم الورق وحجم الخط
   - معاينة فورية للتأثيرات

4. **تصدير PDF**
   - انقر فوق زر "الحصول على PDF"
   - تنزيل تلقائي لمستند PDF الذي تم إنشاؤه
   - يتم إنشاء اسم الملف تلقائياً بناءً على عنوان المستند

### ⌨️ **ورقة الغش لبناء جملة Markdown**

#### البناء الأساسي
\`\`\`markdown
# عنوان المستوى 1
## عنوان المستوى 2
### عنوان المستوى 3

**نص عريض** أو __نص عريض__
*نص مائل* أو _نص مائل_
~~نص مشطوب~~

- عنصر قائمة غير مرقمة
  - عنصر قائمة متداخل

1. عنصر قائمة مرقمة
2. العنصر الثاني
   1. عنصر مرقم متداخل

> نص اقتباس
>> اقتباس متداخل

[نص الرابط](https://example.com)
![وصف الصورة](صورة.jpg)

\`كود مضمّن\`

\`\`\`لغة
كتلة الكود
\`\`\`

### 💡 **نصائح الاستخدام**

1. **الصيغ الرياضية**
   - استخدم \`$...\` لالتفاف المعادلات المضمنة
   - استخدم \`$$...$$\` لالتفاف معادلات الكتلة
   - دعم كامل لبناء جملة الرياضيات LaTeX

2. **كتل الكود**
   - حدد اللغة لتلوين البناء: \`\`\`javascript
   - اللغات المدعومة: JavaScript و Python و JSON و Bash وما إلى ذلك

3. **رسم المخططات**
   - استخدم بناء جملة Mermaid لإنشاء المخططات الانسيابية والرسوم البيانية وما إلى ذلك
   - دعم أنواع مخططات متعددة: الرسم البياني والمخطط الانسيابي وما إلى ذلك

4. **تنسيق الجداول**
   - استخدم \`|\` لفصل الأعمدة
   - استخدم \`-\` لفصل العناوين والمحتوى
   - دعم المحاذاة: \`:---\` (يسار)، \`---:\` (يمين)، \`:---:\` (وسط)

---

## ❓ الأسئلة الشائعة (FAQ)

### س1: ما هي صيغ Markdown المدعومة؟
**ج**: هذه الأداة تدعم صيغة Markdown القياسية وملحقات GitHub Flavored Markdown (GFM)، بما في ذلك الجداول وقوائم المهام والنص المشطوب وما إلى ذلك. كما أنها تدعم الصيغ الرياضية (KaTeX) ورسم المخططات (Mermaid).

### س2: ماذا أفعل إذا لم يتم عرض الصيغ الرياضية؟
**ج**: تأكد من استخدام البناء الصحيح:
- المعادلات المضمنة: \`$معادلة$\`
- معادلات الكتلة: \`$$معادلة$$\`
إذا لم يتم عرضها، تحقق من صحة بناء المعادلة.

### س3: ما هي جودة ملفات PDF المُصدَّرة؟
**ج**: نستخدم محركات إنشاء PDF احترافية لضمان جودة المخرجات:
- رسومات متجهة عالية الدقة
- عرض نص واضح
- ترقيم صفحات صحيح
- الحفاظ على التنسيق الأصلي

### س4: هل بياناتي آمنة؟
**ج**: آمنة تماماً! تتم جميع المعالجات محلياً في متصفحك:
- لا يتم رفع أي بيانات إلى أي خادم
- لا يتم تخزين محتوى المستند الخاص بك
- يتم مسح البيانات تلقائياً بعد المعالجة

### س5: ما هي المتصفحات المدعومة؟
**ج**: تدعم جميع المتصفحات الحديثة:
- Chrome 65+
- Firefox 60+
- Safari 12+
- Edge 79+

### س6: كيف تتعامل مع المستندات الكبيرة؟
**ج**: بالنسبة للمستندات الكبيرة، نوصي بما يلي:
- المعالجة حسب الأقسام
- ضبط حجم الخط بشكل مناسب
- استخدام فواصل الصفحات لتقسيم معقول
- المعاينة للتأكد من التأثيرات قبل التصدير

### س7: ما هو اسم ملف PDF المُصدَّر؟
**ج**: يتم إنشاء اسم الملف تلقائياً بناءً على عنوان السطر الأول للمستند، على سبيل المثال:
- العنوان "تقرير المشروع" → "تقرير المشروع.pdf"
- استخدام "document.pdf" عند عدم وجود عنوان

---

## 📞 الدعم الفني

### 🔧 **التقنيات المستخدمة**
- **Next.js** - إطار عمل React
- **Tailwind CSS** - إطار عمل التنسيق
- **Marked** - محلل Markdown
- **KaTeX** - عرض الصيغ الرياضية
- **Mermaid** - رسم المخططات
- **html2pdf.js** - إنشاء PDF
- **Highlight.js** - تلوين الأكواد

### 📧 **اتصل بنا**
[مفتوح المصدر](https://github.com/szlizhenhua/markdown-to-pdf). للأسئلة أو الاقتراحات، يرجى الاتصال بنا عبر:
- مشاكل GitHub: الإبلاغ عن مشاكل أو طلب ميزات
- ردود الفعل عبر البريد الإلكتروني: support@markdown-to-pdf.org

### 🔄 **سجل التغييرات**
- **v1.0.0** - الإصدار الأولي
- دعم الصيغ الرياضية KaTeX
- دعم مخططات Mermaid
- اختيار أنماط مظاهر متعددة
- تحسين التصميم المتجاوب

---

<div style="text-align: center; margin-top: 3em; padding: 2em; border-top: 1px solid #eee; color: #666;">
  <p><strong>محول Markdown إلى PDF</strong></p>
  <p>أداة احترافية لتحويل Markdown إلى PDF</p>
  <p style="font-size: 0.9em; margin-top: 1em;">
    تم بقلب ❤️ | الخصوصية أولاً
  </p>
  <p style="font-size: 0.8em; margin-top: 0.5em;">
    © 2025 Markdown to PDF. جميع الحقوق محفوظة.
  </p>
</div>`,

  // SEO
  seo: {
    title: "محول Markdown إلى PDF | تصدير المستندات الاحترافي",
    description: "تحويل Markdown إلى مستندات PDF احترافية باستخدام الرياضيات والأكواد والمخططات وجدول المحتويات والمظاهر. مخرجات جودة النشر للاستخدام الأكاديمي والتجاري.",
    keywords: "Markdown, PDF, محول, KaTeX, Mermaid, تلوين الأكواد, جدول المحتويات, المظاهر, التصدير, أكاديمي, احترافي"
  },

  // SEO Content
  seoContent: {
    whyChooseUs: {
      label: "لماذا تختارنا",
      title: "لماذا تستخدم محول Markdown إلى PDF الخاص بنا؟",
      subtitle: "تجربة تشبه Apple للنشر: نظيفة وسريعة وجميلة بشكل متسق من المسودة إلى PDF.",
      features: {
        privacy: {
          title: "التركيز على الخصوصية",
          description: "بياناتك آمنة معنا. تحدث جميع التحويلات محليًا في متصفحك. نقوم أبدًا بتحميل ملفات Markdown الخاصة بك إلى أي خادم."
        },
        instant: {
          title: "تحويل فوري",
          description: "لا توجد قوائم انتظار. يقوم محركنا المحسن بتحويل مستنداتك على الفور مع دعم الملفات الكبيرة بسهولة."
        },
        richSupport: {
          title: "دعم غني",
          description: "دعم كامل لـ GFM (GitHub Flavored Markdown) ومعادلات KaTeX الرياضية ومخططات Mermaid وتلوين بناء جملة الكود."
        }
      }
    },
    howToConvert: {
      label: "سير عمل بسيط",
      title: "كيفية تحويل Markdown إلى PDF",
      subtitle: "تدفق هادئ من ثلاث خطوات مصمم للحفاظ على تركيزك والحصول على PDF منمق في ثوانٍ.",
      steps: {
        step1: {
          title: "اكتب أو الصق Markdown",
          description: "اكتب مباشرة في محررنا المباشر أو الصق كود Markdown الموجود لديك. يمكنك أيضًا سحب وإفلات ملفات .md."
        },
        step2: {
          title: "تخصيص النمط",
          description: "اختر من بين سماتنا الاحترافية (أكاديمي ، حديث ، إلخ) واضبط أحجام الخطوط والهوامش وحجم الورق (A4 ، Letter)."
        },
        step3: {
          title: "تحميل PDF",
          description: "انقر فوق زر التصدير للحصول على مستند PDF منسق على الفور جاهز للمشاركة أو الطباعة."
        }
      }
    },
    faq: {
      label: "الأسئلة الشائعة",
      title: "الأسئلة المتداولة",
      items: {
        isFree: {
          question: "هل هذه الأداة مجانية؟",
          answer: "نعم ، محول Markdown إلى PDF الخاص بنا مجاني 100٪ للاستخدام الشخصي والتجاري."
        },
        dataStorage: {
          question: "هل تقومون بتخزين بياناتي؟",
          answer: "لا. نعالج كل شيء في متصفحك. لا تغادر مستنداتك جهازك أبدًا."
        },
        mathSupport: {
          question: "هل يدعم المعادلات الرياضية؟",
          answer: "نعم! نستخدم KaTeX لعرض الصيغ والمعادلات الرياضية المعقدة بشكل جميل."
        },
        diagrams: {
          question: "هل يمكنني إنشاء مخططات؟",
          answer: "بالتأكيد. ندعم Mermaid.js لإنشاء المخططات الانسيابية ومخططات التسلسل ومخططات جانت من النص."
        }
      }
    },
    comprehensive: {
      title: "حل شامل لـ Markdown",
      description1: "سواء كنت طالبًا تكتب أطروحة أو مطورًا يوثق الكود أو كاتبًا يكتب رواية ، يوفر محرر Markdown الخاص بنا الأدوات التي تحتاجها. مع ميزات مثل المعاينة المباشرة وتتبع عدد الكلمات وضع التركيز ، يمكنك الكتابة دون تشتيت.",
      description2: "يعالج المحول الخاص بنا جميع بناء جملة Markdown القياسية بما في ذلك العناوين والقوائم والروابط والصور وكتل الاقتباس. سيقدر المستخدمون المتقدمون دعم كتل الكود مع تمييز بناء جملة خاص باللغة والحواشي السفلية وقوائم المهام."
    }
  },

  // Footer
  footer: {
    tagline: "Markdown إلى PDF",
    subtitle: "تحويلات أنيقة في كل مرة.",
    description: "أداة تحويل المستندات الاحترافية للجميع. مجانية وآمنة وسريعة.",
    legal: {
      title: "قانوني",
      privacyPolicy: "سياسة الخصوصية",
      termsOfService: "شروط الخدمة"
    },
    links: {
      title: "روابط",
      aboutUs: "من نحن",
      contact: "اتصل"
    },
    connect: {
      title: "تواصل",
      description: "هل لديك أسئلة أو ملاحظات؟"
    },
    copyright: "© {year} Markdown to PDF. جميع الحقوق محفوظة.",
    designed: "مصمم للوضوح"
  },

  // Toolbar
  toolbar: {
    heading: "العنوان",
    bold: "عريض",
    italic: "مائل",
    strikethrough: "مشطوب",
    code: "كود",
    link: "رابط",
    image: "صورة",
    bulletList: "قائمة نقطية",
    numberedList: "قائمة مرقمة",
    quote: "اقتباس",
    codeBlock: "كتلة الكود",
    horizontalRule: "خط أفقي",
    undo: "تراجع",
    redo: "إعادة",
    showLess: "عرض أقل",
    showMore: "عرض المزيد",
    disableWordWrap: "تعطيل التفاف الكلمات",
    enableWordWrap: "تمكين التفاف الكلمات",
    findAndReplace: "البحث والاستبدال",
    showTools: "عرض الأدوات",
    hideTools: "إخفاء الأدوات",
    exportTXT: "TXT",
    special: "خاص",
    lineOps: "عمليات السطر",
    focus: "تركيز",
    focused: "قيد التركيز",
    exportMarkdownLabel: "تصدير .md",
    splitView: {
      sideBySide: "جنبًا إلى جنب",
      vertical: "عمودي",
      switchToSideBySide: "التبديل إلى عرض جنبًا إلى جنب",
      switchToVertical: "التبديل إلى العرض العمودي"
    },
    lineOpsActions: {
      duplicate: "تكرار السطر",
      delete: "حذف السطر",
      join: "دمج",
      sortAsc: "فرز ↑",
      sortDesc: "فرز ↓",
      reverse: "عكس",
      clean: "تنظيف"
    }
  },

  // Dialogs
  dialogs: {
    markdownCheatSheet: "ورقة غش Markdown",
    documentStatistics: "إحصائيات المستند",
    close: "إغلاق",
    focusMode: {
      title: "وضع التركيز",
      enter: "دخول وضع التركيز",
      exit: "خروج وضع التركيز",
      description: "بيئة كتابة بدون تشتيت",
      activeHint: "وضع التركيز نشط - اضغط Esc للخروج"
    },
    markdownExport: {
      title: "تصدير Markdown",
      description: "قم بتنزيل markdown كملف .md أو نسخه إلى الحافظة",
      filenameLabel: "اسم الملف",
      filenamePlaceholder: "document",
      filenameHint: "سيتم حفظ الملف باسم \"{filename}\"",
      download: "تنزيل .md",
      copy: "نسخ إلى الحافظة",
      fileInfoTitle: "معلومات الملف:"
    },
    wordGoal: {
      title: "متتبع هدف الكلمات",
      setGoal: "تعيين هدف الكلمات",
      currentWords: "الكلمات الحالية",
      goalWords: "الهدف",
      remaining: "المتبقي",
      progress: "التقدم",
      achieved: "تم تحقيق الهدف! 🎉",
      doneBadge: "تم"
    },
    timeTracker: {
      title: "متتبع الوقت",
      startTime: "بدء",
      stopTime: "إيقاف",
      reset: "إعادة تعيين",
      totalTime: "الوقت الإجمالي",
      sessions: "جلسات اليوم",
      wordsPerMin: "كلمة/دقيقة",
      recording: "تسجيل",
      stopped: "متوقف",
      today: "اليوم",
      thisWeek: "هذا الأسبوع",
      avgSession: "الجلسة المتوسطة",
      dailyTimeGoal: "الهدف اليومي للوقت",
      hours: "2 ساعات",
      recentSessions: "الجلسات الأخيرة"
    },
    pomodoro: {
      title: "مؤقت بومودورو",
      description: "استخدم تقنية بومودورو لجلسات كتابة مركزة",
      start: "بدء",
      pause: "إيقاف مؤقت",
      reset: "إعادة تعيين",
      work: "العمل",
      shortBreak: "استراحة قصيرة",
      longBreak: "استراحة طويلة",
      sessions: "الجلسات المكتملة"
    },
    quickTemplates: {
      title: "قوالب سريعة",
      select: "تحديد قالب لإدراجه"
    },
    documentTemplates: {
      title: "قوالب المستندات",
      description: "اختر قالبًا للبدء"
    },
    performance: {
      title: "إعدادات الأداء",
      debounceTime: "وقت debounce",
      description: "ضبط أداء العرض"
    },
    autosave: {
      title: "إعدادات الحفظ التلقائي",
      interval: "فترة الحفظ",
      description: "معدل حفظ عملك تلقائيًا",
      status: {
        saved: "تم الحفظ",
        saving: "جاري الحفظ...",
        unsaved: "تغييرات غير محفوظة",
        error: "فشل الحفظ"
      }
    },
    typography: {
      title: "تحكمات الطباعة",
      description: "تخصيص مظهر نص المعاينة",
      fontSize: "حجم الخط",
      lineHeight: "ارتفاع السطر",
      fontFamily: "عائلة الخط"
    },
    snippets: {
      title: "مكتبة القصاصات",
      description: "الوصول السريع إلى أنماط وقوالب Markdown القابلة لإعادة الاستخدام",
      add: "إضافة قصاصة",
      save: "حفظ القصاصة",
      cancel: "إلغاء",
      name: "الاسم",
      content: "المحتوى"
    },
    keyboardShortcuts: {
      title: "اختصارات لوحة المفاتيح",
      description: "عجّل سير العمل الخاص بك بهذه الاختصارات"
    }
  }
}
