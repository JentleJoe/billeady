import { FadeIn } from '../../AnimationWrappers'
import { HTRS_IMAGES } from '../../../config/htrs'
import { hero } from '../../../content/htrs'
import CalendlyButton, { CtaNote } from '../ui/CalendlyButton'
import ImageSlot from '../ui/ImageSlot'
import { Container, Eyebrow } from '../ui/Layout'
import { CrossIcon } from '../ui/Icons'

// The headline's last phrase takes the brand accent, as on /high-ticket-closing.
const ACCENT = 'Low Tier Offers.'

const HeroSection = () => {
  const lead = hero.headline.replace(ACCENT, '').trimEnd()

  return (
    <section id="top" className="relative overflow-hidden" aria-labelledby="htrs-hero-title">
      <div className="absolute inset-0 bg-hero-light" aria-hidden="true" />
      <Container className="relative pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16 lg:items-center">
          <div>
            <FadeIn delay={100}>
              <Eyebrow className="mb-7 max-w-xl">{hero.eyebrow}</Eyebrow>
            </FadeIn>

            <FadeIn delay={200}>
              <h1
                id="htrs-hero-title"
                className="text-[2.1rem] sm:text-5xl lg:text-[3.6rem] font-semibold text-white leading-[1.1] mb-7"
              >
                {lead} <span className="text-brand-accent">{ACCENT}</span>
              </h1>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mb-8">{hero.subheadline}</p>

              <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-2 mb-4">
                {hero.negations.map((line) => (
                  <li key={line} className="flex items-center gap-2.5 text-sm md:text-base text-gray-400">
                    <span className="w-4 h-4 rounded-full border border-white/25 flex items-center justify-center text-gray-400 shrink-0">
                      <CrossIcon className="w-2 h-2" />
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
              <p className="border-l-2 border-brand-primary-light pl-4 text-white font-medium text-base md:text-lg leading-snug max-w-xl mb-10">
                {hero.positioning}
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <CalendlyButton size="lg" block>
                {hero.cta}
              </CalendlyButton>
              <CtaNote items={hero.ctaNote} />
            </FadeIn>
          </div>

          {/* One instance for all screens: beside the copy on desktop, after the CTA on mobile */}
          <FadeIn delay={300}>
            <ImageSlot image={HTRS_IMAGES.heroWalletBalance} eager className="w-full max-w-md mx-auto lg:max-w-none" />
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
