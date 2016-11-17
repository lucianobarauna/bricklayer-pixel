// Modulos gulp
var gulp = require("gulp"),
    plugins = require('gulp-load-plugins')({pattern: '*'}),
    config = require('./gulp-config.json');

// Limpa o diretorio
require(config.tasksPath + '/taskClean')(gulp, plugins, config);

// Inicia diretorio raiz com favicon
require(config.tasksPath + '/taskFavico')(gulp, plugins, config);

// Otimiza imagens
require(config.tasksPath + '/taskBuildImg')(gulp, plugins, config);

// Copia bibliotecas
require(config.tasksPath + '/taskCopyLibs')(gulp, plugins, config);

// Minifica e concatena
require(config.tasksPath + '/taskBuildUsemin')(gulp, plugins, config);

// Start server
require(config.tasksPath + '/taskServer')(gulp, plugins, config);

// Build projeto
require(config.tasksPath + '/taskBuild')(gulp, plugins, config);
