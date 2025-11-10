// Handling Arrays (PUSH MUTATE ELEMENTS)
const technologies = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js'];
// technologies.push('Nest.js');

//SPREAD ARRAY NO MUTATE ELEMNTS
const newArray = [...technologies, 'Nest.js'];
console.table(technologies);

console.table(newArray);

//Delete the first Element from and array and returns that removed element.
newArray.shift();
console.table(newArray);

//array witout mutate elements(NO MUTATE). Filter method of array, instance creates a shallow copy of a portion of a given array, filtered
//down to just the elements from the given array that pass the test implemented by the provided function
const technologies2 = technologies.filter(function(tech){
    if(tech !== 'HTML'){
        return tech;
    }
});

console.log(technologies2);

//The map() method of array instances creates a new array populated with the results of calling a provided fuction on every
//element in the calling array.
const technologies3 = technologies.map(function(tech){
    if(tech === 'Node.js'){
        return 'Nest.js'
    }else {
        return tech
    }
});
console.log(technologies3);