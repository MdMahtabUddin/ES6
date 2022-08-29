// PH 31-4 Function default parameter for not provided values
// default parameter num2 =35  , when a parameter declare , default is not working
function numbers (num1, num2 =35){
// console.log(num1, num2)
// before default parameter way-1
num2 = num2 || 0;
//before default parameter way-2
// if (num2 == undefined){
//     num2 = 0;
// }
const total =num1 +num2;
return total;

}
const totalNumber =numbers(52, 58);
console.log(totalNumber);