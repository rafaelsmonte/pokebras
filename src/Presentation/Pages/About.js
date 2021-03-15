
import React from "react";
import "../Assets/CSS/home.css";
import AboutComponent from '../Components/About'

function About(){
return(
  <React.Fragment >
  <AboutComponent key={'1'}/>
  </React.Fragment>
);
}
export default About;


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals