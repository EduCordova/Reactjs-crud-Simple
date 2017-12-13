import React, { Component } from 'react'
import { Form, Button, FormControl, FormGroup, ControlLabel, Table, Panel } from 'react-bootstrap'
// import { addToTable } from '../actionCreators'



class Contenido extends Component {

    constructor() {

        super();
        this.state = {
            fecha: new Date().toISOString().slice(0, 10),
            hora: "00:00",
            caudal: '',
            myarray: []
        }

        this.handleFechaChange = this.handleFechaChange.bind(this)
        this.handleHoraChange = this.handleHoraChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCaudalChange = this.handleCaudalChange.bind(this)

    }

    componentDidUpdate() {
        console.log(this.state.myarray)
    }

    //FECHA EXACTA
    handleFechaChange(e) {
        this.setState({
            fecha: e.target.value
        })
    }
    //HORA  DE EJEMPLO
    handleHoraChange(e) {
        this.setState({
            hora: e.target.value
        })
    }

    handleCaudalChange(e) {
        this.setState({
            caudal: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            //  myarray:[...this.state.myarray,{"hora":this.state.fecha,"fecha":this.state.hora}]
            myarray: this.state.myarray.concat({ "caudal": this.state.caudal, "hora": this.state.hora }),
            caudal: '',
            

        })


    }


    handledelete(index) {

        this.setState({
            // myarray:update(this.state.myarray, {$splice:[[data,1]]})
            myarray: this.state.myarray.filter((_, i) => i !== index)
        })



    }

    render() {
        return (
            <div>
                <h3>REGISTRO DE CAUDALES</h3>

                <br />

                <Form inline onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <ControlLabel>Fecha:</ControlLabel>
                        {' '}
                        <FormControl type="date" value={this.state.fecha} onChange={this.handleFechaChange} name="fecha" />&nbsp;&nbsp;
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Caudal: </ControlLabel>
                        {' '}
                        <FormControl type="text" name="caudal" value={this.state.caudal} onChange={this.handleCaudalChange} placeholder="Ingresa Caudal" required />&nbsp;&nbsp;
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Hora: </ControlLabel>
                        {' '}
                        <FormControl type="time" value={this.state.hora} name="hora" onChange={this.handleHoraChange} />&nbsp;&nbsp;
                    </FormGroup>
                    <Button type="submit" bsStyle="info">Agregar</Button>
                </Form>
                <br /><br /><br />

                <Panel header="Datos Ingresados">
                    <Table striped bordered condensed hover  >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Caudal</th>
                                <th>Hora</th>
                                <th>Editar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.myarray.map((i, key) => <tr key={key}><td>{key + 1}</td><td>{i.caudal}</td><td>{i.hora}</td><td><Button bsStyle="primary">Editar</Button>{'  '}<Button bsStyle="danger" onClick={this.handledelete.bind(this, key)}>Borrar</Button></td></tr>)}
                        </tbody>
                    </Table>
                </Panel>
            </div>
        )

    }

}



// const mapStateToProps = state => {
//     return {
//         name: state.name

//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         addToTable(dato) {
//             dispatch(addToTable(dato))
//         }
//     }
// }

export default Contenido;