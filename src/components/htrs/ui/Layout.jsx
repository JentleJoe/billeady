/* Small layout primitives shared by every HTRS section. */

/** Page-width wrapper — same max width and side padding as every Billeddy page. */
export const Container = ({ children, className = '' }) => (
  <div className={`max-w-7xl mx-auto px-6 md:px-12 lg:px-20 ${className}`}>{children}</div>
)

/** Small uppercase label with the site's ✦ marker (as on /high-ticket-closing). */
export const Eyebrow = ({ children, light = false, className = '', as = 'p' }) => {
  const Tag = as
  return (
  <Tag className={`flex items-start gap-2 mb-5 ${className}`}>
    <span className={`${light ? 'text-white' : 'text-brand-primary-light'} text-sm leading-5`} aria-hidden="true">
      ✦
    </span>
    <span className={`text-xs uppercase tracking-[0.2em] leading-5 ${light ? 'text-white/80' : 'text-gray-300'}`}>
      {children}
    </span>
  </Tag>
  )
}

/** Numeral + short rule used to mark steps in a sequence (01, 02, 03). */
export const IndexMark = ({ n, className = '' }) => (
  <span className={`flex items-center gap-3 ${className}`} aria-hidden="true">
    <span className="text-sm font-semibold text-brand-primary-light tabular-nums">{String(n).padStart(2, '0')}</span>
    <span className="h-px w-10 bg-brand-primary-light/40" />
  </span>
)

/** Section shell: anchor id, scroll offset for the sticky header, and vertical rhythm. */
export const Section = ({ id, className = '', children, labelledBy }) => (
  <section id={id} aria-labelledby={labelledBy} className={`scroll-mt-20 relative ${className}`}>
    {children}
  </section>
)
