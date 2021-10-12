import path = require('path');

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set(
      '@a',
      path.resolve(__dirname, 'src/sass/abstracts'),
      '@v',
      path.resolve(__dirname, './src/sass/vendors'),
      '@b',
      path.resolve(__dirname, './src/sass/base'),
      '@c',
      path.resolve(__dirname, './src/sass/components'),
      '@l',
      path.resolve(__dirname, './src/sass/layouts')
    );
  },
};
