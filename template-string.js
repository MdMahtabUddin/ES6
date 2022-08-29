// *PH 31-5 Template string, multiple line string, dynamic string

// !when needed multiline uses template string 
const newLine = `this is first line 
this is second line
this is third line
this is forth line`

console.log (newLine); 

// dynamic string 
const firstName = 'mahtab';
const lastName ='uddin';

const old = firstName +  ''  + lastName;
console.log(old);
const newStyle = `${firstName} ${lastName}`
console.log(newStyle)