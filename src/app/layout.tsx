import './globals.css'
import type { Metadata } from 'next'
import { Special_Elite, VT323 } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const special_elite = Special_Elite({
  weight: '400',
  subsets: ['latin'],
})

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
})

const fonts = [special_elite.className, vt323.className]

export const metadata: Metadata = {
  title: 'trevorwells',
  description: 'portfolio - trevor wells',
}

export default async function RootLayout({ children, }: { children: React.ReactNode}) {
  return (
    <html lang="en" className={special_elite.className}>
      <body className='classic'>
        <NavBar fonts={fonts} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
