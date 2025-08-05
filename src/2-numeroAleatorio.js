/*
  Creamos un proyecto donde genere un numero 
  aleatorio, tomando los datos de la terminal 
  pero si no le paso los datos tendremos por 
  defecto el valor min 1 y max 100
*/

const argumentos = process.argv;
const args = argumentos.slice(2)
// console.log(argumentos);
console.log(args);

// Variables por defecto, modificables
let min = 1;
let max = 100;

// Verificar si los datos de los argumentos son correctos


if (args.length === 2) {
  // Cambiar el tipo de dato a number
  const minParseado = parseInt(args[0])
  const maxParseado = parseInt(args[1])
  // Preguntar si minParseado es un numero
  if (!isNaN(minParseado) && !isNaN(maxParseado) && minParseado < maxParseado) {
    min = minParseado
    max = maxParseado
  }
  else {
    console.log('Error: Valores fuera del rango, se usaran los valores por defecto (1 - 100)')
  }
}

// Agregar la logica del numero aleatorio
const aleatorio = Math.floor(Math.random() * (max - min) + min);
console.log(`El numero aleatorio generado es: ${aleatorio}, en el rango ingresado (${min} - ${max})`);
