import Link from 'next/link'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  title: string
  description: string
  icon?: LucideIcon
  href?: string
  className?: string
  actionText?: string
  actionUrl?: string
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  href,
  className,
  actionText,
}: FeatureCardProps) {
  const cardClasses = cn(
    'group relative rounded-lg border-foreground/20 bg-background p-2',
    'transition-all duration-300 ',
    'h-full',

    href && 'cursor-pointer',
    className,
  )

  const content = (
    <div className="flex h-full flex-col">
      <div className="flex gap-4">
        {Icon && (
          <div className="shrink-0 pt-1">
            <Icon className="h-6 w-6 text-primary transition-colors" />
          </div>
        )}
        <div className="flex flex-1 flex-col">
          <h3 className="text-2xl font-semibold transition-colors">{title}</h3>
          <p className="mt-2 text-xl leading-relaxed text-muted-foreground">
            {description}
          </p>
          {actionText && (
            <div className="mt-auto pt-6">
              <p className="font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                {actionText} →
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )

  return href ? (
    <Link href={href} className={cardClasses}>
      {content}
    </Link>
  ) : (
    <div className={cardClasses}>{content}</div>
  )
}
