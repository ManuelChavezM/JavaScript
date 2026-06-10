//Operadores

//Operadores aritmeticos********************************

let a = 5
let b = 10
console.log(a+b)//Suma 
console.log(a-b)//resta
console.log(a*b)//multiplicacion
console.log(a/b)//division

console.log(b%a)//modulo
console.log(a**b)//exponente

let c = 1
c++ //incremento
console.log(c)

c-- // decremento
console.log(c)

//Opradores de asignacion ****************************
let myVariable = 2 //asignacion =
console.log(myVariable)

myVariable +=2 // accede al valor y le suma 
console.log(myVariable)

myVariable +=2
myVariable -=2
myVariable *=2
myVariable /=2
myVariable %=2
myVariable **=2


//Operadores de comparacion *******************
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
console.log(a!=b)
console.log(a!==b)// diferente por valor y tipo 
console.log(a==b)// igualdad por valor 
console.log(a===5)//igualdad por tipo y valor 
console.log(a==="5")// el valor es el mismo pero el tipo no lo es por eso es false 

//truthy values (valores verdaderos)*********************

//Todos los numeros positivos y negativos menos el cero
//Todas las cadenas de texto menos las vacias
// el boolean true


//falsy values (valores falsos)**************************

//0
//0n
//null
//undefined
//NaN
//el boolean false 
//cadenas de texto vacias 


//Operadores logicos********************************

//and (&&)
console.log(5<10 && 15>20)

//or (||)
console.log(5<10 || 15>20)


//not (!)
console.log(5<10 || 15>20 && !(2>20))


//Operadores ternarios***********************************

const isRaining = true
isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")