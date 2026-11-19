import { FadeIn } from '../../AnimationWrappers'
import { program } from '../../../content/htrs'
import { Container, Eyebrow } from '../ui/Layout'

/**
 * The 4 Pillar Revenue System, set as an editorial index rather than a card grid:
 * pillar number and title on the left, its lessons on the right, hairlines between.
 */
const ProgramSection = () => (
  <section id="program" className="scroll-mt-20" aria-labelledby="htrs-program-title">
    <div className="bg-hero-dark">
      <Container className="py-16 md:py-20">
        <FadeIn>
          <Eyebrow light>{program.eyebrow}</Eyebrow>
          <h2 id="htrs-program-title" className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.05] text-balance">
            {program.heading}
          </h2>
        </FadeIn>
      </Container>
    </div>

    <div className="bg-brand-black">
      <Container className="py-6 md:py-10">
        <ol>
          {program.pillars.map((pillar, index) => (
            <li key={pillar.title} className="border-b border-white/10 last:border-b-0">
              <FadeIn className="grid gap-6 py-10 md:py-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
                <div>
                  <p className="flex items-baseline gap-3">
                    <span className="text-5xl md:text-6xl font-semibold text-brand-primary tabular-nums leading-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-gray-400">Pillar {index + 1}</span>
                  </p>
                  <h3 className="mt-5 text-2xl md:text-[1.75rem] font-semibold text-white leading-snug">{pillar.title}</h3>
                </div>

                <ul className="divide-y divide-white/10 border-y border-white/10 lg:border-t-0">
                  {pillar.points.map((point) => (
                    <li key={point.text} className="flex gap-4 py-5 first:lg:pt-0">
                      <span className="mt-2.5 h-px w-4 bg-brand-primary-light shrink-0" aria-hidden="true" />
                      <p className="text-gray-300 leading-relaxed">
                        {point.label && <span className="font-semibold text-white">{point.label} </span>}
                        {point.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </li>
          ))}
        </ol>
      </Container>
    </div>
  </section>
)

export default ProgramSection
