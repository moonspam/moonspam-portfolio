module.exports = {
  dev: {
    options: {
      port: 8889,
      base: {
        path: 'src',
        options: {
          index: 'index.html'
        }
      }
    }
  },
  live: {
    options: {
      port: 8889,
      base: {
        path: 'dist',
        options: {
          index: 'index.html'
        }
      }
    }
  }
};