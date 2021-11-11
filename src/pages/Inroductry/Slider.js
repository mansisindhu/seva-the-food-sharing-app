import SliderContent from "./SliderContent";
import imageSlider from "./imageSlider";
import Arrows from "./Arrows";
import Dots from "./Dots"
import "./Slider.css";
import { useEffect, useState } from "react";
 const len = imageSlider.length - 1;

function Slider(props){
  const [activeIndex, setActiveIndex] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval (() => {
  //     setActiveIndex(activeIndex === len ? 0 :activeIndex + 1)
  //   },1000);
  //   return () => clearInterval(interval);
  // }, [activeIndex])

  // <SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />


  return (
    <div className="slider-container">
      <div>
        <SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />
        <Dots
          activeIndex1={activeIndex}
          imageSlider1={imageSlider}
          onclick1={(activeIndex) => setActiveIndex(activeIndex)}
        />
        <Arrows
          prevSlide={() =>
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
          }
          nextSlide={() =>
            setActiveIndex(activeIndex === 0 ? len : activeIndex + 1)
          }
        />
        
      </div>
    </div>
  );
}
export default Slider;