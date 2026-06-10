//Strings

let myName = "MAni"
let greeting = "Que lo que, "
let chain = greeting + myName//concatenacion de cadenas de texto
console.log(chain) 

//Longitud
console.log(chain.length)

//Acceso a los caracteres de la cadena 
console.log(chain[0])
console.log(chain[16])//caracter especial
console.log(chain[(chain.length -1)])

//Otras funciones
console.log(chain.toUpperCase()) //todo a mayusculas
console.log(chain.toLowerCase()) //todo a minusculas
console.log(chain.indexOf("mani"))//indice donde a encontrdado el incio de la palabra y si es -1 no la encontrado
console.log(chain.indexOf("MAni"))
console.log(chain.includes("MAni")) //comprueba si la cadena existe 
console.log(chain.slice(0,10)) //Obtener una porcion de la cadena pero excluye el indice final 
console.log(chain.replace("MAni", "haya")) //para remplazar una cadena 

//Template literals (Plantillas literales)

let message = `
Hola
este es un
menaje en 
varias lineas`

console.log(message)

//Interpolacion de vsariables 
console.log(`
    mensaje recibido: 
    ${message} 

    fin del mensaje`)