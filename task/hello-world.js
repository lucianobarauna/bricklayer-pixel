
const chalk = require('chalk');
const emoji = require('node-emoji');

const log = console.log;

log(`${emoji.get('rocket')} ${chalk.blue('Olá mundo o foguete subiu')}`);

log(`${emoji.get('boom')} ${chalk.red('Mais ele explodiu!! ')}`);

log(`${emoji.get('muscle')} ${chalk.green('Mas temos força...Isso foi um exemplo de script hook')}`);