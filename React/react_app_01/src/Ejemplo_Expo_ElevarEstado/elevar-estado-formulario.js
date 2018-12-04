import React, { Component } from 'react';
import Formulario from "./formulario";

class ElevarEstadoFormularios extends Component {
    constructor(props) {
      super(props);

      this.handleNombreChange = this.handleNombreChange.bind(this);
      this.handleEdadChange = this.handleEdadChange.bind(this);
      this.state = {nombre: '', edad: ''};
    }
  
    handleNombreChange(nombre) { 
      this.setState({nombre: nombre});
    }
  
    handleEdadChange(edad) {
      this.setState({edad: edad});
    }
  
    render() {
  
      return (
        <div style={{display:'flex',flexDirection:'row'}}>
          <Formulario
            nombre={this.state.nombre}
            edad={this.state.edad}
            onFormularioNombreChange={this.handleNombreChange}
            onFormularioEdadChange={this.handleEdadChange} />
          <Formulario
            nombre={this.state.nombre}
            edad={this.state.edad}
            onFormularioNombreChange={this.handleNombreChange}
            onFormularioEdadChange={this.handleEdadChange} />
        </div>
      );
    }
  }
  
  export default ElevarEstadoFormularios;