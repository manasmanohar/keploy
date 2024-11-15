import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoGridProps {
  items: Array<{ alt: string; src: string }>
  columns?: { sm?: number; md?: number; lg?: number }
}

export function LogoGrids({
  items,
  columns = { sm: 2, md: 3, lg: 4 },
}: LogoGridProps) {
  return (
    <div
      className={cn(
        'grid gap-4',
        `grid-cols-${columns.sm}`,
        `grid-cols-${columns.md}`,
        `grid-cols-${columns.lg}`,
      )}
    >
      {items.map((item) => (
        <div key={item.alt} className="flex items-center justify-center">
          <Image
            src={item.alt}
            alt={item.alt}
            width={200}
            height={200}
            className="h-12 w-auto object-contain"
          />
        </div>
      ))}
    </div>
  )
}
