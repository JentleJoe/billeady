import { useState } from 'react'
import { FadeIn } from '../../AnimationWrappers'
import { faq } from '../../../content/htrs'
import { Container } from '../ui/Layout'
import { PlusIcon } from '../ui/Icons'

/** Accordion FAQ. The first answer starts open; several can be open at once. */
const FaqSection = () => {
  const [open, setOpen] = useState(() => new Set([0]))

  const toggle = (index) =>
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })

  return (
    <section id="faq" className="scroll-mt-20 bg-brand-muted py-16 md:py-24" aria-labelledby="htrs-faq-title">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
          <FadeIn>
            <h2 id="htrs-faq-title" className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight lg:sticky lg:top-28">
              {faq.heading}
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="border-t border-white/10">
              {faq.items.map((item, index) => {
                const isOpen = open.has(index)
                return (
                  <div key={item.q} className="border-b border-white/10">
                    <h3>
                      <button
                        type="button"
                        id={`htrs-faq-q-${index}`}
                        aria-expanded={isOpen}
                        aria-controls={`htrs-faq-a-${index}`}
                        onClick={() => toggle(index)}
                        className="group w-full flex items-start justify-between gap-6 py-6 text-left"
                      >
                        <span className={`text-base md:text-lg font-medium leading-snug transition-colors ${isOpen ? 'text-white' : 'text-gray-200 group-hover:text-white'}`}>
                          <span className="text-brand-primary-light mr-2" aria-hidden="true">Q:</span>
                          {item.q}
                        </span>
                        <span
                          className={`mt-0.5 w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                            isOpen ? 'rotate-45 bg-brand-primary border-brand-primary text-white' : 'border-white/20 text-gray-300 group-hover:border-brand-primary'
                          }`}
                          aria-hidden="true"
                        >
                          <PlusIcon className="w-3.5 h-3.5" />
                        </span>
                      </button>
                    </h3>
                    <div
                      id={`htrs-faq-a-${index}`}
                      role="region"
                      aria-labelledby={`htrs-faq-q-${index}`}
                      className="htrs-collapse"
                      data-open={isOpen}
                      inert={!isOpen}
                    >
                      <div>
                        <div className="pb-7 pr-2 md:pr-14 space-y-4 text-gray-300 leading-relaxed">
                          {item.a.map((para, i) => (
                            <p key={para}>
                              {i === 0 && <span className="font-semibold text-white mr-1">A:</span>}
                              {para}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

export default FaqSection
