import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Bartik - Smart Home Devices for Modern Living',
  description: 'Transform your home into a smart haven with Bartik\'s cutting-edge smart home devices. Experience seamless control, enhanced security, and intelligent automation.',
  generator: 'v0.app',
  keywords: ['smart home', 'home automation', 'IoT devices', 'smart devices', 'home security'],
  authors: [{ name: 'Bartik' }],
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
