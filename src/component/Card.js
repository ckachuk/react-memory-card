import React from "react";


const Card = (props)=>{
    
    return(
        <div className="card" onClick={props.onClick} id= {props.name}>
            <p id="pCard">{props.name}</p>
            <img src={props.imageSrc} alt={props.name} id= {props.name} ></img>
        </div>
    )
}

export default Card;