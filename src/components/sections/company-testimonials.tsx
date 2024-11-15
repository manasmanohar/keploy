'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

import { AnimatedEntrance } from '../ui/animated-entrance'
import { SectionHeading } from '../ui/heading'

const ITEMS_PER_PAGE = 4

interface Testimonial {
  name: string
  userImage: string
  companyName: string
  title: string
  quote: string
}

export function CompanyTestimonials({
  testimonials,
}: {
  testimonials: Testimonial[]
}) {
  const [showAll, setShowAll] = useState(false)
  const displayedTestimonials = showAll
    ? testimonials
    : testimonials.slice(0, ITEMS_PER_PAGE)

  return (
    <section className="my-8">
      <SectionHeading subtext="From engineering leaders using Keploy in production">
        Why teams love Keploy
      </SectionHeading>

      <div className="my-8 grid auto-rows-fr grid-cols-1 gap-8 md:grid-cols-2">
        {displayedTestimonials.map((testimonial, index) => (
          <AnimatedEntrance
            key={testimonial.name}
            viewport={{ once: true, amount: 0.3, margin: '50px 0px' }}
            delay={index * 0.15}
          >
            <div className="group h-full rounded-lg transition-all duration-300 hover:bg-muted/50">
              <div className="flex h-full flex-col rounded-xl border-[0.1rem] border-muted-foreground/20 bg-background p-6">
                <div className="flex gap-4">
                  <Image
                    src={testimonial.userImage}
                    width={48}
                    height={48}
                    alt={testimonial.companyName}
                    className="rounded-xl border-[0.2rem] bg-muted-foreground/10"
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold text-foreground/80">
                      {testimonial.name}
                    </p>
                    <p className="text-lg text-muted-foreground/95">
                      {testimonial.title}
                      {testimonial.companyName &&
                        `, ${testimonial.companyName}`}
                    </p>
                  </div>
                </div>

                <blockquote className="mt-4 flex-grow">
                  <p className="text-lg leading-relaxed text-foreground/80">
                    {testimonial.quote}
                  </p>
                </blockquote>
              </div>
            </div>
          </AnimatedEntrance>
        ))}
      </div>

      {testimonials.length > ITEMS_PER_PAGE && (
        <div className="mt-8 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowAll(!showAll)}
            className="group"
          >
            {showAll ? 'Show Less' : 'Show More'}
            <ChevronDown
              className={cn(
                'ml-2 h-4 w-4 transition-transform duration-200',
                showAll && 'rotate-180',
              )}
            />
          </Button>
        </div>
      )}
    </section>
  )
}
