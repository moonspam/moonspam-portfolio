module.exports = {
  options: {
    cache: false
  },

  dist: {
    files: [{
      expand: true,
      cwd: 'dist/',
      src: ['img/**/*.{png,jpg,gif}'],
      dest: 'dist/'
    }]
  }
};