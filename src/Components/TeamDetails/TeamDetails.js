import React from "react";
import "./team-detail.css";

const TeamDetails = (props) => {
  const fullTeam = props.fullTeam;
  const totalBudget = fullTeam.reduce(
    (total, player) => total + player.salary,
    0
  );
  return (
    <div className="team-detail">
      <h2>Total Player Selected: {props.playerLength}</h2>
      <h3>Total Budget: {totalBudget}€</h3>
      <h3>All Players:</h3>
      <br />
      {fullTeam.map((player) => (
        <p>
          {player.name} - {player.salary}€
        </p>
      ))}
    </div>
  );
};

export default TeamDetails;
