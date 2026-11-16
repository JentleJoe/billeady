import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { FadeIn } from '../components/AnimationWrappers'
import redLogo from '../assets/redLogo.png'
import mentorPortrait from '../assets/newSaliuImg.jpg'
import { TRAINING_WHATSAPP_URL, TRAINING_IMAGES } from '../config/training'

/* ------------------------------------------------------------------ */
/* Page metadata (client-side; the static copy for link previews is    */
/* generated at build time in vite.config.js)                          */
/* ------------------------------------------------------------------ */

const PAGE_TITLE = 'The Remote Closers Club | Billeddy Saliu'
const PAGE_DESCRIPTION =
  'Discover how to master remote high ticket closing & appointment setting and land $1,000 to $3,000/month sales seats with US, UK & international companies, right from your phone or laptop.'

/* ------------------------------------------------------------------ */
/* Content (from the supplied landing page document)                   */
/* ------------------------------------------------------------------ */

const navLinks = [
  { name: 'Proof', href: '#proof' },
  { name: 'Curriculum', href: '#curriculum' },
  { name: 'Enrollment', href: '#enrollment' },
  { name: 'FAQ', href: '#faq' },
]

const crisisPoints = [
  'The price of food, fuel, rent, and data doubles every few months.',
  'The Naira and African currencies keep tumbling against the US Dollar.',
  'A ₦150,000 or ₦300,000 salary that used to mean something a few years ago can barely cover basic survival today.',
]

// Icons: same Heroicons outline set, stroke and size as the site's "My Model" cards (Solution.jsx)
const deadEnds = [
  {
    // crowded marketplace: thousands bidding for the same job
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    title: 'Freelancing on Upwork or Fiverr?',
    text: 'You spend months bidding against 2,000 people from India, Pakistan, and Nigeria willing to do 10 hours of graphic design or data entry for $5.',
  },
  {
    // code brackets
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    title: 'Tech and Coding?',
    text: 'You spend 12 to 18 months struggling through Python, HTML, or UI/UX only to discover that the entry level junior developer market is oversaturated and tech companies are laying off thousands.',
  },
  {
    // falling chart: liquidated accounts
    icon: 'M13 17h8m0 0V9m0 8l-8-8-4 4-6-6',
    title: 'Crypto, Forex, or Ponzi Schemes?',
    text: 'Constant stress, high risk, and waking up to liquidated accounts and empty promises.',
  },
]

const highTicketOffers = [
  'Luxury real estate developments and off plan investment properties',
  'High level business coaching & executive consulting programs',
  '$5,000 to $20,000 B2B marketing and software contracts',
]

// Same icon set as deadEnds: real estate, coaching/consulting, B2B contracts
const offerIcons = [
  'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
  'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
]

const dontCare = [
  "They don't care where you live.",
  "They don't care about your university degree.",
  "They don't care about your passport.",
]

const achievements = [
  'A single cold message on LinkedIn landed me an exclusive closing role with a US real estate investment firm, closing property and investment allocations from their inbound leads.',
  'Another high ticket offer paid me $22,000 in pure cash commissions.',
  'International founders literally slide into my private DMs asking for closers I train, like this founder of an eco resort community in Indonesia:',
]

const modules = [
  {
    title: 'The Diagnostic Closing Architecture',
    points: [
      'How to command Equal Business Stature with American and European buyers so they view you as an executive peer, not a telemarketer.',
      'The Subconscious Closing Framework: How to systematically neutralize the top objections ("I need to think about it," "Too expensive," "Let me talk to my partner") before they are ever spoken.',
      'The art of the Strategic Pause: How to use silence to make prospects convince themselves to sign.',
    ],
  },
  {
    title: 'Remote Appointment Setting Mastery',
    points: [
      "Don't want to take full 45 minute closing calls yet? Start with setting.",
      'How to book high intent calls inside direct messages and brief 10 minute phone triage calls for 7 figure businesses.',
      'How to secure $800 to $1,500/month base retainers plus performance commissions just for managing inbound calendars.',
    ],
  },
  {
    title: 'The International Offer Landing Engine',
    points: [
      'The exact message framework I used to land an international real estate closing seat with 1 single LinkedIn DM.',
      'How to bypass 200 desperate applicants in comment sections and get international founders inviting you directly onto their sales teams.',
      'How to optimize your LinkedIn, X, and Instagram profiles so overseas founders view you as an elite professional.',
    ],
  },
  {
    title: 'Managing Global Contracts & Foreign Currency Payouts',
    points: [
      'How to legally receive your hard currency commissions in USD, GBP, and EUR without local banking restrictions (Wise, Geegpay, Grey, Stripe).',
      'How to audit offer contracts, ensure commission transparency, and retain long term, stable sales seats.',
    ],
  },
]

const fitItems = [
  'You are tired of earning local currency while the cost of living skyrockets every single month.',
  'You are willing to dedicate 1–2 hours a day to study call psychology and practice real world frameworks.',
  'You have a smartphone or laptop and a reliable internet connection.',
  'You want a high status, remote career where your income directly reflects your ability to deliver results.',
]

const notFitItems = [
  'You are looking for a "get rich quick" scheme, passive investment, or Ponzi system.',
  'You are not willing to speak to people or learn high level communication.',
  'You make excuses instead of following proven frameworks and putting in the work.',
]

const tiers = [
  { fee: '₦100,000', share: '0%', note: 'Full Pass' },
  { fee: '₦90,000', share: '2%' },
  { fee: '₦80,000', share: '4%' },
  { fee: '₦70,000', share: '6%' },
  { fee: '₦60,000', share: '8%' },
  { fee: '₦50,000', share: '10%' },
  { fee: '₦40,000', share: '12%' },
  { fee: '₦30,000', share: '14%' },
  { fee: '₦20,000', share: '16%', note: 'Minimum Entry' },
]

const guarantees = [
  {
    title: 'One Month Only',
    text: 'Your percentage commitment applies only to your first 30 days of active earnings. From Month 2 onward, every single cent you earn is 100% yours.',
  },
  {
    title: 'Mutual Accountability',
    text: "We don't make money on the backend unless you get placed and perform. This guarantees that you get our full attention, live roleplays, and direct placement guidance.",
  },
  {
    title: 'Zero Hidden Fees',
    text: 'There are no renewal fees, software charges, or surprise costs.',
  },
]

const joinSteps = [
  'Click the button below to open our verified payment gateway.',
  'Select your payment tier (from the ₦20,000 minimum entry up to the ₦100,000 Full Pass).',
  'Complete your payment via Instant Bank Transfer, USSD, or Card.',
  'You will be redirected immediately to the training portal and our private community hub.',
]

