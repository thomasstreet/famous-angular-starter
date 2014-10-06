'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep');

gulp.task('test', function() {

  var famousPolyfills = [
    'app/bower_components/famous-polyfills/classList.js',
    'app/bower_components/famous-polyfills/functionPrototypeBind.js',
    'app/bower_components/famous-polyfills/requestAnimationFrame.js'
  ];
  var bowerDeps = wiredep({
    directory: 'app/bower_components',
    exclude: ['app/bower_components/famous-polyfills'],
    dependencies: true,
    devDependencies: true
  });

  var testFiles = [].concat(
    famousPolyfills,
    bowerDeps.js, [
      'app/scripts/**/*.js',
      'test/unit/**/*.js'
    ]
  );

  return gulp.src(testFiles)
    .pipe($.karma({
      configFile: 'test/karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});