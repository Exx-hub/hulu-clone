import axios from "axios";

export const instance = axios.create({
	method: "get",
	baseURL: "https://api.themoviedb.org/3",
});

const API_KEY = "d242ba2904962671a013d57ae72adc98";

export const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorroMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
	fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
	fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
	fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
	fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
};

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjQyYmEyOTA0OTYyNjcxYTAxM2Q1N2FlNzJhZGM5OCIsInN1YiI6IjVmMGMwNjA4ZjQ4YjM0MDAzN2ZkY2FkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uFk_6yVfVtfkxheAhPGXUX4WIdzMShGGFlIkjC5UkNg
