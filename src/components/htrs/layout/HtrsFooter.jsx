import redLogo from '../../../assets/redLogo.png'

/**
 * Footer: the logo as a brand signature — the same closing treatment as the /TRCC landing page,
 * so Billeddy's landing pages end the same way.
 */
const HtrsFooter = () => (
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

export default HtrsFooter
