import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'

interface AppLayoutProps {
  children: React.ReactNode
}
export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div data-wrapper="" className="border-border/40 dark:border-border">
      <div className="relative mx-auto flex min-h-screen w-full flex-col">
        <SiteHeader />
        <main className="flex-1">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-24">
            {children}
          </div>
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}
