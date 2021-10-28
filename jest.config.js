module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  moduleFileExtensions: ['js', 'ts', 'vue'],
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testEnvironment: 'jsdom',
};
