const About = () => {
  const highlights = [
    'Closed Millions in High Ticket Sales',
    '500+ Students Trained Globally',
    'From Zero to Success — Twice',
  ]

  return (
    <section id="about" className="w-full">
      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Image */}
        <div className="relative h-100 lg:h-auto bg-gray-100 lg:basis-[45%] lg:flex-none">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=900&fit=crop"
            alt="Billeady coaching session"
            className="w-full h-full object-cover"
          />
          {/* Overlay elements to simulate whiteboard/planning aesthetic */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent to-white/10" />
        </div>

        {/* Right Side - Content */}
        <div className="bg-[#3D1D4E] px-8 md:px-12 lg:px-16 py-16 lg:py-24 flex flex-col justify-center lg:basis-[55%]">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white leading-tight mb-6">
            Hey, I'm Billeady Saliu — High Ticket Closer, Coach & Business Consultant.
          </h2>

          <p className="text-gray-300 text-base mb-8">
            In 2022, I lost over ₦60 Million and hit rock bottom. But I didn't stay there. I rebuilt from scratch, mastered the art of closing high ticket clients, and now I teach others to do the same.
          </p>

          {/* CTA Button */}
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-transparent text-white px-6 py-3 rounded-full text-sm font-medium border border-white hover:bg-white hover:text-[#3D1D4E] transition-colors w-fit mb-10"
          >
            Learn My Story
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
              Why Learn From Billeady?:
            </h3>
            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-white/80 text-sm">
                  <span className="mt-1 shrink-0 text-white">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 3l1.6 6.2L20 12l-6.4 2.8L12 21l-1.6-6.2L4 12l6.4-2.8L12 3z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="leading-relaxed">{item}</span>
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
