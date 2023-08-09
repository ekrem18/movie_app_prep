import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MovieContext = createContext();

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(FEATURED_API)
  
  }, [])
  

  const getMovies = (API) => {
    axios.get(API).then((res) => console.log(res))
    .catch((err)=> console.log(err));
  };
  return <MovieContextProvider value={null}>{children}</MovieContextProvider>;
};

export default MovieContextProvider;
