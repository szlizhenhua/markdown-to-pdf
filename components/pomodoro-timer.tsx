'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Timer, Play, Pause, SkipForward, Coffee, Brain } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'

type PomodoroMode = 'focus' | 'shortBreak' | 'longBreak'

interface PomodoroSettings {
  focusTime: number
  shortBreakTime: number
  longBreakTime: number
  sessionsUntilLongBreak: number
  autoStartBreaks: boolean
  autoStartPomodoros: boolean
  soundEnabled: boolean
}

const DEFAULT_SETTINGS: PomodoroSettings = {
  focusTime: 25 * 60, // 25 minutes
  shortBreakTime: 5 * 60, // 5 minutes
  longBreakTime: 15 * 60, // 15 minutes
  sessionsUntilLongBreak: 4,
  autoStartBreaks: false,
  autoStartPomodoros: false,
  soundEnabled: true
}

interface PomodoroTimerProps {
  className?: string
}

export function PomodoroTimer({ className }: PomodoroTimerProps) {
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState<PomodoroMode>('focus')
  const [timeLeft, setTimeLeft] = useState(DEFAULT_SETTINGS.focusTime)
  const [isRunning, setIsRunning] = useState(false)
  const [completedSessions, setCompletedSessions] = useState(0)
  const [settings, setSettings] = useState<PomodoroSettings>(DEFAULT_SETTINGS)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Load saved settings and state
  useEffect(() => {
    try {
      const savedSettings = localStorage.getItem('pomodoro-settings')
      if (savedSettings) {
        setSettings(JSON.parse(savedSettings))
      }

      const savedState = localStorage.getItem('pomodoro-state')
      if (savedState) {
        const state = JSON.parse(savedState)
        setMode(state.mode)
        setTimeLeft(state.timeLeft)
        setCompletedSessions(state.completedSessions)
      }
    } catch (error) {
      console.error('Failed to load pomodoro state:', error)
    }
  }, [])

  // Save state to localStorage
  useEffect(() => {
    localStorage.setItem('pomodoro-state', JSON.stringify({
      mode,
      timeLeft,
      completedSessions
    }))
  }, [mode, timeLeft, completedSessions])

  // Timer logic
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleComplete()
            return 0
          }
          return prev - 1
        })
      }, 1000)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isRunning, timeLeft]) // eslint-disable-line react-hooks/exhaustive-deps

  // Notification sound
  const playNotification = useCallback(() => {
    if (!settings.soundEnabled) return

    // Create a simple beep sound
    const audioContext = new (window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    oscillator.frequency.value = 800
    oscillator.type = 'sine'
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5)

    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.5)

    // Browser notification
    if ('Notification' in window && Notification.permission === 'granted') {
      const title = mode === 'focus' ? 'Pomodoro Complete!' : 'Break Over!'
      const body = mode === 'focus'
        ? 'Great work! Time for a break.'
        : 'Break is over. Ready to focus again?'
      new Notification(title, { body })
    }
  }, [settings.soundEnabled, mode])

  const handleComplete = useCallback(() => {
    setIsRunning(false)
    playNotification()

    if (mode === 'focus') {
      const newCompleted = completedSessions + 1
      setCompletedSessions(newCompleted)

      // Determine next break type
      const shouldLongBreak = newCompleted % settings.sessionsUntilLongBreak === 0
      const nextMode: PomodoroMode = shouldLongBreak ? 'longBreak' : 'shortBreak'
      setMode(nextMode)
      setTimeLeft(shouldLongBreak ? settings.longBreakTime : settings.shortBreakTime)

      if (settings.autoStartBreaks) {
        setIsRunning(true)
      }
    } else {
      // Break is over
      setMode('focus')
      setTimeLeft(settings.focusTime)

      if (settings.autoStartPomodoros) {
        setIsRunning(true)
      }
    }
  }, [mode, completedSessions, settings, playNotification])

  const toggleTimer = () => {
    // Request notification permission on first interaction
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission()
    }

    setIsRunning(!isRunning)
  }

  const skipSession = () => {
    setIsRunning(false)
    if (mode === 'focus') {
      const shouldLongBreak = (completedSessions + 1) % settings.sessionsUntilLongBreak === 0
      const nextMode: PomodoroMode = shouldLongBreak ? 'longBreak' : 'shortBreak'
      setMode(nextMode)
      setTimeLeft(shouldLongBreak ? settings.longBreakTime : settings.shortBreakTime)
    } else {
      setMode('focus')
      setTimeLeft(settings.focusTime)
    }
  }

  const resetTimer = () => {
    setIsRunning(false)
    setTimeLeft(mode === 'focus' ? settings.focusTime :
      mode === 'shortBreak' ? settings.shortBreakTime :
      settings.longBreakTime)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const getModeConfig = () => {
    switch (mode) {
      case 'focus':
        return {
          label: 'Focus Time',
          icon: <Brain className="h-5 w-5" />,
          color: 'text-red-500',
          bgColor: 'bg-red-500',
          description: 'Stay focused and write'
        }
      case 'shortBreak':
        return {
          label: 'Short Break',
          icon: <Coffee className="h-5 w-5" />,
          color: 'text-green-500',
          bgColor: 'bg-green-500',
          description: 'Take a quick breather'
        }
      case 'longBreak':
        return {
          label: 'Long Break',
          icon: <Coffee className="h-5 w-5" />,
          color: 'text-blue-500',
          bgColor: 'bg-blue-500',
          description: 'Time to recharge'
        }
    }
  }

  const modeConfig = getModeConfig()
  const totalTime = mode === 'focus' ? settings.focusTime :
    mode === 'shortBreak' ? settings.shortBreakTime :
    settings.longBreakTime
  const progress = ((totalTime - timeLeft) / totalTime) * 100

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`h-8 w-8 p-0 touch-manipulation ${className} ${
            isRunning ? 'animate-pulse' : ''
          }`}
          title="Pomodoro timer"
          aria-label="Pomodoro timer"
        >
          {isRunning ? (
            <Timer className="h-4 w-4 text-red-500" />
          ) : (
            <Timer className="h-4 w-4" />
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Timer className="h-5 w-5 text-primary" />
            Pomodoro Timer
          </DialogTitle>
          <DialogDescription>
            Use the Pomodoro technique for focused writing sessions
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Mode Selector */}
          <div className="flex gap-2">
            <Button
              variant={mode === 'focus' ? 'default' : 'outline'}
              onClick={() => { setMode('focus'); setTimeLeft(settings.focusTime); setIsRunning(false); }}
              className="flex-1"
            >
              <Brain className="h-4 w-4 mr-2" />
              Focus
            </Button>
            <Button
              variant={mode === 'shortBreak' ? 'default' : 'outline'}
              onClick={() => { setMode('shortBreak'); setTimeLeft(settings.shortBreakTime); setIsRunning(false); }}
              className="flex-1"
            >
              <Coffee className="h-4 w-4 mr-2" />
              Short Break
            </Button>
            <Button
              variant={mode === 'longBreak' ? 'default' : 'outline'}
              onClick={() => { setMode('longBreak'); setTimeLeft(settings.longBreakTime); setIsRunning(false); }}
              className="flex-1"
            >
              <Coffee className="h-4 w-4 mr-2" />
              Long Break
            </Button>
          </div>

          {/* Timer Display */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              {modeConfig.icon}
              <div>
                <div className="text-sm font-medium">{modeConfig.label}</div>
                <div className="text-xs text-muted-foreground">{modeConfig.description}</div>
              </div>
            </div>

            <div className="text-6xl font-mono font-semibold">
              {formatTime(timeLeft)}
            </div>

            <Progress value={progress} className="h-2" />

            <div className="flex items-center justify-center gap-2">
              {isRunning && (
                <Badge variant="default" className="animate-pulse">
                  Running
                </Badge>
              )}
              <span className="text-xs text-muted-foreground">
                Session {completedSessions + 1} • {completedSessions} completed today
              </span>
            </div>

            <div className="flex justify-center gap-3">
              <Button
                onClick={toggleTimer}
                size="lg"
                className={mode === 'focus' ? 'bg-red-500 hover:bg-red-600' : ''}
              >
                {isRunning ? (
                  <>
                    <Pause className="h-5 w-5 mr-2" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="h-5 w-5 mr-2" />
                    Start
                  </>
                )}
              </Button>
              <Button onClick={skipSession} variant="outline" size="lg">
                <SkipForward className="h-5 w-5" />
              </Button>
              <Button onClick={resetTimer} variant="outline" size="lg">
                Reset
              </Button>
            </div>
          </div>

          {/* Settings */}
          <div className="space-y-4 pt-4 border-t">
            <Label>Timer Settings (minutes)</Label>
            <div className="space-y-3">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Focus</span>
                  <span className="font-medium">{settings.focusTime / 60} min</span>
                </div>
                <Slider
                  value={[settings.focusTime / 60]}
                  onValueChange={([value]) => {
                    const newSettings = { ...settings, focusTime: value * 60 }
                    setSettings(newSettings)
                    localStorage.setItem('pomodoro-settings', JSON.stringify(newSettings))
                    if (mode === 'focus' && !isRunning) setTimeLeft(value * 60)
                  }}
                  min={1}
                  max={60}
                  step={1}
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Short Break</span>
                  <span className="font-medium">{settings.shortBreakTime / 60} min</span>
                </div>
                <Slider
                  value={[settings.shortBreakTime / 60]}
                  onValueChange={([value]) => {
                    const newSettings = { ...settings, shortBreakTime: value * 60 }
                    setSettings(newSettings)
                    localStorage.setItem('pomodoro-settings', JSON.stringify(newSettings))
                    if (mode === 'shortBreak' && !isRunning) setTimeLeft(value * 60)
                  }}
                  min={1}
                  max={30}
                  step={1}
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Long Break</span>
                  <span className="font-medium">{settings.longBreakTime / 60} min</span>
                </div>
                <Slider
                  value={[settings.longBreakTime / 60]}
                  onValueChange={([value]) => {
                    const newSettings = { ...settings, longBreakTime: value * 60 }
                    setSettings(newSettings)
                    localStorage.setItem('pomodoro-settings', JSON.stringify(newSettings))
                    if (mode === 'longBreak' && !isRunning) setTimeLeft(value * 60)
                  }}
                  min={5}
                  max={60}
                  step={5}
                />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="text-xs text-muted-foreground text-center">
            <p>🍅 Pomodoro Technique: Work for 25 minutes, then take a 5-minute break.</p>
            <p>After 4 pomodoros, take a longer 15-minute break.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
