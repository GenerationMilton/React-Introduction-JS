//DOM events click -submit

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', event => {
    event.preventDefault()

    const nombre = document.querySelector('#nombre').value
    const password = document.querySelector('#password').value

    //prevent new alerts
    const alertaPrevia = document.querySelector('.alerta')
    if(alertaPrevia){
        alertaPrevia.remove()
    }

    //generate alert
    const alerta = document.createElement('DIV')
    // alerta.textContent = 'Contenido de Alerta'
    // add clases
    alerta.classList.add('alerta','text-white','uppercase','text-sm','text-center','p-2','font-black')
   

    // make conditional to show the alert
    if (nombre === '' || password === '') {
        alerta.textContent = 'Todos los campos son obligatorios...';
        alerta.classList.add('bg-red-500');
    }else {
        alerta.textContent = 'Todo bien, iniciando sesión...'
        alerta.classList.add('bg-green-500')
    }
   
    //show alert in html with childs of forms
    formulario.appendChild(alerta)

    setTimeout(() => {
        alerta.remove()
    }, 3000);
})

