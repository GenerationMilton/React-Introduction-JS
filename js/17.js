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

//some - return someone if almost least is true 
console.log("result Some");
const resultSome = numbers.some(number => number >15)
console.log(resultSome);

//Find - return the first element that fulfills the condition
console.log("result Find");
const resultFind = numbers.find( number => number > 15);
console.log(resultFind);

// Every - Return true or false if all fulfill the condition
console.log("result Every");
const resultEvery = numbers.every(number => number > 15);
console.log(resultEvery);

// Reduce - returns a cumulative total
const resultReduce = numbers.reduce((total, number) =>{
    console.log(total)
    console.log(number)

    return total + number
},0)

console.log(resultReduce);