import type { Metadata } from 'next'
import { Toaster } from 'sonner'

import './globals.css'

import { Inter, Manrope } from 'next/font/google'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})
export const metadata: Metadata = {
  title: 'Keploy | Open Source Stubs and API Test Generator for Developer',
  keywords:
    'Integration testing, e2e Testing, ai testing, Unit Testing, API Testing, open source ai testing tool, Service Mocking, Dependency Mocking',
  description:
    'Keploy is AI based test case and stubs/mocks generator for integration and unit testing. 90% test coverage in minutes with open source testing tool',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light ${inter.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
