const Hero = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#FDEBD6] via-[#FEF3E7] to-[#FDF8F3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="z-10">
            {/* Tag */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#3D1D4E]">✦</span>
              <span className="text-sm text-gray-700">For Coaches & Creatives</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif font-medium text-gray-900 leading-tight mb-6">
              It's Your Time to Build an Intentional & Abundant Online Business.
            </h1>

            {/* Subtext */}
            <p className="text-gray-600 text-base mb-8 max-w-lg">
              A proven business model to scale your coaching or creative business without burnout.
            </p>

            {/* CTA Button */}
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#3D1D4E] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#2D1538] transition-colors mb-10"
            >
              Get Access Now
              <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-[#3D1D4E]"
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

            {/* Trust Badge */}
            <div className="flex items-center gap-4">
              {/* Avatar Stack */}
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Reviews */}
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  <span className="text-sm text-gray-700 ml-1">(2.3K Reviews)</span>
                </div>
                <p className="text-xs text-gray-500">
                  Trusted by 200+ coaches & creatives worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop"
                alt="Ellie Swift"
                className="w-full max-w-md lg:max-w-lg h-auto object-cover rounded-bl-[100px]"
              />
              
              {/* Floating Phone Mockup */}
              <div className="absolute bottom-20 -left-8 md:bottom-24 md:-left-12 bg-white p-2 rounded-2xl shadow-xl">
                <div className="w-28 md:w-32 h-40 md:h-48 bg-gray-100 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=300&fit=crop"
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <svg
                        className="w-4 h-4 text-[#3D1D4E] ml-0.5"
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
