import React, { Component } from 'react';
import Select from 'react-select'

import '../formulario.css';

class NameForm extends Component{
    constructor(props){
        super(props);
        this.state={nombre:'',
                    ensayo: '',
                    fruta: 'coconut',
                    selectedOption: {value:"coconut", label:"coconut"}
                };

        this.handleChangeInputName = this.handleChangeInputName.bind(this);
        this.handleChangeTextAreaEssay = this.handleChangeTextAreaEssay.bind(this);
        this.handleChangeSelectFrutas = this.handleChangeSelectFrutas.bind(this);
        this.handleMultipleInput = this.handleMultipleInput.bind(this);
        
        this.handleSelect = this.handleSelect.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

//ES6
/*
handleChange = (event) => {
    this.state({value: event.target.value});
}
*/
    
    //Con estas funciones se tiene que definir el bind en el constructor
    handleChangeInputName(event){
        this.setState({nombre: event.target.value});
        console.log("input: " + event.target.value);
    }

    handleChangeTextAreaEssay(event){
        this.setState({ensayo: event.target.value});
        console.log("text area: " + event.target.value);
    }

    handleChangeSelectFrutas(event){
        this.setState({fruta: event.target.value});
        console.log("select: " + event.target.value);
    }


    handleMultipleInput(event){
       const target = event.target;
       const value = target.type === 'checkbox' ? target.checked : event.value;
       const name = target.name;

        this.setState({
            [name]:value
        });
    }

    handleSelect(selectedOption){
        this.setState({selectedOption: selectedOption});
    }

    handleSubmit(event){
        alert('se envió un nombre: ' + this.state.nombre);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nombre:<br/>
                    <input type="text" value={this.state.nombre} onChange={this.handleChangeInputName}/>
                </label>

                <label>
                    Ensayo: <textarea type="text" value={this.state.ensayo} onChange={this.handleChangeTextAreaEssay}/>
                </label>

                <label>
                    Seleccione:<br/>
                    <Select 
                        onChange={this.handleSelect}
                        value={this.state.selectedOption}
                        options={[{value:"grapefruits", label:"grapefruits"},
                                      {value:"lime", label:"lime"},
                                      {value:"coconut", label:"coconut"},
                                      {value:"mango", label:"mango"}]} />
                </label>

                <label>
                    Is going: <input
                        name="isGoing"
                        type="checkbox"
                        chacked={this.state.idGoing}
                        onChange={this.handleMultipleInput}
                    />
                </label>

                <label>
                    Number of guests:<br/>
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleMultipleInput}
                    />    
                </label>
                <input type="submit" value="Enviar"/>
            </form>            
        );
    }
}

export default NameForm;