import React, { Component } from 'react';
import './App.css';
import Contenido from './Components/contenido';
// import Tabla from './Components/tabla';
import { Grid } from 'react-bootstrap';



class App extends Component {
  render() {
    return (
      <Grid>
        <Contenido />
        
      </Grid>
    );
  }
}

export default App;
