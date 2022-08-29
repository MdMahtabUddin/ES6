// PH 31-6 Arrow function, multiple parameter, function body

// function declaration 
function add (num1, num2){
    return num1 + num2;
}
 const newAdd =add(45, 55);
 console.log(newAdd);

// function expression 
 const add2 = function add2(num1 ,num2){
    return num1 *num2
 }
 const newAdd2 =add2(50, 50);
 console.log(newAdd2)

//  function expression (anonymous function)

const add3 = function(num1, num2){
    return num1 / num2;
}
const newAdd3 =add3(50, 10);
console.log (newAdd3);

// Arrow function 

const add4 = (num1, num2) => num1 -num2;

const newAdd4 = add4(500,300);
console.log(newAdd4);