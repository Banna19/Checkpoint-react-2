// src/App.js
import React from 'react';
import PlayersList from './components/PlayersList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <h1>Cartes de Joueurs FIFA</h1>
      <PlayersList />
    </div>
  );
};

export default App;