var fs = require('fs');
var gulp = require('gulp');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var connect = require('gulp-connect');
var template = require('gulp-template');
var data = require('gulp-data');
var _ = require('lodash');

gulp.task('build', ['copy'], function(){
  var slides = JSON.parse(fs.readFileSync('slides/list.json', {encoding: 'utf8'}));
  var section = fs.readFileSync('templates/_section.html', {encoding: 'utf8'});
  gulp.src(['templates/_index.html'])
    .pipe(template({
      slides: slides,
      section: function(slide){
        return _.template(section)({slide: slide});
      }
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('.'))
});

gulp.task('scripts', function(){
  return gulp.src('js/slides/*.js')
    .pipe(gulp.dest('.'));
});

gulp.task('copy', function(){
  return gulp.src([ 'slides/**',
                    'bower_components/**',
                    'js/**',
                    'images/**',
                    'index.js',
                    'slides.js',
                    'styles.css',
                    'index.html'], {base: "."})
    .pipe(gulp.dest('dist/'));
});

gulp.task('jshint', function(){
  return gulp.src('js/**/*.js')
   .pipe(jshint())
   .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('connect', function(){
  connect.server({
    root: './dist/',
    port: 9000,
    livereload: true
  });
});

gulp.task('watch', function(){

  //Live reload
  var files = ['index.html','styles.css', 'slides/{,*/}*.{md,html}','js/**/*.js'];

  gulp.watch(files, ['copy']);

  gulp.watch(files, function(){
    gulp.src(files)
      .pipe(connect.reload());
  });

  gulp.watch('js/**/*.js', ['jshint', 'scripts', 'copy']);

  gulp.watch(['templates/_index.html', 'templates/_section.html', 'slides/list.json'],
    ['build', 'copy']);
});

gulp.task('default', ['build', 'connect', 'watch']);
gulp.task('deploy', ['build', 'copy'])
