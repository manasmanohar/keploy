import Link from 'next/link'
import { cn } from '@/lib/utils'

import { Button } from './ui/button'

interface ConsoleButtonProps {
  className?: string
}
export function ConsoleButton({ className }: ConsoleButtonProps) {
  return (
    <Button
      variant="primary"
      size="sm"
      className={cn(
        'text-md h-[2.4rem] w-[7.2rem] rounded-xl font-heading',
        className,
      )}
      asChild
    >
      <Link href="https://app.keploy.io">
        <span> Get started</span>
      </Link>
    </Button>
  )
}
