var gulp = require('gulp');

var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var rev = require('gulp-rev');
var revNapkin = require('gulp-rev-napkin');
var revReplace = require('gulp-rev-replace');
var runSequence = require('run-sequence');
var htmlreplace = require('gulp-html-replace');
var sass = require('gulp-sass');

var debug = require('gulp-debug');

var src = {
    css: ['css/*.css'],
    scss: ['scss/*.scss'],
    js: 'js/**/*.js',
    html: '*.html'
}
var dest = {
    css: 'css',
    js: 'js',
    html: ''
}

gulp.task('default', function (callback) {
    // Runs the 'css' and 'js' tasks in parallel and the 'html' task after they have finished
    runSequence(['css', 'js'],
        'html',
        callback);
});

// Concatenate, minify and version CSS
gulp.task('css', function () {
    return gulp.src(src.css)
        .pipe(debug({title: 'debug-css:'}))
        .pipe(concat('all.css'))
        .pipe(cssnano())
        .pipe(gulp.dest(dest.css))
        .pipe(rev())
        .pipe(revNapkin({verbose: true, force: true}))
        .pipe(gulp.dest(dest.css))
        .pipe(rev.manifest('rev.manifest', {merge: true}))
        .pipe(gulp.dest(''));
});

// Concatenate, minify and version JS
gulp.task('js', function () {
    return gulp.src(src.js)
        .pipe(debug({title: 'debug-js:'}))
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dest.js))
        .pipe(rev())
        .pipe(revNapkin({verbose: true, force: true}))
        .pipe(gulp.dest(dest.js))
        .pipe(rev.manifest('rev.manifest', {merge: true}))
        .pipe(gulp.dest(''));
});

// Insert minified and concatinated CSS and JS and minify HTML
gulp.task('html', function () {
    var manifest = gulp.src('rev.manifest');
    return gulp.src(src.html)
        .pipe(debug({title: 'debug-html:'}))
        .pipe(htmlreplace({
            'css': 'css/all.css',
            'js': 'js/all.js'
        }))
        .pipe(revReplace({manifest: manifest}))
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true,
            preventAttributesEscaping: true
        }))
        .pipe(gulp.dest(dest.html));
});

gulp.task('styles', function() {
    gulp.src(src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(dest.css))
});

gulp.task('watch', function () {
  gulp.watch(src.scss, ['styles']);
});