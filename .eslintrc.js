module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'eslint:recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  ignorePatterns: ['./src/assets'],
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off',
    'no-var': 2,
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    // allow jsx syntax in js files (for next.js project)
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], //should add ".ts" if typescript project
  },
};
