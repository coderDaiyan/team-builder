import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Players from "./Components/Players/Players";
import TeamDetails from "./Components/TeamDetails/TeamDetails";

function App() {
  const [team, setTeam] = useState([]);

  const handleAddPlayer = (player) => {
    const newTeam = [...team, player];
    setTeam(newTeam);
  };

  return (
    <div className="App">
      <Navbar></Navbar>
      <TeamDetails fullTeam={team} playerLength={team.length}></TeamDetails>
      <Players handleAddPlayer={handleAddPlayer}></Players>
      <Footer></Footer>
    </div>
  );
}

export default App;
