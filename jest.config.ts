require('dotenv').config()

export default {
  // clearMocks: true,
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ['./src'],
  collectCoverage: true,
  collectCoverageFrom: ['./src/**/*.ts'],
  coverageReporters: ["json", "lcov", "text", "clover"],
  coverageDirectory: 'coverage',
  // coverageProvider: 'v8',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  setupFiles: ["dotenv/config"],
  testMatch: ['**/*.test.ts'],
}
