'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Type } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import type { LocaleTranslations } from '@/lib/locales/types'

interface TypographyControlsProps {
  className?: string
  onFontSizeChange?: (size: number) => void
  onLineHeightChange?: (height: number) => void
  onFontFamilyChange?: (family: string) => void
  currentFontSize?: number
  currentLineHeight?: number
  currentFontFamily?: string
  t: LocaleTranslations
}

const fontFamilies = [
  { value: 'system-ui', label: 'System UI' },
  { value: 'Georgia, serif', label: 'Georgia (Serif)' },
  { value: '"Times New Roman", serif', label: 'Times New Roman' },
  { value: '"Courier New", monospace', label: 'Courier New' },
  { value: 'Arial, sans-serif', label: 'Arial' },
  { value: 'Verdana, sans-serif', label: 'Verdana' },
  { value: '"Trebuchet MS", sans-serif', label: 'Trebuchet MS' },
]

export function TypographyControls({
  className,
  onFontSizeChange,
  onLineHeightChange,
  onFontFamilyChange,
  currentFontSize = 16,
  currentLineHeight = 1.6,
  currentFontFamily = 'system-ui',
  t
}: TypographyControlsProps) {
  const [open, setOpen] = useState(false)
  const [fontSize, setFontSize] = useState(currentFontSize)
  const [lineHeight, setLineHeight] = useState(currentLineHeight)
  const [fontFamily, setFontFamily] = useState(currentFontFamily)

  const handleFontSizeChange = (value: number[]) => {
    const newSize = value[0]
    setFontSize(newSize)
    onFontSizeChange?.(newSize)
  }

  const handleLineHeightChange = (value: number[]) => {
    const newHeight = value[0]
    setLineHeight(newHeight)
    onLineHeightChange?.(newHeight)
  }

  const handleFontFamilyChange = (family: string) => {
    setFontFamily(family)
    onFontFamilyChange?.(family)
  }

  const handleReset = () => {
    setFontSize(16)
    setLineHeight(1.6)
    setFontFamily('system-ui')
    onFontSizeChange?.(16)
    onLineHeightChange?.(1.6)
    onFontFamilyChange?.('system-ui')
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`h-8 w-8 p-0 touch-manipulation ${className}`}
          title="Typography controls"
          aria-label="Typography controls"
        >
          <Type className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t.dialogs.typography.title}</DialogTitle>
          <DialogDescription>
            {t.dialogs.typography.description || "Customize the appearance of the preview text"}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4">
          {/* Font Size */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="font-size">{t.dialogs.typography.fontSize}</Label>
              <span className="text-sm text-muted-foreground">{fontSize}px</span>
            </div>
            <Slider
              id="font-size"
              value={[fontSize]}
              onValueChange={handleFontSizeChange}
              min={12}
              max={24}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>12px</span>
              <span>18px</span>
              <span>24px</span>
            </div>
          </div>

          {/* Line Height */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="line-height">{t.dialogs.typography.lineHeight}</Label>
              <span className="text-sm text-muted-foreground">{lineHeight.toFixed(1)}</span>
            </div>
            <Slider
              id="line-height"
              value={[lineHeight]}
              onValueChange={handleLineHeightChange}
              min={1.0}
              max={2.5}
              step={0.1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1.0</span>
              <span>1.75</span>
              <span>2.5</span>
            </div>
          </div>

          {/* Font Family */}
          <div className="space-y-3">
            <Label>{t.dialogs.typography.fontFamily}</Label>
            <div className="grid grid-cols-2 gap-2">
              {fontFamilies.map((font) => (
                <button
                  key={font.value}
                  onClick={() => handleFontFamilyChange(font.value)}
                  className={`p-2 text-sm rounded-md border transition-all ${
                    fontFamily === font.value
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background hover:bg-accent border-border'
                  }`}
                  style={{ fontFamily: font.value }}
                >
                  {font.label}
                </button>
              ))}
            </div>
          </div>

          {/* Preview */}
          <div className="mt-4 p-4 border rounded-md bg-muted/30">
            <p
              style={{
                fontSize: `${fontSize}px`,
                lineHeight: lineHeight,
                fontFamily: fontFamily
              }}
            >
              The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.
            </p>
          </div>

          {/* Reset Button */}
          <div className="flex justify-end pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
            >
              Reset to Default
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
