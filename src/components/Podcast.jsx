import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Podcast = () => {
  const [sectionRef, isVisible] = useScrollAnimation()
  
  return (
    <section ref={sectionRef} className="w-full">
      <div className="relative">
        {/*
          We intentionally lock the header height so we can place the media card
          exactly at the boundary (middle of the two colors), like the reference.
        */}
        <div
          className="text-center"
          style={{
            height: 'clamp(380px, 42vw, 440px)',
            background:
              'radial-gradient(900px circle at 50% 10%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 55%), linear-gradient(180deg, #722F37 0%, #4A1E23 100%)',
          }}
        >
          <div className="max-w-4xl mx-auto px-6 md:px-12 pt-14 md:pt-16">
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              Building from Dust Again
              <br />
              — The Book
            </h2>
            <p className={`text-white/70 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Coming 2026 — My story of losing ₦60M+, hitting rock bottom, and rebuilding from scratch. A raw, honest guide for anyone who's ever had to start over.
            </p>
          </div>
        </div>

        {/* Cream base */}
        <div
          className="w-full"
          style={{
            height: 'clamp(260px, 32vw, 320px)',
            background:
              'radial-gradient(900px circle at 50% 0%, rgba(114,47,55,0.08) 0%, rgba(114,47,55,0) 52%), linear-gradient(180deg, #FAF9F7 0%, #F3EAE2 100%)',
          }}
        />

        {/* Media card centered between the two colors */}
        <div
          className={`absolute inset-x-0 -translate-y-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          style={{ top: 'clamp(380px, 42vw, 440px)' }}
        >
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black group hover:shadow-3xl transition-shadow duration-500">
              <img
                src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1400&h=800&fit=crop"
                alt="Podcast recording session"
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-500">
                <button
                  type="button"
                  aria-label="Play podcast"
                  className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-[#722F37] active:scale-95 transition-all duration-300 group/btn"
                >
                  <svg className="w-5 h-5 md:w-5 md:h-5 text-[#722F37] group-hover/btn:text-white ml-0.5 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
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