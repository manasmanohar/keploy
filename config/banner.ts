export interface ButtonConfig {
  text: string
  href: string
}

export interface ChallengeConfig {
  title: string
  subtitle: string
  steps: Array<{
    id: number
    text: string
    highlight?: boolean
  }>
  button: ButtonConfig
  disclaimer: string
}

export const challengeConfig: ChallengeConfig = {
  title: 'Keploy Test Challenge',
  subtitle:
    "We'll generate your API tests in minutes. If we can't, you get $100.",
  steps: [
    {
      id: 1,
      text: 'Share your backend stack',
      highlight: true,
    },
    {
      id: 2,
      text: 'Pick your toughest API',
      highlight: true,
    },
    {
      id: 3,
      text: 'Get production-ready tests or $100',
      highlight: true,
    },
  ],
  button: {
    text: 'Participate',
    href: '/challenge',
  },
  disclaimer: 'Zero commitment. Unsubscribe anytime.',
}
