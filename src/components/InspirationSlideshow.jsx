import React, { useEffect, useState } from 'react';

import './InspirationSlideshow.css'; 
import InspirationSlideshowBox from './InspirationSlideshowBox';
import InspirationSlideshowImage from './InspirationSlideshowImage';

const InspirationSlideshow = () => {

  const backgroundColors = ['#F2B705', '#F29F05', '#F27F1B']; 
  const backgroundColors2 = ['#F29F05', '#F27F1B', '#F2B705']; 
  const backgroundColors3 = ['#F27F1B','#F2B705', '#F29F05']; 


  return (
    <div id='InspirationSlideshow-box'>
      <InspirationSlideshowBox
      image = '../images/orange1.jpg' />

      <InspirationSlideshowImage 
      colors = {backgroundColors}
      duration = '8000' />

      <InspirationSlideshowBox 
      image = '../images/orange2.jpg'/>

      <InspirationSlideshowImage 
      colors = {backgroundColors2}
      duration = '3000' />

      <InspirationSlideshowBox
      image = '../images/orange3.jpg' />
      
      <InspirationSlideshowImage 
      colors = {backgroundColors3}
      duration = '5000' />


    </div>
  )
}

export default InspirationSlideshow