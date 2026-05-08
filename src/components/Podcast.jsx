import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import logoAnimation from '../assets/logoAnimation.mp4'

const Podcast = () => {
  const [sectionRef, isVisible] = useScrollAnimation()
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [pendingPlay, setPendingPlay] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setShouldLoad(true)
    }
  }, [isVisible])

  useEffect(() => {
    if (shouldLoad && pendingPlay && videoRef.current) {
      videoRef.current.play()
      setPendingPlay(false)
    }
  }, [pendingPlay, shouldLoad])

  const handlePlayClick = () => {
    if (!shouldLoad) {
      setShouldLoad(true)
      setPendingPlay(true)
      return
    }

    videoRef.current?.play()
  }

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
              className={`relative rounded-2xl overflow-hidden shadow-2xl bg-black hover:shadow-3xl transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <video
                ref={videoRef}
                src={shouldLoad ? logoAnimation : undefined}
                controls
                preload="none"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                className="w-full aspect-video object-cover"
              >
                Your browser does not support the video tag.
              </video>
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <button
                    type="button"
                    aria-label="Play video"
                    onClick={handlePlayClick}
                    className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-brand-primary active:scale-95 transition-all duration-300"
                  >
                    <svg
                      className="w-6 h-6 md:w-6 md:h-6 text-brand-primary ml-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Podcast