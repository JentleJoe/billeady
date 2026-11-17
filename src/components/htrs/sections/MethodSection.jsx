import { FadeIn } from '../../AnimationWrappers'
import { diagnostic } from '../../../content/htrs'
import { Container } from '../ui/Layout'
import { CheckIcon, CrossIcon } from '../ui/Icons'

/**
 * "Not persuasion — a diagnostic fit check." Two panels side by side:
 * what pressure selling causes (muted) against what Equal Business Stature gives you (maroon).
 */
const MethodSection = () => (
  <section id="method" className="scroll-mt-20 bg-brand-muted py-16 md:py-24" aria-labelledby="htrs-method-title">
    <Container>
      <FadeIn className="max-w-4xl">
        <h2 id="htrs-method-title" className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight text-balance">
          {diagnostic.headline} <span className="text-brand-primary-light">{diagnostic.headlineSecond}</span>
        </h2>
      </FadeIn>

      <div className="mt-12 md:mt-16 grid gap-5 lg:grid-cols-2">
        <FadeIn className="h-full">
          <div className="h-full bg-brand-black/50 border border-white/10 rounded-sm p-6 md:p-8">
            <p className="text-gray-300 leading-relaxed mb-6">{diagnostic.whetherLead}</p>
            <ul className="space-y-4">
              {diagnostic.failures.map((item) => (
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

        <FadeIn delay={150} className="h-full">
          <div className="h-full bg-brand-primary/15 border border-brand-primary/50 rounded-sm p-6 md:p-8">
            <p className="text-white font-semibold text-lg mb-6">{diagnostic.statureLead}</p>
            <ul className="space-y-4">
              {diagnostic.outcomes.map((item) => (
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
      </div>

      <FadeIn className="mt-14 md:mt-20 text-center">
        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-snug text-balance">
          {diagnostic.closing}{' '}
          <span className="text-brand-primary-light">{diagnostic.closingSecond}</span>
        </p>
      </FadeIn>
    </Container>
  </section>
)

export default MethodSection
