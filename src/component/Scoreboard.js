import React from "react";

const Scoreboard = (props)=>{

    return(
        <div className="scoreboard">
            <h3 id="hScoreboard">Scoreboard</h3>
            <p id="pCurrent">Current score: {props.currentScore}</p>
            <p id="pBest">Best score: {props.bestScore}</p>
        </div>
    );
}


export default Scoreboard;