import { useScrollAnimation } from '../hooks/useScrollAnimation'
import aboutImg from '../assets/aboutImg.jpg'

const About = () => {
  const [sectionRef, isVisible] = useScrollAnimation()
  
  const highlights = [
    'Five years in high ticket sales, client acquisition, and deal structuring',
    'More than $2.1 million in client profits',
    'Remote-first closing across the US, UK, and Canada',
    'Buyer psychology, objection reduction, and deal control',
  ]

  const aboutCopy = [
    'Billeddy Saliu has spent five years in high ticket sales, client acquisition, and deal structuring, helping elite businesses turn qualified conversations into cash. The work is focused on one thing: making sure strong offers do not die in the final stretch.',
    'He does not just "sell." He reads buyer psychology, positions offers so objections shrink before they are spoken, and closes across markets and cultures with the kind of calm, direct control that comes from real-world repetition.',
    'That edge matters because remote-first is not a workaround. It is the operating model. Billeddy closes clients across the US, UK, and Canada on their schedule, every day of the week.',
    'The result is a revenue partner who steps into the close, protects the deal, and helps serious businesses convert more of the opportunities they are already paying to create.',
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
            alt="Billeddy Saliu working"
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
            Who I Am
            <span className="block text-white/80 text-base md:text-lg font-normal mt-3">
              High ticket closer | Revenue partner for elite businesses.
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
          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-white text-sm font-medium mb-4">
              What You Get
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
