import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface CTAButtonProps {
  text: string
  href: string
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
  variant?: 'primary' | 'secondary'
}

interface CTAProps {
  primary: CTAButtonProps
  secondary?: CTAButtonProps
  className?: string
}

const CTAButton = ({
  text,
  href,
  icon: Icon,
  iconPosition,
  variant = 'primary',
}: CTAButtonProps) => (
  <Button variant={variant} size="xl" asChild>
    <Link href={href} className="flex items-center gap-2">
      {Icon && iconPosition === 'left' && <Icon className="h-5 w-5" />}
      {text}
      {Icon && iconPosition === 'right' && <Icon className="h-5 w-5" />}
    </Link>
  </Button>
)

export function CTA({ primary, secondary, className }: CTAProps) {
  return (
    <div className={cn('flex flex-row gap-4', className)}>
      <CTAButton {...primary} variant="primary" />
      {secondary && <CTAButton {...secondary} variant="secondary" />}
    </div>
  )
}
