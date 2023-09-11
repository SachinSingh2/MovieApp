import React from 'react';
import SearchComponent from './Components/SearchComponent';
import NavBar from './Components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AboutUsPage from './Components/AboutUsPage';
import UpComing from './Components/UpComing'
import Popular from './Components/Popular'
// import Footer from './Components/Footer';

export default function App() {
  return (
    <>
      <BrowserRouter>
      
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/findMovie" element={<SearchComponent />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/upcoming" element={<UpComing />} />
          <Route path="/popular" element={<Popular />} />
          {/* Add a default route to display HomePage by default */}
          {/* <Route path="/*" element={<HomePage />} /> */}
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>

      
    </>
  );
}
