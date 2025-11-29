"use client"

import { useEffect, useState } from "react"

interface TimeRemaining {
  days: number
  hours: number
  minutes: number
  seconds: number
  isPast: boolean
}

function calculateTimeRemaining(targetDate: Date): TimeRemaining {
  const now = new Date()
  const difference = targetDate.getTime() - now.getTime()

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isPast: false,
  }
}

export function EventCountdown({ targetDate }: { targetDate: Date }) {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(calculateTimeRemaining(targetDate))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate))
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  if (timeRemaining.isPast) {
    return (
      <div className="flex items-center justify-center gap-4 p-6 bg-muted/50 rounded-lg">
        <div className="text-center">
          <p className="text-sm font-medium text-muted-foreground">Event Completed</p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-4 gap-3">
      <CountdownUnit value={timeRemaining.days} label="DAYS" />
      <CountdownUnit value={timeRemaining.hours} label="HOURS" />
      <CountdownUnit value={timeRemaining.minutes} label="MIN" />
      <CountdownUnit value={timeRemaining.seconds} label="SEC" />
    </div>
  )
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center bg-black dark:bg-foreground text-white dark:text-background rounded-lg p-4 min-h-[100px]">
      <div className="text-3xl md:text-4xl font-bold tabular-nums leading-none mb-2">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-xs font-medium tracking-wider opacity-80">{label}</div>
    </div>
  )
}
