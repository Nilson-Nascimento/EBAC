const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')

function compilerSass(){
    return gulp.src('./src/style/main.scss')
    .pipe(sass({outputStyle: "compressed"}))
    // const compiledSass = sass.compile("./src/style/main.scss")
    // console.log(compiledSass.css)
    .pipe(gulp.dest('./dest/build/style'))
}

function compreImage(){
    return gulp.src('./src/images/*.jpg')
    .pipe(imagemin())
    .pipe(gulp.dest('./dest/build/images'))
}

function compriJs(){
    return gulp.src('./src/script/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dest/script'))
}

exports.sass = compilerSass
exports.images = compreImage
exports.js = compriJs

exports.default = function(){
    gulp.watch('./src/style/main.scss',{ignoreInitial:false}, gulp.series(compilerSass))
    gulp.watch('./src/images/*.jpg',{ignoreInitial:false}, gulp.series(compreImage))
    gulp.watch('./src/script/main.js', {ignoreInitial:false}, gulp.series(compriJs))
}