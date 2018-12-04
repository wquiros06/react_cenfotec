import React, { Component } from 'react';
import '../comentarios.css';
import data from '../practica2.json';
import CargarAvatar from "../componentes/avatar-componente";
import CargarComentario from "../componentes/comentario-componente"

class Comentarios extends Component{
    render() {
        return(
                <div>
                    {
                        data.map((comentario,i) =>{
                            return(
                                <div Key={i} className="tarjeta-comentario">
                                    <CargarAvatar 
                                    Usuario={comentario.author.name}
                                    AvatarURL={comentario.author.avatarUrl}
                                    />
                                    <CargarComentario 
                                    Titulo={comentario.title}
                                    Fecha={comentario.date}
                                    Comentario={comentario.text}
                                    Autor={comentario.author.name}
                                    />
                                </div>
                            );
                        })
                    }                    
                </div> 
        );
    }
}

/*
function CargarAvatar(props){
    return <div className="contenedor-avatar">
                <div>
                    <img src={props.AvatarURL} alt={props.Usuario} /><br/>
                </div>
                <div className="titulo-avatar">
                    {props.Usuario}
                </div>
            </div>
}
*/

/*
function CargarComentario(props){
    return <div className="contenedor-comentario">                
                <div className="encabezado-comentario">
                    {props.Titulo}
                </div>
                <div className="fechas">
                    {props.Fecha}
                </div>
                <div className="texto-comentario">
                    {props.Comentario}
                </div>
           </div>;
}
*/


export default Comentarios;