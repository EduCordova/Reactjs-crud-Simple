import React, { Component } from 'react'

//import Tabla from './tabla' 
class Contenido extends Component {

    constructor() {

        super();
        this.state = {
            fecha: new Date().toISOString().slice(0, 10),
            name:'',
            hora: "13:00",
            myarray: []
        }

        this.handleFechaChange = this.handleFechaChange.bind(this)
        this.handleHoraChange = this.handleHoraChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)

    }

    componentDidUpdate(){
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

    handleNameChange(e){
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            //  myarray:[...this.state.myarray,{"hora":this.state.fecha,"fecha":this.state.hora}]
            myarray: this.state.myarray.concat({ "fecha": this.state.fecha, "hora": this.state.hora })

        })

        
    }

    handledelete(index){
        
        this.setState({
            // myarray:update(this.state.myarray, {$splice:[[data,1]]})
            myarray:this.state.myarray.filter((_,i)=> i !== index)
        })

        
        
    }



    render() {
        return (
            <div>
                <h3>Datos Registrados por:{this.state.name}</h3>
                <table align="center" >
                    <thead>
                        <tr>
                        <th>N°</th>    
                       <th>Hora</th>
                       <th>Fecha</th> 
                       <th>Editar</th>
                       </tr>
                    </thead>
                <tbody>
                {this.state.myarray && this.state.myarray.map((arr,key)=><tr key={key}><td>{key+1}</td><td>{arr.hora}</td><td>{arr.fecha.replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3/$2/$1')}</td><td><button>Edit</button><button onClick={this.handledelete.bind(this,key)}>Delete</button></td></tr>)}
                  </tbody>    
                </table>
                <br/>
                <button>Generar PDF</button>
                <br/><br/><br/>
                
                <form onSubmit={this.handleSubmit} >
                <input type="text" name="name" value={this.state.nombre} placeholder="tu nombre" onChange={this.handleNameChange} required />&nbsp;&nbsp;
                <input type="date" name="date" value={this.state.fecha} onChange={this.handleFechaChange} placeholder="Ingresar Fecha" />&nbsp;&nbsp;
                <input type="time" name="hora" value={this.state.hora} onChange={this.handleHoraChange} />&nbsp;&nbsp;
                <input type="submit" value="Guardar" />
                </form>

               <br/><br/><br/>
            </div>
        )
    }

}

export default Contenido;