'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, Code2, ArrowUp } from 'lucide-react'
import { SOCIAL_LINKS, NAV_ITEMS } from '@/lib/data'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative py-12 border-t border-border overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center">
                <Code2 size={14} className="text-white" />
              </div>
              <span className="font-display font-bold text-lg gradient-text">Tanya Vaish</span>
            </div>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-xs">
              Building modern web experiences with passion and precision. Open to internships and collaborations.
            </p>
            <div className="flex gap-2">
              {[
                { href: SOCIAL_LINKS.github, Icon: Github, label: 'GitHub' },
                { href: SOCIAL_LINKS.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                { href: `mailto:${SOCIAL_LINKS.email}`, Icon: Mail, label: 'Email' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg glass border border-border hover:border-[var(--accent-purple)]/50 text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] text-sm mb-3 font-mono uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map(item => (
                <li key={item.href}>
                  <button
                    onClick={() => document.getElementById(item.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-[var(--text-muted)] hover:text-[var(--accent-cyan)] text-sm transition-colors duration-200 cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Status */}
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] text-sm mb-3 font-mono uppercase tracking-wider">Status</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
                Available for internships
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse-slow" />
                Currently: Sem 4, KIET
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse-slow" />
                Learning: DSA & System Design
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[var(--text-muted)] text-sm flex items-center gap-1.5">
            Built with <Heart size={13} className="text-pink-500 fill-pink-500" /> using Next.js, TypeScript & Framer Motion
          </p>
          <p className="text-[var(--text-muted)] text-sm font-mono">
            © {new Date().getFullYear()} Tanya Vaish. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
