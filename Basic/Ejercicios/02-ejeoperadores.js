//Ejercicios de operadores

// 1. Crea una variable para cada operación aritmética

let a = 1
let b = 10

let suma = a + b
let resta = b - a
let multiplicacion = a * b
let division = b / a
let modulo = b % a
let exponente = a**b
let incremento = a++
let decremento = a--



// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let asigVar01 = a
asigVar01 += 2
asigVar01 -= 2
asigVar01 *= 2
asigVar01 /= 2
asigVar01 %= 2
asigVar01 **=2



// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(1<10)
console.log(10>1)
console.log(1!=10)
console.log(1==1)
console.log(1===1)


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(10<10)
console.log(10>10)
console.log(10!=10)
console.log(1==10)
console.log(1===10)


// 5. Utiliza el operador lógico and

console.log(1<10 && 10>1)


// 6. Utiliza el operador lógico or

console.log(1==1 || 10!=10)

// 7. Combina ambos operadores lógicos
console.log(1<10 && 10>1 && 1==1 || 10!=10)

// 8. Añade alguna negación
console.log(1<10 && 10>1 && 1==1 || !(10!=10))

// 9. Utiliza el operador ternario
const isSunny = true
isSunny ? console.log("Quiero un helado") : console.log("Quiero una cobija")

// 10. Combina operadores aritméticos, de comparáción y lógicas
let z = 1
let k = 0

console.log((1+4)>(100-99) && !("a"<"c") || ((z+=2) > (k-=14)))