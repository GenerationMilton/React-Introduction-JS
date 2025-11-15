//DOM events click INPUTS

const inputNombre = document.querySelector('#nombre')
inputNombre.addEventListener('input',(event) => {
    console.log(event.target.value);
})

const inputPassword = document.querySelector('#password')
inputPassword.addEventListener('input', functionPassword)

function functionPassword(){
    inputPassword.type = "text"
    
    setTimeout(() => {
        inputPassword.type = 'password'
    }, 300);
}