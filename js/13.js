// Function Declaration

function sumar(number1, number2){
    console.log(number1 + number2);
    

}
sumar(10, 20);
//Not a number NaN
sumar(10)


//default parameters
function sumar2(number1 = 0, number2 = 0){
    console.log(number1);
    console.log(number2);
    console.log(number1+number2);
}

sumar2(10);