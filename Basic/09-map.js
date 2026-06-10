//Map
//es una coleccion de elementos y cada una tiene un key y un value

//Declaracion
let myMap = new Map()
console.log(myMap)

//Inicializacion
myMap = new Map([
    ["name","Mani"],
    ["age",13],
    ["surname","snow"],
    ["car","miniQPs"]
])

console.log(myMap)

//Metodos y propiedades 
//no puede haber repetidos en clave pero si en valor

//Set para agregar y modificar elementos 
myMap.set("alias","Hayabusha") //Agregar 
myMap.set("name","Haya") // modificar
console.log(myMap)

//get para obtener valores
 console.log(myMap.get("name"))

 //has para comprobar Si una clave existe o no
 console.log(myMap.has("name"))
 console.log(myMap.has("money"))

//keys nos retorna las llaves del mapa y values para los valores
console.log(myMap.keys())
console.log(myMap.values())

//size para el tamaño
console.log(myMap.size)

//entries para devolver todas las claves y valores
console.log(myMap.entries())

// delete
myMap.delete("alias")
console.log(myMap)

//clear 
myMap.clear()
console.log(myMap)