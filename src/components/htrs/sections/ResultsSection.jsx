import { FadeIn } from '../../AnimationWrappers'
import { HTRS_IMAGES } from '../../../config/htrs'
import { results } from '../../../content/htrs'
import ImageSlot from '../ui/ImageSlot'
import { Container, Eyebrow } from '../ui/Layout'
import Testimonials from './Testimonials'

/** Student placements: the setter-role screenshot, then the five student write-ups. */
const ResultsSection = () => (
  <section id="results" className="scroll-mt-20 bg-section-muted py-16 md:py-24" aria-labelledby="htrs-results-title">
    <Container>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16 lg:items-center">
        <FadeIn>
          <h2 id="htrs-results-title" className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight text-balance">
            {results.heading} <span className="text-brand-primary-light">{results.headingSecond}</span>
          </h2>
        </FadeIn>

        <FadeIn delay={150}>
          <figure className="max-w-sm mx-auto lg:mr-0">
            <ImageSlot image={HTRS_IMAGES.studentSetterChat} className="w-full" />
            <figcaption className="mt-4 text-sm text-gray-400 leading-relaxed">{results.setterCaption}</figcaption>
          </figure>
        </FadeIn>
      </div>

      <div className="mt-20 md:mt-28">
        <FadeIn>
          <Eyebrow as="h3">Student testimonials</Eyebrow>
        </FadeIn>
        <FadeIn delay={100}>
          <Testimonials />
        </FadeIn>
      </div>
    </Container>
  </section>
)

export default ResultsSection
