import { pathBuild } from './config';

import autoprefixer from 'gulp-autoprefixer';
import gulp from 'gulp';
import csso from 'gulp-csso';
import sass from 'gulp-sass';
import gulpRename from 'gulp-rename';

/**
 * Convert Sass into Css
 * @param  {String} srcFile - Path target file scss
 * @param  {String} nameFileMin - Nome que será gerado o arquivo
 */
export const convertSassToCss = (srcFile, nameFileMin) => {
    return gulp.src(srcFile)
        .pipe(sass({ errLogToConsole: true }).on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(csso({
            restructure: true,
            debug: true
        }))
        .pipe(gulpRename(nameFileMin))
        .pipe(gulp.dest(pathBuild.distCss));
};