import React, { Component } from 'react';
import '../formulario.css';

class Formulario extends Component {
    constructor(props) {
      super(props);

      console.log(props);

      this.handleChangeNombre = this.handleChangeNombre.bind(this);
      this.handleChangeEdad = this.handleChangeEdad.bind(this);
    }
  
    handleChangeNombre(event) {
      this.props.onFormularioNombreChange(event.target.value);
    }

    handleChangeEdad(event) {
      this.props.onFormularioEdadChange(event.target.value);
    }
  
    render() {
      const nombre = this.props.nombre;
      const edad = this.props.edad;

      console.log('nombre: '+ nombre);
      console.log('edad: '+ edad);
      return (
        <form>
          <label>
            Nombre: <input name="nombre" type="text" value={this.props.nombre} onChange={this.handleChangeNombre}/>
          </label>
          <label>
            Edad: <input name="edad" type="number" value={this.props.edad} onChange={this.handleChangeEdad}/>    
          </label>
        </form>
      );
    }
  }

  export default Formulario;
