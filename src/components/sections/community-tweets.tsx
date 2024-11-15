'use client'

import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Section } from '@/components/ui/section'
import { tweets } from 'config/tweets'
import { Verified } from 'lucide-react'
import Marquee from 'react-fast-marquee'

import { SectionHeading } from '../ui/heading'

export interface Tweet {
  id: string
  author: {
    name: string
    handle: string
    avatar: string
    verified?: boolean
  }
  content: string
  date: string
}

function TweetCard({ author, content, date }: Tweet) {
  return (
    <Card className="mx-4 w-[350px] p-6">
      <div className="flex items-center gap-3">
        <Image
          src={author.avatar}
          alt={author.name}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <div className="flex items-center gap-1">
            <p className="font-semibold">{author.name}</p>
            {author.verified &&
              Verified({ className: 'h-4 w-4 text-blue-700' })}
          </div>
          <p className="text-sm text-muted-foreground">{author.handle}</p>
        </div>
      </div>
      <p className="mt-4 text-[15px] leading-normal">{content}</p>
      <p className="mt-4 text-sm text-muted-foreground">{date}</p>
    </Card>
  )
}

export function CommunityTweets() {
  return (
    <Section>
      <SectionHeading subtext="Real developers sharing their experience">
        What the community is saying
      </SectionHeading>

      <div className="mt-8 overflow-hidden">
        <Marquee gradient speed={40} gradientWidth={100} pauseOnHover>
          {tweets.map((tweet) => (
            <TweetCard key={tweet.id} {...tweet} />
          ))}
        </Marquee>
      </div>
    </Section>
  )
}
