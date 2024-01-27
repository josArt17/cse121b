let firstName = "Antonia";
let lastName = "Francesca";

//function fullName(first, last) {
    //return `${first} ${last}`;
//}


//const fullName = function(first, last){
    //return `${first} ${last}`;
//}

const fullName = (first, last) => `${first} ${last}`;

document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);


let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

let namesB = names.filter(name => name.charAt(0) === 'B');

let nameLengths = names.map((name) => name.length);

names.reduce((total, name) => total + name.length, 0) / names.length;