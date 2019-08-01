module.exports = {
  verbose: true,
  moduleNameMapper: {
    '@Common/(.*)': '<rootDir>/src/client/common/$1',
    '@Config/(.*)': '<rootDir>/src/client/application/config/$1',
    '@Scenes/(.*)': '<rootDir>/src/client/scenes/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupTestFrameworkScriptFile: '<rootDir>/src/helpers/setupTests.js',
  coverageDirectory: '<rootDir>/coverage',
  testMatch: ['**/(*.)+(spec|test).js?(x)'],
};
