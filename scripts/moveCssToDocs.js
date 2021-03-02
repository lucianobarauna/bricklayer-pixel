const fs = require('fs-extra');

// fsExtra.copy(
//     './../task/config.js',
//     './../scripts');

// Sync:
try {
    fs.copySync('/task/config.js', '/scripts');
    console.log('success!');
} catch (err) {
    console.error(err);
}