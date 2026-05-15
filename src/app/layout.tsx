import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tanya Vaish | Frontend Developer & Full-Stack Engineer',
  description: 'Hi, I\'m Tanya Vaish — a passionate B.Tech CSE student at KIET Group of Institutions, building full-stack web applications with React, Next.js, and modern AI integrations. Open to frontend developer internships.',
  keywords: [
    'Tanya Vaish', 'Frontend Developer', 'Full-Stack Developer', 'React Developer',
    'Next.js Developer', 'Web Developer Portfolio', 'KIET Ghaziabad', 'JavaScript Developer',
    'TypeScript', 'Internship', 'Open to Work',
  ],
  authors: [{ name: 'Tanya Vaish', url: 'https://github.com/TanyaVaish-17' }],
  creator: 'Tanya Vaish',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tanyavaish.dev',
    title: 'Tanya Vaish | Frontend Developer',
    description: 'Passionate full-stack developer building beautiful, functional web experiences.',
    siteName: 'Tanya Vaish Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tanya Vaish | Frontend Developer',
    description: 'Passionate full-stack developer building beautiful, functional web experiences.',
    creator: '@tanyavaish',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export const viewport: Viewport = {
  themeColor: '#050510',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
