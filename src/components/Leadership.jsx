import { leadershipList } from '../data/portfolioData'

function LeadershipItem({ item, index }) {
  const isEven = index % 2 === 0

  return (
    <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-12 last:mb-0 w-full">
      {/* Red Glowing Dot on the Timeline */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-3.5 h-3.5 rounded-full bg-[#ff2a2a] shadow-[0_0_12px_rgba(255,42,42,0.8)] border-2 border-black z-20" />

      {isEven ? (
        <>
          {/* Left Card for Even Indexes */}
          <div
            data-aos="fade-right"
            data-aos-delay={index * 150}
            className="ml-10 md:ml-0 w-[calc(100%-2.5rem)] md:w-[45%] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_0_25px_rgba(255,42,42,0.15)] md:text-right"
          >
            {item.badge && (
              <span className="inline-block px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-[#ff2a2a] uppercase tracking-widest text-xs font-bold mb-3">
                {item.badge}
              </span>
            )}
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 transition-colors duration-200 hover:text-[#ff2a2a]">
              {item.title}
            </h3>
            <p className="font-mono text-xs uppercase tracking-wider text-red-400 font-semibold mb-3">
              {item.role}
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
          {/* Spacer on right for md+ */}
          <div className="hidden md:block md:w-[45%]" />
        </>
      ) : (
        <>
          {/* Spacer on left for md+ */}
          <div className="hidden md:block md:w-[45%]" />
          {/* Right Card for Odd Indexes */}
          <div
            data-aos="fade-left"
            data-aos-delay={index * 150}
            className="ml-10 md:ml-0 w-[calc(100%-2.5rem)] md:w-[45%] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_0_25px_rgba(255,42,42,0.15)] md:text-left"
          >
            {item.badge && (
              <span className="inline-block px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-[#ff2a2a] uppercase tracking-widest text-xs font-bold mb-3">
                {item.badge}
              </span>
            )}
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 transition-colors duration-200 hover:text-[#ff2a2a]">
              {item.title}
            </h3>
            <p className="font-mono text-xs uppercase tracking-wider text-red-400 font-semibold mb-3">
              {item.role}
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </>
      )}
    </div>
  )
}

export default function Leadership() {
  return (
    <section className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* Torn-Paper SVG Divider at the top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none -translate-y-[1px] rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20 fill-[#ff2a2a] block"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-[#ff2a2a] text-xs font-bold uppercase tracking-widest mb-4">
            Activities
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Leadership & Engagement
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto">
            Extracurricular leadership, community organizing, and academic
            collaboration initiatives.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative">
          {/* Vertical 2px Gradient Line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10" />

          {/* Timeline Items */}
          <div className="relative z-10">
            {leadershipList.map((item, index) => (
              <LeadershipItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
