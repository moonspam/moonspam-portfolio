module.exports = function(grunt) {
  // 각 태스크가 얼마나 시간을 사용하는지 측정합니다.
  require('time-grunt')(grunt);

  // Grunt 설정을 로딩합니다.
  require('load-grunt-config')(grunt);
};