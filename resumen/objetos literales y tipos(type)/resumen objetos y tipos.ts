//OBJETOS BASICOS

let flash ={

nombre: "Barry",
edad:24,
poderes:["correr","laser"]

};

//TIPO OBJETOS

let fllash:{nombre:string,edad:number,poderes:string[]} ={
    nombre:"algo",
    edad:10,
    poderes:["algo","algo"]
}

//METODOS DENTRO DE OBJETOS

let superman:{nombre:string,edad:number,poderes:string[],getNombre:()=>string} = {
    nombre:"algo",
    edad:10,
    poderes:["algo","algo"],
    getNombre(){
        return this.nombre;
    }
};

//TIPOS PERSONALIZADOS

type Heroe ={

    nombre:string,
    edad:number,
    poderes:string[],
    getNombre:()=>string
};

let flashh:Heroe ={
    nombre:"algo",
    edad:24,
    poderes:["algo","algo"],
    getNombre:function(){
        return this.nombre;
    }
};

//MULTIPLES TIPOS PERMITIDOS

type Heroe2={
    nombre:string,
    edad:number
};

let loquesea:string|number|Heroe2;

loquesea="juan";
loquesea = 36;
loquesea = {
    nombre:"algo",
    edad:30
}