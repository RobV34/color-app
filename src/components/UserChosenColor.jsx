import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './UserChosenColor.css'; 

const UserChosenColor = () => {

    const location = useLocation();
    const { color } = location.state || {};
    const [showForm, setShowForm] = useState(false);

    if (!color) {
        return <p>No color details available.</p>;
      } 

      function hexToRgb(hex) {
        console.log(hex); 
        hex = hex.replace('#', '');
        let bigint = parseInt(hex, 16);
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        let b = bigint & 255;
        return [r / 255, g / 255, b / 255];
    }
    
    function getLuminance(r, g, b) {
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    }
    
    function chooseFontColor(hexColor) {
        let [r, g, b] = hexToRgb(hexColor);
        let luminance = getLuminance(r, g, b);
        return luminance > 0.5 ? 'black' : 'white';
    }

    function chooseSpaceFontColor(hexColor) {
      let [r, g, b] = hexToRgb(hexColor);
      let luminance = getLuminance(r, g, b);
      return luminance > 0.5 ? 'rgb(36, 36, 36)' : 'rgb(222, 219, 219)';
  }

    const vibeNames = color.vibeList.map(vibe => vibe.vibeName.toUpperCase()).join(' • ');


    let userSpaceMessage = ""; 

    switch (color.space.id) {
      case 1: 
        userSpaceMessage = "Check out office supplies on sale"; 
        break;
      case 2: 
        userSpaceMessage = "Check out top trending kitchen gadgets"; 
        break; 
      case 3: 
        userSpaceMessage = "Must-haves for your new bathroom"; 
        break; 
      default:
        break;
    }

    const displayUserPostForm = () => {
      setShowForm(true);
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    axios.post('http://localhost:8080/newUser', {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        selectedColor: { id: color.id }
    })
    .then(response => {
        alert('Form submitted successfully!');
        setShowForm(false); 
    })
    .catch(error => {
        alert('Error submitting form.');
        console.error(error);
    });
};



const h2PromotionStyle = {
  color: chooseSpaceFontColor(color.hexNumber),
  borderTop: `2px solid ${chooseSpaceFontColor(color.hexNumber)}`,
};



  return (
    <div id='UserChosenColor-Box' style={{backgroundColor: color.hexNumber, color: chooseFontColor(color.hexNumber)}}>
      <h3>Your perfect match ...</h3>
      <h1>{color.name}</h1>
      <h2>Hex Number: {color.hexNumber}</h2>
      
      <h3> {vibeNames} </h3>

      <h2>
      <a className="h2PromotionStyle" style={h2PromotionStyle} href={color.space.promotion.url}>{userSpaceMessage} </a>   
      </h2>

      <button onClick={displayUserPostForm}>
            Send this color to your email!
        </button>

        {showForm && (
            <div id="userFormDiv">
                <form onSubmit={handleFormSubmit}>
                    <label>First Name: </label>
                    <input type="text" name="firstName" placeholder="First Name" required />

                    <label>Last Name: </label>
                    <input type="text" name="lastName" placeholder="Last Name" required />

                    <label>Email: </label>
                    <input type="email" name="email" placeholder="Email" required />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )}
 
    </div>
  );
};

export default UserChosenColor