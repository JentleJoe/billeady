const LogoBar = () => {
  const logos = [
    { name: 'Applied COACH', text: 'applied COACH' },
    { name: 'Perth Now', text: 'perthNOW' },
    { name: 'Startup Smart', text: '⊕ startup smart' },
    { name: 'Auralis', text: 'AURALIS' },
    { name: 'Medium', text: '◐ Medium' },
    { name: 'Smart Company', text: '⊕SmartCompany' },
  ]

  return (
    <section className="w-full py-8 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* As Seen On Label */}
          <span className="text-sm text-gray-500 whitespace-nowrap">As Seen On..</span>
          
          {/* Logo Grid */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-8 md:gap-12">
            <span className="text-gray-400 font-medium tracking-wide text-sm">
              applied<span className="font-bold">COACH</span>
            </span>
            <span className="text-gray-400 font-bold tracking-wide text-sm">
              perth<span className="text-pink-500">NOW</span>
            </span>
            <span className="text-gray-400 font-medium text-sm flex items-center gap-1">
              <span className="text-gray-400">⊕</span>
              <span>startup</span>
              <span className="font-bold">smart</span>
            </span>
            <span className="text-gray-400 font-bold tracking-widest text-sm">
              AURALIS
            </span>
            <span className="text-gray-400 font-medium text-sm flex items-center gap-1">
              <span className="font-bold">◐</span>
              <span>Medium</span>
            </span>
            <span className="text-gray-400 font-medium text-sm flex items-center">
              <span>⊕</span>
              <span className="font-bold">SmartCompany</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogoBar
