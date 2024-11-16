import Link from 'next/link'
import { footerConfig } from 'config/footer'

import { Container } from '../container'
import { Icons, type IconKey } from '../icons'

export function SiteFooter() {
  return (
    <Container className="bg-background">
      <footer className="border-t lg:mx-4">
        <div className="mx-auto max-w-screen-xl px-4 pt-8 sm:px-6 lg:-mx-4 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {footerConfig.columns.map((column, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-base font-medium">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground transition-colors hover:text-foreground md:text-lg"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="flex items-end gap-8">
              {footerConfig.socialLinks.map((social) => {
                const Icon = Icons[social.icon as IconKey]
                return Icon ? (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="md:h-8 md:w-8" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                ) : null
              })}
            </div>
          </div>
        </div>
        <div className="my-8 flex w-full flex-col items-center justify-between border-t pt-4 sm:flex-row">
          <p className="p-4 text-sm text-muted-foreground">
            {footerConfig.copyright}
          </p>
        </div>
      </footer>
    </Container>
  )
}
