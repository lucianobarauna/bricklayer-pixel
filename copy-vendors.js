
const chalk = require('chalk');
const emoji = require('node-emoji');
const fse = require('fs-extra');

const log = console.log;

fse.copy('node_modules/bootstrap', './src/vendor/bootstrap', function (err) {
    if(err) {
        console.error(err);
        return;
    }
    log(`${emoji.get('muscle')} ${chalk.green('Tudo copiado para vendor')}`);
});
