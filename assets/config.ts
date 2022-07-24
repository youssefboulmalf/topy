let baseUrl = 'http://localhost:3000'

if(process.env.BASE_URL) {
    baseUrl = process.env.BASE_URL
  }

const config = {
    baseUrl: baseUrl
}

export default config