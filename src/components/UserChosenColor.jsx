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

  return (
    <div id='UserChosenColor-Box' style={{backgroundColor: color.hexNumber, color: chooseFontColor(color.hexNumber)}}>
      <h3>Your perfect match ...</h3>
      <h1>{color.name}</h1>
      <h2>Hex Number: {color.hexNumber}</h2>
    </div>
  );
};

export default UserChosenColor