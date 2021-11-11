

function Arrows({prevSlide, nextSlide}){
    return ( <div className ="arrows">
                  {/* <button className = "prev" onClick ={prevSlide}>
                     
                  </button> */}
                   <button className = "next" onClick ={nextSlide}>
                      Next
                  </button>
                  <div className="slide-last">
        <h4>Already a member? SignIn</h4>
        </div>
            </div>
    );
}
export default Arrows;