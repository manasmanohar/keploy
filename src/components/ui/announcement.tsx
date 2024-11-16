import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

interface AnnouncementProps {
  desktopText: string
  mobileText?: string
  href: string
}

export function Announcement({
  desktopText,
  mobileText,
  href,
}: AnnouncementProps) {
  return (
    <div className="my-4">
      <div className="hover:scale-102 md: mx-auto flex transform items-center gap-2 rounded-full border-[0.1rem] border-orange-500 p-[0.1rem] px-4 font-heading text-sm font-medium duration-300 hover:border-mascotOrange hover:shadow-md hover:shadow-mascotOrange md:p-[0.2rem] md:px-8 md:text-primary">
        <Link
          href={href}
          target="_blank"
          className="flex items-center gap-2 border-[0.1rem] border-transparent font-semibold leading-loose tracking-wide duration-300 hover:font-bold hover:text-primary/90 hover:underline lg:text-lg"
          aria-label={`Open ${desktopText} in a new tab`}
        >
          {/* Show desktop text on larger screens */}
          <span className="hidden md:inline">{desktopText}</span>
          {/* Show mobile text on small screens */}
          <span className="md:hidden">{mobileText}</span>
          <ExternalLink className="h-4 w-4 text-primary transition-all duration-200 ease-in-out hover:text-mascotOrange" />
        </Link>
      </div>
    </div>
  )
}
