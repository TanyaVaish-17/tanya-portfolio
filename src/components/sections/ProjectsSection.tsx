'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, ArrowRight, Layers } from 'lucide-react'
import { PROJECTS } from '@/lib/data'
import type { Project } from '@/types'
import { useEffect } from 'react'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [currentImage, setCurrentImage] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % project.images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [project.images.length])

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      layout
      className="group relative glass border border-border rounded-2xl overflow-hidden transition-all duration-500 cursor-default flex flex-col hover:border-[var(--accent-cyan)]/40 hover:shadow-glow-cyan"
      whileHover={{ y: -6 }}
    >
      {/* Image/Banner Area */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-900/50 via-[var(--bg-tertiary)] to-cyan-900/30">
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative h-64 overflow-hidden bg-black flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={project.images[currentImage]}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-contain bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div>
          <h3 className="font-display font-bold text-xl text-[var(--text-primary)] group-hover:gradient-text transition-all duration-300 mb-1.5">
            {project.title}
          </h3>
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 5).map(tech => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
          {project.techStack.length > 5 && (
            <span className="tech-badge text-[var(--text-muted)]">+{project.techStack.length - 5}</span>
          )}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* CTA Buttons */}
        <div className="flex items-center gap-2 pt-1">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl glass border border-border hover:border-[var(--accent-purple)]/50 text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm font-medium transition-all duration-200 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github size={14} />
            GitHub
          </motion.a>
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-purple-600/80 to-cyan-600/80 hover:from-purple-600 hover:to-cyan-600 text-white text-sm font-medium transition-all duration-200 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ExternalLink size={14} />
            Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-purple-900/20 to-transparent rounded-full blur-3xl pointer-events-none" />

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
            Portfolio
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
          <span className="gradient-text">Selected Projects</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View More / Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href={`https://github.com/TanyaVaish-17`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-border hover:border-[var(--accent-purple)]/50 text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-semibold transition-all duration-300 group cursor-pointer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Layers size={16} />
            View All on GitHub
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
