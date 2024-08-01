import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import NavBar from './components/NavBar';
import MainSlideshow from './components/MainSlideshow';
import UserChoices from './components/UserChoices';
import InspirationSlideshow from './components/InspirationSlideshow';
import Footer from './components/Footer';


function App() {

  const [color, setColor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchColor = async () => {
      try {
        const response = await axios.get('http://localhost:8080/color/1');
        setColor(response.data);
      } catch (error) {
        console.error("Error: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchColor();
  }, []);


  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div className="App">
      <NavBar />
      <MainSlideshow />
      <UserChoices /> 
      <InspirationSlideshow /> 
      <Footer /> 
    <header classN
    ame="App-header">
    <h1>{color.name}</h1>
        <p>ID: {color.id}</p>
        <p>Hex Number: {color.hexNumber}</p>
        {/* <p>Vibe List: {color.vibeList}</p>  */}
        <p>Space: {color.space.spaceName}</p>
        <p>Style: {color.style.styleName}</p>
    </header>
  </div>
);
}

export default App;
