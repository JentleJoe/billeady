import { useEffect, useState } from 'react'
import redLogo from '../../../assets/redLogo.png'
import { HTRS_CALENDLY_URL } from '../../../config/htrs'
import { navLinks } from '../../../content/htrs'
import { ArrowIcon } from '../ui/Icons'

/**
 * Page header — same build as the site Navbar (black bar, red logo, pill CTA, blur on scroll),
 * with in-page section links instead of site navigation, as on the /TRCC landing page.
 */
const HtrsHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return
    const onKey = (e) => e.key === 'Escape' && setIsMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isMenuOpen])

  return (
    <header
      className={`sticky top-0 z-50 px-6 md:px-12 lg:px-20 transition-all duration-300 ${
        isScrolled ? 'bg-brand-black/95 backdrop-blur-md shadow-lg py-2' : 'bg-brand-black shadow-sm py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center transition-transform duration-200 hover:scale-105" aria-label="Billeddy Saliu, back to top">
          <img src={redLogo} alt="Billeddy Saliu" width="150" height="72" className="h-10 sm:h-11 md:h-12 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Page sections">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-brand-primary-light transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={HTRS_CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-brand-primary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-accent hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Book Call
            <span className="sr-only"> (opens Calendly in a new tab)</span>
            <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-brand-primary">
              <ArrowIcon />
            </span>
          </a>

          <button
            type="button"
            className="lg:hidden text-white w-11 h-11 -mr-2 flex items-center justify-center"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="htrs-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav id="htrs-menu" className="lg:hidden mt-3 pb-4 border-t border-white/10" aria-label="Page sections">
          <div className="flex flex-col pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-gray-300 hover:text-brand-primary-light py-3"
              >
                {link.name}
              </a>
            ))}
            <a
              href={HTRS_CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="sm:hidden mt-2 inline-flex items-center gap-2 bg-brand-primary text-white px-5 py-3 rounded-full text-sm font-medium w-fit"
            >
              Book Call
              <span className="sr-only"> (opens Calendly in a new tab)</span>
              <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-brand-primary">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

export default HtrsHeader
