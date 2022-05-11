const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'next', 'next/core-web-vitals'],
  rules: {
    'prettier/prettier': ERROR,
    'react/react-in-jsx-scope': OFF,
    'react/prop-types': OFF,
    'react/no-unescaped-entities': OFF,
    'no-console': OFF,
    'no-unused-vars': WARN,
    'no-var': WARN,
    'no-plusplus': OFF,
    'global-require': OFF,
    'prefer-const': ERROR,
    'jsx-a11y/anchor-is-valid': OFF,
  },
}
