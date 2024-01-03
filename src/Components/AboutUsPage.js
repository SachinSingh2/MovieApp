import React from 'react'

export default function AboutUsPage() {
// This is About us page


  return (
    <>

{/* Jumbotron */}
<div data-aos="zoom-in" className="jumbotron bg-light  py-2">
  <h1 className="display-4 text-center"> <span style={{color:"#b40606"}}>Hello</span>, People!</h1>
  <p className="lead text-center">This is a simple Movie Info Website, a simple app to get You information About Your Favourite movies .</p>
  <hr style={{color:'#b40606'}} className="my-4 " />
  <p className='text-center'>It uses OMDB API to get You the information You need as Movie Person.</p>
</div>


{/* ---------------Cards */}


{/* Card-1 */}
<div className='container-fluid my-5 '>
  <div className="row">

    <div data-aos="fade-up" className="col-md-4">
<div className="card mb-3 border-0"  style={{maxwidth: '540px'}}>
      <img src="https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg" className="img-fluid rounded-start" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Game of Thrones</h5>
        <h6> IMDB - 9.2/10</h6>
        <h6>Actors - Emilia Clarke, Peter Dinklage, Kit Harington</h6>
        <p className="card-text">In the mythical continent of Westeros, several powerful families fight for control of the Seven Kingdoms. As conflict erupts in the kingdoms of men, an ancient enemy rises once again to threaten them all. Meanwhile, the last heirs of a recently usurped dynasty plot to take back their homeland from across the Narrow Sea..</p>
      </div>
</div>
</div>
{/*  */}



{/* Card-2 */}
<div className="col-md-4">
<div data-aos="fade-up" className="card mb-3 border-0" >
      <img src="https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg.jpg" className="img-fluid rounded-start" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Breaking Bad</h5>
        <h6> IMDB - 9.5/10</h6>
        <h6>Actors - Bryan Cranston, Aaron Paul, Anna Gunn</h6>
        <p className="card-text">When chemistry teacher Walter White is diagnosed with Stage III cancer and given only two years to live, he decides he has nothing to lose. He lives with his teenage son, who has cerebral palsy, and his wife, in New Mexico..</p>
      </div>
</div>
</div>
{/*  */}


{/* Card-3 */}
<div className="col-md-4">
<div data-aos="fade-up" className="card mb-3 border-0"  >
      <img src="https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg" className="img-fluid rounded-start" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Stranger Things</h5>
        <h6> IMDB - 8.7/10</h6>
        <h6>Actors - Millie Bobby Brown, Finn Wolfhard, Winona Ryder</h6>
        <p className="card-text">In a small town where everyone knows everyone, a peculiar incident starts a chain of events that leads to the disappearance of a child, which begins to tear at the fabric of an otherwise peaceful community. Dark government agencies and seemingly malevolent supernatural forces converge on the town, while a few of the locals begin to understand that there's more going on than meets the eye</p>
      </div>
</div>
</div>
{/*  */}

</div>

</div>
      
    </>
  )
}
