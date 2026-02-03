'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Clock, Play, Pause, RotateCcw, Timer, TrendingUp } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

interface TimeTrackerProps {
  className?: string
  isActive?: boolean
  content?: string
}

interface Session {
  date: string
  startTime: number
  endTime?: number
  wordCount: number
}

const STORAGE_KEY = 'writing-timer-sessions'
const ACTIVE_SESSION_KEY = 'writing-timer-active'

export function TimeTracker({ className, content = '' }: TimeTrackerProps) {
  const [isRunning, setIsRunning] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const [sessions, setSessions] = useState<Session[]>([])
  const [activeSession, setActiveSession] = useState<{ startTime: number; startWords: number } | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Load sessions from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        setSessions(parsed)
      }

      const savedActive = localStorage.getItem(ACTIVE_SESSION_KEY)
      if (savedActive) {
        const active = JSON.parse(savedActive)
        setActiveSession(active)
        setIsRunning(true)
        setElapsed(Math.floor((Date.now() - active.startTime) / 1000))
      }
    } catch (error) {
      console.error('Failed to load sessions:', error)
    }
  }, [])

  // Timer interval
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsed(prev => prev + 1)
      }, 1000)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isRunning])

  const startTimer = useCallback(() => {
    const startTime = Date.now()
    const wordCount = content.trim().split(/\s+/).filter(w => w.length > 0).length

    const newActiveSession = { startTime, startWords: wordCount }
    setActiveSession(newActiveSession)
    setIsRunning(true)
    setElapsed(0)
    localStorage.setItem(ACTIVE_SESSION_KEY, JSON.stringify(newActiveSession))
  }, [content])

  const pauseTimer = useCallback(() => {
    if (!activeSession) return

    const session: Session = {
      date: new Date().toISOString().split('T')[0],
      startTime: activeSession.startTime,
      endTime: Date.now(),
      wordCount: content.trim().split(/\s+/).filter(w => w.length > 0).length
    }

    const newSessions = [session, ...sessions]
    setSessions(newSessions)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newSessions))

    setActiveSession(null)
    setIsRunning(false)
    setElapsed(0)
    localStorage.removeItem(ACTIVE_SESSION_KEY)
  }, [activeSession, sessions, content])

  const resetTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setActiveSession(null)
    setIsRunning(false)
    setElapsed(0)
    localStorage.removeItem(ACTIVE_SESSION_KEY)
  }, [])

  // Format time as HH:MM:SS
  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  // Calculate today's total time
  const todayTime = sessions
    .filter(s => s.date === new Date().toISOString().split('T')[0])
    .reduce((total, s) => {
      const duration = (s.endTime || Date.now()) - s.startTime
      return total + duration
    }, 0) + (isRunning ? elapsed * 1000 : 0)

  // Calculate week's total time
  const weekTime = sessions
    .filter(s => {
      const sessionDate = new Date(s.date)
      const now = new Date()
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
      return sessionDate >= weekAgo
    })
    .reduce((total, s) => {
      const duration = (s.endTime || Date.now()) - s.startTime
      return total + duration
    }, 0) + (isRunning ? elapsed * 1000 : 0)

  // Calculate average session time
  const avgSessionTime = sessions.length > 0
    ? sessions.reduce((total, s) => {
        const duration = (s.endTime || Date.now()) - s.startTime
        return total + duration
      }, 0) / sessions.length
    : 0

  // Calculate words per minute
  const currentWordCount = content.trim().split(/\s+/).filter(w => w.length > 0).length
  const wordsPerMinute = activeSession && elapsed > 0
    ? ((currentWordCount - activeSession.startWords) / (elapsed / 60)).toFixed(1)
    : '0.0'

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`h-8 px-2 touch-manipulation text-xs ${className} ${
            isRunning ? 'text-green-600 dark:text-green-400 animate-pulse' : ''
          }`}
          title="Time tracker"
          aria-label="Time tracker"
        >
          {isRunning ? (
            <>
              <Timer className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">{formatTime(elapsed)}</span>
            </>
          ) : (
            <>
              <Clock className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Timer</span>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="space-y-4">
          {/* Current Timer */}
          <div className="text-center space-y-3">
            <div className="text-4xl font-mono font-semibold">
              {formatTime(elapsed)}
            </div>
            <div className="flex items-center justify-center gap-2">
              {isRunning ? (
                <>
                  <Badge variant="default" className="animate-pulse">
                    Recording
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {wordsPerMinute} words/min
                  </span>
                </>
              ) : (
                <Badge variant="secondary">Stopped</Badge>
              )}
            </div>
            <div className="flex justify-center gap-2">
              {!isRunning ? (
                <Button onClick={startTimer} size="sm">
                  <Play className="h-4 w-4 mr-2" />
                  Start
                </Button>
              ) : (
                <Button onClick={pauseTimer} variant="secondary" size="sm">
                  <Pause className="h-4 w-4 mr-2" />
                  Pause
                </Button>
              )}
              <Button
                onClick={resetTimer}
                variant="outline"
                size="sm"
                disabled={!isRunning && elapsed === 0}
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-3 pt-3 border-t">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Today</span>
              <span className="text-sm font-medium">
                {formatTime(Math.floor(todayTime / 1000))}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">This Week</span>
              <span className="text-sm font-medium">
                {formatTime(Math.floor(weekTime / 1000))}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Avg Session</span>
              <span className="text-sm font-medium">
                {formatTime(Math.floor(avgSessionTime / 1000))}
              </span>
            </div>
          </div>

          {/* Progress Bar (if daily goal is set) */}
          <div className="space-y-2 pt-3 border-t">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Daily Time Goal</span>
              <span>2 hours</span>
            </div>
            <Progress
              value={(todayTime / (2 * 60 * 60 * 1000)) * 100}
              className="h-2"
            />
          </div>

          {/* Recent Sessions */}
          {sessions.length > 0 && (
            <div className="space-y-2 pt-3 border-t">
              <div className="flex items-center gap-2 text-sm font-medium">
                <TrendingUp className="h-4 w-4" />
                Recent Sessions
              </div>
              <div className="space-y-1 max-h-32 overflow-y-auto">
                {sessions.slice(0, 5).map((session, index) => {
                  const duration = (session.endTime || Date.now()) - session.startTime
                  const date = new Date(session.startTime)
                  const timeStr = date.toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })
                  const dateStr = session.date === new Date().toISOString().split('T')[0]
                    ? 'Today'
                    : new Date(session.date).toLocaleDateString('en-US', { weekday: 'short' })

                  return (
                    <div key={index} className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">
                        {dateStr} at {timeStr}
                      </span>
                      <span>{formatTime(Math.floor(duration / 1000))}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
