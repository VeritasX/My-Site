/**
 * Created by aaronendsley on 4/17/16.
 */
'use strict'

var gulp = require('gulp');
var uglify = require('gulp-uglify');


gulp.task('compress', function() {
    return gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', function() {
   
});
