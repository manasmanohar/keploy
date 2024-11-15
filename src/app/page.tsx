import { ClientLogos } from '@/components/common/client-logos'
import { PageLayout } from '@/components/layout/page-layout'
import { TestChallenge } from '@/components/sections/challenge'
import { Community } from '@/components/sections/community'
import { CompanyTestimonials } from '@/components/sections/company-testimonials'
import { FAQ } from '@/components/sections/faq'
import { FeatureSection } from '@/components/sections/features'
import { FinalCTA } from '@/components/sections/final-cta'
import { GettingStarted } from '@/components/sections/getting-started'
import { HeroSection } from '@/components/sections/hero'
import { PainPoints } from '@/components/sections/painpoints'
import { ProductVideo } from '@/components/sections/product-video'
import { SupportedPlatforms } from '@/components/sections/supported-platforms'
import { companyTestimonials } from 'config/companyTestimonials'

// import { CommunityTweets } from '@/components/sections/community-tweets'
// import { PartnerLogos } from '@/components/common/partner-logos'

export default function Home() {
  return (
    <PageLayout>
      <div className="flex flex-col items-center font-heading lg:mt-8">
        <div className="w-full">
          <HeroSection />
          <ProductVideo />
          <ClientLogos />
          <PainPoints />
          <FeatureSection />
          <CompanyTestimonials testimonials={companyTestimonials} />
          <SupportedPlatforms />
          <GettingStarted />
          <FAQ />
          <TestChallenge />
          <Community />
          <FinalCTA />
          {/* <CommunityTweets /> */}
          {/* <PartnerLogos /> */}
        </div>
      </div>
    </PageLayout>
  )
}
