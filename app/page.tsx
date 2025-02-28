'use client'

import { useEffect, useState } from 'react'
import Image from "next/image";
import Navbar from '@/containers/Navbar'
import Hero from '@/containers/Hero'
import LeChat from '@/containers/LeChat'
import PlatformMessage from '@/containers/PlatformMessage'
import Features from '@/containers/Features'
import Announcements from '@/containers/Announcements'
import Careers from '@/containers/Careers'
import CallToAction from '@/containers/CallToAction'

export default function Home() {
  const [scrollState, setScrollState] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroHeight = 690
      const docHeight = document.documentElement.scrollHeight
      const windowHeight = window.innerHeight
      const ctaStart = docHeight - windowHeight - 500 // Adjust this value as needed

      if (scrollY > heroHeight) {
        setScrollState('past-hero')
      } else {
        setScrollState('')
      }

      if (scrollY > ctaStart) {
        setScrollState('at-cta')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className={`bg-[#FDF6EC] ${scrollState}`}>
      <Navbar />
      <Hero />
      <LeChat />
      <PlatformMessage />
      <Features />
      <Announcements />
      <Careers />
      <CallToAction />
    </main>
  )
}
