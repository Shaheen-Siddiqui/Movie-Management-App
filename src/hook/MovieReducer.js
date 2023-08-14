import { v4 as uuid } from "uuid";
export const MovieReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOCALY_STORAGE":
      return {
        ...state,
        allMovie: payload
      };

    case "SEARCH":
      return {
        ...state,
        search: payload
      };
    case "STAR_MOVIE":
      const updatedStaredMovieCase =
        state.staredMovieCase.find((item) => item.id === payload.id) ===
        undefined
          ? [...state.staredMovieCase, payload]
          : state.staredMovieCase.filter((item) => item.id !== payload.id);

      return {
        ...state,
        staredMovieCase: updatedStaredMovieCase
      };
    case "GENRE_FILTER":
      return {
        ...state,
        genreType: payload
      };
    case "RATING_FILTER":
      return {
        ...state,
        ratingValue: payload
      };
    case "YEAR_FILTER":
      return {
        ...state,
        yearValue: payload
      };
    case "SET_MOVIE_DETAIL":
      const { name, value } = payload;
      return {
        ...state,
        movieDetail: { ...state.movieDetail, [name]: value }
      };
    case "GET_DETAIL":
      const updatedAllMovie = [
        ...state.allMovie,
        {
          ...state.movieDetail,
          id: uuid(),
          genre: state.movieDetail.genre.split(", ")
        }
      ];
      localStorage.setItem("movie", JSON.stringify(updatedAllMovie));

      return {
        ...state,
        allMovie: updatedAllMovie
      };

    default:
      throw new Error(`invelid type ${type} check Movie Reducer`);
  }
};
