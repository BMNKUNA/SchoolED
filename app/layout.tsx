import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import WhatsAppButton from '@/components/whatsapp-button'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SchoolED',
  description: 'Empowering Education Through Quality Services', 
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1e40af',
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
      <body className={inter.className}>
        <div className="pb-[calc(4.5rem+env(safe-area-inset-bottom))]">
          {children}
        </div>
        <WhatsAppButton />
      </body>
    </html>
  )
}
