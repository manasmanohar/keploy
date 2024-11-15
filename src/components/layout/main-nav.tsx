'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { navConfig, navDropdown } from 'config/navConfig'

interface MainNavProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function MainNav({ className }: MainNavProps) {
  return (
    <div
      className={
        (cn(
          'hidden gap-4 font-sans text-3xl font-normal leading-relaxed text-foreground md:flex',
        ),
        className)
      }
    >
      {navConfig.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className={cn(
            'flex items-center px-4 py-2 text-foreground transition-colors hover:text-muted-foreground/95',
            '',
          )}
        >
          {item.title}
        </Link>
      ))}

      <NavigationMenu>
        <NavigationMenuList>
          {navDropdown.map((dropdown) => (
            <NavigationMenuItem key={dropdown.title}>
              <NavigationMenuTrigger
                className={cn(
                  'flex items-center px-4 text-accent-foreground transition-colors hover:text-muted-foreground/95',
                )}
              >
                {dropdown.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="">
                <ul className="grid w-[255px]">
                  {dropdown.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      title={item.title}
                      className={cn(
                        'bg-background/95 p-4 backdrop-blur transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:shadow-md focus:bg-accent focus:text-accent-foreground supports-[backdrop-filter]:bg-background/85',
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
