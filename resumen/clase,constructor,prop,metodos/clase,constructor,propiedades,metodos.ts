//CLASES

class Avenger{

    nombre:string;
    puedePelear:boolean;
    peleasGanadas:number;

}

let antman:Avenger = new Avenger();


//CONSTRUCTOR

class Avenger{

    nombre:string;
    equipo:string;
   
    constructor(nombre:string,equipo:string){
        this.nombre = nombre;
        this.equipo = equipo;
    }

}

let obj:Avenger = new Avenger ("algo","algo");

//PROPIEDADES


class Avenger{

   public nombre:string;
   private  equipo:string;
   protected otra:string;
   
    constructor(nombre:strig,equipo:string,otra:string){
        this.nombre = nombre;
        this.equipo = equipo;
        this.otra = otra;
    }

}
let obj:Avenger = new Avenger ("algo","algo","algo");
obj.nombre = "asad";ok
obj.equipo = "asad";no
obj.otra = "asad";no


//METODOS
//tmb pueden ser publicos,privados o protegidos

class Avenger{

    nombre:string;
    equipo:string;
   
    constructor(nombre:string,equipo:string){
        this.nombre = nombre;
        this.equipo = equipo;
    }

    public mostrar():string{
        return `${this.nombre},${this.equipo}`; // ojo `
    }
}

let obj:Avenger = new Avenger ("algo","algo");

obj.mostrar(); // asi se llama con .