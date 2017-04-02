const gulp = require('gulp');
const eslint = require('gulp-eslint');
const bSync = require('browser-sync').create();
const path = require('path');
const Server = require('karma').Server;
const browserify = require('gulp-browserify');
const rename = require('gulp-rename');
const babel = require('gulp-babel');

gulp.task('lint', () => {
  gulp.src(['src/js/inverted-index.js'])
    .pipe(eslint())
    .pipe(eslint.formatEach())
    .pipe(eslint.failAfterError());
});

gulp.task('watch', () => {
  gulp.watch('src/js/**/*.js').on('change', bSync.reload);
  gulp.watch('src/css/**/*.css').on('change', bSync.reload);
  gulp.watch('src/**/*.html').on('change', bSync.reload);
});

gulp.task('server', () => {
  bSync.init({
    server: {
      baseDir: './src',
    },
    port: process.env.PORT || 5000,
    open: false,
    ghostMode: false
  });
});

gulp.task('scripts', () => {
  gulp.src('jasmine/spec/invertedIndexTest.js')
   .pipe(babel({
     presets: ['es2015']
   }))
   .pipe(browserify())
   .pipe(rename('bundle.js'))
   .pipe(gulp.dest('jasmine/build'));
});
/**
 * Run test once and exit
 */
gulp.task('test', (done) => {
  new Server({
    configFile: path.join(__dirname, '/karma.conf.js'),
    singleRun: true
  }, done).start();
});

gulp.task('default', ['server', 'watch']);

