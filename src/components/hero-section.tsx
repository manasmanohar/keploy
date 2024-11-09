import { siteConfig } from 'config/site'

import { Button } from './ui/button'

export function HeroSection() {
  const {
    mainHeading,
    minutesLabel,
    description1,
    primaryButton,
    secondaryButton,
  } = siteConfig.heroSection

  return (
    <div className="mt-24 flex flex-col items-center justify-center gap-2">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-center text-3xl font-bold text-foreground md:text-4xl lg:text-6xl">
          {mainHeading}
        </p>
        <p className="text-center text-3xl font-bold text-orange-500 md:text-4xl lg:text-6xl">
          {minutesLabel}
        </p>
      </div>
      <p className="mt-4 text-center text-lg text-muted-foreground">
        {description1}
      </p>
      <div className="mt-4 flex w-full flex-col items-center justify-center gap-4 sm:max-w-sm sm:flex-row">
        <a href={primaryButton.href} className="w-full md:w-auto">
          <Button className="w-full rounded-full bg-orange-500 px-6 py-3 text-base text-background duration-300 hover:scale-105 hover:bg-orange-500">
            {primaryButton.name}
          </Button>
        </a>
        <a href={secondaryButton.href} className="w-full md:w-auto">
          <Button className="w-full rounded-full border border-gray-700/20 bg-white px-6 py-3 text-base text-black duration-300 hover:scale-105 hover:bg-gray-100">
            {secondaryButton.name}
          </Button>
        </a>
      </div>
    </div>
  )
}
