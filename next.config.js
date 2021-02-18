const withImages = require('next-images');

module.exports = {
  withImage: withImages({
    esModule: true,
  }),
  images: {
    domains: ['www.localiza.com'],
  },
};
