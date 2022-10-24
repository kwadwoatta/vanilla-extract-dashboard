const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

const fromNrwlReact = require('@nrwl/react/plugins/webpack');

function getWebpackConfig(config) {
  config = fromNrwlReact(config);

  config.plugins.push(new VanillaExtractPlugin());
  return config;
}

module.exports = getWebpackConfig;
