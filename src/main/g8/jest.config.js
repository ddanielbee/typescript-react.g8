module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      isolatedModules: true,
    },
  },
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testRegex: '(/src/.*\\.(test|spec))\\.(jsx?|tsx?)$',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/dist'],
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx'],
  coverageReporters: ['cobertura', 'text', 'html'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  transformIgnorePatterns: ['<rootDir>/src/node_modules'],
  moduleNameMapper: {
    '\\.(svg\\?asSvgCode|svg|png|jpg)$': '<rootDir>/test-setup/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/test-setup/__mocks__/styleMock.js',
  },
  modulePathIgnorePatterns: ['<rootDir>[/\\\\](dist|docs|node_modules)[/\\\\]'],
  setupFilesAfterEnv: ['./test-setup/setupJestAfterEnv.ts'],
  testEnvironment: 'jest-environment-jsdom-global',
  testURL: 'https://my-test-page/',
};
