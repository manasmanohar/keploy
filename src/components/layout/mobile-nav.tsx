'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { navConfig } from 'config/navConfig'
import { Menu, X } from 'lucide-react'

import { ConsoleButton } from '../console-button'

interface MobileNavProps {
  className?: string
}

export function MobileNav(className: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen((prev) => !prev)
  const pathname = usePathname()

  return (
    <div className={cn('lg:hidden', className)}>
      <Button
        variant="ghost"
        className="rounded-lg p-4 text-3xl"
        onClick={toggleMenu}
      >
        {isOpen ? <X /> : <Menu />}
      </Button>

      {isOpen && (
        <div className="fixed inset-x-0 z-40 mt-[1rem] h-screen w-full backdrop-blur-lg">
          <div className="h-full bg-background backdrop-blur-sm">
            <div className="flex justify-between gap-5 space-y-4 py-6">
              <div className="flex flex-col gap-4 px-4">
                {navConfig.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={cn(
                      'flex items-center rounded-lg px-3 py-2 text-lg text-foreground transition hover:bg-foreground/10 hover:text-foreground',
                      pathname === item.href
                        ? 'text-foreground'
                        : 'text-foreground/60',
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <ConsoleButton />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
