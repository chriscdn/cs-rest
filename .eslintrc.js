module.exports = {
    env: {
      browser: true,
      commonjs: true,
      es2021: true
    },
    extends: [
      'standard'
    ],
    parserOptions: {
      ecmaVersion: 12
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-unused-vars': [
        'error', {
          argsIgnorePattern: '^_'
        }
      ]
    }
  }
  