import PropTypes from "prop-types";

export function MovieItem({ movieName, movieImage }) {
  MovieItem.propTypes = PropTypes.any;
  return (
    <>
      <div className="movie-item">
        <img className="movie-image" src={movieImage} />
        <button className="movie-open">{movieName}</button>
      </div>
    </>
  );
}
