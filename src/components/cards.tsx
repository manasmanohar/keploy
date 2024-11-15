'use server'

import Image from 'next/image'

interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  company: string
  userImage: string
}

export async function TestimonialCard({
  quote,
  name,
  title,
  company,
  userImage,
}: TestimonialCardProps) {
  return (
    <div className="border-l-2 border-foreground/20 bg-background p-6">
      <div className="flex items-center gap-3">
        <Image
          src={userImage}
          alt={name}
          width={40}
          height={40}
          className="rounded-xl border-2"
        />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">
            {title}, {company}
          </p>
        </div>
      </div>
      <blockquote className="mt-4 text-lg">{quote}</blockquote>
    </div>
  )
}
