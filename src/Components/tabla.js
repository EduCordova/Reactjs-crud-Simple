import React, { Component } from 'react'
import { Table, Button, Form, Input, Modal, } from 'semantic-ui-react'

class Tabla extends Component {
  constructor() {
    super()
    this.state = {
      caudales: [],
      h0: '',
      h1: '',
      h2: '',
      h3: '',
      h4: '',
      h5: '',
      h6: '',
      h7: '',
      h8: '',
      h9: '',
      h10: '',
      h11: '',
      h12: '',
      h13: '',
      h14: '',
      h15: '',
      h16: '',
      h17: '',
      h18: '',
      h19: '',
      h20: '',
      h21: '',
      h22: '',
      h23: '',
      modalOpen:false,
      modalClose:true,
      indice:0


    }
    this.handleChanges = this.handleChanges.bind(this)

  



  }
  componentDidUpdate() {

    console.log(this.state.caudales)
    console.log(this.state.h0)

  }


  render() {
    return (


      <div style={{ whiteSpace: 'nowrap', overflowY: 'auto' }} >

        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Group>


            <Form.Button type="submit" color="green">Agregar Nuevo Dia</Form.Button>
          </Form.Group>
        </Form>


        <Table celled unstackable >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>OPCIONES</Table.HeaderCell>
              <Table.HeaderCell>Dia</Table.HeaderCell>
              <Table.HeaderCell>00:00</Table.HeaderCell>
              <Table.HeaderCell>01:00</Table.HeaderCell>
              <Table.HeaderCell>02:00</Table.HeaderCell>
              <Table.HeaderCell>03:00</Table.HeaderCell>
              <Table.HeaderCell>04:00</Table.HeaderCell>
              <Table.HeaderCell>05:00</Table.HeaderCell>
              <Table.HeaderCell>06:00</Table.HeaderCell>
              <Table.HeaderCell>07:00</Table.HeaderCell>
              <Table.HeaderCell>08:00</Table.HeaderCell>
              <Table.HeaderCell>09:00</Table.HeaderCell>
              <Table.HeaderCell>10:00</Table.HeaderCell>
              <Table.HeaderCell>11:00</Table.HeaderCell>
              <Table.HeaderCell>12:00</Table.HeaderCell>
              <Table.HeaderCell>13:00</Table.HeaderCell>
              <Table.HeaderCell>14:00</Table.HeaderCell>
              <Table.HeaderCell>15:00</Table.HeaderCell>
              <Table.HeaderCell>16:00</Table.HeaderCell>
              <Table.HeaderCell>17:00</Table.HeaderCell>
              <Table.HeaderCell>18:00</Table.HeaderCell>
              <Table.HeaderCell>19:00</Table.HeaderCell>
              <Table.HeaderCell>20:00</Table.HeaderCell>
              <Table.HeaderCell>21:00</Table.HeaderCell>
              <Table.HeaderCell>22:00</Table.HeaderCell>
              <Table.HeaderCell>23:00</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.state.caudales.map((i, key) =>

              <Table.Row key={key}>
                <Table.Cell>
                  <Modal
                  size={'fullscreen'}
                    trigger={<Button onClick={this.handleOpen.bind(this,key)} color="blue">Editar</Button>}
                    open={this.state.modalOpen}
                  >
                    <Modal.Header>Actualizar Caudales</Modal.Header>
                    <Modal.Content >
                      <Modal.Description>
                        <Form onSubmit={this.handleUpdate.bind(this)}>
                          <Form.Group>
                            <Form.Field name="h0" type="number" control={Input} value={this.state.h0} label="Hora  00:00" placeholder="Ingrese el Caudal" onChange={this.handleChanges} />
                            <Form.Field name="h1" type="number" control={Input} value={this.state.h1} label="Hora 01:00" placeholder="Ingrese el Caudal" onChange={this.handleChanges} />
                            <Form.Field name="h2" type="number" control={Input} value={this.state.h2} label="Hora 02:00" placeholder="Ingrese el Caudal" onChange={this.handleChanges} />
                            <Form.Field name="h3" type="number" control={Input} value={this.state.h3} label="Hora 03:00" placeholder="Ingrese el Caudal" onChange={this.handleChanges} />
                          </Form.Group>
                          <Form.Group>
                            <Form.Field name="h4" type="number" control={Input} value={this.state.h4} label="Hora 04:00" placeholder="Ingrese el Caudal" onChange={this.handleChanges} />
                            <Form.Field name="h5" type="number" control={Input} value={this.state.h5} label="Hora 05:00" placeholder="Ingrese el Caudal" onChange={this.handleChanges} />
                            <Form.Field name="h6" type="number" control={Input} value={this.state.h6} label="Hora 06:00" placeholder="Ingrese el Caudal" onChange={this.handleChanges} />
                            <Form.Field name="h7" type="number" control={Input} value={this.state.h7} label="Hora 07:00" placeholder="Ingrese el Caudal" onChange={this.handleChanges} />
                          </Form.Group>
                          <Form.Group>
                            <Form.Field name="h8" type="number" control={Input} value={this.state.h8} label="Hora 08:00" placeholder="Ingrese el Caudal" onChange={this.handleChanges} />
                            <Form.Field name="h9" type="number" control={Input} value={this.state.h9} label="Hora 09:00" placeholder="Ingrese el Caudal" onChange={this.handleChanges} />
                            <Form.Field name="h10" type="number" control={Input} value={this.state.h10}  label="Hora 10:00" placeholder="Ingrese el Caudal" onChange={this.handleChanges} />
                            <Form.Field name="h11" type="number" control={Input} value={this.state.h11}  label="Hora 11:00" placeholder="Ingrese el Caudal" onChange={this.handleChanges} />
                          </Form.Group>
                          <Form.Group>
                            <Form.Field name="h12" type="number" control={Input} value={this.state.h12}  label="Hora 12:00" placeholder="Ingrese el Caudal" onChange={this.handleChanges} />
                            <Form.Field name="h13" type="number" control={Input} value={this.state.h13}  label="Hora 13:00" placeholder="Ingrese el Caudal" onChange={this.handleChanges} />
                            <Form.Field name="h14" type="number" control={Input} value={this.state.h14}  label="Hora 14:00" placeholder="Ingrese el Caudal" onChange={this.handleChanges} />
                            <Form.Field name="h15" type="number" control={Input} value={this.state.h15}  label="Hora 15:00" placeholder="Ingrese el Caudal" onChange={this.handleChanges} />
                          </Form.Group>
                          <Form.Group>
                            <Form.Field name="h16" type="number" control={Input} value={this.state.h16}  label="Hora 16:00" placeholder="Ingrese el Caudal" onChange={this.handleChanges} />
                            <Form.Field name="h17" type="number" control={Input} value={this.state.h17}  label="Hora 17:00" placeholder="Ingrese el Caudal" onChange={this.handleChanges} />
                            <Form.Field name="h18" type="number" control={Input} value={this.state.h18}  label="Hora 18:00" placeholder="Ingrese el Caudal" onChange={this.handleChanges} />
                            <Form.Field name="h19" type="number" control={Input} value={this.state.h19}  label="Hora 19:00" placeholder="Ingrese el Caudal" onChange={this.handleChanges} />
                          </Form.Group>
                          <Form.Group>
                            <Form.Field name="h20" type="number" control={Input} value={this.state.h20}  label="Hora 20:00" placeholder="Ingrese el Caudal" onChange={this.handleChanges} />
                            <Form.Field name="h21" type="number" control={Input} value={this.state.h21}  label="Hora 21:00" placeholder="Ingrese el Caudal" onChange={this.handleChanges} />
                            <Form.Field name="h22" type="number" control={Input} value={this.state.h22}  label="Hora 22:00" placeholder="Ingrese el Caudal" onChange={this.handleChanges} />
                            <Form.Field name="h23" type="number" control={Input} value={this.state.h23}  label="Hora 23:00" placeholder="Ingrese el Caudal" onChange={this.handleChanges} />
                          </Form.Group>
                          <br />
                          <Form.Button icon='checkmark' labelPosition='right' content="Guardar Cambios" color="green"  inverted />
                        </Form>

                      </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button color='black' onClick={this.handleClose.bind(this)}>
                        Cancelar
                     </Button>

                    </Modal.Actions>
                  </Modal>
                  <Button color="red">Borrar</Button>
                </Table.Cell>
                <Table.Cell>{key + 1}</Table.Cell>
                <Table.Cell>{i.h0}</Table.Cell>
                <Table.Cell>{i.h1}</Table.Cell>
                <Table.Cell>{i.h2}</Table.Cell>
                <Table.Cell>{i.h3}</Table.Cell>
                <Table.Cell>{i.h4}</Table.Cell>
                <Table.Cell>{i.h5}</Table.Cell>
                <Table.Cell>{i.h6}</Table.Cell>
                <Table.Cell>{i.h7}</Table.Cell>
                <Table.Cell>{i.h8}</Table.Cell>
                <Table.Cell>{i.h9}</Table.Cell>
                <Table.Cell>{i.h10}</Table.Cell>
                <Table.Cell>{i.h11}</Table.Cell>
                <Table.Cell>{i.h12}</Table.Cell>
                <Table.Cell>{i.h13}</Table.Cell>
                <Table.Cell>{i.h14}</Table.Cell>
                <Table.Cell>{i.h15}</Table.Cell>
                <Table.Cell>{i.h16}</Table.Cell>
                <Table.Cell>{i.h17}</Table.Cell>
                <Table.Cell>{i.h18}</Table.Cell>
                <Table.Cell>{i.h19}</Table.Cell>
                <Table.Cell>{i.h20}</Table.Cell>
                <Table.Cell>{i.h21}</Table.Cell>
                <Table.Cell>{i.h22}</Table.Cell>
                <Table.Cell>{i.h23}</Table.Cell>


              </Table.Row>
            )}
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>TOTAL</Table.HeaderCell>
              <Table.HeaderCell>0</Table.HeaderCell>
              <Table.HeaderCell>0</Table.HeaderCell>
              <Table.HeaderCell>0</Table.HeaderCell>
              <Table.HeaderCell>0</Table.HeaderCell>
              <Table.HeaderCell>0</Table.HeaderCell>
              <Table.HeaderCell>0</Table.HeaderCell>
              <Table.HeaderCell>0</Table.HeaderCell>
              <Table.HeaderCell>0</Table.HeaderCell>
              <Table.HeaderCell>0</Table.HeaderCell>
              <Table.HeaderCell>0</Table.HeaderCell>
              <Table.HeaderCell>0</Table.HeaderCell>
              <Table.HeaderCell>0</Table.HeaderCell>
              <Table.HeaderCell>0</Table.HeaderCell>
              <Table.HeaderCell>0</Table.HeaderCell>
              <Table.HeaderCell>0</Table.HeaderCell>
              <Table.HeaderCell>0</Table.HeaderCell>
              <Table.HeaderCell>0</Table.HeaderCell>
              <Table.HeaderCell>0</Table.HeaderCell>
              <Table.HeaderCell>0</Table.HeaderCell>
              <Table.HeaderCell>0</Table.HeaderCell>
              <Table.HeaderCell>0</Table.HeaderCell>
              <Table.HeaderCell>0</Table.HeaderCell>
              <Table.HeaderCell>0</Table.HeaderCell>
              <Table.HeaderCell>0</Table.HeaderCell>


            </Table.Row>
          </Table.Footer>
        </Table>
        <br />
        <Button color="teal">Generar Excel</Button> <Button color="red">Borrar todos los datos</Button>
        <br /><br />
      </div >
    )
  }


