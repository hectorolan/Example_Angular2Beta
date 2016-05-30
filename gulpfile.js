var gulp        = require('gulp');
var sourcemaps  = require('gulp-sourcemaps');
var tsc         = require('gulp-typescript');
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var del         = require('del');
var tscConfig   = require('./tsconfig.json');
var browserSync = require('browser-sync').create();

gulp.task('start', ['watch']);
gulp.task('build', ['compile:ts','compile:sass','copy:libs','copy:styles','copy:assets']);
gulp.task('default', ['build']);
gulp.task('dev', ['copy:libsDev','copy:stylesDev']);

//Delete distribution directory
gulp.task('clean', function (){
   return del('dist/**/*'); 
});
//Watch the files and compile if necesary
gulp.task('watch', function (){
   gulp.watch('app/**/*.ts', ['compile:ts']);
   gulp.watch('app/**/*.scss', ['compile:sass']);
   gulp.watch(
       ['app/**/*', 
        'index.html',
        'systemjs.config.js',
        '!app/**/*.ts',
        '!app/**/*.scss'],
       ['copy:assets']);
});
//Compile typescript
gulp.task('compile:ts', function (){
   return gulp.src('app/**/*.ts')
   .pipe(sourcemaps.init())
   .pipe(tsc(tscConfig.compilerOptions))
   .pipe(sourcemaps.write('.'))
   .pipe(gulp.dest('dist/app')); 
});
//Compile sass
gulp.task('compile:sass', function (){
    return gulp.src('app/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/app'))
});
//Copy dependencies
gulp.task('copy:libs', function() {
   return gulp.src([
       'es6-shim/es6-shim.min.js',
       'zone.js/dist/zone.js',
       'reflect-metadata/Reflect.js',
       'systemjs/dist/system.src.js',
       'rxjs/**/*.js',
       '\@angular/**/*.js',
       'jquery/dist/jquery.js',
       'tether/dist/js/tether.js',
       'bootstrap/dist/js/bootstrap.js'
   ], {cwd: "node_modules/**"})
   .pipe(gulp.dest('dist/libs'))
});
gulp.task('copy:libsDev', function() {
   return gulp.src([
       'es6-shim/es6-shim.min.js',
       'zone.js/dist/zone.js',
       'reflect-metadata/Reflect.js',
       'systemjs/dist/system.src.js',
       'rxjs/**/*.js',
       '\@angular/**/*.js',
       'jquery/dist/jquery.js',
       'tether/dist/js/tether.js',
       'bootstrap/dist/js/bootstrap.js'
   ], {cwd: "node_modules/**"})
   .pipe(gulp.dest('libs'))
});
//Copy dependecies styles
gulp.task('copy:styles', function() {
   return gulp.src([
       'node_modules/tether/dist/css/tether.css',
       'node_modules/bootstrap/dist/css/bootstrap.css'
   ])
   .pipe(gulp.dest('dist/app/styles'))
});
gulp.task('copy:stylesDev', function() {
   return gulp.src([
       'node_modules/tether/dist/css/tether.css',
       'node_modules/bootstrap/dist/css/bootstrap.css'
   ])
   .pipe(gulp.dest('app/styles'))
});
//Copy all the project files except the typescripts
gulp.task('copy:assets', function(){
    return gulp.src([
        'app/**/*', 
        'index.html',
        'systemjs.config.js',
        '!app/**/*.ts',
        '!app/**/*.scss'],
        {base: './'}
    )
    .pipe(gulp.dest('dist'));
});



//Not Using
gulp.task('minify', ['copy:assets'], function(){
    gulp.src(['dist/app/controller/**/*.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/app/libs/'));
});


    //"start": "gulp clean && gulp build && concurrently \"gulp start\" \"lite-server\" ",