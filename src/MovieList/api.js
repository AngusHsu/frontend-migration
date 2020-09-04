import axios from "axios";

export const getMovies = () => {
  const cors = "https://cors-anywhere.herokuapp.com/"; // use cors-anywhere to fetch api data
  const url = "https://hw-web-api.herokuapp.com/api/movie/list.php"; // origin api url
  return axios(`${cors}${url}`);
};
