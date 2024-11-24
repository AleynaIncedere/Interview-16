import React, { useState } from "react";
import './styles.css'; 

function App() {
  const PLAYERS = [
    "Ali", "Namık", "Eda", "Ebru", "Suzan", "Samet", "Engin", "Halit"
  ];

  return <FormTeams players={PLAYERS} />;
}

const FormTeams = ({ players }) => {
  const [availablePlayers, setAvailablePlayers] = useState(players);
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("team1");

 
  const handlePlayerClick = (player) => {
    if (selectedTeam === "team1") {
      setTeam1([...team1, player]);
    } else {
      setTeam2([...team2, player]);
    }

    
    setAvailablePlayers(availablePlayers.filter(p => p !== player));
  };

 
  const randomizePlayers = () => {
    const allPlayers = [...team1, ...team2, ...availablePlayers];
    const shuffledPlayers = allPlayers.sort(() => Math.random() - 0.5);
    setAvailablePlayers(shuffledPlayers.slice(0, players.length));
    setTeam1([]);
    setTeam2([]);
  };

  
  const resetTeams = () => {
    setAvailablePlayers(players);
    setTeam1([]);
    setTeam2([]);
  };

  return (
    <div className="App">
      
      <div>
        <button onClick={() => setSelectedTeam("team1")}>Takım 1</button>
        <button onClick={() => setSelectedTeam("team2")}>Takım 2</button>
      </div>

      
      <div className="players-container">
        <ul>
          {availablePlayers.map((player) => (
            <li key={player} onClick={() => handlePlayerClick(player)}>
              {player}
            </li>
          ))}
        </ul>
      </div>

      <div className="teams-container">
        <div className="team left-team">
          <h3>Takım 1</h3>
          <ul>
            {team1.map((player) => (
              <li key={player}>{player}</li>
            ))}
          </ul>
        </div>

        <div className="team right-team">
          <h3>Takım 2</h3>
          <ul>
            {team2.map((player) => (
              <li key={player}>{player}</li>
            ))}
          </ul>
        </div>
      </div>

      
      <div className="buttons">
        <button onClick={randomizePlayers}>Karıştır</button>
        <button onClick={resetTeams}>Sıfırla</button>
      </div>
    </div>
  );
};

export default App;
