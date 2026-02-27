import type { Metadata } from 'next'
import { Geist, Geist_Mono, Island_Moments } from 'next/font/google'

import './globals.css'
import { CartProvider } from './context/CartContext'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })
const _islandMoments = Island_Moments({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Chuks Kitchen - Nigerian Home Cooking',
  description: 'Order authentic Nigerian dishes online with Chuks Kitchen',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased" suppressHydrationWarning>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
