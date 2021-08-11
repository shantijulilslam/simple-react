import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import './Player.css'


const Player = (props) => {
    const {name,img,salary} = props.player;
    const handlePlayerCount =props.handlePlayerCount;
    return (
        
        <div className="player text-center ">
           <img src={img} alt="" />
           <h1>Name: {name}</h1>
           <h2>salary: {salary}</h2>
           <button onClick={()=>handlePlayerCount(props.player)} id="add-button">  <FontAwesomeIcon icon={faPlus} /> add player</button>
        </div>
    );
};

export default Player;