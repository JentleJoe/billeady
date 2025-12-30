import { useScrollAnimation } from '../hooks/useScrollAnimation'

const PodcastForm = () => {
  const [sectionRef, isVisible] = useScrollAnimation()
  
  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24 bg-[#FDF8F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
            Free High Ticket Closing Training
          </h2>
          <p className={`text-gray-500 text-sm max-w-2xl mx-auto transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Get instant access to my free training on how to close high ticket clients — the exact framework I use to close premium deals.
          </p>
        </div>

        {/* Content Card */}
        <div className={`bg-white shadow-sm border border-black/5 overflow-hidden max-w-5xl mx-auto transition-all duration-700 delay-300 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="grid md:grid-cols-2">
            {/* Left - Form */}
            <div className="p-8 md:p-10">
              <h3 className="text-base font-semibold text-gray-900 mb-6">
                Get Instant Access Now
              </h3>

              <form className="space-y-4">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-[11px] text-gray-700 mb-2 group-focus-within:text-[#722F37] transition-colors duration-300">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your First Name"
                      className="w-full px-4 py-3 bg-gray-50 border border-transparent text-xs placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#722F37]/20 focus:border-[#722F37]/30 focus:bg-white transition-all duration-300"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-[11px] text-gray-700 mb-2 group-focus-within:text-[#722F37] transition-colors duration-300">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Last Name"
                      className="w-full px-4 py-3 bg-gray-50 border border-transparent text-xs placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#722F37]/20 focus:border-[#722F37]/30 focus:bg-white transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="group">
                  <label className="block text-[11px] text-gray-700 mb-2 group-focus-within:text-[#722F37] transition-colors duration-300">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="w-full px-4 py-3 bg-gray-50 border border-transparent text-xs placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#722F37]/20 focus:border-[#722F37]/30 focus:bg-white transition-all duration-300"
                  />
                </div>

                {/* Social Media */}
                <div className="group">
                  <label className="block text-[11px] text-gray-700 mb-2 group-focus-within:text-[#722F37] transition-colors duration-300">
                    Social Media
                  </label>
                  <input
                    type="text"
                    placeholder="Instagram (Optional)"
                    className="w-full px-4 py-3 bg-gray-50 border border-transparent text-xs placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#722F37]/20 focus:border-[#722F37]/30 focus:bg-white transition-all duration-300"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-[#722F37] text-white pl-6 pr-3 py-3 rounded-full text-sm font-medium hover:bg-[#5C242B] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 mt-3 group"
                >
                  Get Free Access
                  <span className="w-7 h-7 bg-white rounded-full flex items-center justify-center group-hover:bg-white/90 transition-colors duration-300">
                    <svg
                      className="w-4 h-4 text-[#722F37] group-hover:translate-x-0.5 transition-transform duration-300"
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
                </button>
              </form>
            </div>

            {/* Right - Image */}
            <div className="relative h-72 md:h-auto overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=600&h=500&fit=crop"
                alt="High ticket closing training"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-500">
                <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-[#722F37] active:scale-95 transition-all duration-300 group/btn">
                  <svg
                    className="w-6 h-6 text-[#722F37] group-hover/btn:text-white ml-0.5 transition-colors duration-300"
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

export default PodcastForm
