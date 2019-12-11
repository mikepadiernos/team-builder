import React, { useState } from 'react';
import Team from "./components/Team";
import Form from "./forms/Form";
import logo from './logo.svg';
import './App.css';


function App() {

  const [team, setTeam] = useState([
    {
      id: 1,
      name: "Skippy",
      title: "The Magnificent"
    }
  ]);

  return (
    <div className="App">
      <Form/>
      <Team team={team} />
    </div>
  );
}

export default App;
