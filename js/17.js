const technologies = ['HTML', 'CSS','JavaScript', 'React.js', 'Node.js'];
const numbers = [10, 20, 30];

//Filter arrow function
const newArray = technologies.filter((tech) => tech !== 'HTML');

//filter function expression
const technologies2 = technologies.filter(function(tech){
    if(tech !== 'HTML'){
        return tech
    }
})

//filter numbers
const result = numbers.filter(number => number >15);

//includes technologies
const result2 = technologies.includes('CSS')

console.log(newArray);
console.log(technologies2);
console.log(result);
console.log(result2);