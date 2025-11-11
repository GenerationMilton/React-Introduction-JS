// functions that return values

//function expression
const sumar = function(numero1 = 0, numero2= 0){
    return numero1 + numero2
}

//function declaration
function sumar2(numero1 = 0, numero2= 0){
    return numero1 + numero2
}

//arrow function
const sumar3 = (numero1 = 0, numero2= 0) =>{
    return numero1+numero2;
} 

const resultado = sumar(10,20);
const resultado2 = sumar2(10,30);
const resultado3= sumar3(10,40);

console.log(resultado);
console.log(resultado2);
console.log(resultado3);

