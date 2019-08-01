const path = require('path');

const paths = {
  STYLES: path.resolve(__dirname, 'src/common/styles'),
  ASSETS: path.resolve(__dirname, 'src/common/assets'),
};

module.exports = {
  plugins: {
    // Enable imports
    'postcss-import': {
      path: [paths.STYLES, paths.ASSETS],
    },

    // Other config
    'postcss-mixins': {},
    'css-mqpacker': {},
    'postcss-nesting': {},

    // CSS next support
    'postcss-cssnext': {
      autoprefixer: true,
      warnForDuplicates: false,
    },
  },
};
