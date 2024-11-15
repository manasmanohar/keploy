import { challengeConfig } from 'config/banner'
import { ArrowRight } from 'lucide-react'

import { CTA } from '../cta-buttons'
import { SectionHeading } from '../ui/heading'

export function TestChallenge() {
  return (
    <section className="my-32 flex flex-col gap-8">
      <SectionHeading subtext={challengeConfig.subtitle}>
        {challengeConfig.title}
      </SectionHeading>

      <div className="space-y-4 bg-background">
        {challengeConfig.steps.map((step) => (
          <div key={step.id} className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-medium">
              {step.id}
            </span>
            <p
              className={`text-lg ${step.highlight ? 'font-medium text-foreground' : 'text-muted-foreground'}`}
            >
              {step.text}
            </p>
          </div>
        ))}
      </div>

      <CTA
        primary={{
          text: challengeConfig.button.text,
          href: challengeConfig.button.href,
          icon: ArrowRight,
          iconPosition: 'right',
        }}
        className="my-2"
      />
      {/* <p className="mt-4 text-sm text-muted-foreground">
        {challengeConfig.disclaimer}
      </p> */}
    </section>
  )
}
