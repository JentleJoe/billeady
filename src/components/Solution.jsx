const Solution = () => {
  const painPoints = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Revenue Rollercoaster',
      description: 'Unpredictable income, no recurring stability.',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Revenue Rollercoaster',
      description: 'Unpredictable income, no recurring stability.',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Revenue Rollercoaster',
      description: 'Unpredictable income, no recurring stability.',
    },
  ]

  return (
    <section
      className="w-full"
      style={{
        background:
          'radial-gradient(900px circle at 50% 0%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 55%), linear-gradient(180deg, #3D1D4E 0%, #2A1036 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14 md:py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left: Solution Card */}
          <div>
            <div className="bg-white border border-black/10 rounded-sm overflow-hidden">
              <div className="px-7 pt-7 pb-5">
                <h3 className="text-xl font-semibold text-gray-900">The Solution</h3>
                <p className="text-gray-600 text-xs leading-relaxed mt-3 max-w-md">
                  The <span className="font-semibold">Swift Marketing Method™</span> helps you build, fill, and scale your business sustainably — so you can serve at your highest potential.
                </p>
                <div className="h-px bg-gray-200 mt-5" />

                <div className="flex items-center gap-3 mt-4">
                  <span className="w-5 h-5 rounded-full bg-[#3D1D4E] flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-xs text-gray-600">Proven. Sustainable. Scalable.</span>
                </div>
              </div>

              <div className="px-5 pb-5">
                <div className="bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=600&fit=crop"
                    alt="Marketing planning session"
                    className="w-full aspect-video object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Heading + Rows */}
          <div className="pt-1">
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
              Feeling Stuck in Your
              <br />
              Business Growth?
            </h2>
            <p className="text-white/70 text-sm mt-5 max-w-md">
              Breaking down the business model behind my most scalable offer – and how you can build yours.
            </p>

            <div className="mt-9 space-y-4">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-white border border-black/10 rounded-sm px-5 py-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-[#3D1D4E]/40 rounded-sm flex items-center justify-center text-[#3D1D4E]">
                      {point.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{point.title}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{point.description}</div>
                    </div>
                  </div>

                  <div className="text-gray-800">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
