import type { Metadata } from 'next'
import localFont from 'next/font/local'

import './globals.css'

import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Keploy',
  description: 'Open-source e2e testing toolkit',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} min-h-screen bg-background antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div vaul-drawer-wrapper="">
            <div className="relative flex min-h-screen flex-col bg-background">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
