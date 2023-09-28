module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'semi': [2, 'never'],
    'require-jsdoc': ['off', {}],
    'react/react-in-jsx-scope': [0, {}],
    'max-len': [0],
    'indent': [0],
  },
}
