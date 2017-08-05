/*Crea un objeto que represente a un perro, el cual debe tener las siguientes propiedades: nombre, raza, añoNacimiento, sexo.

Define los siguientes métodos para el perro:

Ladrar(El cual debe imprimir un texto).
Comer(El cual debe imprimir un texto).
getEdad(El cual debe imprimir la edad según la añoNacimiento).
getNombreYRaza(Que imprima las propiedades nombre y raza).
Requerimientos del código:

Usar una función constructora .
La función debe recibir el nombre, la raza, el añoNacimiento y el sexo como parametros .

Ejemplo

 var perro1 = new Perro("Toby", "rottweiler", 2010, "Macho");

 var edad = perro1.getEdad();
// debe devolver 7 .


*/
(function(){
    'Use strict'
    debugger
    var perro1= new Perro ("Sally","Chihuahua",2014,"Hembra");
    //var edad = perro1.getEdad();

    perro1.ladrar();
    perro1.comer();
   var edad= perro1.getEdad();
    perro1.NombreyRaza();

function Perro(nombre,raza,añoNacimiento,sexo){
    this.nombre= nombre;
    this.raza= raza;
    this.añoNacimiento= añoNacimiento;
    this.sexo= sexo;
    //ladrar
    this.ladrar= function(){
        console.log("El perro esta ladrando");
    }
    //comer
    this.comer= function(){
        console.log("El perro esta comiendo");
    }
    //getEdad
    this.getEdad= function(){
        console.log("tiene "+(2017-this.añoNacimiento)+" anos de edad");
    }
    //getNombreyRaza
    this.NombreyRaza= function(){
        console.log("Su nombre es "+this.nombre+" raza "+this.raza);
    }
}
})();

