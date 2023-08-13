import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import { getCategories } from '@/services/graphql'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trevor Wells',
  description: 'Trevor Wells\' portfolio',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const categories = await getCategories()

  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar categories={categories} />
        {children}
      </body>
    </html>
  )
}
