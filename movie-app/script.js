const mainDOM = document.getElementById('main');
const API_URL = 'https://api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&api_key=076f24d964e5b1548da06eeebad249b1&page=1'

// we leave without a / because the api (above) return image url that starts with /
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

// we leave one double quote at the query because we want to concat search term from search box.
const SEARCH_API = 'https://api.themoviedb.org/4/search/movie?api_key=076f24d964e5b1548da06eeebad249b1&query="'

const formDOM = document.getElementById('form');
const searchDOM = document.getElementById('search')
getMovies(API_URL);

async function getMovies(url) {
    const res = await fetch(url);
    
    //this gives us the actual data
    const data = await res.json();

    showMovies(data.results);
}

function showMovies(movies) {
    // when we search, we dont want to add movies to existing list, we want to replace them.
    mainDOM.innerHTML = '';
    console.log(mainDOM);

    // accesing the movies array with the data
    movies.forEach((movie) => {
        
        // we take only this data and call all this data a movie object.
        const { title, poster_path, vote_average, overview } = movie;
        
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `<img src="${IMG_PATH + poster_path}"
                                    alt="${title}">
                                <div class="movie-info">
                                    <h3>${title}</h3>
                                    <span class="${getClassByRate(vote_average)}">${vote_average}</span>
                                </div>
                                <div class="overview">
                                    <h3>Overview</h3>
                                    ${overview}
                                </div>`;
                            mainDOM.appendChild(movieEl);
    });
}

function getClassByRate(vote) {
    if (vote >= 8 ){
        return 'green';
    } else if (vote >= 5) {
        return 'orange'
    } else return 'red'
}

// Search form 
formDOM.addEventListener('submit', (e) => {
    e.preventDefault();

    // takes the value of the search DOM;
    const searchTerm = searchDOM.value;

    if(searchTerm && searchTerm !== '') {

        // to the search api we add the word/words what was written into input box
        getMovies(SEARCH_API + searchTerm);
    } else {

        // if the search is empty just reload the page
        window.location.reload();
    };
});


