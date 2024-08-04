import { useLocation } from 'react-router-dom';

import './UserChosenColor.css'; 

const UserChosenColor = () => {

    const location = useLocation();
    const { color } = location.state || {};

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
        userSpaceMessage = "Check out office supplies on sale: "; 
        break;
      case 2: 
        userSpaceMessage = "Check out top trending kitchen gadgets: "; 
        break; 
      case 3: 
        userSpaceMessage = "Must-haves for your new bathroom: "; 
        break; 
      default:
        break;
    }

  return (
    <div id='UserChosenColor-Box' style={{backgroundColor: color.hexNumber, color: chooseFontColor(color.hexNumber)}}>
      <h3>Your perfect match ...</h3>
      <h1>{color.name}</h1>
      <h2>Hex Number: {color.hexNumber}</h2>
      
      <h3> {vibeNames} </h3>

      <h2 style={{color: chooseSpaceFontColor(color.hexNumber), border: `2px solid ${chooseSpaceFontColor(color.hexNumber)}`, padding: '10px', borderRadius: '20px', maxWidth: '80%' }}>{userSpaceMessage}</h2>
 
    </div>
  );
};

export default UserChosenColor