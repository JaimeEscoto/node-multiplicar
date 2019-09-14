//const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivo } = require('./multiplicar/multiplicar');
let base = '22';

//console.log(multiplicar);


crearArchivo(base).then((archivo) => console.log(`Archivo creado ${archivo}`))
    .catch(e => console.log(e));