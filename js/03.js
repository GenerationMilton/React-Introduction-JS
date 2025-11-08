//Data types in Js

//undefined 
let customer;

console.log(`Cliente: ${customer}`);
console.log(typeof customer);

//strings
let student  = "Juan";
console.log(`Alumno: ${student}`);
console.log(typeof student);

const product ='Monitor 49 pulgadas';
console.log(`Producto: ${product}`);
console.log(typeof product);

//Numbers
const number = 20.20;
const number2= 30;
const number3 = -100;

console.log(typeof number);
console.log(typeof number2);
console.log(typeof number3);

//BigInt
const bigNumber = BigInt(12323243234344433242341);
console.log(bigNumber);
console.log(typeof bigNumber)

//Boolean
const discount = false;
console.log(typeof discount);


//null
const discount2 = null;
console.log(discount2);

//undefined
let price = undefined;
console.log(price);

//symbol
const firstSymbol = Symbol(30);
const secondSymbol = Symbol(30);

console.log(firstSymbol === secondSymbol);

