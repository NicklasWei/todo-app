module.exports = {
  chainWebpack: (config) => {
    config.module.rule('eslint').use('eslint-loader').options({
      fix: true,
    });
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', 'ts', '.vue', '.json', '.scss'],
    },
  },
};
