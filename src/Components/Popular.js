import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpcomingPopular } from "../Redux/Slices/movieSlice";
import { Link } from "react-router-dom";


// This is popular page component


export default function UpComing() {
  const dispatch = useDispatch();

// Here we created a useeffect hook so this hook work whenever the page refresh and whenever the page refresh the dispatch function runs and it fetch the data.
  useEffect(() => {
    console.log("working");
    dispatch(fetchUpcomingPopular("popular"));
  }, [dispatch]);

  // Here we are using the useSelector and fetching the data from slice and its state .
  const { upcomingAndPopular } = useSelector((state) => {
    return state.movie;
  });


  console.log(upcomingAndPopular)


  // Here we created a variable and in that variable we added all the values.
  const renderCard = upcomingAndPopular.results
    ? upcomingAndPopular.results.map((data) => {
        const imageUrl = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;

        return (
          <div key={data.id} data-aos="fade-up" className="col-md-4 mb-4">
            <div  className="card">

              <div  className="bg-image hover-overlay ripple" data-mdb-ripple-color="light"> 
                <img src={imageUrl} className="img-fluid" alt="Movie Poster" />
                <a href="/"> <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div> </a>
              </div>


              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.overview.slice(0,118) + '...'}</p>
                <p>Release Date : - <span className="fw-bold"> {data.release_date} </span></p>
                <button className="btn" style={{backgroundColor:"#b40606" , color:"white"}}> <Link className="nav-link active" to='/findMovie'>Know More</Link> </button>
              </div>

            </div>
          </div>
        );
      })
    : null;

  return (
    <>
      <h1 data-aos="fade-up" style={{ fontWeight: 800, fontSize: "40px", letterSpacing: "4px" }} className="text-center textGradient my-3 p-2">
         NEW POPULAR MOVIES
      </h1>

      <div  className="container my-3">
        <div  className="row">{renderCard}</div>
      </div>
    </>
  );
}
