'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Award, ExternalLink, Calendar, Star } from 'lucide-react'
import { EDUCATION, CERTIFICATIONS } from '@/lib/data'

export default function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="relative py-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-purple-900/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass border border-border rounded-full px-4 py-1.5 text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] animate-pulse-slow" />
            Background
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            <span className="text-[var(--text-primary)]">Education &</span>{' '}
            <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Education Timeline */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 font-display text-xl font-bold text-[var(--text-primary)] mb-8"
            >
              <GraduationCap size={22} className="text-[var(--accent-purple)]" />
              Academic Journey
            </motion.h3>

            <div className="relative pl-8 space-y-0">
              {/* Timeline line */}
              <div className="absolute left-3 top-3 bottom-3 w-0.5 bg-gradient-to-b from-purple-600 via-cyan-600 to-transparent" />

              {EDUCATION.map((edu, i) => (
                <motion.div
                  key={edu.institution + edu.degree}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className="relative pb-8 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className={`absolute -left-5 top-1 w-4 h-4 rounded-full border-2 border-[var(--bg-primary)] flex items-center justify-center ${
                    edu.type === 'current'
                      ? 'bg-[var(--accent-purple)] shadow-glow-sm'
                      : 'bg-[var(--bg-tertiary)] border-[var(--accent-cyan)]'
                  }`}>
                    {edu.type === 'current' && (
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse-slow" />
                    )}
                  </div>

                  <motion.div
                    className={`glass border rounded-xl p-5 transition-all duration-300 hover-lift ${
                      edu.type === 'current'
                        ? 'border-purple-500/30 hover:border-purple-500/60'
                        : 'border-border hover:border-[var(--accent-cyan)]/30'
                    }`}
                    whileHover={{ x: 4 }}
                  >
                    {edu.type === 'current' && (
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full px-2.5 py-0.5 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                        Current
                      </div>
                    )}
                    <h4 className="font-semibold text-[var(--text-primary)] mb-1">{edu.degree}</h4>
                    <p className="text-[var(--accent-cyan)] text-sm font-medium mb-2">{edu.institution}</p>
                    <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={11} />
                        {edu.duration}
                      </div>
                      <div className="flex items-center gap-1.5 font-mono text-[var(--text-secondary)]">
                        <Star size={11} className="text-yellow-400" />
                        {edu.score}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 font-display text-xl font-bold text-[var(--text-primary)] mb-8"
            >
              <Award size={22} className="text-[var(--accent-cyan)]" />
              Certifications
            </motion.h3>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="group glass border border-border rounded-xl p-4 hover:border-[var(--accent-cyan)]/40 transition-all duration-300 hover-lift"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-[var(--accent-cyan)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Award size={14} className="text-[var(--accent-cyan)]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--text-primary)] text-sm group-hover:text-[var(--accent-cyan)] transition-colors duration-200 leading-snug">
                          {cert.title}
                        </h4>
                        <p className="text-[var(--text-muted)] text-xs mt-0.5">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-xs font-mono text-[var(--text-muted)] glass border border-border px-2 py-0.5 rounded">
                        {cert.year}
                      </span>
                      {cert.link && cert.link !== '#' && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors duration-200"
                        >
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Positions of Responsibility */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 }}
                className="glass border border-purple-500/30 rounded-xl p-5 mt-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--accent-purple)] animate-pulse-slow" />
                  <span className="text-xs font-mono text-[var(--accent-purple)] uppercase tracking-wider">Position of Responsibility</span>
                </div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-1">Technical Coordinator</h4>
                <p className="text-[var(--accent-cyan)] text-sm font-medium mb-2">ZenYukti Club · 2024 – Present</p>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  Contributed to official website, organized technical seminars by prominent tech personalities, and helped build a B.Tech student community for knowledge sharing and daily technical practice.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
