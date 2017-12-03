module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: 'dist/',
      src: ['**/*.html'],
      dest: 'dist/'
    }],
    options: {
      replacements: [
        {
          pattern: /(?:[ |\t]*<!--\(\s?compress-css-start\s?\)-->)\n?([\s\S]+?)(?:[ |\t]*<!--\(\s?compress-css-end\s?\)-->)/g,
          replacement: '  <link rel="stylesheet" href="css/style.min.css">'
        },
        {
          pattern: /(?:[ |\t]*<!--\(\s?compress-js-start\s?\)-->)\n?([\s\S]+?)(?:[ |\t]*<!--\(\s?compress-js-end\s?\)-->)/g,
          replacement: '  <script src="js/ui.min.js"></script>'
        }
      ]
    }
  }
};