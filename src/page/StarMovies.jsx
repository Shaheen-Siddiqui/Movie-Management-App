import { useContext } from "react";
import { Movie } from "../component/Movie";
import { MovieContext } from "../hook/MovieContext";

export const StarMovies = () => {
  const { staredMovieCase } = useContext(MovieContext);
  return (
    <div className="d-flex gap-2 box-case-outer">
      {staredMovieCase.map((item) => {
        return <Movie item={item} />;
      })}
    </div>
  );
};
