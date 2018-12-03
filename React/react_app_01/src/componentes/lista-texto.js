import React, { Component } from 'react';

//const nombres = ["Fulano", "Sutano", "Mengano"];

function ListItem(props){
    return <li>{props.value}</li>
}

function Lista(props){
    const nombres = props.nombres;
    return(
        <ul>
            {nombres.map((nombre) =>
                <ListItem key={nombre.toString()}
                          value={nombre}/>
            )}
        </ul>
    );
}

class ListaNombres extends Component{
    render(){
        return(
            <Lista nombres={this.props.nombres}/>
        );
    }
}

export default ListaNombres;