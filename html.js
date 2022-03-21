const gulp = require('gulp');
const notify = require("gulp-notify");
const merge = require('merge-stream');

function buildHTML(sourcePath, destPath) {
    return merge(gulp.src(sourcePath)
    .on('error', notify('Errore durente la copia del file html...'))
    .pipe(gulp.dest(destPath, { overwrite: true })
    .on('error', notify('Errore durente la scrittura dei file html...'))
    .on('end', notify("Fine della copia dei file html!"))));
}

module.exports = buildHTML;