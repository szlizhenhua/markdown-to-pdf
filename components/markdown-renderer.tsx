"use client"

import { useEffect, useRef, useState, memo } from "react"
import type { LocaleTranslations } from "@/lib/locales/types"
import { renderMermaidInContainer } from "@/lib/markdownRender"
import { renderMarkdownToHtml } from "@/lib/render-markdown-html"

interface MarkdownRendererProps {
  content: string
  language: string
  theme: string
  paperSizes: string
  fontSizes: string
  t: LocaleTranslations
  onHeadingsChange?: (headings: Array<{ id: string; text: string; level: number }>) => void
}

function MarkdownRendererComponent({
  content,
  language,
  theme,
  paperSizes,
  fontSizes,
  t,
  onHeadingsChange,
}: MarkdownRendererProps) {
  const [renderedHtml, setRenderedHtml] = useState("")
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cancelled = false

    void renderMarkdownToHtml(content, t)
      .then(({ html, headings }) => {
        if (cancelled) return
        setRenderedHtml(html)
        onHeadingsChange?.(headings)
      })
      .catch((error) => {
        console.error("Markdown render error:", error)
        if (cancelled) return
        setRenderedHtml("")
        onHeadingsChange?.([])
      })

    return () => {
      cancelled = true
    }
  }, [content, language, theme, paperSizes, fontSizes, t, onHeadingsChange])

  useEffect(() => {
    if (!containerRef.current || !renderedHtml) return
    void renderMermaidInContainer(containerRef.current)
  }, [renderedHtml])

  return (
    <div
      ref={containerRef}
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
      style={{
        padding: "20px",
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    />
  )
}

export const MarkdownRenderer = memo(MarkdownRendererComponent, (prevProps, nextProps) => {
  return (
    prevProps.content === nextProps.content &&
    prevProps.theme === nextProps.theme &&
    prevProps.paperSizes === nextProps.paperSizes &&
    prevProps.fontSizes === nextProps.fontSizes &&
    prevProps.language === nextProps.language
  )
})

MarkdownRenderer.displayName = "MarkdownRenderer"
