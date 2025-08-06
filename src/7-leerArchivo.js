const fs = require('fs')
// import fs from 'fs'

fs.readFile('./listaDePersonajes.txt', 'utf8', (err,data) => {
  if(err) {
    console.error(`Ocurrio un error al intentar abrir el archivo ${err}`);
    return;
  }
  console.log('Datos leidos: ')
  console.log(data)
})
