module.exports = {
  dist: {
    expand: true,
    src: ['**/*', '!**/_sass/**', '!**/js/**'],
    cwd: "src",
    dest: "dist"
  },
  sass: {
    files: {
      'config.rb': 'config.rb'
    }
  }
};