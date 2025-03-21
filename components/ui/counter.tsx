"use client"

import { useState, useEffect } from "react"

interface CounterProps {
  end: number
  duration?: number
  decimals?: number
}

export function Counter({ end, duration = 2, decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const countUp = (timestamp: number) => {
      if (!startTime) startTime = timestamp

      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const currentCount = progress * end

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(countUp)
      }
    }

    animationFrame = requestAnimationFrame(countUp)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [end, duration])

  return <span>{count.toFixed(decimals)}</span>
}

