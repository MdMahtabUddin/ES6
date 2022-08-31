// PH 32-2 Destructuring Object to extract values to variables

// const fish ={ id: 45,name : 'hilsha', price: 2000, place: 'chandpur'};

// console.log(fish.name);
// console.log(fish.id);


// destructuring
const company ={ name:'Gp',
 ceo:{id:40, name:'mahtab'},
 web:{work: 'web development', language:'javascript',framwork:'react'}
};

const {work, language,} =company.web;
const {name, id} =company.ceo;

console.log( name, work);