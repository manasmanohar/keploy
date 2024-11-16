interface PageLayoutProps {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="mx-auto w-full max-w-screen-lg px-4 py-8 sm:px-8 lg:px-10">
      {children}
    </div>
  )
}
