import { ArrowRight, Video } from 'lucide-react'

import { Button } from '../ui/button'
import { SectionHeading } from '../ui/heading'
import { Section } from '../ui/section'

export function FinalCTA() {
  return (
    <Section className="rounded-2xl border-[0.1rem] bg-background duration-700 hover:scale-105 md:hover:border-[0.2rem]">
      <div className="flex flex-col p-4 text-start sm:p-6 lg:items-center lg:justify-center lg:p-20 lg:text-center">
        <SectionHeading
          subtext="Your team ships faster while we handle testing.


"
        >
          Build Confident APIs.
        </SectionHeading>
        <div className="transtion-all md::justify-center mt-12 flex flex-col items-start gap-6 duration-500 sm:flex-row lg:items-center">
          <Button
            size="lg"
            className="w-full transition-transform duration-500 hover:scale-105 sm:w-auto"
          >
            Chat over Slack
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full transition-transform duration-500 hover:scale-105 sm:w-auto"
          >
            Schedule a Meet <Video className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Section>
  )
}
