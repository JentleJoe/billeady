import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Solution = () => {
  const [sectionRef, isVisible] = useScrollAnimation()
  
  const modelPoints = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'No retainers',
      description: 'No salary, no base pay.',
      link: '/calls-to-revenue',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Pay only when I close',
      description: 'If I do not close, I do not get paid.',
      link: '/calls-to-revenue',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Zero risk on your end',
      description: 'Full commitment on mine.',
      link: '/calls-to-revenue',
    },
  ]

  return (
    <section ref={sectionRef} className="w-full bg-solution">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14 md:py-16">
        <h2 
          className={`lg:hidden mb-5 text-[32px] sm:text-4xl md:text-5xl font-semibold text-white leading-tight transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          My Model
          <br />
          Performance Based Only.
        </h2>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left: Solution Card */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="bg-brand-muted border border-white/10 rounded-sm overflow-hidden hover:shadow-2xl transition-shadow duration-500">
              <div className="px-7 pt-7 pb-5">
                <h3 className="text-xl font-semibold text-white">Performance based commission, period.</h3>
                <p className="text-gray-300 text-xs leading-relaxed mt-3 max-w-md">
                  I do not work on retainers or salaries. I step into your sales process, close qualified leads, and get paid when revenue lands.
                </p>
                <div className="h-px bg-white/10 mt-5" />

                <div className="flex items-center gap-3 mt-4">
                  <span className="w-5 h-5 rounded-full bg-brand-primary flex items-center justify-center shrink-0 animate-pulse-soft">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-xs text-gray-300">Proven. Battle-tested. Results-driven.</span>
                </div>
              </div>

              <div className="px-5 pb-5">
                <div className="bg-brand-black overflow-hidden rounded-sm">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=600&fit=crop"
                    alt="Marketing planning session"
                    className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Heading + Rows */}
          <div className="pt-1">
            <h2 
              className={`max-lg:hidden text-4xl md:text-5xl font-semibold text-white leading-tight transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Performance Based
              <br />
              Only.
            </h2>
            <p 
              className={`text-white/70 text-sm lg:mt-5 max-w-md transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Zero risk on your end. Full commitment on mine. That is the whole model.
            </p>

            <div className="mt-9 space-y-4">
              {modelPoints.map((point, index) => (
                <a
                  key={index}
                  href="https://wa.me/2347069487679?text=Hi%20Billeddy,%20I'm%20interested%20in%20your%20performance-based%20closing%20services.%20I%20understand%20it's%20commission%20only%20with%20no%20retainers."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-brand-muted border border-white/10 rounded-sm px-5 py-4 flex items-center justify-between hover:border-brand-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ 
                    transitionDelay: `${300 + index * 100}ms`
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-brand-primary-light/40 rounded-sm flex items-center justify-center text-brand-primary-light group-hover:bg-brand-primary-light group-hover:text-white group-hover:border-brand-primary-light transition-all duration-300">
                      {point.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-brand-primary-light transition-colors">{point.title}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{point.description}</div>
                    </div>
                  </div>

                  <div className="text-gray-300 group-hover:translate-x-2 group-hover:text-brand-primary-light transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
