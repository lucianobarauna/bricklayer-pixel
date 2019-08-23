
import { series } from 'gulp';

import {
    cleanFolderDev,
    copyFonts,
    copyImg,
    copyMocks,
    copyJs,
    linterPug,
    compilePug,
    compileSass
} from './tasksDev';

import {
    buildClean,
    buildFonts,
    buildImg,
    buildMocks,
    buildJs,
    buildCss,
    buildHtml
} from './tasksBuild';


import upServer from './taskServer';

// Tarefa ambiente de desenvolvimento
const startDev = series(
    cleanFolderDev,
    copyFonts,
    copyImg,
    copyMocks,
    copyJs,
    linterPug,
    compilePug,
    compileSass,
    upServer
)

// Tarefa build
const startBuild = series(
    buildClean,
    buildFonts,
    buildImg,
    buildMocks,
    buildJs,
    buildCss,
    buildHtml
);

export {
    startDev,
    startBuild
};

