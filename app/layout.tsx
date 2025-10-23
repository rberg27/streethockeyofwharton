import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Street Hockey of Wharton',
  description: 'Countdown to Playoff Season',
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