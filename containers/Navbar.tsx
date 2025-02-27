import Button from '../components/Button'
import Image from 'next/image'
import NoTailArrow from '../components/NoTailArrow'
const NavBarButtons = ({text} : {text: string}) => {
  return (
    <button type="button" className="inline-flex justify-center gap-md whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-[36px] gap-x-md p-sm !h-[36px] relative items-center gap-x-[10px] border-none p-3 text-sm group bg-white/30 text-white hover:bg-white hover:text-black">
      {text}
      <Image
            src="/whitearrow.svg"
            alt="White Arrow"
            width={8}
            height={13}
            className="ml-2 text-xl group-hover:text-orange-500 transform transition-transform duration-300 group-hover:translate-x-2"
          />

    </button>
  )
}

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-2xl">
          <img src="/catface.svg" alt="Cat Face" className="inline-block w-12 h-12 mr-2" />

        </div>
        
        {/* Navigation links - moved to center */}
        <div className="hidden md:flex items-center space-x-8 text-white">
          <a href="#products" className="hover:text-white/80 transition-colors">Products</a>
          <a href="#solutions" className="hover:text-white/80 transition-colors">Solutions</a>
          <a href="#research" className="hover:text-white/80 transition-colors">Research</a>
          <a href="#resources" className="hover:text-white/80 transition-colors">Resources</a>
          <a href="#company" className="hover:text-white/80 transition-colors">Company</a>
        </div>

        <div className="flex items-center space-x-4">
            <NavBarButtons text="Try the API" />
            <NavBarButtons text="Talk to sales" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar 