import { ErrorPage } from '@/components/layout/error-page'

export default function NotFound() {
  return (
    <ErrorPage
      additionalButtons={[
        {
          text: 'View Documentation',
          href: 'https://docs.keploy.io',
          variant: 'secondary',
        },
      ]}
    />
  )
}
