const { src, dest, watch, series } = require('gulp')
const sass = require("gulp-sass")(require("sass"))

function buildStyles() {
    return src("Packaged/**/*.scss")
        .pipe(sass())
        .pipe(dest("GulpSassStyles"))
}

function watchTask() {
    watch(["Packaged/**/*.scss"], buildStyles)
}

exports.default = series(buildStyles, watchTask)