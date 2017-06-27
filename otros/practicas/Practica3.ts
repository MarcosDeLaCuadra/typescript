
// Objetos

type  auto = {carroceria:string,modelo:string,antibalas:boolean,pasajeros:number, disparar?:()=>void};

var batimovil = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

type bumblebe = {carroceria:string,modelo:string,antibalas:boolean,pasajeros:number,disparar?:()=>void};
var bumblebee = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};

type villano = {nombre:string,edad:number,mutante:boolean};
// Villanos debe de ser un arreglo de objetos personalizados
var villanos:villano[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type ch = {poder:string,estatura:number};
type apo = {lider:boolean,miembros:string[]};

var charles:ch = {
  poder:"psiquico",
  estatura: 1.78
};

var apocalipsis:apo = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: ch | apo;

mystique = charles;
mystique = apocalipsis;
