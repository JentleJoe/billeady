import { useLayoutEffect, useRef, useState } from 'react'
import { HTRS_TESTIMONIAL_IMAGES, TESTIMONIAL_IMAGE_SPEC } from '../../../config/htrs'
import { testimonials } from '../../../content/htrs'
import ImageSlot from '../ui/ImageSlot'
import { ChevronLeftIcon, ChevronRightIcon, QuoteMark } from '../ui/Icons'

const initialsOf = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')

const photoFor = (t) => ({ ...HTRS_TESTIMONIAL_IMAGES[t.id], ...TESTIMONIAL_IMAGE_SPEC, fit: 'cover', alt: t.name })

/** Round student thumbnail: the photo once supplied, initials until then. */
const Thumb = ({ t, active }) => {
  const photo = HTRS_TESTIMONIAL_IMAGES[t.id]
  const ring = active ? 'ring-2 ring-brand-primary-light' : 'ring-1 ring-white/15'
  if (photo?.src) {
    return (
      <img
        src={photo.src}
        alt=""
        width="48"
        height="48"
        loading="lazy"
        decoding="async"
        className={`w-11 h-11 md:w-12 md:h-12 rounded-full object-cover shrink-0 ${ring}`}
        style={photo.position ? { objectPosition: photo.position } : undefined}
      />
    )
  }
  return (
    <span
      className={`htrs-placeholder w-11 h-11 md:w-12 md:h-12 rounded-full shrink-0 flex items-center justify-center text-xs font-semibold text-white/80 ${ring}`}
      aria-hidden="true"
    >
      {initialsOf(t.name)}
    </span>
  )
}

/**
 * Five long write-ups presented as a reader rather than a wall of equal cards.
 * - Desktop: a student index on the left (ARIA tabs), the full write-up on the right at a
 *   comfortable line length. All panels share one grid cell, so switching never shifts the page.
 * - Mobile: the index becomes a swipeable row of students above the reader.
 * Keyboard: arrow keys / Home / End move between students; Previous / Next buttons below.
 */
