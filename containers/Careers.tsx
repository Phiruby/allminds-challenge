import Button from '@/components/Button'
import Image from 'next/image'
const Careers = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="relative min-h-[487px] w-4/5 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/mistralcareers.webp)',
            backgroundPosition: 'center 30%',
            height:'483px'
          }}
        >
          <div className="absolute inset-0 bg-black/30" /> {/* Dark overlay */}
        </div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-6 py-24 flex flex-col justify-center">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-light text-white mb-6">
              Build the future of secure, private AI.
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Now seeking: Insatiably curious AI enthusiasts with an entrepreneurial spirit.
            </p>
            <Button 
              variant="secondary"
              className="!bg-transparent !border-b-2 !border-white hover:!bg-white/10 w-[200px]"
            >
              <span className="flex items-center w-full gap-7">
                View open roles
                <Image
                  src="/orangearrow.svg"
                  alt="Arrow" 
                  width={8}
                  height={8}
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