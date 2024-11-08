"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { navConfig } from "config/navConfig"
import { siteConfig } from "config/site"
import { Menu, X } from "lucide-react"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen((prev) => !prev)
  const pathname = usePathname()

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        className="text-md rounded-full p-4"
        onClick={toggleMenu}
      >
        {isOpen ? <X /> : <Menu />}
      </Button>

      {isOpen && (
        <div className="fixed inset-x-0 z-40 mt-4 h-screen w-screen bg-background backdrop-blur-lg">
          <div className="h-full border bg-background backdrop-blur-sm">
            <div className="flex flex-col gap-5 space-y-4 py-6">
              <div className="flex flex-row justify-end gap-4 px-4">
                {siteConfig.headerCta.map((button) => (
                  <Button
                    asChild
                    key={button.name}
                    variant="outline"
                    className="text-md rounded-3xl p-4"
                    onClick={toggleMenu}
                  >
                    <Link href={button.href}>{button.name}</Link>
                  </Button>
                ))}
              </div>

              <div className="flex flex-col gap-4 px-4">
                {navConfig.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={cn(
                      "flex items-center rounded-lg px-3 py-2 text-lg text-foreground transition hover:bg-foreground/10 hover:text-foreground",
                      pathname === item.href
                        ? "text-foreground"
                        : "text-foreground/60",
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
