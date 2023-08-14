import { createContext, useEffect, useReducer } from "react";

import { MovieReducer } from "./MovieReducer";
import { moviesData } from "../databse/data";

export const MovieContext = createContext(null);

export const MovieContextProvider = ({ children }) => {
  const [
    {
      allMovie,
      search,
      staredMovieCase,
      genreType,
      ratingValue,
      yearValue,
      movieDetail
    },

    dispatchMovieState
  ] = useReducer(MovieReducer, {
    allMovie: moviesData,
    search: "",
    staredMovieCase: [],
    genreType: "",
    ratingValue: 0,
    yearValue: 0,

    movieDetail: {
      id: "",
      title: "",
      summary: "",
      year: 0,
      cast: "",
      genre: "",
      rating: 0,
      director: "",
      writer: "",
      imageURL: ""
    }
  });

  const searchFilter =
    search.length > 0
      ? allMovie.filter(
          (item) =>
            item.title.toLowerCase().includes(search) ||
            item.director.toLowerCase().includes(search.toLowerCase()) ||
            item.cast.some((item) => item.toLowerCase().includes(search))
        )
      : allMovie;

  const allGenres = allMovie.map((movie) => movie.genre).flat();
  const uniqueGenres = [...new Set(allGenres)];

  const GenreFilter =
    genreType.length > 0
      ? searchFilter.filter((item) =>
          item.genre.some((genreItem) => genreItem.includes(genreType))
        )
      : searchFilter;

  const isStarred = (id) => staredMovieCase.find((item) => item.id === id);

  const ratingFilter =
    ratingValue > 0
      ? GenreFilter.filter((item) => item.rating == ratingValue)
      : GenreFilter;

  const movieYear = allMovie.map((item) => item.year);
  const uniqueYear = [...new Set(movieYear)];

  const yearFilter =
    yearValue > 0
      ? ratingFilter.filter((item) => item.year == yearValue)
      : ratingFilter;

  useEffect(() => {
    const isPersist = localStorage.getItem("movie");
    if (isPersist) {
      dispatchMovieState({
        type: "LOCALY_STORAGE",
        payload: JSON.parse(isPersist)
      });
    } else {
      localStorage.setItem("movie", JSON.stringify(allMovie));
      dispatchMovieState({ type: "LOCALY_STORAGE", payload: allMovie });
    }
  }, []);

  return (
    <MovieContext.Provider
      value={{
        allMovie,
        searchFilter,
        dispatchMovieState,
        isStarred,
        staredMovieCase,
        uniqueGenres,
        GenreFilter,
        ratingFilter,
        uniqueYear,
        yearFilter,
        movieDetail
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
