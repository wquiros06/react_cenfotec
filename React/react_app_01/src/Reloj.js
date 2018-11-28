import React, { Component } from 'react';
import './reloj.css';
import Mensaje from './Mensajes';

//Ejemplo de Estados
class Reloj extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            mostrar: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            mostrar: this.state.mostrar ? false : true   
        });
    }

    componentDidMount(){
        console.log("componentDidMount");
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        });
        console.log(this.state.date.toLocaleTimeString());
    } 

    render(){
        return (
            <div>
                <h1>Hola.</h1>
                <h2>Son las {this.state.date.toLocaleTimeString()}
                </h2>
                {this.state.mostrar ? <><img src="https://cdn1.iconfinder.com/data/icons/photos-set/24/5-secound-128.png" className="reloj-img" alt="reloj" /><Mensaje mensaje="con relojito"/></>: <Mensaje mensaje="sin relojito"/>}                    
                <button onClick={this.handleClick}>
                    {this.state.mostrar ? "Ocultar":"Mostrar"}
                </button>

            </div>
        );
    }
}

export default Reloj;
