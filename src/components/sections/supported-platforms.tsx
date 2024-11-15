'use client'

import { frameworkIcons, languageIcons } from '@/components/icons'
import { AnimatedEntrance } from '@/components/ui/animated-entrance'
import { Section } from '@/components/ui/section'
import { cn } from '@/lib/utils'

import { SectionHeading } from '../ui/heading'

interface LogoGroupProps {
  icons: Record<string, React.ComponentType<{ className?: string }>>
  className?: string
}

function LogoGroup({ icons, className }: LogoGroupProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-6',
        className,
      )}
    >
      {Object.entries(icons).map(([name, Icon], index) => (
        <AnimatedEntrance key={name} delay={index * 0.5}>
          <div className="px-2">
            <Icon
              className={cn(
                'h-20 w-20 rounded-lg border-[0.1rem] bg-background p-4 hover:border-foreground/20 hover:bg-background/90',
                'transition-all duration-500',
                'hover:scale-110 hover:text-primary',
              )}
            />
          </div>
        </AnimatedEntrance>
      ))}
    </div>
  )
}

export function SupportedPlatforms() {
  return (
    <Section className="my-8">
      <SectionHeading subtext="Flexible, Customizable and Scalable">
        Integrations for (almost) everything
      </SectionHeading>
      <LogoGroup icons={frameworkIcons} className="my-20" />

      <div>
        <SectionHeading subtext="Native support for your development environment">
          Build in your language
        </SectionHeading>
        <LogoGroup icons={languageIcons} className="my-16" />
      </div>
    </Section>
  )
}
