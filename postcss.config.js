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
    require('postcss-assets')({}),
    require('postcss-preset-env')({ 
      /* use stage 3 features + css nesting rules */
      stage: 3,
      features: {
        'nesting-rules': true
      }
     }),
  ],
};
