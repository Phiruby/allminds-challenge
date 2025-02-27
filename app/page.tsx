import Image from "next/image";import Navbar from '@/containers/Navbar'
import Hero from '@/containers/Hero'
import LeChat from '@/containers/LeChat'
import PlatformMessage from '@/containers/PlatformMessage'
import Features from '@/containers/Features'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LeChat />
      <PlatformMessage />
      <Features />
    </main>
  )
}
