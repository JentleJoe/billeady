import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ServicesOverview = () => {
  const [sectionRef, isVisible] = useScrollAnimation()

  const services = [
    {
      eyebrow: 'Closing Services',
      title: 'Done-for-you high ticket closing',
      description:
        'I step into your sales process and close qualified leads so you can focus on delivery, fulfillment, and growth.',
      highlights: [
        'Sales call closing for qualified leads',
        'Objection handling and deal negotiation',
        'Revenue recovery and follow-up systems',
      ],
      cta: {
        label: 'Explore Closing Services',
        to: '/high-ticket-closing',
      },
    },
    {
      eyebrow: 'Business Consulting',
      title: 'Strategic guidance to scale revenue',
      description:
        'Partner with me to refine your sales strategy, tighten your systems, and create predictable, sustainable growth.',
      highlights: [
        'Sales strategy and market positioning',
        'Revenue optimization and pipeline clarity',
        'Team performance and scalable systems',
      ],
      cta: {
        label: 'Explore Consulting',
        to: '/consulting',
      },
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="w-full relative overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 70% 40% at 20% 0%, rgba(109,30,23,0.08) 0%, transparent 70%), linear-gradient(180deg, #FDF8F5 0%, #FFFFFF 100%)',
      }}
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
            Services That Drive Revenue
          </h2>
          <p
            className={`text-gray-600 text-sm md:text-base transition-all duration-700 delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Two ways I serve business owners: done-for-you closing and strategic consulting. If you want to learn to close yourself, the training section right after this is for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-white border border-black/10 rounded-sm p-8 md:p-9 shadow-sm hover:shadow-xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 120}ms` }}
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-brand-primary mb-3">
                <span className="text-brand-primary">✦</span>
                {service.eyebrow}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-3 mb-7">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 mt-0.5 bg-brand-primary rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={service.cta.to}
                className="inline-flex items-center gap-2 text-brand-primary font-medium text-sm hover:gap-3 transition-all"
              >
                {service.cta.label}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
