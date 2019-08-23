/**
 * Devs taks
 */

import { pathDev } from './configTasks';

import autoprefixer from 'gulp-autoprefixer';
import del from 'del';
import gulp from 'gulp';
import gulpPug from 'gulp-pug';
import gulpPugLinter from 'gulp-pug-linter';
import gulpRename from 'gulp-rename';
import pugLintStylish from 'puglint-stylish';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';


/**
 * Clean Folder dev to execute live reload browser.
 */
const cleanFolderDev = () =>  del(pathDev.clean)


/**
 * Copy fonts to folder dev
 */
const copyFonts = () => {
    return gulp.src(pathDev.fonts[0])
        .pipe(gulp.dest(pathDev.fonts[1]))
}

/**
 * Copy img to folder dev
 */
const copyImg = () => {
    return gulp.src(pathDev.img[0])
        .pipe(gulp.dest(pathDev.img[1]))
}

/**
 * Copy mocks to folder dev
 */
const copyMocks = () => {
    return gulp.src(pathDev.mocks[0])
        .pipe(gulp.dest(pathDev.mocks[1]))
}

/**
 * Copy js to folder dev
 */
const copyJs = () => {
    return gulp.src(pathDev.js[0])
        .pipe(gulp.dest(pathDev.js[1]))
}

/**
 * Linter pug
 * Check linter pug
 */
const linterPug = () => {
    return gulp.src(pathDev.pug[0])
        .pipe(gulpPugLinter({
            reporter: pugLintStylish,
            failAfterError: true
        }))
};

/**
 * Compile templates pug
 */
const compilePug = () => {
    return gulp.src(pathDev.pug[0])
        .pipe(gulpPug({
            pretty: true
        })).pipe(gulp.dest(pathDev.pug[1]))
};

/**
 * Compile sass
 * Using autoprefixer to compatibility of browsers
 */
const compileSass = () => {
    return gulp.src(pathDev.sass[0])
        .pipe(sourcemaps.init())
        .pipe(sass({ errLogToConsole: true }).on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulpRename(pathDev.sass[1]))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(pathDev.sass[2]))
}

export {
    cleanFolderDev,
    copyFonts,
    copyImg,
    copyMocks,
    copyJs,
    linterPug,
    compilePug,
    compileSass
}