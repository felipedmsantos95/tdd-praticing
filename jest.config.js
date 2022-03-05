/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // The glob patterns Jest uses to detect test files
  testMatch: [
    "**/*.spec.ts"
  ],

};