import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  to: number
  duration?: number
  className?: string
}

/** Replaces the jQuery counterUp plugin: animates 0 -> `to` once the
 * element scrolls into view, using an IntersectionObserver. */
export default function Counter({ to, duration = 3000, className }: CounterProps) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated.current) {
            animated.current = true
            const start = performance.now()
            const step = (now: number) => {
              const progress = Math.min((now - start) / duration, 1)
              setValue(Math.floor(progress * to))
              if (progress < 1) requestAnimationFrame(step)
              else setValue(to)
            }
            requestAnimationFrame(step)
          }
        })
      },
      { threshold: 1 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [to, duration])

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  )
}
