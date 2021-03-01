import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import "./Player.css";

const Player = (props) => {
  const { name, club, country, position, salary, img } = props.player;
  const handleAddPlayer = props.handleAddPlayer;

  return (
    <div className="player-div">
      <img src={img} alt="" />
      <h2>Name: {name} </h2>
      <h4>Club: {club} </h4>
      <h4>Country: {country} </h4>
      <h4>Position: {position} </h4>
      <h4>Salary: {salary}€</h4>
      <button
        onClick={() => {
          handleAddPlayer(props.player);
        }}
        className="buy-btn btn btn-danger"
      >
        <FontAwesomeIcon className="me-2" icon={faUserPlus}></FontAwesomeIcon>
        Buy Me
      </button>
    </div>
  );
};

export default Player;
