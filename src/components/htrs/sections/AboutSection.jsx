import { FadeIn } from '../../AnimationWrappers'
import { HTRS_IMAGES } from '../../../config/htrs'
import { about } from '../../../content/htrs'
import ImageSlot from '../ui/ImageSlot'
import { Container } from '../ui/Layout'

/** Who is Billeddy Saliu: portrait, credentials, founder-recruitment proof, bridge to the program. */
const AboutSection = () => (
  <section
    id="about"
    className="scroll-mt-20 relative overflow-hidden bg-brand-black border-t border-white/5"
    aria-labelledby="htrs-about-title"
  >
    <div className="absolute inset-0 bg-hero-light-left opacity-80" aria-hidden="true" />
    <Container className="relative py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        {/* Grid column stretches to the copy's height so the portrait can stay in view beside it */}
        <div>
          <FadeIn className="lg:sticky lg:top-28">
            <ImageSlot image={HTRS_IMAGES.billeddyHeadshot} className="w-full max-w-md mx-auto lg:max-w-none" />
          </FadeIn>
        </div>

        <div>
          <FadeIn>
            <h2
              id="htrs-about-title"
              className="text-xs uppercase tracking-[0.2em] text-gray-300 flex items-center gap-2 mb-6"
            >
              <span className="text-brand-primary-light text-sm" aria-hidden="true">✦</span>
              {about.heading}
            </h2>
            <p className="text-2xl md:text-3xl lg:text-[2.1rem] font-semibold text-white leading-snug">{about.intro[0]}</p>
            <p className="mt-5 text-lg md:text-xl text-gray-300 leading-relaxed">{about.intro[1]}</p>
          </FadeIn>

          <FadeIn delay={100}>
            <dl className="mt-10 border-b border-white/10">
              {about.credentials.map((item) => (
                <div
                  key={item.title}
                  className="grid gap-1 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:gap-8 border-t border-white/10 py-5"
                >
                  <dt className="font-semibold text-white">{item.title.replace(/:$/, '')}</dt>
                  <dd className="text-sm md:text-[15px] text-gray-400 leading-relaxed">{item.text}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </div>

      {/* Founders recruiting trained reps */}
      <div className="mt-20 md:mt-28 grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <FadeIn>
          <p className="text-2xl md:text-3xl font-semibold text-white leading-snug">{about.recruitLead}</p>
        </FadeIn>
        <FadeIn delay={150}>
          <figure className="max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <ImageSlot image={HTRS_IMAGES.carlosWhatsappDm} className="w-full" />
            <figcaption className="mt-4 text-sm text-gray-400 leading-relaxed">{about.recruitCaption}</figcaption>
          </figure>
        </FadeIn>
      </div>

      <FadeIn className="mt-20 md:mt-28 max-w-3xl mx-auto text-center">
        <div className="mx-auto mb-10 h-px w-16 bg-brand-primary-light/60" aria-hidden="true" />
        <p className="text-xl md:text-2xl text-white leading-relaxed">{about.bridge}</p>
      </FadeIn>
    </Container>
  </section>
)

export default AboutSection
