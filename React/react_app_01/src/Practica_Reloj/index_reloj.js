import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Comentarios from './Comentarios'; //Practica 2
import * as serviceWorker from '../serviceWorker';
import Reloj from '../Practica_Reloj/Reloj';

//Versión 1 de reloj
/*
function tick() {
    const element =(
        <div>
            <h1>Hola!!!</h1>
            <h2>Son las {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));    
}
*/
//setInterval(tick,1000);


//Versión 2 de reloj
/*
function Clock(props){
    return(
        <div>
            <h1>Holaaa!!</h1>
            <h2>Son las {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

function tick2(){
    ReactDOM.render(
        <Clock date={new Date()}/>,
        document.getElementById('root'));
}
*/

//setInterval(tick2,1000);


//Versiòn 3 de reloj
/*
class Reloj extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    render(){
        return (
            <div>
                <h1>Hola.</h1>
                <h2>Son las {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}
*/
/*
function tick3(){
    ReactDOM.render(
        <Reloj/>,
         document.getElementById('root'));
}
setInterval(tick3,1000);
*/

//Versión con estados
ReactDOM.render(
    <Reloj/>,
     document.getElementById('root'));

serviceWorker.unregister();
