import React, { Component } from 'react';

class UsuariosConRenta extends Component{
    constructor(props) {
        super(props);
        console.log(props);
        this.state={nombre: props.nombre,
                    salario: props.salario,
                    renta: props.renta}
    };
    
                   
    render(){
        return(
<           div style={{display: 'flex', justifyContent: 'space-around', flexDirection:"row"}}>
                <div> Nombre: {this.state.nombre} </div>
                <div> Salario en colones: {this.state.salario} </div>
                <div> Renta: {this.state.renta} </div>
           </div>
        );
    }
}

export default UsuariosConRenta;