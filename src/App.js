import React, { Component } from 'react';
import './App.css';
import Contenido from'./contenido';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Generador de Csv</h1>
        </header>
        <br/>
        <Contenido/>
      
      </div>
    );
  }
}

export default App;
