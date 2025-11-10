//OBJECTS - MANIPULATING

const product = {
    nameProduct: "Tablet",
    price: 300,
    available: false
}
// don't change any value in an object wiht freeze
// Object.freeze(product);

//don't add new properties and delete
Object.seal(product);

//Rewrite a value
product.available = true;

//Add a value
product.image = 'image.jpg';

//Delete a property
delete product.price;

console.log(product);