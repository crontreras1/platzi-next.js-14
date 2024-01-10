'use client' 
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from 'app/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log('Holi, mundillo Layout ;)')
  return (
    <html lang="en">
      <Header />

      <body className={inter.className}>
        { children }
      </body>
    </html>
  )
}
