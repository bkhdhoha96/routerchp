import { useState } from "react";
import { moviesData} from "./components/MoviesData";

import MoviesList from "./components/MoviesList";
import "./styles.css";
import AddMovies from "./components/AddMovies" ;
import SearchMovie from "./components/SearchMovie";
import MovieDesc from './components/MovieDesc';
import {BrowserRouter as Router, Routes, Route,Link  } from 'react-router-dom';

export default function App() {
  const [moviesList, setMoviesList] = useState(moviesData);
  const [nameSearch, setNameSearch] = useState("");
  const [ratingSearch, setRatingSearch] = useState(1);

  const addNewMovie = (newMovie) => {
    setMoviesList([...moviesList, newMovie]);
  };
  return (
    <Router>
    <div className="wrapper">
      <SearchMovie
        nameSearch={nameSearch}
        setNameSearch={setNameSearch}
        setRatingSearch={setRatingSearch}
      />
      <MoviesList
        moviesList={moviesList}
        nameSearch={nameSearch}
        ratingSearch={ratingSearch}
      />
      <AddMovies addNewMovie={addNewMovie} />
      <Routes>

<Route path='/description' element={<MovieDesc/>}/>
</Routes>

</div>
</Router>
  );
}
