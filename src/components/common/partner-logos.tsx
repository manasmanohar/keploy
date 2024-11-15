import Image from 'next/image'

const organizations = [
  { alt: 'Google Summer of Code', src: '/images/logos/organizations/gsoc.svg' },
  {
    alt: 'Cloud Native Computing Foundation',
    src: '/images/logos/organizations/cncf.svg',
  },
  {
    alt: 'Google for Startups',
    src: '/images/logos/organizations/googleForStartups.svg',
  },
  { alt: 'G2 Reviews', src: '/images/logos/organizations/g2Reviews.svg' },
]

const Logo = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex items-center justify-center">
    <Image
      src={src}
      alt={`${alt} logo`}
      className="h-24 w-48 object-contain"
      width={192}
      height={96}
      priority
    />
  </div>
)

export function PartnerLogos() {
  return (
    <section className="my-4 flex w-full flex-col items-center justify-center">
      {/* <p className="font-semi my-2 text-center text-lg text-muted-foreground lg:text-xl">
        Backed by Industry Leaders
      </p> */}
      <div className="grid w-full grid-cols-2 gap-x-2 md:grid-cols-4 md:gap-4">
        {organizations.map(({ src, alt }) => (
          <Logo key={alt} src={src} alt={alt} />
        ))}
      </div>
    </section>
  )
}
