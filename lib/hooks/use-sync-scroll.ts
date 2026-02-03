'use client'

import { useEffect, useRef, useCallback } from 'react'

interface SyncScrollOptions {
  enabled: boolean
  syncToPreview?: boolean
  syncToEditor?: boolean
  debounceMs?: number
}

export function useSyncScroll(
  editorRef: React.RefObject<HTMLTextAreaElement>,
  previewRef: React.RefObject<HTMLDivElement>,
  options: SyncScrollOptions = { enabled: true }
) {
  const { enabled, syncToPreview = true, syncToEditor = false, debounceMs = 50 } = options
  const isScrollingRef = useRef(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const clearScrollTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [])

  // Scroll editor to match preview
  const scrollEditorToPreview = useCallback((scrollRatio: number) => {
    if (!editorRef.current || !syncToEditor || isScrollingRef.current) return

    isScrollingRef.current = true
    const editor = editorRef.current
    const maxScroll = editor.scrollHeight - editor.clientHeight
    editor.scrollTop = maxScroll * scrollRatio

    clearScrollTimeout()
    timeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false
    }, debounceMs)
  }, [syncToEditor, debounceMs, clearScrollTimeout]) // eslint-disable-line react-hooks/exhaustive-deps

  // Scroll preview to match editor
  const scrollPreviewToEditor = useCallback((scrollRatio: number) => {
    if (!previewRef.current || !syncToPreview || isScrollingRef.current) return

    isScrollingRef.current = true
    const preview = previewRef.current
    const maxScroll = preview.scrollHeight - preview.clientHeight
    preview.scrollTop = maxScroll * scrollRatio

    clearScrollTimeout()
    timeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false
    }, debounceMs)
  }, [syncToPreview, debounceMs, clearScrollTimeout]) // eslint-disable-line react-hooks/exhaustive-deps

  // Handle editor scroll
  useEffect(() => {
    const editor = editorRef.current
    if (!editor || !enabled) return

    const handleEditorScroll = () => {
      if (isScrollingRef.current) return

      const maxScroll = editor.scrollHeight - editor.clientHeight
      const scrollRatio = editor.scrollTop / maxScroll

      scrollPreviewToEditor(scrollRatio)
    }

    editor.addEventListener('scroll', handleEditorScroll)
    return () => editor.removeEventListener('scroll', handleEditorScroll)
  }, [editorRef, enabled, scrollPreviewToEditor])

  // Handle preview scroll
  useEffect(() => {
    const preview = previewRef.current
    if (!preview || !enabled || !syncToEditor) return

    const handlePreviewScroll = () => {
      if (isScrollingRef.current) return

      const maxScroll = preview.scrollHeight - preview.clientHeight
      const scrollRatio = preview.scrollTop / maxScroll

      scrollEditorToPreview(scrollRatio)
    }

    preview.addEventListener('scroll', handlePreviewScroll)
    return () => preview.removeEventListener('scroll', handlePreviewScroll)
  }, [previewRef, syncToEditor, scrollEditorToPreview, enabled]) // eslint-disable-line react-hooks/exhaustive-deps

  return {
    scrollEditorToPreview,
    scrollPreviewToEditor
  }
}
