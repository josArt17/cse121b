/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.getElementById('temples');

let templeList = [];

const url = 'https://byui-cse.github.io/cse121b-ww-course/resources/temples.json';

let buttonFilter = document.getElementById('filtered');

/* async displayTemples Function */

const displayTemples = (temples) =>{
    temples.forEach(element => {
        let name = element.templeName;
        let urlTemple = element.imageUrl;
        let location = element.location;

        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.innerText = name;

        let img = document.createElement('img');
        img.setAttribute('src', urlTemple);
        img.setAttribute('alt', location);

        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        data.forEach(element => {
            templeList.push(element);
        })
        displayTemples(templeList)
    }
};

/* reset Function */

function reset(){
    templesElement.innerHTML = "";
}

/* filterTemples Function */

const filterTemples = (temples) => {
    reset();
    let filter = document.getElementById('filtered').value;

    switch (filter) {
        
        case "utah":
            let utahTemple = [];
            temples.forEach(element =>{
                let location = element.location.toLowerCase();
                if (location.includes(filter)) {
                    utahTemple.push(element);
                        
                }
            });
            displayTemples(utahTemple);
            break;
        
        case "notutah":
            let notUtahTemple = [];
            temples.forEach(element =>{
                let location = element.location.toLowerCase();
                if (!location.includes("utah")) {
                    notUtahTemple.push(element);
                        
                }
            });
            displayTemples(notUtahTemple);
            break;
            case "older":
                let olderTemple = [];
                const comparDate = new Date(1950, 0, 1);

                temples.forEach(element =>{
                    let date = new Date(element.dedicated);
                    if (date < comparDate) {
                        olderTemple.push(element);
                    }

                });
                displayTemples(olderTemple);
                break;
        default:
            displayTemples(temples);
            break;
    }
}

getTemples();

/* Event Listener */


buttonFilter.addEventListener('click', function(){
    filterTemples(templeList);
})