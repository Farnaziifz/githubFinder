class Github {
  constructor() {
    this.client_id = "74ce60be5362fe76c20d"
    this.client_secret = "123223287147b24b8f7d19c58c4028fedf0f782d"
  }
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await profileResponse.json()

    return {
      profile
    }
  } 
}