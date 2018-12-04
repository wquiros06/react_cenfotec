import React, { Component } from 'react';
import './comentario.css';

const CargarComentario = (props) => (
    <div className="contenedor-comentario">                
        <div className="encabezado-comentario">
            {props.Titulo}
        </div>
        <div className="fechas">
            {props.Fecha}
        </div>
        <div className="texto-comentario">
            {props.Comentario}
        </div>
    </div>
)

export default CargarComentario;