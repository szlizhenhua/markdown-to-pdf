export const zhCN = {
  // Header
  title: "Markdown 转 PDF 转换器",
  subtitle: "将 Markdown 转换为专业 PDF 文档",

  // Controls
  buttons: {
    upload: "上传",
    showPreview: "显示预览",
    hidePreview: "隐藏预览",
    getPDF: "获取 PDF",
    generatingPDF: "生成 PDF 中...",
    settings: "设置",
    tableOfContents: "目录",
    exportHTML: "HTML",
    exportMarkdown: "MD"
  },

  // Editor
  editor: {
    title: "Markdown 编辑器",
    placeholder: "在此输入您的 Markdown 内容...\n\n# 一级标题\n## 二级标题\n\n**粗体** 和 *斜体* 文本\n\n- 列表项 1\n- 列表项 2\n\n```javascript\nconsole.log('你好，世界！');\n```\n\n| 列 1 | 列 2 |\n|---------|----------|\n| 数据 1  | 数据 2   |",
    dragDropText: "将 Markdown 文件拖放到此处",
    dragDropSubtext: "支持 .md 和 .txt 文件",
    loading: "加载图表中...",
    rendering: "渲染图表中...",
    stats: {
      characters: "字符",
      words: "词数",
      lines: "行数",
      readingTime: "阅读时间",
      readingTimeLessThanOne: "< 1 分钟",
      readingTimeMinute: "分钟",
      readingTimeHour: "小时"
    }
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
    mermaidRendering: "渲染图表中...",
    templateLoaded: "模板已加载",
    templateLoadedMessage: "模板已应用到编辑器。",
    fileTooLarge: "文件过大。最大支持 5MB。",
    invalidFileType: "无效的文件类型。请上传 .md 或 .txt 文件。",
    fileUploadFailed: "文件上传失败。请重试。",
    fileUploaded: "文件上传成功",
    resetComplete: "重置完成",
    resetCompleteMessage: "编辑器和设置已重置为默认值。",
    copySuccess: "已复制到剪贴板",
    copyFailed: "复制到剪贴板失败",
    networkError: "网络错误。请检查您的网络连接。",
    quotaExceeded: "存储空间已满。请清除一些浏览器数据。",
    autoSaveFailed: "自动保存失败。您的更改可能无法保存。"
  },

  // Templates
  templates: {
    title: "选择模板",
    description: "从专业设计的模板中快速开始",
    selectTemplate: "点击模板将其加载到编辑器中。您当前的内容将被替换。",
    categories: {
      all: "所有模板",
      basic: "基础",
      academic: "学术",
      technical: "技术",
      documentation: "文档"
    },
    // Document templates
    blank: {
      name: "空白文档",
      description: "从空白开始"
    },
    article: {
      name: "博客文章",
      description: "标准的博客文章结构"
    },
    readme: {
      name: "README.md",
      description: "项目文档模板"
    },
    resume: {
      name: "简历/CV",
      description: "专业简历模板"
    },
    essay: {
      name: "学术论文",
      description: "结构化论文"
    },
    meeting: {
      name: "会议记录",
      description: "结构化会议记录模板"
    },
    tutorial: {
      name: "教程/指南",
      description: "分步教程模板"
    },
    simpleNotes: {
      name: "简单笔记",
      description: "基础笔记模板"
    },
    meetingNotes: {
      name: "会议记录",
      description: "结构化会议文档"
    },
    researchPaper: {
      name: "研究论文",
      description: "带引用的学术论文模板"
    },
    apiDocumentation: {
      name: "API 文档",
      description: "技术 API 参考模板"
    },
    blogPost: {
      name: "博客文章模板",
      description: "SEO 优化的博客文章模板"
    },
    productRequirements: {
      name: "产品需求",
      description: "产品经理的 PRD 模板"
    },
    templates: "模板"
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

#### 时序图 (Sequence Diagram)
\`\`\`mermaid
sequenceDiagram
    participant U as 用户
    participant W as Web 应用
    participant S as PDF 服务
    U->>W: 粘贴/编辑 Markdown
    W-->>U: 实时预览
    U->>W: 点击「获取 PDF」
    W->>S: 渲染并生成 PDF
    S-->>W: 返回 PDF
    W-->>U: 下载文件
\`\`\`

#### 甘特图 (Gantt)
\`\`\`mermaid
gantt
    title 项目计划（示例）
    dateFormat  YYYY-MM-DD
    section 规划
    需求梳理           :a1, 2026-02-01, 3d
    方案评审           :a2, 2026-02-04, 1d
    section 实现
    编辑器开发         :b1, 2026-02-05, 5d
    PDF 导出联调       :b2, 2026-02-10, 3d
\`\`\`

#### 类图 (Class Diagram)
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

#### 状态图 (State Diagram)
\`\`\`mermaid
stateDiagram-v2
    [*] --> Idle
    Idle --> Editing : 输入
    Editing --> Preview : 预览
    Preview --> Exporting : 导出
    Exporting --> Idle : 完成
\`\`\`

#### 饼图 (Pie)
\`\`\`mermaid
pie title 风险占比（示例）
    "高风险" : 15
    "中风险" : 35
    "低风险" : 50
\`\`\`

#### 思维导图 (Mindmap)
\`\`\`mermaid
mindmap
  root((风险管理))
    识别
      威胁
      机会
    评估
      影响
      概率
    应对
      减轻
      转移
      接受
\`\`\`

#### 时间线 (Timeline)
\`\`\`mermaid
timeline
    title 发布节奏（示例）
    2026-02 : v1.0 上线
    2026-03 : 模板库扩展
    2026-04 : 协作与历史
\`\`\`

#### 雷达图（自定义 Radar Chart）
\`\`\`mermaid
radar-chart
    title 团队能力雷达（示例 1）
    axis 沟通, 设计, 开发, 测试, 文档
    series 方案A [80, 70, 90, 60, 75]
    series 方案B [65, 85, 70, 80, 60]
\`\`\`

\`\`\`mermaid
radar
    title 产品指标雷达（示例 2）
    axis 速度, 稳定, 体验, 可维护
    v1 [70, 60, 80, 65]
\`\`\`

#### 象限图（自定义 Quadrant Chart）
\`\`\`mermaid
quadrant-chart
    title 风险-时机矩阵
    x-axis "风险可控性" --> "风险敏感性"
    y-axis "时机成熟度" --> "时机紧迫性"
    quadrant-1 "战略窗口区"
    quadrant-2 "观察准备区"
    quadrant-3 "谨慎规避区"
    quadrant-4 "加速布局区"
    "本土深耕": [0.75, 0.85]
    "东南亚试探": [0.45, 0.65]
    "双轨制": [0.35, 0.55]
    "竞对先发": [0.60, 0.31]
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
|------|:--------:|------|--------|
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
[开源项目](https://github.com/szlizhenhua/markdown-to-pdf)，如有问题或建议，欢迎通过以下方式联系：
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
    Made with ❤️ | 隐私优先
  </p>
  <p style="font-size: 0.8em; margin-top: 0.5em;">
    © 2025 Markdown to PDF. 保留所有权利。
  </p>
</div>`,

  // SEO
  seo: {
    title: "Markdown 转 PDF 转换器 | 专业文档导出",
    description: "将 Markdown 转换为专业 PDF 文档，支持数学公式、代码、图表、目录、主题。适合学术和商业用途的出版级输出。",
    keywords: "Markdown, PDF, 转换器, KaTeX, Mermaid, 代码高亮, 目录, 主题, 导出, 学术, 专业"
  },

  // SEO Content
  seoContent: {
    whyChooseUs: {
      label: "为什么选择我们",
      title: "为什么选择我们的 Markdown 转 PDF 转换器？",
      subtitle: "苹果般的发布体验：简洁、快速，从草稿到 PDF 始终如一的美观。",
      features: {
        privacy: {
          title: "隐私优先",
          description: "您的数据与我们在一起是安全的。所有转换都在您的浏览器本地进行。我们永远不会将您的 Markdown 文件上传到任何服务器。"
        },
        instant: {
          title: "即时转换",
          description: "无需等待队列。我们的优化引擎可即时转换您的文档，轻松支持大文件。"
        },
        richSupport: {
          title: "丰富支持",
          description: "完全支持 GFM（GitHub 风格 Markdown）、KaTeX 数学公式、Mermaid 图表和代码语法高亮。"
        }
      }
    },
    howToConvert: {
      label: "简单工作流程",
      title: "如何将 Markdown 转换为 PDF",
      subtitle: "一个平静的三步流程，旨在让您保持专注并在几秒钟内获得精美的 PDF。",
      steps: {
        step1: {
          title: "编写或粘贴 Markdown",
          description: "直接在我们的实时编辑器中输入或粘贴您现有的 Markdown 代码。您也可以拖放 .md 文件。"
        },
        step2: {
          title: "自定义样式",
          description: "从我们的专业主题（学术、现代等）中选择，并调整字体大小、边距和纸张尺寸（A4、Letter）。"
        },
        step3: {
          title: "下载 PDF",
          description: "单击导出按钮即可立即获得格式化的 PDF 文档，随时可以共享或打印。"
        }
      }
    },
    faq: {
      label: "常见问题",
      title: "常见问题解答",
      items: {
        isFree: {
          question: "这个工具是免费的吗？",
          answer: "是的，我们的 Markdown 转 PDF 转换器对个人和商业使用 100% 免费。"
        },
        dataStorage: {
          question: "你们存储我的数据吗？",
          answer: "不。我们在您的浏览器中处理所有内容。您的文档永远不会离开您的设备。"
        },
        mathSupport: {
          question: "它支持数学方程吗？",
          answer: "是的！我们使用 KaTeX 美观地渲染复杂的数学公式和方程。"
        },
        diagrams: {
          question: "我可以创建图表吗？",
          answer: "当然可以。我们支持 Mermaid.js 用于从文本创建流程图、序列图和甘特图。"
        }
      }
    },
    comprehensive: {
      title: "全面的 Markdown 解决方案",
      description1: "无论您是撰写论文的学生、记录代码的开发人员，还是起草小说的作家，我们的 Markdown 编辑器都能提供您所需的工具。凭借实时预览、字数统计和专注模式等功能，您可以无干扰地写作。",
      description2: "我们的转换器处理所有标准 Markdown 语法，包括标题、列表、链接、图像和引用块。高级用户将会欣赏对具有特定语言语法高亮的代码块、脚注和任务列表的支持。"
    }
  },

  // Footer
  footer: {
    tagline: "Markdown 转 PDF",
    subtitle: "每次转换都是优雅的。",
    description: "适合所有人的专业文档转换工具。免费、安全、快速。",
    legal: {
      title: "法律",
      privacyPolicy: "隐私政策",
      termsOfService: "服务条款"
    },
    links: {
      title: "链接",
      aboutUs: "关于我们",
      contact: "联系我们"
    },
    connect: {
      title: "联系我们",
      description: "有问题或反馈？"
    },
    copyright: "© {year} Markdown to PDF. 保留所有权利。",
    designed: "为清晰而设计"
  },

  // Toolbar
  toolbar: {
    heading: "标题",
    bold: "粗体",
    italic: "斜体",
    strikethrough: "删除线",
    code: "代码",
    link: "链接",
    image: "图片",
    bulletList: "无序列表",
    numberedList: "有序列表",
    quote: "引用",
    codeBlock: "代码块",
    horizontalRule: "水平线",
    undo: "撤销",
    redo: "重做",
    showLess: "收起",
    showMore: "展开",
    disableWordWrap: "禁用自动换行",
    enableWordWrap: "启用自动换行",
    findAndReplace: "查找和替换",
    showTools: "显示功能按钮",
    hideTools: "隐藏功能按钮",
    exportTXT: "TXT",
    special: "特殊格式",
    lineOps: "行操作",
    focus: "专注",
    focused: "专注中",
    exportMarkdownLabel: "导出 .md",
    splitView: {
      sideBySide: "并排",
      vertical: "上下",
      switchToSideBySide: "切换为并排视图",
      switchToVertical: "切换为上下视图"
    },
    lineOpsActions: {
      duplicate: "复制行",
      delete: "删除行",
      join: "合并",
      sortAsc: "升序排序",
      sortDesc: "降序排序",
      reverse: "反转",
      clean: "清理"
    }
  },

  // Dialogs
  dialogs: {
    markdownCheatSheet: "Markdown 速查表",
    documentStatistics: "文档统计",
    close: "关闭",
    focusMode: {
      title: "专注模式",
      enter: "进入专注模式",
      exit: "退出专注模式",
      description: "无干扰写作环境",
      activeHint: "专注模式已开启 - 按 Esc 退出"
    },
    markdownExport: {
      title: "导出 Markdown",
      description: "将 Markdown 下载为 .md 文件或复制到剪贴板",
      filenameLabel: "文件名",
      filenamePlaceholder: "document",
      filenameHint: "文件将保存为 \"{filename}\"",
      download: "下载 .md",
      copy: "复制到剪贴板",
      fileInfoTitle: "文件信息："
    },
    wordGoal: {
      title: "字数目标追踪",
      setGoal: "设置字数目标",
      currentWords: "当前字数",
      goalWords: "目标",
      remaining: "剩余",
      progress: "进度",
      achieved: "目标达成！🎉",
      doneBadge: "完成"
    },
    timeTracker: {
      title: "时间追踪",
      startTime: "开始",
      stopTime: "暂停",
      reset: "重置",
      totalTime: "总时间",
      sessions: "今日会话",
      wordsPerMin: "字/分钟",
      recording: "记录中",
      stopped: "已停止",
      today: "今天",
      thisWeek: "本周",
      avgSession: "平均会话",
      dailyTimeGoal: "每日时间目标",
      hours: "2 小时",
      recentSessions: "最近会话"
    },
    pomodoro: {
      title: "番茄钟计时器",
      description: "使用番茄工作法进行专注写作",
      start: "开始",
      pause: "暂停",
      reset: "重置",
      work: "工作时间",
      shortBreak: "短休息",
      longBreak: "长休息",
      sessions: "已完成会话"
    },
    quickTemplates: {
      title: "快速模板",
      select: "选择要插入的模板"
    },
    documentTemplates: {
      title: "文档模板",
      description: "选择一个模板开始"
    },
    performance: {
      title: "性能设置",
      debounceTime: "防抖时间",
      description: "调整渲染性能（值越小越快，但占用资源更多）"
    },
    autosave: {
      title: "自动保存设置",
      interval: "保存间隔",
      description: "自动保存工作的频率",
      status: {
        saved: "已保存",
        saving: "保存中...",
        unsaved: "未保存的更改",
        error: "保存失败"
      }
    },
    typography: {
      title: "排版控制",
      description: "自定义预览文本的外观",
      fontSize: "字体大小",
      lineHeight: "行高",
      fontFamily: "字体族"
    },
    snippets: {
      title: "代码片段库",
      description: "快速访问可重用的 Markdown 模式和模板",
      add: "添加片段",
      save: "保存片段",
      cancel: "取消",
      name: "名称",
      content: "内容"
    },
    keyboardShortcuts: {
      title: "键盘快捷键",
      description: "使用这些快捷键提高工作效率"
    }
  },
  quickTemplates: {
    apiEndpoint: "API 接口",
    codeSnippet: "代码片段",
    meetingNotes: "会议记录",
    bugReport: "缺陷报告",
    dailyStandup: "每日站会",
    featureRequest: "功能请求",
    codeReview: "代码评审",
    projectReadme: "项目说明"
  },
  textTransform: {
    title: "文本转换",
    close: "关闭",
    uppercase: "大写",
    lowercase: "小写",
    titleCase: "首字母大写",
    sentenceCase: "句首大写",
    camelCase: "驼峰命名",
    kebabCase: "短横线命名",
    snakeCase: "下划线命名",
    toggleCase: "切换大小写",
    capitalize: "首字母大写",
    uppercaseDesc: "转换为大写",
    lowercaseDesc: "转换为小写",
    titleCaseDesc: "每个单词首字母大写",
    sentenceCaseDesc: "仅首字母大写",
    camelCaseDesc: "转换为驼峰命名",
    kebabCaseDesc: "转换为短横线命名",
    snakeCaseDesc: "转换为下划线命名",
    toggleCaseDesc: "切换字母大小写",
    capitalizeDesc: "首字母大写"
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
    language: "语言",
    insertCodeBlock: "插入代码块",
    preview: "预览"
  },
  dateTime: {
    insertDateTime: "插入日期/时间",
    date: "日期",
    time: "时间",
    dateTime: "日期时间",
    iso8601: "ISO 8601",
    usFormat: "美国格式",
    euFormat: "欧洲格式",
    readable: "可读格式",
    cancel: "取消"
  },
  listHelper: {
    listType: "列表类型",
    bullet: "无序",
    numbered: "有序",
    numberOfItems: "项目数量",
    listItems: "列表项",
    insertList: "插入列表",
    cancel: "取消",
    item: "项目"
  },
  highlightHelper: {
    insertHighlight: "插入高亮",
    highlightText: "高亮文本",
    textToHighlight: "要高亮的文本",
    color: "颜色",
    visualOnly: "（仅视觉效果）",
    note: "注意：高亮使用 ==文本== 语法。可能不被所有 Markdown 渲染器支持。",
    cancel: "取消",
    yellow: "黄色",
    red: "红色",
    green: "绿色",
    blue: "蓝色",
    purple: "紫色",
    pink: "粉色"
  },
  helpDialog: {
    title: "Markdown 快速参考",
    close: "关闭",
    headings: "标题",
    textStyles: "文本样式",
    codeBlocks: "代码块",
    lists: "列表",
    links: "链接",
    images: "图片",
    quotes: "引用",
    tables: "表格"
  }
}
