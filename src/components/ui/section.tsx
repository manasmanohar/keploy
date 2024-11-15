import { cn } from '@/lib/utils'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  containerSize?: 'sm' | 'default' | 'lg'
}

const containerSizes = {
  sm: 'max-w-4xl',
  default: 'max-w-screen-xl',
  lg: 'max-w-8xl',
} as const

type ContainerSizeKey = keyof typeof containerSizes

export function Section({
  children,
  containerSize = 'default',
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn('my-16 w-full md:my-24 lg:my-32', className)}
      {...props}
    >
      <div
        className={cn(
          'mx-auto',
          containerSizes[containerSize as ContainerSizeKey],
        )}
      >
        {children}
      </div>
    </section>
  )
}
