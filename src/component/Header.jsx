import { useContext } from "react";
import { Link } from "react-router-dom";

import { MovieContext } from "../hook/MovieContext";

export const Header = () => {
  const { dispatchMovieState, search } = useContext(MovieContext);
  return (
    <header
      className="d-flex justify-content-around gap-2 bg-dark text-white header-fix-case"
      style={{ height: "4rem" }}
    >
      <h3>IMB</h3>
      <div className="input-group mb-3 header-search">
        <input
          value={search}
          type="text"
          className="form-control header-search"
          placeholder="genre, cast, movie title"
          aria-describedby="basic-addon1"
          onChange={(event) =>
            dispatchMovieState({ type: "SEARCH", payload: event.target.value })
          }
        />
      </div>
      {/* <div className="d-flex"> */}
      <Link to="/">
        <p>Movies ||</p>
      </Link>

      <Link to="/star">
        <p>Starred Movie</p>
      </Link>
      {/* </div> */}
    </header>
  );
};
