import React, { useState } from "react";
import Player from "../Player/Player";
import fakeData from "../../fakeData/data.json";
import "./players.css";

const Players = (props) => {
  const fakePlayers = fakeData;
  const [players, setPlayers] = useState(fakePlayers);

  return (
    <div className="parent-div">
      {players.map((player) => (
        <Player
          handleAddPlayer={props.handleAddPlayer}
          player={player}
        ></Player>
      ))}
    </div>
  );
};

export default Players;
