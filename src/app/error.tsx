'use client'

import { ErrorPage } from '@/components/layout/error-page'

export default function Error() {
  return (
    <ErrorPage
      code="500"
      title="Something went wrong"
      description="Our servers encountered an error. Please try again later."
      showBackButton={true}
    />
  )
}
