
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
} from './task/dev';

import {
    buildClean,
    buildFonts,
    buildImg,
    buildMocks,
    buildJs,
    buildCss,
    buildHtml
} from './task/build';


import upServer from './task/server';

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
);

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

// Tarefa build components
const startBuildComp = series(
    startBuild
);

export {
    startDev,
    startBuild,
    startBuildComp
};

