module.exports = {
  extends: 'airbnb-base',
  plugins: [
    'import',
  ],
  env: {
    browser: ['last 2 versions', 'safari >= 7'],
  },
  rules: {
    'no-console': 0,
    'no-alert': 0,
  },
  globals: {
    WebFont: false,
  },
};
