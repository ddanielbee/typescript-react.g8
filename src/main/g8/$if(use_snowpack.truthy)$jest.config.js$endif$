module.exports = {
  ...require('@snowpack/app-scripts-react/jest.config.js')(),
  ...{
    collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx'],
    coverageReporters: ['cobertura', 'text', 'html'],
    moduleNameMapper: {
      '\\.(svg\\?asSvgCode|svg|png|jpg)$': '<rootDir>/test-setup/__mocks__/fileMock.js',
      '\\.(css|scss)$': '<rootDir>/test-setup/__mocks__/styleMock.js',
    },
    testEnvironment: 'jest-environment-jsdom-global',
    testURL: 'https://my-test-page/',
  },
};
