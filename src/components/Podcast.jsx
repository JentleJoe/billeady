import { Link } from 'react-router-dom'

const Podcast = () => {
  const applyLink = 'https://forms.gle/ng5e5cxNtua6dhDi6'

  return (
    <section className="w-full py-20 md:py-28" style={{ background: 'linear-gradient(135deg, var(--color-brand-primary) 0%, #4A1E23 100%)' }}>
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <div className="flex items-center justify-center gap-2 mb-5 text-white/80">
          <span className="text-sm">✦</span>
          <span className="text-xs uppercase tracking-[0.2em]">Apply to Work With Me</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-4">
          If you have a validated offer, real lead flow, and you are ready to hand your sales conversations to someone who closes for a living, apply below.
        </h2>
        <p className="text-white/75 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          I review every application personally. If it is a fit, we talk.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-brand-primary px-8 py-4 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
          >
            Apply Now
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-transparent border border-white text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            Ask a Question
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Podcast