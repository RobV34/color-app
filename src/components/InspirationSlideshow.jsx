import React, { useEffect, useState } from 'react';

import './InspirationSlideshow.css'; 
import InspirationSlideshowBox from './InspirationSlideshowBox';
import InspirationSlideshowImage from './InspirationSlideshowImage';

const InspirationSlideshow = () => {

  const backgroundColors = ['#F2B705', '#F29F05', '#F27F1B']; 


  return (
    <div id='InspirationSlideshow-main'>
         <h2><span>Orange</span> You Glad? It's Trending Now!</h2>
    <div id='InspirationSlideshow-box'>
      <InspirationSlideshowBox
      image = '../images/orange1.jpg' />

      <InspirationSlideshowImage 
      colors = {backgroundColors[0]}
      hexNumberLink={`http://localhost:8080/color/1`}
      hexNumber={backgroundColors[0]} />

      <InspirationSlideshowBox 
      image = '../images/orange2.jpg'/>

      <InspirationSlideshowImage 
      colors = {backgroundColors[1]}
      hexNumberLink={`http://localhost:8080/color/2`}
      hexNumber={backgroundColors[1]}  />

      <InspirationSlideshowBox
      image = '../images/orange3.jpg' />

      <InspirationSlideshowImage 
      colors = {backgroundColors[2]}
      hexNumberLink={`http://localhost:8080/color/3`}
      hexNumber={backgroundColors[2]}  />

    </div>
    </div>
  )
}

export default InspirationSlideshow