export interface NavLink {
  title: string
  href: string
}
export interface NavDropdown {
  title: string
  items: NavLink[]
}

export const navConfig: NavLink[] = [
  { title: 'Docs', href: '/docs' },
  { title: 'Products', href: '/products' },
  { title: 'Pricing', href: '/pricing' },
  { title: 'Events', href: '/devscribe' },
]
export const navDropdown: NavDropdown[] = [
  {
    title: 'Use Cases',
    items: [
      {
        title: 'Test Data Generation',
        href: '/use-cases/test-data-generation',
      },
      {
        title: 'Test Case Generation',
        href: '/use-cases/test-case-generation',
      },
      { title: 'Code Coverage', href: '/use-cases/code-coverage' },
      { title: 'CI Testing', href: '/use-cases/ci-testing' },
      { title: 'Integration Testing', href: '/use-cases/integration-testing' },
      { title: 'API Testing', href: '/use-cases/api-testing' },
      { title: 'AI Code Generation', href: '/use-cases/ai-code-generation' },
      { title: 'Contract Testing', href: '/use-cases/contract-testing' },
    ],
  },
]
