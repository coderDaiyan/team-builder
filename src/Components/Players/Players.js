import React, { useEffect, useState } from "react";
import Player from "../Player/Player";
import fakeData from "../../fakeData/data.json";
import "./players.css";

const Players = (props) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers(fakeData);
  }, []);

  return (
    <div className="parent-div">
      {players.map((player) => (
        <Player
          key={player.id}
          handleAddPlayer={props.handleAddPlayer}
          player={player}
        ></Player>
      ))}
    </div>
  );
};

export default Players;
