'use client'

import { useState, useEffect } from 'react'
import { Users, UserPlus, Wifi, WifiOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

interface Collaborator {
  id: string
  name: string
  color: string
  isOnline: boolean
  lastSeen: Date
  cursor?: {
    line: number
    column: number
  }
}

interface CollaborationIndicatorProps {
  className?: string
}

// Simulated collaborators for demo purposes
const mockCollaborators: Collaborator[] = [
  {
    id: '1',
    name: 'You',
    color: '#3b82f6',
    isOnline: true,
    lastSeen: new Date()
  },
  {
    id: '2',
    name: 'Alice Chen',
    color: '#10b981',
    isOnline: true,
    lastSeen: new Date(Date.now() - 30000),
    cursor: { line: 15, column: 8 }
  },
  {
    id: '3',
    name: 'Bob Smith',
    color: '#f59e0b',
    isOnline: false,
    lastSeen: new Date(Date.now() - 300000) // 5 minutes ago
  }
]

export function CollaborationIndicator({ className }: CollaborationIndicatorProps) {
  const [collaborators, setCollaborators] = useState<Collaborator[]>(mockCollaborators)
  const [isConnected, setIsConnected] = useState(true)
  const [showInvite, setShowInvite] = useState(false)

  // Simulate connection status changes
  useEffect(() => {
    const interval = setInterval(() => {
      setIsConnected(prev => {
        // 95% chance of staying connected, 5% chance of toggling
        return Math.random() > 0.05 ? true : !prev
      })
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  // Simulate collaborator activity
  useEffect(() => {
    const interval = setInterval(() => {
      setCollaborators(prev =>
        prev.map(collab => {
          if (collab.id === '1') return collab // Don't modify "you"

          // Randomly update online status and cursor for other collaborators
          const newIsOnline = Math.random() > 0.3
          return {
            ...collab,
            isOnline: newIsOnline,
            lastSeen: new Date(),
            cursor: newIsOnline ? {
              line: Math.floor(Math.random() * 50),
              column: Math.floor(Math.random() * 80)
            } : undefined
          }
        })
      )
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const onlineCount = collaborators.filter(c => c.isOnline).length
  const totalCount = collaborators.length

  const handleInvite = () => {
    const shareUrl = window.location.href
    navigator.clipboard.writeText(shareUrl)
    setShowInvite(true)
    setTimeout(() => setShowInvite(false), 3000)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`h-8 px-2 touch-manipulation text-xs ${className}`}
          title="Collaboration status"
          aria-label="Collaboration status"
        >
          <div className="flex items-center gap-2">
            <div className="relative">
              <Users className="h-4 w-4" />
              <div
                className={`absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border-2 border-background ${
                  isConnected ? 'bg-green-500' : 'bg-red-500'
                }`}
              />
            </div>
            <span className="hidden sm:inline">
              {onlineCount}/{totalCount}
            </span>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72" align="end">
        <div className="space-y-4">
          {/* Connection Status */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              {isConnected ? (
                <>
                  <Wifi className="h-4 w-4 text-green-500" />
                  <span className="text-green-600 dark:text-green-400">Connected</span>
                </>
              ) : (
                <>
                  <WifiOff className="h-4 w-4 text-red-500" />
                  <span className="text-red-600 dark:text-red-400">Reconnecting...</span>
                </>
              )}
            </div>
            <span className="text-xs text-muted-foreground">
              {onlineCount} online
            </span>
          </div>

          {/* Collaborators List */}
          <div className="space-y-2">
            <div className="text-xs font-medium text-muted-foreground uppercase">
              Collaborators
            </div>
            <div className="space-y-2">
              {collaborators.map(collab => (
                <div
                  key={collab.id}
                  className="flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    {/* Avatar with color indicator */}
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0"
                      style={{ backgroundColor: collab.color }}
                    >
                      {collab.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-medium truncate">
                          {collab.name}
                        </span>
                        {collab.isOnline ? (
                          <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                        ) : (
                          <div className="w-2 h-2 rounded-full bg-gray-300 flex-shrink-0" />
                        )}
                      </div>
                      {collab.cursor && (
                        <div className="text-xs text-muted-foreground">
                          Line {collab.cursor.line}, Col {collab.cursor.column}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Invite Button */}
          <Button
            variant={showInvite ? 'default' : 'outline'}
            size="sm"
            className="w-full"
            onClick={handleInvite}
          >
            {showInvite ? (
              <>Link Copied!</>
            ) : (
              <>
                <UserPlus className="h-4 w-4 mr-2" />
                Invite Collaborators
              </>
            )}
          </Button>

          {/* Info */}
          <p className="text-xs text-muted-foreground text-center">
            Real-time collaboration is simulated in this demo.
            <br />
            Integrate with services like Y.js or Liveblocks for production use.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  )
}
