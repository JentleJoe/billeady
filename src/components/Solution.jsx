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
    <section className="w-full">
      <div className="grid lg:grid-cols-2">
        {/* Left Side - Dark Purple with Solution Card */}
        <div className="bg-[#3D1D4E] p-6 md:p-8 lg:p-10">
          {/* Solution Card */}
          <div className="bg-white rounded-lg overflow-hidden max-w-sm">
            {/* Card Header */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                The Solution
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-3">
                The <span className="font-semibold italic">Swift Marketing Method™</span> helps you build, fill, and scale your business sustainably — so you can serve at your highest potential.
              </p>
              {/* Checkmark Item */}
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-[#3D1D4E] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-xs text-gray-700">Proven. Sustainable. Scalable.</span>
              </div>
            </div>

            {/* Card Image */}
            <div className="relative h-48">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="Marketing planning session"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Pain Points */}
        <div className="bg-white p-6 md:p-8 lg:p-10 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight mb-3 italic">
            Feeling Stuck in Your<br />Business Growth?
          </h2>
          <p className="text-gray-500 text-sm mb-6 max-w-md">
            Breaking down the business model behind my most scalable offer – and how you can build yours.
          </p>

          {/* Pain Point Cards */}
          <div className="space-y-3">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-[#F5F5F3] rounded-lg cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  {/* Icon */}
                  <div className="w-9 h-9 bg-white rounded-md flex items-center justify-center text-[#3D1D4E]">
                    {point.icon}
                  </div>
                  {/* Text */}
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {point.title}
                    </h4>
                    <p className="text-gray-500 text-xs">
                      {point.description}
                    </p>
                  </div>
                </div>
                {/* Arrow */}
                <div className="text-[#3D1D4E] pr-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
