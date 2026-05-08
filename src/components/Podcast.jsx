import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Podcast = () => {
  const [sectionRef, isVisible] = useScrollAnimation()

  return (
    <section ref={sectionRef} className="w-full">
      <div>
        <div
          className="text-center"
          style={{
            background:
              'radial-gradient(900px circle at 50% 10%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 55%), linear-gradient(180deg, var(--color-brand-primary) 0%, #4A1E23 100%)',
          }}
        >
          <div className="max-w-4xl mx-auto px-6 md:px-12 py-14 md:py-16">
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-3 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
              }`}
            >
              Building from Dust Again
              <br />
              The Book
            </h2>
            <p
              className={`text-white/70 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-150 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Coming 2026, my story of hitting rock bottom and rebuilding from scratch. A raw, honest guide for anyone who's ever had to start over.
            </p>
            <Link
              to="/books"
              className={`inline-flex items-center gap-2 bg-white text-brand-primary px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 mt-6 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Join the Waitlist
              <span className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        <div
          className="w-full"
          style={{
            background:
              'radial-gradient(900px circle at 50% 0%, rgba(109,30,23,0.08) 0%, rgba(109,30,23,0) 52%), linear-gradient(180deg, var(--color-brand-cream) 0%, #F3EAE2 100%)',
          }}
        >
          <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-16">
            <div
              className={`relative rounded-2xl overflow-hidden shadow-2xl bg-black group hover:shadow-3xl transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1400&h=800&fit=crop"
                alt="Podcast recording session"
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-500">
                <button
                  type="button"
                  aria-label="Play podcast"
                  className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-brand-primary active:scale-95 transition-all duration-300 group/btn"
                >
                  <svg
                    className="w-5 h-5 md:w-5 md:h-5 text-brand-primary group-hover/btn:text-white ml-0.5 transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Podcast