// iterate with For in arrays
const technologies = ['HTML','CSS','JavaScript','React.js','Node.js', 'Nest.js'];

console.log("**access manually**")
console.log(technologies[0]);
console.log(technologies[1]);
console.log(technologies[2]);
console.log(technologies[3]);
console.log(technologies[4]);
console.log(technologies[5]);

//example 1
console.log("**access with for**");
for(let i = 0; i<technologies.length; i++){
    console.log(technologies[i]);
}

//Foreach example 2
console.log("**access forEach**")
technologies.forEach(function(tech){
console.log(tech)
});
 
// map example 3 -- generates an new array
console.log("**access map**")
const arrayMap = technologies.map(function(tech){
    return tech
});

console.log(arrayMap);

// for ...of executes an block code
console.log("**access for of**")
for(let tech of technologies){
    console.log(tech);
}



