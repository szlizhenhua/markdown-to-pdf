import type { Mermaid } from 'mermaid'

const MARKDOWN_FENCE_LANGS = new Set([
  'markdown',
  'md',
  'text',
  'plaintext',
  'plain',
])

type MermaidType = 'radar' | 'quadrant' | null

interface RadarSeries {
  name: string
  values: number[]
}

interface RadarChartData {
  title: string
  axes: string[]
  series: RadarSeries[]
}

interface QuadrantPoint {
  label: string
  x: number
  y: number
}

interface QuadrantChartData {
  title: string
  xAxis: string[]
  yAxis: string[]
  quadrants: Record<string, string>
  points: QuadrantPoint[]
}

const stripOuterMarkdownFence = (content: string): string => {
  let result = content
  let changed = true

  while (changed) {
    changed = false
    const lines = result.split(/\r?\n/)
    let start = -1
    let end = -1

    for (let i = 0; i < lines.length; i += 1) {
      if (lines[i].trim()) {
        start = i
        break
      }
    }

    if (start === -1) {
      return result
    }

    const startMatch = lines[start].match(/^\s*```(?:\s*([\w-]+))?\s*$/)
    const lang = (startMatch?.[1] ?? '').toLowerCase()

    if (!startMatch || !MARKDOWN_FENCE_LANGS.has(lang)) {
      return result
    }

    for (let i = lines.length - 1; i > start; i -= 1) {
      if (lines[i].trim()) {
        end = i
        break
      }
    }

    if (end <= start || !/^\s*```\s*$/.test(lines[end] ?? '')) {
      return result
    }

    result = lines.slice(start + 1, end).join('\n')
    changed = true
  }

  return result
}

