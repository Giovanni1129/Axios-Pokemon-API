import React, {useState} from 'react';
import axios from "axios";
import './App.css';

function App() {
  const[pokemon,setPokemon] = useState([]);
  const handleClick = (e) => {
    e.preventDefault();
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=907")
    .then(res => setPokemon(res.data.results))

  }


  return (
    <div>
      <button onClick={(e) => handleClick(e)}>Fetch Pokemon</button>
      {pokemon.map((p,idx) => {
        return <p key={idx} >{p.name}</p>})}
    </div>
  );
}

export default App;
