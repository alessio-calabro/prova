const gulp = require("gulp");
const babel = require("gulp-babel");
const notify = require("gulp-notify");

function convertJsxToJs(sourcePath, destPath) {
    return gulp.src([sourcePath+'/*.jsx', sourcePath+'**/*.jsx']).
    pipe(babel({
        plugins: ['transform-react-jsx']
    })).on('error', notify("Errore durante la conversione dei file jsx"))
    .pipe(gulp.dest(destPath))
    .on('end', notify("Fine della conversione dei file jsx!"));
}

module.exports = convertJsxToJs;