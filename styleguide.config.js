const path = require('path');

module.exports = {
  theme: {
    maxWidth: 1400,
  },
  title: 'React Simple Styled Component Grid',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/helpers/styleguidist-wrapper'),
  },
  sections: [
    {
      name: 'React simple styled grid',
      content: 'src/docs/grid.md',
      skipComponentsWithoutExample: true,
    },
  ],
  styleguideDir: 'docs/',
};
