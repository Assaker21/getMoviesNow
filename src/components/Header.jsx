import PropTypes from "prop-types";

export function Header({ setSearch, fetchMovies }) {
  Header.propTypes = PropTypes.any;

  return (
    <>
      <form className="header">
        <h1 className="title">&gt;&gt; getMoviesNow(</h1>
        <input
          className="search-input"
          placeholder="Browse movies"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <h1 className="title">);</h1>
        <button
          className="search-button"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            fetchMovies(1);
          }}
        >
          Run
        </button>
      </form>
    </>
  );
}
