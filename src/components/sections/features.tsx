'use client'

import { features } from 'config/featureSections'

import { AnimatedFeatureCard } from '../cards/animated-feature-card'
import { SectionHeading } from '../ui/heading'

export function FeatureSection() {
  return (
    <section className="flex flex-col gap-8">
      <SectionHeading
        subtext="Empower your team with end-to-end automation that turns testing challenges into advantages.
"
      >
        Enterprise API Testing, Automated
      </SectionHeading>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <AnimatedFeatureCard
            key={feature.title}
            delay={index * 0.3}
            {...feature}
          />
        ))}
      </div>
    </section>
  )
}
