import React, { Component } from 'react';

class EjemploFetch extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            cargado: false,
            elementos: []
        }
    }

    componentDidMount(){
        fetch("http://scratchya.com.ar/vue/datos.php")
            .then(respuesta => respuesta.json())
            .then(
                resultado => {
                    console.log(resultado);
                    this.setState({
                        cargado: true,
                        elementos: resultado
                    });                
            },

            error => {
                this.setState({
                    cargado: true,
                    error
                });
            }
            );
        }


        render(){
            const {error, cargado, elementos} = this.state;
            if(error){
                return <div>Error: {error.message}</div>
            }else if(!cargado){
                return <div>Cargando...</div>
            }else{
                return(
                    <ul>
                        {elementos.map(item => (
                            <li key={item.codigo}>
                                {item.descripcion}: {item.precio}
                            </li>
                        ))}
                    </ul>
                );
            }
        }
    }

    export default EjemploFetch;