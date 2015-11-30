var gulp        = require('gulp'),
    frontMatter = require('gulp-front-matter'),
    layouts     = require('handlebars-layouts'),
    hb          = require('gulp-hb'),
    ext_replace = require('gulp-ext-replace'),
    sass        = require('gulp-sass'),
    rename      = require('gulp-rename'),
    browserSync = require('browser-sync'),
    svgmin      = require('gulp-svgmin'),
    svgstore    = require('gulp-svgstore'),
    cheerio     = require('gulp-cheerio'),
    plumber     = require('gulp-plumber'),
    notify      = require("gulp-notify"),
    imagemin    = require('gulp-imagemin'),
    pngquant    = require('imagemin-pngquant'),
    del         = require('del'),
    reload      = browserSync.reload;



gulp.task('clean:build', function () {
  return del(['build/*']);
});


gulp.task('svg', function () {
  gulp.src('./source/assets/svg/**/*.svg')
    .pipe(svgmin())
    .pipe(svgstore({ fileName: 'icons.svg', inlineSvg: true}))
    .pipe(cheerio({
      run: function ($, file) {
          $('svg').addClass('hide');
          $('[fill]').removeAttr('fill');
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(ext_replace('.hbs'))
    .pipe(gulp.dest('./source/partials/'))
    .pipe(reload({ stream:true }));
});


gulp.task('images', function() {
  gulp.src('source/assets/images/**/*.*')
  .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
  .pipe(imagemin({
      progressive: true,
      use: [pngquant()]
  }))
  .pipe(gulp.dest('build/assets/images'))
  .pipe(reload({ stream:true }));
});


gulp.task('hbs', function () {
  gulp.src(['source/**/*.hbs', '!source/partials/**/*.hbs'])
    .pipe(plumber({
      errorHandler: notify.onError({ title: 'Error: Handlebars Task', message: '<%= error.message %>' })
    }))
    .pipe(frontMatter())
    .pipe(hb({
      bustCache: true,
      partials: './source/partials/**/*.hbs',
      helpers: [
        './node_modules/handlebars-layouts/index.js',
      ],
    }))
    .pipe(ext_replace('.html'))
    .pipe(gulp.dest('./build/'))
    .pipe(reload({ stream:true }));
});


gulp.task('styles', function() {
  gulp.src('source/assets/sass/**/*.scss')
    .pipe(plumber({
      errorHandler: notify.onError({ title: 'Error: Styles Task', message: '<%= error.message %>' })
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('site.css'))
    .pipe(gulp.dest('build/assets/css/'))
    .pipe(reload({ stream:true }));
});


gulp.task('compile', ['clean:build', 'svg', 'hbs', 'styles', 'images'])


gulp.task('go', ['compile'], function() {
  browserSync({
    server: {
      baseDir: 'build'
    }
  });

  gulp.watch('source/**/*.hbs', ['hbs']);
  gulp.watch('source/assets/svg/**/*.svg', ['svg']);
  gulp.watch('source/assets/images/*', ['images']);
  gulp.watch('source/assets/sass/**/*.scss', ['styles']);
});
