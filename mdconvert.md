# Markdown 转换与渲染模块（mdconvert）

本项目将 Markdown 预处理与 Mermaid 渲染抽成了可复用模块，包含：
- 处理多重 ```markdown 包裹的内容
- 识别/修复表格解析
- Mermaid 渲染（含 radar / quadrant 兼容与失败降级）
- 纯文本摘要用的 stripMarkdown

适用于需要在 React/Next.js 前端中渲染复杂 Markdown 内容的场景。

---

## 模块位置

- Markdown 预处理 + Mermaid 渲染：`lib/markdownRender.ts`
- 文本摘要工具：`lib/markdownUtils.ts`

---

## 依赖

- `marked`（用于 Markdown 转 HTML）
- `mermaid`（用于图表渲染）

示例依赖（package.json）：
```json
{
  "dependencies": {
    "marked": "^12.0.2",
    "mermaid": "^10.9.5"
  }
}
```

---

## 核心 API

### preprocessMarkdown(content)
- 作用：
  - 展开外层 ```markdown / ```md / ```text 等包裹
  - 保留内部多层代码块
  - 修正“无语言代码块中的表格”被错误渲染的问题
- 返回：预处理后的 Markdown 字符串

### renderMermaidInContainer(root)
- 作用：
  - 在指定 DOM 节点内自动查找可渲染 Mermaid 的代码块
  - 支持 `radar-chart` / `quadrant-chart` 的自定义 SVG 兼容
  - 其他 Mermaid 图表使用官方渲染
  - 渲染失败时自动降级为代码块展示
- 参数：
  - `root`: DOM Element（渲染区域容器）

### stripMarkdown(value)
- 作用：
  - 去除 Markdown 标记，生成摘要用纯文本
- 返回：纯文本字符串

---

## 使用示例（React / Next.js）

### 1) Markdown 预处理 + HTML 渲染
```js
import { marked } from 'marked';
import { preprocessMarkdown } from '../lib/markdownRender';

const html = marked.parse(preprocessMarkdown(markdownText));
```

### 2) Mermaid 渲染
```js
import { useEffect, useRef } from 'react';
import { renderMermaidInContainer } from '../lib/markdownRender';

const ref = useRef(null);

useEffect(() => {
  if (!ref.current) return;
  renderMermaidInContainer(ref.current);
}, [html]);
```

### 3) 摘要文本
```js
import { stripMarkdown } from '../lib/markdownUtils';

const preview = stripMarkdown(markdownText).slice(0, 120);
```

---

## Mermaid 兼容说明

支持以下 Mermaid 语法：
- 常规：`flowchart`, `graph`, `sequenceDiagram`, `classDiagram`, `stateDiagram`, `erDiagram`, `gantt`, `pie`, `journey`, `mindmap`, `timeline`, `sankey`, `gitGraph`, `requirementDiagram`, `C4*`, `xychart`
- 兼容：
  - `radar-chart` / `radarchart`
  - `quadrant-chart` / `quadrant chart`

当输入是 `radar-chart` / `quadrant-chart` 时：
- 使用自定义 SVG 渲染
- 兼容中文逗号、% 数值、非标准 series 行

渲染失败时：
- 自动降级为代码块展示，避免空白

---

## 注意事项

- `renderMermaidInContainer` 依赖 DOM（仅在客户端运行）
- 若使用 Next.js，请确保相关逻辑在 `useEffect` 中执行
- Mermaid 初次渲染可能略慢，适合懒加载或按需渲染

---

## 文件清单

- `lib/markdownRender.ts`
- `lib/markdownUtils.ts`
