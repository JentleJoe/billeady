import { useState } from 'react'
import { Link } from 'react-router-dom'

const Book = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    setSubmitted(true)
  }

  const chapters = [
    {
      number: '01',
      title: 'The Fall',
      description: 'How I lost ₦60+ Million and everything I thought I knew about success.',
    },
    {
      number: '02',
      title: 'Rock Bottom',
      description: 'The darkest days and the mindset shifts that kept me going.',
    },
    {
      number: '03',
      title: 'The Decision',
      description: 'Choosing to rebuild instead of giving up — and what that really means.',
    },
    {
      number: '04',
      title: 'Starting From Zero',
      description: 'Practical steps I took when I had nothing but determination.',
    },
    {
      number: '05',
      title: 'Building the Foundation',
      description: 'Creating systems and strategies that would last this time.',
    },
    {
      number: '06',
      title: 'The Comeback',
      description: 'How I rebuilt stronger than before and what I learned along the way.',
    },
    {
      number: '07',
      title: 'Lessons from the Dust',
      description: 'The principles that guide me now and can guide you too.',
    },
    {
      number: '08',
      title: 'Your Turn',
      description: 'A framework for building (or rebuilding) your own success story.',
    },
  ]

  const testimonialQuotes = [
    {
      quote: "Billeady's story isn't just inspiring — it's instructive. He doesn't just tell you what happened, he shows you how to apply those lessons.",
      author: 'Early Reader',
    },
    {
      quote: "This is the book I wish I had when I was going through my own failure. Raw, honest, and incredibly practical.",
      author: 'Business Owner',
    },
    {
      quote: "Finally, a success story that includes the failure. This is what real entrepreneurship looks like.",
      author: 'Entrepreneur',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 100% 80% at 50% 100%, rgba(61,29,78,0.3) 0%, transparent 60%), linear-gradient(180deg, #1a0a24 0%, #3D1D4E 50%, #2A1036 100%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/10 text-white text-xs font-medium px-4 py-2 rounded-full mb-6">
                📖 Coming Second Half of 2026
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                Building from
                <br />
                <span className="italic text-[#FDEBD6]">Dust Again</span>
              </h1>
              <p className="text-white/80 text-lg mb-8 max-w-xl">
                The raw, unfiltered story of losing over ₦60 Million, hitting rock bottom, and rebuilding a thriving business from scratch. This isn't motivational fluff — it's a practical guide for anyone who's ever had to start over.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#waitlist"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#3D1D4E] px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                >
                  Join the Waitlist
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Book Mockup */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Book Cover */}
                <div className="w-64 md:w-80 bg-gradient-to-br from-[#2A1036] to-[#1a0a24] rounded-lg shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="border border-white/20 rounded p-6 h-96 flex flex-col justify-between">
                    <div>
                      <div className="text-white/60 text-xs uppercase tracking-widest mb-4">Billeady Saliu</div>
                      <h2 className="text-white text-2xl md:text-3xl font-semibold leading-tight">
                        Building
                        <br />
                        from Dust
                        <br />
                        <span className="italic text-[#FDEBD6]">Again</span>
                      </h2>
                    </div>
                    <div className="text-white/40 text-xs">
                      A Story of Loss, Resilience & Rebuilding
                    </div>
                  </div>
                </div>
                {/* Shadow/Glow Effect */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-4 bg-black/30 blur-xl rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="w-full py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Not Just Another Success Story
              </h2>
              <p className="text-gray-600 mb-6">
                In 2022, I watched everything I had built crumble. Over ₦60 Million — gone. My business, my reputation, my confidence — all of it felt destroyed.
              </p>
              <p className="text-gray-600 mb-6">
                Most "success stories" skip the messy parts. They show you the highlight reel and leave out the sleepless nights, the doubt, the moments when quitting seemed like the only option.
              </p>
              <p className="text-gray-600 mb-6">
                This book is different. <strong>Building from Dust Again</strong> takes you through the entire journey — the fall, the bottom, and the rebuild. Not to glorify failure, but to give you a real roadmap for what to do when life knocks you down.
              </p>
              <p className="text-gray-600">
                Because chances are, at some point, you'll face your own "dust" moment. And when you do, this book will be your guide.
              </p>
            </div>
            <div className="bg-[#FAF9F7] p-8 rounded-sm">
              <div className="text-[#3D1D4E] text-6xl font-serif mb-4">"</div>
              <p className="text-gray-700 text-lg italic mb-6">
                I didn't write this book because I'm proud of failing. I wrote it because I know someone out there is going through what I went through — and they need to know it's possible to come back stronger.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#3D1D4E] rounded-full flex items-center justify-center text-white font-semibold">
                  BS
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Billeady Saliu</div>
                  <div className="text-sm text-gray-500">Author</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="w-full py-20 md:py-28 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              What's Inside the Book
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Eight powerful chapters that take you from the depths of failure to the heights of comeback success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chapters.map((chapter, index) => (
              <div key={index} className="bg-white p-6 rounded-sm border border-black/5 hover:shadow-lg transition-shadow">
                <div className="text-[#3D1D4E] text-3xl font-bold mb-3">{chapter.number}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{chapter.title}</h3>
                <p className="text-gray-600 text-sm">{chapter.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="w-full py-20 md:py-28 bg-[#3D1D4E]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                This Book Is For You If...
              </h2>
              <ul className="space-y-4">
                {[
                  "You've experienced a major setback and don't know how to move forward",
                  "You're building something and want to avoid the mistakes that destroy businesses",
                  "You need real, practical guidance — not motivational clichés",
                  "You want to learn from someone who's actually been through it",
                  "You believe in second chances and the power of resilience",
                  "You're ready to build something that lasts this time",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/90">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {testimonialQuotes.map((item, index) => (
                <div key={index} className="bg-white/10 p-6 rounded-sm">
                  <p className="text-white/90 italic mb-4">"{item.quote}"</p>
                  <div className="text-white/60 text-sm">— {item.author}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="w-full py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <div className="inline-block bg-[#3D1D4E]/10 text-[#3D1D4E] text-xs font-medium px-4 py-2 rounded-full mb-6">
            Be the First to Know
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Join the Waitlist
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Be among the first to get notified when "Building from Dust Again" launches. Waitlist members will receive exclusive early-bird pricing and bonus content not available anywhere else.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-5 py-4 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#3D1D4E]/20 focus:border-[#3D1D4E]"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-[#3D1D4E] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#2D1538] transition-colors whitespace-nowrap"
                >
                  Join Waitlist
                </button>
              </div>
              <p className="text-gray-500 text-xs mt-4">
                No spam. Just updates about the book launch.
              </p>
            </form>
          ) : (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-md mx-auto">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">You're on the list!</h3>
              <p className="text-gray-600 text-sm">
                Thank you for joining the waitlist. You'll be among the first to know when the book launches.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Bonus Section */}
      <section className="w-full py-20 md:py-28 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Waitlist Exclusive Bonuses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join the waitlist and get these exclusive bonuses when the book launches.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '📓',
                title: 'Companion Workbook',
                description: 'A practical workbook with exercises to apply the lessons from each chapter to your own situation.',
              },
              {
                icon: '🎧',
                title: 'Audio Commentary',
                description: 'Exclusive audio content where I dive deeper into the stories and lessons from the book.',
              },
              {
                icon: '💬',
                title: 'Private Q&A Session',
                description: 'Access to a live Q&A session where you can ask me anything about the book and my journey.',
              },
            ].map((bonus, index) => (
              <div key={index} className="bg-white p-8 rounded-sm border border-black/5 text-center">
                <div className="text-4xl mb-4">{bonus.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{bonus.title}</h3>
                <p className="text-gray-600 text-sm">{bonus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="w-full py-20 md:py-28"
        style={{
          background: 'linear-gradient(135deg, #3D1D4E 0%, #2A1036 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Your Comeback Starts Here
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're in the dust right now or want to be prepared for when life throws its punches, this book will be your guide. Join thousands of others waiting for the launch.
          </p>
          <a
            href="#waitlist"
            className="inline-flex items-center gap-3 bg-white text-[#3D1D4E] px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Secure Your Spot on the Waitlist
            <span className="w-6 h-6 bg-[#3D1D4E] rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
          <p className="text-white/50 text-sm mt-6">
            📖 Launching Second Half of 2026
          </p>
        </div>
      </section>
    </div>
  )
}

export default Book
