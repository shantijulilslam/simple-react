import React, { useEffect, useState } from 'react';
import CountPlayer from '../CountPlayer/CountPlayer';
import Player from '../Player/Player';
import './Players.css';

const Players = () => {
    const [playerCount,setPlayerCount] = useState([]);
    const [players, setPlayers] = useState([]);
    useEffect(()=>{
        fetch('https://mocki.io/v1/f2c00b9a-dc17-4695-b224-20cdee8e2804')
        .then(res => res.json())
        .then(data => setPlayers(data))
      },[])
      const handlePlayerCount = (player) =>{
         const newPlayerCount =[...playerCount,player]
         setPlayerCount(newPlayerCount);
      }
    return (
        <div className="players">
            <div>
            {
                players.map(player =><Player handlePlayerCount={handlePlayerCount} player ={player}></Player>)
            }
            </div>
            <div>
            
             <CountPlayer playerCount={playerCount}></CountPlayer>
            
            </div>
        </div>
    );
};

export default Players;