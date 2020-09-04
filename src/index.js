import React from "react";
import ReactDOM from "react-dom";

import MovieList from "./MovieList";

import "./bootstrap.min.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <MovieList />
  </React.StrictMode>,
  document.getElementById("react-app")
);
