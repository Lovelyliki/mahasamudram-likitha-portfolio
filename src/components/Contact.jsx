import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  emailjsConfig,
  personalInfo,
  socialLinks,
} from '../data/portfolioData'

export default function Contact() {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  // Parallax animation for background decorative typography
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')
    const form = formRef.current
    if (!form) return

    const firstName = form.querySelector('#firstName')?.value.trim() || ''
    const lastName = form.querySelector('#lastName')?.value.trim() || ''
    const email = form.querySelector('#email')?.value.trim() || ''
    const message = form.querySelector('#message')?.value.trim() || ''

    // Form validation check
    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    const { serviceId, templateId, publicKey } = emailjsConfig
    const isConfigured = Boolean(
      serviceId &&
        templateId &&
        publicKey &&
        serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
        templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
        publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'
    )

    if (!isConfigured) {
      // Fallback: Open prefilled mailto email client
      const subject = `Portfolio Contact from ${firstName} ${lastName}`.trim()
      const body = `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`,
        '_blank'
      )
      setStatus('success')
      form.reset()
      setTimeout(() => setStatus('idle'), 3000)
    } else {
      // Send directly via EmailJS SDK
      try {
        const emailjs = await import('@emailjs/browser')
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
        setStatus('success')
        form.reset()
      } catch (err) {
        console.error('EmailJS send error:', err)
        setStatus('error')
      }
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Behind: Giant Parallax "Contact" Word */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none z-0 flex items-start justify-center overflow-hidden"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/[0.04] md:text-white/[0.06]"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* In Front: Right-Aligned Red Contact Card */}
      <div
        data-aos="fade-up"
        className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 ml-auto rounded-tl-3xl relative z-10 shadow-2xl"
      >
        {/* Header Row */}
        <div className="flex justify-between items-center mb-10 pb-6 border-b border-white/20">
          <span className="text-xs uppercase tracking-[0.2em] text-white/80 font-bold">
            Reach Me
          </span>
          {socialLinks.instagram ? (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold hover:bg-white/20 transition-colors"
            >
              <span>DM on Instagram</span>
              <span>→</span>
            </a>
          ) : (
            <a
              href={`mailto:${personalInfo.emails.primary}`}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold hover:bg-white/20 transition-colors"
            >
              <span>Email Direct</span>
              <span>→</span>
            </a>
          )}
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-10"
        >
          {/* Two-Column Form Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Inputs */}
            <div className="flex flex-col gap-8">
              <input
                id="firstName"
                name="first_name"
                type="text"
                required
                placeholder="First Name *"
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/70 text-white focus:outline-none focus:border-white transition-colors"
              />
              <input
                id="lastName"
                name="last_name"
                type="text"
                placeholder="Last Name"
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/70 text-white focus:outline-none focus:border-white transition-colors"
              />
              <input
                id="email"
                name="user_email"
                type="email"
                required
                placeholder="Email Address *"
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/70 text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>

            {/* Right Textarea */}
            <div className="flex flex-col">
              <textarea
                id="message"
                name="message"
                required
                placeholder="Your Message *"
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/70 text-white focus:outline-none focus:border-white transition-colors resize-none min-h-[140px] md:min-h-full w-full"
              />
            </div>
          </div>

          {/* Bottom Area: Checkbox, Notes & Submit Button */}
          <div className="flex flex-col gap-6 pt-4 border-t border-white/10">
            {/* Permission Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer select-none text-xs text-white/90">
              <input
                type="checkbox"
                required
                className="mt-0.5 rounded border-white/40 bg-white/10 text-black focus:ring-0"
              />
              <span>
                I agree to allow this website to store my submitted details so
                they can respond to my inquiry.
              </span>
            </label>

            {/* Response Time Note */}
            <p className="text-xs text-white/75">
              Your message will be sent directly to my inbox. I typically respond
              within 24-48 hours.
            </p>

            {/* Urgent Mailto Link */}
            <p className="text-xs text-white/75">
              Need urgent assistance? Reach me directly at{' '}
              <a
                href={`mailto:${personalInfo.emails.primary}`}
                className="underline font-bold hover:text-white"
              >
                {personalInfo.emails.primary}
              </a>
            </p>

            {/* Dynamic Status Submit Button */}
            <div className="pt-2">
              {status === 'sending' && (
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white/20 border border-white/30 text-white/60 font-bold cursor-not-allowed"
                >
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  <span>Sending...</span>
                </button>
              )}

              {status === 'success' && (
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-600 border border-emerald-400 text-white font-bold shadow-md cursor-default"
                >
                  <span>Sent Successfully ✓</span>
                </button>
              )}

              {status === 'error' && (
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-red-900 border border-red-700 text-white font-bold shadow-md cursor-default"
                >
                  <span>Failed — Try Again</span>
                </button>
              )}

              {status === 'idle' && (
                <button
                  type="submit"
                  className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-white text-white font-bold transition-all duration-300 hover:bg-white hover:text-[#ff2a2a] cursor-pointer"
                >
                  <span>Send Message</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
