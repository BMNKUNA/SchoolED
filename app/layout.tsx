import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eluthandweni Clinic',
  description: 'Quality Healthcare for All', 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Link to favicon */}
        <link rel="icon" href="/images/logo.jpg" type="image/jpeg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
