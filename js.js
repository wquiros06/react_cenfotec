let nombre = "Wen";

//console.log(`hola ${nombre}!`);

var obj = {
    name: 'Carrot',
    details:{
        color:'orange',
        size: 12
    },
    showData: () =>{
        console.log(`Name: ${this.name}`);
        console.log(`Size: ${this.details.size}`);
        console.log(`Color: ${this.details.color}`);
    }
};

obj.showData();

const {name, details} = obj;


//console.log(name);
//console.log(details);