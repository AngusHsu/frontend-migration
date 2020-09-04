import React from "react";

const ListMovie = ({ movies }) => {
  return (
    <ul id="list-movie" className="list-group">
      {movies.map(({ ch_name, eng_name, intro }) => (
        <li className="list-group-item" key={`${ch_name}-${eng_name}`}>
          <div className="movie-item">
            <h3>{ch_name}</h3>
            <h4>{eng_name}</h4>
            <div className="movie-intro">{intro}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListMovie;
