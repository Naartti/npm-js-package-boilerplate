const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: ['js'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/']
}
