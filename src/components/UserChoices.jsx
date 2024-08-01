import ChoiceBox from './ChoiceBox';
import './UserChoices.css'; 

const UserChoices = () => {
  return (
    <div id="UserChoices-box">
    <ChoiceBox 
    stepNumber="1"
    heading="Vibe"
    userOptions={["snazzy", "bold", "peaceful"]}
    colorUI="#F2B705"
    colorUIFaded="rgba(242, 183, 5, 0.1)"  />
    <ChoiceBox 
    stepNumber="2"
    heading="Space"
    userOptions={["kitchen", "bathroom", "bedroom", "office"]}
    colorUI="#F29F05"
    colorUIFaded="rgba(242, 159, 5, 0.1)"  />
    <ChoiceBox 
    stepNumber="3"
    heading="Style"
    userOptions={["warm", "cool", "neon", "metallic"]}
    colorUI="#F27F1B"
    colorUIFaded="rgba(242, 127, 27, 0.1)"   /> 
    
    </div>
  )
}

export default UserChoices