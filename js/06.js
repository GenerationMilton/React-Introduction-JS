//OBJECTS - destructuring 2 or more objects

const product = {
    nameExample: "Tablet",
    price: 300,
    available: false
}

const customer = {
    nameExample: "Milton",
    premium: true,
    address:{
        street: "Calle 48A Sur"
    }

}

const { nameExample } = product;
//destructuring a name with rename and access to an object inside
const { nameExample: nameCustomer, address: {street} } = customer;


console.log(nameExample);
console.log(nameCustomer);

console.log(street)