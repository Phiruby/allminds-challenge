import Image from 'next/image'
import MarqueeScroll from '@/components/MarqueeScroll'
import FadeInSection from '@/components/FadeInSection'
import SearchInput from '@/components/SearchInput'

const companies = [
  { name: 'Belfius', logo: '/companies/belfius.webp' },
  { name: 'BNP Paribas', logo: '/companies/bnp.webp' },
  { name: 'Hugging Face', logo: '/companies/huggingface.webp' },
  { name: 'MongoDB', logo: '/companies/mongo.webp' },
  { name: 'OctoAI', logo: '/companies/OctoAI.webp' },
]

const features = [
  {
    title: "Customizable, from pre-training to the real world.",
    description: "World class, benchmark-setting open models to customize, distill, fine-tune, iterate, and build on."
  },
  {
    title: "Private and portable.",
    description: "A comprehensive, enterprise-grade AI platform that can be deployed anywhere—on-premises, cloud, edge, devices, data centers, and more."
  },
  {
    title: "Transparent and trustworthy.",
    description: "Strongest global contributor to open source AI and AI policy. Mistral AI is the world's greenest and leading independent AI lab."
  },
  {
    title: "Deeply engaged solutioning and value delivery.",
    description: "Hands-on assistance from the world's best AI engineers and scientists across deployment, solutioning, safety, and beyond."
  },
  {
    title: "Delightful interfaces.",
    description: "Bringing frontier intelligence to life with intuitive user experiences across life and work."
  }
]

const LogoWithCatFace = () => {
  return (
    <div className="relative flex w-full md:w-[125px] shrink-0 flex-col items-center justify-center">
      <div className="flex flex-col w-full">
        <div className="w-full h-[25px]" style={{ background: 'hsla(51, 100%, 50%, 1)' }}></div>
        <div className="w-full h-[25px]" style={{ background: 'hsla(41, 100%, 50%, 1)' }}></div>
        <div className="w-full h-[25px]" style={{ background: 'hsla(30, 100%, 51%, 1)' }}></div>
        <div className="w-full h-[25px]" style={{ background: 'hsla(17, 96%, 52%, 1)' }}></div>
        <div className="w-full h-[25px]" style={{ background: 'hsla(1, 100%, 44%, 1)' }}></div>
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <Image
          src="/catface.svg"
          alt="Cat Face"
          width={64}
          height={64}
        />
      </div>
    </div>
  )
}

const LeChat = () => {
  return (
    <>
      {/* Sticky Search Input */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-2xl px-6 z-40">
        <div 
          className="opacity-0 invisible transition-all duration-300 [.past-hero_&]:opacity-100 [.past-hero_&]:visible [.at-cta_&]:opacity-0 [.at-cta_&]:invisible"
        >
          <SearchInput />
        </div>
      </div>

      <div className="bg-[#FDF6EC] py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Le Chat Banner */}
          <div className="flex flex-col md:flex-row items-center gap-4 w-full bg-[#f8efc0] rounded-lg mb-12 sm:mb-16 md:mb-24 p-4 md:p-0">
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
              <LogoWithCatFace />
              <h2 className="text-base sm:text-lg text-black text-center md:text-left">
                Le Chat: Your AI assistant for life and work.
              </h2>
            </div>
            
            <div className="flex flex-row items-center gap-2 sm:gap-4 mt-4 md:mt-0 md:ml-auto">
              <a href="https://apps.apple.com/app/le-chat" target="_blank" rel="noopener">
                <Image
                  src="/appstore.svg"
                  alt="Download on App Store"
                  width={120}
                  height={35}
                  className="w-[100px] sm:w-[120px] md:w-[135px]"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=ai.mistral.lechat" target="_blank" rel="noopener">
                <Image
                  src="/androidstore.svg"
                  alt="Get it on Google Play"
                  width={120}
                  height={35}
                  className="w-[100px] sm:w-[120px] md:w-[135px]"
                />
              </a>
            </div>
            <div className="hidden md:block">
              <img src="/catgif.gif" alt="Cat" className="w-24" />
            </div>
          </div>

          {/* Company Logos */}
          <MarqueeScroll className="mb-12 sm:mb-16 md:mb-24">
            {companies.map((company) => (
              <div key={company.name} className="mx-4 sm:mx-6 md:mx-8">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={120}
                  height={40}
                  className="w-[80px] sm:w-[100px] md:w-[120px] opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </MarqueeScroll>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row gap-12 sm:gap-16 md:gap-24">
            {/* Title Section */}
            <div className="flex-1">
              <div className="md:sticky md:top-1/2 md:-translate-y-1/2 max-w-[400px] mx-auto md:mx-0 text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 sm:mb-8 text-black">
                  Your AI future belongs in your hands. 
                  <img src="/flag.svg" alt="Flag" className="inline-block ml-2 w-[20px] sm:w-[24px] md:w-[27px] h-auto" />
                </h2>
              </div>
            </div>

            {/* Features Section */}
            <div className="flex-1 space-y-8 sm:space-y-12 md:space-y-16">
              {features.map((feature, index) => (
                <div key={index} className="border-t border-orange-200 pt-6 sm:pt-8">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-light mb-3 sm:mb-4 text-black">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-md text-gray-900 flex items-start gap-2 sm:gap-4">
                    <Image 
                      src="/arrow.svg" 
                      alt="Arrow" 
                      width={24} 
                      height={24}
                      className="flex-shrink-0 mt-1 w-[16px] sm:w-[20px] md:w-[24px] h-auto"
                    />
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LeChat 