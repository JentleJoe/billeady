import { Link } from 'react-router-dom'
import salesFlierAvif from '../assets/salesFlier.avif'
import salesFlierWebp from '../assets/salesFlier.webp'
import salesFlierJpg from '../assets/salesFlier.jpg'

const HighTicketClosing = () => {
  const stats = [
    { value: 'Commission only', label: 'No retainers, salaries, or base pay' },
    { value: 'No black box', label: 'You get recordings, notes, and updates' },
    { value: 'US | UK | Canada', label: 'Remote-first closing across time zones' },
    { value: 'Discovery to payment', label: 'Booked calls handled end to end' },
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We talk about your offer, current close rate, average deal size, and where deals are currently falling apart.',
    },
    {
      step: '02',
      title: 'Lead Handoff',
      description: 'I get access to your calendar, CRM, and call recordings so I can learn your offer, pricing, objections, and ideal client.',
    },
    {
      step: '03',
      title: 'Closing',
      description: 'I run your sales calls, keep you updated, and close qualified leads without a black box process.',
    },
    {
      step: '04',
      title: 'Commission on Close',
      description: 'You pay only on results. Commission is agreed upfront, per deal closed.',
    },
  ]

  const requirements = [
    'A validated high ticket offer ($2,000+)',
    'Consistent lead flow — ads, organic, or outbound',
    'Booked calls or a pipeline I can step into',
    'A CRM or calendar system I can be added to',
  ]

  const industries = [
    'Coaching and consulting offers',
    'Marketing and creative agencies',
    'Real estate investment and development',
    'Insurance companies',
    'Health and fitness',
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-hero-light" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-10 pb-20 md:pt-16 md:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-brand-primary-light text-sm">✦</span>
                <span className="text-xs text-gray-300 uppercase tracking-wider">High Ticket Sales Closing — Done For You</span>
              </div>

              {/* Mobile Flyer - shown between tag and headline on mobile only */}
              <div className="relative flex justify-center lg:hidden mb-8">
                <div className="relative w-full max-w-sm">
                  {/* Decorative "tape" */}
                  <div className="absolute -top-3 left-10 w-24 h-8 bg-white/70 -rotate-12 rounded-sm shadow-sm ring-1 ring-black/5" />
                  <div className="absolute -top-2 right-8 w-20 h-7 bg-white/60 rotate-12 rounded-sm shadow-sm ring-1 ring-black/5" />

                  <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-2xl ring-1 ring-black/10 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                    <div className="overflow-hidden rounded-lg bg-white">
                      <picture>
                        <source srcSet={salesFlierAvif} type="image/avif" />
                        <source srcSet={salesFlierWebp} type="image/webp" />
                        <img
                          src={salesFlierJpg}
                          alt="Sales flyer for high ticket sales closing"
                          className="w-full h-auto block"
                          loading="eager"
                          decoding="async"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                I Step Into Your Sales
                <br />
                <span className="text-brand-accent">Process and Close.</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl">
                You have already read the philosophy on the homepage: no retainers, no salaries, commission only. This page is about how it actually works once you bring me in.
              </p>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl">
                I take your booked calls inbound or outbound and run them from discovery to payment. Your leads, your offer, your brand. My job is the conversation that turns a maybe into a signed client.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/2347069487679?text=Hi%20Billeddy,%20I'm%20interested%20in%20your%20high%20ticket%20closing%20services.%20I%20have%20a%20validated%20offer%20and%20consistent%20lead%20flow."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-brand-accent transition-colors"
                >
                  Apply for Closing Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <Link
                  to="/consulting"
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-brand-accent px-8 py-4 rounded-full text-sm font-medium border border-brand-primary hover:bg-brand-primary hover:text-white transition-colors"
                >
                  Fix the Process First
                </Link>
              </div>
            </div>

            {/* Flyer - desktop only, unchanged positioning/markup */}
            <div className="relative hidden lg:flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm md:max-w-md">
                {/* Decorative "tape" */}
                <div className="absolute -top-3 left-10 w-24 h-8 bg-white/70 -rotate-12 rounded-sm shadow-sm ring-1 ring-black/5" />
                <div className="absolute -top-2 right-8 w-20 h-7 bg-white/60 rotate-12 rounded-sm shadow-sm ring-1 ring-black/5" />

                <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-2xl ring-1 ring-black/10 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="overflow-hidden rounded-lg bg-white">
                    <picture>
                      <source srcSet={salesFlierAvif} type="image/avif" />
                      <source srcSet={salesFlierWebp} type="image/webp" />
                      <img
                        src={salesFlierJpg}
                        alt="Sales flyer for high ticket sales closing"
                        className="w-full h-auto block"
                        loading="eager"
                        decoding="async"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-brand-primary py-16">
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

      {/* Stats Section */}
      <section className="w-full py-20 md:py-28 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              How It Works
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Four moving parts. No ambiguity. No black box.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-semibold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm leading-relaxed">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-20 md:py-28 bg-brand-muted">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                What I Need From You
              </h2>
              <p className="text-gray-300 mb-8">
                If any of this is not in place yet, start with Consulting first and we will fix the process before we talk about closing.
              </p>
              <Link
                to="/consulting"
                className="inline-flex items-center gap-2 text-brand-primary-light font-medium hover:gap-3 transition-all"
              >
                Fix the process first
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="space-y-6">
              {process.map((item, index) => (
                <div key={index} className="flex gap-5">
                  <div className="shrink-0 w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-28 bg-hero-dark">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            This Only Works If We Are Both Serious
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            I do not take on every business that reaches out. I take on businesses I know I can close for, offers I believe in, leads that are actually qualified, and owners who are ready to hand over the conversation and let me work.
          </p>
          <a
            href="https://wa.me/2347069487679?text=Hi%20Billeddy,%20I'm%20interested%20in%20your%20high%20ticket%20closing%20services.%20I%20have%20a%20validated%20offer%20and%20consistent%20lead%20flow."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-brand-primary-light px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Apply for Closing Services
            <span className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>
      </section>

      {/* Industries Section */}
      <section className="w-full py-20 md:py-28 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                Industries I Have Closed For
              </h2>
              <ul className="space-y-4">
                {industries.map((industry) => (
                  <li key={industry} className="flex items-start gap-3 text-gray-300">
                    <span className="w-5 h-5 rounded-full bg-brand-primary flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{industry}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-muted p-8 rounded-sm border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">What I Need From You</h3>
              <ul className="space-y-4">
                {requirements.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="w-5 h-5 rounded-full bg-brand-primary flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-gray-400">
                If that is not in place yet, start with <Link to="/consulting" className="text-brand-primary-light font-medium hover:underline">Consulting</Link> and fix the process first.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HighTicketClosing