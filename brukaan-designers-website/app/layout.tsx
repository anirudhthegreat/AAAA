import React from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Brukaan Designers & Associates | Interior Design Studio | Bhubaneswar',
  description: 'Transform your spaces with Brukaan Designers & Associates - Premier interior design firm in Bhubaneswar specializing in residential, commercial, and hospitality design.',
  keywords: 'interior design, Bhubaneswar, residential design, commercial design, architecture, home decor, Odisha',
  icons: {
    icon: '/logo.webp',
    apple: '/logo.webp',
  },
  metadataBase: new URL('https://brukaan-designers.com'),
  alternates: {
    canonical: 'https://brukaan-designers.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://brukaan-designers.com',
    title: 'Brukaan Designers & Associates | Interior Design Studio',
    description: 'Transform your spaces with Brukaan Designers & Associates - Premier interior design firm in Bhubaneswar',
    siteName: 'Brukaan Designers & Associates',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brukaan Designers & Associates',
    description: 'Premier interior design studio in Bhubaneswar',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
