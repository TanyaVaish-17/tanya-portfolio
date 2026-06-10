'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { SKILLS_DATA } from '@/lib/data'

type Category = 'all' | 'frontend' | 'languages' | 'corecs' | 'tools'

const CATEGORIES: { key: Category; label: string; emoji: string }[] = [
  { key: 'all', label: 'All Skills', emoji: '✨' },
  { key: 'frontend', label: 'Frontend', emoji: '🎨' },
  { key: 'languages', label: 'Languages', emoji: '💻' },
  { key: 'corecs', label: 'Core CS', emoji: '🧠' },
  { key: 'tools', label: 'Tools & Cloud', emoji: '🛠️' },
]

const SKILL_COLORS = [
  'from-purple-500/20 border-purple-500/30 hover:border-purple-500/60 hover:shadow-purple-500/20',
  'from-cyan-500/20 border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-cyan-500/20',
  'from-pink-500/20 border-pink-500/30 hover:border-pink-500/60 hover:shadow-pink-500/20',
  'from-blue-500/20 border-blue-500/30 hover:border-blue-500/60 hover:shadow-blue-500/20',
  'from-green-500/20 border-green-500/30 hover:border-green-500/60 hover:shadow-green-500/20',
  'from-orange-500/20 border-orange-500/30 hover:border-orange-500/60 hover:shadow-orange-500/20',
]

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const allSkills = activeCategory === 'all'
  ? [
      ...SKILLS_DATA.frontend.map(s => ({ ...s, category: 'frontend' })),
      ...SKILLS_DATA.languages.map(s => ({ ...s, category: 'languages' })),
      ...SKILLS_DATA.corecs.map(s => ({ ...s, category: 'corecs' })),
      ...SKILLS_DATA.tools.map(s => ({ ...s, category: 'tools' })),
    ]
    : (SKILLS_DATA[activeCategory as keyof typeof SKILLS_DATA] ?? []).map(s => ({
        ...s,
        category: activeCategory,
      }))

  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 bg-purple-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 -translate-y-1/2 bg-cyan-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass border border-border rounded-full px-4 py-1.5 text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] animate-pulse-slow" />
            Tech Stack
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            <span className="text-[var(--text-primary)]">Skills &</span>{' '}
            <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {CATEGORIES.map(cat => (
            <motion.button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer border ${
                activeCategory === cat.key
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white border-transparent shadow-glow-sm'
                  : 'glass border-border text-[var(--text-secondary)] hover:border-[var(--accent-purple)]/30 hover:text-[var(--text-primary)]'
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {allSkills.map((skill, i) => {
              const colorClass = SKILL_COLORS[i % SKILL_COLORS.length]
              return (
                <motion.div
                  key={`${skill.name}-${skill.category}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className={`group relative glass border bg-gradient-to-br to-transparent rounded-xl p-4 text-center cursor-default transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${colorClass}`}
                >
                  <div className="text-2xl mb-2">{skill.icon}</div>
                  <p className="text-[var(--text-secondary)] text-xs font-medium group-hover:text-[var(--text-primary)] transition-colors duration-200 leading-tight">
                    {skill.name}
                  </p>
                  
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
