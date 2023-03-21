export interface User {
  name: string
  repos_url: string
  repos: Array<{ title: string; rating: number; description: string }>
}

export interface Repository {
  title: string
  stargazers_count: number
  description: string
}