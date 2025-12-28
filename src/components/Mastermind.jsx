const Mastermind = () => {
  const programs = [
    {
      title: 'Mastermind Program',
      description: 'Join a community of ambitious entrepreneurs scaling their businesses together.',
      features: [
        { text: 'Monthly group coaching', col: 1 },
        { text: 'Resource library', col: 2 },
        { text: 'Private community', col: 1 },
      ],
    },
    {
      title: '1:1 Coaching',
      description: 'Join a community of ambitious entrepreneurs scaling their businesses together.',
      features: [
        { text: 'Weekly 1:1 calls', col: 1 },
        { text: 'Custom strategy', col: 2 },
        { text: 'Direct access', col: 1 },
      ],
    },
    {
      title: 'Free Podcast & Resources',
      description: 'Join a community of ambitious entrepreneurs scaling their businesses together.',
      features: [
        { text: 'Weekly podcast', col: 1 },
        { text: 'Free trainings', col: 2 },
        { text: 'Business templates', col: 1 },
      ],
    },
  ]

  return (
    <section className="w-full relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1400&h=800&fit=crop"
          alt="Woman working"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#3D1D4E]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight italic">
              The Swift Marketing<br />Mastermind
            </h2>
            <div className="flex items-end lg:justify-end">
              <p className="text-gray-300 text-sm md:text-base max-w-md lg:text-right">
                No matter where you're at on your journey, my signature programs will help you create more freedom, impact, and income.
              </p>
            </div>
          </div>

          {/* Program Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10"
              >
                <h3 className="text-white font-semibold text-base mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-400 text-xs mb-5 leading-relaxed">
                  {program.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-2">
                  {program.features.map((feature, fIndex) => (
                    <div
                      key={fIndex}
                      className={`flex items-center gap-2 ${
                        fIndex === 2 && program.features.length === 3 ? 'col-span-1' : ''
                      }`}
                    >
                      <span className="w-4 h-4 rounded-full border border-yellow-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-2 h-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-300 text-xs">{feature.text}</span>
                    </div>
                  ))}
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