const faqs = [
  {
    q: 'Do I need an American or British accent to close international deals?',
    a: 'No. International founders and high net worth buyers do not care about fake accents. They care about clarity, confidence, and commercial intelligence. If you speak clear, professional English and use our diagnostic frameworks, Western buyers will respect and buy from you.',
  },
  {
    q: 'What if I have zero prior sales experience?',
    a: "That is actually an advantage. Having zero experience means you don't have bad, manipulative habits to unlearn. We train you from ground zero using institutional, consultative sales psychology.",
  },
  {
    q: 'How many hours do I need to commit every day?',
    a: 'During the training phase, 1 to 2 hours a day is plenty. Once placed on an active offer, closers typically work 3 to 5 hours a day taking pre-booked calls from their calendar.',
  },
  {
    q: 'How will I actually land an international role?',
    a: "We don't leave you to guess. Module 3 gives you our complete Outbound Positioning Engine showing you how to message founders directly to secure seats. Furthermore, as foreign founders reach out to us with hiring requests (like Carlos from Indonesia), vetted students in the Club receive direct priority referrals.",
  },
]

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */

const WhatsAppIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const CheckIcon = ({ className = 'w-2.5 h-2.5' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
)

/** Outline icon at the site's standard size and stroke (w-5, 1.5) — see Solution.jsx. */
const LineIcon = ({ path, className = 'w-5 h-5' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={path} />
  </svg>
)

/** Small numeral that marks each step of an argument (01, 02, 03). */
const BeatNumber = ({ n }) => (
  <div className="flex items-center gap-3 mb-5" aria-hidden="true">
    <span className="text-sm font-semibold text-brand-primary-light tabular-nums">{String(n).padStart(2, '0')}</span>
    <span className="h-px w-10 bg-brand-primary-light/40" />
  </div>
)

const CrossIcon = ({ className = 'w-2.5 h-2.5' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

/**
 * WhatsApp CTA in the site's pill style (label + white icon circle).
 * variant "primary" = maroon pill, "light" = white pill for maroon backgrounds.
 */
const WhatsAppButton = ({ children, variant = 'primary', size = 'md', className = '' }) => {
  const base =
    'inline-flex items-center justify-between gap-3 rounded-full font-medium text-left transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 group'
  const sizes = {
    md: 'pl-5 pr-1.5 py-1.5 text-sm',
    lg: 'pl-6 pr-2 py-2 text-sm md:text-base',
  }
  const variants = {
    primary: 'bg-brand-primary text-white hover:bg-brand-accent',
    light: 'bg-white text-brand-primary hover:bg-gray-100',
  }
  const iconWrap = variant === 'light' ? 'bg-brand-primary text-white' : 'bg-white text-brand-primary'

  return (
    <a
      href={TRAINING_WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      <span
        className={`${size === 'lg' ? 'w-9 h-9' : 'w-7 h-7'} ${iconWrap} rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
      >
        <WhatsAppIcon className={size === 'lg' ? 'w-[18px] h-[18px]' : 'w-3.5 h-3.5'} />
      </span>
    </a>
  )
}

/**
 * Shows a configured image, or a labelled placeholder frame until one is supplied.
 * `image` is a config entry: null, a path string, or { src, width, height }.
 * Default: natural proportions (screenshots stay uncropped).
 * `cover`: fills the `aspect` frame, cropping edges (used for photo tiles).
 */
const ImageSlot = ({ image, label, aspect = 'aspect-video', className = '', cover = false, eager = false }) => {
  const img = typeof image === 'string' ? { src: image } : image

  if (img?.src) {
    return (
      <div
        className={`overflow-hidden rounded-sm border border-white/10 bg-brand-black shadow-2xl ${cover ? aspect : ''} ${className}`}
      >
        <img
          src={img.src}
          width={img.width}
          height={img.height}
          alt={label}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className={`block w-full hover:scale-[1.02] transition-transform duration-700 ${
            cover ? 'h-full object-cover' : 'h-auto'
          }`}
        />
      </div>
    )
  }

  return (
    <div
      role="img"
      aria-label={`Image coming soon: ${label}`}
      className={`${aspect} rounded-sm border border-dashed border-white/20 bg-white/[0.03] flex flex-col items-center justify-center gap-3 p-6 text-center ${className}`}
    >
      <svg className="w-8 h-8 text-brand-primary-light/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400">Image placeholder</p>
      <p className="text-xs text-gray-400 max-w-xs leading-relaxed">{label}</p>
    </div>
  )
}

/**
 * "Pinned" screenshot: frosted mat, tape strips and a slight tilt that straightens on hover.
 * Same treatment as the flyer on /high-ticket-closing. Falls back to a placeholder if no image.
 * `crop` (e.g. "aspect-square") shows the top of the screenshot only.
 */
const PinnedCard = ({ image, label, tilt = 'rotate-1', tape = true, size = 'lg', crop = '', className = '', eager = false }) => {
  const img = typeof image === 'string' ? { src: image } : image
  if (!img?.src) return <ImageSlot image={null} label={label} aspect={crop || 'aspect-[4/5]'} className={className} />

  const mat = size === 'sm' ? 'p-1.5 rounded-lg' : 'p-3 rounded-xl'
  const inner = size === 'sm' ? 'rounded-md' : 'rounded-lg'
  // Callers may position the card absolutely; only default to `relative` when they don't.
  const position = /\babsolute\b/.test(className) ? '' : 'relative'

  return (
    <div className={`${position} ${className}`}>
      {tape && (
        <>
          <div className="absolute -top-3 left-8 w-20 h-7 bg-white/70 -rotate-12 rounded-sm shadow-sm ring-1 ring-black/5" />
          <div className="absolute -top-2 right-6 w-16 h-6 bg-white/60 rotate-12 rounded-sm shadow-sm ring-1 ring-black/5" />
        </>
      )}
      <div
        className={`relative bg-white/80 backdrop-blur-sm ${mat} shadow-2xl ring-1 ring-black/10 transform ${tilt} hover:rotate-0 transition-transform duration-500`}
      >
        <div className={`overflow-hidden ${inner} bg-brand-black ${crop}`}>
          <img
            src={img.src}
            width={img.width}
            height={img.height}
            alt={label}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            className={`block w-full ${crop ? 'h-full object-cover object-top' : 'h-auto'}`}
          />
        </div>
      </div>
    </div>
  )
}

/**
 * Hero visual: the dashboard screenshot shown directly, with no mockup or frame.
 */
const HeroVisual = () => {
  const image = TRAINING_IMAGES.heroImage
  const img = typeof image === 'string' ? { src: image } : image
  const label = 'Payments dashboard showing total volume, confirmed payments and a live feed'
  if (!img?.src) return <ImageSlot image={null} label={label} aspect="aspect-[3/4]" className="max-w-md mx-auto" />

  // The screenshot is shown as-is at its own proportions, with no fade, shadow or tilt.
  // Its only edge treatment is the same thin off-white stroke and radius as the receipts gallery.
  return (
    <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none overflow-hidden rounded-xl border border-white/25">
      <img
        src={img.src}
        width={img.width}
        height={img.height}
        alt={label}
        loading="eager"
        decoding="async"
        className="block w-full h-auto"
      />
    </div>
  )
}

const Eyebrow = ({ children, light = false }) => (
  <div className="flex items-center gap-2 mb-5">
    <span className={`${light ? 'text-white' : 'text-brand-primary-light'} text-sm`}>✦</span>
    <span className={`text-xs uppercase tracking-[0.2em] ${light ? 'text-white/80' : 'text-gray-300'}`}>{children}</span>
  </div>
)

const Container = ({ children, className = '' }) => (
  <div className={`max-w-7xl mx-auto px-6 md:px-12 lg:px-20 ${className}`}>{children}</div>
)

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */

/**
 * Measurements for the receipts carousel.
 * aligned(i) = the scroll position at which slide i sits in its resting place
 * (centred on mobile, flush with the content's left edge on desktop).
 */
const getCarouselGeometry = (row, count) => {
  const items = row.children
  const pad = parseFloat(getComputedStyle(row).paddingLeft) || 0
  const centred = window.matchMedia('(max-width: 767px)').matches
  const aligned = (i) =>
    centred ? items[i].offsetLeft + items[i].offsetWidth / 2 - row.clientWidth / 2 : items[i].offsetLeft - pad
  // width of one full set of slides, including gaps
  const setWidth = items.length > count ? items[count].offsetLeft - items[0].offsetLeft : 0
  return { items, aligned, setWidth }
}

/**
 * Real World Receipts: an infinite horizontal carousel of TRAINING_IMAGES.receipts.
 *
 * How the loop works: the slides are rendered three times in a row and the visitor starts in the
 * middle copy. Whenever scrolling comes to rest outside the middle copy, the scroll position is
 * shifted by exactly one copy's width. The pixels on screen are identical before and after, so the
 * shift is invisible and there is never an end to reach.
 *
 * It uses native scrolling, so touch, trackpad, shift+wheel and keyboard all work. Arrows move one
 * screenshot per click. Nothing autoplays. Smooth scrolling is skipped for reduced-motion users.
 */
const ReceiptsSection = () => {
  const rowRef = useRef(null)
  const pendingRef = useRef(null) // slide an arrow click is currently travelling to
  const lastClickRef = useRef(0)
  const [active, setActive] = useState(0)
  const receipts = TRAINING_IMAGES.receipts ?? []
  const count = receipts.length
  const loop = count > 1
  const slides = loop ? [...receipts, ...receipts, ...receipts] : receipts

  // Start in the middle copy, before first paint.
  useLayoutEffect(() => {
    const row = rowRef.current
    if (!row || !loop) return
    row.scrollLeft = getCarouselGeometry(row, count).aligned(count)
  }, [count, loop])

  useEffect(() => {
    const row = rowRef.current
    if (!row || !loop) return
    let frame = 0
    let idleTimer = 0
    let touching = false

    // Invisible re-centre into the middle copy once movement has stopped.
    const normalise = () => {
      if (touching) return
      pendingRef.current = null
      const { aligned, setWidth } = getCarouselGeometry(row, count)
      if (!setWidth) return
      const start = aligned(count)
      let x = row.scrollLeft
      while (x < start - 1) x += setWidth
      while (x >= start + setWidth - 1) x -= setWidth
      if (Math.abs(x - row.scrollLeft) > 0.5) row.scrollLeft = x
    }

    const updateActive = () => {
      frame = 0
      const { items, aligned } = getCarouselGeometry(row, count)
      let nearest = 0
      let best = Infinity
      for (let i = 0; i < items.length; i++) {
        const distance = Math.abs(aligned(i) - row.scrollLeft)
        if (distance < best) {
          best = distance
          nearest = i
        }
      }
      setActive(nearest % count)
    }

    // Fallback for browsers without `scrollend`. It must never cut an arrow move short, so while a
    // click is still travelling to its slide it waits (for up to 2s after the click) and checks again.
    const onIdle = () => {
      const pending = pendingRef.current
      if (pending != null && performance.now() - lastClickRef.current < 2000) {
        const { aligned } = getCarouselGeometry(row, count)
        if (Math.abs(aligned(pending) - row.scrollLeft) > 2) {
          scheduleIdle()
          return
        }
      }
      normalise()
    }
    function scheduleIdle() {
      clearTimeout(idleTimer)
      idleTimer = setTimeout(onIdle, 140)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateActive)
      scheduleIdle()
    }
    const onScrollEnd = () => {
      clearTimeout(idleTimer)
      normalise()
    }
    const onTouchStart = () => {
      touching = true
    }
    const onTouchEnd = () => {
      touching = false
      scheduleIdle()
    }
    const onResize = () => {
      normalise()
      updateActive()
    }

    updateActive()
    row.addEventListener('scroll', onScroll, { passive: true })
    row.addEventListener('scrollend', onScrollEnd)
    row.addEventListener('touchstart', onTouchStart, { passive: true })
    row.addEventListener('touchend', onTouchEnd)
    row.addEventListener('touchcancel', onTouchEnd)
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(idleTimer)
      row.removeEventListener('scroll', onScroll)
      row.removeEventListener('scrollend', onScrollEnd)
      row.removeEventListener('touchstart', onTouchStart)
      row.removeEventListener('touchend', onTouchEnd)
      row.removeEventListener('touchcancel', onTouchEnd)
      window.removeEventListener('resize', onResize)
    }
  }, [count, loop])

  // One screenshot per click. Quick repeat clicks queue up one slide each instead of fighting.
  const step = (direction) => {
    const row = rowRef.current
    if (!row) return
    const now = performance.now()
    if (now - lastClickRef.current < 160) return
    lastClickRef.current = now

    const { items, aligned } = getCarouselGeometry(row, count)
    let target
    if (pendingRef.current != null) {
      target = pendingRef.current + direction
    } else {
      const x = row.scrollLeft
      target = direction > 0 ? items.length - 1 : 0
      if (direction > 0) {
        for (let i = 0; i < items.length; i++) {
          if (aligned(i) > x + 4) {
            target = i
            break
          }
        }
      } else {
        for (let i = items.length - 1; i >= 0; i--) {
          if (aligned(i) < x - 4) {
            target = i
            break
          }
        }
      }
    }
    target = Math.max(0, Math.min(items.length - 1, target))
    pendingRef.current = target
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    row.scrollTo({ left: aligned(target), behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  const arrowClass =
    'w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-200 hover:bg-brand-primary hover:border-brand-primary hover:scale-105 active:scale-95'

  return (
    <section id="proof" className="scroll-mt-20 relative overflow-hidden bg-section-muted py-20 md:py-28">
      <Container className="relative">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <FadeIn className="max-w-2xl">
            <Eyebrow>Real World Receipts</Eyebrow>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              I don&rsquo;t ask you to take my word for it.
            </h2>
            <div className="mt-8 h-px w-16 bg-brand-primary-light" aria-hidden="true" />
            <p className="mt-8 text-lg md:text-xl text-gray-300">Look at the real world receipts:</p>
          </FadeIn>

          {loop && (
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <button type="button" className={arrowClass} onClick={() => step(-1)} aria-label="Previous screenshot">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button type="button" className={arrowClass} onClick={() => step(1)} aria-label="Next screenshot">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </Container>

      {/* Full-bleed track: starts at the content's left edge and runs off the right edge of the screen */}
      <FadeIn className="relative mt-12 md:mt-14">
        <div
          ref={rowRef}
          role="region"
          aria-roledescription="carousel"
          aria-label={`Real world receipts, screenshot ${active + 1} of ${count}`}
          tabIndex={0}
          style={{ '--edge': 'max(5rem, calc((100vw - 80rem) / 2 + 5rem))' }}
          className="relative flex items-center gap-6 md:gap-10 overflow-x-auto overscroll-x-contain snap-x snap-mandatory md:snap-proximity [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-6 md:px-12 lg:px-20 xl:px-(--edge) md:scroll-pl-12 lg:scroll-pl-20 xl:scroll-pl-(--edge) py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-primary-light/60"
        >
          {slides.map((item, index) => {
            const isClone = loop && (index < count || index >= count * 2)
            return (
              <div
                key={`${item.src}-${index}`}
                aria-hidden={isClone ? 'true' : undefined}
                className="shrink-0 snap-center md:snap-start w-[80%] sm:w-[52%] md:w-auto md:h-[26rem] lg:h-[28rem] overflow-hidden rounded-xl border border-white/25 bg-brand-black"
              >
                <img
                  src={item.src}
                  width={item.width}
                  height={item.height}
                  alt={isClone ? '' : item.alt}
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  className="block w-full h-auto md:h-full md:w-auto md:max-w-none select-none"
                />
              </div>
            )
          })}
        </div>
      </FadeIn>

      <Container className="relative">
        {/* Position: one mark per screenshot, the current one highlighted */}
        {loop && (
          <div className="mt-8 flex items-center gap-2" aria-hidden="true">
            {receipts.map((item, index) => (
              <span
                key={item.src}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === active ? 'w-8 bg-brand-primary-light' : 'w-3 bg-white/20'
                }`}
              />
            ))}
          </div>
        )}
        <p className="mt-8 border-l-2 border-brand-primary-light pl-5 text-sm md:text-base text-gray-300 leading-relaxed">
          Above: Active students celebrating their deals and international payouts.
        </p>
      </Container>
    </section>
  )
}

