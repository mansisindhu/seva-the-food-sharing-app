import imageSlider from "./imageSlider";

function Dots({activeIndex1, onclick1, imageSlider1}){
  return (
      <div className="all-dots">
          {imageSlider1.map((slide,index) => (
              <span
              key={index}
              className={`${activeIndex1 === index  ? "dot active-dot" : "dot"}`}
              onClick = { () => onclick1(index)}
              ></span>
          ))}
      </div>
  )
}
export default Dots;