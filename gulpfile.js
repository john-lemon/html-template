var gulp = require('gulp');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');
var nib = require('nib');
var rename = require('gulp-rename');
var spritesmith = require('gulp.spritesmith');
var uglify = require('gulp-uglify');


gulp.task('coffee', function() {
  gulp.src('layout/assets/js/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(concat('coffee.js'))
    .pipe(gulp.dest('layout/assets/js/'))
});

gulp.task('scripts', function() {
  gulp.src('layout/assets/js/*.js')
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('layout/media/js'))
});

gulp.task('compress', function() {
  gulp.src('layout/assets/js/plugins/*.js')
    .pipe(uglify())
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest('layout/media/js'))
});

gulp.task('stylus', function () {
  gulp.src('layout/assets/css/blocks/*.styl')
    .pipe(stylus({use: [nib()]}))
    .pipe(rename({
      prefix: 'media-'
    }))
    .pipe(gulp.dest('layout/media/css/'));
  gulp.src('layout/assets/css/base/index.styl')
    .pipe(stylus({use: [nib()]}))
    .pipe(rename({
      basename: 'base'
    }))
    .pipe(gulp.dest('layout/media/css/'));
  gulp.src('layout/assets/css/all.styl')
    .pipe(stylus({use: [nib()]}))
    .pipe(rename({
      basename: 'main'
    }))
    .pipe(gulp.dest('layout/media/css/'));
});

gulp.task('sprite', function(){
  var spriteData = gulp.src('layout/media/images/sprite/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite-mixins.styl',
    cssTemplate: 'sprite_template/mixins.mustache',
    cssVarMap: function (sprite) {
      sprite.name = 's-' + sprite.name;
    }
  }));
  spriteData.pipe(gulp.dest('layout/media/images'));
})

gulp.task('default', function(){
  gulp.run('coffee','scripts', 'stylus', 'sprite', 'compress');

  // Отслеживаем изменения в файлах
  gulp.watch("layout/assets/js/*.js", function(event){
    gulp.run('scripts');
  });
  gulp.watch("layout/assets/js/plugins/*.js", function(event){
    gulp.run('compress');
  });
  gulp.watch("layout/assets/css/**/*", function(event){
    gulp.run('stylus');
  });
  gulp.watch("layout/media/images/sprite/", function(event){
    gulp.run('sprite');
  });
});
