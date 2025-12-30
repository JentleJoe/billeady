import { Link } from 'react-router-dom'

const Consulting = () => {
  const services = [
    {
      title: 'Sales Strategy Development',
      description: 'Build a comprehensive sales strategy tailored to your business model, target market, and growth objectives.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Revenue Optimization',
      description: 'Identify revenue leaks, optimize pricing strategies, and implement systems to maximize profitability.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Team Performance',
      description: 'Train and develop your sales team to perform at their peak, with proven methodologies and accountability systems.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Business Systems & Processes',
      description: 'Implement scalable systems and processes that allow your business to grow without burning out.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Market Positioning',
      description: 'Define your unique value proposition and position your business to stand out in competitive markets.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Growth Planning',
      description: 'Develop actionable roadmaps for scaling your business with clear milestones and KPIs.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
    },
  ]

  const industries = [
    'Coaching & Consulting',
    'Real Estate',
    'E-commerce',
    'SaaS & Tech',
    'Professional Services',
    'Health & Wellness',
  ]

  const engagementTypes = [
    {
      title: 'Strategy Session',
      duration: '2-3 Hours',
      description: 'A focused deep-dive into a specific challenge or opportunity in your business.',
      features: ['Problem diagnosis', 'Action plan creation', 'Follow-up resources'],
      price: 'Starting at ₦250,000',
    },
    {
      title: 'Monthly Retainer',
      duration: 'Ongoing',
      description: 'Continuous strategic guidance with regular check-ins and unlimited support.',
      features: ['Weekly strategy calls', 'Unlimited messaging access', 'Team training sessions', 'Performance reviews'],
      price: 'Custom Pricing',
    },
    {
      title: 'Intensive Sprint',
      duration: '30-90 Days',
      description: 'A focused engagement to solve a major business challenge or implement a key initiative.',
      features: ['Deep business audit', 'Strategy development', 'Implementation support', 'Team alignment'],
      price: 'Starting at ₦1,500,000',
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
              'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(114,47,55,0.12) 0%, transparent 70%), linear-gradient(135deg, #FEF6EE 0%, #FDEBD6 40%, #FDF3E8 100%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-5">
              <span className="text-[#722F37] text-sm">✦</span>
              <span className="text-xs text-gray-600 uppercase tracking-wider">Business Consulting</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-6">
              Strategic Guidance for
              <br />
              <span className="text-[#722F37]">Business Growth</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Partner with someone who's built, lost, and rebuilt. My consulting approach combines real-world experience with proven frameworks to help you scale sustainably.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#722F37] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#5C242B] transition-colors"
              >
                Schedule Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="w-full py-20 md:py-28 bg-[#722F37]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                Advice From Someone Who's Been There
              </h2>
              <p className="text-white/80 mb-6">
                In 2022, I lost over ₦60 Million. Everything I had built came crashing down. But that experience taught me more about business than any success ever could.
              </p>
              <p className="text-white/80 mb-6">
                I rebuilt from zero — not by luck, but by understanding what actually works. The systems, strategies, and mindsets I developed during that comeback are now the foundation of my consulting practice.
              </p>
              <p className="text-white/80">
                When you work with me, you're not getting theoretical advice from someone who's only seen success. You're getting battle-tested wisdom from someone who's navigated the worst and come out stronger.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-6 rounded-sm">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-white/60 text-sm">Businesses Consulted</div>
              </div>
              <div className="bg-white/10 p-6 rounded-sm">
                <div className="text-3xl font-bold text-white mb-2">₦500M+</div>
                <div className="text-white/60 text-sm">Client Revenue Generated</div>
              </div>
              <div className="bg-white/10 p-6 rounded-sm">
                <div className="text-3xl font-bold text-white mb-2">8+</div>
                <div className="text-white/60 text-sm">Years Experience</div>
              </div>
              <div className="bg-white/10 p-6 rounded-sm">
                <div className="text-3xl font-bold text-white mb-2">6</div>
                <div className="text-white/60 text-sm">Industries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              How I Help Businesses Grow
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Strategic consulting services designed to identify opportunities, solve problems, and accelerate growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#FAF9F7] p-6 rounded-sm border border-black/5 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-[#722F37] rounded-full flex items-center justify-center text-white mb-5">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="w-full py-20 md:py-28 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Industries I Work With
              </h2>
              <p className="text-gray-600 mb-8">
                While my frameworks apply across industries, I've developed specialized expertise in these areas through years of hands-on experience.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#722F37] rounded-full"></span>
                    <span className="text-gray-700">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Is Consulting Right For You?</h3>
              <p className="text-gray-600 text-sm mb-6">
                My consulting is best suited for businesses that:
              </p>
              <ul className="space-y-3">
                {[
                  'Have existing revenue but want to scale',
                  'Feel stuck or plateaued in growth',
                  'Need strategic direction and clarity',
                  'Want to optimize their sales process',
                  'Are ready to invest in expert guidance',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm">
                    <span className="w-5 h-5 bg-[#722F37] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Types */}
      <section className="w-full py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Ways to Work Together
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the engagement style that fits your needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {engagementTypes.map((type, index) => (
              <div
                key={index}
                className={`p-8 rounded-sm border ${index === 1 ? 'bg-[#722F37] border-[#722F37]' : 'bg-white border-black/10'}`}
              >
                <div className={`text-xs font-medium mb-2 ${index === 1 ? 'text-white/60' : 'text-[#722F37]'}`}>
                  {type.duration}
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${index === 1 ? 'text-white' : 'text-gray-900'}`}>
                  {type.title}
                </h3>
                <p className={`text-sm mb-6 ${index === 1 ? 'text-white/70' : 'text-gray-600'}`}>
                  {type.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {type.features.map((feature, fIndex) => (
                    <li key={fIndex} className={`flex items-center gap-2 text-sm ${index === 1 ? 'text-white/80' : 'text-gray-600'}`}>
                      <svg className={`w-4 h-4 ${index === 1 ? 'text-white' : 'text-[#722F37]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className={`font-semibold ${index === 1 ? 'text-white' : 'text-gray-900'}`}>
                  {type.price}
                </div>
              </div>
            ))}
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Let's have a conversation about where your business is today and where you want it to be. No pressure, just clarity.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-white text-[#722F37] px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Book Your Free Consultation
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

export default Consulting
