'use client'

import { useEffect, useRef } from 'react'

interface MarqueeScrollProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

const MarqueeScroll = ({ children, speed = 40, className = '' }: MarqueeScrollProps) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scroll = scrollRef.current
    const content = contentRef.current
    if (!scroll || !content) return

    const clone = content.cloneNode(true) as HTMLDivElement
    scroll.appendChild(clone)

    let progress = 0
    let reqId: number

    const animate = () => {
      progress += speed / 60
      if (progress >= content.scrollWidth) {
        progress = 0
        scroll.appendChild(clone.cloneNode(true)) // Re-append the clone to ensure looping
      }
      scroll.style.transform = `translateX(-${progress}px)`
      reqId = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(reqId)
  }, [speed])

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div ref={scrollRef} className="inline-block">
        <div ref={contentRef} className="inline-flex items-center">
          {children}
        </div>
      </div>
    </div>
  )
}

export default MarqueeScroll 