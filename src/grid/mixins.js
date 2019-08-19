const mediaQuery = screen => ({
  small: 'only screen and (min-width : 0px)',
  medium: `only screen and (min-width : ${screen.small + 1}px)`,
  large: `only screen and (min-width : ${screen.large}px)`,
  onlySmall: `only screen and (max-width : ${screen.small}px)`,
  onlyMedium: `only screen and (min-width: 640px && max-width : ${screen.large}px)`,
  onlyLarge: `only screen and (min-width : ${screen.large}px)`,
});

export const gutter = config => `
  box-sizing: border-box;
  padding-left: ${config.gutter}px;
  padding-right: ${config.gutter}px;
  @media ${mediaQuery(config.screen).onlySmall} {
    padding-left: ${config.gutterSmall}px;
    padding-right: ${config.gutterSmall}px;
  }
`;

export const negativeGutter = config => `
  margin-right: -${config.gutter}px;
  margin-left: -${config.gutter}px;
  @media ${mediaQuery(config.screen).onlySmall} {
    margin-left: -${config.gutterSmall}px;
    margin-right: -${config.gutterSmall}px;
  }
`;

export const columns = (config, breakPoint, columnNumber) => `
  @media ${mediaQuery(config.screen)[breakPoint]} {
    flex: 0 1 calc(100% * ${columnNumber} / ${config.maxColNumber});
    flex-flow: column nowrap;
    max-width: calc(100% * ${columnNumber} / ${config.maxColNumber});
  }
`;
