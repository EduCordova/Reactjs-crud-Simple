import React, { Component } from 'react'
import { Form, Input } from 'semantic-ui-react'
import Tabla from '../Components/tabla'

class Caudales extends Component {
    render() {
        return (
            <div>
                <h1>Registro de Caudales</h1>
                
                <br />
                <Tabla />

            </div>
        )
    }

  

}

export default Caudales