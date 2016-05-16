/*
  TODO: Clean up ifchecks in gulpfile
  TODO: Break gulpfile into multiple modules
  TODO: Fix watch notification
 */
var gulp          = require('gulp'),
    frontMatter   = require('gulp-front-matter'),
    ext_replace   = require('gulp-ext-replace'),
    sass          = require('gulp-sass'),
    postcss       = require('gulp-postcss'),
    autoprefixer  = require('autoprefixer'),
    willChange    = require('postcss-will-change'),
    vmin          = require('postcss-vmin'),
    mqpacker      = require('css-mqpacker'),
    cssnano       = require('cssnano'),
    rename        = require('gulp-rename'),
    svgmin        = require('gulp-svgmin'),
    svgstore      = require('gulp-svgstore'),
    cheerio       = require('gulp-cheerio'),
    plumber       = require('gulp-plumber'),
    notify        = require("gulp-notify"),
    newer         = require('gulp-newer'),
    clean         = require('gulp-clean'),
    imagemin      = require('gulp-imagemin'),
    gulpif        = require('gulp-if'),
    sourcemaps    = require('gulp-sourcemaps'),
    layouts       = require('handlebars-layouts'),
    hb            = require('gulp-hb'),
    browserSync   = require('browser-sync'),
    pngquant      = require('imagemin-pngquant'),
    runSequence   = require('run-sequence'),
    gutil         = require('gulp-util'),
    uglify        = require('gulp-uglify'),
    browserify    = require('browserify'),
    // debowerify = require('debowerify'), // --> Causes wierd issue with gulp hb
    source        = require('vinyl-source-stream'),
    buffer        = require('vinyl-buffer'),
    deploy        = require('gulp-gh-pages'),
    file          = require('gulp-file'),
    argv          = require('yargs').argv,
    reload        = browserSync.reload,
    shell         = require('gulp-shell');


    var config = {
      cname: 'www.ghosh.io'
    };


    gulp.task('clean:build', function () {
      return gulp.src('build/*', {read: false})
      		.pipe(clean());
    });

    gulp.task('cname', function () {
      return file('CNAME', config.cname, {src: true})
        .pipe(gulp.dest('build/'));
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
        .pipe(gulp.dest('./source/templates/partials/'))
        .pipe(reload({ stream:true }));
    });

    gulp.task('images', function() {
      return gulp.src('source/assets/images/**/*.*')
      .pipe(newer('build/assets/images'))
      .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
      .pipe(imagemin({
          progressive: true,
          use: [pngquant()]
      }))
      .pipe(gulp.dest('build/assets/images'))
      .pipe(reload({ stream:true }));
    });


    gulp.task('hbs', function () {
      gulp.src(['source/templates/**/*.hbs', '!source/templates/partials/**/*.hbs', '!source/templates/layouts/**/*.hbs'])
        .pipe(plumber({
          errorHandler: notify.onError({ title: 'Error: Handlebars Task', message: '<%= error.message %>' })
        }))
        .pipe(frontMatter())
        .pipe(hb({
          bustCache: true,
          partials: [
              './source/templates/partials/**/*.hbs',
              './source/templates/layouts/**/*.hbs'
          ],
          helpers: [
            './node_modules/handlebars-layouts/index.js'
          ],
        }))
        .pipe(ext_replace('.html'))
        .pipe(newer('./build/'))
        .pipe(gulp.dest('./build/'))
        .pipe(reload({ stream:true }));
    });


    gulp.task('styles', function() {
      var processors = [
        willChange(),
        vmin(),
        mqpacker(),
        autoprefixer({ browsers: ['last 2 versions'] })
      ];
      gulp.src('source/assets/sass/**/*.scss')
        .pipe(plumber({
          errorHandler: notify.onError({ title: 'Error: Styles Task', message: '<%= error.message %>' })
        }))
        .pipe(gulpif( argv.build, gutil.noop(), sourcemaps.init({loadMaps: true}) ))
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulpif(argv.build, postcss([cssnano()])))
        .pipe(rename('site.css'))
        .pipe(gulpif( argv.build, gutil.noop(), sourcemaps.write('./') ))
        .pipe(gulp.dest('build/assets/css/'))
        .pipe(reload({ stream:true }));
    });


    gulp.task('scripts', function () {
      var b = browserify({
        entries: 'source/assets/js/inbox.js',
        debug: true,
        // transform: [debowerify] // <-- Debowerify causes a wierd issue with the hbs task
      });

      return b.bundle()
        .pipe(source('inbox.js'))
        .pipe(buffer())
        .pipe(gulpif( argv.build, gutil.noop(), sourcemaps.init({loadMaps: true}) ))
        .pipe(gulpif(argv.build, uglify()))
        .on('error', gutil.log)
        .pipe(rename('site.js'))
        .pipe(gulpif( argv.build, gutil.noop(), sourcemaps.write('./') ))
        .pipe(gulp.dest('build/assets/js/'))
        .pipe(reload({ stream:true }));
    });


    gulp.task('clean', ['clean:build']);
    gulp.task('compile', ['svg', 'hbs', 'styles', 'scripts','images', 'cname']);


    gulp.task('build', function(callback) {
      (argv.clean == 1) ?
        runSequence('clean:build', 'compile', callback) :
        runSequence('compile', callback);
    });

    gulp.task('go', ['build'], function() {
      browserSync({
        server: {baseDir: 'build' },
        open: argv.open == 1 ? true : false
    });

      gulp.watch('source/**/*.hbs', ['hbs']);
      gulp.watch('source/assets/svg/**/*.svg', ['svg']);
      gulp.watch('source/assets/images/**/*.*', ['images']);
      gulp.watch('source/assets/sass/**/*.scss', ['styles']);
      gulp.watch('source/assets/js/**/*.js', ['scripts']);

      notify("Watching for changes!");
    });
    
    gulp.task('default', function(callback) {
      var help = `
        ${gutil.colors.yellow('Usage:')}
          gulp [command]
        
        ${gutil.colors.yellow('Available commands:')}
          ${gutil.colors.green('gulp')}             Display this help message.
          ${gutil.colors.green('gulp dev')}         Compile files in dev mode. Starts server and watch task.
          ${gutil.colors.green('gulp prod')}        Compiles files for productions. Runs optimization asks.
          ${gutil.colors.green('gulp deploy')}      Deploys files to production.
      `;
      return setTimeout((function() {
        return console.log(help);
      }), 200);
    });
    
    gulp.task('dev', shell.task([
      'gulp go --clean --color'
    ]));
    
    gulp.task('prod', shell.task([
      'gulp go --clean --build --color'
    ]));

    gulp.task('deploy', function () {
      return gulp
        .src('./build/**/*')
        .pipe(deploy({
            'remoteUrl' : 'git@github.com:Ghosh/Ghosh.io.git'
        }));
    });
