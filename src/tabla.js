import React, { Component } from 'react';
import PropTypes from  'prop-types';

class Tabla  extends Component {

  
    
  static pt ={
      myarray:PropTypes.array,
      nombre:PropTypes.string.isRequired
  }

  handledelete(data){
    //console.log(data)
  
  }

    render(){
        //console.log(this.props)
        //                
        const {myarray,nombre} = this.props;
        return(
            <div>
                <h3>Datos ingresados por : {nombre} </h3>
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
                {myarray && myarray.map((arr,key)=><tr key={key}><td>{key+1}</td><td>{arr.hora}</td><td>{arr.fecha.replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3/$2/$1')}</td><td><button>Edit</button><button onClick={this.handledelete.bind(this,key)}>Delete</button></td></tr>)}
                  </tbody>    
                </table>
                <br/>
                <button>Generar PDF</button>
                <br/><br/><br/>
            </div>
        )
    }

}

export default Tabla