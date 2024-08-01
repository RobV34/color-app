import React, { useEffect, useState } from 'react';

import './ChoiceBox.css'; 

const ChoiceBox = ({stepNumber, heading, userOptions, colorUI, colorUIFaded}) => {

  return (
    <div id='ChoiceBox-box'>


<h2>Step {stepNumber}</h2>
<h4>Choose your: </h4>
<h1 className='ChoiceBox-h1' style={{backgroundColor: colorUI}}>{heading}</h1>
<div className='ChoiceBox-userOptionList' style={{backgroundColor: colorUIFaded}}>
{userOptions.map((option, index) => (
        <p key={index}>{option}</p>
      ))}
      </div>
    </div>

  )
}

export default ChoiceBox