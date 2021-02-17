const withImages = require('next-images');
const withPlugins = require('next-compose-plugins')

module.exports = {
  withImage: withImages({
    esModule: true,
  }),
  images: {
    domains: ['www.localiza.com/'],
  },
};

module.exports = withPlugins([[withImages]], nextConfig)
