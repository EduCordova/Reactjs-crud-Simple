import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
//import Contenido from './Components/contenido';
import Caudales from './pages/caudales'
// import Tabla from './Components/tabla';
import { Segment } from 'semantic-ui-react';



class App extends Component {
  render() {
    return (
      <Segment>
        <Caudales />
      </Segment>
    );
  }
}

export default App;
