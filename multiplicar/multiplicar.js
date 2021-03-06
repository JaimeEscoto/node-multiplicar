const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {

    console.log('=============================='.green);
    console.log(`=====tabla de ${base}====`);
    console.log('=============================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${i} x ${base} = ${ i*base} \n`.red);
    }


}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido para la base= ${base} no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido para el limite= ${limite} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} x ${i} = ${base*i} \n`);

        }
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla${base}-al-${limite}.txt`);
        });

    })

};
module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
}