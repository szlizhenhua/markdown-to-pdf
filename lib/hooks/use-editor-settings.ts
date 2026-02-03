"use client"

import { useState, useEffect, useCallback } from 'react'

export interface EditorSettings {
  theme: string
  paperSize: string
  fontSize: string
  showPreview: boolean
}

const DEFAULT_SETTINGS: EditorSettings = {
  theme: 'default',
  paperSize: 'a4',
  fontSize: '12',
  showPreview: true,
}

const SETTINGS_KEY = 'markdown-to-pdf-settings'

/**
 * Hook to persist editor settings in localStorage
 */
export function useEditorSettings() {
  const [settings, setSettings] = useState<EditorSettings>(DEFAULT_SETTINGS)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load settings from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(SETTINGS_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        setSettings(prev => ({ ...prev, ...parsed }))
      }
    } catch (error) {
      console.error('Failed to load settings:', error)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  // Save settings to localStorage whenever they change
  useEffect(() => {
    if (!isLoaded) return

    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings))
    } catch (error) {
      console.error('Failed to save settings:', error)
    }
  }, [settings, isLoaded])

  const updateSetting = useCallback(<K extends keyof EditorSettings>(
    key: K,
    value: EditorSettings[K]
  ) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }, [])

  const resetSettings = useCallback(() => {
    setSettings(DEFAULT_SETTINGS)
  }, [])

  return {
    settings,
    updateSetting,
    resetSettings,
    isLoaded,
  }
}
