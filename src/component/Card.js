import React from "react";


const Card = (props)=>{
    
    return(
        <div className="card" onClick={props.onClick} id= {props.name}>
            <p>{props.name}</p>
            <img src={props.imageSrc} alt="sasd" ></img>
        </div>
    )
}

export default Card;