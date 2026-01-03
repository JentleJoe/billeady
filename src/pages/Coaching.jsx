import { Link } from 'react-router-dom'

const Coaching = () => {
  const benefits = [
    {
      title: 'Master the Psychology of Selling',
      description: 'Understand what makes high-ticket buyers tick and how to position yourself as the obvious choice.',
    },
    {
      title: 'Proven Closing Frameworks',
      description: 'Learn battle-tested scripts and frameworks that have closed millions in high-ticket sales.',
    },
    {
      title: 'Objection Handling Mastery',
      description: 'Turn every "no" into a "yes" with advanced objection handling techniques.',
    },
    {
      title: 'Confidence on Sales Calls',
      description: 'Develop unshakeable confidence that positions you as an authority in every conversation.',
    },
    {
      title: 'Pipeline Management',
      description: 'Build and manage a consistent pipeline of high-value prospects ready to close.',
    },
    {
      title: 'Personal Mentorship',
      description: 'Get direct feedback on your calls and personalized strategies for improvement.',
    },
  ]

  const testimonials = [
    {
      name: 'Adebayo Johnson',
      role: 'Sales Consultant',
      quote: 'Before working with Billeady, I struggled to close anything above ₦500K. Within 3 months of his coaching, I closed my first ₦5M deal. His frameworks are game-changing.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    {
      name: 'Chioma Okafor',
      role: 'Business Owner',
      quote: "Billeady's coaching transformed my approach to sales. I went from dreading sales calls to actually enjoying them. My close rate increased from 15% to 60%.",
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    {
      name: 'Emmanuel Nwachukwu',
      role: 'High Ticket Closer',
      quote: 'The ROI on this coaching is insane. I made back 10x my investment in the first month. Billeady knows what he\'s talking about because he\'s done it himself.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    },
  ]

  const curriculum = [
    {
      module: 'Module 1',
      title: 'The High-Ticket Mindset',
      topics: ['Psychology of premium buyers', 'Positioning yourself as an expert', 'Building unshakeable confidence'],
    },
    {
      module: 'Module 2',
      title: 'The Discovery Framework',
      topics: ['Qualifying high-ticket prospects', 'Asking the right questions', 'Identifying pain points & desires'],
    },
    {
      module: 'Module 3',
      title: 'The Closing System',
      topics: ['The Billeady Closing Framework™', 'Price presentation strategies', 'Creating urgency ethically'],
    },
    {
      module: 'Module 4',
      title: 'Objection Mastery',
      topics: ['Common objection patterns', 'Reframing techniques', 'The "feel-felt-found" method'],
    },
    {
      module: 'Module 5',
      title: 'Follow-Up & Recovery',
      topics: ['Strategic follow-up sequences', 'Recovering lost deals', 'Building long-term relationships'],
    },
    {
      module: 'Module 6',
      title: 'Scale & Systems',
      topics: ['Building your closing business', 'Finding high-ticket opportunities', 'Creating consistent income'],
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
              'radial-gradient(ellipse 80% 50% at 30% 50%, rgba(114,47,55,0.15) 0%, transparent 70%), linear-gradient(135deg, #FEF6EE 0%, #FDEBD6 40%, #FDF3E8 100%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="text-[#722F37] text-sm">✦</span>
                <span className="text-xs text-gray-600 uppercase tracking-wider">High Ticket Closing Coaching</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-6">
                Learn to Close
                <br />
                <span className="text-[#722F37]">Like a Pro.</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Master the art and science of high-ticket closing. I'll teach you the exact frameworks, scripts, and mindset shifts that have helped me close millions in deals, and helped hundreds of students do the same.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/programs"
                  className="inline-flex items-center justify-center gap-2 bg-[#722F37] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#5C242B] transition-colors"
                >
                  View Coaching Programs
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-[#722F37] px-8 py-4 rounded-full text-sm font-medium border border-[#722F37] hover:bg-[#722F37] hover:text-white transition-colors"
                >
                  Book Free Strategy Call
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-sm shadow-xl">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-[#722F37] mb-2">500+</div>
                  <div className="text-gray-600">Students Trained</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-[#FAF9F7] p-4 rounded-sm">
                    <div className="text-2xl font-semibold text-gray-900">₦2B+</div>
                    <div className="text-xs text-gray-500">Closed by Students</div>
                  </div>
                  <div className="bg-[#FAF9F7] p-4 rounded-sm">
                    <div className="text-2xl font-semibold text-gray-900">73%</div>
                    <div className="text-xs text-gray-500">Avg. Close Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn From Me */}
      <section className="w-full py-20 md:py-28 bg-[#722F37]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                Why Learn From Billeady?
              </h2>
              <p className="text-white/80 mb-6">
                I don't just teach theory, I teach what works in the real world. After losing over ₦60 Million in 2022 and rebuilding from scratch, I've battle-tested every strategy I teach.
              </p>
              <p className="text-white/80 mb-8">
                My coaching isn't about motivational fluff. It's about practical, actionable frameworks that you can implement immediately to start closing more deals.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-white">
                  <div className="font-semibold">Proven Track Record</div>
                  <div className="text-white/60 text-sm">Real results, not theory</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🎯', label: 'Battle-Tested Methods' },
                { icon: '📈', label: 'Real-World Results' },
                { icon: '🤝', label: '1-on-1 Support' },
                { icon: '💡', label: 'Practical Frameworks' },
              ].map((item, index) => (
                <div key={index} className="bg-white/10 p-6 rounded-sm text-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="text-white text-sm font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="w-full py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              What You'll Learn
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive curriculum designed to transform you into a confident, high-performing closer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-[#FAF9F7] p-6 rounded-sm border border-black/5">
                <div className="w-10 h-10 bg-[#722F37] rounded-full flex items-center justify-center text-white mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="w-full py-20 md:py-28 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              The Curriculum
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A structured, step-by-step program to take you from beginner to expert closer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculum.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-sm border border-black/5">
                <div className="text-xs text-[#722F37] font-medium mb-2">{item.module}</div>
                <h3 className="font-semibold text-gray-900 mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.topics.map((topic, tIndex) => (
                    <li key={tIndex} className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 bg-[#722F37] rounded-full"></span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real results from real students who've transformed their closing abilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#FAF9F7] p-6 rounded-sm border border-black/5">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic">"{testimonial.quote}"</p>
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
            Ready to Become a High-Ticket Closer?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of students who have transformed their sales careers with my coaching. Your journey to closing mastery starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programs"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#722F37] px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Explore Programs
              <span className="w-6 h-6 bg-[#722F37] rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 rounded-full text-sm font-medium border border-white hover:bg-white hover:text-[#722F37] transition-colors"
            >
              Book Free Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Coaching
