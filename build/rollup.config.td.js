// rollup.config.js
import fs from 'fs';
import path from 'path';
import vue from 'rollup-plugin-vue3';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace'; 
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import minimist from 'minimist';
// import url from '@rollup/plugin-url';
// import json from '@rollup/plugin-json';

const copyTemplate = require('./helper/copyTemplate.js');

const argv = minimist(process.argv.slice(2));

const projectRoot = path.resolve(__dirname, '..');
const projectSrc = path.resolve(__dirname, '../src');

const baseConfig = {
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
];

// UMD/IIFE shared settings: output.globals
// Refer to https://rollupjs.org/guide/en#output-globals for details
const globals = {
  // Provide global variable names to replace your external imports
  // eg. jquery: '$'
  vue: 'Vue',
};

// Customize configs for individual targets
const buildFormats = [];

const TDesignComponents = [
  path.resolve(projectSrc, 'tdesign-mobile-vue/src/progress/progress.vue'),
];

const componentFiles = [].concat(TDesignComponents);

const templPath = path.resolve(projectRoot, 'template/entry.js');

const nameCapitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

async function writeEntry() {
  await componentFiles.forEach(file => {
    const componentDir = path.dirname(file).split('/').pop();
    const componentBase = path.basename(file);
    const componentName = componentDir.split('-').map(s => nameCapitalize(s)).join('');
    
    if (fs.existsSync(file)) {
      copyTemplate(
        path.dirname(file),
        'entry.js',
        templPath,
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
          typescript({
            cacheRoot: `${require('os').tmpdir()}/.rpt2_cache`,
            // TODO: typings
            useTsconfigDeclarationDir: false,
            declarationDir: path.resolve(projectSrc, 'tdesign-mobile-vue/src/'),
          }),
          vue(baseConfig.plugins.vue),
          babel(baseConfig.plugins.babel),
          commonjs(),
          terser({
            output: {
              ecma: 5,
            },
          }),
          postcss({
            extensions: ['.css']
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
