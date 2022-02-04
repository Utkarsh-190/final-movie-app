import React, { createContext, useState } from "react";

const MovieContext = createContext({
  movieList: [],
  setMovieList: () => {},
});

export function MovieContextProvider(props) {
  const [movieList, setMovieList] = useState([]);

  return (
    <MovieContext.Provider value={[movieList, setMovieList]}>
      {props.children}
    </MovieContext.Provider>
  );
}

export default MovieContext;
