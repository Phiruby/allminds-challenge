'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Button from '@/components/Button'

const GetWork = () => {
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
          }
        })
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div 
      ref={sectionRef}
      className="relative min-h-screen bg-[#FDF6EC] overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, #e5e5e5 1px, transparent 1px),
          linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px'
      }}
    >
      <div 
        className={`
          max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center
          transition-all duration-1000 transform
          ${isInView ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-20 scale-95'}
        `}
      >
        {/* Left Column */}
        <div>
          <h2 className={`
            text-6xl font-light mb-8 transition-all duration-1000 delay-200
            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            Get work done.
          </h2>
          <p className={`
            text-2xl text-gray-700 mb-12 transition-all duration-1000 delay-400
            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            Your personalized multilingual AI assistant, with web search, uploads, and data connectors.
          </p>
          <Button 
            variant="primary"
            className={`
              !bg-gray-900 !hover:bg-gray-800 transition-all duration-1000 delay-600
              ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
          >
            Discover le Chat 
            <span className="ml-2">→</span>
          </Button>
        </div>

        {/* Right Column - Chat Example */}
        <div className={`
          relative transition-all duration-1000 delay-800
          ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}
        `}>
          <Image
            src="/example.webp"
            alt="Chat Example"
            width={600}
            height={400}
            className="rounded-lg shadow-2xl"
          />
          <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
            Talk to Le Chat
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetWork 