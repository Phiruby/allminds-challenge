import Link from 'next/link'
import Image from 'next/image'

const Announcements = () => {
  return (
    <div className="py-8 sm:py-10 md:py-12 w-full">
      <div className="w-full flex justify-center">
        <div className="bg-[#FCF0C1] w-[90%] sm:w-4/5 max-w-7xl px-4 sm:px-6 py-8 sm:py-10 md:py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="space-y-3 sm:space-y-4 flex-1 max-w-[457px]">
              <p className="text-xs sm:text-sm text-gray-800">Announcements</p>
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-black">
                  Announcing the all new le Chat: Your AI assistant for life and work.
                </h2>
                <Link 
                  href="/announcements/le-chat"
                  className="group inline-flex items-center justify-start"
                >
                  <span className="text-[#D27548] text-xl sm:text-2xl group-hover:translate-x-1 transition-transform bg-[#e76c2f] rounded w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] flex items-center justify-center">
                    <Image 
                      src="/whitetailarrow.svg" 
                      alt="Arrow" 
                      width={8} 
                      height={8}
                      className="w-[6px] sm:w-[8px] h-auto" 
                    />
                  </span>
                </Link>
              </div>
            </div>
            <div className="mt-4 md:mt-0 md:flex flex-col align-text-bottom md:items-end md:justify-end">
              <time className="text-xs sm:text-sm text-gray-900">Feb 6, 2024</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Announcements 