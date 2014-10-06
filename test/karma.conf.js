'use strict';

module.exports = function(config) {

  config.set({
    basePath: '..', //!\\ Ignored through gulp-karma //!\\

    files: [ //!\\ Ignored through gulp-karma //!\\
      'app/bower_components/famous-polyfills/classList.js',
      'app/bower_components/famous-polyfills/functionPrototypeBind.js',
      'app/bower_components/famous-polyfills/requestAnimationFrame.js',
      'app/bower_components/famous/famous-global.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-animate/angular-animate.js',
      'app/bower_components/angular-cookies/angular-cookies.js',
      'app/bower_components/angular-touch/angular-touch.js',
      'app/bower_components/angular-sanitize/angular-sanitize.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-ui-router/release/angular-ui-router.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap.js',
      'app/bower_components/famous-angular/dist/famous-angular.js',
      'app/bower_components/underscore/underscore.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/scripts/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch: true,
    
    singleRun: true,

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ]
  });
};