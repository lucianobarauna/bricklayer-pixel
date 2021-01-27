/**
 * Build taks
 */

import { pathBuild } from './configTasks';

import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import del from 'del';
import gulp from 'gulp';
import gulpImgMin from 'gulp-imagemin';
import gulpPug from 'gulp-pug';
import gulpPugLinter from 'gulp-pug-linter';
import pugLintStylish from 'puglint-stylish';
import gulpRename from 'gulp-rename';
import gulpUglify from 'gulp-uglify-es';
import sass from 'gulp-sass';

/**
 * Clean folder build.
 */
const buildClean = () => del([pathBuild.folderDist])

/**
 * Copy fonts to folder build
 */
const buildFonts = () => {
    return gulp.src(pathBuild.fonts[0])
      .pipe(gulp.dest(pathBuild.fonts[1]))
}

/**
 * Copy img to folder build
 */
const buildImg = () => {
    return gulp.src(pathBuild.img[0])
      .pipe(gulpImgMin(
        [
          gulpImgMin.optipng({ optimizationLevel: 5 }),
          gulpImgMin.svgo({
              plugins: [
                  {removeViewBox: true},
                  {cleanupIDs: false}
              ]
          })
        ], {
            verbose: true
        }
      )).pipe(gulp.dest(pathBuild.img[1]))
}

/**
 * Copy mocks to folder build
 */
const buildMocks = () => {
    return gulp.src(pathBuild.mocks[0])
      .pipe(gulp.dest(pathBuild.mocks[1]))
}

/**
 * Copy js to folder build
 */
const buildJs = () => {
    return gulp.src(pathBuild.js[0])
      .pipe(gulpUglify({
        compress: {
          drop_console: true
        }
      }))
      .pipe(gulpRename(pathBuild.js[1]))
      .pipe(gulp.dest(pathBuild.js[2]))
}

/**
 * Copy CSS to folder build
 */
const buildCss = () => {
    return gulp.src(pathBuild.srcSass)
      .pipe(sass({ errLogToConsole: true }).on('error', sass.logError))
      .pipe(autoprefixer({
          cascade: false
      }))
      .pipe(csso({
          restructure: true,
          debug: true
      }))
      .pipe(gulpRename(pathBuild.cssMin))
      .pipe(gulp.dest(pathBuild.distCss))
}

/**
 * Linter pug
 * Check linter pug
 */
const buildHtml = () => {
    return gulp.src(pathBuild.srcPug)
      .pipe(gulpPugLinter({
          reporter: pugLintStylish,
          failAfterError: true
      })).pipe(gulpPug({
          pretty: true
      })).pipe(gulp.dest(pathBuild.distPug))
};


export {
    buildClean,
    buildFonts,
    buildImg,
    buildMocks,
    buildJs,
    buildCss,
    buildHtml
}
