'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Linkedin, Phone, Send, CheckCircle2, ArrowRight, MapPin } from 'lucide-react'
import { SOCIAL_LINKS } from '@/lib/data'

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    setSending(true)
    await new Promise(res => setTimeout(res, 1800))
    setSending(false)
    setSubmitted(true)
    setFormState({ name: '', email: '', subject: '', message: '' })
  }

  const CONTACTS = [
    { icon: Mail, label: 'Email', value: SOCIAL_LINKS.email, href: `mailto:${SOCIAL_LINKS.email}`, color: 'text-purple-400' },
    { icon: Github, label: 'GitHub', value: 'TanyaVaish-17', href: SOCIAL_LINKS.github, color: 'text-[var(--text-primary)]' },
    { icon: Linkedin, label: 'LinkedIn', value: 'tanya-vaish07', href: SOCIAL_LINKS.linkedin, color: 'text-blue-400' },
    { icon: Phone, label: 'Phone', value: SOCIAL_LINKS.phone, href: `tel:${SOCIAL_LINKS.phone}`, color: 'text-green-400' },
    { icon: MapPin, label: 'Location', value: 'Ghaziabad, UP, India', href: '#', color: 'text-pink-400' },
  ]

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-radial from-purple-900/25 to-transparent rounded-full blur-3xl pointer-events-none animate-blob" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-gradient-radial from-cyan-900/20 to-transparent rounded-full blur-3xl pointer-events-none animate-blob animation-delay-4000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-pink-900/10 to-transparent rounded-full blur-3xl pointer-events-none animate-blob animation-delay-2000" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass border border-border rounded-full px-4 py-1.5 text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] animate-pulse-slow" />
            Let&apos;s Connect
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            <span className="text-[var(--text-primary)]">Get In</span>{' '}
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-xl mx-auto">
            Open for internships, collaborations, and interesting projects. Let&apos;s build something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Availability card */}
            <div className="glass border border-green-500/30 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse-slow shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                <span className="font-semibold text-green-400 text-sm">Available for Opportunities</span>
              </div>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                Actively seeking frontend developer internships and full-stack roles. 
                Response time: within 24 hours.
              </p>
            </div>

            {/* Contact links */}
            <div className="space-y-3">
              {CONTACTS.map((contact, i) => {
                const Icon = contact.icon
                return (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="group flex items-center gap-4 glass border border-border rounded-xl p-4 hover:border-[var(--accent-purple)]/40 transition-all duration-300 hover-lift cursor-pointer"
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-border flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={16} className={contact.color} />
                    </div>
                    <div>
                      <p className="text-[var(--text-muted)] text-xs font-mono">{contact.label}</p>
                      <p className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-200 text-sm font-medium truncate">
                        {contact.value}
                      </p>
                    </div>
                    <ArrowRight size={14} className="ml-auto text-[var(--text-muted)] group-hover:text-[var(--accent-cyan)] group-hover:translate-x-1 transition-all duration-300" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="glass border border-border rounded-2xl p-6 md:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 gap-4 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', bounce: 0.5 }}
                  >
                    <CheckCircle2 size={56} className="text-green-400" />
                  </motion.div>
                  <h3 className="font-display text-2xl font-bold text-[var(--text-primary)]">Message Sent!</h3>
                  <p className="text-[var(--text-secondary)]">Thanks for reaching out. I&apos;ll get back to you within 24 hours. 🚀</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2.5 rounded-xl glass border border-border text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <div className="space-y-5">
                  <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-6">Send a Message</h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">Name</label>
                      <input
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl input-glass text-sm font-body"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">Email</label>
                      <input
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl input-glass text-sm font-body"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">Subject</label>
                    <input
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="Internship opportunity / Collaboration / Just saying hi!"
                      className="w-full px-4 py-3 rounded-xl input-glass text-sm font-body"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">Message</label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Hi Tanya, I'd love to discuss..."
                      className="w-full px-4 py-3 rounded-xl input-glass text-sm font-body resize-none"
                    />
                  </div>

                  <motion.button
                    onClick={handleSubmit}
                    disabled={sending || !formState.name || !formState.email || !formState.message}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold btn-shimmer disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity duration-300 cursor-pointer"
                    whileHover={!sending ? { scale: 1.01 } : {}}
                    whileTap={!sending ? { scale: 0.99 } : {}}
                  >
                    {sending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <p className="text-xs text-center text-[var(--text-muted)]">
                    Or reach me directly at{' '}
                    <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-[var(--accent-cyan)] hover:underline">
                      {SOCIAL_LINKS.email}
                    </a>
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
