export const zh = {
  // Header
  title: "Markdown 转 PDF 转换器",
  subtitle: "将 Markdown 转换为专业 PDF 文档",

  // Controls
  buttons: {
    upload: "上传",
    showPreview: "显示预览",
    hidePreview: "隐藏预览",
    getPDF: "获取 PDF",
    settings: "设置",
    tableOfContents: "目录"
  },

  // Editor
  editor: {
    title: "Markdown 编辑器",
    placeholder: "在此输入您的 Markdown 内容...",
    dragDropText: "将 Markdown 文件拖放到此处",
    dragDropSubtext: "支持 .md 和 .txt 文件",
    loading: "加载图表中...",
    rendering: "渲染图表中..."
  },

  // Preview
  preview: {
    title: "预览",
    theme: "主题"
  },

  // Settings
  settings: {
    title: "设置",
    theme: "主题",
    paperSize: "纸张尺寸",
    fontSize: "字体大小"
  },

  // Table of Contents
  toc: {
    title: "目录"
  },

  // Themes
  themes: {
    default: "默认",
    academic: "学术",
    modern: "现代",
    minimal: "极简"
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
    pdfGenerationError: "PDF 生成失败",
    pdfExportError: "PDF 导出失败，请检查控制台查看详情",
    mermaidRenderError: "Mermaid 渲染错误",
    mermaidSyntaxError: "请检查 Mermaid 语法",
    mermaidExampleSyntax: "示例语法：",
    mermaidRenderRetry: "Mermaid 渲染尝试 {count} 失败，将在100ms后重试",
    mermaidFinalError: "Mermaid 渲染最终失败",
    unknownError: "未知错误",
    highlightJsError: "Highlight.js 语言 \"{lang}\" 错误：",
    katexRenderError: "KaTeX 渲染错误：",
    mermaidInitError: "Mermaid 初始化错误：",
    mermaidLoading: "加载图表中...",
    mermaidRendering: "渲染图表中..."
  },

  // Default Content
  defaultContent: `# Markdown 转 PDF 转换器

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
graph TD
    A[开始] --> B{条件}
    B -->|是| C[执行A]
    B -->|否| D[执行B]
    C --> E[结束]
    D --> E
\`\`\`

#### 图表
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

### 💡 **使用技巧**

1. **数学公式**
   - 使用 \`$...\` 包裹行内公式
   - 使用 \`$$...$$\` 包裹块级公式
   - 支持完整的 LaTeX 数学语法

2. **代码块**
   - 指定语言以获得语法高亮：\`\`\`javascript
   - 支持的语言：JavaScript、Python、JSON、Bash 等

3. **图表绘制**
   - 使用 Mermaid 语法创建图表
   - 支持多种图表类型：流程图、时序图等

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

### Q3: 导出的 PDF 质量如何？
**A**: 我们使用专业的 PDF 生成引擎，确保输出质量：
- 高清矢量图形
- 清晰的文字渲染
- 正确的页面分页
- 保持原始格式

### Q4: 我的数据安全吗？
**A**: 完全安全！所有处理都在您的浏览器本地进行：
- 不上传任何数据到服务器
- 不存储您的文档内容
- 处理完成后数据自动清除

### Q5: 支持哪些浏览器？
**A**: 支持所有现代浏览器：
- Chrome 65+
- Firefox 60+
- Safari 12+
- Edge 79+

### Q6: 如何处理大型文档？
**A**: 对于大型文档，建议：
- 分章节处理
- 适当调整字体大小
- 使用分页符合理分段
- 预览确认效果后再导出

### Q7: 导出的 PDF 文件名是什么？
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
</div>`,

  // SEO
  seo: {
    title: "Markdown 转 PDF 转换器 | 专业文档导出",
    description: "将 Markdown 转换为专业 PDF 文档，支持数学公式、代码、图表、目录、主题。适合学术和商业用途的出版级输出。",
    keywords: "Markdown, PDF, 转换器, KaTeX, Mermaid, 代码高亮, 目录, 主题, 导出, 学术, 专业"
  }
}