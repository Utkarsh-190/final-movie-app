import React, { useContext } from "react";
import "./Video.css";
import Card from "./components/Card";
import MovieContext from "./MovieContext";

function Video() {
  const [movieList, setMovieList] = useContext(MovieContext);

  return (
    <div className="videos">
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {movieList.map((e, key) => (
          <Card key={key} title={e.Title} year={e.Year} imgRef={e.Poster} />
        ))}
      </div>
    </div>
  );
}

export default Video;
