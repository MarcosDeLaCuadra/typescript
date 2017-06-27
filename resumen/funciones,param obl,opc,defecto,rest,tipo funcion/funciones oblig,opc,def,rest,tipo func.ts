//FUNCIONES

function imprimir():string{
    return "algo";
}
function imprimir2():void{
    console.log("algo");
}

//PARAMETROS OBLIGATORIOS

function nombreCompleto(nombre:string,apellido:string):string{
    return nombre+' '+apellido;
}

//PARAMETROS OPCIONALES

fcuntion nombreCompleto(nombre:string,apellido?:string):string{
    if(apellido)
    return nombre+' '+apellido;
    else
    return nombre;
}

//PARAMETROS POR DEFECTO
// si no ingresa nada toma el valor que tiene por defecto , si ingresa toma el que ingresa
function nombreCompleto(nombre:string,apellido:string,capitalizado:boolean = false):string{
    var cadena:string;
    if(capitalizado)
        cadena= capitalizar(nombre)+ " " +capitalizar(apellido);
    else
    cadena = nombre+ " "+apellido;
    return cadena; 
}

//PARAMETROS REST

function nombreCompleto (nombre:string, ...losDemasParametros:string[]):string{ // no hace falta poner el 1 parametro si quiero
    return nombre+" "+losDemasParametros.join(" ");
}

let superman : string = nombreCompleto("algo","algo","algo","algo");

//TIPO FUNCION

funcion sumar(a:number,b:number):number{
    return a+b;
}
let miFuncion: (x:number,y:number)=>number;

//let resultado:number = miFuncion(2,3);


/*
//TIPO FUNCION

function sum(a: number, b: number): number{
    return a + b;
}
 
let varSum: (a: number, b: number)=> number=
function(a: number, b: number): number
{
    return a + b;
}
 
console.log(sum(1, 5));
console.log(varSum(1, 5));

*/