'use client'

import type { ComponentProps } from 'react'

import { AnimatedEntrance } from '../ui/animated-entrance'
import { FeatureCard } from './feature-card'

type AnimatedFeatureCardProps = ComponentProps<typeof FeatureCard> & {
  delay?: number
  action?: {
    text?: string
    href?: string
  }
}

export function AnimatedFeatureCard({
  delay = 0.2,
  ...props
}: AnimatedFeatureCardProps) {
  return (
    <AnimatedEntrance
      viewport={{ once: true, amount: 0.3, margin: '50px 0px' }}
      delay={delay}
    >
      <FeatureCard {...props} />
    </AnimatedEntrance>
  )
}
