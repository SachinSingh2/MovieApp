import React from 'react'
import '../css/Home.css'
import { Link } from 'react-router-dom'

export default function HomePage() {

// In this we are showing the homepage the landing page of the app

  return (
    <>


{/* Second container */}
<div className='container text-center my-3 py-2' style={{lineHeight:"30px"}}>

<h1 className='textGradient' >Find Your Favourite movies Information</h1>
<p style={{color:"gray" , letterSpacing:'1px'}}>ShowTime information finding app is a user-friendly platform that empowers users to effortlessly access comprehensive details about their favorite films. With a vast database of movies, it provides quick access to synopsis, cast, reviews, ratings, and streaming options, making it the ultimate companion for cinephiles.</p>

<button style={{backgroundColor:"#b40606" , color:"white"}} className='btn'><Link className='nav-link active' to="/findMovie">Find Movie</Link></button>

</div>


{/* Cards---------------- */}


<div className="container">

<div className="row row-cols-1 row-cols-md-3 g-4">
  
<div data-aos="fade-up" className="col">
    <div className="card border-0 h-100">
      <img src="https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_SX300.jpg" className="card-img-top" alt="Palm Springs Road"/>
      <div className="card-body">
      </div>
    </div>
  </div>



  <div data-aos="fade-up" className="col">
    <div className="card border-0 h-100">
      <img src="https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" className="card-img-top" alt="Palm Springs Road"/>
      <div className="card-body">
      </div>
    </div>
  </div>



  <div data-aos="fade-up" className="col">
    <div className="card border-0 h-100">
      <img src="https://m.media-amazon.com/images/M/MV5BYzk2ZTVhOWMtMWQxYS00OWQzLWFmY2QtODQ4NGFmNGQxZWVmXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg" className="card-img-top" alt="Palm Springs Road"/>
      <div className="card-body">
      </div>
    </div>
  </div>



</div>

</div>


{/* Jumbotran with image */}
<header data-aos="fade-up">
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01" aria-controls="navbarExample01" aria-expanded="false"
        aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarExample01">

      </div>
    </div>
  </nav>

  <div class="p-5 text-center bg-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1779&q=80")',height: '400px'}}>

  <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-white">
          <h1  class="mb-3  ">Show-Time</h1>
          <h4 class="mb-3 my-5">Find what You need here about your Favourite Movies</h4>
          <Link class="btn my-5 btn-outline-light btn-lg" to="/about" role="button">Learn More</Link>
        </div>
      </div>
    </div>
  </div>
</header>



    </>
  )
}
