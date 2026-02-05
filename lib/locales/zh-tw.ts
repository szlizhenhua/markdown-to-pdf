export const zhTW = {
  // Header
  title: "Markdown 轉 PDF 轉換器",
  subtitle: "將 Markdown 轉換爲專業 PDF 文檔",

  // Controls
  buttons: {
    upload: "上傳",
    showPreview: "顯示預覽",
    hidePreview: "隱藏預覽",
    getPDF: "獲取 PDF",
    generatingPDF: "生成 PDF 中...",
    settings: "設置",
    tableOfContents: "目錄",
    exportHTML: "HTML",
    exportMarkdown: "MD"
  },

  // Editor
  editor: {
    title: "Markdown 編輯器",
    placeholder: "在此輸入您的 Markdown 內容...\n\n# 一級標題\n## 二級標題\n\n**粗體** 和 *斜體* 文本\n\n- 列表項 1\n- 列表項 2\n\n```javascript\nconsole.log('你好，世界！');\n```\n\n| 列 1 | 列 2 |\n|---------|----------|\n| 數據 1  | 數據 2   |",
    dragDropText: "將 Markdown 文件拖放到此處",
    dragDropSubtext: "支持 .md 和 .txt 文件",
    loading: "加載圖表中...",
    rendering: "渲染圖表中...",
    stats: {
      characters: "字符",
      words: "詞數",
      lines: "行數",
      readingTime: "閱讀時間"
    }
  },

  // Preview
  preview: {
    title: "預覽",
    theme: "主題"
  },

  // Settings
  settings: {
    title: "設置",
    theme: "主題",
    paperSize: "紙張尺寸",
    fontSize: "字體大小"
  },

  // Table of Contents
  toc: {
    title: "目錄"
  },

  // Themes
  themes: {
    default: "默認",
    academic: "學術",
    modern: "現代",
    minimal: "極簡"
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
    pdfGenerationError: "PDF 生成失敗",
    pdfExportError: "PDF 導出失敗，請檢查控制檯查看詳情",
    mermaidRenderError: "Mermaid 渲染錯誤",
    mermaidSyntaxError: "請檢查 Mermaid 語法",
    mermaidExampleSyntax: "示例語法：",
    mermaidRenderRetry: "Mermaid 渲染嘗試 {count} 失敗，將在100ms後重試",
    mermaidFinalError: "Mermaid 渲染最終失敗",
    unknownError: "未知錯誤",
    highlightJsError: "Highlight.js 語言 \"{lang}\" 錯誤：",
    katexRenderError: "KaTeX 渲染錯誤：",
    mermaidInitError: "Mermaid 初始化錯誤：",
    mermaidLoading: "加載圖表中...",
    mermaidRendering: "渲染圖表中...",
    templateLoaded: "模板已加載",
    templateLoadedMessage: "模板已應用到編輯器。",
    fileTooLarge: "文件過大。最大支持 5MB。",
    invalidFileType: "無效的文件類型。請上傳 .md 或 .txt 文件。",
    fileUploadFailed: "文件上傳失敗。請重試。",
    fileUploaded: "文件上傳成功",
    resetComplete: "重置完成",
    resetCompleteMessage: "編輯器和設置已重置爲默認值。",
    copySuccess: "已複製到剪貼板",
    copyFailed: "複製到剪貼板失敗",
    networkError: "網絡錯誤。請檢查您的網絡連接。",
    quotaExceeded: "存儲空間已滿。請清除一些瀏覽器數據。",
    autoSaveFailed: "自動保存失敗。您的更改可能無法保存。"
  },

  // Templates
  templates: {
    title: "選擇模板",
    description: "從專業設計的模板中快速開始",
    selectTemplate: "點擊模板將其加載到編輯器中。您當前的內容將被替換。",
    categories: {
      all: "所有模板",
      basic: "基礎",
      academic: "學術",
      technical: "技術",
      documentation: "文檔"
    },
    // Document templates
    blank: {
      name: "空白文檔",
      description: "從空白開始"
    },
    article: {
      name: "博客文章",
      description: "標準博客文章結構"
    },
    readme: {
      name: "README.md",
      description: "項目文檔模板"
    },
    resume: {
      name: "簡歷/CV",
      description: "專業簡歷模板"
    },
    essay: {
      name: "學術論文",
      description: "結構化論文"
    },
    meeting: {
      name: "會議記錄",
      description: "結構化會議記錄模板"
    },
    tutorial: {
      name: "教程/指南",
      description: "分步教程模板"
    },
    templates: "模板"
  },

  quickTemplates: {
    apiEndpoint: "API 接口",
    codeSnippet: "代碼片段",
    meetingNotes: "會議記錄",
    bugReport: "缺陷報告",
    dailyStandup: "每日站會",
    featureRequest: "功能請求",
    codeReview: "代碼評審",
    projectReadme: "項目說明"
  },
  textTransform: {
    title: "文本轉換",
    close: "關閉",
    uppercase: "大寫",
    lowercase: "小寫",
    titleCase: "首字母大寫",
    sentenceCase: "句首大寫",
    camelCase: "駝峰命名",
    kebabCase: "短橫線命名",
    snakeCase: "下劃線命名",
    toggleCase: "切換大小寫",
    capitalize: "首字母大寫",
    uppercaseDesc: "轉換為大寫",
    lowercaseDesc: "轉換為小寫",
    titleCaseDesc: "每個單詞首字母大寫",
    sentenceCaseDesc: "僅首字母大寫",
    camelCaseDesc: "轉換為駝峰命名",
    kebabCaseDesc: "轉換為短橫線命名",
    snakeCaseDesc: "轉換為下劃線命名",
    toggleCaseDesc: "切換字母大小寫",
    capitalizeDesc: "首字母大寫"
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
    language: "語言",
    insertCodeBlock: "插入代碼塊",
    preview: "預覽"
  },
  dateTime: {
    insertDateTime: "插入日期/時間",
    date: "日期",
    time: "時間",
    dateTime: "日期時間",
    iso8601: "ISO 8601",
    usFormat: "美國格式",
    euFormat: "歐洲格式",
    readable: "可讀格式",
    cancel: "取消"
  },
  listHelper: {
    listType: "列表類型",
    bullet: "無序",
    numbered: "有序",
    numberOfItems: "項目數量",
    listItems: "列表項",
    insertList: "插入列表",
    cancel: "取消",
    item: "項目"
  },
  highlightHelper: {
    insertHighlight: "插入高亮",
    highlightText: "高亮文本",
    textToHighlight: "要高亮的文本",
    color: "顏色",
    visualOnly: "（僅視覺效果）",
    note: "注意：高亮使用 ==文本== 語法。可能不被所有 Markdown 渲染器支持。",
    cancel: "取消",
    yellow: "黃色",
    red: "紅色",
    green: "綠色",
    blue: "藍色",
    purple: "紫色",
    pink: "粉色"
  },

  helpDialog: {
    title: "Markdown 快速參考",
    close: "關閉",
    headings: "標題",
    textStyles: "文本樣式",
    codeBlocks: "代碼塊",
    lists: "列表",
    links: "鏈接",
    images: "圖片",
    quotes: "引用",
    tables: "表格"
  },

  // Default Content
  defaultContent: `# Markdown 轉 PDF 轉換器

> 🎯 **將您的 Markdown 文檔轉換爲專業級 PDF，支持數學公式、流程圖、代碼高亮和多種主題**

## ✨ 功能特性

### 📊 **全面的 Markdown 支持**
- **文本格式**：**粗體**、*斜體*、~~刪除線~~、\`行內代碼\`
- **標題層級**：支持 H1-H6 完整標題結構
- **列表支持**：有序列表、無序列表、任務列表
- **鏈接與圖片**：自動識別鏈接，支持圖片嵌入
- **表格**：支持對齊和複雜表格結構
- **引用**：塊引用和嵌套引用

### 🧮 **數學公式渲染 (KaTeX)**
**行內公式**：愛因斯坦質能方程 $E = mc^2$

**塊級公式**：
$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

**複雜公式**：
$$\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\cdots + x_n$$

**矩陣表示**：
$$\\begin{bmatrix}
a & b \\\\
c & d
\\end{bmatrix}$$

### 📈 **圖表繪製 (Mermaid)**

#### 流程圖
\`\`\`mermaid
graph TD
    A[開始] --> B{條件}
    B -->|是| C[執行A]
    B -->|否| D[執行B]
    C --> E[結束]
    D --> E
\`\`\`

#### 圖表
\`\`\`mermaid
graph LR
    A[用戶] --> B[系統]
    B --> A[響應]
\`\`\`

#### 時序圖 (Sequence Diagram)
\`\`\`mermaid
sequenceDiagram
    participant U as 用戶
    participant W as Web 應用
    participant S as PDF 服務
    U->>W: 貼上/編輯 Markdown
    W-->>U: 即時預覽
    U->>W: 點擊「獲取 PDF」
    W->>S: 渲染並生成 PDF
    S-->>W: 回傳 PDF
    W-->>U: 下載檔案
\`\`\`

#### 甘特圖 (Gantt)
\`\`\`mermaid
gantt
    title 專案計畫（示例）
    dateFormat  YYYY-MM-DD
    section 規劃
    需求梳理           :a1, 2026-02-01, 3d
    方案評審           :a2, 2026-02-04, 1d
    section 實作
    編輯器開發         :b1, 2026-02-05, 5d
    PDF 匯出聯調       :b2, 2026-02-10, 3d
\`\`\`

#### 類圖 (Class Diagram)
\`\`\`mermaid
classDiagram
    class MarkdownRenderer {
      +render(markdown) HTML
      +renderMermaid() void
    }
    class PdfExporter {
      +export(html) PDF
    }
    MarkdownRenderer --> PdfExporter : provides HTML
\`\`\`

#### 狀態圖 (State Diagram)
\`\`\`mermaid
stateDiagram-v2
    [*] --> Idle
    Idle --> Editing : 輸入
    Editing --> Preview : 預覽
    Preview --> Exporting : 匯出
    Exporting --> Idle : 完成
\`\`\`

#### 圓餅圖 (Pie)
\`\`\`mermaid
pie title 風險占比（示例）
    "高風險" : 15
    "中風險" : 35
    "低風險" : 50
\`\`\`

#### 心智圖 (Mindmap)
\`\`\`mermaid
mindmap
  root((風險管理))
    識別
      威脅
      機會
    評估
      影響
      機率
    應對
      減輕
      轉移
      接受
\`\`\`

#### 時間線 (Timeline)
\`\`\`mermaid
timeline
    title 發佈節奏（示例）
    2026-02 : v1.0 上線
    2026-03 : 模板庫擴展
    2026-04 : 協作與歷史
\`\`\`

#### 雷達圖（自訂 Radar Chart）
\`\`\`mermaid
radar-chart
    title 團隊能力雷達（示例 1）
    axis 溝通, 設計, 開發, 測試, 文件
    series 方案A [80, 70, 90, 60, 75]
    series 方案B [65, 85, 70, 80, 60]
\`\`\`

\`\`\`mermaid
radar
    title 產品指標雷達（示例 2）
    axis 速度, 穩定, 體驗, 可維護
    v1 [70, 60, 80, 65]
\`\`\`

#### 象限圖（自訂 Quadrant Chart）
\`\`\`mermaid
quadrant-chart
    title 風險-時機矩陣
    x-axis "風險可控性" --> "風險敏感性"
    y-axis "時機成熟度" --> "時機緊迫性"
    quadrant-1 "戰略窗口區"
    quadrant-2 "觀察準備區"
    quadrant-3 "謹慎規避區"
    quadrant-4 "加速佈局區"
    "本土深耕": [0.75, 0.85]
    "東南亞試探": [0.45, 0.65]
    "雙軌制": [0.35, 0.55]
    "競對先發": [0.60, 0.31]
\`\`\`

### 💻 **代碼高亮**

#### JavaScript 示例
\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 使用示例
console.log(fibonacci(10)); // 輸出: 55
\`\`\`

#### Python 示例
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

### 📋 **表格功能**

| 功能 | 支持狀態 | 描述 | 快捷鍵 |
|------|:--------:|------|--------|
| 數學公式 | ✅ | 完整 KaTeX 支持 | \`$...\$ |
| 流程圖 | ✅ | Mermaid 圖表 | \`mermaid |
| 代碼高亮 | ✅ | 多語言支持 | \`lang |
| 表格 | ✅ | 完整表格功能 | \| \| \| |
| 鏈接 | ✅ | 自動鏈接識別 | [text](url) |

---

## 📖 使用指南

### 🚀 **快速開始**

1. **編輯內容**
   - 在左側編輯器中輸入或粘貼 Markdown 內容
   - 支持實時預覽，所見即所得

2. **上傳文件**
   - 點擊"上傳"按鈕選擇 .md 或 .txt 文件
   - 或直接拖拽文件到編輯區域

3. **自定義樣式**
   - 選擇主題風格（默認/學術/現代/極簡）
   - 調整紙張尺寸和字體大小
   - 實時預覽效果

4. **導出 PDF**
   - 點擊"獲取 PDF"按鈕
   - 自動下載生成的 PDF 文檔
   - 文件名基於文檔標題自動生成

### ⌨️ **Markdown 語法速查**

#### 基礎語法
\`\`\`markdown
# 一級標題
## 二級標題
### 三級標題

**粗體文本** 或 __粗體文本__
*斜體文本* 或 _斜體文本_
~~刪除線~~

- 無序列表項
  - 嵌套列表項

1. 有序列表項
2. 第二項
   1. 嵌套有序項

> 引用文本
>> 嵌套引用

[鏈接文本](https://example.com)
![圖片描述](image.jpg)

\`行內代碼\`

\`\`\`language
代碼塊
\`\`\`

### 💡 **使用技巧**

1. **數學公式**
   - 使用 \`$...\` 包裹行內公式
   - 使用 \`$$...$$\` 包裹塊級公式
   - 支持完整的 LaTeX 數學語法

2. **代碼塊**
   - 指定語言以獲得語法高亮：\`\`\`javascript
   - 支持的語言：JavaScript、Python、JSON、Bash 等

3. **圖表繪製**
   - 使用 Mermaid 語法創建圖表
   - 支持多種圖表類型：流程圖、時序圖等

4. **表格格式**
   - 使用 \`|\` 分隔列
   - 使用 \`-\` 分隔表頭和內容
   - 支持對齊方式：\`:---\` (左對齊)、\`---:\` (右對齊)、\`:---:\` (居中)

---

## ❓ 常見問題 (FAQ)

### Q1: 支持哪些 Markdown 語法？
**A**: 本工具支持標準 Markdown 語法以及 GitHub Flavored Markdown (GFM) 擴展語法，包括表格、任務列表、刪除線等。此外還支持數學公式 (KaTeX) 和圖表繪製 (Mermaid)。

### Q2: 數學公式不顯示怎麼辦？
**A**: 請確保使用正確的語法：
- 行內公式：\`$公式$\`
- 塊級公式：\`$$公式$$\`
如果仍不顯示，請檢查公式語法是否正確。

### Q3: 導出的 PDF 質量如何？
**A**: 我們使用專業的 PDF 生成引擎，確保輸出質量：
- 高清矢量圖形
- 清晰的文字渲染
- 正確的頁面分頁
- 保持原始格式

### Q4: 我的數據安全嗎？
**A**: 完全安全！所有處理都在您的瀏覽器本地進行：
- 不上傳任何數據到服務器
- 不存儲您的文檔內容
- 處理完成後數據自動清除

### Q5: 支持哪些瀏覽器？
**A**: 支持所有現代瀏覽器：
- Chrome 65+
- Firefox 60+
- Safari 12+
- Edge 79+

### Q6: 如何處理大型文檔？
**A**: 對於大型文檔，建議：
- 分章節處理
- 適當調整字體大小
- 使用分頁符合理分段
- 預覽確認效果後再導出

### Q7: 導出的 PDF 文件名是什麼？
**A**: 文件名基於文檔的第一行標題自動生成，例如：
- 標題 "項目報告" → "項目報告.pdf"
- 無標題時使用 "document.pdf"

---

## 📞 技術支持

### 🔧 **技術棧**
- **Next.js** - React 框架
- **Tailwind CSS** - 樣式框架
- **Marked** - Markdown 解析器
- **KaTeX** - 數學公式渲染
- **Mermaid** - 圖表繪製
- **html2pdf.js** - PDF 生成
- **Highlight.js** - 代碼高亮

### 📧 **聯繫我們**
[開源項目](https://github.com/szlizhenhua/markdown-to-pdf)，如有問題或建議，歡迎通過以下方式聯繫：
- GitHub Issues：報告問題或請求功能
- 郵箱反饋：support@markdown-to-pdf.org

### 🔄 **更新日誌**
- **v1.0.0** - 初始版本發佈
- 支持 KaTeX 數學公式
- 支持 Mermaid 圖表
- 多主題樣式選擇
- 響應式設計優化

---

<div style="text-align: center; margin-top: 3em; padding: 2em; border-top: 1px solid #eee; color: #666;">
  <p><strong>Markdown 轉 PDF 轉換器</strong></p>
  <p>專業級 Markdown 到 PDF 轉換工具</p>
  <p style="font-size: 0.9em; margin-top: 1em;">
    Made with ❤️ | 隱私優先
  </p>
  <p style="font-size: 0.8em; margin-top: 0.5em;">
    © 2025 Markdown to PDF. 保留所有權利。
  </p>
</div>`,

  // SEO
  seo: {
    title: "Markdown 轉 PDF 轉換器 | 專業文檔導出",
    description: "將 Markdown 轉換爲專業 PDF 文檔，支持數學公式、代碼、圖表、目錄、主題。適合學術和商業用途的出版級輸出。",
    keywords: "Markdown, PDF, 轉換器, KaTeX, Mermaid, 代碼高亮, 目錄, 主題, 導出, 學術, 專業"
  },

  // SEO Content
  seoContent: {
    whyChooseUs: {
      label: "爲什麼選擇我們",
      title: "爲什麼選擇我們的 Markdown 轉 PDF 轉換器？",
      subtitle: "蘋果般的發布體驗：簡潔、快速，從草稿到 PDF 始終如一的美觀。",
      features: {
        privacy: {
          title: "隱私優先",
          description: "您的數據與我們在一起是安全的。所有轉換都在您的瀏覽器本地進行。我們永遠不會將您的 Markdown 文件上傳到任何服務器。"
        },
        instant: {
          title: "即時轉換",
          description: "無需等待隊列。我們的優化引擎可即時轉換您的文檔，輕鬆支持大文件。"
        },
        richSupport: {
          title: "豐富支持",
          description: "完全支持 GFM（GitHub 風格 Markdown）、KaTeX 數學公式、Mermaid 圖表和代碼語法高亮。"
        }
      }
    },
    howToConvert: {
      label: "簡單工作流程",
      title: "如何將 Markdown 轉換爲 PDF",
      subtitle: "一個平靜的三步流程，旨在讓您保持專注並在幾秒鐘內獲得精美的 PDF。",
      steps: {
        step1: {
          title: "編寫或粘貼 Markdown",
          description: "直接在我們的實時編輯器中輸入或粘貼您現有的 Markdown 代碼。您也可以拖放 .md 文件。"
        },
        step2: {
          title: "自定義樣式",
          description: "從我們的專業主題（學術、現代等）中選擇，並調整字體大小、邊距和紙張尺寸（A4、Letter）。"
        },
        step3: {
          title: "下載 PDF",
          description: "單擊導出按鈕即可立即獲得格式化的 PDF 文檔，隨時可以共享或打印。"
        }
      }
    },
    faq: {
      label: "常見問題",
      title: "常見問題解答",
      items: {
        isFree: {
          question: "這個工具是免費的嗎？",
          answer: "是的，我們的 Markdown 轉 PDF 轉換器對個人和商業使用 100% 免費。"
        },
        dataStorage: {
          question: "你們存儲我的數據嗎？",
          answer: "不。我們在您的瀏覽器中處理所有內容。您的文檔永遠不會離開您的設備。"
        },
        mathSupport: {
          question: "它支持數學方程嗎？",
          answer: "是的！我們使用 KaTeX 美觀地渲染複雜的數學公式和方程。"
        },
        diagrams: {
          question: "我可以創建圖表嗎？",
          answer: "當然可以。我們支持 Mermaid.js 用於從文本創建流程圖、序列圖和甘特圖。"
        }
      }
    },
    comprehensive: {
      title: "全面的 Markdown 解決方案",
      description1: "無論您是撰寫論文的學生、記錄代碼的開發人員，還是起草小說的作家，我們的 Markdown 編輯器都能提供您所需的工具。憑借實時預覽、字數統計和專注模式等功能，您可以無幹擾地寫作。",
      description2: "我們的轉換器處理所有標準 Markdown 語法，包括標題、列表、鏈接、圖像和引用塊。高級用戶將會欣賞對具有特定語言語法高亮的代碼塊、腳註和任務列表的支持。"
    }
  },

  // Footer
  footer: {
    tagline: "Markdown 轉 PDF",
    subtitle: "每次轉換都是優雅的。",
    description: "適合所有人的專業文檔轉換工具。免費、安全、快速。",
    legal: {
      title: "法律",
      privacyPolicy: "隱私政策",
      termsOfService: "服務條款"
    },
    links: {
      title: "鏈接",
      aboutUs: "關於我們",
      contact: "聯繫我們"
    },
    connect: {
      title: "聯繫我們",
      description: "有問題或反饋？"
    },
    copyright: "© {year} Markdown to PDF. 保留所有權利。",
    designed: "爲清晰而設計"
  },

  // Toolbar
  toolbar: {
    heading: "標題",
    bold: "粗體",
    italic: "斜體",
    strikethrough: "刪除線",
    code: "代碼",
    link: "鏈接",
    image: "圖片",
    bulletList: "項目符號列表",
    numberedList: "編號列表",
    quote: "引用",
    codeBlock: "代碼塊",
    horizontalRule: "水平線",
    undo: "撤銷",
    redo: "重做",
    showLess: "顯示較少",
    showMore: "顯示更多",
    disableWordWrap: "禁用自動換行",
    enableWordWrap: "啟用自動換行",
    findAndReplace: "查找和替換",
    showTools: "顯示工具",
    hideTools: "隱藏工具",
    exportTXT: "TXT",
    special: "特殊",
    lineOps: "行操作"
  },

  // Dialogs
  dialogs: {
    markdownCheatSheet: "Markdown 速查表",
    documentStatistics: "文檔統計",
    close: "關閉",
    focusMode: {
      title: "專注模式",
      enter: "進入專注模式",
      exit: "退出專注模式",
      description: "無干擾的寫作環境"
    },
    wordGoal: {
      title: "字數目標追踪器",
      setGoal: "設置字數目標",
      currentWords: "當前字數",
      goalWords: "目標",
      remaining: "剩餘",
      progress: "進度",
      achieved: "目標達成！🎉"
    },
    timeTracker: {
      title: "時間追蹤器",
      startTime: "開始",
      stopTime: "暫停",
      reset: "重置",
      totalTime: "總時間",
      sessions: "今日會話",
      wordsPerMin: "字/分鐘",
      recording: "記錄中",
      stopped: "已停止",
      today: "今天",
      thisWeek: "本週",
      avgSession: "平均會話",
      dailyTimeGoal: "每日時間目標",
      hours: "2 小時",
      recentSessions: "最近會話"
    },
    pomodoro: {
      title: "番茄工作法定時器",
      description: "使用番茄工作法進行專注寫作",
      start: "開始",
      pause: "暫停",
      reset: "重置",
      work: "工作",
      shortBreak: "短休息",
      longBreak: "長休息",
      sessions: "已完成會話"
    },
    quickTemplates: {
      title: "快速模板",
      select: "選擇要插入的模板"
    },
    documentTemplates: {
      title: "文檔模板",
      description: "選擇模板以開始使用"
    },
    performance: {
      title: "性能設置",
      debounceTime: "防抖時間",
      description: "調整渲染性能"
    },
    autosave: {
      title: "自動保存設置",
      interval: "保存間隔",
      description: "自動保存工作的頻率",
      status: {
        saved: "已保存",
        saving: "保存中...",
        unsaved: "未保存的更改",
        error: "保存失敗"
      }
    },
    typography: {
      title: "排版控制",
      description: "自定義預覽文本的外觀",
      fontSize: "字體大小",
      lineHeight: "行高",
      fontFamily: "字體系列"
    },
    snippets: {
      title: "片段庫",
      description: "快速訪問可重用的 Markdown 模式和模板",
      add: "添加片段",
      save: "保存片段",
      cancel: "取消",
      name: "名稱",
      content: "內容"
    },
    keyboardShortcuts: {
      title: "鍵盤快捷鍵",
      description: "使用這些快捷鍵提高工作效率"
    }
  }
}
