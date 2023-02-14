module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb-typescript',
    'prettier',
    'plugin:node/recommended',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  settings: {
    node: {
      tryExtensions: ['.js', '.json', '.node', '.ts'],
    },
    typescript: true,
    'import/resolver': {
      typescript: true,
      node: true,
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
  },
  plugins: [
    'prettier',
    '@typescript-eslint',  
  ],
  overrides: [
    {
      files: '*.ts',
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'func-names': 'off',
    'no-process-exit': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'node/no-unsupported-features/es-syntax': [
      'error',
      { ignores: ['modules'] },
    ],
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    "no-param-reassign": 0,
    "linebreak-style": ["off"],
    "implicit-arrow-linebreak": 0,
    "no-undef": ["error"],
    "function-paren-newline": 0,
    "spaced-comment": 0,
    "no-extra-boolean-cast": 0,
    "quote-props": 0,
    "object-curly-spacing": ["error", "always"],
    "camelcase": 0,
    "no-nested-ternary": 0,
    "object-curly-newline": 0,
    "operator-linebreak": 0,
    "no-unused-expressions": 0,
    "global-require": 0,
    "max-len": 0,
    "import/no-cycle": 0,
    "no-underscore-dangle": 0,
    "no-return-assign": 0,
    "import/prefer-default-export": 0,
    "arrow-parens": 0,
    "eol-last": 0,
    "consistent-return": 0
  },
};
