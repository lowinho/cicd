require('dotenv').config()

export default {
  // clearMocks: true,
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ['./src'],
  collectCoverage: true,
  collectCoverageFrom: ['./src/**/*.ts'],
  coverageReporters: ['clover', 'json', 'lcov', ['text', {skipFull: true}]],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  coverageThreshold: {
    "global": {
      "branches": 40,
      "functions": 40,
      "lines": 40,
      "statements": 40
    }
  },
  setupFiles: ["dotenv/config"],
  testMatch: ['**/*.test.ts'],
}
