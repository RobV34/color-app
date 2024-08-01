import React, { useEffect, useState } from 'react';

import './ChoiceBox.css'; 

const ChoiceBox = ({stepNumber, heading, userOptions, colorUI, colorUIFaded, onChange, isCheckbox}) => {

  return (
    <div id='ChoiceBox-box'>


<h2>Step {stepNumber}</h2>
<h4>Choose your: </h4>
<h1 className='ChoiceBox-h1' style={{backgroundColor: colorUI}}>{heading}</h1>
<div className='ChoiceBox-userOptionList' style={{ backgroundColor: colorUIFaded }}>
        {userOptions.map((option, index) => (
          <div key={index} className='checkbox-option'>
            {isCheckbox ? (
              <>
                <input
                  type="checkbox"
                  id={`option-${option.id}`}
                  value={option.id}
                  onChange={onChange}
                />
                <label htmlFor={`option-${option.id}`}>{option.name}</label>
              </>
            ) : (
              <>
                <input
                  type="radio"
                  id={`option-${option.id}`}
                  name={`option-${stepNumber}`}
                  value={option.id}
                  onChange={onChange}
                />
                <label htmlFor={`option-${option.id}`}>{option.name}</label>
              </>
            )}
          </div>
        ))}
      </div>
    </div>

  )
}

export default ChoiceBox