/**
 * Client call photos: one horizontal row at every screen size.
 * Swipe on touch screens; arrow buttons on desktop move one photo at a time and
 * switch off at either end. Photos keep their original proportions (no cropping).
 */
const ClientCallsRow = ({ calls }) => {
  const rowRef = useRef(null)
  const pendingRef = useRef(null) // photo an arrow click is currently travelling to
  const pendingTimer = useRef(0)
  const [edges, setEdges] = useState({ start: true, end: false })

  useEffect(() => {
    const row = rowRef.current
    if (!row) return
    const update = () => {
      const max = row.scrollWidth - row.clientWidth
      setEdges({ start: row.scrollLeft <= 4, end: row.scrollLeft >= max - 4 })
    }
    update()
    row.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    const timer = pendingTimer
    return () => {
      clearTimeout(timer.current)
      row.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  // One photo per click. A click made while the row is still gliding continues from the
  // photo it was heading to, so quick clicks never skip or stall.
  const step = (direction) => {
    const row = rowRef.current
    if (!row) return
    const items = [...row.children]
    const pad = parseFloat(getComputedStyle(row).paddingLeft) || 0
    const max = row.scrollWidth - row.clientWidth
    const aligned = (i) => Math.min(max, Math.max(0, items[i].offsetLeft - pad))
    let current = pendingRef.current
    if (current == null) {
      // the photo whose resting position is closest to where the row is now (first one on a tie)
      current = 0
      for (let i = 1; i < items.length; i++) {
        if (Math.abs(aligned(i) - row.scrollLeft) < Math.abs(aligned(current) - row.scrollLeft)) current = i
      }
    }
    let target = Math.max(0, Math.min(items.length - 1, current + direction))
    // skip photos that can't be reached because the row is already at its end
    while (direction > 0 && target < items.length - 1 && aligned(target) <= row.scrollLeft + 4) target++
    pendingRef.current = target
    clearTimeout(pendingTimer.current)
    pendingTimer.current = setTimeout(() => (pendingRef.current = null), 700)
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    row.scrollTo({ left: aligned(target), behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  const arrowClass =
    'w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-200 hover:bg-brand-primary hover:border-brand-primary hover:scale-105 active:scale-95 disabled:opacity-30 disabled:pointer-events-none'

  return (
    <FadeIn>
      <figure>
        <div
          ref={rowRef}
          role="region"
          aria-label="Photos of calls with some clients"
          tabIndex={0}
          style={{ '--edge': 'max(5rem, calc((100vw - 80rem) / 2 + 5rem))' }}
          className="flex items-start gap-5 md:gap-8 overflow-x-auto overscroll-x-contain snap-x snap-mandatory md:snap-proximity [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-6 md:px-12 lg:px-20 xl:px-(--edge) md:scroll-pl-12 lg:scroll-pl-20 xl:scroll-pl-(--edge) py-6 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-primary-light/60"
        >
          {calls.map((call, index) => (
            <PinnedCard
              key={typeof call === 'string' ? call : call?.src ?? index}
              image={call}
              label={`Billeddy on a video call with a client (${index + 1} of ${calls.length})`}
              size="sm"
              tape={false}
              tilt={['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2'][index % 4]}
              className={`shrink-0 w-[62%] sm:w-[42%] md:w-60 lg:w-64 snap-center md:snap-start ${index % 2 === 1 ? 'md:mt-12' : ''}`}
            />
          ))}
        </div>

        <Container>
          <div className="mt-6 md:mt-10 flex flex-col items-center gap-6">
            {calls.length > 1 && (
              <div className="hidden md:flex items-center gap-3">
                <button type="button" className={arrowClass} onClick={() => step(-1)} disabled={edges.start} aria-label="Previous photo">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button type="button" className={arrowClass} onClick={() => step(1)} disabled={edges.end} aria-label="Next photo">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
            <figcaption className="text-center text-sm text-gray-400">Above: Photos of calls with some clients.</figcaption>
          </div>
        </Container>
      </figure>
    </FadeIn>
  )
}

const TrainingHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 px-6 md:px-12 lg:px-20 transition-all duration-300 ${
        isScrolled ? 'bg-brand-black/95 backdrop-blur-md shadow-lg py-2' : 'bg-brand-black shadow-sm py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo is intentionally not a link on this landing page (keeps visitors on the page) */}
        <div className="flex items-center transition-transform duration-200 hover:scale-105">
          <img src={redLogo} alt="Billeddy Saliu" className="h-10 sm:h-11 md:h-12 w-auto" />
        </div>

        <nav className="hidden lg:flex items-center gap-6" aria-label="Page sections">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-gray-300 hover:text-brand-primary-light transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={TRAINING_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-brand-primary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-accent hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Join on WhatsApp
            <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-brand-primary">
              <WhatsAppIcon className="w-3 h-3" />
            </span>
          </a>

          <button
            type="button"
            className="lg:hidden text-white w-11 h-11 -mr-2 flex items-center justify-center"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="training-menu"
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
        <nav id="training-menu" className="lg:hidden mt-3 pb-4 border-t border-white/10" aria-label="Page sections">
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
              href={TRAINING_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="sm:hidden mt-2 inline-flex items-center gap-2 bg-brand-primary text-white px-5 py-3 rounded-full text-sm font-medium w-fit"
            >
              Join on WhatsApp
              <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-brand-primary">
                <WhatsAppIcon className="w-3 h-3" />
              </span>
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

/**
 * Footer: the logo alone, as a brand signature. A fine red rule closes the page above it
 * and a soft maroon glow sits behind the mark. No links or text by design.
 */
const TrainingFooter = () => (
  <footer className="relative overflow-hidden bg-brand-black">
    <div
      className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-primary-light/60 to-transparent"
      aria-hidden="true"
    />
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-40 max-w-full rounded-full bg-brand-primary/30 blur-3xl"
      aria-hidden="true"
    />
    <div className="relative flex flex-col items-center px-6 py-8 md:py-10">
      <span className="h-5 md:h-6 w-px bg-linear-to-b from-transparent to-white/25" aria-hidden="true" />
      <img
        src={redLogo}
        alt="Billeddy Saliu"
        loading="lazy"
        decoding="async"
        className="mt-4 md:mt-5 h-14 sm:h-16 md:h-20 w-auto"
      />
      <span className="mt-4 md:mt-5 h-5 md:h-6 w-px bg-linear-to-t from-transparent to-white/25" aria-hidden="true" />
    </div>
  </footer>
)

/** Mobile-only sticky CTA that appears after the hero and hides near the page end. */
const MobileStickyCta = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      const nearEnd = y + window.innerHeight > document.documentElement.scrollHeight - 700
      setShow(y > 700 && !nearEnd)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 p-3 bg-brand-black/95 backdrop-blur-md border-t border-white/10 transition-all duration-300 ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
      aria-hidden={!show}
    >
      <a
        href={TRAINING_WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={show ? 0 : -1}
        className="flex items-center justify-center gap-2 w-full bg-brand-primary text-white rounded-full py-3.5 text-sm font-medium active:scale-95 transition-transform"
      >
        <WhatsAppIcon className="w-4 h-4" />
        Join The Remote Closers Club
      </a>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const Training = () => {
  // Per-page title & description while on /TRCC; restore the site defaults on leave.
  useEffect(() => {
    const prevTitle = document.title
    const descTag = document.querySelector('meta[name="description"]')
    const prevDesc = descTag?.getAttribute('content')
    document.title = PAGE_TITLE
    descTag?.setAttribute('content', PAGE_DESCRIPTION)
    return () => {
      document.title = prevTitle
      if (descTag && prevDesc) descTag.setAttribute('content', prevDesc)
    }
  }, [])

  return (
    <>
      <TrainingHeader />

      <main className="w-full bg-brand-black text-white overflow-x-hidden">
        {/* 1. HERO */}
        <section id="top" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-light" />
          <Container className="relative pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 lg:items-center">
              <div>
                <FadeIn delay={100}>
                  <div className="flex items-start gap-2 mb-6">
                    <span className="text-brand-primary-light text-sm animate-pulse leading-5">✦</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-gray-300 leading-5">
                      Attention: Ambitious Nigerians &amp; Africans tired of working hard for a devaluing currency
                    </span>
                  </div>
                </FadeIn>

                <FadeIn delay={200}>
                  <h1 className="text-[2.1rem] sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.12] mb-6">
                    Stop Earning In Naira While Everything You Buy Is Priced In{' '}
                    <span className="relative inline-block">
                      Dollars.
                      <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-brand-primary-light rounded-full" />
                    </span>
                  </h1>
                </FadeIn>

                <FadeIn delay={300}>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mb-4">
                    Discover How To Master Remote High Ticket Closing &amp; Appointment Setting And Legally Land{' '}
                    <span className="text-white font-medium">$1,000 to $3,000/Month Sales Seats</span> With US, UK &amp;
                    International Companies… Right From Your Phone or Laptop.
                  </p>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mb-8">
                    No coding. No competing with 2,000 people on Upwork. No sleazy 1980s manipulation scripts.
                  </p>
                </FadeIn>

                <FadeIn delay={400}>
                  <WhatsAppButton size="lg">Yes! I Want To Join The Remote Closers Club</WhatsAppButton>
                </FadeIn>
              </div>

              {/* One instance for all screens: beside the text on desktop, below the CTA on mobile */}
              <FadeIn delay={300}>
                <HeroVisual />
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* 2. THE PROBLEM */}
        <section id="problem" className="scroll-mt-20 bg-brand-black py-16 md:py-24">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                  Let&rsquo;s be completely honest for a moment.
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  You already understand the economic crisis because you experience it every single time you walk into a
                  market or grocery store:
                </p>
              </FadeIn>
              <FadeIn delay={150}>
                <ul className="space-y-4">
                  {crisisPoints.map((point) => (
                    <li key={point} className="flex gap-4 bg-brand-muted border border-white/10 rounded-sm px-5 py-4">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-primary-light shrink-0" />
                      <span className="text-sm md:text-base text-gray-300 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            <FadeIn className="mt-16 md:mt-20">
              <p className="text-xl md:text-2xl font-semibold">So you look online for a way out.</p>
              <p className="text-gray-400 mt-2">And what do you find?</p>
            </FadeIn>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {deadEnds.map((item, index) => (
                <FadeIn key={item.title} delay={index * 100} className="h-full">
                  <div className="h-full bg-brand-muted border border-white/10 rounded-sm p-6 hover:border-brand-primary/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                    <span className="w-10 h-10 border border-brand-primary-light/40 rounded-sm flex items-center justify-center text-brand-primary-light mb-5 group-hover:bg-brand-primary-light group-hover:text-white group-hover:border-brand-primary-light transition-all duration-300">
                      <LineIcon path={item.icon} />
                    </span>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-brand-primary-light transition-colors">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn className="mt-12">
              <div className="border-l-2 border-brand-primary-light bg-brand-primary/10 px-6 py-6 md:px-8 rounded-sm">
                <p className="text-lg md:text-xl leading-relaxed">
                  <span className="font-semibold text-brand-primary-light">Here is the brutal truth:</span> You cannot build
                  real wealth or escape inflation by trading your time for a local currency that loses value while you sleep.
                </p>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* 3. THE OPPORTUNITY
            Beat 1 (maroon band): the one big idea. Beats 2–4 (dark): the reasoning, one point at a time. */}
        <section id="opportunity" className="scroll-mt-20">
          <div className="bg-solution">
            <Container className="py-20 md:py-28">
              <FadeIn className="max-w-4xl mx-auto text-center">
                <p className="text-sm md:text-base text-white/70">
                  To survive and thrive today, you need one specific leverage point:
                </p>
                <h2 className="mt-6 text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[1.1]">
                  You must live where your expenses are low, but earn in a currency that is strong{' '}
                  <span className="text-white/60">(USD, GBP, EUR).</span>
                </h2>
                <div className="mx-auto mt-10 md:mt-12 h-px w-16 bg-white/40" aria-hidden="true" />
                <p className="mt-10 md:mt-12 text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
                  And there is one high income skill that international businesses are practically begging to pay top dollar
                  for right now:{' '}
                  <span className="block mt-4 text-2xl md:text-3xl font-semibold text-white">
                    <span className="relative inline-block">
                      High Ticket Remote Sales.
                      <span className="absolute left-0 -bottom-1.5 h-[3px] w-full bg-brand-primary-light rounded-full" />
                    </span>
                  </span>
                </p>
              </FadeIn>
            </Container>
          </div>

          <div className="bg-section-muted">
            <Container className="py-20 md:py-28 space-y-20 md:space-y-28">
              {/* Beat 2: the demand */}
              <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
                <FadeIn>
                  <BeatNumber n={1} />
                  <p className="text-xl md:text-2xl font-semibold leading-snug">
                    Every single day, thousands of founders in the US, UK, Canada, and Europe run paid ads for high ticket offers:
                  </p>
                </FadeIn>
                <FadeIn delay={150}>
                  <ul className="border-y border-white/10 divide-y divide-white/10">
                    {highTicketOffers.map((offer, index) => (
                      <li key={offer} className="flex items-center gap-5 py-5 group">
                        <span className="w-10 h-10 border border-brand-primary-light/40 rounded-sm flex items-center justify-center text-brand-primary-light shrink-0 group-hover:bg-brand-primary-light group-hover:text-white group-hover:border-brand-primary-light transition-all duration-300">
                          <LineIcon path={offerIcons[index]} />
                        </span>
                        <span className="text-gray-200 md:text-lg">{offer}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-gray-400 leading-relaxed">
                    These companies have calendars packed with inbound calls from qualified buyers who want to purchase.
                  </p>
                </FadeIn>
              </div>

              {/* Beat 3: the gap */}
              <div>
                <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
                  <FadeIn>
                    <BeatNumber n={2} />
                    <p className="text-xl md:text-2xl font-semibold leading-snug">Their biggest operational nightmare?</p>
                    <p className="mt-4 text-gray-400 leading-relaxed">
                      The founders are too busy to take the calls themselves, and local Western sales reps demand a guaranteed
                      $5,000 monthly salary just to show up.
                    </p>
                  </FadeIn>
                  <FadeIn delay={150}>
                    <div className="border-y border-white/10 divide-y divide-white/10">
                      {dontCare.map((line) => (
                        <p key={line} className="py-5 text-lg md:text-2xl font-semibold text-white/85">
                          {line}
                        </p>
                      ))}
                    </div>
                  </FadeIn>
                </div>

                <FadeIn className="mt-12 md:mt-16">
                  <div className="bg-brand-black/60 border border-white/10 border-l-2 border-l-brand-primary-light rounded-sm px-6 py-8 md:px-12 md:py-10">
                    <p className="text-sm md:text-base text-gray-400">
                      They only care about one thing:{' '}
                      <span className="block mt-3 text-xl md:text-2xl lg:text-[1.75rem] font-semibold text-white leading-snug">
                        Can you get on Zoom or phone calls, speak like a diagnostic professional, book qualified appointments and
                        turn their qualified leads into paying clients?
                      </span>
                    </p>
                  </div>
                </FadeIn>
              </div>

              {/* Beat 4: the money */}
              <div>
                <FadeIn>
                  <BeatNumber n={3} />
                </FadeIn>
                <div className="grid gap-5 md:grid-cols-2">
                  <FadeIn className="h-full">
                    <div className="h-full bg-brand-muted border border-white/10 rounded-sm p-6 md:p-10">
                      <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                        When you close a $5,000 deal for an overseas company, they gladly pay you a 10% to 15% commission
                      </p>
                      <p className="text-[1.75rem] sm:text-4xl md:text-[2.5rem] xl:text-5xl font-semibold mt-6 md:mt-8 whitespace-nowrap">$500 to $750</p>
                    </div>
                  </FadeIn>
                  <FadeIn delay={120} className="h-full">
                    <div className="h-full bg-hero-dark border border-white/10 rounded-sm p-6 md:p-10 shadow-2xl">
                      <p className="text-sm md:text-base text-white/75 leading-relaxed">
                        Close just 3 to 4 deals in an entire month? That is
                      </p>
                      <p className="text-[1.75rem] sm:text-4xl md:text-[2.5rem] xl:text-5xl font-semibold mt-6 md:mt-8 whitespace-nowrap">$1,500 to $2,500+</p>
                    </div>
                  </FadeIn>
                </div>
                <FadeIn className="mt-10 md:mt-14">
                  <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-3xl">
                    At today&rsquo;s exchange rates, that is life changing, generational money in Nigeria all earned from your
                    bedroom, wearing a t-shirt, with zero commute in traffic.
                  </p>
                </FadeIn>
              </div>
            </Container>
          </div>
        </section>

        {/* 4. ABOUT BILLEDDY */}
        <section id="about" className="scroll-mt-20 relative overflow-hidden bg-brand-black border-t border-white/5">
          {/* Glow only (no grey gradient) so the section flows seamlessly into the black client-calls band below */}
          <div
            className="absolute -left-40 top-0 w-[44rem] h-[44rem] max-w-none rounded-full bg-brand-primary/20 blur-3xl"
            aria-hidden="true"
          />
          <Container className="relative py-20 md:py-28">
            <div className="grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20 lg:items-center">
              {/* Mentor portrait, on its own */}
              <FadeIn direction="right">
                <div className="relative mx-auto lg:mx-0 w-full max-w-[20rem] sm:max-w-[25rem]">
                  <div className="absolute -left-8 top-12 w-64 h-64 rounded-full bg-brand-primary-light/20 blur-3xl" aria-hidden="true" />
                  <div className="relative overflow-hidden rounded-sm ring-1 ring-white/10 shadow-2xl">
                    <img
                      src={mentorPortrait}
                      width={1086}
                      height={1448}
                      alt="Billeddy Saliu"
                      loading="lazy"
                      decoding="async"
                      className="block w-full h-auto hover:scale-[1.02] transition-transform duration-700"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/60 to-transparent" aria-hidden="true" />
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={150}>
                <Eyebrow>Your Mentor</Eyebrow>
                <h2 className="font-semibold">
                  <span className="block text-xl md:text-2xl font-normal text-gray-300 mb-2">My name is</span>{' '}
                  <span className="block text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">Billeddy Saliu</span>
                </h2>
                <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
                  I am a Top 100 Under 40 Honoree, High Ticket Sales Closer, and Revenue Partner.
                </p>
                <div className="mt-8 h-px w-16 bg-brand-primary-light" aria-hidden="true" />
                <p className="mt-8 text-gray-300 leading-relaxed max-w-xl">
                  Operating right here from Nigeria, I have closed over{' '}
                  <span className="text-white font-semibold">$2.1M+</span> in verified client revenue across luxury real
                  estate developments, high ticket consulting, and international B2B agencies.
                </p>
                <p className="mt-4 text-gray-300 leading-relaxed max-w-xl">
                  I didn&rsquo;t achieve this through luck or because I had family connections overseas.
                </p>
                <blockquote className="mt-8 border-l-2 border-brand-primary-light pl-6 text-lg md:text-xl text-white leading-relaxed max-w-xl">
                  I achieved it because I threw out the outdated, manipulative &ldquo;hard close&rdquo; sales scripts and mastered{' '}
                  <span className="font-semibold text-brand-primary-light">Diagnostic Closing</span>, the exact consultative
                  framework that high net worth buyers and international founders respect.
                </blockquote>
              </FadeIn>
            </div>

            <div className="mt-20 md:mt-28 pt-14 md:pt-20 border-t border-white/10 grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-20 lg:items-center">
              <FadeIn>
                <p className="text-2xl md:text-3xl font-semibold">Look at what happens when you master this:</p>
                <ol className="mt-8 divide-y divide-white/10 border-t border-white/10">
                  {achievements.map((item, index) => (
                    <li key={item} className="flex gap-5 py-5">
                      <span className="text-sm font-semibold text-brand-primary-light tabular-nums pt-0.5" aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-gray-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ol>
              </FadeIn>
              <FadeIn delay={150} direction="left">
                <PinnedCard
                  image={TRAINING_IMAGES.carlosDm}
                  label="WhatsApp DM from Carlos, founder of an eco-resort community in Indonesia, asking for trained closers paying €100 to €300 per close"
                  tilt="-rotate-1"
                  className="max-w-md mx-auto"
                />
              </FadeIn>
            </div>

            <FadeIn className="mt-20 md:mt-28 max-w-3xl mx-auto text-center">
              <span className="text-brand-primary-light text-sm" aria-hidden="true">✦</span>
              <p className="mt-6 text-gray-400 leading-relaxed">
                I am not an academic &ldquo;guru&rdquo; selling theory from 5 years ago. I am on the frontlines closing deals
                and placing reps every single week.
              </p>
              <p className="mt-6 text-2xl md:text-4xl font-semibold leading-tight">
                And now, I am opening the doors to teach you the exact same blueprint.
              </p>
            </FadeIn>
          </Container>
        </section>

        {/* 4b. CLIENT CALLS — continues the mentor section's black background so it reads as part of his story */}
        {TRAINING_IMAGES.proofClientCalls?.length > 0 && (
          <section id="calls" className="scroll-mt-20 relative overflow-hidden bg-brand-black pb-20 md:pb-28">
            <div
              className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[36rem] h-[36rem] max-w-full rounded-full bg-brand-primary/20 blur-3xl"
              aria-hidden="true"
            />
            <Container className="relative">
              <div className="h-px bg-white/10 mb-12 md:mb-16" aria-hidden="true" />
            </Container>
            <ClientCallsRow calls={TRAINING_IMAGES.proofClientCalls} />
          </section>
        )}

        {/* 7. PROOF: Real World Receipts (horizontal gallery) */}
        <ReceiptsSection />

        {/* 5. THE PROGRAM */}
        <section id="program" className="scroll-mt-20 bg-hero-dark py-16 md:py-24">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
              <FadeIn>
                <Eyebrow light>The Remote Closers Club</Eyebrow>
                <h2 className="text-[1.75rem] md:text-4xl xl:text-[2.75rem] font-semibold leading-tight">
                  The Elite Mentorship Program Engineered to Turn Hungry African Professionals into High Income Remote
                  Appointment Setters &amp; High Ticket Closers.
                </h2>
                <p className="text-white/80 leading-relaxed mt-6">
                  The Remote Closers Club is not another boring, 40 hour pre-recorded course that leaves you stranded after
                  watching a few videos.
                </p>
                <p className="text-white/80 leading-relaxed mt-4">
                  It is an intensive, practical mentorship designed to take you from knowing nothing about sales to getting
                  hired by international companies paying in USD, GBP, and EUR.
                </p>
                <WhatsAppButton variant="light" className="mt-8">
                  Yes! I Want To Join The Remote Closers Club
                </WhatsAppButton>
              </FadeIn>
              <FadeIn delay={150} direction="left">
                <ImageSlot
                  image={TRAINING_IMAGES.portalMockup}
                  label="The Remote Closers Club member portal on a MacBook and iPhone"
                  aspect="aspect-[3/2]"
                />
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* 6. CURRICULUM */}
        <section id="curriculum" className="scroll-mt-20 bg-brand-muted py-16 md:py-24">
          <Container>
            <FadeIn className="max-w-3xl mb-12">
              <Eyebrow>Curriculum</Eyebrow>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Here Is The Curriculum You Are Getting Inside
              </h2>
            </FadeIn>

            <div className="grid gap-5 md:grid-cols-2">
              {modules.map((module, index) => (
                <FadeIn key={module.title} delay={(index % 2) * 120}>
                  <article className="h-full bg-brand-black border border-white/10 rounded-sm overflow-hidden hover:border-brand-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
                    <div className="px-6 pt-6 pb-5 flex items-start gap-4">
                      <span className="w-11 h-11 border border-brand-primary-light/40 rounded-sm flex items-center justify-center text-brand-primary-light text-sm font-semibold shrink-0 group-hover:bg-brand-primary-light group-hover:text-white transition-all duration-300">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400">Module {index + 1}</p>
                        <h3 className="text-lg font-semibold mt-1 group-hover:text-brand-primary-light transition-colors">
                          {module.title}
                        </h3>
                      </div>
                    </div>
                    <div className="h-px bg-white/10 group-hover:bg-brand-primary-light/20 transition-colors" />
                    <ul className="px-6 py-5 space-y-3">
                      {module.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="w-4 h-4 mt-0.5 rounded-full bg-brand-primary-light flex items-center justify-center shrink-0">
                            <CheckIcon className="w-2 h-2" />
                          </span>
                          <span className="text-sm text-gray-300 leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* 8. WHO IT'S FOR */}
        <section id="fit" className="scroll-mt-20 bg-section-muted py-16 md:py-24">
          <Container>
            <div className="grid gap-6 lg:grid-cols-2">
              <FadeIn>
                <div className="h-full bg-brand-muted border border-white/10 rounded-sm p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-6">This Is For You If:</h2>
                  <ul className="space-y-4">
                    {fitItems.map((item) => (
                      <li key={item} className="flex gap-4">
                        <span className="w-5 h-5 mt-0.5 rounded-full bg-brand-primary-light flex items-center justify-center shrink-0">
                          <CheckIcon />
                        </span>
                        <span className="text-gray-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
              <FadeIn delay={150}>
                <div className="h-full bg-brand-black border border-white/10 rounded-sm p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-6">This Is Strictly Not For You If:</h2>
                  <ul className="space-y-4">
                    {notFitItems.map((item) => (
                      <li key={item} className="flex gap-4">
                        <span className="w-5 h-5 mt-0.5 rounded-full border border-white/30 text-gray-400 flex items-center justify-center shrink-0">
                          <CrossIcon />
                        </span>
                        <span className="text-gray-400 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* 9. ENROLLMENT / PRICING */}
        <section id="enrollment" className="scroll-mt-20 bg-solution py-16 md:py-24">
          <Container>
            <FadeIn className="max-w-3xl">
              <p className="text-white/80 leading-relaxed">
                Most online programs charge you hundreds of thousands of Naira upfront, hand you pre-recorded videos, and
                disappear leaving you stranded without a job or support.
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mt-6">
                The Remote Closers Club operates differently.
              </h2>
              <p className="text-white/80 leading-relaxed mt-6">
                We believe in true alignment of incentives. If we train you, our primary goal is to see you placed on an active
                sales offer where you are closing deals and earning in foreign currency.
              </p>
              <p className="text-white font-medium mt-4">Because of this, we offer two distinct pathways to join:</p>
            </FadeIn>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <FadeIn>
                <div className="h-full bg-brand-muted border border-white/10 rounded-sm p-6">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-brand-primary-light">Pathway 1</p>
                  <p className="text-gray-300 leading-relaxed mt-3">
                    You can pay your tuition in full today and keep 100% of your earnings from day one,
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={100}>
                <div className="h-full bg-brand-muted border border-white/10 rounded-sm p-6">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-brand-primary-light">Pathway 2</p>
                  <p className="text-gray-300 leading-relaxed mt-3">
                    OR you can take advantage of our{' '}
                    <span className="text-white font-medium">Flexible Performance Based Option</span>, allowing you to start
                    with what you can afford right now, while we take a small, one time performance percentage strictly from
                    your first 30 days of working.
                  </p>
                </div>
              </FadeIn>
            </div>

            <FadeIn className="mt-6">
              <p className="text-white font-medium">After your first month on the job, you keep 100% of your commissions forever.</p>
            </FadeIn>

            <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 lg:items-start">
              <FadeIn>
                <h3 className="text-2xl md:text-3xl font-semibold">Choose Your Enrollment Option:</h3>
                <p className="text-white/80 leading-relaxed mt-4">
                  Pay a subsidized commitment fee today to secure your seat, and share a small percentage of your first
                  month&rsquo;s earnings once you start closing:
                </p>
                <WhatsAppButton variant="light" className="mt-8">
                  Select Your Tier &amp; Join The Club Today
                </WhatsAppButton>
              </FadeIn>

              <FadeIn delay={150}>
                <div className="bg-brand-muted border border-white/10 rounded-sm overflow-hidden">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-white/10 bg-brand-black/60">
                        <th scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-300">
                          Your Upfront Commitment Today
                        </th>
                        <th scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-300 text-right">
                          Month 1 Commission Share to Mentor
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tiers.map((tier) => (
                        <tr
                          key={tier.fee}
                          className={`border-b border-white/5 last:border-b-0 hover:bg-white/[0.04] transition-colors ${
                            tier.note === 'Full Pass' ? 'bg-brand-primary/25' : ''
                          }`}
                        >
                          <td className="px-5 py-3.5">
                            <span className="font-semibold">{tier.fee}</span>
                            {tier.note && (
                              <span className="ml-2 inline-block align-middle text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-sm bg-brand-primary-light/20 text-brand-primary-light">
                                {tier.note}
                              </span>
                            )}
                          </td>
                          <td className="px-5 py-3.5 text-right font-semibold text-gray-200">{tier.share}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </FadeIn>
            </div>

            <FadeIn className="mt-16">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6">The Performance Guarantee:</h3>
            </FadeIn>
            <div className="grid gap-5 md:grid-cols-3">
              {guarantees.map((item, index) => (
                <FadeIn key={item.title} delay={index * 100}>
                  <div className="h-full bg-brand-muted border border-white/10 rounded-sm p-6 hover:border-brand-primary/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                    <span className="w-9 h-9 border border-brand-primary-light/40 rounded-sm flex items-center justify-center text-brand-primary-light mb-5 group-hover:bg-brand-primary-light group-hover:text-white transition-all duration-300">
                      <CheckIcon className="w-3.5 h-3.5" />
                    </span>
                    <h4 className="font-semibold mb-2 group-hover:text-brand-primary-light transition-colors">{item.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* 10. HOW TO JOIN */}
        <section id="join" className="scroll-mt-20 bg-brand-black py-16 md:py-24">
          <Container>
            <FadeIn className="max-w-3xl mb-10">
              <Eyebrow>Secure Your Seat</Eyebrow>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">How To Lock In Your Seat Today:</h2>
            </FadeIn>
            <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {joinSteps.map((step, index) => (
                <li key={step} className="list-none">
                  <FadeIn delay={index * 100} className="h-full">
                    <div className="h-full bg-brand-muted border border-white/10 rounded-sm p-6">
                      <span className="text-4xl font-semibold text-brand-primary-light/80" aria-hidden="true">
                        {index + 1}
                      </span>
                      <p className="text-sm text-gray-300 leading-relaxed mt-4">{step}</p>
                    </div>
                  </FadeIn>
                </li>
              ))}
            </ol>
            <FadeIn className="mt-10">
              <WhatsAppButton size="lg">Select Your Tier &amp; Join The Club Today</WhatsAppButton>
            </FadeIn>
          </Container>
        </section>

        {/* 11. FAQ */}
        <section id="faq" className="scroll-mt-20 bg-brand-muted py-16 md:py-24">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
              <FadeIn>
                <Eyebrow>FAQ</Eyebrow>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">Frequently Asked Questions</h2>
              </FadeIn>
              <FadeIn delay={150}>
                <div className="space-y-3">
                  {faqs.map((faq) => (
                    <details
                      key={faq.q}
                      className="group bg-brand-black border border-white/10 rounded-sm open:border-brand-primary/40 transition-colors"
                    >
                      <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-5 [&::-webkit-details-marker]:hidden">
                        <h3 className="font-semibold text-sm md:text-base group-hover:text-brand-primary-light transition-colors">
                          {faq.q}
                        </h3>
                        <span className="w-8 h-8 shrink-0 border border-white/20 rounded-full flex items-center justify-center text-gray-300 group-open:rotate-45 group-open:border-brand-primary-light group-open:text-brand-primary-light transition-all duration-300">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14M5 12h14" />
                          </svg>
                        </span>
                      </summary>
                      <p className="px-5 pb-5 -mt-1 text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                    </details>
                  ))}
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* 12. FINAL CTA */}
        <section id="final" className="scroll-mt-20 bg-hero-dark py-20 md:py-28">
          <Container>
            <FadeIn className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="text-white text-sm">✦</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                A year from now, you will look back at this exact moment.
              </h2>
              <p className="text-white/80 leading-relaxed mt-6">
                You can continue doing what you&rsquo;ve always done: watching inflation eat away at your income, stressing over
                the rising cost of living, and working hard for a currency that loses purchasing power every single month.
              </p>
              <p className="text-2xl font-semibold mt-8">OR...</p>
              <p className="text-xl md:text-2xl font-semibold mt-4">You can draw a line in the sand right now.</p>
              <p className="text-white/80 leading-relaxed mt-6">
                You can master a sovereign, internationally respected skill that pays in foreign currency, join an elite network
                of closers, and take permanent control of your financial destiny.
              </p>
              <p className="text-lg font-semibold mt-8">The door is open.</p>
              <p className="text-white/80 leading-relaxed mt-2">
                Click the button below, select your tier, and I will see you inside The Remote Closers Club.
              </p>
              <div className="mt-10 flex justify-center">
                <WhatsAppButton variant="light" size="lg">
                  Yes! Secure My Access Now.
                </WhatsAppButton>
              </div>
            </FadeIn>
          </Container>
        </section>
      </main>

      <TrainingFooter />

      <MobileStickyCta />
    </>
  )
}

export default Training
