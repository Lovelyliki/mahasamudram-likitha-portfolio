import { motion } from 'framer-motion'
import stackImage from '../assets/about/profile.png'
import { aboutContent, personalInfo } from '../data/portfolioData'

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Decorative 4-point star (top-right) */}
      <svg
        className="absolute top-8 right-8 w-8 h-8 md:w-12 md:h-12 fill-black opacity-30 animate-pulse pointer-events-none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* Decorative 4-point star (bottom-left) with 1s delay */}
      <svg
        className="absolute bottom-24 left-8 w-8 h-8 md:w-10 md:h-10 fill-black opacity-30 animate-pulse pointer-events-none"
        style={{ animationDelay: '1s' }}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* Inner Container */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start relative z-10">
        {/* Left: ID Badge on a Lanyard (Framer Motion spring drop) */}
        <div className="w-full md:w-[350px] shrink-0 flex justify-center">
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              type: 'spring',
              stiffness: 110,
              damping: 9,
              mass: 1.1,
            }}
            className="relative flex flex-col items-center pt-8 w-full max-w-[280px]"
          >
            {/* Black Lanyard String */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3 h-40 bg-black" />

            {/* Grey Clip Rectangle */}
            <div className="w-8 h-4 bg-gray-400 rounded-sm z-20 -mb-2 shadow-sm" />

            {/* Dark Card */}
            <div className="relative z-10 bg-gray-900 w-full rounded-2xl p-3 shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Small cutout slot at top */}
              <div className="w-12 h-2 bg-gray-800 rounded-full mx-auto mb-3" />

              {/* Photo inside */}
              <img
                src={stackImage}
                alt={personalInfo.name}
                className="w-full aspect-[3/4] rounded-xl object-cover object-top"
              />
            </div>
          </motion.div>
        </div>

        {/* Right: Heading & Bio Content */}
        <div className="flex-1" data-aos="fade-left">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            {aboutContent.heading}
          </h2>
          <p
            className="text-lg font-bold leading-relaxed text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />
        </div>
      </div>

      {/* White Torn-Paper SVG Divider along bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24 fill-white block"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  )
}
