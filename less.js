const gulp = require('gulp');
const notify = require("gulp-notify");
const less = require("gulp-less");
const concat = require("gulp-concat");
let NmpImportPlugin = require("less-plugin-npm-import");

function convertLessToCss(sourcePath, destPath) {
    return gulp.src([sourcePath+"/*.less", sourcePath+"**/*.less"])
    .pipe(less({
        plugins: [new NmpImportPlugin(
            { prefix: '~' }
        )],
        paths: sourcePath
    }))
    .on('error', notify('Errore durante la conversione dei file less...'))
    .pipe(concat("main.css"))
    .pipe(gulp.dest(destPath + '/css')).on('end', notify("Fine della conversione dei file less!"));
}

module.exports = convertLessToCss;