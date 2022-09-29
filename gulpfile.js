const {src,dest,watch,series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

function buildStyles (){
    return src('imagine/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

function watchTask () {
    watch(['imagine/**/*.scss'],buildStyles)
}

exports.default = series(buildStyles,watchTask)