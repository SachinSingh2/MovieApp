import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../Redux/Slices/movieSlice';
import Card from './Card';
import ErrorPage from './ErrorPage';
import '../css/SearchComponent.css';

export default function SearchComponent() {

    // Defined a state
    const [movieName, setMovieName] = useState('');
    const [badge, setBadge] = useState(true);

  // Used the useDispatch to perform action
  const dispatch = useDispatch();

  //Getting the state using useSelector
  const { movie, loading } = useSelector((state) => state.movie);

  console.log(movie)

// Created the handleOnChange Function so what this function do is whenever we add something in input it takes it value and set Its value to movieName which useState hook.
  const handleOnChange = (e) => {
    setMovieName(e.target.value);
  };

  // Here is the submit button which perfom the action.
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const movie = movieName;
    dispatch(fetchMovies(movie));
  };

  // Creating a badge which will show whenever the page opens for the first time
  setTimeout(() => {
    setBadge(false);
  }, 4500);

  return (
    <div>
      {/* Here we added a condtion where if the badge which is being operated by the useState hook is true then show all the information */}
      {badge ? (<div data-aos="zoom-in"  style={{ backgroundColor: '#b40606', color: 'white' }} className="alert alert-success p-4 text-center" role="alert">
          <h4 className="alert-heading">Find Movie Information!</h4>
          <p className="alert-heading">
            Here You Can get the information of movies like when they were
            released, Actors, Genre, Ratings etc
          </p>
          <hr />
          <p className="mb-0">Search the Name of the movie Below. Good Luck</p>
        </div>
      ) : null}

      <div className="my-4">
        <form
          onSubmit={handleOnSubmit}
          className="d-flex justify-content-center align-items-center m-2"
        >
          <div className="input-group form-control">
            <input
              onChange={handleOnChange}
              style={{ padding: '5px' }}
              className="form-control"
              type="search"
              placeholder="Enter a movie name"
              aria-label="Search"
            />
            <button
              style={{ backgroundColor: '#b40606', color: 'white' }}
              className="btn px-3 py-2"
            >
              Find Movie
            </button>
          </div>
        </form>
      </div>

      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : null}

      {movie.Response === 'True' ? <Card movieData={movie} /> : null}
      {movie.Response === 'False' ? <ErrorPage /> : null}
    </div>
  );
}
