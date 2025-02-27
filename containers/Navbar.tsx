import Button from '../components/Button'

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-2xl">M</div>
        
        {/* Navigation links - moved to center */}
        <div className="hidden md:flex items-center space-x-8 text-white">
          <a href="#products" className="hover:text-white/80 transition-colors">Products</a>
          <a href="#solutions" className="hover:text-white/80 transition-colors">Solutions</a>
          <a href="#research" className="hover:text-white/80 transition-colors">Research</a>
          <a href="#resources" className="hover:text-white/80 transition-colors">Resources</a>
          <a href="#company" className="hover:text-white/80 transition-colors">Company</a>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="secondary">Try the API</Button>
          <Button variant="primary">Talk to sales</Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 