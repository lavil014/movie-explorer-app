import React from "react";
import '../Stylesheets/MovieCard.css';


const Card = ({children})=>{

  return(
    <div className="cardContainer">
      {children}
    </div>
  )
}

export default Card;