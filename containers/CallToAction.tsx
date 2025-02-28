import Image from 'next/image'
import Link from 'next/link'

const gradientColors = [
  'bg-[#FFF5C2]',  // Light yellow. idk why this doesn't work with hsla. but works with hex
  'bg-[hsla(51,100%,50%,1)]',  // Yellow
  'bg-[hsla(41,100%,50%,1)]',  // Light orange
  'bg-[hsla(30,100%,51%,1)]',  // Orange
  'bg-[hsla(17,96%,52%,1)]',  // Dark orange
  'bg-[hsla(1,100%,44%,1)]',   // Red
]

const ActionButton = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link 
      href={href} 
      className="group flex items-center text-xl text-black hover:opacity-80 transition-opacity border-b-1 border-black pb-1"
    >
      {text}
      <span className="ml-2 group-hover:translate-x-1 transition-transform">
        <Image
          src="/orangearrow.svg"
          alt="Arrow"
          width={8}
          height={8}
        />
      </span>
    </Link>
  )
}

const CallToAction = () => {
  return (
    <div className="relative pt-12 pb-48">
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <h2 className="text-6xl font-light mb-16 max-w-4xl text-black">
          The next chapter of AI is yours.
        </h2>

        <div className="flex gap-12 mb-32">
          <ActionButton 
            href="/build"
            text="Start building with Mistral AI"
          />

          <ActionButton 
            href="/talk"
            text="Talk to an expert"
          />
        </div>
      </div>

      {/* Rainbow Gradient and Cat wrapped around footer */}
      <div className="relative mt-5 bg-secondary px-0">
        <div className="relative">
            <div className="absolute left-1/2 aspect-square size-[212px] -translate-x-1/2 translate-y-[-44%]">
                <Image
                src="/catgif.gif"
                alt="Animated cat"
                width={212}
                height={212}
                className="object-contain"
                />
            </div>
          {/* Rainbow stripes */}
          {gradientColors.map((color, index) => (
            <div 
              key={index}
              className={`w-full h-[50px] ${color}`}
            />
          ))}
          
          {/* Cat positioned on top of the first stripe */}
          
        </div>
      </div>
    </div>
  )
}

export default CallToAction