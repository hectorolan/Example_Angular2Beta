var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var tsc = require('gulp-typescript');
var del = require('del');
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
   .pipe(gulp.dest('dist/lib'))
});

gulp.task('copy:assets', ['copy:libs'], function(){
    return gulp.src([
        'app/**/*', 
        'index.html', 
        '!app/**/*.ts'],
        {base: './'}
    )
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['copy:assets']);
gulp.task('default', ['build']);