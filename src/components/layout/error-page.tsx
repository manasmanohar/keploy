import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ErrorPageProps {
  code?: string | number
  title?: string
  description?: string
  showHomeButton?: boolean
  showBackButton?: boolean
  additionalButtons?: {
    text: string
    href: string
    variant?: 'default' | 'primary' | 'secondary'
  }[]
  className?: string
}

export function ErrorPage({
  code = '404',
  title = 'Page not found',
  description = "The page you're looking for doesn't exist or has been moved.",
  showHomeButton = true,
  showBackButton = false,
  additionalButtons = [],
  className,
}: ErrorPageProps) {
  return (
    <main
      className={cn(
        'flex min-h-[50vh] flex-col items-center justify-center',
        className,
      )}
    >
      <div className="container flex max-w-4xl flex-col items-center gap-8 text-center">
        <div className="space-y-4">
          <h1 className="bg-gradient-to-r from-foreground/80 to-foreground bg-clip-text text-8xl font-bold text-transparent">
            {code}
          </h1>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {title}
          </h2>
          {description && (
            <p className="max-w-xs text-muted-foreground sm:max-w-none">
              {description}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          {showHomeButton && (
            <Button asChild variant="primary">
              <Link href="/">Back to Home</Link>
            </Button>
          )}

          {showBackButton && (
            <Button variant="secondary" onClick={() => window.history.back()}>
              Go Back
            </Button>
          )}

          {additionalButtons.map((button, index) => (
            <Button key={index} asChild variant={button.variant || 'secondary'}>
              <Link href={button.href}>{button.text}</Link>
            </Button>
          ))}
        </div>
      </div>
    </main>
  )
}
