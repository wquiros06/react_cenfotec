import React, { Component } from 'react';
import './avatar.css';

const CargarAvatar = (props) => (
    <div className="contenedor-avatar">
        <div>
            <img src={props.AvatarURL} alt={props.Usuario} /><br/>
        </div>
        <div className="titulo-avatar">
            {props.Usuario}
        </div>
    </div>
)

export default CargarAvatar;