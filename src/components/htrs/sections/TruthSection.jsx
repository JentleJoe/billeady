import { FadeIn } from '../../AnimationWrappers'
import { HTRS_IMAGES } from '../../../config/htrs'
import { truth } from '../../../content/htrs'
import ImageSlot from '../ui/ImageSlot'
import { Container } from '../ui/Layout'

/**
 * The turn of the argument. A maroon band carries the one big statement,
 * then the reasoning continues on black beside the live-call screenshot.
 */
const TruthSection = () => (
  <section id="truth" className="scroll-mt-20" aria-labelledby="htrs-truth-title">
    <div className="bg-solution">
      <Container className="py-20 md:py-28">
        <FadeIn className="max-w-4xl mx-auto text-center">
          <p className="text-sm md:text-base text-white/70">{truth.lead}</p>
          <h2
            id="htrs-truth-title"
            className="mt-6 text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.4rem] font-semibold text-white leading-[1.1]"
          >
            {truth.headline} <span className="text-white/60">{truth.headlineSecond}</span>
          </h2>
          <div className="mx-auto mt-10 h-px w-16 bg-white/40" aria-hidden="true" />
        </FadeIn>
      </Container>
    </div>

    <div className="bg-brand-black">
      <Container className="py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <FadeIn>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">{truth.body}</p>
            <p className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed">{truth.seat}</p>
            <div className="mt-8 border-l-2 border-brand-primary-light bg-brand-primary/10 px-6 py-6 md:px-8 rounded-sm">
              <p className="text-lg md:text-xl font-medium text-white leading-relaxed">{truth.need}</p>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <ImageSlot image={HTRS_IMAGES.zoomClosingCall} className="w-full max-w-lg mx-auto" />
          </FadeIn>
        </div>
      </Container>
    </div>
  </section>
)

export default TruthSection
