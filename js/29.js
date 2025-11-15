// Handling elements HTML with JS
const heading = document.querySelector('.heading');
const enlaces = document.querySelectorAll('.navegacion a');

//handling one element to manipulate
heading.textContent = 'Un nuevo heading...'
heading.id = 'Un nuevo ID'

//delete
// heading.removeAttribute('class')

const inputNombre = document.querySelector('#nombre');
inputNombre.value =' Un nuevo valor...'

console.log(inputNombre.classList);

//handling multiple elements iterate above all elements
console.log(enlaces);
enlaces[0].textContent = 'Nuevo Enlace'

enlaces.forEach(enlace => enlace.textContent = 'Nuevo Enlace')

