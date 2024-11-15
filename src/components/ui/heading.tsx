import { cn } from '@/lib/utils'

// added heading and subtext isntead of only subtext
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  subtext?: string
}

export function SectionHeading({
  children,

  subtext,
  className,
}: HeadingProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <h1 className="my-7 text-5xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-6xl">
        {children}
      </h1>
      {subtext && (
        <h2 className="text-xl font-semibold tracking-normal text-foreground md:text-2xl lg:text-3xl">
          {subtext}
        </h2>
      )}
    </div>
  )
}
