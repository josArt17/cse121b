/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2){
    return number1 + number2;
}

function addNumbers(){

    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

let addButton = document.getElementById('addNumbers');

addButton.addEventListener('click', function(){
    addNumbers();
});


/* Function Expression - Subtract Numbers */

function substract(number1, number2){
    return number1 - number2;
}

function substractNumbers(){

    let substractNumber1 = Number(document.querySelector('#subtract1').value);
    let substractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = substract(substractNumber1, substractNumber2);
}

let substractButton = document.getElementById('subtractNumbers');

substractButton.addEventListener('click', function(){
    substractNumbers();
});


/* Arrow Function - Multiply Numbers */

multiplyNumbers = () => {
    let factorNumber1 = Number(document.querySelector('#factor1').value);
    let factorNumber2 = Number(document.querySelector('#factor2').value);

    let product  = factorNumber1 * factorNumber2;

    document.querySelector('#product').value = product;
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

divideNumbers = () => {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);

    let result = dividend / divisor;

    document.querySelector('#quotient').value = result;
};

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

getTotalDue = () => {
 let subtotal = Number(document.querySelector('#subtotal').value);

 let member = document.querySelector('#member');

 if (member.checked) {
    let total = subtotal * .80;
    document.querySelector('#total').innerHTML = `$${total.toFixed(2)}`;
 } else {
    document.querySelector('#total').innerHTML = `$${subtotal.toFixed(2)}`;
 }

};

document.querySelector('#getTotal').addEventListener('click', getTotalDue);

/* ARRAY METHODS - Functional Programming */

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
/* Output Source Array */
document.querySelector('#array').innerHTML = numbersArray;
/* Output Odds Only Array */

let odd = numbersArray.filter(number => number % 2 !== 0);
document.querySelector('#odds').innerHTML = odd;

/* Output Evens Only Array */

let evens = numbersArray.filter(number => number % 2 == 0);
document.querySelector('#evens').innerHTML = evens;

/* Output Sum of Org. Array */
let sum = numbersArray.reduce((total, number) => {
    return total + number
}, 0);

document.querySelector('#sumOfArray').innerHTML = sum;
/* Output Multiplied by 2 Array */

let multiply = numbersArray.map(number => {
    return number * 2;
});

document.querySelector('#multiplied').innerHTML = multiply;

/* Output Sum of Multiplied by 2 Array */

let sumOf = multiply.reduce((total, number) => {
    return total + number;
}, 0);

document.querySelector('#sumOfMultiplied').innerHTML = sumOf;
