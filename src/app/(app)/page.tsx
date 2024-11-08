import { Button } from "@/components/ui/button"
import { siteConfig } from "config/site"

export default function Home() {
  const { mainHeading, primaryButton, secondaryButton, minutesLabel } =
    siteConfig.heroSection

  return (
    <div className="mt-24 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-center text-3xl font-bold text-foreground md:text-4xl lg:text-6xl">
          {mainHeading}
        </p>
        <p className="text-center text-3xl font-bold text-foreground md:text-4xl lg:text-6xl">
          {minutesLabel}
        </p>
      </div>
      <div className="mt-4 flex flex-col items-center">
        <p className="max-w-3xl text-center text-lg text-muted-foreground">
          {siteConfig.description1}
        </p>
      </div>
      <div className="mt-4 flex w-full flex-col items-center justify-center gap-4 px-4 md:flex-row">
        <a href={primaryButton.href} className="w-full md:w-auto">
          <Button className="w-full rounded-full bg-orange-400 px-6 py-3 text-base text-background duration-300 hover:scale-105 hover:bg-orange-500">
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
