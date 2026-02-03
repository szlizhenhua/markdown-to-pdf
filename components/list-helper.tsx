'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { List, ListOrdered } from 'lucide-react'

interface ListHelperProps {
  onInsert: (listMarkdown: string) => void
  className?: string
}

export function ListHelper({ onInsert, className }: ListHelperProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [listType, setListType] = useState<'bullet' | 'numbered'>('bullet')
  const [itemCount, setItemCount] = useState(3)
  const [items, setItems] = useState<string[]>(['', '', ''])

  const handleItemCountChange = (count: number) => {
    setItemCount(count)
    setItems(prev => {
      const newItems = [...prev]
      if (count > prev.length) {
        // Add new empty items
        for (let i = prev.length; i < count; i++) {
          newItems.push('')
        }
      } else if (count < prev.length) {
        // Remove items
        newItems.length = count
      }
      return newItems
    })
  }

  const handleItemChange = (index: number, value: string) => {
    setItems(prev => {
      const newItems = [...prev]
      newItems[index] = value
      return newItems
    })
  }

  const handleInsert = () => {
    let list = ''

    if (listType === 'bullet') {
      list = items.map(item => `- ${item}`).join('\n')
    } else {
      list = items.map((item, index) => `${index + 1}. ${item}`).join('\n')
    }

    onInsert(list)

    // Reset form
    setItems(['', '', ''])
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
        title="Insert list"
        aria-label="Insert list"
        aria-expanded={isOpen}
      >
        {listType === 'bullet' ? <List className="h-4 w-4" /> : <ListOrdered className="h-4 w-4" />}
      </Button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1 z-50 w-80 bg-white dark:bg-gray-800 shadow-lg rounded-lg border-2 border-gray-200 dark:border-gray-700">
          <div className="p-4 space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">List Type</label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setListType('bullet')}
                  className={`flex-1 px-3 py-2 text-sm rounded border transition-colors ${
                    listType === 'bullet'
                      ? 'bg-gray-200 dark:bg-gray-700 border-gray-400 dark:border-gray-500'
                      : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <List className="h-4 w-4 inline mr-1" />
                  Bullet
                </button>
                <button
                  type="button"
                  onClick={() => setListType('numbered')}
                  className={`flex-1 px-3 py-2 text-sm rounded border transition-colors ${
                    listType === 'numbered'
                      ? 'bg-gray-200 dark:bg-gray-700 border-gray-400 dark:border-gray-500'
                      : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <ListOrdered className="h-4 w-4 inline mr-1" />
                  Numbered
                </button>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Number of Items: {itemCount}</label>
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
              <label className="text-sm font-medium mb-2 block">List Items</label>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {items.map((item, index) => (
                  <input
                    key={index}
                    type="text"
                    value={item}
                    onChange={(e) => handleItemChange(index, e.target.value)}
                    placeholder={listType === 'bullet' ? `Item ${index + 1}` : `${index + 1}. Item`}
                    className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={handleInsert}
                size="sm"
                className="flex-1"
              >
                Insert List
              </Button>
              <Button
                onClick={() => setIsOpen(false)}
                variant="outline"
                size="sm"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
