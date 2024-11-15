'use client'

import { painPoints } from 'config/testingPainPoints'

import { AnimatedFeatureCard } from '../cards/animated-feature-card'
import { SectionHeading } from '../ui/heading'

export function PainPoints() {
  return (
    <section className="my-4 mt-16 flex flex-col gap-5">
      <SectionHeading subtext="From test generation to dependency mocking, everything you need for reliable API testing.">
        API testing is hard. We get it.
      </SectionHeading>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {painPoints.map((point, index) => (
          <AnimatedFeatureCard
            key={point.title}
            delay={index * 0.3}
            {...point}
          />
        ))}
      </div>
    </section>
  )
}
