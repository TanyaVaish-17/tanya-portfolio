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
    description: 'AI-Powered Legal Document Assistant that drafts, previews, and exports legal contracts using OpenAI API.',
    longDescription: 'A full-stack AI web application to draft, preview, and export legal contracts (NDA, Employment, Lease) using OpenAI API. Supports document upload (PDF/image) with OCR parsing, Markdown rich editor, Google OAuth + JWT auth, and dark mode.',
    techStack: ['React.js', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'OpenAI API', 'Passport.js'],
    githubUrl: 'https://github.com/TanyaVaish-17',
    liveUrl: 'https://lawsetu.vercel.app',
    featured: true,
    category: 'fullstack',
    status: 'completed',
    imageUrl: '',
  },
  {
    id: 'golfgives',
    title: 'GolfGives',
    description: 'Full-stack subscription-based golf charity platform with Stableford score tracking and Stripe billing.',
    longDescription: 'Full-stack subscription-based golf web app to track Stableford scores, run monthly prize draws, and donate to charities. Supports Stripe billing (monthly/yearly), admin panel for draw management & winner verification, and fully responsive dark UI.',
    techStack: ['Next.js 14', 'React', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Stripe', 'TypeScript'],
    githubUrl: 'https://github.com/TanyaVaish-17',
    liveUrl: 'https://golfgives.vercel.app',
    featured: true,
    category: 'fullstack',
    status: 'completed',
    imageUrl: '',
  },
  {
    id: 'project-3',
    title: 'Your Next Project',
    description: 'Add your project description here. Showcase your skills with a compelling summary.',
    longDescription: 'Detailed description of what this project does, problems it solves, and what you learned building it.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: '#',
    liveUrl: '#',
    featured: false,
    category: 'frontend',
    status: 'planned',
    imageUrl: '',
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
    { name: 'TypeScript', icon: '🔷' },
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
  learning: [
    { name: 'DSA', icon: '🧮' },
    { name: 'System Design', icon: '🏗️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'GraphQL', icon: '◉' },
    { name: 'React Native', icon: '📱' },
  ],
}

export const STATS = [
  { value: 400, label: 'DSA Problems Solved', suffix: '+' },
  { value: 2, label: 'Projects Deployed', suffix: '+' },
  { value: 5, label: 'Certifications', suffix: '+' },
  { value: 8.89, label: 'Current CGPA', suffix: '' },
]
