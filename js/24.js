
import multiplicar, { sumar as funcionSumar, restar, division } from './funciones.js'

const resultado = funcionSumar(40, 10)
const resultatoMultiplicar = multiplicar(10, 10);
const resultadoDividir = division(20, 10);
const resultadoRestar = restar(10, 5);

console.log(resultado);
console.log(resultatoMultiplicar);
console.log(resultadoDividir);
console.log(resultadoRestar);