import SearchInput from '../components/SearchInput'

const Hero = () => {
  return (
    <div className="relative max-h-[690px] min-h-[690px] flex items-center justify-center bg-gradient-to-b from-orange-500/20 to-orange-900/40">
      <div 
        className="absolute inset-0 -z-10" 
        style={{
          backgroundImage: 'url(/mistral-background.webp)',
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
          <a href="#enterprise" className="text-white text-lg hover:text-white/80 transition-colors flex items-center">
            Enterprise deployments
            <span className="ml-2 text-xl">→</span>
          </a>
          <a href="#apis" className="text-white text-lg hover:text-white/80 transition-colors flex items-center">
            APIs on la Plateforme
            <span className="ml-2 text-xl">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero 