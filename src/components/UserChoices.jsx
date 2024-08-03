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
      { "id": 1, "name": "edgy" },
{ "id": 2, "name": "earthy" },
{ "id": 3, "name": "bold" },
{ "id": 4, "name": "loud" },
{ "id": 5, "name": "sunny" },
{ "id": 6, "name": "natural" },
{ "id": 7, "name": "fresh" },
{ "id": 8, "name": "rich" },
{ "id": 9, "name": "deep" },
{ "id": 10, "name": "stylish" },
{ "id": 11, "name": "soft" },
{ "id": 12, "name": "cool" },
{ "id": 13, "name": "royal" },
{ "id": 14, "name": "girly" },
{ "id": 15, "name": "flirty" },
{ "id": 16, "name": "intimidating" },
{ "id": 17, "name": "inviting" },
{ "id": 18, "name": "luxurious" },
{ "id": 19, "name": "calm" },
{ "id": 20, "name": "sophisticated" },
{ "id": 21, "name": "simple" },
{ "id": 22, "name": "gloomy" },
{ "id": 23, "name": "lively" },
{ "id": 24, "name": "rustic" },
{ "id": 25, "name": "stylish" },
{ "id": 26, "name": "muddy" },
{ "id": 27, "name": "drab" },
{ "id": 28, "name": "cheerful" },
{ "id": 29, "name": "autumnal" },
{ "id": 30, "name": "plant-like" },
{ "id": 31, "name": "watery" },
{ "id": 32, "name": "hot" },
{ "id": 33, "name": "dusty" },
{ "id": 34, "name": "sandy" },
{ "id": 35, "name": "strong" },
{ "id": 36, "name": "creamy" },
{ "id": 37, "name": "faded" },
{ "id": 38, "name": "dull" }
    ]}
    colorUI="#F2B705"
    colorUIFaded="rgba(242, 183, 5, 0.1)"
    onChange={handleVibeChange}
    isCheckbox />
    
    <ChoiceBox 
    stepNumber="2"
    heading="Space"
    userOptions={[
      { id: 1, name: "office" },
      { id: 2, name: "kitchen" },
      { id: 3, name: "bathroom" },
      { id: 4, name: "living room" },
      { id: 5, name: "bedroom" }
    ]}
    colorUI="#F29F05"
    colorUIFaded="rgba(242, 159, 5, 0.1)" 
    onChange={handleSpaceChange}
    isCheckbox={false} />
    
    <ChoiceBox 
    stepNumber="3"
    heading="Style"
    userOptions={[
      { id: 1, name: "neutral" },
      { id: 2, name: "cool" },
      { id: 3, name: "warm" },
      { id: 4, name: "metallic" },
      { id: 5, name: "neon" }
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