import { ClientLogos } from '@/components/common/client-logos'
import { PartnerLogos } from '@/components/common/partner-logos'
import { HeroSection } from '@/components/hero-section'

export default function Home() {
  return (
    <div className="flex flex-col items-center lg:mt-8">
      <div className="w-full lg:max-w-4xl lg:px-0">
        <HeroSection />
        <ClientLogos />
        <PartnerLogos />
      </div>
    </div>
  )
}
