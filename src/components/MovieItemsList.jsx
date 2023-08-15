import PropTypes from "prop-types";

import { MovieItem } from "./MovieItem.jsx";

export function MovieItemsList({ search, movies, fetchMovies }) {
  MovieItemsList.propTypes = PropTypes.any;

  return (
    <>
      <h2 className="subtitle">{search == "" ? `Popular movies (${movies.total_results})` : `Movies found (${movies.total_results})`}</h2>

      <div className="movies-container">
        {movies.results.length === 0 && "No movies"}
        {movies.results.map((movie) => {
          return <MovieItem key={movie.id} movieName={movie.title} movieImage={movie.poster_path != null ? `https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}` : "https://movienewsletters.net/photos/000000h1.jpg"} />;
        })}
      </div>
      <div className="page-container">
        <button
          className={movies.page <= 1 ? "page-button deselected" : "page-button"}
          onClick={() => {
            fetchMovies(1);
          }}
        >
          First page
        </button>
        <button
          className={movies.page <= 1 ? "page-button deselected" : "page-button"}
          onClick={() => {
            fetchMovies(movies.page - 1);
          }}
        >
          Previous page
        </button>
        <button
          className={movies.page >= movies.total_pages ? "page-button deselected" : "page-button"}
          onClick={() => {
            fetchMovies(movies.page + 1);
          }}
        >
          Next page
        </button>
        <button
          className={movies.page >= movies.total_pages ? "page-button deselected" : "page-button"}
          onClick={() => {
            fetchMovies(movies.total_pages);
          }}
        >
          Last page
        </button>
      </div>
    </>
  );
}
