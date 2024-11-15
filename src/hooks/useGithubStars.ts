import { useEffect, useState } from 'react'

export function useGithubStars(initialStars: string = '5K') {
  const [stars, setStars] = useState(initialStars)

  useEffect(() => {
    fetch('https://api.github.com/repos/keploy/keploy')
      .then((response) => response.json())
      .then((data) => {
        const count = data.stargazers_count
        const formattedCount =
          count >= 1000 ? `${Math.round(count / 1000)}K` : count.toString()
        setStars(formattedCount)
      })
      .catch(() => {}) // Ignore errors
  }, [])

  return stars
}
