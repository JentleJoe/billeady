import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import heroImg from '../assets/heroImg.jpg'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative w-full min-h-screen lg:h-[calc(100vh-80px)] lg:min-h-[calc(100vh-80px)] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-light-center" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-full">
        <div className="flex flex-col lg:flex-row lg:items-center min-h-screen lg:h-full pt-20 lg:pt-8 pb-8 lg:pb-0">
          {/* Left Content */}
          <div className="z-10 lg:pt-0 lg:basis-1/2 lg:pr-8">
            {/* Tag */}
            <div
              className={`flex items-center gap-2 mb-5 transition-all duration-700 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="text-brand-primary-light text-sm animate-pulse">✦</span>
              <span className="text-xs tracking-wide text-gray-300">High Ticket Closer &nbsp;|&nbsp; Revenue Partner for Elite Businesses</span>
            </div>

            {/* Main Headline */}
            <h1
              className={`text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-white leading-[1.12] mb-5 transition-all duration-700 delay-100 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              I Don't Work For You.
              <br />
              I{' '}
              <span className="relative inline-block">
                Close
                <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-brand-primary-light rounded-full" />
              </span>{' '}
              For You.
            </h1>

            {/* Subtext */}
            <p
              className={`text-gray-300 text-sm md:text-base mb-8 max-w-md leading-relaxed transition-all duration-700 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              You do not have a leads problem. You have a conversion problem. If qualified leads are already hitting your calendar and walking away without paying, the leak is in the close.
            </p>

            {/* CTA Button */}
            <a
              href="https://wa.me/2347069487679?text=Hi%20Billeddy,%20I'm%20interested%20in%20your%20high%20ticket%20closing%20services.%20I%20have%20a%20validated%20offer%20and%20consistent%20lead%20flow."
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 bg-brand-primary text-white pl-5 pr-1.5 py-1.5 rounded-full text-sm font-medium hover:bg-brand-accent hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 mb-10 lg:mb-16 group delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Apply Now
              <span className="w-7 h-7 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  className="w-3.5 h-3.5 text-brand-primary group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </a>

            {/* Credibility Strip */}
            <div
              className={`flex items-center gap-6 md:gap-10 pb-8 lg:pb-16 border-t border-white/10 pt-6 max-w-md transition-all duration-700 delay-[400ms] ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div>
                <p className="text-white text-lg md:text-xl font-semibold">$2.1M+</p>
                <p className="text-xs text-gray-400 mt-0.5">In clients' profits</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <p className="text-white text-lg md:text-xl font-semibold">100%</p>
                <p className="text-xs text-gray-400 mt-0.5">Commission based</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <p className="text-white text-lg md:text-xl font-semibold">US / UK / CA</p>
                <p className="text-xs text-gray-400 mt-0.5">Remote, timezone aware</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          {/* Mobile Image - Shows in content flow */}
          <div
            className={`relative lg:hidden mt-8 flex justify-center transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative w-64 sm:w-72">
              <img
                src={heroImg}
                alt="Billeddy Saliu"
                className="w-full h-auto object-cover object-top rounded-lg hover:scale-[1.02] transition-transform duration-500"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                }}
              />
            </div>
          </div>

          {/* Desktop Image - Absolute positioned */}
          <div
            className={`hidden lg:flex relative lg:basis-1/2 lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-1/2 items-end justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Ambient glow behind portrait */}
            <div className="absolute right-10 bottom-0 w-72 h-72 rounded-full bg-brand-primary-light/20 blur-3xl" />

            {/* Main Image - Woman */}
            <div className="relative">
              <img
                src={heroImg}
                alt="Billeddy Saliu"
                className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                }}
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
