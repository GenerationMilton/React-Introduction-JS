// iterate with For in arrays
const technologies = ['HTML','CSS','JavaScript','React.js','Node.js', 'Nest.js'];

console.log("access manually")
console.log(technologies[0]);
console.log(technologies[1]);
console.log(technologies[2]);
console.log(technologies[3]);
console.log(technologies[4]);
console.log(technologies[5]);

//example
console.log("access with for");
for(let i = 0; i<technologies.length; i++){
    console.log(technologies[i]);
}