// PH 32-4 Array map to do one line loop magic

const numbers = [4,6,10,15];
const output2 =[];
const doubleIt = number => number *2;
for (let number of numbers){
    const result = doubleIt(number);
    output2.push(result);

}
// console.log(output);

// *map 
// loop through each element 
// for each element call the provided function 
// result for each element will be stored in a array 

const output = numbers.map(doubleIt);
console.log(output);

