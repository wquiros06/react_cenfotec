import React, { Component } from 'react';
import './comentarios.css';
import data from './practica2.json';

/*let comentarios = require("./practica2.json");

comentarios.forEach(
    (c) => {
        console.log(c);
    }
);
*/


class Comentarios extends Component{
    render() {
        return(
            <div className="tarjeta-comentario">
                {
                    data.map(comentario =>{
                        return(
                            <CargarAvatar 
                            Key={comentario.author.avatarUrl}
                            AvatarURL={comentario.author.avatarUrl}
                            />
                        );
                    })
                }

                {
                    data.map(comentario =>{
                        return (
                            <CargarComentario 
                            Key={comentario.title}
                            Titulo={comentario.title}
                            Fecha={comentario.date}
                            Comentario={comentario.text}
                            Autor={comentario.author.name}
                            />
                        );
                    })
                }
            </div>       
        );
    }
}

function CargarAvatar(props){
    return <div>
            <img src={props.AvatarURL} className="comentario-avatar" alt="avatar" /><br/>
            Usuario
           </div>
}

function CargarComentario(props){
    return <div style={{display: 'flex', justifyContent: 'space-around', flexDirection:"row"}}>                
                <div>
                    Titulo: {props.Titulo}
                </div>
                <div>
                    Fecha: {props.Fecha}
                </div>
                <div>
                    {props.Comentario}
                </div>
           </div>;
}


export default Comentarios;