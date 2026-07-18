import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Mastermind = () => {
  const [sectionRef, isVisible] = useScrollAnimation()
  
  const qualifiers = [
    {
      title: 'You have a proven high ticket offer',
      description: 'Your offer already sells at $2,000+ and has real demand.',
      features: [
        { text: 'Offer validated', col: 1 },
        { text: 'Premium price point', col: 2 },
        { text: 'Real demand', col: 1 },
      ],
    },
    {
      title: 'You have consistent lead flow',
      description: 'Ads, organic, or outbound is already bringing conversations in.',
      features: [
        { text: 'Booked calls', col: 1 },
        { text: 'Active pipeline', col: 2 },
        { text: 'Qualified prospects', col: 1 },
      ],
    },
    {
      title: 'You are serious about scaling revenue',
      description: 'You want the leak fixed, not more theory.',
      features: [
        { text: 'Revenue growth', col: 1 },
        { text: 'No guessing', col: 2 },
        { text: 'More closed deals', col: 1 },
      ],
    },
  ]

  return (
    <section ref={sectionRef} className="w-full relative overflow-hidden">
      {/* Background image + red brand overlay + bottom vignette */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1800&h=900&fit=crop"
          alt="Team working"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-primary/75" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(109,30,23,0.35) 0%, rgba(109,30,23,0.85) 70%, rgba(109,30,23,0.95) 100%)',
          }}
        />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-20 md:pt-24 pb-14 md:pb-16">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-semibold text-white italic leading-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              Who This Is For
              <br />
              And Who It Is Not For
            </h2>
            <p className={`text-white/75 text-sm md:text-base max-w-md lg:justify-self-end transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              If you qualify, I can help you turn more of your existing calls into closed revenue. If you do not, this is not the right time to reach out and that is fine.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {qualifiers.map((program, index) => (
              <div 
                key={index} 
                className={`bg-brand-muted rounded-sm border border-white/10 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <div className="px-5 pt-5 pb-4">
                  <h3 className="text-white font-semibold sm:text-lg text-sm group-hover:text-brand-primary transition-colors duration-300">{program.title}</h3>
                  <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                    {program.description}
                  </p>
                </div>
                <div className="h-px bg-white/10 group-hover:bg-brand-primary/20 transition-colors duration-300" />

                <div className="px-5 py-4">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                    {program.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2 group/item">
                        <span className="w-4 h-4 rounded-full bg-brand-primary flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                          <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-gray-300 text-xs group-hover/item:text-white transition-colors duration-300">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mastermind