'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ArrowRight, Sparkles, ExternalLink } from 'lucide-react'
import { TYPING_STRINGS, SOCIAL_LINKS } from '@/lib/data'

const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

function TypingEffect() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const current = TYPING_STRINGS[currentIndex]
    const speed = isDeleting ? 40 : 80
    const pauseAtFull = !isDeleting && charIndex === current.length ? 1800 : 0
    const pauseAtEmpty = isDeleting && charIndex === 0 ? 400 : 0

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < current.length) {
        setDisplayText(current.slice(0, charIndex + 1))
        setCharIndex(prev => prev + 1)
      } else if (!isDeleting && charIndex === current.length && !pauseAtFull) {
        setTimeout(() => setIsDeleting(true), 1800)
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(current.slice(0, charIndex - 1))
        setCharIndex(prev => prev - 1)
      } else if (isDeleting && charIndex === 0 && !pauseAtEmpty) {
        setTimeout(() => {
          setIsDeleting(false)
          setCurrentIndex(prev => (prev + 1) % TYPING_STRINGS.length)
        }, 400)
      }
    }, pauseAtFull || pauseAtEmpty || speed)

    return () => clearTimeout(timeout)
  }, [currentIndex, charIndex, isDeleting])

  return (
    <span className="gradient-text-cyan font-mono">
      {displayText}
      <span className="animate-cursor-blink ml-0.5 inline-block w-0.5 h-[1em] bg-cyan-400 align-middle" />
    </span>
  )
}

function FloatingOrb({ delay = 0, size = 300, color = 'purple', x = 0, y = 0 }: {
  delay?: number; size?: number; color?: string; x?: number; y?: number
}) {
  const colors = {
    purple: 'from-purple-600/20 to-purple-800/5',
    cyan: 'from-cyan-500/20 to-cyan-700/5',
    pink: 'from-pink-600/15 to-pink-800/5',
  }

  return (
    <motion.div
      className={`absolute rounded-full bg-gradient-radial ${colors[color as keyof typeof colors]} blur-3xl pointer-events-none`}
      style={{ width: size, height: size, left: `${x}%`, top: `${y}%` }}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -30, 20, 0],
        scale: [1, 1.1, 0.95, 1],
      }}
      transition={{ duration: 12, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
  )
}

function AvatarCard() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-100, 100], [8, -8])
  const rotateY = useTransform(mouseX, [-100, 100], [-8, 8])
  const ref = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-72 h-72 md:w-80 md:h-80 cursor-pointer"
    >
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/40 via-cyan-500/20 to-pink-600/30 animate-spin-slow blur-sm" />
      
      {/* Main card */}
      <div className="relative m-2 h-[calc(100%-16px)] rounded-2xl glass border border-purple-500/30 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-bg-secondary to-cyan-900/30" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-bg opacity-30" />

        {/* Avatar placeholder */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 flex items-center justify-center text-5xl font-display font-bold text-white glow-purple">
            TV
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 opacity-0 hover:opacity-30 transition-opacity duration-300" />
          </div>
          <div className="text-center px-4">
            <p className="font-display font-bold text-xl text-[var(--text-primary)]">Tanya Vaish</p>
            <p className="text-[var(--text-secondary)] text-sm font-mono mt-1">{'<full-stack dev />'}</p>
          </div>
        </div>

        {/* Floating badges */}
        <motion.div
          className="absolute top-3 right-3 glass px-2.5 py-1 rounded-lg border border-green-500/30 text-green-400 text-xs font-mono flex items-center gap-1.5"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Open to Work
        </motion.div>

        <motion.div
          className="absolute bottom-3 left-3 glass px-2.5 py-1 rounded-lg border border-cyan-500/30 text-cyan-400 text-xs font-mono"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          ⚡ 8.89 CGPA
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Floating Orbs */}
      <FloatingOrb color="purple" size={500} x={-10} y={-10} delay={0} />
      <FloatingOrb color="cyan" size={400} x={60} y={30} delay={2} />
      <FloatingOrb color="pink" size={350} x={80} y={60} delay={4} />
      
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Radial fade overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[var(--bg-primary)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <motion.div
          variants={CONTAINER_VARIANTS}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          {/* Greeting badge */}
          <motion.div variants={ITEM_VARIANTS}>
            <div className="inline-flex items-center gap-2 glass border border-purple-500/30 rounded-full px-4 py-2 text-sm">
              <Sparkles size={14} className="text-[var(--accent-cyan)]" />
              <span className="text-[var(--text-secondary)]">Hey there! 👋 I&apos;m</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.div variants={ITEM_VARIANTS}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight">
              <span className="text-[var(--text-primary)] block">Tanya</span>
              <span className="gradient-text block">Vaish</span>
            </h1>
          </motion.div>

          {/* Typing role */}
          <motion.div variants={ITEM_VARIANTS}>
            <div className="flex items-center gap-3 text-xl md:text-2xl font-semibold">
              <span className="text-[var(--text-secondary)]">I&apos;m a</span>
              <TypingEffect />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={ITEM_VARIANTS}
            className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed max-w-lg font-body"
          >
            B.Tech CSE student at{' '}
            <span className="text-[var(--accent-cyan)] font-medium">KIET, Ghaziabad</span>{' '}
            crafting{' '}
            <span className="text-[var(--text-primary)] font-medium">premium web experiences</span>{' '}
            with React, Next.js & AI. Building products that matter — one commit at a time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={ITEM_VARIANTS} className="flex flex-wrap gap-3">
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold btn-shimmer hover:shadow-glow-md transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download="Tanya_Vaish_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-border hover:border-[var(--accent-purple)]/50 text-[var(--text-primary)] font-semibold hover:shadow-glow-sm transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={16} className="text-[var(--accent-cyan)]" />
              Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={ITEM_VARIANTS} className="flex items-center gap-3">
            <span className="text-[var(--text-muted)] text-sm">Find me on</span>
            <div className="h-px w-8 bg-border" />
            <div className="flex gap-2">
              {[
                { href: SOCIAL_LINKS.github, Icon: Github, label: 'GitHub' },
                { href: SOCIAL_LINKS.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                { href: `mailto:${SOCIAL_LINKS.email}`, Icon: Mail, label: 'Email' },
              ].map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-lg glass border border-border hover:border-[var(--accent-purple)]/50 text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] hover:shadow-glow-sm transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Avatar Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex justify-center lg:justify-end"
        >
          <AvatarCard />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)]"
      >
        <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
        <motion.div
          className="w-0.5 h-10 rounded-full bg-gradient-to-b from-transparent via-[var(--accent-purple)] to-transparent"
          animate={{ scaleY: [0, 1, 0], y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
