// set

//Declaracion
let mySet = new Set()

console.log(mySet)

//inicializacion
mySet = new Set(["Dom","Hannah","Snow",13,"konbawa"])

console.log(mySet)

//Metodos comunes 
    //add  y delete

mySet.add("Hola")

console.log(mySet)

mySet.delete("Hola") // se le tiene que especificar el valor que queremos borrar

console.log(mySet)


    //has para comprobar si existe un elemento 
console.log(mySet.has("Dom"))
console.log(mySet.has("domi"))

    //size para ver su cantidad de elementos
console.log(mySet.size)

    //Convertir un Set a un Array

let myArr = Array.from(mySet)
console.log(myArr)

    //Convertir de un Array a un Set

    mySet = new Set(myArr)
console.log(mySet)


//La diferencia entre una Array y un Set es que el Set no adminte duplicados y el array si pero el Set es sensible a elementos con mayus y minus 

mySet.add(1)
mySet.add(1)
mySet.add(1)
console.log(mySet)