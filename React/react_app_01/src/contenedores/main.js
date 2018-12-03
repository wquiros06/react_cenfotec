import React, { Component } from 'react';
import ListasCondicionales  from '../componentes/listas-condicionales';
//import ListaNumeros from "../componentes/lista-numeros";
//import ListaNombres from "../componentes/lista-texto";
import NameForm from "../componentes/name-form";

/*
 <ListaNumeros numeros={[1,2,3,4,5,6]}/>
                <ListaNombres nombres={["Fulano", "Mengano"]}/>
*/
class Main extends Component{
    render(){
        return(
            <div>
                <ListasCondicionales isLoggedIn={true} nombre="Wen"/>
               
                <NameForm/>
            </div>
        );
    }
}

export default Main;