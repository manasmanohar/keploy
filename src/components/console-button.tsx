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
        'max-w- h-[3rem] w-[7rem] rounded-xl font-heading',
        className,
      )}
      asChild
    >
      <Link href="https://app.keploy.io">
        <span> Console</span>
      </Link>
    </Button>
  )
}
