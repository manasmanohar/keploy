'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { navConfig, navDropdown } from 'config/navConfig'

export function MainNav() {
  const pathname = usePathname()
  return (
    <div className="hidden items-center rounded-full border-2 border-gray-400/20 font-medium md:flex">
      {navConfig.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className={cn(
            'flex items-center rounded-full px-4 py-2 transition-colors hover:scale-105 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            pathname === item.href ? 'text-foreground' : 'text-foreground/60',
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
                  'flex-shrink-0 rounded-full transition-colors hover:scale-105 hover:text-foreground/80',
                  pathname === dropdown.title
                    ? 'text-foreground'
                    : 'text-foreground/60',
                )}
              >
                <p> {dropdown.title}</p>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="">
                <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[250px]">
                  {dropdown.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      title={item.title}
                      className={cn(
                        'block transform rounded-md px-2 py-1 transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-accent-foreground hover:shadow-md focus:bg-accent focus:text-accent-foreground',
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
