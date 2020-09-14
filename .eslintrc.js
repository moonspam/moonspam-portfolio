module.exports = {
  "extends": "airbnb-base",
  "plugins": [
    "import"
  ],
  "env": {
    "browser": ["last 2 versions", "safari >= 7"],
  },
  "rules": {
    "no-console": 0,
    "no-alert": 0,
    "no-undef": 0,
    "no-unused-vars": 0,
    "global-require": 0,
  },
  "globals": {
    "WebFont": false
  }
};