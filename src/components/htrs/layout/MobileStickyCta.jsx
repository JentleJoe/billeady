import { useEffect, useState } from 'react'
import { HTRS_CALENDLY_URL } from '../../../config/htrs'
import { hero } from '../../../content/htrs'
import { ArrowIcon } from '../ui/Icons'

/**
 * Mobile-only booking bar. Appears once the hero CTA has scrolled away and hides again
 * near the end of the page, where the final CTA takes over.
 */
const MobileStickyCta = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      const nearEnd = y + window.innerHeight > document.documentElement.scrollHeight - 900
      setShow(y > 800 && !nearEnd)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-brand-black/95 backdrop-blur-md border-t border-white/10 transition-all duration-300 ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
      aria-hidden={!show}
    >
      <a
        href={HTRS_CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={show ? 0 : -1}
        className="flex items-center justify-between gap-3 w-full bg-brand-primary text-white rounded-full pl-5 pr-1.5 py-1.5 text-sm font-medium active:scale-95 transition-transform"
      >
        <span>
          {hero.cta}
          <span className="sr-only"> (opens Calendly in a new tab)</span>
        </span>
        <span className="w-8 h-8 bg-white text-brand-primary rounded-full flex items-center justify-center shrink-0">
          <ArrowIcon />
        </span>
      </a>
    </div>
  )
}

export default MobileStickyCta
