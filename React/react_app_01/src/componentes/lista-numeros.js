import React, { Component } from 'react';

//const numeros = [1,2,3,4,5];

function ListItem(props){
    return <li>{props.value}</li>
}

function Lista(props){
    const numeros = props.numeros;
    return(
        <ul>
            {numeros.map((numero) =>
                <ListItem key={numero.toString()}
                          value={numero}/>
            )}
        </ul>
    );
}
//const listaItem = numeros.map(numero => <li>{numero}</li>)

class ListaNumeros extends Component{
    render(){
        return(
           <Lista numeros={this.props.numeros}/>
        );
    }
}

export default ListaNumeros;