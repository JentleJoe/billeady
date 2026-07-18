const groupTrainingLink = 'https://wa.me/2347069487679?text=Hi%20Billeddy,%20I%27m%20interested%20in%20the%20Group%20Training%20for%20%24100.'
const oneOnOneLink = 'https://wa.me/2347069487679?text=Hi%20Billeddy,%20I%27m%20interested%20in%20the%20One-on-One%20Training%20for%20%242800.'

const learnings = [
  'How to set appointments that actually show up qualified',
  'How to control a sales conversation without sounding scripted or pushy',
  'How to handle objections at high price points not $50 objections, $2,000+ objections',
  'How to close without discounting, chasing, or begging',
  'How to read buyer psychology in real time and adjust on the fly',
]

const paths = [
  {
    name: 'Group Training',
    price: '$100',
    description:
      'Full curriculum. Same material, same frameworks, same real world tactics and learn alongside others building the same skill.',
    bestFor:
      'Anyone starting out who wants the complete system at the most accessible entry point.',
    cta: groupTrainingLink,
    ctaLabel: 'Join Group Training',
    highlight: false,
  },
  {
    name: 'One-on-One Training',
    price: '$2,800',
    description:
      'Everything in Group Training, plus direct, personal coaching from me. I review your calls, break down what is costing you the close, and build your delivery until it is second nature.',
    bestFor:
      'Anyone who wants speed, direct feedback, no guessing, faster path to your first paid close.',
    cta: oneOnOneLink,
    ctaLabel: 'Apply for One-on-One',
    highlight: true,
  },
]

const fitItems = [
  'You want to build a dollar denominated income you can run from anywhere',
  'You are willing to be coached, corrected, and pushed',
  'You are ready to work. This is not a program you finish by watching videos passively',
]

const notFitItems = [
  'You want a get rich quick shortcut with no skill building',
  'You are not willing to practice, get feedback, and get on real calls',
  'You are looking for theory, not a system you can use this week',
]

const heroStats = [
  { value: '5 Years', label: 'in high ticket sales' },
  { value: '$2.1M+', label: 'in client profits' },
  { value: 'US | UK | Canada', label: 'remote-first closing markets' },
]

const Coaching = () => {
  return (
    <main className="w-full bg-page-tint text-black">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-light-left" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28 lg:px-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-center">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-brand-primary text-sm">✦</span>
                <span className="text-xs uppercase tracking-[0.2em] text-gray-300">
                  High Ticket Sales Closing &amp; Appointment Setting
                </span>
              </div>

              <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
                You Do Not Need Another
                <br />
                Sales Course.
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-gray-300 max-w-2xl">
                Most sales training teaches theory. Scripts you will never say the way they are written.
                Frameworks that fall apart the second a prospect pushes back.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-300 max-w-2xl">
                This is not that. This is the exact system I use to close high ticket deals on commission.
                No base pay, no safety net, no room for almost. If it does not work in a real conversation
                with real money on the line, it does not make it into this program.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#paths"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-brand-accent"
                >
                  Choose Your Path
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href={oneOnOneLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-primary px-8 py-4 text-sm font-medium text-brand-primary transition-colors hover:bg-brand-primary hover:text-white"
                >
                  Apply for One-on-One
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-sm border border-white/10 bg-brand-muted/80 p-5 shadow-sm backdrop-blur-sm">
                  <div className="text-2xl font-semibold text-white">{stat.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-brand-black py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              What You Will Learn
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {learnings.map((item) => (
              <div key={item} className="rounded-sm border border-white/10 bg-brand-muted p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-white">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm leading-relaxed text-gray-300">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-sm border border-white/10 bg-brand-muted p-8 shadow-sm md:p-10">
            <p className="text-lg leading-relaxed text-gray-200">
              By the end, you are not someone who took a course. You are someone who can get on a call
              with a stranger and walk away with a signed client.
            </p>
          </div>
        </div>
      </section>

      <section id="paths" className="w-full bg-brand-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Choose Your Path</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-300">
              Pick the training path that fits your current stage and how directly you want me involved.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {paths.map((path) => (
              <div
                key={path.name}
                className={`rounded-sm border bg-brand-muted p-8 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-xl ${
                  path.highlight ? 'border-brand-primary' : 'border-white/10'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-primary">{path.name}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{path.price}</h3>
                  </div>
                  {path.highlight && (
                    <span className="rounded-full bg-brand-primary px-3 py-1 text-xs font-medium text-white">
                      Direct Coaching
                    </span>
                  )}
                </div>

                <p className="mt-5 text-sm leading-relaxed text-gray-300">{path.description}</p>

                <div className="mt-6 rounded-sm bg-brand-black p-4">
                  <p className="text-sm font-semibold text-white">Best for:</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-300">{path.bestFor}</p>
                </div>

                <a
                  href={path.cta}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors ${
                    path.highlight
                      ? 'bg-brand-primary text-white hover:bg-brand-accent'
                      : 'border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white'
                  }`}
                >
                  {path.ctaLabel}
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-brand-black py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">Who This Is For</h2>
              <ul className="mt-6 space-y-4">
                {fitItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white">
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">Who This Is Not For</h2>
              <ul className="mt-6 space-y-4">
                {notFitItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-700">
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-brand-primary py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-12 lg:px-20">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Ready to Build the Skill That Pays You Anywhere?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/75">
            Whether you want the accessible group route or the faster one-on-one path, the next step is
            to apply.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href={groupTrainingLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand-primary transition-colors hover:bg-gray-100"
            >
              Join Group Training — $100
            </a>
            <a
              href={oneOnOneLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Apply for One-on-One — $2,800
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Coaching
