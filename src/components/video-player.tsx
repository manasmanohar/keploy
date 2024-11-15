'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'

import { Dialog, DialogContent } from './ui/dialog'

interface VideoPlayerProps {
  videoId: string
  title: string
  thumbnail: string
  description?: string
}

export function VideoPlayer({ videoId, title, thumbnail }: VideoPlayerProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mx-auto w-full max-w-6xl">
      <div
        className="relative aspect-video cursor-pointer overflow-hidden"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={thumbnail}
          alt={title}
          width={720}
          height={1080}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="hover:scale:105 absolute inset-0 flex items-center justify-center transition-colors">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/50 transition-colors hover:bg-black/20">
            <Play className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="w-full max-w-screen-xl bg-black"
          aria-describedby={title}
        >
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className=""
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
