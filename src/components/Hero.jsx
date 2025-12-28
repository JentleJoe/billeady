import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 70% 50%, rgba(253,210,180,0.5) 0%, transparent 70%), linear-gradient(135deg, #FEF6EE 0%, #FDEBD6 40%, #FDF3E8 100%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-full">
        <div className="flex flex-col lg:flex-row lg:items-center h-full pt-16">
          {/* Left Content */}
          <div className="z-10 pt-12 lg:pt-0 lg:basis-1/2 lg:pr-8">
            {/* Tag */}
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[#3D1D4E] text-sm">✦</span>
              <span className="text-xs text-gray-600">High Ticket Closer & Business Consultant</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-gray-900 leading-[1.15] mb-5">
              Master the Art of
              <br />
              Closing High Ticket
              <br />
              Clients with Confidence.
            </h1>

            {/* Subtext */}
            <p className="text-gray-500 text-sm mb-7 max-w-md">
              Learn proven strategies to close premium clients, run effective cold DMs, and build a thriving business.
            </p>

            {/* CTA Button */}
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 bg-[#3D1D4E] text-white pl-5 pr-1.5 py-1.5 rounded-full text-sm font-medium hover:bg-[#2D1538] transition-colors mb-16 lg:mb-24"
            >
              Start Learning Now
              <span className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 text-[#3D1D4E]"
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
            </Link>

            {/* Trust Badge */}
            <div className="flex items-center gap-4 pb-12 lg:pb-16">
              {/* Avatar Stack */}
              <div className="flex -space-x-2">
                <div className="w-9 h-9 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-9 h-9 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-9 h-9 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Reviews */}
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3.5 h-3.5 text-gray-900 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  <svg
                    className="w-3.5 h-3.5 text-gray-900 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <span className="text-sm text-gray-800 ml-1.5 font-medium">(500+ Students)</span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">
                  Trusted by closers & entrepreneurs worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative lg:basis-1/2 lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-1/2 flex items-end justify-center lg:justify-end">
            {/* Main Image - Woman */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop"
                alt="Billeady Saliu"
                className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover object-top"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                }}
              />

              {/* Floating Phone Mockup */}
              <div className="absolute bottom-24 left-4 md:bottom-32 md:left-8 bg-white p-1.5 rounded-xl shadow-xl">
                <div className="relative w-24 md:w-28 h-32 md:h-36 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=300&fit=crop"
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/95 rounded-full flex items-center justify-center shadow-md">
                      <svg
                        className="w-3 h-3 text-[#3D1D4E] ml-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
