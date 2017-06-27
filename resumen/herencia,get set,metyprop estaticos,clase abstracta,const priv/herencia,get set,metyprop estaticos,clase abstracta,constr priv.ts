//HERENCIA

class Avenger{
    constructor(public nombre:string,public nombreReal:string){

    }
}

class Xmen extends Avenger{
    private atr:string;

    constructor(a:string,b:string,atr:string){
        super(a,b)
        this.atr = "lolo";
    }
}

let ciclope:Xmen = new Xmen("algo","algo","algo");

//GET Y SET 

class Avenger{
    private _nombre:string;

    constructor(nombre?:string){
        this._nombre=nombre;
    }

    get nombre():string{
        if(this._nombre){
            return this._nombre;
        }else{
            return "no tiene ";
        }
    }

    set nombre(nombre:string){
        this._nombre=nombre;
    }
}

let ciclopeObj:Avenger = new Avenger("Ciclope");

//METODOS Y PROPIEDADES ESATICOS

class Xmen{
    static nombre:string = "algo";

    constructor(){

    }
    static crearXmen(){
        return new Xmen();
    }
}
console.log(Xmen.nombre);
let obj:Xmen = Xmen.crearXmen();

//CLASE ABTRACTA

/*
Las clases abstractas son clases de base desde la que se pueden derivar otras clases.
 Ellos no pueden ser instanciadas directamente. A diferencia de una interfaz, 
 una clase abstracta puede contener detalles de implementación para sus miembros.
  La abstract palabra clave se utiliza para definir las clases abstractas, 
  así como los métodos abstractos dentro de una clase abstracta.
  Métodos dentro de una clase abstracta que están marcados como abstracta no contienen una implementación y
   deben ser implementadas en las clases derivadas.
*/
abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {

    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes must call super()
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

let department: Department; // ok to create a reference to an abstract type
department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
department.generateReports(); // error: method doesn't exist on declared abstract type

//CONSTRUCTOR PRIVADO APLICA SINGLETON CREO

class Apocalipsis{
    static instancia:Apocalipsis;

    private constructor(public nombre:string){

    }

    static llamarApocalipsis():Apocalipsis{
        if(Apocalipsis.instancia){
            Apocalipsis.instancia = new Apocalipsis("soy apocalipsis!");
        }
        return Apocalipsis.instancia;
    }
}
let real = Apocalipsis.llamarApocalipsis();

