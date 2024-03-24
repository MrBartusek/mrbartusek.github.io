module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
	'plugin:react/recommended',
	'plugin:@typescript-eslint/recommended',
	'plugin:prettier/recommended',
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
  plugins: ['react', '@typescript-eslint', 'react-refresh', 'react-hooks', 'prettier'],
  rules: {
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-this-alias': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'react-refresh/only-export-components': 'warn',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'off',
		'prettier/prettier': [
			'error',
			{
				plugins: ['prettier-plugin-tailwindcss'],
				endOfLine: 'auto',
				useTabs: true,
				singleQuote: true,
				printWidth: 100,
				singleAttributePerLine: true,
			},
		],
	},
}
