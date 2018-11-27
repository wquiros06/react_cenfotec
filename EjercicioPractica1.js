let usuarios = require("./practica1.json");
let TC =  require("./TC.json");
let topes = require("./TopesRenta.json");
let usuariosActivos = usuarios.filter(item =>  item.isActive  === true);


usuariosActivos.forEach(
    (e) => {
        e["salaryInColons"] = CalculeSalario(e.salaryInDolars, TC.V);
    }
);

usuariosActivos.forEach(
    (e) => {
        e["rent"] = CalculeRenta(e.salaryInColons);
    }
);

function CalculeSalario(salaryInDolars, TC){
   return parseFloat(salaryInDolars) * parseFloat(TC);
}



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

//Imprime el reporte
usuariosActivos.forEach(
    (e) => {
        console.log(`Nombre: ${e.name.first} ${e.name.last}, salario en colones: ${e.salaryInColons}, monto de renta a rebajar: ${e.rent}`);
    }
);
