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
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: ['babel', 'react', 'react-hooks', 'prettier'],
  rules: {
    semi: ['warn', 'always'],
    quotes: ['error', 'single'],
    'no-unused-vars': 'warn',
    'object-curly-spacing': [1, 'always'],
    'no-multiple-empty-lines': [2, { max: 2 }],
    'no-console': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
