import type { Metadata } from 'next'
import './globals.css'
import { Dancing_Script } from 'next/font/google'

const dancingScript = Dancing_Script({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Street Hockey Of Wharton',
  description: 'The official home of Street Hockey Night in America - showcasing past tournaments and collecting interest for the next event!',
  icons: {
    icon: '/quaker qup logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}