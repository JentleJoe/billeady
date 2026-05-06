import { useScrollAnimation } from '../hooks/useScrollAnimation'
import aboutImg from '../assets/aboutImg.png'

const About = () => {
  const [sectionRef, isVisible] = useScrollAnimation()
  
  const highlights = [
    'Results-driven sales and marketing strategy',
    'High-ticket closing and business consulting',
    'Real-world systems rooted in trust',
    'Clarity, structure, and measurable growth',
  ]

  const aboutCopy = [
    'Billeady Saliu is a results-driven sales and marketing strategist specializing in high-ticket closing and business consulting. Built on a deep passion for sales and a proven track record of transforming businesses, the brand helps entrepreneurs and digital marketers turn attention into revenue.',
    'With years of hands-on experience, Billeady has helped clients and students overcome one of the biggest challenges in business: converting leads into consistent, high-value sales. From fixing weak sales processes to refining brand positioning and marketing strategy, every solution is designed for measurable growth.',
    'At its core, the brand stands for trust, integrity, and competence. Every strategy, system, and insight is rooted in real-world results, not theory. Businesses that work with Billeady gain the clarity, structure, and confidence needed to dominate their market.',
    'The mission is simple: become the go-to authority for sales, marketing, and high-ticket closing, helping businesses stand out, connect deeply with their audience, and increase revenue consistently.',
  ]

  return (
    <section id="about" className="w-full" ref={sectionRef}>
      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Image */}
        <div className={`relative h-100 lg:h-auto bg-gray-100 lg:basis-[45%] lg:flex-none overflow-hidden transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
        }`}>
          <img
            src={aboutImg}
            alt="Billeady coaching session"
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
          />
          {/* Overlay elements to simulate whiteboard/planning aesthetic */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent to-white/10" />
        </div>

        {/* Right Side - Content */}
        <div className="bg-brand-primary px-8 md:px-12 lg:px-16 py-16 lg:py-24 flex flex-col justify-center lg:basis-[55%]">
          <h2 
            className={`text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white leading-tight mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            About Billeady Saliu
            <span className="block text-white/80 text-base md:text-lg font-normal mt-3">
              Results-driven sales and marketing strategist.
            </span>
          </h2>

          <div className="space-y-5 mb-8">
            {aboutCopy.map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 24)}
                className={`text-gray-300 text-sm md:text-base leading-relaxed transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Why Learn Section */}
          <div className={`transition-all duration-700 delay-[400ms] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-white text-sm font-medium mb-4">
              What I Stand For
            </h3>
            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 text-white/80 text-sm hover:text-white transition-colors cursor-default group"
                  style={{ 
                    transitionDelay: `${500 + index * 100}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                    transition: 'all 0.5s ease-out'
                  }}
                >
                  <span className="mt-1 shrink-0 text-white group-hover:scale-125 transition-transform">
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
