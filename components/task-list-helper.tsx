'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CheckSquare } from 'lucide-react'

interface TaskListHelperProps {
  onInsert: (listMarkdown: string) => void
  className?: string
}

export function TaskListHelper({ onInsert, className }: TaskListHelperProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [itemCount, setItemCount] = useState(3)
  const [items, setItems] = useState<{ text: string; checked: boolean }[]>([
    { text: '', checked: false },
    { text: '', checked: false },
    { text: '', checked: false }
  ])

  const handleItemCountChange = (count: number) => {
    setItemCount(count)
    setItems(prev => {
      const newItems = [...prev]
      if (count > prev.length) {
        for (let i = prev.length; i < count; i++) {
          newItems.push({ text: '', checked: false })
        }
      } else if (count < prev.length) {
        newItems.length = count
      }
      return newItems
    })
  }

  const handleItemChange = (index: number, text: string) => {
    setItems(prev => {
      const newItems = [...prev]
      newItems[index].text = text
      return newItems
    })
  }

  const handleCheckedChange = (index: number, checked: boolean) => {
    setItems(prev => {
      const newItems = [...prev]
      newItems[index].checked = checked
      return newItems
    })
  }

  const handleInsert = () => {
    const list = items.map(item => {
      const checkbox = item.checked ? '- [x]' : '- [ ]'
      return `${checkbox} ${item.text}`
    }).join('\n')

    onInsert(list)

    // Reset form
    setItems([
      { text: '', checked: false },
      { text: '', checked: false },
      { text: '', checked: false }
    ])
    setItemCount(3)
    setIsOpen(false)
  }

  return (
    <div className={`relative ${className}`}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="h-8 w-8 p-0 touch-manipulation"
        title="Insert task list"
        aria-label="Insert task list"
        aria-expanded={isOpen}
      >
        <CheckSquare className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1 z-50 w-80 bg-white dark:bg-gray-800 shadow-lg rounded-lg border-2 border-gray-200 dark:border-gray-700">
          <div className="p-4 space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Number of Tasks: {itemCount}</label>
              <input
                type="range"
                min="1"
                max="10"
                value={itemCount}
                onChange={(e) => handleItemCountChange(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-gray-700"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Tasks</label>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {items.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={(e) => handleCheckedChange(index, e.target.checked)}
                      className="w-4 h-4 rounded border-gray-300"
                    />
                    <input
                      type="text"
                      value={item.text}
                      onChange={(e) => handleItemChange(index, e.target.value)}
                      placeholder={`Task ${index + 1}`}
                      className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={handleInsert}
                size="sm"
                className="flex-1"
              >
                Insert Task List
              </Button>
              <Button
                onClick={() => setIsOpen(false)}
                variant="outline"
                size="sm"
              >
                Cancel
              </Button>
            </div>

            {/* Preview */}
            <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-900 rounded border text-xs">
              <div className="text-gray-500 dark:text-gray-400 mb-1">Preview:</div>
              <pre className="whitespace-pre-wrap text-gray-700 dark:text-gray-300">
                {items.map((item, index) => (
                  <div key={index}>
                    {item.checked ? '- [x]' : '- [ ]'} {item.text || `Task ${index + 1}`}
                  </div>
                ))}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
