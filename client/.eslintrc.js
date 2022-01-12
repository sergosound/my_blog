// eslint-disable-next-line no-undef

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['prettier', 'eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {},
  ignorePatterns: ['./node_modules/**/*.js'],
};
