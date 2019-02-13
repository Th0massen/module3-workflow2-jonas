const gulp = require('gulp')
const less = require('gulp-less')
const browserSync = require('browser-sync').create()
const imagemin = require('gulp-imagemin');

gulp.task('less', function () {
    gulp.src('less/*.less')
        .pipe(less({
            paths: [ 'less' ]
        }))
        .pipe(gulp.dest('css'))
});

gulp.task('browser-sync', function(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
})

gulp.task('imgMin', function(){
    gulp.src('imgs/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});

gulp.task('default', ['less', 'browser-sync', 'imgMin'], function(){
    gulp.watch('less/*.less', ['less'])
    gulp.watch("*.html").on('change', browserSync.reload)
    gulp.watch("css/*.css").on('change', browserSync.reload)
})
