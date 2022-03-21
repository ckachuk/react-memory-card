import React from "react";

const Scoreboard = (props)=>{

    return(
        <div>
            <h3>Scoreboard</h3>
            <p>Current score: {props.currentScore}</p>
            <p>Best score {props.bestScore}</p>
        </div>
    );
}


export default Scoreboard;