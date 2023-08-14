import { useContext, useState } from "react";
import { Header } from "../component/Header";
import { Modal } from "../component/Modal";
import { Movie } from "../component/Movie";
import { MovieContext } from "../hook/MovieContext";

export const MovieListing = () => {
  const [showModal, setShowModal] = useState(false);
  const ratingArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const {
    uniqueGenres,
    dispatchMovieState,
    uniqueYear,
    yearFilter
  } = useContext(MovieContext);

  return (
    <div className="listing-main-case">
      <div className="filter-movie-sace">
        <h2>Movie</h2>

        <select
          onChange={(event) =>
            dispatchMovieState({
              type: "GENRE_FILTER",
              payload: event.target.value
            })
          }
        >
          <option value="">All Genre</option>
          {uniqueGenres.map((item, index) => {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            );
          })}
        </select>

        <select
          onChange={(event) =>
            dispatchMovieState({
              type: "RATING_FILTER",
              payload: event.target.value
            })
          }
        >
          <option value="">Rating</option>
          {ratingArray.map((item, index) => {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            );
          })}
        </select>

        <select
          onChange={(event) =>
            dispatchMovieState({
              type: "YEAR_FILTER",
              payload: event.target.value
            })
          }
        >
          <option value="">Release Year</option>
          {uniqueYear.map((item, index) => {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            );
          })}
        </select>

        <button
          className="btn btn-dark styled-btn"
          onClick={() => setShowModal(true)}
        >
          Add a Movie
        </button>
      </div>

      <div className="d-flex flex-wrap gap-1 box-case-outer">
        {!yearFilter.length ? (
          <h2>None of the Movie Match</h2>
        ) : (
          yearFilter.map((item) => {
            return <Movie item={item} key={item.id} />;
          })
        )}
        {showModal && <Modal setShowModal={setShowModal} />}
      </div>
    </div>
  );
};
