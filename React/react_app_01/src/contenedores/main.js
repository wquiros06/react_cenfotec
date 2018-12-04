import React, { Component } from 'react';
import ListasCondicionales  from '../componentes/listas-condicionales';
//import ListaNumeros from "../componentes/lista-numeros";
//import ListaNombres from "../componentes/lista-texto";
//import NameForm from "../componentes/name-form";
//import EjemploFetch from "../componentes/ejemplo-fetch";
//import ImageContainer from "../Ejemplo_Expo_ContComp/contenedores/imagen-container";
//import Calculator from "../Ejemplo_Expo_ElevarEstado/elevar-estado";
import ElevarEstadoFormularios from "../Ejemplo_Expo_ElevarEstado/elevar-estado-formulario";

/*
 <ListasCondicionales isLoggedIn={true} nombre="Wen"/>
 <ListaNumeros numeros={[1,2,3,4,5,6]}/>
<ListaNombres nombres={["Fulano", "Mengano"]}/>
<NameForm/>
<EjemploFetch/>
*/
class Main extends Component{
    render(){
        return(
            <div>
                <ElevarEstadoFormularios />
            </div>
        );
    }
}

export default Main;