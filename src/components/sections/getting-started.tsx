'use client'

import { CodeBlock } from '@/components/ui/code-block'
import { gettingStartedConfig } from 'config/gettingStarted'

import { AnimatedEntrance } from '../ui/animated-entrance'
import { SectionHeading } from '../ui/heading'
import { Section } from '../ui/section'

export function GettingStarted() {
  return (
    <Section>
      <SectionHeading subtext={gettingStartedConfig.subtitle}>
        {gettingStartedConfig.title}
      </SectionHeading>

      <div className="my-16 space-y-8">
        {gettingStartedConfig.steps.map((step) => (
          <AnimatedEntrance key={step.id} delay={step.id * 0.1}>
            <div className="group min-h-[100px] rounded-lg border bg-background p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {step.id}
                </div>
                <h3 className="text-2xl font-semibold">{step.title}</h3>
              </div>
              <p className="my-4 text-xl text-muted-foreground">
                {step.description}
              </p>
              <CodeBlock code={step.code} language={step.codeLanguage} />
            </div>
          </AnimatedEntrance>
        ))}
      </div>
    </Section>
  )
}
