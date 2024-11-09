import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const companies = [
  { alt: 'InstaAstro', src: '/images/logos/companies/InstaAstro-Logo.svg' },
  { alt: 'LambdaTest', src: '/images/logos/companies/LambdaTest-320-180.png' },
  { alt: 'Edureka', src: '/images/logos/companies/edureka_logo.png' },
  { alt: 'Nutanix', src: '/images/logos/companies/Nutanix_Logo.svg' },
  { alt: 'Whatfix', src: '/images/logos/companies/Whatfix_Logo_RGB_Color.png' },
  {
    alt: 'Reliance Retail',
    src: '/images/logos/companies/reliance-retail-logo.png',
  },
  {
    alt: 'Maruti Suzuki',
    src: '/images/logos/companies/Logo_for_Maruti_Suzuki.svg',
  },
  { alt: 'Leadsquare', src: '/images/logos/companies/leadsquare.png' },
  { alt: 'Pixis', src: '/images/logos/companies/pixis.png' },
  { alt: 'Wednesday', src: '/images/logos/companies/Wednesday_logo.svg' },
]

// TODO: Optimize logos to SVG format

export const ClientLogos = () => (
  <section className="my-16 w-full">
    <div className="relative min-h-[7rem]">
      <Marquee pauseOnHover speed={20} gradient>
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

    <p className="font-semi mt-2 text-center text-lg text-muted-foreground">
      Trusted by fast-growing companies worldwide
    </p>
  </section>
)
