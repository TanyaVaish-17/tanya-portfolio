'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Rocket, Brain, Target } from 'lucide-react'

const FACTS = [
  { icon: Code2, label: 'Lines of Code', value: '20K+', color: 'cyan' },
  { icon: Rocket, label: 'Projects Launched', value: '10+', color: 'purple' },
  { icon: Brain, label: 'DSA Problems', value: '400+', color: 'pink' },
  { icon: Target, label: 'CGPA', value: '8.89', color: 'blue' },
]

const TRAITS = [
  { icon: '⚡', title: 'Fast Learner', desc: 'Adapt quickly to new technologies and frameworks' },
  { icon: '🎨', title: 'Design-Aware', desc: 'Obsessed with clean UX and pixel-perfect interfaces' },
  { icon: '🧩', title: 'Problem Solver', desc: 'Break complex problems into elegant solutions' },
  { icon: '🚀', title: 'Builder Mindset', desc: 'Ship fast, iterate faster, always improving' },
]

const JOURNEY = [
  {
    year: '2024',
    title: 'Started B.Tech CSE',
    desc: 'Began exploring programming, DSA and web development',
  },
  {
    year: '2025',
    title: 'Built Real Projects',
    desc: 'Developed AI legal assistant, golf platform and portfolio projects',
  },
  {
    year: '2026',
    title: 'Leadership Programs',
    desc: 'Selected for Harvard Aspire Leaders and McKinsey Forward',
  },
  {
    year: 'Future',
    title: 'Startup Vision',
    desc: 'Building technology that solves real-world problems at scale',
  },
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
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-5" />

          <p className="max-w-3xl mx-auto mt-6 text-[var(--text-secondary)] leading-relaxed">
            I'm a Computer Science student passionate about building products that
            combine technology, design and real-world impact. My journey started
            with web development and has expanded into full-stack applications,
            AI integration and startup innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Highlights + Tags */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-3"
          >
            <div className="space-y-6">
  {JOURNEY.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.3 + i * 0.15 }}
      className="flex gap-5"
    >
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-sm font-bold text-white">
          {i + 1}
        </div>

        {i !== JOURNEY.length - 1 && (
          <div className="w-px h-16 bg-gradient-to-b from-cyan-500/50 to-transparent mt-2" />
        )}
      </div>

      <div className="pb-4">
        <span className="text-cyan-400 text-sm font-medium">
          {item.year}
        </span>

        <h3 className="text-white font-semibold text-lg mt-1">
          {item.title}
        </h3>

        <p className="text-[var(--text-muted)] text-sm mt-1">
          {item.desc}
        </p>
      </div>
    </motion.div>
  ))}
</div>

            {/* Interest tags */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.75 }}
              className="flex flex-wrap gap-2 pt-3"
            >
              {['React','Full Stack','AI Integration','AWS','Startups'].map(tag => (
                <span key={tag} className="tech-badge">{tag}</span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Traits & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-4"
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
                    <div className={`font-display font-bold text-4xl ${cls.split(' ')[0]}`}>{fact.value}</div>
                    <div className="text-[var(--text-muted)] text-xs mt-0.5">{fact.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}