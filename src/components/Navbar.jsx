import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import redLogo from '../assets/redLogo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Closing Services', href: '/high-ticket-closing' },
    { name: 'Coaching', href: '/coaching' },
    { name: 'Consulting', href: '/consulting' },
    { name: 'Books', href: '/books' },
  ]

  const isActive = (href) => {
    if (href === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(href)
  }

  return (
    <nav className={`sticky top-0 z-50 py-3 px-6 md:px-12 lg:px-20 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-white shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center transition-transform duration-200 hover:scale-105"
          aria-label="Billeddy home"
        >
          <img src={redLogo} alt="Billeddy Saliu" className="h-11 sm:h-12 md:h-14 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? 'text-brand-primary border-b-2 border-brand-primary pb-1'
                  : 'text-gray-700 hover:text-brand-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          to="/coaching#programs"
          className="hidden lg:flex items-center gap-2 bg-brand-primary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-accent hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
        >
          Free Training
          <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
            <svg
              className="w-3 h-3 text-brand-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 bg-white">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium ${
                  isActive(link.href) ? 'text-brand-primary' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/coaching#programs"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 bg-brand-primary text-white px-5 py-2.5 rounded-full text-sm font-medium w-fit"
            >
              Free Training
              <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-brand-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
