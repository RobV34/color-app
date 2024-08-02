import React, { useEffect, useState } from 'react';

import './MainSlideshow.css';


const MainSlideshow = ({images, duration}) => {


  const styles = {
    slideshow: {
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      height: '550px' 
  
    },
    slideImage: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      objectFit: 'cover'
    }
  
  };

  const [imageIndex, setImageIndex] = useState(0); 

  useEffect(()=> {
    const interval = setInterval(()=> {
      setImageIndex((prevImageIndex) => (prevImageIndex + 1) % images.length); 
    }, duration); 

    return ()=> clearInterval(interval); 
    }, [images, duration]); 




  return (
    <div style={styles.slideshow}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`slide-${index}`}
          style={{
            ...styles.slideImage,
            opacity: imageIndex === index ? 1 : 0,
            transition: 'opacity 0.5s'
          }}
        />
      ))}
    </div>
  )
}

export default MainSlideshow