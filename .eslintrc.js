module.exports = {
  settings: {
    react: {
      version: '18.2.0',
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: ['@typescript-eslint', 'babel', 'react', 'react-hooks', 'prettier'],
  rules: {
    semi: ['warn', 'always'],
    quotes: ['error', 'single'],
    'no-unused-vars': 'warn',
    'object-curly-spacing': [1, 'always'],
    'no-multiple-empty-lines': [2, { max: 2 }],
    'no-console': 'warn',
    '@typescript-eslint/no-var-requires': 0,
    'react/prop-types': 'off',
  },
};
