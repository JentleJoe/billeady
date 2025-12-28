import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'About', href: '#about' },
    { name: 'Work With Ellie', href: '#work' },
    { name: 'Podcast', href: '#podcast' },
    { name: 'Result', href: '#result' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="w-full py-4 px-6 md:px-12 lg:px-20 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-serif text-gray-900">
          ellie swift
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                link.active
                  ? 'text-gray-900 border-b-2 border-gray-900 pb-1'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#"
          className="hidden md:flex items-center gap-2 bg-[#3D1D4E] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#2D1538] transition-colors"
        >
          Free Podcast
          <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
            <svg
              className="w-3 h-3 text-[#3D1D4E]"
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
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900"
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
        <div className="md:hidden mt-4 pb-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium ${
                  link.active ? 'text-gray-900' : 'text-gray-700'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#"
              className="flex items-center gap-2 bg-[#3D1D4E] text-white px-5 py-2.5 rounded-full text-sm font-medium w-fit"
            >
              Free Podcast
              <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-[#3D1D4E]"
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
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
