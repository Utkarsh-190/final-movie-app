import axios from "axios";

function getMoviesBySearch(searchText) {
  return axios
    .get("https://www.omdbapi.com/?apikey=12b235ec&s=" + searchText)
    .then((response) => {
      // console.log("response", response);
      let movies = response.data.Search;
      // console.log("movies", movies);
      return movies;
    })
    .catch((err) => {
      console.log("err from api.js", err);
    });
}

export { getMoviesBySearch };
