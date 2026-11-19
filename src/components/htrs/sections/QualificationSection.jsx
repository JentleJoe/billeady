import { FadeIn } from '../../AnimationWrappers'
import { qualification } from '../../../content/htrs'
import { Container } from '../ui/Layout'
import { CheckIcon, CrossIcon } from '../ui/Icons'

/** Who the mentorship is for, and who it is not for. */
const QualificationSection = () => (
  <section id="fit" className="scroll-mt-20 bg-brand-black py-16 md:py-24" aria-labelledby="htrs-fit-title">
    <Container>
      <FadeIn className="max-w-3xl">
        <h2 id="htrs-fit-title" className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight text-balance">
          {qualification.intro} <span className="text-white/60">{qualification.introSecond}</span>
        </h2>
      </FadeIn>

      <div className="mt-12 md:mt-16 grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <FadeIn className="h-full">
          <div className="h-full bg-brand-muted border border-white/10 border-t-2 border-t-brand-primary-light rounded-sm p-6 md:p-8">
            <h3 className="text-xs uppercase tracking-[0.2em] text-white font-semibold mb-6">{qualification.forHeading}</h3>
            <ul className="space-y-5">
              {qualification.forItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-200">
                  <span className="mt-1 w-5 h-5 rounded-full bg-brand-primary flex items-center justify-center shrink-0 text-white">
                    <CheckIcon />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={150} className="h-full">
          <div className="h-full border border-white/10 rounded-sm p-6 md:p-8">
            <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-6">
              {qualification.notForHeading}
            </h3>
            <ul className="space-y-5">
              {qualification.notForItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-400">
                  <span className="mt-1 w-5 h-5 rounded-full border border-white/25 flex items-center justify-center shrink-0 text-gray-400">
                    <CrossIcon />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </Container>
  </section>
)

export default QualificationSection
