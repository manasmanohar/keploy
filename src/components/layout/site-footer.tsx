export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border/40 bg-background px-8 dark:border-border lg:px-24">
      <footer className="w-full border-t border-border/40 bg-background dark:border-border"></footer>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center py-2 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground">
          &copy; Keploy Inc {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
