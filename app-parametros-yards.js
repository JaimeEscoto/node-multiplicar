const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
//console.log(multiplicar);
console.log(argv);


switch (comando) {
    case 'crear':
        console.log('Estamos creando');
        crearArchivo(argv.base, argv.limite).then((archivo) => console.log(`Archivo creado ${colors.green(archivo)}`))
            .catch(e => console.log(e));
        break;
    case 'listar':
        console.log('Estamos listando');
        listarTabla(argv.base, argv.limite);
        break;

    default:
        console.log('Comando no reconocido');
        break;
}