'use client'

import { VideoPlayer } from '@/components/video-player'
import { videoConfig } from 'config/video'

import { AnimatedEntrance } from '../ui/animated-entrance'
import { Section } from '../ui/section'

export function ProductVideo() {
  return (
    <Section>
      <div className="my-2">
        <AnimatedEntrance delay={0.2}>
          {videoConfig.demoSection.videos.map((video) => (
            <VideoPlayer
              key={video.id}
              videoId={video.videoId}
              title={video.title}
              thumbnail={video.thumbnail}
              description={video.description}
            />
          ))}
        </AnimatedEntrance>
      </div>
    </Section>
  )
}
