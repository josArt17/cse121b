/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: 'Jose Angel Arteaga',
    photo : 'images/foto.jpg',
    favoriteFoods: ['Tacos', 'Pizza', 'Boneless', 'Carne Asada', 'Enchiladas', 'Zacahuilt'],
    hobbies : ['videogames', 'footbal', 'movies', 'coding'],
    placesLived: []
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Tempoal',
        length: '23 years'
    },
    {
        place: 'Mexico City',
        length: '3 years'
    },
    {
        place: 'Tampico',
        length: '3 years'
    }
);


/* DOM Manipulation - Output */

/* Name */

let name = document.getElementById('name').innerText = myProfile.name;

/* Photo with attributes */
let photo = document.getElementById('photo');
photo.setAttribute('src', myProfile.photo);
photo.setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
let favoriteFoods = document.getElementById('favorite-foods');
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.innerText = food;
    favoriteFoods.appendChild(li);
});

/* Hobbies List */
let hobbies = document.getElementById('hobbies');
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement('li');
    li.innerText = hobbie;
    hobbies.appendChild(li);
});

/* Places Lived DataList */
let placesLived = document.getElementById('places-lived');

myProfile.placesLived.forEach(places => {
    let place = places.place;
    let length = places.length;

    let dt = document.createElement('dt');
    dt.innerText = place;
    
    let dd = document.createElement('dd');
    dd.innerText = length;
    
    placesLived.appendChild(dt);
    placesLived.appendChild(dd);
});
