//INTERFACES

interface Xmen{

    nombre:string,
    poder:string, // podria tener opcionales ej poder?:string
    regenerar(apellido:string):void;
}

function enviarMision(xmen:Xmen){
    console.log("enviando a"+xmen.nombre);
}

let xmen:Xmen = {
    nombre:"james",
    poder:"regeneracion",
    regenerar(apellido:string){
        console.log("se regenero");
    }
}

enviarMision(xmen);

//INTERFACES EN LAS CLASES

interface Xmenn{
    nombre:string,
    poder?:string,
    regenerar(nombreReal:string):void;
}

class Mutante implements Xmenn{
    nombre:string;
    regenerar(nombre:string){
        console.log("Hola"+nombre);
    }
}
let objMutante = new Mutante();

objMutante.regenerar("asd");

// INTERFACES A LAS FUNCIONES 

interface DosNumerosFunc{
    (num1:number,num2:number):number
}
let sumar:DosNumerosFunc;

sumar = function (a:number,b:number):number{
    return a+b;
}

let restar:DosNumerosFunc;

restar = function(a:number,b:number):number{
    return a-b;
}