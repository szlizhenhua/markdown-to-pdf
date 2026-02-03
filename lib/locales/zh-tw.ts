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
    }
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
  }
}
