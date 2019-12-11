import React, { useState } from 'react';
import Team from "./components/Team";
import Form from "./forms/Form";
// import logo from './logo.svg';
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
      <header>
        <h1>The UN Expeditionary Force</h1>
      </header>
      <main>
        <Form/>
        <Team team={team} />
      </main>
    </div>
  );
}

export default App;
