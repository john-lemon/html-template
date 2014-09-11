var gulp = require('gulp');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');
var nib = require('nib');
var rename = require('gulp-rename');
var spritesmith = require('gulp.spritesmith');


gulp.task('scripts', function() {
  gulp.src('layout/assets/js/*.js')
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('layout/media/js'))
});

gulp.task('stylus', function () {
  gulp.src('layout/assets/css/blocks/*.styl')
    .pipe(stylus({use: [nib()]}))
    // .pipe(rename({extname:'media-bs.styl'}))
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
  gulp.src('layout/media/images/sprite')
    .pipe(spritesmith({
      imgName: 'sprite.png',
      imgPath: 'layout/media/images/',
      cssName: 'sprite-mixins.styl',
      cssTemplate: 'sprite_template/mixins.mustache',
      cssVarMap: function (sprite) {
        sprite.name = 's-' + sprite.name;
      }
    }))
    .pipe(gulp.dest('layout/media/images/'));
})

// gulp.task('default', function() {
//   gulp.run('scripts');
//   gulp.run('stylus');
// });

gulp.task('default', ['scripts', 'stylus']);