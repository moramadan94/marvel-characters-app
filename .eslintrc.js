module.exports = {
  root: true,
  extends: ['@react-native-community'],
  plugins: ['prettier'],
  rules: {
    'react-native/no-inline-styles': 'off',
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off', // Disables the rule for React in JSX scope
    'react/no-unstable-nested-components': 'off',
  },
};
