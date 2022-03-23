import React, {useEffect, useState} from "react";
import Card from "./Card";
import fnatic_image from '../images/fnatic.png';
import g2_image from '../images/g2.png';
import navi_image from '../images/navi.png';
import cloud9_image from '../images/cloud9.png';
import nip_image from '../images/nip.png';
import faze_image from '../images/faze.png'
import furia_image from '../images/furia.png'
import og_image from '../images/og.png'
import teamliquid_image from '../images/teamliquid.png'
import virtuspro_image from '../images/virtuspro.png'
import array_disorder from '../assets/array-disorder.js'
import Scoreboard from "./Scoreboard";


const Main = (props)=>{

    const [availableImages, setAvailableImages] = useState( [{name:'fnatic', src: fnatic_image}, 
    {name:'G2', src: g2_image}, 
    {name:'NaVi', src: navi_image}, 
    {name:'Cloud 9', src: cloud9_image}, 
    {name:'Ninjas in pyjamas', src: nip_image},
    {name:'FaZe', src: faze_image}, 
    {name:'Furia', src: furia_image}, 
    {name:'OG', src: og_image}, 
    {name:'Team Liquid', src: teamliquid_image}, 
    {name:'Virtus.pro', src: virtuspro_image}])
    
    const [imageClicked, setImageClicked] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    
    const onClickImageHandler = (e)=>{
        const object = availableImages.filter(item => e.target.id === item.name); 
        setImageClicked(imageClicked.concat(object));
        setAvailableImages(array_disorder(availableImages, false));
    }
    
    useEffect(()=>{
        const checkDuplicateImageClicked = ()=>{
            return imageClicked.some(value=>{
                return imageClicked.indexOf(value) !== imageClicked.lastIndexOf(value);
            })
        }

        const updateScoreboard = ()=>{
            setCurrentScore(imageClicked.length);
    
            if(bestScore < currentScore) setBestScore(currentScore); 
        }

        const resetRound =()=>{
            setCurrentScore(0);
            setImageClicked([]);
        }

        if(checkDuplicateImageClicked()){
            resetRound();
        }
        else{
            updateScoreboard();
        }
    },[imageClicked, currentScore, bestScore])
    
    

    const loadCards = availableImages.map((item, index)=>{
        return (<li id={index} key={index}><Card name={item.name}  imageSrc={item.src} onClick= {onClickImageHandler}/></li>)
    })
    
    

    return(
        <div className="main">
            <Scoreboard currentScore={currentScore} bestScore={bestScore}/>
         <ul className="ulist">
             {loadCards}
         </ul>
        </div>
    );
}

export default Main;