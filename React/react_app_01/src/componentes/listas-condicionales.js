import React, { Component } from 'react';

const UserGreeting = (props) => <h1>Bienvenido {props.nombre}</h1>
const GuestGreeting = () => <h1>Invitado, por favor ingrese a su cuenta</h1>

/*
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn){
        return <UserGreeting nombre={props.name}/>
    }
    return <GuestGreeting/>
}
*/

class ListasCondicionales extends Component{
    render(){
        const isLoggedIn = this.props.isLoggedIn;

        return(
            isLoggedIn ? <UserGreeting nombre={this.props.nombre}/> : <GuestGreeting/>
        );
    }
}

export default ListasCondicionales;