'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ACHIEVEMENTS, STATS } from '@/lib/data'

function AnimatedCounter({ value, suffix = '', decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current += increment
      if (step >= steps) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(parseFloat(current.toFixed(decimals)))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value, decimals])

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}
    </span>
  )
}

export default function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="achievements" className="relative py-28 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/15 rounded-full blur-3xl pointer-events-none animate-blob" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none animate-blob animation-delay-4000" />

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
            Milestones
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            <span className="text-[var(--text-primary)]">Achievements &</span>{' '}
            <span className="gradient-text">Recognition</span>
          </h2>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="glass border border-border rounded-2xl p-6 text-center hover-lift hover:border-[var(--accent-purple)]/40 transition-all duration-300"
            >
              <div className="font-display font-black text-4xl md:text-5xl gradient-text mb-2">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.value % 1 !== 0 ? 2 : 0}
                />
              </div>
              <p className="text-[var(--text-secondary)] text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ACHIEVEMENTS.map((achievement, i) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="group glass border border-border rounded-2xl p-6 hover:border-[var(--accent-purple)]/40 hover-lift transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-cyan-600/20 border border-[var(--accent-purple)]/20 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <div>
                  {achievement.year && (
                    <span className="text-xs font-mono text-[var(--text-muted)] mb-1 block">{achievement.year}</span>
                  )}
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1.5 group-hover:gradient-text transition-all duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* DSA Journey Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-10 glass border border-border rounded-2xl p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-2">
                🏆 Coding Journey
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                Consistently solving algorithmic problems across platforms to sharpen problem-solving skills 
                and prepare for technical interviews.
              </p>
            </div>
            <div className="flex gap-4">
              {[
                { platform: 'LeetCode', color: 'from-orange-500/20 border-orange-500/30 text-orange-400', emoji: '🟧' },
                { platform: 'CodeChef', color: 'from-amber-500/20 border-amber-500/30 text-amber-400', emoji: '👨‍🍳' },
                { platform: 'Coding Ninjas', color: 'from-red-500/20 border-red-500/30 text-red-400', emoji: '🥷' },
              ].map(p => (
                <div
                  key={p.platform}
                  className={`glass bg-gradient-to-br ${p.color} to-transparent border rounded-xl px-4 py-3 text-center min-w-[90px]`}
                >
                  <div className="text-xl mb-1">{p.emoji}</div>
                  <p className={`text-xs font-semibold ${p.color.split(' ')[2]}`}>{p.platform}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
