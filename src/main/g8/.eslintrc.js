module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  rules: {
    // Some sensible defaults
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'import/extensions': 'off',
    'import/order': 'off',
    'import/no-cycle': 'off',
    'import/no-unresolved': 'off', // Necessary to use typescript paths correctly
    'react/prop-types': 'off', // Not Necessary when using typescript
    'no-restricted-globals': 'off',
    '@typescript-eslint/no-explicit-any': 'off', // Any is used in typeguards
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};
