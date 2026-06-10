// 1. Crea un array que almacene cinco animales
let myArrAnimals = ["perro","gato","aguila","pez","oso"]
console.log(myArrAnimals)


// 2. Añade dos más. Uno al principio y otro al final
myArrAnimals.unshift("nutria")
myArrAnimals.push("caracol")
console.log(myArrAnimals)


// 3. Elimina el que se encuentra en tercera posición
myArrAnimals.splice(2,1)
console.log(myArrAnimals)

// 4. Crea un set que almacene cinco libros
let mySetBook = new Set(["B1","B2","B3","B4","B5"])
console.log(mySetBook)

// 5. Añade dos más. Uno de ellos repetido
mySetBook.add("B6")
mySetBook.add("B3")
console.log(mySetBook)

// 6. Elimina uno concreto a tu elección
mySetBook.delete("B3")
console.log(mySetBook)

// 7. Crea un mapa que asocie el número del mes a su nombre
let myMapMonth = new Map([
    [1,"Enero"],
    [2,"Febrero"],
    [3,"Marzo"],
    [4,"Abril"],
    [5,"Mayo"],
    [6,"Junio"],
    [7,"Julio"],
    [8,"Agosto"],
    [9,"Septiembre"],
    [10,"Octubre"],
    [11,"Noviembre"],
    [12,"Diciembre"]
])

console.log(myMapMonth)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(myMapMonth.has(5))
console.log(myMapMonth.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
let myArrSummer = ["junio","julio","agosto"]
console.log(myArrSummer)
myMapMonth.set("verano",myArrSummer)
console.log(myMapMonth)


// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let myArrGeneric = ["Hola","Bonjour","Konichiwa","Hola"]
let setSaludo = new Set(myArrGeneric)
myMapMonth.set("saludosSet",setSaludo)
console.log(myMapMonth)