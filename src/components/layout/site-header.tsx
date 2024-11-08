import Link from "next/link"
import { Icons } from "@/components/icons"

import { Button } from "../ui/button"
import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background py-2">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="border-bg-red-400 flex items-center">
          <Link href="/">
            <Icons.logo className="" />
          </Link>
        </div>
        <div className="hidden items-center justify-center sm:px-6 md:flex">
          <MainNav />
        </div>
        <div className="hidden items-center justify-center gap-5 md:flex">
          <Link href="/">
            <Icons.github className="h-8 w-8" aria-hidden="true" />{" "}
          </Link>

          <Button className="rounded-full md:flex">
            <p className="text-base font-bold">Console</p>
          </Button>
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
