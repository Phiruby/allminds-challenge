import Image from "next/image";import Navbar from '@/containers/Navbar'
import Hero from '@/containers/Hero'
import LeChat from '@/containers/LeChat'
import PlatformMessage from '@/containers/PlatformMessage'
import GetWork from '@/containers/GetWork'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LeChat />
      <PlatformMessage />
      <GetWork />
    </main>
  )
}
