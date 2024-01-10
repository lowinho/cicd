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
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": 80
    }
  },
  setupFiles: ["dotenv/config"],
  testMatch: ['**/*.test.ts'],
}
