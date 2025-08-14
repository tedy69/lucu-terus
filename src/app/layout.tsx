import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Lucu Terus Entertainment - Team Adventures & Memories',
    template: '%s | Lucu Terus Entertainment'
  },
  description: 'A vibrant team entertainment website showcasing our journey, activities, and memorable moments together. From go-kart racing to billiards nights, food gatherings to holiday adventures.',
  keywords: [
    'team entertainment',
    'team bonding',
    'go-kart racing',
    'billiards',
    'food gatherings',
    'team activities',
    'memories',
    'adventures',
    'friendship',
    'team building'
  ],
  authors: [{ name: 'Lucu Terus Team' }],
  creator: 'Lucu Terus Team',
  publisher: 'Lucu Terus Entertainment',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lucu-terus.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lucu-terus.vercel.app',
    title: 'Lucu Terus Entertainment - Team Adventures & Memories',
    description: 'A vibrant team entertainment website showcasing our journey, activities, and memorable moments together. From go-kart racing to billiards nights, food gatherings to holiday adventures.',
    siteName: 'Lucu Terus Entertainment',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Lucu Terus Entertainment - Team Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucu Terus Entertainment - Team Adventures & Memories',
    description: 'A vibrant team entertainment website showcasing our journey, activities, and memorable moments together.',
    images: ['/logo.png'],
    creator: '@lucuterus',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  category: 'entertainment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#eab308" />
        <meta name="color-scheme" content="dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <main role="main">
          {children}
        </main>
      </body>
    </html>
  )
}