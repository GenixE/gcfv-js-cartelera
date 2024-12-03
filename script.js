// Now Playing
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: '' // Add your API key here
    }
};

const fetchMovies = async () => {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1', options);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};

const btn = document.getElementById('btn');
btn.addEventListener('click', async () => {
    const container = document.querySelector('.container');
    const data = await fetchMovies();
    data.results.forEach(movie => {
        const div = document.createElement('div');
        div.classList.add('container');

        const title = document.createElement('h2');
        title.textContent = movie.title;
        title.classList.add('title');
        div.appendChild(title);

        const poster = document.createElement('img');
        poster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        poster.alt = movie.title;
        poster.classList.add('poster');
        div.appendChild(poster);

        const overview = document.createElement('p');
        overview.textContent = movie.overview;
        overview.classList.add('p');
        div.appendChild(overview);

        container.appendChild(div);
    });
});