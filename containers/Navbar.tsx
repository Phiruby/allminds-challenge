'use client'

import { useEffect, useState } from 'react'
import Button from '../components/Button'
import Image from 'next/image'

const NavBarButtons = ({text, isLight} : {text: string, isLight: boolean}) => {
  return (
    <button 
      type="button" 
      className={`
        inline-flex justify-center gap-md whitespace-nowrap ring-offset-background 
        transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 
        focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
        disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 
        h-[36px] gap-x-md p-sm !h-[36px] relative items-center gap-x-[10px] border-none 
        p-3 text-sm group
        ${isLight 
          ? 'bg-white/30 text-white hover:bg-white hover:text-black' 
          : 'bg-[#f8efc0] text-black hover:bg-[#B85F35]'
        }
      `}
    >
      {text}
      <Image
        src={isLight ? "/whitearrow.svg" : "/orangearrow.svg"}
        alt="Arrow"
        width={8}
        height={13}
        className="ml-2 text-xl group-hover:text-orange-500 transform transition-transform duration-300 group-hover:translate-x-2"
      />
    </button>
  )
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPastHero, setIsPastHero] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      // hero height around 690px
      setIsPastHero(window.scrollY > 690)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300
        before:absolute before:inset-0 before:transition-all before:ease-in-out before:duration-500 before:-z-10
        ${isPastHero 
          ? 'before:bg-[#FDF6EC] before:translate-y-0' 
          : isScrolled ? 'before:backdrop-blur-lg before:translate-y-0' : 'before:bg-transparent before:-translate-y-full'
        }
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className={`font-bold text-2xl transition-all duration-300 ${isPastHero ? 'text-black' : 'text-white'}`}>
          <Image
            src={isPastHero ? "/coloredcatface.svg" : "/catface.svg"}
            alt="Cat Face"
            width={48}
            height={48}
            className="inline-block mr-2"
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {['Products', 'Solutions', 'Research', 'Resources', 'Company'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className={`
                transition-colors
                ${isPastHero 
                  ? 'text-black hover:text-black/80' 
                  : 'text-white hover:text-white/80'
                }
              `}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <NavBarButtons text="Try the API" isLight={!isPastHero} />
          <NavBarButtons text="Talk to sales" isLight={!isPastHero} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar 