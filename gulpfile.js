const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const concatCSS = require('gulp-concat-css');
const pump = require('pump');

gulp.task('css', () => {
  gulp.src('src/**/*.css')
    .pipe(concatCSS('bundle.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('js', (cb) => {
  pump([
      gulp.src(['src/js/card.js', 'src/js/deck.js', 'src/js/statusBoard.js',
      'src/js/scoreBoard.js', 'src/js/main.js']),
      sourcemaps.init(),
      babel({
        presets: ['@babel/env']
      }),
      concat('bundle.js'),
      sourcemaps.write('.'),
      gulp.dest('dist')
    ],
    cb
  )
});

gulp.task('watch', () => {
  gulp.watch('src/**/*.css', ['css']);
  gulp.watch('src/**/*.js', ['js']);
});

gulp.task('default', ['css', 'js']);


// TODO: minify js and css
