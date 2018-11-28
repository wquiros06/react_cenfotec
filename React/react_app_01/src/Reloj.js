import React, { Component } from 'react';
import './reloj.css';

//Ejemplo de Estados
class Reloj extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            mostrar: true
        };
        this.handleClick = this.handleClick.bind(this);
        this.mostrar = this.mostrar.bind(this);
    }

    handleClick(){
        this.setState({
            mostrar: false   
        });
    }

    mostrar(){
        this.setState({
            mostrar: true   
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
                <img src="https://cdn1.iconfinder.com/data/icons/photos-set/24/5-secound-128.png" className="reloj-img" alt="reloj" /><br/>
                </h2>
                
                <button onClick={this.handleClick}>Ocultar</button>

                <button onClick={this.mostrar}>Mostrar</button>
            </div>
        );
    }
}

export default Reloj;
