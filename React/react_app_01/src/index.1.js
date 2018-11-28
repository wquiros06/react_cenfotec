import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App1 from './App';
import Comentarios from './Comentarios';
import * as serviceWorker from './serviceWorker';


//ReactDOM.render(<App1 />, document.getElementById('root'));
//const nombre = "Fulanito"

//ES5
/*
function formatName(usuario){
    return usuario.nombre + ' '+usuario.apellido; 
}
*/

//ES6
const formatName = (usuario) => `${usuario.nombre} ${usuario.apellido}`;
const user= {
    nombre: 'Wendy',
    apellido: "Quirós"
};


//const element = <h1>Hola, {formatName(user)}!</h1>
let bienvenida = usuario => {
    if (usuario){
        return <h1>Hola, {formatName(usuario)}!</h1>
    }

    return <h1>Hola extraño</h1>
}

//muestra el usuario
//ReactDOM.render(bienvenida(user), document.getElementById('root'));

//muestra el extraño 
//ReactDOM.render(bienvenida(), document.getElementById('root'));


//Función con operador ternario
const bienvenida2 = usuario => 
usuario ? <h1>Hola, {formatName(usuario)}!</h1> :
<>
<h1>Hola extraño</h1>
<p>Por favor ingrese al sistema</p>
</>
;

//Usando la función con operador ternario
//ReactDOM.render(bienvenida2(), document.getElementById('root'));

function tick() {
    const element =(
        <div>
            <h1>Hola!!!</h1>
            <h2>Son las {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));    
}
//setInterval(tick,1000);

function Welcome(props){
    return <h1>Hola, {props.name}</h1>;
}

function App(){
    return(
        <div>
            <Welcome name="Sara"/>
            <Welcome name="Cahal"/>
            <Welcome name="Edite"/>
        </div>
    );
}


//Mostrar un componente
/*ReactDOM.render(
    <App/>,
    document.getElementById("root")
)*/


const usuarios =[
    {
        nombre: "Andrews Morgan",
        salario: "2160292.27",
        renta: "144193.84"
    },
    {
        nombre: "Autumn Holland",
        salario: "1218732.48",
        renta: "2959.87"
    }
]

function UsuarioActivoConRenta(props){
    return <div style={{display: 'flex', justifyContent: 'space-around', flexDirection:"row"}}>
                <div> Nombre: {props.nombre} </div>
                <div> Salario en colones: {props.salario} </div>
                <div> Renta: {props.renta} </div>
           </div>;
}

function MostrarUsuarios(props){
    return(
        <>
            <h1>Rentas</h1>
            {props.data.map(usuario => {
                return(
                    <UsuarioActivoConRenta
                        Key={usuario.nombre}
                        nombre={usuario.nombre}
                        salario={usuario.salario}
                        renta={usuario.renta} 
                    />
                );
            })}            
        </>
    )
}

/*
ReactDOM.render(
    <MostrarUsuarios data={usuarios}/>,
    document.getElementById("root")
)
*/


//Practica 2
ReactDOM.render(<Comentarios />, document.getElementById('root'));

serviceWorker.unregister();
