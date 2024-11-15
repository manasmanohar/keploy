import Image from 'next/image'

interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  company: string
  userImage: string
}

export function TestimonialCard({
  quote,
  name,
  title,
  company,
  userImage,
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col gap-6 border-l-2 border-foreground/20 bg-background p-6">
      <div className="gap- flex items-center">
        <div className="relative h-10 w-10">
          <Image
            src={userImage}
            alt={`${name}'s avatar`}
            fill
            className="rounded-xl border-2 object-cover"
          />
        </div>
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