const Testimonials = () => {
  const [active, setActive] = useState(0)
  const tabRefs = useRef([])
  const rowRef = useRef(null)
  const rootRef = useRef(null)
  const count = testimonials.length

  const pendingReveal = useRef(false)

  const select = (index, { focus = false, reveal = false } = {}) => {
    const next = (index + count) % count
    // Previous/Next sit at the bottom of a long write-up: bring the start of the next one into view
    pendingReveal.current = reveal && rootRef.current?.getBoundingClientRect().top < 0
    setActive(next)
    if (focus) tabRefs.current[next]?.focus({ preventScroll: true })
  }

  // After the new write-up has rendered: bring the chosen student into view in the mobile row
  // (horizontal only), and scroll the page back to the reader if needed.
  useLayoutEffect(() => {
    const row = rowRef.current
    const tab = tabRefs.current[active]
    const reveal = pendingReveal.current
    pendingReveal.current = false
    if (row && tab && row.scrollWidth > row.clientWidth) {
      const pad = parseFloat(getComputedStyle(row).paddingLeft) || 0
      const left = row.scrollLeft + tab.getBoundingClientRect().left - row.getBoundingClientRect().left - pad
      // instant: programmatic smooth scrolling of a nested scroller is unreliable in Chrome
      row.scrollTo({ left, behavior: 'auto' })
    }
    if (reveal) rootRef.current?.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }, [active])

  const onKeyDown = (e) => {
    const keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }
    if (e.key in keys) {
      e.preventDefault()
      select(active + keys[e.key], { focus: true })
    } else if (e.key === 'Home') {
      e.preventDefault()
      select(0, { focus: true })
    } else if (e.key === 'End') {
      e.preventDefault()
      select(count - 1, { focus: true })
    }
  }

  return (
    <div ref={rootRef} className="scroll-mt-24 grid gap-6 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-10">
      {/* Student index (stays in view beside long write-ups on desktop) */}
      <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
        <div
          ref={rowRef}
          role="tablist"
          aria-label="Student testimonials"
          onKeyDown={onKeyDown}
          className="htrs-scroll-row flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible -mx-6 px-6 md:-mx-12 md:px-12 lg:mx-0 lg:px-0 pb-1"
        >
          {testimonials.map((t, index) => {
            const isActive = index === active
            return (
              <button
                key={t.id}
                ref={(el) => (tabRefs.current[index] = el)}
                id={`htrs-tab-${t.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`htrs-panel-${t.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => select(index)}
                className={`shrink-0 flex items-center gap-3 text-left rounded-sm border px-3 py-3 lg:px-4 transition-colors duration-200 min-w-[13.5rem] lg:min-w-0 ${
                  isActive
                    ? 'bg-brand-primary/15 border-brand-primary/60'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/25 hover:bg-white/[0.04]'
                }`}
              >
                <Thumb t={t} active={isActive} />
                <span className="min-w-0">
                  <span className={`block text-sm font-semibold ${isActive ? 'text-white' : 'text-gray-200'}`}>{t.name}</span>
                  <span className="block text-xs text-gray-400 mt-0.5 truncate">
                    {t.designation} · {t.location}
                  </span>
                </span>
              </button>
            )
          })}
        </div>
        <p className="hidden lg:block mt-5 text-xs text-gray-500 tabular-nums" aria-live="polite">
          {String(active + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
        </p>
      </div>

      {/* Reader */}
      <div className="grid">
        {testimonials.map((t, index) => {
          const isActive = index === active
          const [first, ...rest] = t.paragraphs
          return (
            <article
              key={t.id}
              id={`htrs-panel-${t.id}`}
              role="tabpanel"
              aria-labelledby={`htrs-tab-${t.id}`}
              tabIndex={isActive ? 0 : -1}
              className={`[grid-area:1/1] bg-brand-muted border border-white/10 rounded-sm p-6 sm:p-8 md:p-10 lg:p-12 transition-opacity duration-300 ${
                isActive ? 'opacity-100' : 'hidden lg:block lg:invisible lg:opacity-0'
              }`}
            >
              <header className="flex items-center gap-5 md:gap-6 pb-6 md:pb-8 border-b border-white/10">
                <ImageSlot
                  image={photoFor(t)}
                  compact
                  initials={initialsOf(t.name)}
                  className="w-20 sm:w-24 md:w-28 shrink-0 shadow-xl"
                />
                <div className="min-w-0">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">{t.name}</h3>
                  <p className="mt-1 text-sm font-medium text-brand-primary-light">{t.designation}</p>
                  <p className="mt-1 text-sm text-gray-400">
                    {t.location} <span aria-hidden="true">·</span> <span className="sr-only">,</span> {t.date}
                  </p>
                </div>
              </header>

              <div className="pt-6 md:pt-8 max-w-[65ch]">
                <QuoteMark className="w-8 h-8 text-brand-primary mb-4" />
                <p className="text-lg md:text-xl text-white leading-relaxed">{first}</p>
                <div className="mt-5 space-y-4 text-[15px] md:text-base text-gray-300 leading-relaxed">
                  {rest.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>

              <footer className="mt-8 md:mt-10 pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => select(active - 1, { reveal: true })}
                  className="group inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white min-h-11"
                  aria-label={`Previous testimonial: ${testimonials[(index - 1 + count) % count].name}`}
                  tabIndex={isActive ? 0 : -1}
                >
                  <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-primary group-hover:bg-brand-primary transition-colors">
                    <ChevronLeftIcon className="w-4 h-4" />
                  </span>
                  <span className="hidden sm:inline">Previous</span>
                </button>
                <span className="text-xs text-gray-500 tabular-nums lg:hidden">
                  {index + 1} / {count}
                </span>
                <button
                  type="button"
                  onClick={() => select(active + 1, { reveal: true })}
                  className="group inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white min-h-11 text-right"
                  aria-label={`Next testimonial: ${testimonials[(index + 1) % count].name}`}
                  tabIndex={isActive ? 0 : -1}
                >
                  <span className="hidden sm:inline">
                    Next: <span className="text-white">{testimonials[(index + 1) % count].name}</span>
                  </span>
                  <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-primary group-hover:bg-brand-primary transition-colors">
                    <ChevronRightIcon className="w-4 h-4" />
                  </span>
                </button>
              </footer>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Testimonials
