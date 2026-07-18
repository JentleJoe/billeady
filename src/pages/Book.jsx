import { useState } from 'react'
import { Link } from 'react-router-dom'
import booksImg from '../assets/booksImg.jpg'

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
      title: 'The Collapse',
      description: 'The real story of what happened, and what I got wrong.',
    },
    {
      number: '02',
      title: 'The Rebuild Mindset',
      description: 'The mindset shift that separates people who rebuild from people who stay down.',
    },
    {
      number: '03',
      title: 'Starting From Zero',
      description: 'The practical steps I took to generate income again from zero.',
    },
    {
      number: '04',
      title: 'What I Would Do Again',
      description: 'What I would do differently, and what I would do exactly the same.',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-hero-book" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-20 md:pt-36 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/10 text-white text-xs font-medium px-4 py-2 rounded-full mb-6">
                📖 Memoir. Rebuild. Blueprint.
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                Building From
                <br />
                <span className="italic text-white/80">Dust Again</span>
              </h1>
              <p className="text-white/80 text-lg mb-8 max-w-xl">
                A memoir. A rebuild. A blueprint for starting over.<br /><br />
                The raw, unfiltered story of losing over ₦50 Million, hitting rock bottom, and rebuilding a thriving business from scratch. This isn't motivational fluff, it's a practical guide for anyone who has been there, or is there right now.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#waitlist"
                  className="inline-flex items-center justify-center gap-2 bg-white text-brand-primary px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
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
                <div className="w-64 md:w-80 bg-linear-to-br from-brand-dark to-brand-darker rounded-lg shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="border border-white/20 rounded p-6 h-96 flex flex-col justify-between">
                    <div>
                      <div className="text-white/60 text-xs uppercase tracking-widest mb-4">Billeddy Saliu</div>
                      <h2 className="text-white text-2xl md:text-3xl font-semibold leading-tight">
                        Building
                        <br />
                        from Dust
                        <br />
                        <span className="italic text-white/80">Again</span>
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
                I Lost Over ₦50 Million.
              </h2>
              <p className="text-gray-600 mb-6">
                Not slowly. Not in a way I saw coming. The kind of loss that does not leave room for a graceful landing, just the floor, and the question of what happens next.
              </p>
              <p className="text-gray-600 mb-6">
                <strong>Building From Dust Again</strong> is the raw, unfiltered account of that collapse and everything that came after: the version of rock bottom nobody posts about, and the exact rebuild that took me from nothing back to a business that actually works.
              </p>
              <p className="text-gray-600 mb-6">
                This is not motivational fluff. There is no chapter that ends with and then I manifested my way back. It is a practical, honest account of what rebuilding actually looks like when you have no cushion, no safety net, and no choice but to start over.
              </p>
              <p className="text-gray-600">
                Written for anyone who has been there, or is there right now.
              </p>
            </div>
            <div className="bg-brand-muted rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              {/* Image Section */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img 
                  src={booksImg} 
                  alt="Billeddy Saliu"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-muted via-transparent to-transparent"></div>
              </div>
              
              {/* Quote Section */}
              <div className="p-8 md:p-10 relative">
                <div className="text-brand-primary text-5xl md:text-6xl font-serif absolute -top-6 left-8 leading-none">"</div>
                <p className="text-gray-700 text-lg md:text-xl italic mb-8 pt-6 leading-relaxed">
                  I wrote this because I know someone out there is going through what I went through, and they need to know it is possible to come back stronger.
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-primary/20">
                      <img 
                        src={booksImg} 
                        alt="Billeddy Saliu"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-brand-primary rounded-full border-2 border-white flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-lg">Billeddy Saliu</div>
                      <div className="text-sm text-gray-500">Author</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="w-full py-20 md:py-28 bg-brand-muted">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              What's Inside
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The core lessons the book is built around.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chapters.map((chapter, index) => (
              <div key={index} className="bg-white p-6 rounded-sm border border-black/5 hover:shadow-lg transition-shadow">
                <div className="text-brand-primary text-3xl font-bold mb-3">{chapter.number}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{chapter.title}</h3>
                <p className="text-gray-600 text-sm">{chapter.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="w-full py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <div className="inline-block bg-brand-primary/10 text-brand-primary text-xs font-medium px-4 py-2 rounded-full mb-6">
            Join the Waitlist
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Join the Waitlist
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            The book isn't released yet. Join the waitlist to get notified the moment it drops — plus early access before it goes public.
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
                  className="flex-1 px-5 py-4 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-brand-accent transition-colors whitespace-nowrap"
                >
                  Join the Waitlist
                </button>
              </div>
              <p className="text-gray-500 text-xs mt-4">
                  No spam. Just one email when it is ready.
              </p>
            </form>
          ) : (
            <div className="bg-brand-muted border border-brand-primary/20 rounded-lg p-6 max-w-md mx-auto">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">You're on the list!</h3>
              <p className="text-gray-600 text-sm">
                  Thank you for joining the waitlist. You will be among the first to know when the book launches.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Book
