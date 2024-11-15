'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqs } from 'config/faq'

import { AnimatedEntrance } from '../ui/animated-entrance'
import { SectionHeading } from '../ui/heading'
import { Section } from '../ui/section'

export function FAQ() {
  return (
    <Section className="space-y-4">
      <SectionHeading>Frequently Asked Questions</SectionHeading>
      <Accordion type="single" collapsible className="w-full bg-background">
        {faqs.map((faq, index) => (
          <AnimatedEntrance
            key={index}
            viewport={{ once: true, amount: 0.3, margin: '50px 0px' }}
            delay={index * 0.35}
          >
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-start text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </AnimatedEntrance>
        ))}
      </Accordion>
    </Section>
  )
}