const normalizeMarkdown = (content?: string): string => {
  const normalizedContent = stripOuterMarkdownFence(content ?? '')
  const lines = normalizedContent.split(/\r?\n/)
  const output: string[] = []
  let inMarkdownFence = false
  let nestedFenceDepth = 0

  const isMarkdownFence = (lang: string) => MARKDOWN_FENCE_LANGS.has(lang)

  for (const line of lines) {
    const fenceMatch = line.match(/^\s*```(?:\s*([\w-]+))?\s*$/)
    const lang = (fenceMatch?.[1] ?? '').toLowerCase()

    if (!inMarkdownFence) {
      if (fenceMatch && isMarkdownFence(lang)) {
        inMarkdownFence = true
        nestedFenceDepth = 0
        continue
      }
      output.push(line)
      continue
    }

    if (fenceMatch) {
      if (lang) {
        nestedFenceDepth += 1
        output.push(line)
        continue
      }
      if (nestedFenceDepth > 0) {
        nestedFenceDepth -= 1
        output.push(line)
        continue
      }
      inMarkdownFence = false
      continue
    }

    output.push(line)
  }

  return output.join('\n')
}

const looksLikeTable = (lines: string[]): boolean => {
  const normalizedLines = lines.map((line) => line.trim()).filter(Boolean)
  const hasDivider = normalizedLines.some((line) => /^\|?\s*:?[-]{2,}[-| :]*\|?\s*$/.test(line))
  const hasPipes = normalizedLines.some((line) => line.includes('|'))
  return hasDivider && hasPipes
}

const preprocessMarkdown = (content?: string): string => {
  const normalized = normalizeMarkdown(content ?? '')
  return normalized.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, body) => {
    const normalizedLang = (lang ?? '').toLowerCase()
    if (normalizedLang) return match

    const bodyLines = body.split(/\r?\n/)
    if (looksLikeTable(bodyLines)) {
      return body
    }

    return match
  })
}

const getMermaidType = (raw: string): MermaidType => {
  const firstLine = raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .find((line) => line.length)
  if (!firstLine) return null
  const head = firstLine.toLowerCase()
  if (
    head.startsWith('radar-chart') ||
    head.startsWith('radar chart') ||
    head.startsWith('radarchart') ||
    head.startsWith('radar')
  ) {
    return 'radar'
  }
  if (head.startsWith('quadrant-chart') || head.startsWith('quadrant chart')) {
    return 'quadrant'
  }
  return null
}

const isMermaidLike = (raw: string): boolean => {
  const firstLine = raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .find((line) => line.length)
  if (!firstLine) return false
  const head = firstLine.toLowerCase()
  return (
    head.startsWith('graph') ||
    head.startsWith('flowchart') ||
    head.startsWith('sequencediagram') ||
    head.startsWith('classdiagram') ||
    head.startsWith('classdiagram-v2') ||
    head.startsWith('statediagram') ||
    head.startsWith('statediagram-v2') ||
    head.startsWith('erdiagram') ||
    head.startsWith('gantt') ||
    head.startsWith('pie') ||
    head.startsWith('journey') ||
    head.startsWith('mindmap') ||
    head.startsWith('timeline') ||
    head.startsWith('sankey') ||
    head.startsWith('gitgraph') ||
    head.startsWith('requirementdiagram') ||
    head.startsWith('c4context') ||
    head.startsWith('c4container') ||
    head.startsWith('c4component') ||
    head.startsWith('c4dynamic') ||
    head.startsWith('xychart') ||
    head.startsWith('quadrantchart') ||
    head.startsWith('quadrant-chart') ||
    head.startsWith('radar-chart') ||
    head.startsWith('radarchart')
  )
}

const parseAxisLabels = (line: string): string[] => {
  const matches = line.match(/"([^"]+)"/g)
  if (matches && matches.length >= 2) {
    return matches.map((match) => match.replace(/"/g, '').trim())
  }
  const cleaned = line.replace(/^.*?axis\s*[:：]?\s*/i, '').trim()
  const arrowParts = cleaned
    .split(/<-->|-->|->/)
    .map((part) => part.trim())
    .filter(Boolean)
  if (arrowParts.length >= 2) {
    return arrowParts
  }
  const fallback = cleaned
    .split(/[,，、]/)
    .map((part) => part.trim())
    .filter(Boolean)
  return fallback.length >= 2 ? fallback : []
}

const parseQuadrantChart = (raw: string): QuadrantChartData => {
  const lines = raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
  let title = ''
  let xAxis: string[] = []
  let yAxis: string[] = []
  const quadrants: Record<string, string> = {}
  const points: QuadrantPoint[] = []

  lines.slice(1).forEach((line) => {
    if (/^title\s+/i.test(line)) {
      title = line.replace(/^title\s+/i, '').trim()
      return
    }
    if (/^x[-\s]?axis/i.test(line)) {
      xAxis = parseAxisLabels(line)
      return
    }
    if (/^y[-\s]?axis/i.test(line)) {
      yAxis = parseAxisLabels(line)
      return
    }
    const quadrantMatch = line.match(/^quadrant[-\s]?([1-4])\s+(.+)$/i)
    if (quadrantMatch) {
      const index = quadrantMatch[1]
      quadrants[index] = quadrantMatch[2].replace(/"/g, '').trim()
      return
    }
    const pointMatch = line.match(
      /^\s*["']?(.+?)["']?\s*:\s*\[\s*(-?\d*\.?\d+)%?\s*,\s*(-?\d*\.?\d+)%?\s*\]\s*$/
    )
    if (pointMatch) {
      points.push({
        label: pointMatch[1].trim(),
        x: Number.parseFloat(pointMatch[2]),
        y: Number.parseFloat(pointMatch[3]),
      })
    }
  })

  return { title, xAxis, yAxis, quadrants, points }
}

const parseRadarChart = (raw: string): RadarChartData => {
  const lines = raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
  let title = ''
  let axes: string[] = []
  const series: RadarSeries[] = []

  lines.slice(1).forEach((line) => {
    if (/^title\s+/i.test(line)) {
      title = line.replace(/^title\s+/i, '').trim()
      return
    }
    if (/^axis\s+/i.test(line) || /^axes\s+/i.test(line)) {
      axes = line
        .replace(/^axes?\s*[:：]?\s*/i, '')
        .split(/[,，、]/)
        .map((item) => item.trim())
        .filter(Boolean)
      return
    }
    const match = line.match(/^series\s+(.+?)\s*[\[{](.+)[}\]]\s*$/i)
    if (match) {
      const name = match[1].trim()
      const values = match[2]
        .split(/[,，、]/)
        .map((value) => Number.parseFloat(value.replace('%', '').trim()))
        .filter((value) => !Number.isNaN(value))
      series.push({ name, values })
      return
    }
    if (line.includes('[') && line.includes(']')) {
      const altMatch = line.match(/^(.+?)\s*[\[{](.+)[}\]]\s*$/)
      if (altMatch) {
        const name = altMatch[1].trim()
        const values = altMatch[2]
          .split(/[,，、]/)
          .map((value) => Number.parseFloat(value.replace('%', '').trim()))
          .filter((value) => !Number.isNaN(value))
        if (values.length) {
          series.push({ name, values })
        }
      }
    }
  })

  if (!axes.length && series.length) {
    const maxValues = Math.max(...series.map((item) => item.values.length))
    axes = Array.from({ length: maxValues }, (_, index) => `Axis ${index + 1}`)
  }

  return { title, axes, series }
}

const decodeHtmlEntities = (value: string): string => {
  return value
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

const buildRadarChartElement = (raw: string): HTMLElement => {
  const { title, axes, series } = parseRadarChart(raw)
  const container = document.createElement('div')
  container.className = 'mermaid-radar'
  container.style.display = 'flex'
  container.style.flexDirection = 'column'
  container.style.alignItems = 'center'
  container.style.gap = '12px'

  if (!axes.length || !series.length) {
    container.textContent = raw
    return container
  }

  const width = 360
  const height = 360
  const padding = 36
  const centerX = width / 2
  const centerY = height / 2 + 8
  const radius = Math.min(width, height) / 2 - padding
  const maxValue = Math.max(1, ...series.flatMap((item) => item.values))
  const levels = 5
  const palette = ['#f59e0b', '#38bdf8', '#a78bfa', '#34d399', '#fb7185', '#f97316']

  const axisPoints = axes.map((_, index) => {
    const angle = (Math.PI * 2 * index) / axes.length - Math.PI / 2
    return {
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius,
      angle,
    }
  })

  const svgParts: string[] = []
  svgParts.push(
    `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Radar chart" class="radar-svg">`
  )
  svgParts.push(`<style>
    .radar-grid polygon { fill: none; stroke: #CBD5E1; stroke-width: 1; }
    .radar-axes line { stroke: #CBD5E1; stroke-width: 1; }
    .radar-axes text { fill: #1F2937; font-size: 12px; font-weight: 600; }
    .radar-shape { fill-opacity: 0.25; stroke-width: 2; }
  </style>`)
  svgParts.push('<g class="radar-grid">')
  for (let i = 1; i <= levels; i += 1) {
    const r = (radius / levels) * i
    const points = axisPoints
      .map((point) => `${centerX + Math.cos(point.angle) * r},${centerY + Math.sin(point.angle) * r}`)
      .join(' ')
    svgParts.push(`<polygon points="${points}" />`)
  }
  svgParts.push('</g>')

  svgParts.push('<g class="radar-axes">')
  axisPoints.forEach((point, index) => {
    svgParts.push(`<line x1="${centerX}" y1="${centerY}" x2="${point.x}" y2="${point.y}" />`)
    const labelX = centerX + Math.cos(point.angle) * (radius + 14)
    const labelY = centerY + Math.sin(point.angle) * (radius + 14)
    svgParts.push(`<text x="${labelX}" y="${labelY}" text-anchor="middle">${axes[index]}</text>`)
  })
  svgParts.push('</g>')

  series.forEach((item, index) => {
    const color = palette[index % palette.length]
    const points = axes.map((_, axisIndex) => {
      const value = item.values[axisIndex] ?? 0
      const r = (radius * value) / maxValue
      const angle = axisPoints[axisIndex].angle
      return `${centerX + Math.cos(angle) * r},${centerY + Math.sin(angle) * r}`
    })
    svgParts.push(
      `<polygon class="radar-shape" fill="${color}" stroke="${color}" points="${points.join(' ')}" />`
    )
  })

  svgParts.push('</svg>')
  if (title) {
    svgParts.unshift(
      `<div class="radar-title" style="font-weight:600; margin-bottom:4px;">${title}</div>`
    )
  }

  const legend = document.createElement('div')
  legend.className = 'mermaid-radar-legend'
  legend.style.display = 'flex'
  legend.style.flexWrap = 'wrap'
  legend.style.gap = '12px'
  legend.style.justifyContent = 'center'
  series.forEach((item, index) => {
    const color = palette[index % palette.length]
    const entry = document.createElement('div')
    entry.className = 'mermaid-radar-legend-item'
    entry.style.display = 'flex'
    entry.style.alignItems = 'center'
    entry.style.gap = '6px'
    entry.innerHTML = `<span class="swatch" style="background:${color};width:10px;height:10px;border-radius:999px;display:inline-block;"></span><span>${item.name}</span>`
    legend.appendChild(entry)
  })

  container.innerHTML = svgParts.join('')
  container.appendChild(legend)
  return container
}

const buildQuadrantChartElement = (raw: string): HTMLElement => {
  const { title, xAxis, yAxis, quadrants, points } = parseQuadrantChart(raw)
  const container = document.createElement('div')
  container.className = 'mermaid-quadrant'

  if (!points.length) {
    container.textContent = raw
    return container
  }

  const width = 360
  const height = 360
  const padding = 40
  const size = Math.min(width, height) - padding * 2
  const originX = padding
  const originY = padding
  const maxCoord = Math.max(1, ...points.flatMap((item) => [item.x, item.y]))
  const palette = ['#f59e0b', '#38bdf8', '#a78bfa', '#34d399', '#fb7185', '#f97316']

  const svgParts: string[] = []
  svgParts.push(`<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Quadrant chart">`)
  svgParts.push(`<style>
    svg { font-family: "Noto Sans SC", "Inter", "PingFang SC", "Microsoft YaHei", "Heiti SC", sans-serif; }
    .quad-bg { fill: var(--card, #ffffff); stroke: var(--border, #CBD5E1); stroke-width: 1.5; }
    .quad-divider { stroke: var(--border, #CBD5E1); stroke-width: 1; }
    .quad-label { fill: var(--foreground, #334155); font-size: 16px; font-weight: 700; }
    .axis-label { fill: var(--muted-foreground, #64748B); font-size: 12px; font-weight: 500; }
    .point-label { fill: var(--foreground, #0f172a); font-size: 12px; font-weight: 600; }
  </style>`)
  svgParts.push(
    `<rect class="quad-bg" x="${originX}" y="${originY}" width="${size}" height="${size}" rx="12" />`
  )
  svgParts.push(
    `<line class="quad-divider" x1="${originX + size / 2}" y1="${originY}" x2="${originX + size / 2}" y2="${originY + size}" />`
  )
  svgParts.push(
    `<line class="quad-divider" x1="${originX}" y1="${originY + size / 2}" x2="${originX + size}" y2="${originY + size / 2}" />`
  )

  const labels = [
    { key: '1', x: originX + size * 0.75, y: originY + size * 0.2 },
    { key: '2', x: originX + size * 0.25, y: originY + size * 0.2 },
    { key: '3', x: originX + size * 0.25, y: originY + size * 0.85 },
    { key: '4', x: originX + size * 0.75, y: originY + size * 0.85 },
  ]
  labels.forEach((item) => {
    if (quadrants[item.key]) {
      svgParts.push(
        `<text class="quad-label" x="${item.x}" y="${item.y}" text-anchor="middle">${quadrants[item.key]}</text>`
      )
    }
  })

  if (xAxis.length >= 2) {
    svgParts.push(
      `<text class="axis-label" x="${originX}" y="${originY + size + 20}" text-anchor="start">${xAxis[0]}</text>`
    )
    svgParts.push(
      `<text class="axis-label" x="${originX + size}" y="${originY + size + 20}" text-anchor="end">${xAxis[1]}</text>`
    )
  }
  if (yAxis.length >= 2) {
    svgParts.push(
      `<text class="axis-label" x="${originX - 8}" y="${originY + size}" text-anchor="end">${yAxis[0]}</text>`
    )
    svgParts.push(
      `<text class="axis-label" x="${originX - 8}" y="${originY + 12}" text-anchor="end">${yAxis[1]}</text>`
    )
  }

  points.forEach((point, index) => {
    const xNorm = Math.max(0, Math.min(1, point.x / maxCoord))
    const yNorm = Math.max(0, Math.min(1, point.y / maxCoord))
    const x = originX + xNorm * size
    const y = originY + (1 - yNorm) * size
    const color = palette[index % palette.length]
    svgParts.push(`<circle cx="${x}" cy="${y}" r="5" fill="${color}" />`)
    svgParts.push(`<text class="point-label" x="${x + 8}" y="${y - 6}">${point.label}</text>`)
  })

  svgParts.push('</svg>')

  if (title) {
    svgParts.unshift(`<div class="quadrant-title">${title}</div>`)
  }

  container.innerHTML = svgParts.join('')
  return container
}

const renderMermaidInContainer = async (root?: HTMLElement | null): Promise<void> => {
  if (!root || typeof document === 'undefined') return

  const codeBlocks = Array.from(root.querySelectorAll('pre code'))
  if (!codeBlocks.length) return

  const candidates = codeBlocks.filter((codeBlock) => {
    const classList = Array.from(codeBlock.classList || [])
    const langClass = classList.find((entry) => entry.startsWith('language-') || entry.startsWith('lang-'))
    const lang = langClass ? langClass.replace(/^language-/, '').replace(/^lang-/, '') : ''
    const raw = decodeHtmlEntities(codeBlock.textContent || '')
    return lang === 'mermaid' || isMermaidLike(raw)
  })

  if (!candidates.length) return

  const mermaidModule = await import('mermaid')
  const mermaid = (mermaidModule.default ?? mermaidModule) as Mermaid
  mermaid.initialize({ startOnLoad: false, theme: 'neutral' })

  candidates.forEach((codeBlock) => {
    const classList = Array.from(codeBlock.classList || [])
    const langClass = classList.find((entry) => entry.startsWith('language-') || entry.startsWith('lang-'))
    const lang = langClass ? langClass.replace(/^language-/, '').replace(/^lang-/, '') : ''
    const pre = codeBlock.closest('pre')
    if (!pre) return
    const raw = decodeHtmlEntities(codeBlock.textContent || '')
    if (!(lang === 'mermaid' || isMermaidLike(raw))) {
      return
    }
    const type = getMermaidType(raw)
    if (type === 'radar') {
      pre.replaceWith(buildRadarChartElement(raw))
      return
    }
    if (type === 'quadrant') {
      pre.replaceWith(buildQuadrantChartElement(raw))
      return
    }
    const container = document.createElement('div')
    container.className = 'mermaid'
    container.dataset.raw = raw
    container.textContent = raw.replace(/^\s*quadrant[-\s]?chart/i, 'quadrantChart')
    pre.replaceWith(container)
  })

  const nodes = Array.from(root.querySelectorAll('.mermaid')).filter(
    (node): node is HTMLElement => node instanceof HTMLElement
  )
  for (const node of nodes) {
    if (node.dataset.rendered === 'true') continue
    try {
      await mermaid.run({ nodes: [node] })
      node.dataset.rendered = 'true'
    } catch {
      const raw = node.dataset.raw || node.textContent || ''
      node.classList.add('mermaid-failed')
      node.innerHTML = ''
      const fallbackPre = document.createElement('pre')
      const fallbackCode = document.createElement('code')
      fallbackCode.textContent = raw
      fallbackPre.appendChild(fallbackCode)
      node.appendChild(fallbackPre)
    }
  }
}

export {
  normalizeMarkdown,
  preprocessMarkdown,
  renderMermaidInContainer,
  getMermaidType,
  isMermaidLike,
  parseAxisLabels,
  parseQuadrantChart,
  parseRadarChart,
  buildRadarChartElement,
  buildQuadrantChartElement,
}
