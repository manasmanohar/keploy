'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

import { Icons } from './icons'
import { Button } from './ui/button'

interface GithubButtonProps {
  initialStars?: string
  className?: string
}

export function GitHubButton({
  initialStars = '5K',
  className,
}: GithubButtonProps) {
  const [stars, setStars] = useState(initialStars)

  useEffect(() => {
    fetch('https://api.github.com/repos/keploy/keploy')
      .then((response) => response.json())
      .then((data) => {
        const count = data.stargazers_count
        const formattedCount =
          count >= 1000 ? `${Math.round(count / 1000)}K` : count.toString()
        setStars(formattedCount)
      })
      .catch(() => {}) // Ignore errors
  }, [])

  return (
    <TooltipProvider>
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className={cn(
              'h-[3rem] w-[7rem] rounded-xl font-heading',
              className,
            )}
            asChild
          >
            <Link
              href="https://github.com/keploy/keploy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.github />
              <span className="tracking-widest">{stars}</span>
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent
          className="text-md border-border bg-background"
          side="bottom"
        >
          <p>Star us on GitHub</p>
          <p className="text-lg text-muted-foreground">
            Join {stars} developers
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
