module.exports = {
  sass: {
    files: ['src/_sass/*.scss'],
    tasks: ['copy:sass', 'compass'],
    options: {
      nospawn: true
    }
  },
  jshint: {
    files: ['src/js/**/*.js'],
    tasks: ['jshint']
  },
  livereload: {
    files: ['src/**/*'],
    options: {
      livereload: true
    },
  }
};