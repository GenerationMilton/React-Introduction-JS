//ternary
const authenticated = true

const balance = 1000;
const pay = 1200;
const card = true;

authenticated ? console.log('Usuario autenticado') : console.log('No autenticado, ir a Login');

balance > pay || card ? console.log('Si puedes pagar') : console.log('No, no puedes pagar');