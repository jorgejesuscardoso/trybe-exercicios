const API_BASE = 'http://fake-api-p03k.onrender.com';

export function getMovies() {
    const movies = fetch(`${API_BASE}/movies`);
    console.log(movies);
};
