import {
  Cloud,
  Filter,
  Plug,
  RefreshCcw,
  ShieldCheck,
  Star,
} from 'lucide-react'

export const features = [
  {
    title: 'Record Replay API Flows',
    description:
      'Replay complex API flows as mocks and stubs for faster testing.',
    actionText: 'Explore More',
    actionUrl: '/explore/record-replay',
    icon: RefreshCcw,
    iconUrl: '',
  },
  {
    title: 'Find Duplicate Tests',
    description: 'Identify and remove redundant tests to improve coverage.',
    actionText: 'Explore More',
    actionUrl: '/explore/duplicate-tests',
    icon: Filter,
    iconUrl: '',
  },
  {
    title: 'Unified Test Coverage',
    description: 'Integrate Keploy with unit tests for seamless CI/CD gating.',
    actionText: 'Explore More',
    actionUrl: '#',
    icon: ShieldCheck,
    iconUrl: '',
  },
  {
    title: 'Zero-Config Testing',
    description: 'Run tests anywhere without setting up external services.',
    actionText: 'Explore More',
    actionUrl: '#',
    icon: Plug,
    iconUrl: '',
  },
  {
    title: 'Cloud Integration',
    description: 'Scale and test with cloud infrastructure in production.',
    actionText: 'Explore More',
    actionUrl: '#',
    icon: Cloud,
    iconUrl: '',
  },
  {
    title: 'Intelligent Test Suggestions',
    description: 'Get smart test suggestions based on real user traffic.',
    actionText: 'Explore More',
    actionUrl: '#',
    icon: Star,
    iconUrl: '',
  },
]
