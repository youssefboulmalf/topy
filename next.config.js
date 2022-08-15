const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['firebasestorage.googleapis.com', 'lh3.googleusercontent.com', 'media-cdn.tripadvisor.com'],
  },
}