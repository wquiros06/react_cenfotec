import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
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
            <h1>Hola</h1>
            <h2>Son las {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));    
}
setInterval(tick,1000);

serviceWorker.unregister();
