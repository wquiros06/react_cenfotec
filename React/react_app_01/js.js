let nombre = "Wen";

//console.log(`hola ${nombre}!`);

var obj = {
    name: 'Carrot',
    details:{
        color:'orange',
        size: 12
    },
    showData: function(){
        console.log(`Name: ${this.name}`);
        console.log(`Size: ${this.details.size}`);
        console.log(`Color: ${this.details.color}`);
    }
};

//obj.showData(); // revisar porque al cambiar showData: function(){ por showData: () =>{ no funciona

//console.log(name);
//console.log(details);

const {name, details} = obj; 
 
const defecto = (a,b=2) =>{
    //console.log(`argumentos: ${arguments.length}`);
    return a*b;
}



let res1 = defecto(3,5);
let res2= defecto(6);

//console.log(`resultado 1: ${res1}`);
//console.log(`resultado 2: ${res2}`);


let func = (a,b,c) => {
    //console.log(`argumentos: ${arguments.length}`);
    return a+b;
}

let res3 = func(1,2);
//console.log(`resultado 3: ${res3}`);


const defecto2 = (a,b=2) => a*b; //se puede omitir el return porque tiene solo una operación

let res4 = defecto2(3,5);
//console.log(`resultado 4: ${res4}`);


//ES5
let arreglo1 = [1,2,3];
let arreglo2 = ['a','b','c'];
let arreglo3 = [...arreglo1, ...arreglo2];

//console.log(`union de contenido de los arreglos ${arreglo3}`);
for (let index = 0; index < arreglo3.length; index++) {
    //console.log(arreglo3[index]);
}

let arregloObj1 = {nombre:"Fulano"};
let arregloObj2 = {apellido:"De tal"};
let arregloObj3 = {...arregloObj1, ...arregloObj2};
//console.log(arregloObj3);


//ES6
let arreglo4= [1,2,3];
let func2 = (a,b,c) => a+b+c;
//console.log(func2(...arreglo4));


//Callback
let arreglo = [];
arreglo3.forEach(
    (a)=>{
  //  console.log(a);
    arreglo.push(a*2);
    }
);

arreglo.forEach(
    (a) => {
       // console.log(a);
    }
);

var doubles = arreglo3.map((a) =>  a*2);
//console.log(`doubles: ${doubles}`);

const soloNumeros1 = arreglo3.filter(item =>  typeof item  === "number");
console.log(`solo numeros op1: ${soloNumeros1}`);

const soloNumeros2 = arreglo3.filter(item => !isNaN(item));
console.log(`solo numeros op2: ${soloNumeros2}`);