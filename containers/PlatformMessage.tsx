import Image from 'next/image'
import MarqueeScroll from '@/components/MarqueeScroll'

const MessageItem = () => {
  return (
    <div className="flex items-center gap-6 mx-12">
      <span className="text-6xl text-black whitespace-nowrap">
        One platform. Many uses. For all humans.
      </span>
      <Image
        src="/catface_black.svg"
        alt="Cat Face"
        width={0}
        height={0}
        className="flex-shrink-0 text-7xl"
        style={{ width: 'auto', height: '0.75em' }}
      />
    </div>
  )
}

const PlatformMessage = () => {
  return (
    <div className="py-2 bg-[#FDF6EC]">
      <MarqueeScroll speed={60}>
        {/* Repeat the message multiple times to ensure smooth looping */}
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
      </MarqueeScroll>
    </div>
  )
}

export default PlatformMessage 