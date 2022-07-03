const { pathsToModuleNameMapper } = require('ts-jest');

const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  coverageDirectory: '__tests__/coverage',
  coverageProvider: 'v8',
  coverageReporters: ['text', 'lcov'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>',
  }),
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.js'],
  transform: { '.(js|jsx|ts|tsx)': 'babel-jest', '^.+\\.js$': 'babel-jest' },
  transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$', '/.vscode/'],
};
