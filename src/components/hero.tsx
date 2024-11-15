import { CTA } from '@/components/cta-buttons'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'

interface HeroDescriptionProps {
  children: React.ReactNode
  className?: string
}

export function HeroDescription({ children, className }: HeroDescriptionProps) {
  return (
    <p
      className={cn(
        'mt-4 max-w-[42rem] text-balance text-lg text-muted-foreground sm:text-xl',
        className,
      )}
    >
      {children}
    </p>
  )
}

interface HeroActionsProps {
  primary?: {
    text: string
    href: string
  }
  secondary?: {
    text: string
    href: string
  }
  className?: string
}

export function HeroActions({
  primary,
  secondary,
  className,
}: HeroActionsProps) {
  return (
    <div className={cn('mt-8 flex flex-col gap-4 sm:flex-row', className)}>
      {primary && (
        <CTA
          primary={{
            text: primary.text,
            href: primary.href,
            icon: ChevronRight,
            iconPosition: 'right',
          }}
        />
      )}
      {secondary && !primary && (
        <CTA
          primary={{
            text: secondary.text,
            href: secondary.href,
          }}
        />
      )}
    </div>
  )
}
