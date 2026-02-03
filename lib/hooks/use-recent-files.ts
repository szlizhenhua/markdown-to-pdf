'use client'

import { useState, useEffect } from 'react'

export interface RecentFile {
  name: string
  content: string
  timestamp: number
}

const MAX_RECENT_FILES = 5
const STORAGE_KEY = 'recent-markdown-files'

export function useRecentFiles() {
  const [recentFiles, setRecentFiles] = useState<RecentFile[]>([])

  // Load recent files from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const files = JSON.parse(stored) as RecentFile[]
        setRecentFiles(files)
      }
    } catch (error) {
      console.error('Failed to load recent files:', error)
    }
  }, [])

  const addRecentFile = (name: string, content: string) => {
    const newFile: RecentFile = {
      name,
      content,
      timestamp: Date.now()
    }

    // Remove any existing file with the same name
    const filtered = recentFiles.filter(f => f.name !== name)

    // Add new file at the beginning and limit to MAX_RECENT_FILES
    const updated = [newFile, ...filtered].slice(0, MAX_RECENT_FILES)

    setRecentFiles(updated)

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    } catch (error) {
      console.error('Failed to save recent files:', error)
    }
  }

  const removeRecentFile = (name: string) => {
    const updated = recentFiles.filter(f => f.name !== name)
    setRecentFiles(updated)

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    } catch (error) {
      console.error('Failed to update recent files:', error)
    }
  }

  const clearRecentFiles = () => {
    setRecentFiles([])
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch (error) {
      console.error('Failed to clear recent files:', error)
    }
  }

  return {
    recentFiles,
    addRecentFile,
    removeRecentFile,
    clearRecentFiles
  }
}
