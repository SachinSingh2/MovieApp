import React , {useEffect, useState} from 'react'
import '../css/Home.css'
import { Link } from 'react-router-dom'

export default function HomePage() {

  const [data , setData] = useState()
  




  useEffect(()=>{
    const getData = async()=>{
      const data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=6d3364e68670712e53a9932c2c9e34bd`)
      const res = await data.json()
      if(res.results.length && res.results.length > 0){
        console.log(res.results)
        setData(res.results.slice(4,7))
      }
    }
    getData()
  },[])


  // useEffect(()=>{
  //     setData(upcomingAndPopular.results.slice(0, 3))
  // },[])

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
  



  {data && data.length > 0 ? data.map((data,index)=>{
        return <div key={index} >

        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light"> 
          <img  data-aos="fade-up" style={{borderRadius:"2px"}} src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} className="img-fluid" alt="Movie Poster" />
          <a href="/"> <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div> </a>
        </div>
    
    
      </div>
  }) : <h1 style={{textAlign:"center"}} >Loading...</h1>}






</div>

</div>


{/* Jumbotran with image */}
<header  data-aos="fade-up" >
  <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01" aria-controls="navbarExample01" aria-expanded="false"
        aria-label="Toggle navigation">
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarExample01">

      </div>
    </div>
  </nav>

  <div className="p-5 text-center bg-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1779&q=80")',height: '400px'}}>

  <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="text-white">
          <h1  className="mb-3  ">Show-Time</h1>
          <h4 className="mb-3 my-5">Find what You need here about your Favourite Movies</h4>
          <Link className="btn my-5 btn-outline-light btn-lg" to="/about" role="button">Learn More</Link>
        </div>
      </div>
    </div>
  </div>
</header>



    </>
  )
}
