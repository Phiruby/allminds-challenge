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
  // colors values taken from their webpage lol
  return (
    <div className="relative flex w-full shrink-0 flex-col items-center justify-center md:size-[125px]">
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
  );
};

const LeChat = () => {
  return (
    <div className="bg-[#FDF6EC] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 w-full bg-[#f8efc0] p-4 rounded-lg mb-24">
          <LogoWithCatFace />
          <h2 className="text-lg text-black">Le Chat: Your AI assistant for life and work.</h2>
          <div className="flex gap-4 ml-auto">
            <a href="https://apps.apple.com/app/le-chat" target="_blank" rel="noopener">
              <Image
                src="/appstore.svg"
                alt="Download on App Store"
                width={135}
                height={40}
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=ai.mistral.lechat" target="_blank" rel="noopener">
              <Image
                src="/androidstore.svg"
                alt="Get it on Google Play"
                width={135}
                height={40}
              />
            </a>
          </div>
          <div className="relative hidden md:block">
            <img src="/catgif.gif" alt="Cat" className="w-24" />
          </div>
        </div>

        <MarqueeScroll className="mb-24">
          {companies.map((company) => (
            <div key={company.name} className="mx-8">
              <Image
                src={company.logo}
                alt={company.name}
                width={120}
                height={40}
                className="opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </MarqueeScroll>

        <div className="flex flex-col lg:flex-row gap-24">
          <div className="flex-1">
            <div className="sticky top-1/2 -translate-y-1/2 max-w-[400px] mt-4">
              <h2 className="text-5xl font-light mb-8 text-black">
                Your AI future belongs in your hands. 
                <img src="/flag.svg" alt="Flag" className="inline-block ml-2 w-[27px] h-[31px]" />
              </h2>
              <FadeInSection>
                <SearchInput />
              </FadeInSection>
            </div>
          </div>
          <div className="flex-1 space-y-16">
            {features.map((feature, index) => (
              <div key={index} className="border-t border-orange-200 pt-8">
                <h3 className="text-3xl font-light mb-4 text-black">
                  {feature.title}
                </h3>
                <p className="text-md text-gray-900 flex items-start gap-4">
                  <Image 
                    src="/arrow.svg" 
                    alt="Arrow" 
                    width={24} 
                    height={24}
                    className="flex-shrink-0 mt-1"
                  />
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeChat 