import React from "react";


// This is SearchCardPage this page shows up whenever we search a movie.Here we are getting props movieData it is fetched by searchComponent

export default function Card({ movieData }) {
  return (
    <div className="container ">
      <div className="card  border-0 mb-3">
        
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={movieData.Poster}
              className="card-img m-3 my-5"
              alt={movieData.Title}
            />
          </div>


          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{movieData.Title}</h5>
              <p className="card-text">{movieData.Plot}</p>
              <ul className="list-group list-group-flush">

                <li className="list-group-item">
                  <strong>Actors:</strong> {movieData.Actors}
                </li>
                <li className="list-group-item">
                  <strong>Awards:</strong> {movieData.Awards}
                </li>
                <li className="list-group-item">
                  <strong>Country:</strong> {movieData.Country}
                </li>
                <li className="list-group-item">
                  <strong>Director:</strong> {movieData.Director}
                </li>
                <li className="list-group-item">
                  <strong>Genre:</strong> {movieData.Genre}
                </li>
                <li className="list-group-item">
                  <strong>Language:</strong> {movieData.Language}
                </li>
                <li className="list-group-item">
                  <strong>Rated:</strong> {movieData.Rated}
                </li>
                <li className="list-group-item">
  <strong>Ratings:</strong> {movieData.Ratings && movieData.Ratings.length > 0 ? JSON.stringify(movieData.Ratings[0].Source) : 'No ratings'}
</li>

<li className="list-group-item">
  <strong>Value:</strong> {movieData.Ratings && movieData.Ratings.length > 0 ? JSON.stringify(movieData.Ratings[0].Value) : 'No ratings'}
</li>

                <li className="list-group-item">
                  <strong>Released:</strong> {movieData.Released}
                </li>
                <li className="list-group-item">
                  <strong>Response:</strong> {movieData.Response}
                </li>
                <li className="list-group-item">
                  <strong>Runtime:</strong> {movieData.Runtime}
                </li>
                <li className="list-group-item">
                  <strong>Writer:</strong> {movieData.Writer}
                </li>
                <li className="list-group-item">
                  <strong>Year:</strong> {movieData.Year}
                </li>
                <li className="list-group-item">
                  <strong>imdbID:</strong> {movieData.imdbID}
                </li>
                <li className="list-group-item">
                  <strong>imdbRating:</strong> {movieData.imdbRating}
                </li>
                <li className="list-group-item">
                  <strong>imdbVotes:</strong> {movieData.imdbVotes}
                </li>
                <li className="list-group-item">
                  <strong>Total Seasons:</strong> {movieData.totalSeasons}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
