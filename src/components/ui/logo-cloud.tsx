'use client'

import Image from 'next/image'
import Marquee from 'react-fast-marquee'

interface LogoCloudProps {
  logos: Array<{ alt: string; src: string }>
  title?: string
  description?: string
  variant?: 'grid' | 'marquee'
}

export function LogoCloud({
  logos,
  title,
  description,
  variant = 'grid',
}: LogoCloudProps) {
  const LogoItem = ({ logo }: { logo: { alt: string; src: string } }) => (
    <div className="flex items-center justify-center px-4">
      <div className="relative h-12 w-auto">
        <Image
          src={logo.src}
          alt={logo.alt}
          width={200}
          height={48}
          className="object-contain opacity-75 transition-opacity hover:opacity-100"
          priority
        />
      </div>
    </div>
  )

  return (
    <div className="py-8">
      {title && (
        <div className="text-center">
          <h3 className="text-lg font-semibold">{title}</h3>
          {description && (
            <p className="mt-2 text-muted-foreground">{description}</p>
          )}
        </div>
      )}

      <div className="mt-8">
        {variant === 'marquee' ? (
          <Marquee
            speed={20}
            gradient
            gradientColor="background"
            className="py-4"
          >
            {logos.map((logo) => (
              <LogoItem key={logo.alt} logo={logo} />
            ))}
          </Marquee>
        ) : (
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
            {logos.map((logo) => (
              <LogoItem key={logo.alt} logo={logo} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
