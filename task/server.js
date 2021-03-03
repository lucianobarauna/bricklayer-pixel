/**
 * Server taks
 */

import { watch, series } from 'gulp';
import { pathServer } from './config';
import browserSync from 'browser-sync';

import {
    linterPug,
    compilePug,
    compileSass,
    copyJs,
    copyImg
} from './dev';

/*
* Task to create a development server with Browser Sync
* Everytime a css, js, html file is changed, the server reloads the page
*/

const upServer = () => {
    browserSync.init({
        server: pathServer.server
    });

    watch(pathServer.srcSass, series(compileSass));
    watch(pathServer.srcPug, series(linterPug, compilePug));
    watch(pathServer.srcJs, series(copyJs));
    watch(pathServer.srcImg, series(copyImg));
    watch(pathServer.watchs).on('change', browserSync.reload);
};

export default upServer;