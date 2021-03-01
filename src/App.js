import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Players from "./Components/Players/Players";
import TeamDetails from "./Components/TeamDetails/TeamDetails";

function App() {
  const [team, setTeam] = useState([]);

  const handleAddPlayer = (player) => {
    // console.log("player added", player);
    const newTeam = [...team, player];
    setTeam(newTeam);
  };

  return (
    <div className="App">
      <Navbar></Navbar>
      <TeamDetails fullTeam={team} playerLength={team.length}></TeamDetails>
      <Players handleAddPlayer={handleAddPlayer}></Players>
    </div>
  );
}

export default App;
