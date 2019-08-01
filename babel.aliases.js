// Workaround for babel import aliases
// eslint-disable-next-line no-undef
System.config({
  paths: {
    '@Grid/*': './src/grid/*',
    '@Docs/*': './docs/*',
  },
});
