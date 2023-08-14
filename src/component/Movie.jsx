import { useContext } from "react";
import { Link } from "react-router-dom";

import { MovieContext } from "../hook/MovieContext";

export const Movie = ({ item }) => {
  const { dispatchMovieState, isStarred } = useContext(MovieContext);
  const {
    id,
    title,
    year,
    genre,
    rating,
    director,
    writer,
    cast,
    summary,
    imageURL
  } = item;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <Link to={`/movie/${id}`}>
        <img src={imageURL} className="card-img-top" alt={title} />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h2>{[genre].join(", ")}</h2>
        <p className="card-text">{summary}</p>
        <button
          className="btn btn-primary styled-btn"
          onClick={() =>
            dispatchMovieState({ type: "STAR_MOVIE", payload: item })
          }
        >
          {isStarred(item.id) ? "Unstar" : "Star"}
        </button>
      </div>
    </div>
  );
};
