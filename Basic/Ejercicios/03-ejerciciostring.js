// Ejercicios de Strings

// 1. Concatena dos cadenas de texto
let myName = "Mani "
let surname = "snow"
let chain = myName + surname
console.log(chain)


// 2. Muestra la longitud de una cadena de texto
console.log("La longitud de la cadena es: " + chain.length)

// 3. Muestra el primer y último carácter de un string
console.log("primer caracter: " + chain[0])
console.log("ultimo caracter: " + chain[8])

// 4. Convierte a mayúsculas y minúsculas un string
console.log("cadena mayus: " + chain.toUpperCase())
console.log("cadena en minus: " + chain.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let message = `este 
es un 
mensaje 
en varias lineas`
console.log(message)

// 6. Interpola el valor de una variable en un string
console.log(`Este mensaje se autodestruira en 5 segundos: ${message} `)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(chain.replace(" ","-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(chain.includes("snow"))

// 9. Comprueba si dos strings son iguales
console.log(chain == message)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(chain.length == message.length)
