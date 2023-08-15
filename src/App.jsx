import { useState, useEffect } from "react";

import "./css/general.css";
import "./css/header.css";
import "./css/movie-items.css";

import { Header } from "./components/Header.jsx";
import { MovieItemsList } from "./components/MovieItemsList.jsx";

export default function App() {
  const [movies, setMovies] = useState({ results: [], total_pages: 0 });
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=88df10f7e985489842c47f1109bdbfae")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data);
      });
  }, []);

  function fetchMovies(page) {
    fetch(search == "" ? `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&api_key=88df10f7e985489842c47f1109bdbfae` : `https://api.themoviedb.org/3/search/movie?api_key=88df10f7e985489842c47f1109bdbfae&query=${search}&page=${page}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data);
      });
  }

  return (
    <>
      <Header setSearch={setSearch} fetchMovies={fetchMovies} />
      <MovieItemsList movies={movies} fetchMovies={fetchMovies} />
    </>
  );
}
