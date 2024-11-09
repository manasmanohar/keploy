import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-center text-3xl font-bold text-foreground md:text-4xl lg:text-3xl">
          The page you are looking for does not exist.
        </p>
      </div>
      <p className="mt-4 text-center text-lg text-muted-foreground"></p>
      <div className="mt-4 flex w-full flex-col items-center justify-center gap-4 sm:max-w-sm sm:flex-row">
        <a href="/" className="w-full md:w-auto">
          <Button className="w-full rounded-full bg-orange-500 px-6 py-3 text-base text-background duration-300 hover:scale-105 hover:bg-orange-700">
            Home
          </Button>
        </a>
      </div>
    </div>
  )
}
