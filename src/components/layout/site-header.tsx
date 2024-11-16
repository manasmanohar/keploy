import Link from 'next/link'
import { Icons } from '@/components/icons'

import { ConsoleButton } from '../console-button'
import { GitHubButton } from '../github-button'
import { Container } from './container'
import { MainNav } from './main-nav'
import { MobileNav } from './mobile-nav'

export function SiteHeader() {
  return (
    <header className="sticky top-3 z-50 flex w-screen items-center font-heading">
      <div className="absolute -top-3 -z-10 w-full p-4 backdrop-blur supports-[backdrop-filter]:bg-background/85" />
      <Container>
        <div className="flex h-[3rem] items-center justify-between rounded-[1rem] border-[0.1rem] bg-background/95 p-[1.6rem] px-[0.8rem] backdrop-blur supports-[backdrop-filter]:bg-background/85 md:h-[3rem]">
          <div className="mr-6">
            <Link href="/" className="flex items-center">
              <Icons.logo className="h-[2.5rem] w-auto md:h-[3rem]" />
            </Link>
          </div>
          <MainNav className="hidden w-full items-center gap-2 px-4 text-[1.15rem] font-semibold text-foreground/10 lg:inline-flex lg:justify-between" />
          <div className="ml-4 flex items-center gap-4">
            <GitHubButton className="hidden sm:flex" />
            <ConsoleButton className="hidden lg:flex" />
            <MobileNav className="md:hidden" />
          </div>
        </div>
      </Container>
    </header>
  )
}
