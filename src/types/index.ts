export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  techStack: string[]
  githubUrl: string
  liveUrl: string
  images: string[]
  category: 'frontend' | 'fullstack' | 'backend' | 'ai' | 'other'
}

export interface Skill {
  name: string
  icon?: string
  level?: number
  category: 'frontend' | 'languages' | 'tools' | 'learning' | 'cloud'
}

export interface Achievement {
  title: string
  description: string
  icon: string
  year?: string
  link?: string
}

export interface Education {
  institution: string
  degree: string
  duration: string
  score: string
  type: 'current' | 'past'
  logo?: string
}

export interface Certification {
  title: string
  issuer: string
  year: string
  link?: string
  badgeUrl?: string
}

export interface NavItem {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
  icon: string
}
