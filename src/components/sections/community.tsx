import { siteConfig } from 'config/site'
import { Github, Slack } from 'lucide-react'

import { CTA } from '../cta-buttons'
import { SectionHeading } from '../ui/heading'

export function Community() {
  return (
    <section className="my-32 flex flex-col items-start gap-8 rounded-xl border-[0.1rem] bg-background p-4 px-4 text-start sm:p-6 lg:items-center lg:p-20 lg:text-center">
      <SectionHeading subtext="Get support from our experts">
        Join our community
      </SectionHeading>

      <CTA
        className="w-full flex-col sm:flex-row lg:items-center lg:justify-center"
        primary={{
          text: 'Join our Slack',
          href: siteConfig.links.slack,
          icon: Slack,
          iconPosition: 'left',
        }}
        secondary={{
          text: 'Contribute on GitHub',
          href: siteConfig.links.github,
          icon: Github,
          iconPosition: 'left',
        }}
      />
    </section>
  )
}
