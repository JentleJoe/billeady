import { FadeIn } from '../../AnimationWrappers'
import { finalCta } from '../../../content/htrs'
import CalendlyButton, { CtaNote } from '../ui/CalendlyButton'
import { Container } from '../ui/Layout'

/** The two choices, side by side, then the closing booking CTA. */
const FinalCtaSection = () => {
  const [stay, move] = finalCta.choices

  return (
    <section id="final" className="scroll-mt-20 relative overflow-hidden" aria-labelledby="htrs-final-title">
      <div className="absolute inset-0 bg-hero-light-center" aria-hidden="true" />
      <Container className="relative py-20 md:py-28">
        <FadeIn className="text-center">
          <h2 id="htrs-final-title" className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight text-balance">
            {finalCta.lead}
          </h2>
        </FadeIn>

        <div className="mt-12 md:mt-16 grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-6 lg:items-stretch">
          <FadeIn className="h-full">
            <div className="h-full border border-white/10 rounded-sm p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-4">{stay.label.replace(/:$/, '')}</p>
              <p className="text-gray-400 leading-relaxed">{stay.text}</p>
            </div>
          </FadeIn>

          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-white/20 lg:hidden" aria-hidden="true" />
            <span className="text-sm font-semibold tracking-[0.2em] text-brand-primary-light">{finalCta.or}</span>
            <span className="h-px w-10 bg-white/20 lg:hidden" aria-hidden="true" />
          </div>

          <FadeIn delay={150} className="h-full">
            <div className="h-full bg-brand-primary/15 border border-brand-primary/60 rounded-sm p-6 md:p-8 shadow-2xl">
              <p className="text-xs uppercase tracking-[0.2em] text-white font-semibold mb-4">{move.label.replace(/:$/, '')}</p>
              <p className="text-white leading-relaxed">{move.text}</p>
            </div>
          </FadeIn>
        </div>

        <FadeIn className="mt-16 md:mt-20 max-w-2xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-semibold text-white leading-snug">{finalCta.door}</p>
          <p className="mt-3 text-gray-300 text-base md:text-lg">{finalCta.apply}</p>
          <div className="mt-10 flex flex-col items-center">
            <CalendlyButton size="lg" block>
              {finalCta.cta}
            </CalendlyButton>
            <CtaNote items={finalCta.ctaNote} className="text-center" />
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

export default FinalCtaSection
