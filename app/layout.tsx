import type { Metadata } from 'next'
import './globals.css'
import { Dancing_Script } from 'next/font/google'

const dancingScript = Dancing_Script({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Street Hockey Of Wharton',
  description: 'Countdown to Street Hockey Night in America',
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