'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Rocket, Brain, Heart, Target, Zap } from 'lucide-react'

const FACTS = [
  { icon: Code2, label: 'Lines of Code', value: '20K+', color: 'cyan' },
  { icon: Rocket, label: 'Projects Launched', value: '2+', color: 'purple' },
  { icon: Brain, label: 'DSA Problems', value: '400+', color: 'pink' },
  { icon: Target, label: 'CGPA', value: '8.89', color: 'blue' },
]

const TRAITS = [
  { icon: '⚡', title: 'Fast Learner', desc: 'Adapt quickly to new technologies and frameworks' },
  { icon: '🎨', title: 'Design-Aware', desc: 'Obsessed with clean UX and pixel-perfect interfaces' },
  { icon: '🧩', title: 'Problem Solver', desc: 'Break complex problems into elegant solutions' },
  { icon: '🚀', title: 'Builder Mindset', desc: 'Ship fast, iterate faster, always improving' },
]

function SectionTag({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 glass border border-border rounded-full px-4 py-1.5 text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-widest mb-4">
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] animate-pulse-slow" />
      {text}
    </div>
  )
}

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <SectionTag text="About Me" />
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            <span className="text-[var(--text-primary)]">The</span>{' '}
            <span className="gradient-text">Story</span>{' '}
            <span className="text-[var(--text-primary)]">Behind the Code</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              I&apos;m a{' '}
              <span className="text-[var(--text-primary)] font-semibold">second-year B.Tech CSE student</span>{' '}
              at KIET Group of Institutions, Ghaziabad, with a deep passion for{' '}
              <span className="gradient-text-cyan font-semibold">building web applications</span>{' '}
              that are both beautiful and functional.
            </p>

            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              My journey started with curiosity about{' '}
              <span className="text-[var(--accent-purple)] font-semibold">how the web works</span>, and quickly 
              evolved into building full-stack products — from an AI-powered legal assistant to a subscription 
              golf platform. I love turning ideas into{' '}
              <span className="text-[var(--text-primary)] font-semibold">real, deployed products</span>.
            </p>

            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              Beyond code, I&apos;m selected for{' '}
              <span className="text-[var(--accent-cyan)] font-semibold">Harvard&apos;s Aspire Leaders Program</span>{' '}
              and{' '}
              <span className="text-[var(--accent-cyan)] font-semibold">McKinsey Forward Program</span>, 
              shaping my leadership mindset alongside technical skills. My long-term goal is to{' '}
              <span className="gradient-text font-semibold">build my own startup</span>{' '}
              solving real-world problems at scale.
            </p>

            {/* Interests */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['React Ecosystem', 'Full-Stack Dev', 'AI/ML Integration', 'UI/UX Design', 'Open Source', 'DSA', 'Cloud (AWS)', 'Startups'].map(tag => (
                <span key={tag} className="tech-badge">{tag}</span>
              ))}
            </div>

            {/* Fun fact */}
            <motion.div
              className="glass border border-[var(--accent-cyan)]/20 rounded-xl p-4 flex gap-3"
              whileHover={{ borderColor: 'rgba(6,182,212,0.4)', scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <Heart size={20} className="text-pink-400 flex-shrink-0 mt-0.5" />
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                <span className="text-[var(--text-primary)] font-semibold">Fun Fact:</span>{' '}
                I believe the best code is code that you never have to explain — clean, readable, and purposeful.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Traits & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-5"
          >
            {/* Traits Grid */}
            <div className="grid grid-cols-2 gap-4">
              {TRAITS.map((trait, i) => (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="glass border border-border rounded-xl p-4 hover-lift hover:border-[var(--accent-purple)]/30 group transition-all duration-300"
                >
                  <div className="text-2xl mb-2">{trait.icon}</div>
                  <h3 className="font-semibold text-[var(--text-primary)] text-sm mb-1 group-hover:gradient-text transition-all duration-300">{trait.title}</h3>
                  <p className="text-[var(--text-muted)] text-xs leading-relaxed">{trait.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {FACTS.map((fact, i) => {
                const Icon = fact.icon
                const colorMap = {
                  cyan: 'text-cyan-400 border-cyan-500/20 from-cyan-500/10',
                  purple: 'text-purple-400 border-purple-500/20 from-purple-500/10',
                  pink: 'text-pink-400 border-pink-500/20 from-pink-500/10',
                  blue: 'text-blue-400 border-blue-500/20 from-blue-500/10',
                }
                const cls = colorMap[fact.color as keyof typeof colorMap]
                return (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className={`glass border rounded-xl p-4 bg-gradient-to-br to-transparent ${cls} text-center`}
                  >
                    <Icon size={20} className={`${cls.split(' ')[0]} mx-auto mb-2`} />
                    <div className={`font-display font-bold text-2xl ${cls.split(' ')[0]}`}>{fact.value}</div>
                    <div className="text-[var(--text-muted)] text-xs mt-0.5">{fact.label}</div>
                  </motion.div>
                )
              })}
            </div>

            {/* Currently block */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="glass border border-border rounded-xl p-4"
            >
              <div className="flex items-center gap-2 mb-3">
                <Zap size={16} className="text-[var(--accent-cyan)]" />
                <span className="font-mono text-xs text-[var(--accent-cyan)] uppercase tracking-wider">Currently</span>
              </div>
              <ul className="space-y-1.5">
                {[
                  '🎓 Studying at KIET, Sem 4',
                  '💻 Building full-stack web apps',
                  '📚 Mastering DSA & System Design',
                  '🌐 Open to frontend internships',
                ].map(item => (
                  <li key={item} className="text-[var(--text-secondary)] text-sm font-mono">{item}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
