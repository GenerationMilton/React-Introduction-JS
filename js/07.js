//OBJECTS - Union 2 or more objects

const product = {
    nameExample: "Tablet",
    price: 300,
    available: false
}

const customer = {
    nameExample: "Milton",
    premium: true
}

const cart = {
    amount: 2,
    ...product //spread operator
}

console.log(cart);
//object from 2 objects and copy object inside an object
const newObject = {
    product,
    customer
}
console.log(newObject);

//Flat object
const newObject2 = {
    ...product,
    ...customer
}
console.log(newObject2);

//Object assing union 2 or more objects
const newObject3 = Object.assign(product, customer);
console.log(newObject3);