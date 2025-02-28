'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Button from '@/components/Button'

interface GetWorkProps {
  title: string
  description: string
  buttonText: string
  imageSrc: string
  imageAlt?: string
  imageLabel?: string
}

const GetWork = ({ 
  title, 
  description, 
  buttonText, 
  imageSrc, 
  imageAlt = "Example", 
  imageLabel = "Talk to Le Chat" 
}: GetWorkProps) => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      let progress = 1 - (rect.bottom - windowHeight) / (rect.height)
      progress = Math.max(0, Math.min(1, progress))
      
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scale = 0.8 + (scrollProgress * 0.2)
  const contentOpacity = 0.5 + (scrollProgress * 0.5)

  return (
    <div 
      ref={sectionRef}
      className="relative min-h-screen bg-[#FDF6EC] overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 140, 0, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 140, 0, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px'
      }}
    >
      <div 
        className="relative max-w-7xl mx-auto px-6 py-24"
        style={{
          transform: `scale(${scale})`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          style={{
            opacity: contentOpacity,
            transition: 'opacity 0.0s ease-out'
          }}
        >
          {/* Left Column */}
          <div>
            <h2 className="text-6xl text-black mb-8">
              {title}
            </h2>
            <p className="text-2xl text-gray-700 mb-12">
              {description}
            </p>
            <Button 
              variant="primary"
              className="!bg-gray-900 !hover:bg-gray-800 br-0 flex items-center gap-3"
            >
              {buttonText}
              <Image
                src="/orangearrow.svg"
                alt="Arrow"
                width={8}
                height={8}
              />
            </Button>
          </div>

          {/* Right Column - Example Image */}
          <div className="relative">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              {imageLabel}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetWork 