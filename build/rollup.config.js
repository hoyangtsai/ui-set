// rollup.config.js
import fs from 'fs';
import path from 'path';
import vue from 'rollup-plugin-vue';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import minimist from 'minimist';
// import typescript from 'rollup-plugin-typescript2';

const postcssConfig = require('../postcss.config.js');

// import glob from 'glob';

const copyTemplate = require('./helper/copyTemplate.js');

// Get browserslist config and remove ie from es build targets
// const esbrowserslist = fs.readFileSync('./.browserslistrc')
//   .toString()
//   .split('\n')
//   .filter((entry) => entry && entry.substring(0, 2) !== 'ie');

const argv = minimist(process.argv.slice(2));

const projectRoot = path.resolve(__dirname, '..');
const projectSrc = path.resolve(__dirname, '../src');

const baseConfig = {
  // input: 'src/entry.js',
  plugins: {
    preVue: [
      alias({
        resolve: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.css'],
        entries: {
          '@': path.resolve(projectRoot, 'src'),
          'fitTheme': path.resolve(projectRoot, 'src/fit_ui/src/themes/default')
        },
      }),
    ],
    replace: {
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.ES_BUILD': JSON.stringify('false'),
    },
    vue: {
      css: true,
      template: {
        isProduction: false,
      },
    },
    babel: {
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
    },
  },
};

// ESM/UMD/IIFE shared settings: externals
// Refer to https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
const external = [
  // list external dependencies, exactly the way it is written in the import statement.
  // eg. 'jquery'
  'vue',
  'vue-i18n',
  'html2canvas',
];

// UMD/IIFE shared settings: output.globals
// Refer to https://rollupjs.org/guide/en#output-globals for details
const globals = {
  // Provide global variable names to replace your external imports
  // eg. jquery: '$'
  vue: 'Vue',
  'vue-i18n': 'VueI18n',
  'html2canvas': 'html2canvas'
};

// Customize configs for individual targets
const buildFormats = [];
// if (!argv.format || argv.format === 'es') {
//   const esConfig = {
//     ...baseConfig,
//     external,
//     output: {
//       file: 'dist/qr-code.esm.js',
//       format: 'esm',
//       exports: 'named',
//     },
//     plugins: [
//       replace({
//         ...baseConfig.plugins.replace,
//         'process.env.ES_BUILD': JSON.stringify('true'),
//       }),
//       ...baseConfig.plugins.preVue,
//       vue(baseConfig.plugins.vue),
//       babel({
//         ...baseConfig.plugins.babel,
//         presets: [
//           [
//             '@babel/preset-env',
//             {
//               targets: esbrowserslist,
//             },
//           ],
//         ],
//       }),
//       commonjs(),
//     ],
//   };
//   buildFormats.push(esConfig);
// }

// if (!argv.format || argv.format === 'cjs') {
//   const umdConfig = {
//     ...baseConfig,
//     external,
//     output: {
//       compact: true,
//       dir: 'dist',
//       // file: 'dist/qr-code.cjs.js',
//       entryFileNames: '[name].cjs.js',
//       format: 'cjs',
//       exports: 'named',
//       globals,
//     },
//     plugins: [
//       replace(baseConfig.plugins.replace),
//       ...baseConfig.plugins.preVue,
//       vue({
//         ...baseConfig.plugins.vue,
//         template: {
//           ...baseConfig.plugins.vue.template,
//           optimizeSSR: true,
//         },
//       }),
//       babel(baseConfig.plugins.babel),
//       commonjs(),
//     ],
//   };
//   buildFormats.push(umdConfig);
// }

const FiTUISrc = path.resolve(projectSrc, 'fit_ui/src');
const FitUIComponents = [
  path.resolve(FiTUISrc, 'components/qr-code/qr-code.vue'),
  path.resolve(FiTUISrc, 'components/dialog/dialog.vue'),
];
const mobileComponents = [
  // path.resolve(projectSrc, 'mobile/sector/sector.vue'),
  path.resolve(projectSrc, 'mobile/notice-bar/notice-bar.vue'),
  path.resolve(projectSrc, 'mobile/poster-share/poster-share.vue'),
];
// const componentFiles = glob.sync(`${FiTUISrc}/components/**/*.vue`, {
//   ignore: [
//     '**/button/*.vue',
//     '**/action-sheet*/*.vue',
//     '**/html2canvas/*.vue',
//     '**/swiper/*.vue',
//     '**/scroll-index-search/*.vue',
//     '**/scroll-view/*.vue',
//     '**/upload-image/*.vue',
//     '**/top-inform/*.vue',
//     '**/card-list/*.vue',
//     '**/page-status/*.vue',
//     '**/check-list/*.vue',
//     '**/filtrate/*.vue',
//     '**/pay-dialog/*.vue',
//     '**/loading/*.vue',
//     '**/list/*.vue',
//     '**/password/*.vue',
//     '**/form*/*.vue',
//     '**/bar-code*/*.vue',
//     '**/key-board*/*.vue',
//     '**/picker*/*.vue',
//     '**/popup*/*.vue',
//     '**/promote*/*.vue',
//     '**/quick-link*/*.vue',
//     '**/search*/*.vue',
//     '**/select*/*.vue',
//     '**/sms-input*/*.vue',
//     '**/step*/*.vue',
//   ]
// });

const componentFiles = [].concat(FitUIComponents, mobileComponents);

const templPath = path.resolve(projectRoot, 'template/entry.js');

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

async function writeEntry() {
  await componentFiles.forEach(file => {
    const componentDir = path.dirname(file).split('/').pop();
    const componentBase = path.basename(file);
    const componentName = componentDir.split('-').map(s => s.capitalize()).join('');
    
    if (fs.existsSync(file)) {
      copyTemplate(
        path.dirname(file), // output dir
        'entry.js', // output file name
        templPath, // template file path
        [
          {
            match: /{{=ComponentName}}/g,
            replace: componentName
          },
          { 
            match: /{{=ComponentPath}}/g,
            replace: `./${componentBase}`
          },
          {
            match: /{{=ComponentTagName}}/g,
            replace: `${componentName}.name`
          },
        ]
      )
    }

    const entryFile = path.dirname(file) + '/entry.js';
    if (fs.existsSync(entryFile)) {
      const unpkgConfig = {
        input: entryFile,
        ...baseConfig,
        external,
        output: {
          compact: true,
          file: `dist/${componentDir}.umd.js`,
          format: 'umd',
          exports: 'named',
          name: componentName,
          globals,
        },
        plugins: [
          replace(baseConfig.plugins.replace),
          ...baseConfig.plugins.preVue,
          vue(baseConfig.plugins.vue),
          babel(baseConfig.plugins.babel),
          commonjs(),
          terser({
            output: {
              ecma: 5,
            },
          }),
          postcss({
            extract: false,
            extensions: ['.css'],
            plugins: postcssConfig.plugins,
          }),
        ],
      };
  
      buildFormats.push(unpkgConfig);
    }
  });
}

if (!argv.format || argv.format === 'umd') {
  writeEntry();
}

// Export config
export default buildFormats;
