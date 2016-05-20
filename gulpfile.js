var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var tsc = require('gulp-typescript');
var del = require('del');
var concat = require('gulp-concat');
var tscConfig = require ('./tsconfig.json');

// Clean last publish
gulp.task('clean', function (){
   return del('dist/**/*'); 
});

gulp.task('install', ['clean'], function (){
   return gulp
   .src('app/**/*.ts')
   //.src(tscConfig.compilerOptions)
   .pipe(sourcemaps.init())
   .pipe(tsc(tscConfig.compilerOptions))
   .pipe(sourcemaps.write('.'))
   .pipe(gulp.dest('dist/app')); 
});

gulp.task('copy:libs', ['install'], function() {
   return gulp.src([
       'node_modules/es6-shim/es6-shim.min.js',
       'node_modules/zone.js/dist/zone.js',
       'node_modules/reflect-metadata/Reflect.js',
       'node_modules/systemjs/dist/system.src.js',
       'node_modules/jquery/dist/jquery.js',
       'node_modules/tether/dist/js/tether.js',
       'node_modules/bootstrap/dist/js/bootstrap.js'
   ])
   .pipe(gulp.dest('dist/app/libs'))
});

gulp.task('copy:style', ['copy:libs'], function() {
   return gulp.src([
       'node_modules/tether/dist/css/tether.css',
       'node_modules/bootstrap/dist/css/bootstrap.css'
   ])
   .pipe(gulp.dest('dist/app/style'))
});

gulp.task('copy:assets', ['copy:style'], function(){
    return gulp.src([
        'app/**/*', 
        'index.html',
        'systemjs.config.js',
        '!app/**/*.ts'],
        {base: './'}
    )
    .pipe(gulp.dest('dist'));
});

gulp.task('minify', ['copy:assets'], function(){
    gulp.src(['dist/app/controller/**/*.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/app/libs/'));
});

gulp.task('build', ['minify']);
gulp.task('default', ['build']);