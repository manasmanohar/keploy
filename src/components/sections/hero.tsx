'use client'

import { CTA } from '@/components/cta-buttons'
import { useConsoleEasterEgg } from '@/hooks/useConsoleEasterEgg'
import { announcementConfig } from 'config/announcement'
import { siteConfig } from 'config/site'
import { ChevronRight } from 'lucide-react'

import { AnimatedEntrance } from '../ui/animated-entrance'
import { Announcement } from '../ui/announcement'

export function HeroSection() {
  const { primaryButton, secondaryButton } = siteConfig.heroSection
  const { desktopText, mobileText, href } = announcementConfig.hero
  useConsoleEasterEgg()
  return (
    <section>
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <AnimatedEntrance delay={0}>
        <div className="mt-12 flex flex-col items-center justify-center gap-2 font-heading lg:mt-12">
          <div className="relative flex max-w-screen-lg flex-col items-center justify-center px-4 text-center">
            <div className="w-full">
              <h1 className="text-balance font-heading text-foreground">
                <span className="block text-[clamp(2rem,5vw,5.5rem)] font-bold leading-[1.1]">
                  Keploy is the better way
                  <span className="whitespace-nowrap"> to test APIs</span>
                </span>
              </h1>
            </div>

            <div className="mx-auto">
              <p className="leading[-1.5px] font-400 text-sans my-4 text-center font-normal leading-relaxed tracking-tight text-foreground/60 md:text-[2rem]">
                Record real time API traffic to generate intelligent test suites{' '}
                <br />
                with built-in mocks and stubs, running anywhere without
                dependencies.
              </p>
            </div>
          </div>
          <Announcement
            desktopText={desktopText}
            mobileText={mobileText}
            href={href}
          />
          <CTA
            primary={{
              text: primaryButton.name,
              href: primaryButton.href,
            }}
            secondary={{
              text: secondaryButton.name,
              href: secondaryButton.href,
              icon: ChevronRight,
              iconPosition: 'right',
            }}
            className="my-2 max-w-[145px] flex-col text-start sm:max-w-sm sm:flex-row"
          />
        </div>{' '}
      </AnimatedEntrance>
    </section>
  )
}
