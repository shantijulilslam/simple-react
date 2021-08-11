import React from 'react';
import './CountPlayer.css'

const CountPlayer = (props) => {
    console.log(props.playerCount)
 const playerCount = props.playerCount;
    const totalCost = playerCount.reduce((sum ,player)=>sum + player.salary,0)
    // const playerName = playerCount.reduce((sum ,player)=>  sum  + player.name ,"")
    // let playerName = " ";
    // for (let i = 0; i < playerCount.length; i++) {
    //     playerName =playerName +playerCount[i].name;
    // }
    return (
        <div className="countPlayer">
            <h1>Selected Player: {playerCount.length} </h1>
            <h2>Selected Player Name:</h2>
            <div className="selectedPlayers" >
              {
                  playerCount.map(singlePlayer =><h3><li>{singlePlayer.name}</li></h3>)
              }
            
            </div>
        
            <h2>Total Cost For Players: {totalCost}</h2>
        </div>
    );
};

export default CountPlayer;