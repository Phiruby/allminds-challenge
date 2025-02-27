import GetWork from './GetWork'

const Features = () => {
  return (
    <div>
      <GetWork
        title="Get work done."
        description="Your personalized multilingual AI assistant, with web search, uploads, and data connectors."
        buttonText="Discover le Chat"
        imageSrc="/example.webp"
      />
      <GetWork
        title="Build AI-powered apps."
        description="Build and deploy custom AI solutions with frontier models."
        buttonText="Discover la Plateforme"
        imageSrc="/example2.webp"
        imageLabel="Talk to la Plateforme"
      />
    </div>
  )
}

export default Features 