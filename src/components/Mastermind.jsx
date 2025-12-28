const Mastermind = () => {
  const programs = [
    {
      title: 'High Ticket Closing Mastery',
      description: 'Master the psychology and techniques to close premium clients consistently.',
      features: [
        { text: 'Closing frameworks', col: 1 },
        { text: 'Objection handling', col: 2 },
        { text: 'Sales psychology', col: 1 },
      ],
    },
    {
      title: 'Cold DM Blueprint',
      description: 'Learn how to run effective cold outreach that converts strangers into clients.',
      features: [
        { text: 'DM scripts & templates', col: 1 },
        { text: 'Lead qualification', col: 2 },
        { text: 'Conversion tactics', col: 1 },
      ],
    },
    {
      title: 'Realtor Client Acquisition',
      description: 'Specialized training for realtors to land high-value property clients.',
      features: [
        { text: 'Realtor strategies', col: 1 },
        { text: 'Client nurturing', col: 2 },
        { text: 'Deal closing', col: 1 },
      ],
    },
  ]

  return (
    <section className="w-full relative overflow-hidden">
      {/* Background image + overlay (matches screenshot: photo visible with purple wash + bottom vignette) */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1800&h=900&fit=crop"
          alt="Team working"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#3D1D4E]/75" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(61,29,78,0.35) 0%, rgba(61,29,78,0.85) 70%, rgba(61,29,78,0.95) 100%)',
          }}
        />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-20 md:pt-24 pb-14 md:pb-16">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white italic leading-tight">
              Billeady's Signature
              <br />
              Programs
            </h2>
            <p className="text-white/75 text-sm md:text-base max-w-md lg:justify-self-end">
              Whether you're starting out or scaling up, my programs will help you close more deals, land premium clients, and build lasting wealth.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-sm border border-black/10 overflow-hidden">
                <div className="px-5 pt-5 pb-4">
                  <h3 className="text-gray-900 font-semibold sm:text-lg text-sm">{program.title}</h3>
                  <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                    {program.description}
                  </p>
                </div>
                <div className="h-px bg-gray-200" />

                <div className="px-5 py-4">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                    {program.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#3D1D4E] flex items-center justify-center shrink-0">
                          <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-gray-600 text-xs">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mastermind