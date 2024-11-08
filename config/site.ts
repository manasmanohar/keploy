export const siteConfig = {
  name: "Keploy",
  url: "https://keploy.io",
  description1:
    "Open-source platform for API testing with AI-driven test generation.",
  description2: "2 minutes to 90% test coverage!",
  links: {
    twitter: "https://x.com/Keployio",
    github: "https://github.com/keploy",
    slack:
      "https://join.slack.com/t/keploy/shared_invite/zt-2dno1yetd-Ec3el~tTwHYIHgGI0jPe7A",
    youtube: "https://www.youtube.com/channel/UC6OTg7F4o0WkmNtSoob34lg",
    linkedin: "https://www.linkedin.com/company/keploy",
  },
  githubStars: 5000,
  heroSection: {
    mainHeading: "Automate your API Tests ",
    minutesLabel: "in minutes",
    subHeading: "Save time, reduce errors, and scale faster",
    primaryButton: {
      name: "Get Started",
      href: "https://marketplace.visualstudio.com/items?itemName=Keploy.keployio",
    },
    secondaryButton: {
      name: "Open Console",
      href: "/app",
    },
  },
  headerCta: [
    {
      name: "Sign up",
      href: "/signup",
    },
    {
      name: "Open Console",
      href: "/app",
    },
  ],
}

export type SiteConfig = typeof siteConfig
