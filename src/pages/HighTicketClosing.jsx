import { Link } from 'react-router-dom'

const HighTicketClosing = () => {
  const services = [
    {
      title: 'Sales Call Closing',
      description: 'I handle the final stage of your sales process, converting qualified leads into paying customers through strategic, high-converting sales calls.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      title: 'Deal Negotiation',
      description: 'Expert negotiation tactics to maximize deal value while maintaining strong client relationships and ensuring win-win outcomes.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Objection Handling',
      description: 'Masterfully address and overcome client objections, turning hesitations into commitments with proven psychological frameworks.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Revenue Recovery',
      description: 'Re-engage lost leads and recover potential revenue through strategic follow-up sequences and personalized closing approaches.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ]

  const stats = [
    { value: '₦500M+', label: 'Total Revenue Closed' },
    { value: '200+', label: 'High Ticket Deals Closed' },
    { value: '85%', label: 'Average Close Rate' },
    { value: '48hrs', label: 'Average Deal Cycle' },
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We discuss your business, target clients, and sales goals to ensure alignment.',
    },
    {
      step: '02',
      title: 'Lead Handoff',
      description: 'You pass qualified leads to me with relevant context and background information.',
    },
    {
      step: '03',
      title: 'Strategic Closing',
      description: 'I engage with your prospects using proven high-ticket closing frameworks.',
    },
    {
      step: '04',
      title: 'Deal Completion',
      description: 'Closed deals are handed back to you with full documentation and client onboarding notes.',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 70% 50%, rgba(114,47,55,0.15) 0%, transparent 70%), linear-gradient(135deg, #FEF6EE 0%, #FDEBD6 40%, #FDF3E8 100%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[#722F37] text-sm">✦</span>
              <span className="text-xs text-gray-600 uppercase tracking-wider">High Ticket Closing Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-6">
              Close More Deals.
              <br />
              <span className="text-[#722F37]">Maximize Revenue.</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl">
              Let me handle the most critical part of your sales process. With a proven track record of closing high-ticket deals, I turn your qualified leads into paying customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#722F37] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#5C242B] transition-colors"
              >
                Book a Discovery Call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/coaching"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-[#722F37] px-8 py-4 rounded-full text-sm font-medium border border-[#722F37] hover:bg-[#722F37] hover:text-white transition-colors"
              >
                Learn to Close Yourself
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-[#722F37] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-semibold text-white mb-2">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              What I Do For You
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I specialize in the final and most crucial stage of sales, closing. Here's how I help businesses like yours increase revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#FAF9F7] p-8 rounded-sm border border-black/5 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-[#722F37] rounded-full flex items-center justify-center text-white mb-5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-20 md:py-28 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                How We Work Together
              </h2>
              <p className="text-gray-600 mb-8">
                A simple, streamlined process that integrates seamlessly with your existing sales funnel. You focus on generating leads, I focus on closing them.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-[#722F37] font-medium hover:gap-3 transition-all"
              >
                Get Started Today
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="space-y-6">
              {process.map((item, index) => (
                <div key={index} className="flex gap-5">
                  <div className="shrink-0 w-12 h-12 bg-[#722F37] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="w-full py-20 md:py-28"
        style={{
          background: 'linear-gradient(135deg, #722F37 0%, #4A1E23 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Ready to Close More High-Ticket Deals?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Stop losing revenue to poor closing. Let's discuss how I can help you convert more leads into customers.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-white text-[#722F37] px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Schedule Your Free Consultation
            <span className="w-6 h-6 bg-[#722F37] rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HighTicketClosing
