import { Link } from 'react-router-dom'

const engagements = [
  {
    title: 'Strategy Session',
    price: '$1,800',
    description:
      'A focused 2–3 hour session where we go deep on your current sales process, your script, your objection handling, your funnel from lead to close. You walk away with a clear breakdown of what is costing you deals and exactly what to fix first.',
    bestFor:
      'Businesses that need clarity fast, a second set of eyes on a process that is not converting the way it should.',
    featured: false,
  },
  {
    title: 'Full Revenue Consulting',
    price: '$4,500',
    description:
      '30–90 days working directly with you to rebuild your sales process end to end, scripts, objection frameworks, close structure, and hands on adjustments as real calls happen. This is sustained, in the trenches optimization, not a one time audit.',
    bestFor:
      'Businesses ready to commit to a real overhaul and see it through to results.',
    featured: true,
  },
]

const workWithItems = [
  'Coaches, consultants, agency owners, real estate developers, financial and insurance firms',
  'A validated offer at $2,000+',
  'Consistent lead flow already in place',
  'Real intent to fix the close, not just talk about it',
]

const Consulting = () => {
  return (
    <main className="w-full bg-[linear-gradient(180deg,rgba(181,36,26,0.08),rgba(255,255,255,0))] text-black">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(109,30,23,0.12) 0%, transparent 70%), linear-gradient(135deg, var(--color-brand-cream) 0%, #FDEBD6 40%, #FDF3E8 100%)',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28 lg:px-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-2">
              <span className="text-brand-primary text-sm">✦</span>
              <span className="text-xs uppercase tracking-[0.2em] text-gray-600">
                Revenue Consulting for Businesses Ready to Scale
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-semibold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Your Offer Isn't the Problem.
              <br />
              <span className="text-brand-primary">Your Sales Process Might Be.</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-600">
              I sit inside your sales process, find exactly where deals are slipping through, and hand
              you a clear plan to fix it, built from five years of closing high ticket deals for real
              businesses, not theory from a business book.
            </p>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-600">
              This is not generic advice. It is a diagnosis and a plan, specific to your offer, your
              leads, and your close.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-semibold text-gray-900 md:text-4xl">Choose Your Engagement</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Pick the level of support that matches the size of the problem you want solved.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {engagements.map((item) => (
              <div
                key={item.title}
                className={`rounded-sm border p-8 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-xl ${
                  item.featured ? 'border-brand-primary bg-brand-primary text-white' : 'border-black/10 bg-brand-cream'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className={`text-xs uppercase tracking-[0.2em] ${item.featured ? 'text-white/70' : 'text-brand-primary'}`}>
                      {item.title}
                    </p>
                    <h3 className={`mt-2 text-2xl font-semibold ${item.featured ? 'text-white' : 'text-gray-900'}`}>
                      {item.price}
                    </h3>
                  </div>
                  {item.featured && (
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-brand-primary">
                      Best Value
                    </span>
                  )}
                </div>

                <p className={`mt-5 text-sm leading-relaxed ${item.featured ? 'text-white/80' : 'text-gray-600'}`}>
                  {item.description}
                </p>

                <div className={`mt-6 rounded-sm p-4 ${item.featured ? 'bg-white/10' : 'bg-white'}`}>
                  <p className={`text-sm font-semibold ${item.featured ? 'text-white' : 'text-gray-900'}`}>
                    Best for:
                  </p>
                  <p className={`mt-2 text-sm leading-relaxed ${item.featured ? 'text-white/75' : 'text-gray-600'}`}>
                    {item.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-brand-primary py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="mb-6 text-3xl font-semibold text-white md:text-4xl">Who I Work With</h2>
              <ul className="space-y-4">
                {workWithItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/85">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-brand-primary">
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-sm bg-white p-8 shadow-2xl">
              <h3 className="mb-4 text-2xl font-semibold text-gray-900">What You Get</h3>
              <p className="mb-6 text-sm leading-relaxed text-gray-600">
                A clear diagnosis of where revenue is slipping, what to fix first, and how to tighten
                the close.
              </p>
              <ul className="space-y-3">
                {[
                  'A diagnostic look at your sales process',
                  'Clear next steps for your offer, leads, and close',
                  'Direct recommendations you can implement immediately',
                  'A strategy built around your actual business, not generic theory',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white">
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
            Let's Find Where You're Losing Revenue
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            If your sales process needs clarity fast, start with the strategy session. If you want a
            deeper rebuild, apply for full consulting.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/calls-to-revenue"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-brand-accent"
            >
              Book a Strategy Session — $1,800
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/calls-to-revenue"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-primary px-8 py-4 text-sm font-medium text-brand-primary transition-colors hover:bg-brand-primary hover:text-white"
            >
              Apply for Full Consulting — $4,500
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Consulting
