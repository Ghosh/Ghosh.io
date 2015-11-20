var gulp = require('gulp'),
    frontMatter = require('gulp-front-matter'),
    ext_replace = require('gulp-ext-replace'),
    hb = require('gulp-hb'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('hbs', function () {
  gulp.src('./source/**/*.hbs')
      .pipe(frontMatter())
      .pipe(hb())
      .pipe(ext_replace('.html'))
      .pipe(gulp.dest('./build/'))
      .pipe(reload({ stream:true }));
});


gulp.task('styles', function() {
  gulp.src('source/assets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('site.css'))
    .pipe(gulp.dest('build/assets/css/'))
    .pipe(reload({ stream:true }));
});


gulp.task('compile', ['hbs', 'styles'])


// watch files for changes and reload
gulp.task('serve', ['compile'], function() {
  browserSync({
    server: {
      baseDir: 'build'
    }
  });

  gulp.watch('source/**/*.hbs', ['hbs']);
  gulp.watch('source/assets/sass/*.scss', ['styles']);
});
