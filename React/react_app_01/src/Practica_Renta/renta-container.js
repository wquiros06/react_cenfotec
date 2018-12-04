import React, { Component } from 'react';
import UsuariosRenta from "../Practica_Renta/usuarios-renta"

const usuarios = require("./practica1.json");
const TC =  require("./TC.json");
const topes = require("./TopesRenta.json");
let usuariosActivos = usuarios.filter(item =>  item.isActive  === true);

usuariosActivos.forEach(
    (e) => {
        e["salaryInColons"] = CalculeSalario(e.salaryInDolars, TC.V);
    }
);

function CalculeSalario(salaryInDolars, TC){
    return parseFloat(salaryInDolars) * parseFloat(TC);
 }

usuariosActivos.forEach(
    (e) => {
        e["rent"] = CalculeRenta(e.salaryInColons);
    }
);


function CalculeRenta(salaryInColons){
    let renta = 0;
    topes.forEach(
        (t) =>{
            if (parseFloat(salaryInColons) >= parseFloat(t.piso) && parseFloat(salaryInColons) <= parseFloat(t.techo)){
                renta = calculeMontoDeRenta(salaryInColons, t.piso, t.porcentaje);
            }
        }
    );  
    return renta;
}

function calculeMontoDeRenta(salaryInColons, piso, porcentaje){
    return (salaryInColons - piso) * porcentaje;
}

class RentaContainer extends Component{
    render(){
        return(
            <div>
                {
                    usuariosActivos.map((usuario,i) =>{
                        return(
                            <div Key={i}>
                                <UsuariosRenta 
                                    key={i}
                                    nombre={usuario.nombre}
                                    salario={usuario.salario}
                                    renta={usuario.ren}
                                />
                            </div>
                        );
                    })
                }  
            </div>
        );
    }
}

export default RentaContainer;