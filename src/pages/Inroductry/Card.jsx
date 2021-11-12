import "./Card.css";
function Card(props) {
    console.log(props)
    return (
    <>
      <div className="cards">
        <div className="card" >
          <div className="dateb"><p className="datep">{props.date}</p></div>
          <div className="case"><p className="casel">{props.cname4}</p></div>
          <div className="card___info">
            <span className="card__catogery"></span>
            <h1 className="card__title">{props.cname}</h1>
          
               <h1 className="card__title2">{props.cname2}</h1> 

               <h3 className="card__title2">{props.cname3}</h3>
            
          
              </div>
           </div>
       
      </div>
    </>
  );
}

export  {Card}