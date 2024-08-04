import React from 'react'

import './InspirationSlideshowBox.css'; 

const InspirationSlideshowBox = ({image}) => {
  return (
    <div id='InspirationSlideshowBox-Properties'>
      <img src={image} style={{width: '100%', maxHeight: '100%', objectFit: 'cover' }} />
    </div>
  )
}

export default InspirationSlideshowBox