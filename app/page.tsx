import Image from "next/image";import Navbar from '@/containers/Navbar'
import Hero from '@/containers/Hero'
import LeChat from '@/containers/LeChat'
import PlatformMessage from '@/containers/PlatformMessage'
import Features from '@/containers/Features'
import Announcements from '@/containers/Announcements'
import Careers from '@/containers/Careers'
import CallToAction from '@/containers/CallToAction'

export default function Home() {
  return (
    <main className="bg-[#FDF6EC]">
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
