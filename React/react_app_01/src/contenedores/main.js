import React, { Component } from 'react';
import ListasCondicionales  from '../componentes/listas-condicionales';
//import ListaNumeros from "../componentes/lista-numeros";
//import ListaNombres from "../componentes/lista-texto";
//import NameForm from "../componentes/name-form";
//import EjemploFetch from "../componentes/ejemplo-fetch";
//import ImageContainer from "../Ejemplo_Expo_ContComp/contenedores/imagen-container";
//import Calculator from "../Ejemplo_Expo_ElevarEstado/elevar-estado";
//import ElevarEstadoFormularios from "../Ejemplo_Expo_ElevarEstado/contenedores/elevar-estado-formulario-contenedor";
import Comentarios from "../Practica_Comentarios/containers/Comentarios"
//import Reloj from "../Practica_Reloj/Reloj"
//import RentaContainer from "../Practica_Renta/renta-container"

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
                <Comentarios/>
            </div>
        );
    }
}

export default Main;