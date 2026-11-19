import { FadeIn } from '../../AnimationWrappers'
import { admission } from '../../../content/htrs'
import CalendlyButton, { CtaNote } from '../ui/CalendlyButton'
import { Container } from '../ui/Layout'

/** Admission by application: why, the three steps, and the cohort booking CTA. */
const AdmissionSection = () => (
  <section id="apply" className="scroll-mt-20 bg-solution py-16 md:py-24" aria-labelledby="htrs-apply-title">
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <p className="text-white/80 text-base md:text-lg leading-relaxed">{admission.protect}</p>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 id="htrs-apply-title" className="text-3xl md:text-4xl font-semibold text-white leading-tight text-balance">
            {admission.apply} <span className="block mt-2 text-white">{admission.applySecond}</span>
          </h2>
        </FadeIn>
      </div>

      <div className="mt-14 md:mt-20 pt-10 md:pt-12 border-t border-white/20">
        <FadeIn>
          <h3 className="text-xs uppercase tracking-[0.2em] text-white/80 font-semibold mb-8">{admission.stepsHeading}</h3>
        </FadeIn>
        <ol className="grid gap-8 md:grid-cols-3 md:gap-6">
          {admission.steps.map((step, index) => (
            <li key={step}>
              <FadeIn delay={index * 100} className="relative">
                {/* connecting rule between steps (desktop) */}
                {index < admission.steps.length - 1 && (
                  <span className="hidden md:block absolute top-6 left-16 right-0 h-px bg-white/25" aria-hidden="true" />
                )}
                <span className="relative w-12 h-12 rounded-full bg-white text-brand-primary flex items-center justify-center text-sm font-semibold">
                  <span className="sr-only">Step </span>
                  {index + 1}
                </span>
                <p className="mt-5 text-white leading-relaxed pr-4">{step}</p>
              </FadeIn>
            </li>
          ))}
        </ol>

        <FadeIn className="mt-12 md:mt-16">
          <CalendlyButton variant="light" size="lg" block>
            {admission.cta}
          </CalendlyButton>
          <CtaNote items={admission.ctaNote} light />
        </FadeIn>
      </div>
    </Container>
  </section>
)

export default AdmissionSection
