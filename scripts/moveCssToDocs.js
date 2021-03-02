const fs = require('fs-extra');
const path = require('path');

// fsExtra.copy(
//     './../task/config.js',
//     './../scripts');

const targetFile = path.dirname(__dirname, '/src/assets/js/main.js');
const distFile = path.dirname(__dirname, '/scripts');
// Sync:
// fs.copy(targetFile, distFile);
fs.mkdir('../scripts/jujuba');

