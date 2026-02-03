'use client'

import { useState, useCallback, useRef } from 'react'

interface HistoryState {
  content: string
  cursorPosition?: number
}

export function useEditorHistory(maxHistory: number = 50) {
  const [history, setHistory] = useState<HistoryState[]>([])
  const [currentIndex, setCurrentIndex] = useState(-1)
  const isHistoryActionRef = useRef(false)

  const pushState = useCallback((content: string, cursorPosition?: number) => {
    if (isHistoryActionRef.current) {
      isHistoryActionRef.current = false
      return
    }

    setHistory(prev => {
      const newState = { content, cursorPosition }
      // Remove any states after current index
      const newHistory = [...prev.slice(0, currentIndex + 1), newState]
      // Limit history size
      if (newHistory.length > maxHistory) {
        newHistory.shift()
      }
      return newHistory
    })
    setCurrentIndex(prev => Math.min(prev + 1, maxHistory - 1))
  }, [currentIndex, maxHistory])

  const undo = useCallback(() => {
    if (currentIndex > 0) {
      isHistoryActionRef.current = true
      setCurrentIndex(prev => prev - 1)
      const state = history[currentIndex - 1]
      return state
    }
    return null
  }, [currentIndex, history])

  const redo = useCallback(() => {
    if (currentIndex < history.length - 1) {
      isHistoryActionRef.current = true
      setCurrentIndex(prev => prev + 1)
      const state = history[currentIndex + 1]
      return state
    }
    return null
  }, [currentIndex, history])

  const canUndo = currentIndex > 0
  const canRedo = currentIndex < history.length - 1

  return {
    pushState,
    undo,
    redo,
    canUndo,
    canRedo,
    historyLength: history.length
  }
}
