import {
  Cpu,
  EyeOff,
  FileText,
  GitPullRequest,
  HardDrive,
  Search,
} from 'lucide-react'

export const painPoints = [
  {
    title: 'Invisible Network Calls',
    description: 'Untracked API calls make debugging impossible in production.',
    actionText: 'Learn More',
    actionUrl: 'https://keploy.io/docs/',
    icon: EyeOff,
  },
  {
    title: 'Manual Testing Burden',
    description:
      'Writing and maintaining tests wastes valuable development time.',
    actionText: 'Learn More',
    actionUrl: '#',
    icon: FileText,
  },
  {
    title: 'Performance Bottlenecks',
    description: 'Inefficient code paths create hidden system-wide slowdowns.',
    actionText: 'Learn More',
    actionUrl: '#',
    icon: Cpu,
  },
  {
    title: 'Dependency Chaos',
    description: 'Managing mocks and stubs becomes an unscalable nightmare.',
    actionText: 'Learn More',
    actionUrl: '#',
    icon: GitPullRequest,
  },
  {
    title: 'Production Bug Hunt',
    description:
      'Recreating production issues locally is a frustrating guessing game.',
    actionText: 'Learn More',
    actionUrl: '#',
    icon: Search,
  },
  {
    title: 'Environment Sprawl',
    description:
      'Multiple test environments lead to inconsistent, brittle tests.',
    actionText: 'Learn More',
    actionUrl: '#',
    icon: HardDrive,
  },
]
