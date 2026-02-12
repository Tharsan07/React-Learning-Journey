import PropTypes from "prop-types";
import HTML from "./assets/HTML logo.png";
import "../src/index.css";
import { useState } from "react";

function Course({
  name = "Default",
  age = 0,
  location = "un-defined",
  role = "pending",
}) {
  //Hooks
  //UseState

  const [clicked, setClicked] = useState(false);

  const handleClick = () => console.log(name, "Clicked the buy");

  const buttonHandle=()=>{
    setClicked(true);
    
  }


  return (
    name && (
      <div className="courseCard">
        <img src={HTML} />
        <p>{name}</p>
        <p>{age}</p>
        <p>{location}</p>
        <p>{role}</p>
        <button className="buyButton" onClick={buttonHandle}>
          Click to buy
        </button>
        <p>{clicked?"Button is clicked":"unClicked"}</p>
      </div>
    )
  );
}

// Course.defaultProps ={
//     name : "default",
//     price:"22",
//     rating:"NONE"
// }

Course.PropTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  location: PropTypes.string,
  role: PropTypes.string,
};

export default Course;
