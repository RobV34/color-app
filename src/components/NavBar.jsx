import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './NavBar.css'; 

export const NavBar = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchHome = async () => {
    setLoading(true);
    try {
      navigate('/');
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setLoading(false);
    }
  };



  return (
    <div id='NavBar-Box'>
      <div id='NavBar-TitleSlogan'>
      <h1>Color Creator</h1>
      <h2>Discover the best color for your next DIY project.</h2>
      </div>
      <button onClick={fetchHome}>Home</button>
    </div>
  )
}
export default NavBar 