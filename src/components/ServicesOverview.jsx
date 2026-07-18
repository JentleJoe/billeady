import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ServicesOverview = () => {
  const [sectionRef, isVisible] = useScrollAnimation()

  const results = [
    {
      title: '$880,000 closed in one quarter',
      description:
        'Closed in high ticket deals for a real estate developer client in Q2 of 2025.',
    },
    {
      title: '74% booked-call conversion',
      description:
        'Converted booked calls into paying clients for a coaching offer priced at $4,000+.',
    },
    {
      title: '$54,000 commission in 3 months',
      description:
        'Generated from a single agency outbound pipeline by tightening the close.',
    },
    {
      title: 'Multi-vertical close rate',
      description:
        'Closed deals in insurance, real estate, and fitness consultancy without losing consistency.',
    },
    {
      title: 'A 12K coaching package in week one',
      description:
        'No discount, no compromise, no wasted momentum across eight prospects.',
    },
  ]

  const proofLine = [
    'Billeddy Saliu is one of the razor sharp closer I have got to work with that delivered the most exceptional closing outcome weekly.',
    'CEO, BOD GROUP (Canada)',
    'Billeddy is the guy for you when your deal is close to a dead end and you want a closer resurrect it without destroying it totally.',
    'Paris Calvin (United State)',
  ]

  return (
    <section
      ref={sectionRef}
      className="w-full relative overflow-hidden bg-section-muted"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <span className="w-8 h-px bg-brand-primary" />
            For Business Owners
            <span className="w-8 h-px bg-brand-primary" />
          </div>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Results Speak
          </h2>
          <p
            className={`text-gray-600 text-sm md:text-base transition-all duration-700 delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            A few of the outcomes that show what changes when the close is handled with precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((service, index) => (
            <div
              key={service.title}
              className={`bg-white border border-black/10 rounded-sm p-8 md:p-9 shadow-sm hover:shadow-xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 120}ms` }}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <div className="bg-white border border-black/10 rounded-sm p-8 shadow-sm">
            <div className="text-xs uppercase tracking-[0.2em] text-brand-primary mb-3">Client Feedback</div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              {proofLine[0]}
            </p>
            <p className="text-gray-500 text-xs uppercase tracking-wider">{proofLine[1]}</p>
          </div>
          <div className="bg-white border border-black/10 rounded-sm p-8 shadow-sm">
            <div className="text-xs uppercase tracking-[0.2em] text-brand-primary mb-3">What clients say</div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              {proofLine[2]}
            </p>
            <p className="text-gray-500 text-xs uppercase tracking-wider">{proofLine[3]}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
