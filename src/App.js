import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import MainSlideshow from './components/MainSlideshow';
import UserChoices from './components/UserChoices';
import InspirationSlideshow from './components/InspirationSlideshow';
import Footer from './components/Footer';
import UserChosenColor from './components/UserChosenColor';


function App() {



const mainSlideshowImages = [
  '../images/yellow-slideshow.jpg',
  '../images/blue-slideshow.jpg',
  '../images/red-slideshow.jpg',
  '../images/green-slideshow.jpg',
  '../images/pink-slideshow.jpg',
  '../images/brown-slideshow.jpg'
]; 


  return (
    <Router>
    <div className="App">
      <NavBar />
      
      <Routes>
          <Route path="/" element={
            <>
              <MainSlideshow images={mainSlideshowImages} duration='5000' />
              <UserChoices /> 
              <InspirationSlideshow /> 
            </>
          } />
          <Route path="/userChosenColor" element={<UserChosenColor />} />
        </Routes>

      <Footer /> 
    
  </div>
  </Router>
);
}

export default App;