handleZopen(e){

}

  //GUARDA TODOS LOS CAUDALES  EN EL NUEVO ARREGLO
  handleUpdate(e) {
    e.preventDefault()
  
    let cc = JSON.parse(JSON.stringify( this.state.caudales))
    let i = this.state.indice
    
        cc[i].h0 = this.state.h0;
        cc[i].h1 = this.state.h1;
        cc[i].h2 = this.state.h2;
        cc[i].h3 = this.state.h3;
        cc[i].h4 = this.state.h4;
        cc[i].h5 = this.state.h5;
        cc[i].h6 = this.state.h6;
        cc[i].h7 = this.state.h7;
        cc[i].h8 = this.state.h8;
        cc[i].h9 = this.state.h9;
        cc[i].h10 = this.state.h10;
        cc[i].h11 = this.state.h11;
        cc[i].h12 = this.state.h12;
        cc[i].h13 = this.state.h13;
        cc[i].h14 = this.state.h14;
        cc[i].h15 = this.state.h15;
        cc[i].h16 = this.state.h16;
        cc[i].h17 = this.state.h17;
        cc[i].h18 = this.state.h18;
        cc[i].h19 = this.state.h19;
        cc[i].h20 = this.state.h20;
        cc[i].h21 = this.state.h21;
        cc[i].h22 = this.state.h22;
        cc[i].h23 = this.state.h23;
        
        this.setState({
          caudales: cc,
          modalOpen: false,
          h0: '',
          h1: '',
          h2: '',
          h3: '',
          h4: '',
          h5: '',
          h6: '',
          h7: '',
          h8: '',
          h9: '',
          h10: '',
          h11: '',
          h12: '',
          h13: '',
          h14: '',
          h15: '',
          h16: '',
          h17: '',
          h18: '',
          h19: '',
          h20: '',
          h21: '',
          h22: '',
          h23: '',
        })
        
  }

  //ASIGNA VALORES  A TODOS LOS CAUDALES Q SE DESEE
  handleChanges = (e, { name, value }) => this.setState({ [name]: value })


  //crea un array vacio (NUEVO DIA)
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      caudales: this.state.caudales.concat({
        "h0": '',
        "h1": '',
        "h2": '',
        "h3": '',
        "h4": '',
        "h5": '',
        "h6": '',
        "h7": '',
        "h8": '',
        "h9": '',
        "h10": '',
        "h11": '',
        "h12":'',
        "h13": '',
        "h14": '',
        "h15": '',
        "h16": '',
        "h17":'',
        "h18": '',
        "h19": '',
        "h20":'',
        "h21": '',
        "h22":'',
        "h23": ''
      }),

    })
  }

  handleOpen(e) {
    console.log(e)
     let key = e
    let cargandoData =JSON.parse(JSON.stringify(this.state.caudales))



    this.setState({
      modalOpen: true,
      indice:e,
      h0:cargandoData[key].h0,
      h1:cargandoData[key].h1,
      h2:cargandoData[key].h2,
      h3:cargandoData[key].h3,
      h4:cargandoData[key].h4,
      h5:cargandoData[key].h5,
      h6:cargandoData[key].h6,
      h7:cargandoData[key].h7,
      h8:cargandoData[key].h8,
      h9:cargandoData[key].h9,
      h10:cargandoData[key].h10,
      h11:cargandoData[key].h11,
      h12:cargandoData[key].h12,
      h13:cargandoData[key].h13,
      h14:cargandoData[key].h14,
      h15:cargandoData[key].h15,
      h16:cargandoData[key].h16,
      h17:cargandoData[key].h17,
      h18:cargandoData[key].h18,
      h19:cargandoData[key].h19,
      h20:cargandoData[key].h20,
      h21:cargandoData[key].h21,
      h22:cargandoData[key].h22,
      h23:cargandoData[key].h23,
      

      
    })
  }

  handleClose(e) {
   e.preventDefault()
     this.setState({
       modalOpen:false
     })

  }
}



export default Tabla;

//{this.state.myarray && this.state.myarray.map((arr, key) => <tr key={key}><td>{key + 1}</td><td>{arr.hora}</td><td>{arr.fecha.replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3/$2/$1')}</td><td><button>Edit</button><button onClick={this.handledelete.bind(this, key)}>Delete</button></td></tr>)}