import { Link } from 'react-router-dom'

const Programs = () => {
  const programs = [
    {
      id: 'high-ticket-mastery',
      title: 'High Ticket Closing Mastery',
      subtitle: 'The Complete System',
      description: 'A comprehensive 8-week program that transforms you into a confident, high-performing closer. Learn the exact frameworks, scripts, and mindset shifts that have generated millions in closed deals.',
      duration: '8 Weeks',
      format: 'Live + Self-Paced',
      price: '₦350,000',
      originalPrice: '₦500,000',
      featured: true,
      features: [
        '24 Video Modules',
        'Weekly Live Q&A Calls',
        'Private Community Access',
        'Closing Scripts Library',
        'Role-Play Practice Sessions',
        '1-on-1 Onboarding Call',
        'Lifetime Access',
        'Certificate of Completion',
      ],
      outcomes: [
        'Close high-ticket deals with confidence',
        'Handle any objection smoothly',
        'Build a consistent pipeline',
        'Increase close rate by 40%+',
      ],
    },
    {
      id: 'cold-dm-blueprint',
      title: 'Cold DM Blueprint',
      subtitle: 'Outreach That Converts',
      description: 'Master the art of cold outreach. Learn how to craft messages that get responses, build relationships through DMs, and convert cold prospects into paying clients.',
      duration: '4 Weeks',
      format: 'Self-Paced',
      price: '₦150,000',
      originalPrice: '₦200,000',
      featured: false,
      features: [
        '12 Video Modules',
        'DM Scripts & Templates',
        'Prospect Research Framework',
        'Follow-Up Sequences',
        'Private Community Access',
        'Monthly Group Call',
      ],
      outcomes: [
        'Write DMs that get replies',
        'Build genuine relationships',
        'Convert strangers to clients',
        'Scale your outreach system',
      ],
    },
    {
      id: 'realtor-accelerator',
      title: 'Realtor Client Accelerator',
      subtitle: 'For Real Estate Professionals',
      description: 'A specialized program designed exclusively for realtors who want to attract and close high-value property clients consistently. Industry-specific strategies that work.',
      duration: '6 Weeks',
      format: 'Live + Self-Paced',
      price: '₦250,000',
      originalPrice: '₦350,000',
      featured: false,
      features: [
        '18 Video Modules',
        'Realtor-Specific Scripts',
        'Client Attraction System',
        'Property Presentation Framework',
        'Bi-Weekly Live Calls',
        'Private Realtor Community',
        'Deal Analysis Templates',
      ],
      outcomes: [
        'Attract premium property buyers',
        'Close deals faster',
        'Build a referral machine',
        'Stand out from other realtors',
      ],
    },
  ]

  const bonuses = [
    {
      title: 'Objection Handling Vault',
      description: '50+ proven responses to the most common objections',
      value: '₦75,000',
    },
    {
      title: 'Sales Call Recording Library',
      description: 'Real closing calls to learn from (with permission)',
      value: '₦100,000',
    },
    {
      title: 'Weekly Accountability Check-ins',
      description: 'Stay on track with structured progress reviews',
      value: '₦50,000',
    },
  ]

  const faqs = [
    {
      question: 'Who are these programs for?',
      answer: 'These programs are designed for sales professionals, entrepreneurs, coaches, consultants, and anyone who wants to improve their ability to close high-ticket deals. Whether you\'re just starting or looking to level up, there\'s a program for you.',
    },
    {
      question: 'How are the programs delivered?',
      answer: 'Programs are delivered through our online learning platform with a mix of pre-recorded video modules and live calls. You\'ll also get access to our private community for ongoing support.',
    },
    {
      question: 'What if I can\'t attend the live calls?',
      answer: 'All live calls are recorded and uploaded within 24 hours. You\'ll never miss any content, and you can watch at your own pace.',
    },
    {
      question: 'Is there a payment plan available?',
      answer: 'Yes! We offer flexible payment plans for all programs. Contact us to discuss options that work for your budget.',
    },
    {
      question: 'What results can I expect?',
      answer: 'Results vary based on effort and implementation, but our students typically see a 40-60% improvement in their close rates within the first 30 days of applying the frameworks.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 14-day money-back guarantee. If you\'ve completed the first two modules and don\'t feel the program is right for you, we\'ll refund your investment.',
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
              'radial-gradient(ellipse 80% 50% at 50% 30%, rgba(61,29,78,0.15) 0%, transparent 70%), linear-gradient(135deg, #FEF6EE 0%, #FDEBD6 40%, #FDF3E8 100%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-5">
              <span className="text-[#3D1D4E] text-sm">✦</span>
              <span className="text-xs text-gray-600 uppercase tracking-wider">Training Programs</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-6">
              Level Up Your
              <br />
              <span className="text-[#3D1D4E]">Closing Skills</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Structured training programs designed to transform you into a confident, high-performing sales professional. Choose the program that fits your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="w-full py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="space-y-12">
            {programs.map((program, index) => (
              <div
                key={program.id}
                className={`rounded-sm overflow-hidden ${program.featured ? 'border-2 border-[#3D1D4E]' : 'border border-black/10'}`}
              >
                {program.featured && (
                  <div className="bg-[#3D1D4E] text-white text-center py-2 text-sm font-medium">
                    ⭐ Most Popular Program
                  </div>
                )}
                <div className="grid lg:grid-cols-2">
                  {/* Left - Info */}
                  <div className="p-8 md:p-12 bg-white">
                    <div className="text-xs text-[#3D1D4E] font-medium mb-2">{program.subtitle}</div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">{program.title}</h2>
                    <p className="text-gray-600 mb-6">{program.description}</p>

                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-[#3D1D4E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {program.duration}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-[#3D1D4E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        {program.format}
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-sm text-gray-500 mb-2">What You'll Achieve:</div>
                      <ul className="space-y-2">
                        {program.outcomes.map((outcome, oIndex) => (
                          <li key={oIndex} className="flex items-center gap-2 text-sm text-gray-700">
                            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-baseline gap-3 mb-6">
                      <span className="text-3xl font-bold text-[#3D1D4E]">{program.price}</span>
                      <span className="text-lg text-gray-400 line-through">{program.originalPrice}</span>
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-[#3D1D4E] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#2D1538] transition-colors"
                    >
                      Enroll Now
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>

                  {/* Right - Features */}
                  <div className="p-8 md:p-12 bg-[#FAF9F7]">
                    <div className="text-sm font-semibold text-gray-900 mb-4">What's Included:</div>
                    <ul className="space-y-3">
                      {program.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-3 text-sm text-gray-700">
                          <span className="w-5 h-5 bg-[#3D1D4E] rounded-full flex items-center justify-center shrink-0">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="w-full py-20 md:py-28 bg-[#3D1D4E]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Exclusive Bonuses
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Enroll in any program and get these bonuses absolutely free.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {bonuses.map((bonus, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-sm">
                <div className="text-xs text-white/60 mb-2">Value: {bonus.value}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{bonus.title}</h3>
                <p className="text-white/70 text-sm">{bonus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="w-full py-20 md:py-28 bg-[#FAF9F7]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-sm border border-black/5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Not Sure Which Program Is Right For You?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Book a free strategy call and I'll help you identify the best path forward based on your goals and experience level.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#3D1D4E] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#2D1538] transition-colors"
          >
            Book Free Strategy Call
            <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-[#3D1D4E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Programs
