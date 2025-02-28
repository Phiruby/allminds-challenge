import Button from '@/components/Button'
import Image from 'next/image'

const Careers = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="relative min-h-[400px] sm:min-h-[450px] md:min-h-[487px] w-[90%] sm:w-4/5 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/mistralcareers.webp)',
            backgroundPosition: 'center 30%'
          }}
        >
          <div className="absolute inset-0 bg-black/30" /> {/* Dark overlay */}
        </div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 flex flex-col justify-center">
          <div className="max-w-xs sm:max-w-sm md:max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 sm:mb-6">
              Build the future of secure, private AI.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8">
              Now seeking: Insatiably curious AI enthusiasts with an entrepreneurial spirit.
            </p>
            <Button 
              variant="secondary"
              className="!bg-transparent !border-b-2 !border-white hover:!bg-white/10 w-full sm:w-[200px] text-sm sm:text-base"
            >
              <span className="flex items-center justify-between w-full">
                View open roles
                <Image
                  src="/orangearrow.svg"
                  alt="Arrow" 
                  width={8}
                  height={8}
                  className="w-[6px] sm:w-[8px] h-auto"
                />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Careers 