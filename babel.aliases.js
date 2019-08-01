// Workaround for babel import aliases
// eslint-disable-next-line no-undef
System.config({
  paths: {
    '@Common/*': './src/common/*',
    '@Config/*': './src/application/config/*',
    '@Grid/*': './src/grid/*',
  },
});
