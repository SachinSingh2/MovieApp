import React from 'react'
import logo from '../images/LogoShowTime.png'
import { Link } from 'react-router-dom'

export default function NavBar() {
  

  // This is NavBar

  return (
    <>
     <nav style={{border:"solid white 2px" , backgroundColor:'black '}} className="navbar  navbar-expand-lg bg-body-tertiary">
     <div className="container-fluid">
    <a className="navbar-brand mx-3" href="/"> <img src={logo} width='90px' height='60px' alt="Logo" /> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

      <li className="nav-item mx-2">
          <Link style={{fontSize:"20px" , fontWeight:600 , color:"#b40606"}} className=" nav-link active " aria-current="page" to="/"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Home</span></Link>
        </li>

        <li className="nav-item mx-2">
          <Link style={{fontSize:"20px" , fontWeight:600 , color:"#b40606"}} className=" nav-link active " aria-current="page" to="/findMovie"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">FindMovie</span></Link>
        </li>



        <li className="nav-item mx-2">
          <Link style={{fontSize:"20px" , fontWeight:600 , color:"#b40606"}} className=" nav-link active " aria-current="page" to="/upcoming"> <span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">UpComing</span></Link>
        </li>

        <li className="nav-item mx-2">
          <Link style={{fontSize:"20px" , fontWeight:600 , color:"#b40606"}} className=" nav-link active " aria-current="page" to="/popular"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Popular</span></Link>
        </li>

        <li className="nav-item mx-2">
          <Link style={{fontSize:"20px" , fontWeight:600 , color:"#b40606"}} className=" nav-link active " aria-current="page" to="/about"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">About</span></Link>
        </li>

      </ul>

    </div>
  </div>






</nav> 
    </>
  )
}
