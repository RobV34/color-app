import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import ChoiceBox from './ChoiceBox';
import './UserChoices.css'; 

const UserChoices = () => {

  const [selectedVibes, setSelectedVibes] = useState([]);
  const [selectedSpace, setSelectedSpace] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [color, setColor] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleVibeChange = (e) => {
    const value = parseInt(e.target.value);
    setSelectedVibes(prev =>
      prev.includes(value) ? prev.filter(vibe => vibe !== value) : [...prev, value]
    );
  };


  const handleSpaceChange = (e) => {
    setSelectedSpace(parseInt(e.target.value));
  };


  const handleStyleChange = (e) => {
    setSelectedStyle(parseInt(e.target.value));
  };

  const navigate = useNavigate();

  const fetchColor = async () => {
    setLoading(true);
    try {
      const url = `http://localhost:8080/generateUserColor?userVibeListOfId=${selectedVibes.join(',')}&userSpaceId=${selectedSpace}&userStyleId=${selectedStyle}`;
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
    <div id='Userchoices-boxAndButton'>
    <div id="UserChoices-box">
    
    <ChoiceBox 
    stepNumber="1"
    heading="Vibe"
    userOptions={[
      { id: 1, name: "snazzy" },
      { id: 2, name: "bold" },
      { id: 3, name: "calm" },
      { id: 4, name: "relaxing"}
    ]}
    colorUI="#F2B705"
    colorUIFaded="rgba(242, 183, 5, 0.1)"
    onChange={handleVibeChange}
    isCheckbox />
    
    <ChoiceBox 
    stepNumber="2"
    heading="Space"
    userOptions={[
      { id: 1, name: "kitchen" },
      { id: 2, name: "bathroom" },
      { id: 3, name: "office" }
    ]}
    colorUI="#F29F05"
    colorUIFaded="rgba(242, 159, 5, 0.1)" 
    onChange={handleSpaceChange}
    isCheckbox={false} />
    
    <ChoiceBox 
    stepNumber="3"
    heading="Style"
    userOptions={[
      { id: 1, name: "pastel" },
      { id: 2, name: "warm" },
      { id: 3, name: "cool" },
      { id: 4, name: "neon" }
    ]}
    colorUI="#F27F1B"
    colorUIFaded="rgba(242, 127, 27, 0.1)"
    onChange={handleStyleChange}
    isCheckbox={false}   /> 
    
    </div>

    <button onClick={fetchColor}>
      Find Your Color! 
    </button>


    </div>
  
  )
}

export default UserChoices