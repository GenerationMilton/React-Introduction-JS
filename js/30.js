//DOM events click

//register events in DOM listener
const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')

heading.addEventListener('click', ()=> {
    heading.textContent = 'Nuevo heading al dar click';
})

heading.addEventListener('mouseenter',()=>{
    heading.textContent = 'Nuevo heading al dar click...'
})

heading.addEventListener('mouseleave',()=>{
    heading.textContent = 'Saliendo...'
})

enlaces.forEach( enlace => {
    enlace.addEventListener('click',(event) => {

        event.preventDefault()
        event.target.textContent = 'Diste click...'

        console.log(event.target);
        // console.log('diste click en un enlace...')
    })
})