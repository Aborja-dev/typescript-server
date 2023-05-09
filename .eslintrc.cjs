module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'standard'],
	parser: '@typescript-eslint/parser',
	root: true,
	plugins: ['@typescript-eslint'],
	overrides: [
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	rules: {
		'no-tabs': 'off',
		indent: ['error', 'tab'],
		'@typescript-eslint/explicit-function-return-type': 'error'
	}
}
