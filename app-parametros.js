//const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivo } = require('./multiplicar/multiplicar');


//console.log(multiplicar);

let argumentos = process.argv;
let base = argumentos[2].split('=')[1];
console.log(base);



crearArchivo(base).then((archivo) => console.log(`Archivo creado ${archivo}`))
    .catch(e => console.log(e));