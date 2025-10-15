export const defaultContent = {
  en: `# Markdown to PDF Converter

> 🎯 **Convert your Markdown documents to professional PDFs with math formulas, flowcharts, code highlighting, and multiple themes**

## ✨ Features

### 📊 **Complete Markdown Support**
- **Text Formatting**: **Bold**, *Italic*, ~~Strikethrough~~, \`Inline code\`
- **Heading Levels**: Full H1-H6 heading structure support
- **Lists**: Ordered lists, unordered lists, task lists
- **Links & Images**: Automatic link recognition, image embedding support
- **Tables**: Support for alignment and complex table structures
- **Quotes**: Block quotes and nested quotes

### 🧮 **Math Formula Rendering (KaTeX)**
**Inline Formula**: Einstein's mass-energy equation $E = mc^2$

**Block Formula**:
$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

**Complex Formula**:
$$\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\cdots + x_n$$

**Matrix Representation**:
$$\\begin{bmatrix}
a & b \\\\
c & d
\\end{bmatrix}$$

### 📈 **Diagram Drawing (Mermaid)**

#### Flowchart
\`\`\`mermaid
graph TD
    A[Start] --> B{Condition}
    B -->|Yes| C[Execute A]
    B -->|No| D[Execute B]
    C --> E[End]
    D --> E
\`\`\`

#### Graph Diagram
\`\`\`mermaid
graph LR
    A[User] --> B[System]
    B --> A[Response]
\`\`\`

### 💻 **Code Highlighting**

#### JavaScript Example
\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Usage example
console.log(fibonacci(10)); // Output: 55
\`\`\`

#### Python Example
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

### 📋 **Table Features**

| Feature | Status | Description | Shortcut |
|---------|--------|-------------|----------|
| Math Formulas | ✅ | Full KaTeX support | \`$...\$ |
| Flowcharts | ✅ | Mermaid diagrams | \`mermaid |
| Code Highlighting | ✅ | Multi-language support | \`lang |
| Tables | ✅ | Complete table functionality | \| \| \| |
| Links | ✅ | Automatic link recognition | [text](url) |

### 🎨 **Theme Styles**
- **Default**: Clean and professional default theme
- **Academic**: Formal style suitable for academic papers
- **Modern**: Contemporary design style
- **Minimal**: Minimalist design

### 📄 **Page Settings**
- **Paper Sizes**: A4, Letter, Legal
- **Font Sizes**: Adjustable from 10pt to 16pt
- **Auto Pagination**: Smart content split to avoid truncation

---

## 📖 User Guide

### 🚀 **Quick Start**

1. **Edit Content**
   - Type or paste Markdown content in the left editor
   - Real-time preview with WYSIWYG

2. **Upload Files**
   - Click "Upload" button to select .md or .txt files
   - Or drag and drop files directly into the editor area

3. **Customize Styles**
   - Choose theme style (Default/Academic/Modern/Minimal)
   - Adjust paper size and font size
   - Real-time preview of effects

4. **Export PDF**
   - Click "Get PDF" button
   - Automatically download generated PDF document
   - Filename auto-generated based on document title

### ⌨️ **Markdown Syntax Cheat Sheet**

#### Basic Syntax
\`\`\`markdown
# Level 1 Heading
## Level 2 Heading
### Level 3 Heading

**Bold text** or __Bold text__
*Italic text* or _Italic text__
~~Strikethrough~~

- Unordered list item
  - Nested list item

1. Ordered list item
2. Second item
   1. Nested ordered item

> Quote text
>> Nested quote

[Link text](https://example.com)
![Image description](image.jpg)

\`Inline code\`

\`\`\`language
Code block
\`\`\`

### 💡 **Usage Tips**

1. **Math Formulas**
   - Use \`$...\` to wrap inline formulas
   - Use \`$$...$$\` to wrap block formulas
   - Full LaTeX math syntax supported

2. **Code Blocks**
   - Specify language for syntax highlighting: \`\`\`javascript
   - Supported languages: JavaScript, Python, JSON, Bash, etc.

3. **Diagram Drawing**
   - Use Mermaid syntax to create flowcharts, graphs, etc.
   - Support for multiple diagram types: graph, flowchart, etc.

4. **Table Formatting**
   - Use \`|\` to separate columns
   - Use \`-\` to separate headers and content
   - Support for alignment: \`:---\` (left), \`---:\` (right), \`:---:\` (center)

---

## ❓ Frequently Asked Questions (FAQ)

### Q1: What Markdown syntax is supported?
**A**: This tool supports standard Markdown syntax and GitHub Flavored Markdown (GFM) extensions, including tables, task lists, strikethrough, etc. It also supports math formulas (KaTeX) and diagram drawing (Mermaid).

### Q2: What to do if math formulas don't display?
**A**: Please ensure you use the correct syntax:
- Inline formulas: \`$formula$\`
- Block formulas: \`$$formula$$\`
If still not displaying, please check if the formula syntax is correct.

### Q3: Can I customize styles?
**A**: Yes, we provide four preset themes:
- **Default**: Clean and professional
- **Academic**: Academic style
- **Modern**: Modern design
- **Minimal**: Minimalist style

You can also adjust paper sizes (A4/Letter/Legal) and font sizes (10-16pt).

### Q4: How is the quality of exported PDFs?
**A**: We use professional PDF generation engines to ensure output quality:
- High-definition vector graphics
- Clear text rendering
- Correct page pagination
- Maintain original formatting

### Q5: Is my data secure?
**A**: Completely secure! All processing is done locally in your browser:
- No data uploaded to any server
- No storage of your document content
- Data automatically cleared after processing

### Q6: Which browsers are supported?
**A**: Supports all modern browsers:
- Chrome 65+
- Firefox 60+
- Safari 12+
- Edge 79+

### Q7: How to handle large documents?
**A**: For large documents, we recommend:
- Process in sections
- Adjust font size appropriately
- Use page breaks for reasonable segmentation
- Preview to confirm effects before export

### Q8: What is the exported PDF filename?
**A**: Filename is auto-generated based on the first line title of the document, for example:
- Title "Project Report" → "Project Report.pdf"
- Use "document.pdf" when no title

---

## 📞 Technical Support

### 🔧 **Tech Stack**
- **Next.js** - React framework
- **Tailwind CSS** - Styling framework
- **Marked** - Markdown parser
- **KaTeX** - Math formula rendering
- **Mermaid** - Diagram drawing
- **html2pdf.js** - PDF generation
- **Highlight.js** - Code highlighting

### 📧 **Contact Us**
For questions or suggestions, please contact us through:
- GitHub Issues: Report issues or request features
- Email feedback: support@markdown-to-pdf.org

### 🔄 **Changelog**
- **v1.0.0** - Initial release
- KaTeX math formula support
- Mermaid diagram support
- Multiple theme style selection
- Responsive design optimization

---

<div style="text-align: center; margin-top: 3em; padding: 2em; border-top: 1px solid #eee; color: #666;">
  <p><strong>Markdown to PDF Converter</strong></p>
  <p>Professional Markdown to PDF Conversion Tool</p>
  <p style="font-size: 0.9em; margin-top: 1em;">
    Made with ❤️ | Open Source | Privacy First
  </p>
  <p style="font-size: 0.8em; margin-top: 0.5em;">
    © 2024 Markdown to PDF. All rights reserved.
  </p>
</div>`,

  zh: `# Markdown 转 PDF 转换器

> 🎯 **将您的 Markdown 文档转换为专业级 PDF，支持数学公式、流程图、代码高亮和多种主题**

## ✨ 功能特性

### 📊 **全面的 Markdown 支持**
- **文本格式**：**粗体**、*斜体*、~~删除线~~、\`行内代码\`
- **标题层级**：支持 H1-H6 完整标题结构
- **列表支持**：有序列表、无序列表、任务列表
- **链接与图片**：自动识别链接，支持图片嵌入
- **表格**：支持对齐和复杂表格结构
- **引用**：块引用和嵌套引用

### 🧮 **数学公式渲染 (KaTeX)**
**行内公式**：爱因斯坦质能方程 $E = mc^2$

**块级公式**：
$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

**复杂公式**：
$$\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\cdots + x_n$$

**矩阵表示**：
$$\\begin{bmatrix}
a & b \\\\
c & d
\\end{bmatrix}$$

### 📈 **图表绘制 (Mermaid)**

#### 流程图
\`\`\`mermaid
graph LR
    A[用户] --> B[系统]
    B --> A[响应]
\`\`\`

### 💻 **代码高亮**

#### JavaScript 示例
\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 使用示例
console.log(fibonacci(10)); // 输出: 55
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

| 功能 | 支持状态 | 描述 | 快捷键 |
|------|----------|------|--------|
| 数学公式 | ✅ | 完整 KaTeX 支持 | \`$...\$ |
| 流程图 | ✅ | Mermaid 图表 | \`mermaid |
| 代码高亮 | ✅ | 多语言支持 | \`lang |
| 表格 | ✅ | 完整表格功能 | \| \| \| |
| 链接 | ✅ | 自动链接识别 | [text](url) |

### 🎨 **主题样式**
- **Default**：简洁专业的默认主题
- **Academic**：适合学术论文的正式风格
- **Modern**：现代设计风格
- **Minimal**：极简主义设计

### 📄 **页面设置**
- **纸张尺寸**：A4、Letter、Legal
- **字体大小**：10pt - 16pt 可调
- **自动分页**：智能避免内容截断

---

## 📖 使用指南

### 🚀 **快速开始**

1. **编辑内容**
   - 在左侧编辑器中输入或粘贴 Markdown 内容
   - 支持实时预览，所见即所得

2. **上传文件**
   - 点击"上传"按钮选择 .md 或 .txt 文件
   - 或直接拖拽文件到编辑区域

3. **自定义样式**
   - 选择主题风格（默认/学术/现代/极简）
   - 调整纸张尺寸和字体大小
   - 实时预览效果

4. **导出 PDF**
   - 点击"获取 PDF"按钮
   - 自动下载生成的 PDF 文档
   - 文件名基于文档标题自动生成

### ⌨️ **Markdown 语法速查**

#### 基础语法
\`\`\`markdown
# 一级标题
## 二级标题
### 三级标题

**粗体文本** 或 __粗体文本__
*斜体文本* 或 _斜体文本_
~~删除线~~

- 无序列表项
  - 嵌套列表项

1. 有序列表项
2. 第二项
   1. 嵌套有序项

> 引用文本
>> 嵌套引用

[链接文本](https://example.com)
![图片描述](image.jpg)

\`行内代码\`

\`\`\`language
代码块
\`\`\`
\`\`\`

### 💡 **使用技巧**

1. **数学公式**
   - 使用 \`$...\` 包裹行内公式
   - 使用 \`$$...$$\` 包裹块级公式
   - 支持完整的 LaTeX 数学语法

2. **代码块**
   - 指定语言以获得语法高亮：\`\`\`javascript
   - 支持的语言：JavaScript、Python、JSON、Bash 等

3. **图表绘制**
   - 使用 Mermaid 语法创建流程图、时序图等
   - 支持多种图表类型：graph、sequence、gantt 等

4. **表格格式**
   - 使用 \`|\` 分隔列
   - 使用 \`-\` 分隔表头和内容
   - 支持对齐方式：\`:---\` (左对齐)、\`---:\` (右对齐)、\`:---:\` (居中)

---

## ❓ 常见问题 (FAQ)

### Q1: 支持哪些 Markdown 语法？
**A**: 本工具支持标准 Markdown 语法以及 GitHub Flavored Markdown (GFM) 扩展语法，包括表格、任务列表、删除线等。此外还支持数学公式 (KaTeX) 和图表绘制 (Mermaid)。

### Q2: 数学公式不显示怎么办？
**A**: 请确保使用正确的语法：
- 行内公式：\`$公式$\`
- 块级公式：\`$$公式$$\`
如果仍不显示，请检查公式语法是否正确。

### Q3: 可以自定义样式吗？
**A**: 是的，我们提供四种预设主题：
- **Default**：简洁专业
- **Academic**：学术风格
- **Modern**：现代设计
- **Minimal**：极简风格

您还可以调整纸张尺寸 (A4/Letter/Legal) 和字体大小 (10-16pt)。

### Q4: 导出的 PDF 质量如何？
**A**: 我们使用专业的 PDF 生成引擎，确保输出质量：
- 高清矢量图形
- 清晰的文字渲染
- 正确的页面分页
- 保持原始格式

### Q5: 我的数据安全吗？
**A**: 完全安全！所有处理都在您的浏览器本地进行：
- 不上传任何数据到服务器
- 不存储您的文档内容
- 处理完成后数据自动清除

### Q6: 支持哪些浏览器？
**A**: 支持所有现代浏览器：
- Chrome 65+
- Firefox 60+
- Safari 12+
- Edge 79+

### Q7: 如何处理大型文档？
**A**: 对于大型文档，建议：
- 分章节处理
- 适当调整字体大小
- 使用分页符合理分段
- 预览确认效果后再导出

### Q8: 导出的 PDF 文件名是什么？
**A**: 文件名基于文档的第一行标题自动生成，例如：
- 标题 "项目报告" → "项目报告.pdf"
- 无标题时使用 "document.pdf"

---

## 📞 技术支持

### 🔧 **技术栈**
- **Next.js** - React 框架
- **Tailwind CSS** - 样式框架
- **Marked** - Markdown 解析器
- **KaTeX** - 数学公式渲染
- **Mermaid** - 图表绘制
- **html2pdf.js** - PDF 生成
- **Highlight.js** - 代码高亮

### 📧 **联系我们**
如有问题或建议，欢迎通过以下方式联系：
- GitHub Issues：报告问题或请求功能
- 邮箱反馈：support@markdown-to-pdf.org

### 🔄 **更新日志**
- **v1.0.0** - 初始版本发布
- 支持 KaTeX 数学公式
- 支持 Mermaid 图表
- 多主题样式选择
- 响应式设计优化

---

<div style="text-align: center; margin-top: 3em; padding: 2em; border-top: 1px solid #eee; color: #666;">
  <p><strong>Markdown 转 PDF 转换器</strong></p>
  <p>专业级 Markdown 到 PDF 转换工具</p>
  <p style="font-size: 0.9em; margin-top: 1em;">
    Made with ❤️ | 开源项目 | 隐私优先
  </p>
  <p style="font-size: 0.8em; margin-top: 0.5em;">
    © 2024 Markdown to PDF. 保留所有权利。
  </p>
</div>`
}