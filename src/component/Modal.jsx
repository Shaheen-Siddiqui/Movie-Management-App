import { useContext } from "react";
import { MovieContext } from "../hook/MovieContext";

export const Modal = ({ setShowModal }) => {
  const { movieDetail, dispatchMovieState } = useContext(MovieContext);

  const inputHandler = (event) => {
    const { name, value } = event.target;

    dispatchMovieState({ type: "SET_MOVIE_DETAIL", payload: { name, value } });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatchMovieState({ type: "GET_DETAIL" });
    setShowModal(false);
  };

  return (
    <form className="modal-box" onSubmit={submitHandler}>
      <div className="modal-content">
        <h3>Add New Movie Detail</h3>
        <div className="input-group mb-3">
          <input
            // required
            onChange={inputHandler}
            name="title"
            value={movieDetail?.title}
            placeholder="title"
            type="text"
            className="form-control modal-input"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-3">
          <input
            // required
            onChange={inputHandler}
            name="summary"
            value={movieDetail?.summary}
            placeholder="summary"
            type="text"
            className="form-control modal-input"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-3">
          <input
            // required
            onChange={inputHandler}
            name="year"
            value={movieDetail?.year}
            placeholder="year"
            type="number"
            className="form-control modal-input"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-3">
          <input
            // required
            onChange={inputHandler}
            name="cast"
            value={movieDetail?.cast}
            placeholder="cast"
            type="text"
            className="form-control modal-input"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-3">
          <input
            // required
            onChange={inputHandler}
            name="genre"
            value={movieDetail?.genre}
            placeholder="genre"
            type="text"
            className="form-control modal-input"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-3">
          <input
            // required
            onChange={inputHandler}
            name="rating"
            value={movieDetail?.rating}
            placeholder="rating"
            type="number"
            className="form-control modal-input"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-3">
          <input
            // required
            onChange={inputHandler}
            name="director"
            value={movieDetail?.director}
            placeholder="director"
            type="text"
            className="form-control modal-input"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-3">
          <input
            // required
            onChange={inputHandler}
            name="writer"
            value={movieDetail?.writer}
            placeholder="writer"
            type="text"
            className="form-control modal-input"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-3">
          <input
            // required
            onChange={inputHandler}
            name="imageURL"
            value={movieDetail?.imageURL}
            placeholder="imageURL"
            type="text"
            className="form-control modal-input"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div>
          <button className="btn button-41" type="submit">
            Save Movie
          </button>

          <button
            className="button-24"
            type="button"
            onClick={() => setShowModal(false)}
          >
            Discard
          </button>
        </div>
      </div>
    </form>
  );
};
