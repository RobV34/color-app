import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './InspirationSlideshowImage.css'; 

const InspirationSlideshowImage = ({colors, hexNumberLink, hexNumber}) => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchColor = async () => {
    setLoading(true);
    try {
      const url = hexNumberLink;
      const response = await axios.get(url);
      const color = response.data;
      navigate('/userChosenColor', { state: { color } });
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id='InspirationSlideshowBox-Properties' style={{backgroundColor: colors}}>
      <h3 onClick={fetchColor}>{hexNumber}</h3>
    </div>
  )
}

  

export default InspirationSlideshowImage