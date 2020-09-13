module.exports = {
  pages: {
    index: {
      entry: 'dev/serve.js',
      // template: 'dev/index.html',
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('fitTheme', '@/fit_ui/src/themes/default');
  }
}