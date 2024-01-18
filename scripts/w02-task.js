/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'José Angel Arteaga';
let currentYear = Date();
let profilePicture = 'images/foto.jpg';


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.getElementById('year');
const imageElement = document.getElementsByTagName('img');

let myPicture = imageElement[0];


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

myPicture.setAttribute('src', profilePicture);
myPicture.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */

const favoriteFood = ['Tacos', 'Pizza', 'Boneless', 'Carne Asada', 'Enchiladas', 'Zacahuilt'];

foodElement.innerHTML += `${favoriteFood}`;

let newFavorite = 'Adobo';

favoriteFood.push(newFavorite);

foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.shift();

foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.pop();

foodElement.innerHTML += `<br>${favoriteFood}`;
