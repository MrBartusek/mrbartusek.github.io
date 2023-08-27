module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [
    'dist', '*.cjs', '*.js'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true },],
    'brace-style': ['error', 'stroustrup', { 'allowSingleLine': true }],
    'quotes': ['error', 'single'],
    'no-trailing-spaces': ['error'],
    'eol-last': ['error', 'always'],
    'curly': ['error', 'multi-line', 'consistent'],
    'indent': ['error', 'tab', { 'SwitchCase': 1, 'ignoredNodes': ['TemplateLiteral *'] }],
    'semi': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'comma-dangle': ['error', 'never'],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'array-bracket-spacing': ['error', 'always']
  },
}
