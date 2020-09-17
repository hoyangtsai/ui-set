const packageJson = require('./package.json');
const browsers = packageJson.browserslist || ['last 4 version'];

module.exports = {
  syntax: require('postcss-scss'),
  plugins: [
    require('postcss-import')({
      filter: (filename) => {
        if (/common.+\.css$/.test(filename)) {
          return false;
        }
        return true;
      },
    }),
    require('postcss-strip-inline-comments'),
    require('postcss-assets')({}),
    require('postcss-inline-svg')({}),
    require('postcss-nested'),
    require('postcss-cssnext')({
      browsers,
      features: {
        rem: false,
      },
    }),
  ],
};
