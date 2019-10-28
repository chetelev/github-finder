class Github {
  constructor() {
    this.client_id = '2e359f5dddb29ac88967'
    this.client_secret = 'a664bcf1f39d0c6d18f824e6d017a4742a0e6fe7'
    this.repos_count = 5
    this.repos_sort = 'created: asc'
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await profileResponse.json()
    const repos = await reposResponse.json()

    return {
      profile,
      repos
    }
  }
}