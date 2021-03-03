const fse = require('fs-extra');


/**
 * Move arquivos css para a documentação
 */
fse.move('./build/css/bricklayer-components.min.css', './my-website/src/css/bricklayer-components.min.css', { overwrite: true }, (err) => {
    if (err) throw err;
    console.log('Arquivo movido');
});

