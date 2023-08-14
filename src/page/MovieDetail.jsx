import { useContext } from "react";
import { MovieContext } from "../hook/MovieContext";
import { useParams } from "react-router-dom";

export const MovieDetail = () => {
  const { MovieID } = useParams();
  const { allMovie, dispatchMovieState, isStarred } = useContext(MovieContext);

  const selectedMovie = allMovie.find((item) => item.id == MovieID);

  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={selectedMovie?.imageURL}
            className="img-fluid rounded-start card-img-middle"
            alt={selectedMovie?.title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body text-start">
            <h5 className="card-title">{selectedMovie?.title}</h5>
            <p className="card-text">{selectedMovie?.summary}</p>
            <p className="card-text">
              <strong>year</strong> {selectedMovie?.year}
            </p>

            <p>
              <strong>Genre: </strong>
              {[selectedMovie?.genre.join(", ")]}
            </p>

            <p>
              <strong>Rating: </strong>
              {selectedMovie?.rating}
            </p>
            <p>
              <strong>Director: </strong>
              {selectedMovie?.director}
            </p>
            <p>
              <strong>Writer: </strong>
              {selectedMovie?.writer}
            </p>
            <p>
              <strong>Cast: </strong>
              {[selectedMovie?.cast].join(", ")}
            </p>
          </div>
        </div>
        <button
          className="btn btn-dark"
          onClick={() =>
            dispatchMovieState({ type: "STAR_MOVIE", payload: selectedMovie })
          }
        >
          {isStarred(selectedMovie?.id) ? "Saarred" : "Star"}
        </button>
      </div>
    </div>
  );
};
