// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: [
    'expo',
    'prettier',
    'eslint:recommended', // Standard JavaScript best practices
    'plugin:react/recommended', // Best practices for React
    'plugin:@typescript-eslint/recommended', // TypeScript-specific rules
  ],
  plugins: ['prettier', `@typescript-eslint`, `react`],
  parser: '@typescript-eslint/parser', // TypeScript parser
  parserOptions: {
    ecmaVersion: 2021, // Allows ECMAScript 2021 syntax
    sourceType: 'module', // Enables the use of imports
    ecmaFeatures: {
      jsx: true, // Enables JSX for React
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 'off', // Disable prop-types since TypeScript is used
    'react/react-in-jsx-scope': 'off', // No need for `React` import in React 17+
    'padding-line-between-statements': [
      // Blank line rules for readability
      'error',
      { blankLine: 'always', prev: '*', next: ['return', 'function', 'class'] },
    ],
    '@typescript-eslint/no-unused-vars': ['error'], // Avoid unused variables
    'no-console': 'warn', // Warns about `console.log`
    'no-duplicate-imports': 'error', // Avoid duplicate imports
    eqeqeq: ['error', 'always'], // Enforce strict equality (`===` and `!==`)
    '@typescript-eslint/no-var-requires': 'warn', // TODO: Probably not good practice - make this an error. Needed as a warn for now so we can load local images.
  },
};
