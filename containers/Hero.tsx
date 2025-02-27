import Image from 'next/image'
import SearchInput from '../components/SearchInput'

interface HeroButtonProps {
  text: string;
}

const HeroButton = ({ text }: HeroButtonProps) => {
  return (
    <button type="button" className="text-white text-lg hover:text-white/80 transition-colors flex items-center border-b-2 border-white gap-2 py-2 cursor-pointer group">
        {text}
        <Image
            src="/blackarrow.svg"
            alt="Black Arrow"
            width={8}
            height={13}
            className="ml-2 text-xl group-hover:text-orange-500"
          />
      </button>
  )
}

const Hero = () => {
  return (
    <div className="relative max-h-[690px] min-h-[690px] flex items-center justify-center"
      style={{
        backgroundImage: 'url(/mistralbackground.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div 
        className="absolute inset-0 -z-10" 
        style={{
          backgroundImage: 'url(/mistralbackground.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        <h1 className="text-6xl md:text-7xl font-light text-white mb-6">
          Frontier AI. In Your Hands.
        </h1>
        <p className="text-xl text-white mb-12">
          Configurable AI for all builders.
        </p>
        
        <div className="w-full max-w-2xl mx-auto">
          <SearchInput />
        </div>

        <div className="mt-12 flex items-center justify-center space-x-12">
          <HeroButton text="Enterprise deployments" />
          <HeroButton text="APIs on la Plateforme" />
        </div>
      </div>
    </div>
  )
}

export default Hero 