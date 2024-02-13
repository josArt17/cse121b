const randomUrl = "https://animechan.xyz/api/random";

const imagesApi = "https://api.themoviedb.org/3/search/multi?query=";
const aPiKey = "1f2d29133a09d55a732455e91ac076f2";
let link = "https://image.tmdb.org/t/p/original";

const randomButton = document.getElementById("randomQuote");

const contQuote = document.getElementById('quote');

const spinner = document.getElementById('spinnerBoder');

const data = [];
const image = [];

const getQuote = async () => {
    spinner.style.display = 'block';
    const response = await fetch(randomUrl);
    spinner.style.display = 'none';
    if (response.ok) {
        const dataQuote = await response.json();
        data.push(dataQuote);
        showQuote(data);
    } else {
        console.log("Error al consumir la informacion");
    }
}

const searchImage = async (anime) => {
    let nameAnime = anime.toLowerCase();
    let url = `${imagesApi}${anime}&api_key=${aPiKey}`
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        let foundMatch = false;

        data.results.forEach(element => {
            let name = element.name;
            let title = element.title;

            let lowerName = name ? name.toLowerCase() : '';
            let lowerTitle = title ? title.toLowerCase() : '';

            let backdrop = element.backdrop_path;

            if (nameAnime === lowerName || nameAnime === lowerTitle) {
                let poster = `url(${link}${backdrop})`;
                contQuote.style.backgroundImage = poster;
                contQuote.style.backgroundSize = 'cover';
                foundMatch = true;
            }
        });

        if (!foundMatch) {
            let poster = 'url(images/unsplash-photo-2.jpg)';
            contQuote.style.backgroundImage = poster;
            contQuote.style.backgroundSize = 'cover';
        }
    }
}


function showQuote(array){
    array.forEach(element => {

        contQuote.innerHTML = "";

        let anime = element.anime;
        searchImage(anime);
        let character = element.character;
        let id = element.id;
        let quote = element.quote;

        let contTextShadow = document.createElement('div');
        contTextShadow.classList.add("d-flex", "flex-column", "h-100", "p-5", "pb-3", "text-shadow-1");

        let h3 = document.createElement('h3');
        h3.classList.add("pt-5", "mt-5", "mb-4", "display-6", "lh-1", "fw-bold");
        h3.innerText = quote;

        let ulContainer = document.createElement('ul');
        ulContainer.classList.add("d-flex", "list-unstyled", "mt-auto");

        let liAnime = document.createElement('li');
        liAnime.classList.add("me-auto");

        let pAnime = document.createElement('p');
        pAnime.innerText = anime;

        let liCharacter = document.createElement('li');
        liCharacter.classList.add("d-flex", "align-items-center");

        let pCharacter = document.createElement('p');
        pCharacter.innerText = character;

        liCharacter.appendChild(pCharacter);
        liAnime.appendChild(pAnime);

        contTextShadow.appendChild(h3);

        contTextShadow.appendChild(ulContainer);

        ulContainer.appendChild(liAnime);
        ulContainer.appendChild(liCharacter);

        contQuote.appendChild(contTextShadow);
    });
}

randomButton.addEventListener('click', function(){
    getQuote();
}); 

