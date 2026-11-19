import { HTRS_CALENDLY_URL } from '../../../config/htrs'
import { ArrowIcon } from './Icons'

/**
 * Booking CTA in the Billeddy pill style (label + round icon badge), always linking to Calendly.
 * variant "primary" = maroon pill (dark backgrounds), "light" = white pill (maroon backgrounds).
 * Opens in a new tab so visitors keep their place on the page.
 */
const CalendlyButton = ({ children, variant = 'primary', size = 'md', block = false, className = '' }) => {
  const base =
    'group inline-flex items-center justify-between gap-4 rounded-full font-medium text-left transition-all duration-300 hover:shadow-xl hover:scale-[1.03] active:scale-95'
  const sizes = {
    md: 'pl-5 pr-1.5 py-1.5 text-sm',
    lg: 'pl-6 pr-2 py-2 text-sm md:text-base min-h-[3.25rem]',
  }
  const variants = {
    primary: 'bg-brand-primary text-white hover:bg-brand-accent',
    light: 'bg-white text-brand-primary hover:bg-gray-100',
  }
  const badge = variant === 'light' ? 'bg-brand-primary text-white' : 'bg-white text-brand-primary'
  const width = block ? 'w-full sm:w-auto' : ''

  return (
    <a
      href={HTRS_CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} ${variants[variant]} ${width} ${className}`}
    >
      <span>
        {children}
        <span className="sr-only"> (opens Calendly in a new tab)</span>
      </span>
      <span
        className={`${size === 'lg' ? 'w-9 h-9' : 'w-7 h-7'} ${badge} rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-0.5`}
      >
        <ArrowIcon className={size === 'lg' ? 'w-4 h-4' : 'w-3 h-3'} />
      </span>
    </a>
  )
}

/** Small reassurance line under a CTA, e.g. "Limited to 15 qualified reps per cohort • …". */
export const CtaNote = ({ items, light = false, className = '' }) => (
  <p
    className={`mt-4 text-xs md:text-sm leading-relaxed ${light ? 'text-white/70' : 'text-gray-400'} ${className}`}
  >
    {items.map((item, i) => (
      <span key={item}>
        {i > 0 && (
          <span className={`mx-2 ${light ? 'text-white/50' : 'text-brand-primary-light'}`} aria-hidden="true">
            •
          </span>
        )}
        {item}
      </span>
    ))}
  </p>
)

export default CalendlyButton
