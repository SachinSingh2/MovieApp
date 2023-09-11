import React from 'react';
import png404 from '../images/pngegg.png'




const NotFoundPage = () => {



  // This is error page
  return (

    <>
    <div className="container text-center">

      <div className="row">

        <div className="col-md-6 offset-md-3">
          <h1 style={{letterSpacing:"10px"}} className="display-4 fw-bold">404</h1>
          <p className="lead">Page not found</p>

          <h6> Sorry, the page you are looking for does not exist. Please Check the spelling  You can return to the
            <a href="/" style={{backgroundColor:'orangeRed' , color:"white"}} className=" btn m-3 px-3 py-2"> Home page </a> 
            or can Search again 
          </h6>

          <img src={png404}  alt="Page Not Found" className="img-fluid" width='300px' height='300px'/>
        </div>

      </div>
    </div>

    </>
  );
};

export default NotFoundPage;
