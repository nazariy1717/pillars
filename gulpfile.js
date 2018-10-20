let gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    cssmin = require('gulp-cssmin'),
    server = require('gulp-server-livereload');

gulp.task('sass', function () {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        // .pipe(cssmin())
        .pipe(gulp.dest('src/css'));
});

gulp.task('webserver', function() {
    gulp.src('.')
        .pipe(server({
            host: 'localhost',
            port: '8000',
            livereload: true,
            directoryListing: true,
            open: true
        }));
});

gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.scss', ['sass']);
});

gulp.task('default', [ 'sass','watch','webserver']);

// gulp.task('js:build', function () {
//     gulp.src('src/js/**/*.js')
//         .pipe(minify())
//         .pipe(gulp.dest('dist/js/'))
// });
//

gulp.task('style:build', function () {
    gulp.src('src/css/build.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css/'))
});

gulp.task('build', [
    // 'js:build',
    // 'style:build'
]);