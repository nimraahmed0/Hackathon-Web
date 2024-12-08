import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import HeaderTop from '@/Components/HeaderTop'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderTop/>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}