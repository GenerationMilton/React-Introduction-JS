//conditionals
const available = 4000;
const withdraw = 200;

const auth = true;

if(auth){

    console.log('Acceso al sistema...')
} else {
    console.log('No tienes permiso, inicia sesión')
};

/**
 *  > Mayor que
 *  < Menor que 
 *  >= Mayor o igual
 *  <= Menor o igual
 *  === Igual estricto
 * !== Diferente a
 */
if(available > withdraw){
    console.log('Si puedes retirar');
} else {
    console.log('Saldo insuficiente');
}