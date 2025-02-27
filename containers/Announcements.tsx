import Link from 'next/link'

const Announcements = () => {
  return (
    <div className="py-12 w-full">
      <div className="w-full flex justify-center">
        <div className="bg-[#FCF0C1] w-4/5 max-w-7xl px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="space-y-4 flex-1 max-w-[457px]">
              <p className="text-sm text-gray-800">Announcements</p>
              <Link 
                href="/announcements/le-chat"
                className="group inline-flex items-baseline"
              >
                <h2 className="text-4xl text-black">
                  Announcing the all new le Chat: Your AI assistant for life and work.
                  <span className="text-[#D27548] text-2xl group-hover:translate-x-1 transition-transform ml-2">
                    →
                  </span>
                </h2>
              </Link>
            </div>
            <div className="mt-4 md:mt-0 md:flex flex-col align-text-bottom md:items-end md:justify-end">
              <time className="text-sm text-gray-900">Feb 6, 2024</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Announcements 