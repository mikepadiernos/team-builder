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
      role: "The Magnificent",
      email: "skippy@unef.gov"
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: "",
      name: member.name,
      role: member.role,
      email: member.email
    };

    const newMemberList = [...team, newMember];

    setTeam(newMemberList);
  };

  return (
    <>
      <header className="header header-container container">
        <h1>The UN Expeditionary Force</h1>
      </header>
      <main className="content content-container container">
        <Form addNewMember={addNewMember}/>
        <Team team={team} />
      </main>
    </>
  );
}

export default App;
