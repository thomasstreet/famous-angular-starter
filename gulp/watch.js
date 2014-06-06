'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

gulp.task('watch', ['serve'], function () {
    var server = $.livereload();

    // watch for changes

    gulp.watch([
        'app/partials/**/*.html',
        'app/partials/**/*.haml',
        'app/partials/**/*.jade',
        'app/styles/**/*.css',
        'app/scripts/**/*.js',
        'app/images/**/*'
    ]).on('change', function (file) {
        gulp.start('build')
        server.changed(file.path);
    });

    gulp.watch('app/scripts/**/*.js', ['scripts']);
    gulp.watch('app/images/**/*', ['images']);
    gulp.watch('bower.json', ['wiredep']);
});
