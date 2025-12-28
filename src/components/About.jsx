const About = () => {
  const highlights = [
    'Multi-Six Figure Business in < 2 Years',
    '200+ Clients Served Globally',
    'Featured International Speaker',
  ]

  return (
    <section id="about" className="w-full">
      <div className="grid lg:grid-cols-2">
        {/* Left Side - Image */}
        <div className="relative h-[400px] lg:h-auto bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=900&fit=crop"
            alt="Ellie planning"
            className="w-full h-full object-cover"
          />
          {/* Overlay elements to simulate whiteboard/planning aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
        </div>

        {/* Right Side - Content */}
        <div className="bg-[#3D1D4E] px-8 md:px-12 lg:px-16 py-16 lg:py-24 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif text-white leading-tight mb-6">
            Hey there, I'm Ellie — Marketing & Mindset Coach, International Speaker & Entrepreneur.
          </h2>

          <p className="text-gray-300 text-base mb-8">
            From corporate escapee to multi-six-figure business coach helping women scale with ease.
          </p>

          {/* CTA Button */}
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-transparent text-white px-6 py-3 rounded-full text-sm font-medium border border-white hover:bg-white hover:text-[#3D1D4E] transition-colors w-fit mb-10"
          >
            Learn About My Method
            <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center group-hover:bg-[#3D1D4E]">
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

          {/* Why Learn Section */}
          <div>
            <h3 className="text-white text-sm font-medium mb-4">
              Why Learn From Ellie?:
            </h3>
            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-300 text-sm">
                  <span className="text-white">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
