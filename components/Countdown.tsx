'use client'

import { useState, useEffect } from 'react'

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2025-11-19T22:00:00')

    const updateCountdown = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="countdown-container">
      <h1 className="title">COUNTDOWN TO PLAYOFF SEASON</h1>
      <div className="countdown">
        <div className="time-unit">
          <span className="time-value">{timeLeft.days.toString().padStart(2, '0')}</span>
          <span className="time-label">Days</span>
        </div>
        <div className="time-unit">
          <span className="time-value">{timeLeft.hours.toString().padStart(2, '0')}</span>
          <span className="time-label">Hours</span>
        </div>
        <div className="time-unit">
          <span className="time-value">{timeLeft.minutes.toString().padStart(2, '0')}</span>
          <span className="time-label">Minutes</span>
        </div>
        <div className="time-unit">
          <span className="time-value">{timeLeft.seconds.toString().padStart(2, '0')}</span>
          <span className="time-label">Seconds</span>
        </div>
      </div>
    </div>
  )
}