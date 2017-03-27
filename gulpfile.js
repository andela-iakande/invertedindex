const gulp = require('gulp');
const eslint = require('gulp-eslint');
const bSync = require('browser-sync').create();
const path = require('path');
const Server = require('karma').Server;
const browserify = require('gulp-browserify');
const rename = require('gulp-rename');

gulp.task('lint', () => {
  gulp.src(['src/js/inverted-index.js'])
    .pipe(eslint())
    .pipe(eslint.formatEach())
    .pipe(eslint.failAfterError());
});

gulp.task('watch', () => {
  gulp.watch('src/js/inverted-index.js').on('change', bSync.reload);
  gulp.watch('src/css/*.css').on('change', bSync.reload);
  gulp.watch('src/*.html').on('change', bSync.reload);
});

gulp.task('bs', () => {
  bSync.init({
    server: {
      baseDir: './src',
    },
  });
});

gulp.task('jasmine', ['scripts'], () => {
  bSync.init({
    server: {
      baseDir: ['./jasmine', './src/js/'],
      index: 'SpecRunner.html'
    },
    port: 3120,
    ui: false,
    ghostMode: false
  });
  gulp.watch(['./jasmine/spec/invertedIndexTest.js'], bSync.reload);
});
gulp.task('scripts', () => {
  gulp.src('jasmine/spec/invertedIndexTest.js')
   .pipe(browserify())
   .pipe(rename('bundle.js'))
   .pipe(gulp.dest('jasmine/build'));
});

gulp.task('test-jasmine', ['scripts', 'jasmine']);

/**
 * Run test once and exit
 */
gulp.task('test', (done) => {
  new Server({
    configFile: path.join(__dirname, '/karma.conf.js'),
    singleRun: true
  }, done).start();
});

gulp.task('default', ['bs', 'lint', 'watch']);

