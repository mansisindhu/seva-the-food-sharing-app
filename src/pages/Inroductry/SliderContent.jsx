import Dots from "./Dots";
import Arrows from "./Arrows";
import { useEffect, useState } from "react";
import "./slideImage.css";


function SliderContent({ activeIndex, imageSlider }){

   
           
  return (
   
    <>
      {imageSlider.map((slide, index) => (
        <div key ={index} className = {index === activeIndex ? "slides active" : "inactive"}
        >
     <div className="slide-image">
        <img  src={slide.urls} alt = ""/>
        </div>
      <div className="slide-title">
        <h3 >{slide.title} </h3>
        </div>
        <div className="slide-text">
        <h5 >{slide.description}</h5>
        </div>
        
      
        </div>
       
      ))}
    </>
    
    
  );
}
export default SliderContent;