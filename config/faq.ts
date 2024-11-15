export const faqs = [
  {
    question: 'Does Keploy replace unit tests entirely?',
    answer:
      "Keploy significantly reduces the manual effort involved in writing tests—saving up to 80% of the time spent. While Keploy automates most test generation, some complex methods that aren't exposed via APIs may still require traditional unit tests.",
    actionText: 'See How Keploy Works',
    link: 'https://docs.keploy.io/',
  },
  {
    question: 'What code changes do I need to make to use Keploy?',
    answer:
      'None at all! Keploy integrates effortlessly with your existing codebase for Golang, Java, Python, and JavaScript applications—no modifications required. Just deploy, and Keploy will work seamlessly alongside your current setup.',
    actionText: 'Explore Keploy Setup',
    link: 'https://docs.keploy.io/',
  },
  {
    question: 'How do I run Keploy in my CI pipeline?',
    answer:
      'Integrating Keploy into your CI pipeline is simple. You don’t need to overhaul your existing pipeline. Keploy fits perfectly into your current test setup, enhancing your testing without requiring major changes.',
    actionText: 'Get CI Integration Guide',
    link: 'https://docs.keploy.io/',
  },
  {
    question: 'How does Keploy handle dynamic fields like timestamps or UUIDs?',
    answer:
      'Keploy automatically handles dynamic fields like timestamps and UUIDs with its advanced deduplication algorithm. Once it detects that a request has passed, Keploy replays it with identical parameters and ensures consistency in responses by ignoring variables like timestamps and UUIDs during comparison.',
    actionText: 'Explore Deduplication Features',
    link: 'https://docs.keploy.io/',
  },
]
