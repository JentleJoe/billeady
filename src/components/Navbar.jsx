import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Closing Services', href: '/high-ticket-closing' },
    { name: 'Coaching', href: '/coaching' },
    { name: 'Consulting', href: '/consulting' },
    { name: 'Programs', href: '/programs' },
    { name: 'Book', href: '/book' },
  ]

  const isActive = (href) => {
    if (href === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(href)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 lg:px-20 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-medium text-[#722F37]">
          billeady
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? 'text-[#722F37] border-b-2 border-[#722F37] pb-1'
                  : 'text-gray-700 hover:text-[#722F37]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          to="/programs"
          className="hidden lg:flex items-center gap-2 bg-[#722F37] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#5C242B] transition-colors"
        >
          Free Training
          <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
            <svg
              className="w-3 h-3 text-[#722F37]"
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
                  isActive(link.href) ? 'text-[#722F37]' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/programs"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 bg-[#722F37] text-white px-5 py-2.5 rounded-full text-sm font-medium w-fit"
            >
              Free Training
              <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-[#722F37]"
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
