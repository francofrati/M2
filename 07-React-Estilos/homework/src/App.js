import React from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';
import './global.css'

function App() {
  return (
    <div className="App">
      <div className="Appo">
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        />
      </div>
      <hr />
      <div className="Appo">
        <Cards
          cities={data}
        />
      </div>
      <hr />
      <div className="Appo">
        <SearchBar
          onSearch={()=>{alert(document.querySelector("input").value)}}
        />
      </div>
    </div>
  );
}

export default App;
