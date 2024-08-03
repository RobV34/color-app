import React, { useEffect, useState } from 'react'

import './InspirationSlideshowImage.css'; 

const InspirationSlideshowImage = ({colors, duration}) => {

  console.log(colors); 

  const [backgroundColorIndex, setBackgroundColorIndex] = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundColorIndex((prevIndex) => (prevIndex + 1) % colors.length); 
    }, duration); 

    return () => clearInterval(interval); 
  }, [colors, duration]); 

  return (
    <div id='InspirationSlideshowImage-Properties' style={{ backgroundColor: colors[backgroundColorIndex] }}></div>
  )
}

export default InspirationSlideshowImage