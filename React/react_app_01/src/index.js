import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './menu.css';
import * as serviceWorker from './serviceWorker';
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch,
  } from 'react-router-dom'
//import Main from './contenedores/main';
//import App from "./App"
//import Comentarios from "./Practica_Comentarios/contenedores/comentarios-contenedor"
//import Formularios from "./Ejemplo_Expo_ElevarEstado/contenedores/formulario-contenedor"
//import Notfound from './notfound'
import Routing from "./menu"

/*
const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <NavLink exact activeClassName="active" to="/">Inicio</NavLink>
                </li>
                <li>
                    <NavLink actvieClassName="active" to="/comentarios">Comentarios</NavLink>
                </li>
                <li>
                <NavLink actvieClassName="active" to="/formularios">Formularios</NavLink>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/comentarios" component={Comentarios} />
                <Route path="/formularios"  component={Formularios} />
                <Route component={Notfound} />
            </Switch>
        </div>
    </Router>
)
*/

ReactDOM.render(
    Routing,
    document.getElementById('root'));

serviceWorker.unregister();