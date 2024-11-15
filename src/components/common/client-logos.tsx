import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const companies = [
  { alt: 'LambdaTest', src: '/images/logos/companies/lambdatest-logo.png' },
  { alt: 'Edureka', src: '/images/logos/companies/edureka-logo.png' },
  { alt: 'Nutanix', src: '/images/logos/companies/nutanix-logo.svg' },
  { alt: 'Whatfix', src: '/images/logos/companies/whatfix-logo.png' },
  {
    alt: 'Reliance Retail',
    src: '/images/logos/companies/relianceretail-logo.png',
  },
  {
    alt: 'Maruti Suzuki',
    src: '/images/logos/companies/marutisuzuki-logo.svg',
  },
  { alt: 'Leadsquare', src: '/images/logos/companies/leadsquare-logo.png' },
  { alt: 'Pixis', src: '/images/logos/companies/pixis-logo.png' },
  { alt: 'Wednesday', src: '/images/logos/companies/wednesday-logo.svg' },
  // todo: fix below logo not rendering in production
  // { alt: 'InstaAstro', src: '/images/logos/companies/instaastro-logo.svg' },
]

export function ClientLogos() {
  return (
    <section className="mt-8 w-full">
      <p className="font-semi my-2 text-center text-lg text-muted-foreground lg:text-xl">
        Trusted by startups to Fortune 500s developer teams
      </p>
      <div className="relative min-h-[7rem]">
        // todo: pass dynamic bg-color to marquee
        <Marquee speed={20} gradient={true} gradientColor="#fcfaf3">
          {companies.map((companies) => (
            <div key={companies.alt} className="mx-8 flex-shrink-0">
              <Image
                src={companies.src}
                alt={`${companies.alt} logo`}
                className="h-24 w-48 object-contain"
                width={192}
                height={96}
                priority
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
