module.exports = {
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '.*\\.(css|less|scss)$': './',
  },
  transform: {
    '^.+\\.(ts|js)x?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '/dist/',
    'node_modules/[^/]+?/(?!(es|node_modules)/)', // Ignore modules without es dir
  ],
  setupFiles: ['<rootDir>/tests/setup.js'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/tests/coverage/',
  coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/src/index.tsx', '<rootDir>/src/router.tsx'],
  moduleDirectories: ['node_modules', 'src', 'utils'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['/node_modules/'],
  globals: {
    'ts-jest': {
      tsConfigFile: './tsconfig.test.json',
    },
  },
};
