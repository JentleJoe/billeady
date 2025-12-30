import { useRef } from 'react'

const TestimonialCard = ({ testimonial }) => {
  if (testimonial.layout === 'image-top') {
    return (
      <div className="bg-white rounded-xl p-5 shadow-sm min-w-65 max-w-65 flex flex-col">
        {/* Image and Name at Top */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
            <p className="text-gray-500 text-xs">{testimonial.role}</p>
          </div>
        </div>
        {/* Quote */}
        <p className="text-gray-700 text-sm leading-relaxed">{testimonial.quote}</p>
      </div>
    )
  }

  // quote-top layout
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm min-w-65 max-w-65 flex flex-col">
      {/* Name at Top */}
      <div className="mb-3">
        <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
        <p className="text-gray-500 text-xs">{testimonial.role}</p>
      </div>
      {/* Image */}
      <div className="mb-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-14 rounded-sm object-cover"
        />
      </div>
      {/* Quote */}
      <p className="text-gray-700 text-sm leading-relaxed">{testimonial.quote}</p>
    </div>
  )
}

const Testimonials = () => {
  const scrollRef = useRef(null)

  const testimonials = [
    {
      id: 1,
      name: 'Rene Wells',
      role: 'Role/position',
      quote: '"lorem ipsum dolor sit amet enim, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna."',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      layout: 'image-top',
    },
    {
      id: 2,
      name: 'Rene Wells',
      role: 'Role/position',
      quote: '"lorem ipsum dolor sit amet enim, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna."',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      layout: 'quote-top',
    },
    {
      id: 3,
      name: 'Rene Wells',
      role: 'Role/position',
      quote: '"lorem ipsum dolor sit amet enim, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna."',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      layout: 'image-top',
    },
    {
      id: 4,
      name: 'Rene Wells',
      role: 'Role/position',
      quote: '"lorem ipsum dolor sit amet enim, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna."',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      layout: 'quote-top',
    },
    {
      id: 5,
      name: 'Rene Wells',
      role: 'Role/position',
      quote: '"lorem ipsum dolor sit amet enim, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna."',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      layout: 'image-top',
    },
    {
      id: 6,
      name: 'Rene Wells',
      role: 'Role/position',
      quote: '"lorem ipsum dolor sit amet enim, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna."',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
      layout: 'quote-top',
    },
  ]

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="w-full py-16 md:py-20 bg-[#FDF8F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-2">
              Student Success Stories
            </h2>
            <p className="text-gray-500 text-sm">
              Real results from students who've transformed their sales game
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#722F37] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#5C242B] transition-colors mt-4 md:mt-0 w-fit"
          >
            View All Results
            <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <svg
                className="w-3 h-3 text-[#722F37]"
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
        </div>

        {/* Testimonials Grid - Horizontal Scroll */}
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg hidden md:flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg hidden md:flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Masonry-like staggered layout using flex columns */}
            <div className="flex gap-4">
              {/* Column 1 */}
              <div className="flex flex-col gap-4">
                <TestimonialCard testimonial={testimonials[0]} />
                <TestimonialCard testimonial={testimonials[1]} />
              </div>
              {/* Column 2 */}
              <div className="flex flex-col gap-4 mt-8">
                <TestimonialCard testimonial={testimonials[2]} />
                <TestimonialCard testimonial={testimonials[3]} />
              </div>
              {/* Column 3 */}
              <div className="flex flex-col gap-4">
                <TestimonialCard testimonial={testimonials[4]} />
                <TestimonialCard testimonial={testimonials[5]} />
              </div>
              {/* Column 4 - Repeat for continuous scroll */}
              <div className="flex flex-col gap-4 mt-8">
                <TestimonialCard testimonial={testimonials[0]} />
                <TestimonialCard testimonial={testimonials[1]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials