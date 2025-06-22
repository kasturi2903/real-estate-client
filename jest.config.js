module.exports = {
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',  // Transform JavaScript and JSX files
    '^.+\\.scss$': 'jest-transform-stub'  // Mock SCSS files
  },
  testEnvironment: 'jsdom',  // Use jsdom for React testing
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'scss'],  // Ensure .scss files are recognized
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy'  // Mocking style imports
  }
};
