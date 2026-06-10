import type { Project, Achievement, Education, Certification, NavItem } from '@/types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export const SOCIAL_LINKS = {
  github: 'https://github.com/TanyaVaish-17',
  linkedin: 'https://linkedin.com/in/tanya-vaish07',
  email: 'tanyavaish05@gmail.com',
  phone: '+91 7985884079',
}

export const TYPING_STRINGS = [
  'Full-Stack Developer',
  'Frontend Engineer',
  'UI/UX Enthusiast',
  'Open Source Contributor',
  'Problem Solver',
  'Future Startup Founder',
]

export const PROJECTS: Project[] = [
  {
    id: 'lawsetu',
    title: 'LawSetu',
    description: 'AI-powered legal documentation platform for contract drafting, document analysis, legal content generation, and professional PDF export.',
    longDescription: 'LawSetu is a full-stack AI-driven legal documentation platform that simplifies the creation and management of legal documents. Users can draft contracts, upload PDFs, images, or text files for analysis, generate legal content using AI, and export professionally formatted PDFs through a rich Markdown-based editor. The platform includes Google OAuth authentication, secure password recovery, document parsing, and a seamless workflow designed to make legal documentation faster, more accessible, and efficient.',
    techStack: ['React.js', 'Vite', 'Tailwind CSS', 'React Router', 'React Markdown', 'html2pdf.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Passport.js', 'Google OAuth', 'OpenAI API', 'pdfjs-dist'],
    githubUrl: 'https://github.com/TanyaVaish-17/LawSetu',
    liveUrl: 'https://law-setu.vercel.app/',
    category: 'fullstack',
    images: [
      '/projects/lawsetu-1.png',
      '/projects/lawsetu-2.png',
      '/projects/lawsetu-3.png',
      '/projects/lawsetu-4.png'
    ]
  },
  {
    id: 'golfgives',
    title: 'GolfGives',
    description: 'Full-stack golf charity platform that combines score tracking, subscription management, and charitable giving through an engaging community-driven experience.',
    longDescription: 'GolfGives is a full-stack golf charity platform designed to make charitable giving more engaging through golf competitions. Users can track Stableford scores, participate in monthly prize draws, manage subscriptions through Stripe, and contribute to charitable causes. The platform includes secure authentication, responsive dashboards, admin controls for winner verification and draw management, and a modern user experience built for both desktop and mobile users.',
    techStack: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Stripe', 'NextAuth.js', 'Vercel'],
    githubUrl: 'https://github.com/TanyaVaish-17/golf-charity-platform',
    liveUrl: 'https://golf-charity-platform-rosy.vercel.app/',
    category: 'fullstack',
    images: [
      '/projects/golfgives-1.png',
      '/projects/golfgives-2.png',
      '/projects/golfgives-3.png',
      '/projects/golfgives-4.png'
    ]
  },
  {
    id: 'k-click booth',
    title: 'K-Click Booth',
    description: 'Korean-style online photo booth that lets users capture, customize, and download personalized photo strips with layouts, frames, filters, and stickers.',
    longDescription: 'K-Click is a Korean-style photo booth web application that recreates the experience of modern self-photo studios online. Users can capture photos directly from their device camera, choose from multiple photo strip layouts, customize frames, apply filters, add stickers, and generate personalized photo strips. The application dynamically adjusts the countdown and number of captures based on the selected layout, delivering a seamless and interactive photo booth experience with instant downloads and a responsive user interface.',
    techStack: ['React 19', 'React Router DOM 7', 'Vite 7', 'Tailwind CSS 4', 'JavaScript', 'HTML5 Camera API', 'CSS3'],
    githubUrl: 'https://github.com/TanyaVaish-17/photo-booth',
    liveUrl: 'https://k-click-booth.vercel.app/',
    category: 'fullstack',
    images: [
      '/projects/kclick-1.png',
      '/projects/kclick-2.png',
      '/projects/kclick-3.png',
      '/projects/kclick-4.png'
    ]
  },
]

export const EDUCATION: Education[] = [
  {
    institution: 'KIET Group of Institutions, Ghaziabad',
    degree: 'B.Tech – Computer Science Engineering',
    duration: '2024 – 2028',
    score: 'CGPA: 8.89 (Till Sem III)',
    type: 'current',
  },
  {
    institution: 'Ajmani International School',
    degree: 'Class XII – CBSE',
    duration: '2022 – 2023',
    score: '93.8%',
    type: 'past',
  },
  {
    institution: 'Ajmani International School',
    degree: 'Class X – CBSE',
    duration: '2020 – 2021',
    score: '95.5%',
    type: 'past',
  },
]

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'AWS Certified Cloud Practitioner (CLF-C02)',
    issuer: 'Amazon Web Services',
    year: '2024',
    link: '#',
  },
  {
    title: 'AWS Cloud Quest: Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2024',
    link: '#',
  },
  {
    title: 'Networking Essentials',
    issuer: 'Cisco Networking Academy',
    year: '2024',
    link: '#',
  },
  {
    title: 'Getting Started with Linux Fundamentals (RH104)',
    issuer: 'Red Hat Training',
    year: '2024',
    link: '#',
  },
  {
    title: 'Introduction to NoSQL Databases',
    issuer: 'Online Certification',
    year: '2024',
    link: '#',
  },
]

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'AWS Certified Cloud Practitioner',
    description: 'Globally recognized cloud certification (CLF-C02)',
    icon: '☁️',
    year: '2024',
  },
  {
    title: 'Aspire Leaders Program',
    description: 'Selected for Harvard-affiliated global leadership program for high-potential students',
    icon: '🎓',
    year: '2024',
  },
  {
    title: 'McKinsey Forward Program',
    description: 'Selected for McKinsey & Company\'s leadership and skill-building program',
    icon: '🏆',
    year: '2024',
  },
  {
    title: '400+ DSA Problems Solved',
    description: 'Solved on LeetCode, CodeChef, and Coding Ninjas',
    icon: '💻',
    year: '2024',
  },
  {
    title: 'Pearson MePro Level 10',
    description: 'Achieved Advanced English Proficiency certification',
    icon: '📚',
    year: '2024',
  },
]

export const SKILLS_DATA = {
  frontend: [
    { name: 'React.js', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '💅' },
    { name: 'Bootstrap', icon: '🅱️' },
  ],
  languages: [
    { name: 'JavaScript', icon: '🟨' },
    { name: 'C++', icon: '⚡' },
    { name: 'C', icon: '🔵' },
    { name: 'Python', icon: '🐍' },
    { name: 'SQL', icon: '🗄️' },
  ],
  tools: [
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express.js', icon: '🚀' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Supabase', icon: '⚡' },
    { name: 'Git & GitHub', icon: '🐙' },
    { name: 'VS Code', icon: '💙' },
    { name: 'Vercel', icon: '▲' },
    { name: 'AWS', icon: '☁️' },
    { name: 'OpenAI API', icon: '🤖' },
  ],
  corecs: [
    { name: 'DSA', icon: '🧮' },
    { name: 'OOPs', icon: '🏗️' },
    { name: 'DBMS', icon: '🗄️' },
    { name: 'Computer Networks', icon: '🌐' },
    { name: 'Operating Systems', icon: '⚙️' },
  ],
}

export const STATS = [
  { value: 400, label: 'DSA Problems Solved', suffix: '+' },
  { value: 2, label: 'Projects Deployed', suffix: '+' },
  { value: 5, label: 'Certifications', suffix: '+' },
  { value: 8.89, label: 'Current CGPA', suffix: '' },
]
