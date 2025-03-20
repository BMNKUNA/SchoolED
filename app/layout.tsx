import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SchoolED',
  description: 'Empowering Education Through Quality Services', 
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
        <link rel="icon" href="/images/schoolED.png" type="image/png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
