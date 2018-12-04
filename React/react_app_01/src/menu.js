import React, { Component } from 'react';
import './menu.css';
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch,
  } from 'react-router-dom'
import App from "./App"
import Comentarios from "./Practica_Comentarios/contenedores/comentarios-contenedor"
import Formularios from "./Ejemplo_Expo_ElevarEstado/contenedores/formulario-contenedor"
import Notfound from './notfound'


const Routing = (
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

export default Routing;
