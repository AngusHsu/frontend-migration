import React, { useState, useEffect } from "react";

import Loading from "../components/Loading";

import InsertMovie from "./components/InsertMovie";
import ListMovie from "./components/ListMovie";
import Nav from "./components/Nav";

import { getMovies } from "./api";

const MovieList = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    (async () => {
      try {
        setMovies((await getMovies()).data);
      } catch (e) {}
    })();
  }, []);

  return (
    <div>
      <Nav />
      {movies ? (
        <div className="container">
          <InsertMovie onInsert={setMovies} />
          <hr />
          <ListMovie movies={movies} />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default MovieList;
