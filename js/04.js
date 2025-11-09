//OBJECTS
const product = {
    nameProduct: "Tablet",
    price: 300,
    available: false
}

console.log(product);
console.table(product);

console.log(product.nameProduct);
console.log(product.price);

//destructuring
console.log("**destructuring**");
const { nameProduct, price, available } = product
console.log(nameProduct);
console.log(price);
console.log(available);

//without destructuring
// const nameProduct = product.nameProduct;
// const price = product.price;
// const available = product.available;
// console.log(name);
// console.log(price);
// console.log(available);

// Object Literal Enhacement
const autenticated = true;
const user = "Milton";

const newObject = {
    autenticated,
    user
}
console.log(newObject);

