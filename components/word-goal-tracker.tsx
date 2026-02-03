'use client'

import { useState, useEffect, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Target, TrendingUp, TrendingDown, Minus, CheckCircle2, Plus, Minus as MinusIcon } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'

interface WordGoalTrackerProps {
  className?: string
  content: string
}

const GOAL_PRESETS = [100, 250, 500, 750, 1000, 1500, 2000, 3000, 5000]

export function WordGoalTracker({ className, content }: WordGoalTrackerProps) {
  const [open, setOpen] = useState(false)
  const [goal, setGoal] = useState(() => {
    const saved = localStorage.getItem('word-goal')
    return saved ? parseInt(saved, 10) : 500
  })
  const [dailyGoal, setDailyGoal] = useState(() => {
    const saved = localStorage.getItem('daily-word-goal')
    return saved ? parseInt(saved, 10) : 1000
  })
  const [history, setHistory] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('word-goal-history')
    return saved ? JSON.parse(saved) : {}
  })

  const wordCount = useMemo(() => {
    return content.trim().split(/\s+/).filter(w => w.length > 0).length
  }, [content])

  const today = new Date().toISOString().split('T')[0]
  const todayCount = history[today] || wordCount
  const goalProgress = Math.min((wordCount / goal) * 100, 100)
  const dailyProgress = Math.min((todayCount / dailyGoal) * 100, 100)

  // Save history when word count increases
  useEffect(() => {
    if (wordCount > (history[today] || 0)) {
      const newHistory = { ...history, [today]: wordCount }
      setHistory(newHistory)
      localStorage.setItem('word-goal-history', JSON.stringify(newHistory))
    }
  }, [wordCount, today, history])

  const goalReached = wordCount >= goal
  const dailyGoalReached = todayCount >= dailyGoal

  // Calculate streak
  const streak = useMemo(() => {
    let currentStreak = 0
    const dates = Object.keys(history).sort().reverse()

    for (let i = 0; i < dates.length; i++) {
      const date = new Date(dates[i])
      const expectedDate = new Date()
      expectedDate.setDate(expectedDate.getDate() - i)

      if (date.toISOString().split('T')[0] === expectedDate.toISOString().split('T')[0]) {
        if (history[dates[i]] >= dailyGoal) {
          currentStreak++
        }
      } else {
        break
      }
    }

    return currentStreak
  }, [history, dailyGoal])

  // Calculate trend
  const trend = useMemo(() => {
    const dates = Object.keys(history).sort()
    if (dates.length < 2) return 'none'

    const recent7Days = dates.slice(-7)
    const previous7Days = dates.slice(-14, -7)

    if (previous7Days.length === 0) return 'none'

    const recentAvg = recent7Days.reduce((sum, date) => sum + (history[date] || 0), 0) / recent7Days.length
    const previousAvg = previous7Days.reduce((sum, date) => sum + (history[date] || 0), 0) / previous7Days.length

    if (recentAvg > previousAvg * 1.1) return 'up'
    if (recentAvg < previousAvg * 0.9) return 'down'
    return 'stable'
  }, [history])

  const handleGoalChange = (newGoal: number) => {
    setGoal(newGoal)
    localStorage.setItem('word-goal', newGoal.toString())
  }

  const handleDailyGoalChange = (newGoal: number) => {
    setDailyGoal(newGoal)
    localStorage.setItem('daily-word-goal', newGoal.toString())
  }

  const adjustGoal = (delta: number) => {
    const newGoal = Math.max(0, goal + delta)
    handleGoalChange(newGoal)
  }

  const getTrendIcon = () => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-green-500" />
      case 'down': return <TrendingDown className="h-4 w-4 text-red-500" />
      default: return <Minus className="h-4 w-4 text-muted-foreground" />
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`h-8 px-2 touch-manipulation text-xs ${className} ${
            goalReached ? 'text-green-600 dark:text-green-400' : ''
          }`}
          title="Word goal tracker"
          aria-label="Word goal tracker"
        >
          {goalReached ? (
            <CheckCircle2 className="h-4 w-4 mr-1" />
          ) : (
            <Target className="h-4 w-4 mr-1" />
          )}
          <span className="hidden sm:inline">
            {wordCount}/{goal}
          </span>
          {goalReached && (
            <Badge variant="secondary" className="ml-1 text-[10px] px-1 py-0 h-4">
              Done!
            </Badge>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Word Goal Tracker
          </DialogTitle>
          <DialogDescription>
            Set writing goals and track your progress
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Current Progress */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                Document Goal
              </Label>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">
                  {wordCount}
                </span>
                <span className="text-muted-foreground">/ {goal}</span>
                {getTrendIcon()}
              </div>
            </div>
            <Progress value={goalProgress} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{goalProgress.toFixed(0)}% complete</span>
              <span>{goal - wordCount > 0 ? `${goal - wordCount} words to go` : 'Goal reached!'}</span>
            </div>
          </div>

          {/* Daily Goal */}
          <div className="space-y-3 p-4 rounded-lg bg-muted/50">
            <div className="flex items-center justify-between">
              <Label className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Daily Goal
              </Label>
              <Badge variant={dailyGoalReached ? 'default' : 'secondary'}>
                {dailyGoalReached ? 'Achieved!' : 'In Progress'}
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold">
                {todayCount}
              </span>
              <span className="text-muted-foreground">/ {dailyGoal} words today</span>
            </div>
            <Progress value={dailyProgress} className="h-2" />
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">
                Streak: <span className="font-semibold">{streak} days</span>
              </span>
              <span className="text-muted-foreground">
                {dailyProgress.toFixed(0)}% complete
              </span>
            </div>
          </div>

          {/* Quick Adjust Document Goal */}
          <div className="space-y-3">
            <Label>Quick Adjust Document Goal</Label>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => adjustGoal(-100)}
                disabled={goal <= 100}
              >
                <MinusIcon className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => adjustGoal(-10)}
                disabled={goal <= 10}
              >
                -10
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => adjustGoal(10)}
              >
                +10
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => adjustGoal(100)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {GOAL_PRESETS.map(preset => (
                <Button
                  key={preset}
                  variant={goal === preset ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleGoalChange(preset)}
                  className="text-xs"
                >
                  {preset}
                </Button>
              ))}
            </div>
          </div>

          {/* Daily Goal Slider */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>Daily Goal</Label>
              <span className="text-sm font-medium">{dailyGoal} words</span>
            </div>
            <Slider
              value={[dailyGoal]}
              onValueChange={([value]) => handleDailyGoalChange(value)}
              min={100}
              max={5000}
              step={100}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>100</span>
              <span>2500</span>
              <span>5000</span>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="space-y-2">
            <Label>Recent Activity</Label>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {Object.entries(history)
                .sort((a, b) => b[0].localeCompare(a[0]))
                .slice(0, 7)
                .map(([date, count]) => {
                  const isToday = date === today
                  const dateObj = new Date(date)
                  const formatted = isToday
                    ? 'Today'
                    : dateObj.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })

                  return (
                    <div key={date} className="flex items-center justify-between text-sm">
                      <span className={isToday ? 'font-medium' : ''}>{formatted}</span>
                      <div className="flex items-center gap-2">
                        <span>{count.toLocaleString()} words</span>
                        {count >= dailyGoal && (
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        )}
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
