import Image from 'next/image'
import SearchInput from '../components/SearchInput'

interface HeroButtonProps {
  text: string;
}

const HeroButton = ({ text }: HeroButtonProps) => {
  return (
    <button type="button" className="text-white text-base sm:text-lg hover:text-white/80 transition-colors flex items-center border-b-2 border-white gap-2 py-2 cursor-pointer group w-full md:w-auto justify-center md:justify-start">
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
    <div 
      className="relative min-h-[690px] flex items-center justify-center"
      style={{
        backgroundImage: 'url(/mistralbackground.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4 sm:mb-6">
          Frontier AI. In Your Hands.
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white mb-8 sm:mb-12">
          Configurable AI for all builders.
        </p>
        
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
          <SearchInput />
        </div>

        <div className="mt-8 sm:mt-12 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12 w-full md:w-auto px-4 md:px-0">
          <HeroButton text="Enterprise deployments" />
          <HeroButton text="APIs on la Plateforme" />
        </div>
      </div>
    </div>
  )
}

export default Hero 